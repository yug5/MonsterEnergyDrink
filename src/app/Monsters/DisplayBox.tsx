"use client"

import React, { useRef } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

/**
 * A wireframe/glass display box that fades in during the finale section.
 * scrollProgress > 0.85 triggers the reveal.
 */
export function DisplayBox({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>
}) {
  const groupRef = useRef<THREE.Group>(null)
  const glassRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!groupRef.current || !glassRef.current) return
    const p = scrollProgress.current

    // Fade in from p=0.82 to p=1.0
    const t = Math.max(0, Math.min(1, (p - 0.82) / 0.18))
    groupRef.current.visible = t > 0.01

    // Animate scale from 0 → 1 (spring feel via lerp)
    const targetScale = t
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    )

    // Slow rotation of the box itself during finale
    if (t > 0.5) {
      groupRef.current.rotation.y += 0.003
    }

    // Glass opacity
    const mat = glassRef.current.material as THREE.MeshStandardMaterial
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, t * 0.18, 0.05)
  })

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} visible={false}>
      {/* Glass walls */}
      <mesh ref={glassRef}>
        <boxGeometry args={[1.4, 2.6, 1.4]} />
        <meshStandardMaterial
          color="#00ff00"
          transparent
          opacity={0}
          side={THREE.BackSide}
          roughness={0.05}
          metalness={0.1}
        />
      </mesh>

      {/* Wireframe neon edges */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.4, 2.6, 1.4)]} />
        <lineBasicMaterial color="#00ff00" linewidth={2} />
      </lineSegments>

      {/* Floor plate */}
      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial
          color="#001100"
          transparent
          opacity={0.9}
          roughness={0.8}
        />
      </mesh>

      {/* Corner accent lights */}
      {[
        [-0.7, 1.3, -0.7],
        [0.7, 1.3, -0.7],
        [-0.7, 1.3, 0.7],
        [0.7, 1.3, 0.7],
      ].map((pos, i) => (
        <pointLight
          key={i}
          position={pos as [number, number, number]}
          color="#00ff00"
          intensity={0.4}
          distance={2}
        />
      ))}
    </group>
  )
}

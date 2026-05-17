"use client"

import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import gsap from "gsap"

/**
 * Keyframes: scroll progress 0→1 across all sections.
 *
 * Finale (p=1.00) overshoots then settles — simulated via the
 * "magnetic landing" keyframe at p=0.93 (overshoot) before p=1.00 (rest).
 */
const KEYFRAMES = [
  // Hero — centred, upright
  { p: 0.00, pos: [0,    -0.3,  0   ], rot: [0,              0,              0    ], scale: 1.00 },
  // Power — slides right (text left), slight tilt
  { p: 0.25, pos: [1.6,  -0.3,  0   ], rot: [0,   -Math.PI * 0.35,      -0.10   ], scale: 1.00 },
  // Ingredients — moderate close-up, label facing camera
  { p: 0.50, pos: [0,    -0.1,  0.7 ], rot: [0.2,  Math.PI * 0.80,      -0.05   ], scale: 1.15 },
  // Flavours — slides left (text right)
  { p: 0.75, pos: [-1.6, -0.3,  0   ], rot: [0,    Math.PI * 1.35,       0.10   ], scale: 1.00 },
  // Magnetic overshoot — can goes 0.15 units too low before bouncing up
  { p: 0.93, pos: [0,    -0.55, 0   ], rot: [0,    Math.PI * 2.0,        0      ], scale: 0.88 },
  // Finale rest — settles at final position
  { p: 1.00, pos: [0,    -0.3,  0   ], rot: [0,    Math.PI * 2.0,        0      ], scale: 0.92 },
]

function lerpKF(
  a: (typeof KEYFRAMES)[0],
  b: (typeof KEYFRAMES)[0],
  t: number
): { pos: [number, number, number]; rot: [number, number, number]; scale: number } {
  const lerp = (x: number, y: number, t: number) => x + (y - x) * t
  return {
    pos: a.pos.map((v, i) => lerp(v, b.pos[i], t)) as [number, number, number],
    rot: a.rot.map((v, i) => lerp(v, b.rot[i], t)) as [number, number, number],
    scale: lerp(a.scale, b.scale, t),
  }
}

/** Smooth easeInOutCubic */
function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function Monster({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>
}) {
  const { nodes, materials } = useGLTF("/monster_energy_drink.glb")
  const groupRef = useRef<THREE.Group>(null)

  // Internal lerped target — creates momentum / scrub lag
  const smoothed = useRef({ p: 0, x: 0, y: -0.3, z: 0, rx: 0, ry: 0, rz: 0, s: 1 })

  // Drag-to-rotate
  const dragDelta = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })
  const { gl } = useThree()

  // ── Pointer drag ────────────────────────────────────────────────
  useEffect(() => {
    const canvas = gl.domElement

    const onDown = (e: PointerEvent) => {
      isDragging.current = true
      lastPointer.current = { x: e.clientX, y: e.clientY }
      canvas.style.cursor = "grabbing"
    }
    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastPointer.current.x
      const dy = e.clientY - lastPointer.current.y
      dragDelta.current.x += dy * 0.008
      dragDelta.current.y += dx * 0.008
      lastPointer.current = { x: e.clientX, y: e.clientY }
    }
    const onUp = () => {
      isDragging.current = false
      canvas.style.cursor = "grab"
      gsap.to(dragDelta.current, { x: 0, y: 0, duration: 1.4, ease: "elastic.out(1, 0.4)" })
    }

    canvas.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    canvas.style.cursor = "grab"
    return () => {
      canvas.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [gl])

  // ── Per-frame: smooth lerp + idle float + drag ──────────────────
  useFrame((state) => {
    if (!groupRef.current) return

    const raw = scrollProgress.current

    // ── Smooth follow: lerp internal progress toward raw (scrub feel)
    const lerpSpeed = 0.045  // lower = more lag / momentum
    smoothed.current.p += (raw - smoothed.current.p) * lerpSpeed

    const p = smoothed.current.p

    // Find surrounding keyframes
    let from = KEYFRAMES[0]
    let to = KEYFRAMES[KEYFRAMES.length - 1]
    for (let i = 0; i < KEYFRAMES.length - 1; i++) {
      if (p >= KEYFRAMES[i].p && p <= KEYFRAMES[i + 1].p) {
        from = KEYFRAMES[i]
        to = KEYFRAMES[i + 1]
        break
      }
    }

    const span = to.p - from.p
    const rawT = span === 0 ? 0 : (p - from.p) / span
    const t = easeInOut(Math.max(0, Math.min(1, rawT)))
    const { pos, rot, scale } = lerpKF(from, to, t)

    // ── Idle float — sin wave on Y, gentle yaw oscillation ─────────
    const time = state.clock.elapsedTime
    const floatY  = Math.sin(time * 0.9)  * 0.06
    const floatRZ = Math.sin(time * 0.6)  * 0.012   // subtle roll
    const floatRY = Math.sin(time * 0.4)  * 0.008   // gentle yaw sway

    groupRef.current.position.set(pos[0], pos[1] + floatY, pos[2])
    groupRef.current.rotation.set(
      rot[0] + dragDelta.current.x,
      rot[1] + dragDelta.current.y + floatRY,
      rot[2] + floatRZ
    )
    groupRef.current.scale.setScalar(scale)
  })

  return (
    <group ref={groupRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Object_2 as THREE.Mesh).geometry}
        material={materials.initialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.7, 0.7, 0.7]}
      />
    </group>
  )
}

useGLTF.preload("/monster_energy_drink.glb")
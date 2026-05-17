"use client"

import React, { useRef } from "react"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import { Monster } from "../Model/monster"

import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

function Scene({
    scrollProgress,
}: {
    scrollProgress: React.MutableRefObject<number>
}) {
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

    useFrame(() => {
        if (!cameraRef.current) return
        cameraRef.current.lookAt(0, 1, 0)
    })

    return (
        <>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 1.5, 5.5]}
                fov={45}
                near={0.1}
                far={10000}
            />

            {/* Ambient + key lights */}
            <ambientLight intensity={0.2} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={1.5}
                color="#ffffff"
                castShadow
            />
            {/* Monster-green rim light */}
            <pointLight position={[-3, 2, -2]} color="#00ff00" intensity={2} distance={8} />
            <pointLight position={[3, -1, 2]} color="#00cc44" intensity={1} distance={6} />
            {/* Subtle blue fill */}
            <pointLight position={[0, 5, -3]} color="#0044ff" intensity={0.5} distance={10} />

            <Environment preset="night" />

            <Monster scrollProgress={scrollProgress} />
        </>
    )
}

export default Scene
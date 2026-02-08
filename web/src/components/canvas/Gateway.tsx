"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function Gateway() {
    const outerRef = useRef<THREE.Mesh>(null);
    const innerRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (outerRef.current) {
            outerRef.current.rotation.y = t * 0.05;
            outerRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
        }

        if (innerRef.current) {
            innerRef.current.rotation.x = -t * 0.1;
            innerRef.current.rotation.y = t * 0.15;
        }
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.2, 0.2]}
        >
            <group scale={1.8}>
                {/* Outer Shell: Polished Obsidian Shards */}
                <mesh ref={outerRef} castShadow receiveShadow>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial
                        color="#0a0a0a"
                        roughness={0.1}
                        metalness={0.9}
                        flatShading={true}
                        envMapIntensity={1}
                    />
                </mesh>

                {/* Inner Core: Glowing Wireframe */}
                <mesh ref={innerRef} scale={0.7}>
                    <icosahedronGeometry args={[1.2, 1]} />
                    <meshBasicMaterial
                        color="#ffffff"
                        wireframe={true}
                        transparent={true}
                        opacity={0.8}
                    />
                </mesh>

                {/* Core Glow Effect */}
                <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" distance={5} decay={2} />
            </group>
        </Float>
    );
}

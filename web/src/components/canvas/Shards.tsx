"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";


function Shard({ position, rotation, scale, index }: any) {
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    // Random offset for this shard's movement
    const timeOffset = useMemo(() => Math.random() * 100, []);
    const rotSpeed = useMemo(() => 0.1 + Math.random() * 0.2, []);

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.getElapsedTime();

        // Antigravity Bobbing
        mesh.current.position.y = position[1] + Math.sin(t * 0.4 + timeOffset) * 0.3;
        mesh.current.rotation.x = rotation[0] + Math.cos(t * rotSpeed + timeOffset) * 0.15;
        mesh.current.rotation.z = rotation[2] + Math.sin(t * rotSpeed + timeOffset) * 0.15;

        // Scroll-based dispersion
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        const scrollProgress = Math.min(scrollY / (typeof window !== 'undefined' ? window.innerHeight : 1000), 1.5);

        // Disperse logic
        const direction = new THREE.Vector3(position[0], position[1], position[2]).normalize();
        const disperse = direction.multiplyScalar(scrollProgress * 15);

        mesh.current.position.x = position[0] + disperse.x;
        mesh.current.position.z = position[2] + disperse.z + scrollProgress * 5;
    });

    return (
        <group>
            <mesh
                ref={mesh}
                position={position}
                rotation={rotation}
                scale={scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <dodecahedronGeometry args={[1, 0]} />
                <dodecahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    roughness={0}
                    metalness={0.1}
                    transmission={1} // pure glass
                    thickness={0.5} // thin glass
                    ior={1.5}
                    color={hovered ? "#00e5cc" : "#a855f7"}
                    transparent
                    opacity={0.6}
                    clearcoat={1}
                />
            </mesh>
        </group>
    );
}

function Particles() {
    const particlesRef = useRef<THREE.Points>(null);
    const count = 300;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (!particlesRef.current) return;
        const t = state.clock.getElapsedTime();
        particlesRef.current.rotation.y = t * 0.05;
        particlesRef.current.rotation.z = t * 0.02;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#00e5cc"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function Shards() {
    const count = 45;

    const shards = useMemo(() => {
        return new Array(count).fill(0).map((_, i) => {
            const r = 5 + Math.random() * 6;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            return {
                position: [x, y, z],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                scale: Math.random() * 0.8 + 0.3,
                index: i,
            };
        });
    }, []);

    return (
        <group>
            {shards.map((props, i) => (
                <Shard key={i} {...props} />
            ))}
            <Particles />
        </group>
    );
}

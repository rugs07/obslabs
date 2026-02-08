import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function DataCenter({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null);
    const towersRef = useRef<THREE.Mesh[]>([]);

    useFrame((state) => {
        towersRef.current.forEach((tower, i) => {
            if (tower) {
                // Pulse scale
                const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.05;
                tower.scale.set(1, scale, 1);

                // Pulse emissive color
                const material = tower.material as THREE.MeshStandardMaterial;
                material.emissiveIntensity = 1 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.5;
            }
        });
    });

    return (
        <group position={position} ref={groupRef}>
            {/* Floor */}
            <mesh position={[0, -2, 0]} receiveShadow>
                <boxGeometry args={[12, 0.5, 12]} />
                <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Server Towers */}
            {Array.from({ length: 9 }).map((_, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const x = (col - 1) * 3;
                const z = (row - 1) * 3;

                // Skip center
                if (row === 1 && col === 1) return null;

                return (
                    <mesh
                        key={i}
                        position={[x, 0, z]}
                        ref={el => { if (el) towersRef.current[i] = el; }}
                    >
                        <boxGeometry args={[1, 4, 1]} />
                        <meshStandardMaterial
                            color="#333"
                            emissive="#00e5cc"
                            emissiveIntensity={0.5}
                            wireframe={false}
                        />
                        {/* Wireframe overlay */}
                        <mesh scale={[1.05, 1.01, 1.05]}>
                            <boxGeometry args={[1, 4, 1]} />
                            <meshBasicMaterial color="#00e5cc" wireframe transparent opacity={0.3} />
                        </mesh>
                    </mesh>
                );
            })}

            {/* Center Data Core */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                    color="#ffd700"
                    emissive="#ffd700"
                    emissiveIntensity={1}
                    wireframe
                />
            </mesh>

            <Text
                position={[0, 4, 0]}
                fontSize={0.6}
                color="#ffd700"
                anchorX="center"
                anchorY="middle"
            >
                DATA CENTER
            </Text>
        </group>
    );
}

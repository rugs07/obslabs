"use client";

import { useRef } from 'react';
import { Mesh } from 'three';
import { Shape, ExtrudeGeometry } from 'three';

export default function OctagonalRoom() {
    const roomRef = useRef<Mesh>(null);

    // Create octagonal shape
    const sides = 8;
    const radius = 8;
    const height = 6;

    // Generate octagon points
    const shape = new Shape();
    for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        if (i === 0) {
            shape.moveTo(x, z);
        } else {
            shape.lineTo(x, z);
        }
    }
    shape.closePath();

    return (
        <group>
            {/* Octagonal walls */}
            {Array.from({ length: sides }).map((_, i) => {
                const angle = (i / sides) * Math.PI * 2;
                const nextAngle = ((i + 1) / sides) * Math.PI * 2;

                const x1 = Math.cos(angle) * radius;
                const z1 = Math.sin(angle) * radius;
                const x2 = Math.cos(nextAngle) * radius;
                const z2 = Math.sin(nextAngle) * radius;

                const centerX = (x1 + x2) / 2;
                const centerZ = (z1 + z2) / 2;
                const wallAngle = Math.atan2(z2 - z1, x2 - x1);

                return (
                    <mesh
                        key={i}
                        position={[centerX, height / 2, centerZ]}
                        rotation={[0, wallAngle + Math.PI / 2, 0]}
                    >
                        <boxGeometry args={[
                            Math.sqrt((x2 - x1) ** 2 + (z2 - z1) ** 2),
                            height,
                            0.3
                        ]} />
                        <meshStandardMaterial
                            color="#050505"
                            metalness={0.3}
                            roughness={0.7}
                        />
                    </mesh>
                );
            })}

            {/* Ceiling */}
            <mesh position={[0, height, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[radius, radius, 0.1, sides]} />
                <meshStandardMaterial
                    color="#000000"
                    metalness={0.2}
                    roughness={0.8}
                />
            </mesh>
        </group>
    );
}

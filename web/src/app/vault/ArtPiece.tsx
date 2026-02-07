import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { Float, Text } from '@react-three/drei';
import gsap from 'gsap';

interface ArtPieceProps {
    onZoom: (zoomed: boolean) => void;
}

// Different procedural shapes for variety
function HolographicGrid({ handleClick, handleDoubleClick, position }: any) {
    const gridRef = useRef<any>(null);

    useFrame((state) => {
        if (gridRef.current) {
            gridRef.current.rotation.y += 0.003;
            gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group ref={gridRef} position={position} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshBasicMaterial color="#00e5cc" wireframe />
            </mesh>
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <boxGeometry args={[1.6, 1.6, 1.6]} />
                <meshBasicMaterial color="#4ade80" wireframe />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial
                    color="#00e5cc"
                    emissive="#00e5cc"
                    emissiveIntensity={2}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </group>
    );
}

function DataCrystal({ handleClick, handleDoubleClick, position }: any) {
    const crystalRef = useRef<any>(null);

    useFrame((state) => {
        if (crystalRef.current) {
            crystalRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={crystalRef} position={position} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            <mesh>
                <octahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    color="#e91e63"
                    emissive="#e91e63"
                    emissiveIntensity={1}
                    transparent
                    opacity={0.8}
                    wireframe
                />
            </mesh>
            <mesh scale={[0.8, 0.8, 0.8]}>
                <octahedronGeometry args={[1.5, 0]} />
                <meshBasicMaterial color="#ffd700" wireframe />
            </mesh>
        </group>
    );
}

function TorusField({ handleClick, handleDoubleClick, position }: any) {
    const torusRef = useRef<any>(null);

    useFrame((state) => {
        if (torusRef.current) {
            torusRef.current.rotation.x += 0.002;
            torusRef.current.rotation.y += 0.003;
        }
    });

    return (
        <group ref={torusRef} position={position} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            <mesh>
                <torusGeometry args={[1.2, 0.3, 16, 32]} />
                <meshBasicMaterial color="#60a5fa" wireframe />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.2, 0.3, 16, 32]} />
                <meshBasicMaterial color="#ffd700" wireframe />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial
                    color="#60a5fa"
                    emissive="#60a5fa"
                    emissiveIntensity={2}
                />
            </mesh>
        </group>
    );
}

export default function ArtPiece({ onZoom }: ArtPieceProps) {
    const { camera } = useThree();

    const handleClick = () => {
        const targetPos = new Vector3(0, 2, 4);
        gsap.to(camera.position, {
            x: targetPos.x,
            y: targetPos.y,
            z: targetPos.z,
            duration: 2,
            ease: 'power2.inOut',
            onStart: () => onZoom(true),
        });
        gsap.to(camera.rotation, { duration: 2, ease: 'power2.inOut' });
    };

    const handleDoubleClick = () => {
        gsap.to(camera.position, {
            x: 0,
            y: 2,
            z: 12,
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => onZoom(false),
        });
    };

    const products = [
        { Component: HolographicGrid, position: [0, 0, -7], label: 'HOLO-LATTICE', desc: 'Grid System' },
        { Component: DataCrystal, position: [-5, 0, -3], label: 'DATA-CORE', desc: 'Crystal Matrix' },
        { Component: TorusField, position: [5, 0, -3], label: 'FIELD-TORUS', desc: 'Quantum Ring' },
    ];

    return (
        <group position={[0, 2, 0]}>
            {products.map((product, i) => (
                <group key={i}>
                    {/* Pedestal */}
                    <mesh position={[product.position[0], -2, product.position[2]]} receiveShadow>
                        <cylinderGeometry args={[1.5, 1.8, 0.8, 32]} />
                        <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.2} />
                    </mesh>

                    {/* Floating Product */}
                    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
                        <product.Component
                            handleClick={handleClick}
                            handleDoubleClick={handleDoubleClick}
                            position={product.position}
                        />
                    </Float>

                    {/* Labels */}
                    <Text
                        position={[product.position[0], -2.6, product.position[2] + 1]}
                        fontSize={0.3}
                        color="#ffffff"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {product.label}
                    </Text>
                    <Text
                        position={[product.position[0], -2.9, product.position[2] + 1]}
                        fontSize={0.12}
                        color="#aaaaaa"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {product.desc} • ObsidianLabs
                    </Text>

                    {/* Optimized accent light */}
                    <pointLight
                        position={[product.position[0], 1, product.position[2] + 1]}
                        intensity={0.6}
                        color="#00e5cc"
                        distance={5}
                    />
                </group>
            ))}
        </group>
    );
}

"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, Sky, Stars, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { Suspense, useRef, useState } from 'react';
import PortalWalls from './PortalWalls';
import ReactiveGridFloor from './ReactiveGridFloor';
import DataStreams from './DataStreams';
import ArtPiece from './ArtPiece';
import TechLab from './TechLab';
import PortalHub from './PortalHub';
import DataCenter from './DataCenter';
import Link from 'next/link';
import TeleportPad from './TeleportPad';
import InfoPanel from './InfoPanel';
import ExplorerControls from './ExplorerControls';

export default function VaultScene() {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <>
            {/* Exit Button */}
            <Link href="/" style={{
                position: 'fixed',
                top: '2rem',
                left: '2rem',
                zIndex: 1000,
                padding: '0.75rem 1.5rem',
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
                textDecoration: 'none'
            }}>
                ← Exit Vault
            </Link>

            {/* Exploration Instructions */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                padding: '1rem 2rem',
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                animation: 'fadeIn 1s ease-out',
                pointerEvents: 'none'
            }}>
                Click to Start • WASD to Move • Mouse to Look • ESC to Exit
            </div>

            {/* Crosshair */}
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20px',
                height: '20px',
                zIndex: 1000,
                pointerEvents: 'none'
            }}>
                <div style={{
                    position: 'absolute', top: '9px', left: '0', width: '20px', height: '2px', background: 'rgba(255,255,255,0.5)'
                }} />
                <div style={{
                    position: 'absolute', top: '0', left: '9px', width: '2px', height: '20px', background: 'rgba(255,255,255,0.5)'
                }} />
            </div>

            <Canvas
                id="canvas-container"
                camera={{ position: [0, 2, 12], fov: 50 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: 'high-performance',
                    stencil: false,
                    depth: true,
                }}
                shadows
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
                frameloop="always"
                style={{ background: '#000' }}
            >
                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.05} />
                    <hemisphereLight intensity={0.1} groundColor="#000" />

                    {/* Dramatic spotlight on artwork */}
                    <spotLight
                        position={[0, 8, 0]}
                        angle={0.3}
                        penumbra={0.5}
                        intensity={2}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />

                    {/* Environment for reflections */}
                    <Environment preset="studio" />

                    {/* Main Gallery Area */}
                    <group position={[0, 0, 0]}>
                        <PortalWalls />
                        <ReactiveGridFloor />
                        <DataStreams />
                        <ArtPiece onZoom={setIsZoomed} />
                        <InfoPanel
                            position={[0, 3, -6]}
                            title="The Vault"
                            description="Secure storage for experimental quantum artifacts. Observed stability: 98%."
                        />
                        {/* Teleport to Tech Lab */}
                        <TeleportPad
                            position={[-8, 0, 0]}
                            targetPosition={[-22, 2, 0]}
                            label="TO TECH LAB"
                            description="Development Sector"
                        />
                        {/* Teleport to Data Center */}
                        <TeleportPad
                            position={[8, 0, 0]}
                            targetPosition={[22, 2, 0]}
                            label="TO DATA CENTER"
                            description="Server Core"
                        />
                    </group>

                    {/* Tech Lab Area - positioned to the left (-X) */}
                    <TechLab position={[-25, 0, 0]} />
                    <InfoPanel
                        position={[-25, 4, 0]}
                        title="Tech Lab"
                        description="Development sector for neural interfaces and holographic projection systems."
                        color="#00e5cc"
                    />
                    <TeleportPad
                        position={[-20, 0, 0]}
                        targetPosition={[-5, 2, 0]}
                        label="RETURN TO VAULT"
                        description="Main Gallery"
                    />

                    {/* Connecting Bridge to Lab */}
                    <mesh position={[-12.5, -2, 0]}>
                        <boxGeometry args={[15, 0.2, 3]} />
                        <meshStandardMaterial color="#0a0a0a" metalness={0.8} />
                    </mesh>

                    {/* Portal Hub - positioned behind (-Z) */}
                    <PortalHub position={[0, 0, -25]} />
                    <InfoPanel
                        position={[0, 5, -25]}
                        title="Portal Hub"
                        description="Inter-dimensional transport gateway. Caution: High energy signatures detected."
                        color="#e91e63"
                    />
                    <TeleportPad
                        position={[0, 0, -20]}
                        targetPosition={[0, 2, -5]}
                        label="RETURN TO VAULT"
                        description="Main Gallery"
                    />

                    {/* Connecting Bridge to Hub */}
                    <mesh position={[0, -2, -12.5]}>
                        <boxGeometry args={[3, 0.2, 15]} />
                        <meshStandardMaterial color="#0a0a0a" metalness={0.8} />
                    </mesh>

                    {/* Data Center - positioned to the right (+X) */}
                    <DataCenter position={[25, 0, 0]} />
                    <InfoPanel
                        position={[25, 5, 0]}
                        title="Data Center"
                        description="Processing core for the entire Obsidian network. Petabyte-scale neural storage."
                        color="#ffd700"
                    />
                    <TeleportPad
                        position={[20, 0, 0]}
                        targetPosition={[5, 2, 0]}
                        label="RETURN TO VAULT"
                        description="Main Gallery"
                    />

                    {/* Connecting Bridge to Data Center */}
                    <mesh position={[12.5, -2, 0]}>
                        <boxGeometry args={[15, 0.2, 3]} />
                        <meshStandardMaterial color="#0a0a0a" metalness={0.8} />
                    </mesh>

                    {/* Controls */}
                    <ExplorerControls />

                    {/* Optimized Visual Effects */}
                    <EffectComposer>
                        <Bloom luminanceThreshold={1.2} mipmapBlur intensity={1.2} radius={0.5} />
                        <Noise opacity={0.03} />
                    </EffectComposer>

                    {/* Optimized Background */}
                    <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                </Suspense>
            </Canvas>
        </>
    );
}

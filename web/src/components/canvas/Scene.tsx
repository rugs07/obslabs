"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";

interface SceneProps {
    children?: React.ReactNode;
    [key: string]: any;
}

export default function Scene({ children, ...props }: SceneProps) {
    return (
        <Canvas
            {...props}
            camera={{ position: [0, 0, 15], fov: 45 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            gl={{ alpha: true, antialias: false, stencil: false, depth: false }}
            dpr={[1, 1.5]} // Limit pixel ratio for performance
            onCreated={(state) => (state.gl.toneMappingExposure = 1.2)}
        >
            <Suspense fallback={null}>
                {/* Atmospheric Charcoal Void */}
                <color attach="background" args={['#08080a']} />
                <fog attach="fog" args={['#08080a', 10, 25]} />

                {/* Lighting: High Contrast Noir */}
                <ambientLight intensity={0.2} />

                {/* Main Rim Light (Moon/Streetlight feel) */}
                <spotLight
                    position={[10, 10, 5]}
                    angle={0.5}
                    penumbra={1}
                    intensity={5}
                    castShadow
                    color="#ffffff"
                />

                {/* Fill Light (Cool Blue-Grey) */}
                <pointLight position={[-10, 0, -10]} intensity={1} color="#64748b" />

                {/* Rim Light (Sharp Silver) */}
                <spotLight position={[0, -5, 10]} intensity={2} color="#e2e8f0" />

                {/* High quality environment reflection */}
                <Environment preset="city" blur={1} />

                {children}

                {/* Visual Effects - Noir Style */}
                <EffectComposer enableNormalPass={false}>
                    <Bloom
                        luminanceThreshold={0.8} // Only very bright things glow
                        mipmapBlur
                        intensity={0.8}
                        radius={0.3}
                    />
                </EffectComposer>

                <Preload all />
            </Suspense>
        </Canvas>
    );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Environment } from "@react-three/drei";
import { Suspense } from "react";

interface SceneProps {
    children?: React.ReactNode;
    [key: string]: any;
}

export default function Scene({ children, ...props }: SceneProps) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <Canvas
            {...props}
            camera={{ position: [0, 0, 10], fov: 45 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            gl={{ alpha: true, antialias: true }}
            onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        >
            <Suspense fallback={null}>
                {/* Minimal fog for depth - no solid background to allow frame animation through */}
                <fog attach="fog" args={['#050507', 8, 25]} />

                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* High quality environment reflection for the obsidian */}
                <Environment preset="city" blur={1} />

                {children}
                <Preload all />
            </Suspense>
        </Canvas>
    );
}

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function PortalWalls() {
    const groupRef = useRef<THREE.Group>(null);
    const materialRefs = useRef<THREE.ShaderMaterial[]>([]);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
        }
        // Update time uniform for all wall materials
        materialRefs.current.forEach((mat) => {
            if (mat && mat.uniforms) {
                mat.uniforms.uTime.value = state.clock.elapsedTime;
            }
        });
    });

    const vertexShader = `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPosition;

        // Simplified Voronoi pattern
        vec2 random2(vec2 p) {
            return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
        }

        void main() {
            vec2 uv = vUv * 2.5; // Reduced from 3.0
            
            // Simplified voronoi with fewer iterations
            vec2 i_st = floor(uv);
            vec2 f_st = fract(uv);
            float m_dist = 1.0;
            
            // Reduced from 9 to 5 iterations
            for (int y= -1; y <= 1; y += 1) {
                for (int x= -1; x <= 1; x += 1) {
                    if (abs(x) + abs(y) > 1) continue; // Skip corners
                    vec2 neighbor = vec2(float(x),float(y));
                    vec2 point = random2(i_st + neighbor);
                    point = 0.5 + 0.5*sin(uTime * 0.3 + 6.2831*point);
                    float dist = length(neighbor + point - f_st);
                    m_dist = min(m_dist, dist);
                }
            }
            
            // Simplified glow
            float glow = 1.0 - smoothstep(0.0, 0.6, m_dist);
            
            // Simpler color mixing
            vec3 color = mix(
                vec3(0.0, 0.9, 0.8), 
                vec3(0.91, 0.12, 0.39), 
                glow * 0.7
            );
            
            float alpha = glow * 0.3 + 0.05;
            gl_FragColor = vec4(color, alpha);
        }
    `;

    const sides = 8;
    const radius = 10;
    const height = 6;

    return (
        <group ref={groupRef}>
            {Array.from({ length: sides }).map((_, i) => {
                const angle = (i / sides) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                const rotation = angle + Math.PI / 2;

                return (
                    <mesh
                        key={i}
                        position={[x, height / 2, z]}
                        rotation={[0, rotation, 0]}
                    >
                        <planeGeometry args={[2 * radius * Math.sin(Math.PI / sides), height]} />
                        <shaderMaterial
                            ref={(el) => {
                                if (el) materialRefs.current[i] = el;
                            }}
                            vertexShader={vertexShader}
                            fragmentShader={fragmentShader}
                            uniforms={{
                                uTime: { value: 0 },
                            }}
                            transparent
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                );
            })}
        </group>
    );
}

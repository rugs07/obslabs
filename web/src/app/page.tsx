"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/dom/Navbar';
import Overlay from '@/components/dom/Overlay';
import FrameAnimation from '@/components/dom/FrameAnimation';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
const Shards = dynamic(() => import('@/components/canvas/Shards'), { ssr: false });
const Gateway = dynamic(() => import('@/components/canvas/Gateway'), { ssr: false });

export default function Home() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      <Navbar />

      {/* Frame Animation Background Layer - Plays on hover */}
      <FrameAnimation />

      {/* 3D Scene Layer */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Scene>
          <Shards />
          <Gateway />
        </Scene>
      </div>

      {/* Scrollable DOM Overlay */}
      <div style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <Overlay />
      </div>

      {/* Visual effects overlays */}
      <div className="scanlines" />
      <div className="noise-overlay" />
    </main>
  );
}

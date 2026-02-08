"use client";

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Overlay from '@/components/dom/Overlay';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
const Gateway = dynamic(() => import('@/components/canvas/Gateway'), { ssr: false });
const Shards = dynamic(() => import('@/components/canvas/Shards'), { ssr: false });

export default function Home() {
  return (
    <main className="w-full min-h-screen relative bg-[#030308]">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Ambient Background - Subtle 3D */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <Scene>
          <Gateway />
          <Shards />
        </Scene>
      </div>

      {/* Main Content */}
      <div className="relative z-[2]">
        <Overlay />
      </div>
    </main>
  );
}

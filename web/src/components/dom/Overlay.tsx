"use client";

import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Overlay() {
    return (
        <div className="w-full">
            <HeroSection />
            <CapabilitiesSection />
            <ServicesSection />
            <ProcessSection />
            <CTASection />
            <Footer />
        </div>
    );
}

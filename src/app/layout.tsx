import { Console } from '@/components/console';
import { Favicon } from '@/components/favicon';
import { Navbar } from '@/components/navbar';
import ParticlesBg from "@/components/particles/index";

import type { Metadata } from 'next';
import "@/styles/global.css";

export const metadata: Metadata = {
    title: '姚利锋',
    description: '姚利锋'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className="flex flex-col items-center dark scroll-smooth" >
                <Navbar />
                <main className="min-h-[calc(100vh-190px)] w-screen max-w-screen-md 2xl:max-w-7xl md:px-10 z-[2]">
                    {children}
                </main>
                <Favicon />
                <Console />
                <ParticlesBg
                    particleCount={100}
                    particleColor='#98989F'
                    minParticleSize={1}
                    maxParticleSize={3}
                    minSpeed={0.1}
                    maxSpeed={1}
                    fadeInDuration={2000}
                />
            </body>
        </html>
    );
}

"use client";

import { SparklesCore } from "../Sparkles/sparkles";

export function SparklesPreview() {
    return (
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <h1 className="md:text-xl text-xl lg:text-xl font-bold text-center text-white relative z-20">
                <p className="text-7xl">Hello!</p>
                
                <div className="flex flex-col justify-start items-start mt-20">
                    <p>This is </p>
                    <p className="text-4xl">Tahmina Taher Laboni</p>
                </div>
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}

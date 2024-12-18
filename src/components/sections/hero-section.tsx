"use client";


import { Button } from "@/components/ui/button";
import { gradients } from "@/lib/gradient-utils";
import Link from "next/link";
import { link } from "node:fs";
import { AnimatedButton } from "../ui/animated-button";

export function HeroSection() {
  return (
    <section className={`relative py-32 px-4 sm:px-6 lg:px-8 ${gradients.hero} overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/5 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:bg-white/5" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_40%_60%,rgba(99,102,241,0.13),rgba(99,102,241,0)_50%),radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.13),rgba(168,85,247,0)_50%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Trade on Your
            <span className="block">Knowledge of the Future</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Unlock the power of decentralized forecasting with our state-of-the-art Prediction Market App, seamlessly built on the Mantle blockchain.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link href="./dashboard">
            <AnimatedButton size="lg">
              Start Trading
            </AnimatedButton>
            </Link>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
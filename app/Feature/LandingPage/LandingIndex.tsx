"use client";

import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import GamerHoverCard from "./components/GamerHoverCard";

export default function Hero() {
  const [volume, setVolume] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (videoRef.current.volume > 0) {
        videoRef.current.volume = 0;
        setVolume(0);
      } else {
        videoRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/LandingIndex/footageFootball.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3 bg-black/20 p-3 rounded-full backdrop-blur-sm">
        <Button
          onClick={toggleMute}
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-white hover:bg-white/20"
        >
          {volume === 0 ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 accent-[#ff4b61] cursor-pointer"
        />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="mb-6 rounded-full border-4 border-white p-4">
          <div className="h-12 w-12 rounded-full border-4 border-white border-t-transparent animate-spin" />
        </div>

        {/* <h1 className="mb-4 text-5xl font-bold md:text-7xl">Miri UI Kit</h1>

        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          A beautiful free bootstrap 4 UI Kit developed by BootstrapDash.
        </p> */}

        <div className="flex flex-wrap justify-center gap-4">
          <GamerHoverCard
            role={["DPS", "Tank", "SupPort"]}
            cardName="OverWatch"
            avatarUrl="/LandingIndex/overWatchLg.svg"
            rank="Master"
            joinedDate="2015"
            description={["zecano#3583"]}
            link=""
          />
          <GamerHoverCard
            cardName="FaceBook"
            avatarUrl="/LandingIndex/Facebook-f_Logo-Blue-Logo.wine.svg"
            description={["Manop Cano"]}
            link="https://www.facebook.com/manop.cano"
          />

          <GamerHoverCard
            cardName="Instagram"
            avatarUrl="/LandingIndex/Instagram-Logo.wine.svg"
            link="https://www.instagram.com/manopcano"
            description={["manopcano"]}
          />

          <GamerHoverCard
            cardName="TikTok"
            avatarUrl="/LandingIndex/TikTok-Logo.wine.svg"
            link="https://www.tiktok.com/@cano1ch"
            description={["cano1ch"]}
          />
        </div>
      </div>
    </section>
  );
}

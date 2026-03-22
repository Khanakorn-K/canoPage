"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

interface GamerHoverCardProps {
  cardName?: string;
  role?: string[];
  description?: string[];
  rank?: string;
  joinedDate?: string;
  avatarUrl?: string;
  link: string;
}

export default function GamerHoverCard({
  cardName = "SHADOW_X",
  role = [],
  description = [],
  rank,
  joinedDate,
  avatarUrl,
  link,
}: GamerHoverCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 py-2.5 inline-block bg-transparent cursor-pointer font-['Orbitron',monospace] text-[13px] font-bold tracking-[0.15em] uppercase text-cyan-400 hover:text-red-500 transition-colors duration-200"
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 group-hover:w-full group-hover:h-full group-hover:border-red-500 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 group-hover:w-full group-hover:h-full group-hover:border-red-500 transition-all duration-300" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 group-hover:w-full group-hover:h-full group-hover:border-red-500 transition-all duration-300" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 group-hover:w-full group-hover:h-full group-hover:border-red-500 transition-all duration-300" />
            <span className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="relative z-10 group-hover:[text-shadow:0_0_8px_rgba(239,68,68,0.8)]">
              {cardName}
            </span>
          </Link>
        </HoverCardTrigger>

        <HoverCardContent className="w-64 p-0 border-none rounded-sm bg-[#080c10] shadow-[0_0_0_1px_rgba(0,255,231,0.2),0_0_24px_rgba(0,255,231,0.12),inset_0_0_24px_rgba(0,255,231,0.03)]">
          <div className="border border-cyan-400/40 rounded-sm p-4 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none z-0 rounded-sm"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,231,0.015) 2px, rgba(0,255,231,0.015) 4px)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="absolute -inset-[2px] rounded bg-gradient-to-br from-cyan-400 to-red-500 z-0" />
                  <div className="absolute -inset-[5px] rounded border border-cyan-400/30 animate-ping" />
                  <div className="relative z-10 w-11 h-11 rounded overflow-hidden bg-[#0d1f1e]">
                    {avatarUrl ? (
                      <Image
                        src={avatarUrl}
                        alt={cardName}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-['Orbitron',monospace] text-base font-black text-cyan-400">
                        {cardName?.[0]?.toUpperCase()}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-['Orbitron',monospace] text-[13px] font-black tracking-widest text-cyan-400">
                      {cardName?.toUpperCase()}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse shrink-0" />
                  </div>
                  <div className="flex flex-col flex-wrap gap-1">
                    {role.map((item, index) => (
                      <span
                        key={index}
                        className="text-[9px] tracking-[0.15em] uppercase text-red-500 font-['Share_Tech_Mono',monospace]"
                      >
                        {index !== role.length && (
                          <span className="ml-1 text-zinc-600">•</span>
                        )}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {description.map((line, index) => (
                  <p
                    key={index}
                    className="text-[11px] leading-relaxed text-cyan-400/50 font-['Share_Tech_Mono',monospace]"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="h-px w-full opacity-30 bg-gradient-to-r from-transparent via-[#00ffe7] to-transparent" />

              <div className="flex items-center justify-between">
                {joinedDate && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] tracking-[0.15em] uppercase text-zinc-600 font-['Share_Tech_Mono',monospace]">
                      SINCE
                    </span>
                    <span className="text-[10px] text-cyan-400/70 font-['Share_Tech_Mono',monospace]">
                      {joinedDate}
                    </span>
                  </div>
                )}
                {rank && (
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-[9px] tracking-[0.15em] uppercase text-zinc-600 font-['Share_Tech_Mono',monospace]">
                      RANK
                    </span>
                    <span className="font-['Orbitron',monospace] text-[11px] font-black text-red-500">
                      LVL {rank}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
}

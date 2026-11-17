import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function EmberColophon({ className = 'w-9 h-9', inverted = false }: LogoProps) {
  const paperFill = inverted ? '#161311' : '#FAF7F2';
  const inkStroke = inverted ? '#FAF7F2' : '#161311';
  const accentStroke = inverted ? '#D8A962' : '#9A3412';

  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-label="Ember Core Studio Colophon"
    >
      <rect width="256" height="256" rx="44" fill={paperFill} />
      <rect
        x="14"
        y="14"
        width="228"
        height="228"
        rx="34"
        fill="none"
        stroke={inkStroke}
        strokeWidth="5"
        strokeOpacity="0.9"
      />
      <rect
        x="24"
        y="24"
        width="208"
        height="208"
        rx="26"
        fill="none"
        stroke={accentStroke}
        strokeWidth="2.5"
        strokeOpacity="0.55"
      />
      <path
        d="M128 44 C139 68, 162 86, 157 116 C154 136, 138 150, 128 160 C118 150, 102 136, 99 116 C94 86, 117 68, 128 44 Z"
        fill={accentStroke}
      />
      <path
        d="M128 76 C133 92, 141 104, 138 121 C136 133, 131 141, 128 147 C125 141, 120 133, 118 121 C115 104, 123 92, 128 76 Z"
        fill={paperFill}
      />
      <path
        d="M52 148 C78 141, 108 148, 128 164 C148 148, 178 141, 204 148 L210 185 C180 177, 150 182, 128 199 C106 182, 76 177, 46 185 Z"
        fill="none"
        stroke={inkStroke}
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path
        d="M62 134 C85 129, 110 135, 128 150 C146 135, 171 129, 194 134"
        fill="none"
        stroke={inkStroke}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="128"
        y1="150"
        x2="128"
        y2="203"
        stroke={inkStroke}
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Tactile Cloth-Bound Hardcover Monograph Display for
 * "Mind Bending: The Quantum Reality Strategist" by Amber Yaghi
 */
export function MindBendingHardcover() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] select-none py-4">
      {/* Ground Plinth Ambient Shadow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-1 left-6 right-4 h-7 rounded-full bg-ink-950/25 blur-xl"
      />

      {/* Book Block Wrapper (Spine + Front Board + Fore-Edge Paper Stack) */}
      <div className="relative flex items-stretch rounded-r-md shadow-[0_24px_48px_-12px_rgba(22,19,17,0.38)]">
        {/* Book Binding Spine Crease */}
        <div
          aria-hidden="true"
          className="w-6 shrink-0 rounded-l-sm bg-gradient-to-r from-[#0D0B0A] via-[#26211E] to-[#110F0E] border-y border-l border-foil-500/25 flex flex-col items-center justify-between py-6"
        >
          <span className="text-[7px] font-mono tracking-[0.28em] text-foil-400/75 [writing-mode:vertical-rl] rotate-180 uppercase">
            EMBER CORE
          </span>
          <span className="text-[7px] font-serif tracking-[0.22em] text-foil-400/80 [writing-mode:vertical-rl] rotate-180 uppercase">
            YAGHI
          </span>
        </div>

        {/* Front Cloth-Bound Cover */}
        <div className="book-cloth-obsidian relative flex-1 aspect-[3/4.35] border-y border-r border-foil-500/35 px-7 py-8 flex flex-col justify-between overflow-hidden">
          {/* Subtle Foil Inner Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3.5 border border-foil-500/25"
          />

          {/* Top Imprint Foil Kicker */}
          <div className="relative z-10 text-center pt-1">
            <p className="text-[9px] font-sans uppercase tracking-[0.28em] text-foil-400/90">
              Inaugural Edition
            </p>
            <h3 className="mt-3 font-serif text-3xl sm:text-[34px] font-semibold tracking-[0.08em] text-[#F4E6CE] leading-[1.06] uppercase">
              Mind
              <br />
              Bending
            </h3>
            <p className="mt-2.5 font-serif italic text-[13px] tracking-wide text-foil-400">
              The Quantum Reality Strategist
            </p>
          </div>

          {/* Geometric Gold-Foil Quantum Light Refraction Artwork */}
          <div className="relative z-10 my-2 flex items-center justify-center">
            <svg
              viewBox="0 0 240 180"
              className="w-full max-w-[210px] h-auto"
              aria-hidden="true"
            >
              <g stroke="#C69249" fill="none">
                <polygon
                  points="120,12 222,90 120,168 18,90"
                  strokeWidth="1.1"
                  strokeOpacity="0.85"
                />
                <polygon
                  points="120,28 196,90 120,152 44,90"
                  strokeWidth="0.8"
                  strokeOpacity="0.55"
                />
                <circle cx="120" cy="90" r="44" strokeWidth="0.95" strokeOpacity="0.7" />
                <circle cx="120" cy="90" r="18" strokeWidth="0.9" strokeOpacity="0.85" />
                {/* Converging Quantum Trajectory Rays */}
                <line x1="18" y1="30" x2="222" y2="150" strokeWidth="0.75" strokeOpacity="0.5" />
                <line x1="222" y1="30" x2="18" y2="150" strokeWidth="0.75" strokeOpacity="0.5" />
                <line x1="120" y1="6" x2="120" y2="174" strokeWidth="0.85" strokeOpacity="0.6" />
                <line x1="10" y1="90" x2="230" y2="90" strokeWidth="0.75" strokeOpacity="0.45" />
                <line x1="56" y1="16" x2="184" y2="164" strokeWidth="0.6" strokeOpacity="0.4" />
                <line x1="184" y1="16" x2="56" y2="164" strokeWidth="0.6" strokeOpacity="0.4" />
                <circle cx="120" cy="90" r="2.8" fill="#D8A962" stroke="none" />
              </g>
            </svg>
          </div>

          {/* Author & House Imprint Stamp */}
          <div className="relative z-10 text-center pb-1">
            <p className="font-serif text-sm tracking-[0.24em] uppercase text-[#F4E6CE] font-medium">
              Amber Yaghi
            </p>
            <p className="mt-1.5 text-[8.5px] font-mono tracking-[0.22em] uppercase text-foil-400/75">
              Ember Core Studio
            </p>
          </div>
        </div>

        {/* Cream Paper Fore-Edge Stack */}
        <div
          aria-hidden="true"
          className="w-2.5 shrink-0 my-1 rounded-r-[2px] bg-[repeating-linear-gradient(90deg,#EFE7D8_0px,#EFE7D8_1px,#D8CCB8_1px,#D8CCB8_2px)] border-y border-r border-paper-300"
        />
      </div>
    </div>
  );
}

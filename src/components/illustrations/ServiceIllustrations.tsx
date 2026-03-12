"use client";

import { FC } from "react";

interface IllustrationProps {
  className?: string;
}

// Companion Care - Two figures in warm embrace
export const CompanionCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="companion-warm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A574" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#C9A17A" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* Soft background circle */}
    <circle cx="100" cy="100" r="80" fill="url(#companion-warm)" />
    {/* Two figures - stylized embrace */}
    <path
      d="M85 70c0-12 10-22 22-22s22 10 22 22c0 8-4 15-10 19"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M75 75c0-10 8-18 18-18"
      stroke="#C9A17A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Body curves suggesting two people close together */}
    <path
      d="M70 95c5-5 15-8 25-8 15 0 28 8 35 20 5 8 8 18 8 28 0 5-1 10-3 15"
      stroke="#8B7355"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M60 100c3-3 10-6 18-6 12 0 22 6 28 15"
      stroke="#C9A17A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Hands meeting - symbolic connection */}
    <path
      d="M90 120c5 0 10 3 12 8M95 128c4-2 9-2 13 1"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Heart accent */}
    <path
      d="M130 85c3-5 10-6 14-2 4 4 4 10 0 15l-14 14-14-14c-4-5-4-11 0-15 4-4 11-3 14 2z"
      fill="#C9A17A"
      fillOpacity="0.4"
      stroke="#C9A17A"
      strokeWidth="1.5"
    />
    {/* Decorative flourish */}
    <path
      d="M55 140c10 5 25 8 40 8s30-3 40-8"
      stroke="#D4A574"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="4 4"
      fill="none"
    />
  </svg>
);

// Personal Assistance - Gentle helping hand
export const PersonalAssistanceIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="personal-soft" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E8DDD4" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#C9A17A" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#personal-soft)" />
    {/* Elegant hand reaching up */}
    <path
      d="M80 130c0-5 3-10 8-12l25-12c5-2 10 0 12 5 2 4 0 9-4 11l-8 4"
      stroke="#8B7355"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Supporting hand below */}
    <path
      d="M70 145c8-3 18-5 28-5 12 0 22 3 30 8"
      stroke="#C9A17A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Figure silhouette */}
    <ellipse cx="105" cy="60" rx="18" ry="20" fill="#D4A574" fillOpacity="0.3" />
    <path
      d="M85 85c5 8 12 12 20 12s15-4 20-12"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Sparkle accents */}
    <circle cx="140" cy="70" r="3" fill="#C9A17A" fillOpacity="0.6" />
    <circle cx="150" cy="85" r="2" fill="#C9A17A" fillOpacity="0.4" />
    <circle cx="55" cy="90" r="2.5" fill="#D4A574" fillOpacity="0.5" />
    {/* Flowing line suggesting care */}
    <path
      d="M60 110c15-5 30-5 45 0s30 10 40 5"
      stroke="#D4A574"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Homemaking - Elegant home with warmth
export const HomemakingIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="home-warm" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#C9A17A" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#E8DDD4" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="105" r="70" fill="url(#home-warm)" />
    {/* Elegant house outline */}
    <path
      d="M50 100l50-40 50 40"
      stroke="#8B7355"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M60 95v50h80v-50"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Door */}
    <rect x="88" y="115" width="24" height="30" rx="2" fill="#D4A574" fillOpacity="0.4" stroke="#8B7355" strokeWidth="1.5" />
    <circle cx="106" cy="132" r="2" fill="#8B7355" />
    {/* Window with warmth glow */}
    <rect x="65" y="105" width="18" height="18" rx="1" fill="#FFF8E7" fillOpacity="0.8" stroke="#C9A17A" strokeWidth="1.5" />
    <path d="M65 114h18M74 105v18" stroke="#C9A17A" strokeWidth="1" />
    <rect x="117" y="105" width="18" height="18" rx="1" fill="#FFF8E7" fillOpacity="0.8" stroke="#C9A17A" strokeWidth="1.5" />
    <path d="M117 114h18M126 105v18" stroke="#C9A17A" strokeWidth="1" />
    {/* Chimney with gentle smoke */}
    <rect x="120" y="55" width="12" height="20" fill="#D4A574" fillOpacity="0.5" stroke="#8B7355" strokeWidth="1.5" />
    <path
      d="M126 50c0-5 3-8 0-12M122 48c0-4 2-6 0-10"
      stroke="#C9A17A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Small plant/flower accent */}
    <path
      d="M155 140c-3-5-2-10 2-12s10 0 12 5"
      stroke="#8B9977"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="160" cy="135" r="4" fill="#C9A17A" fillOpacity="0.5" />
  </svg>
);

// Respite Care - Peaceful relief symbolism
export const RespiteCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="respite-calm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B8D4E3" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#E8DDD4" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#respite-calm)" />
    {/* Peaceful figure resting */}
    <ellipse cx="100" cy="75" rx="20" ry="22" fill="#D4A574" fillOpacity="0.3" />
    <path
      d="M75 100c5 10 15 15 25 15s20-5 25-15"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Supportive hands cradling */}
    <path
      d="M50 110c10-5 25-8 40-5"
      stroke="#C9A17A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M150 110c-10-5-25-8-40-5"
      stroke="#C9A17A"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Waves suggesting calm/relief */}
    <path
      d="M45 135c15 5 30 8 55 8s40-3 55-8"
      stroke="#B8D4E3"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M55 150c12 4 25 6 45 6s33-2 45-6"
      stroke="#B8D4E3"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      strokeOpacity="0.6"
    />
    {/* Floating elements suggesting peace */}
    <circle cx="60" cy="60" r="4" fill="#C9A17A" fillOpacity="0.4" />
    <circle cx="145" cy="55" r="3" fill="#B8D4E3" fillOpacity="0.5" />
    <circle cx="140" cy="70" r="2" fill="#D4A574" fillOpacity="0.4" />
    {/* Gentle leaf/feather */}
    <path
      d="M155 90c-5-8-15-10-20-5s-3 15 5 18c-10 1-15 8-12 15"
      stroke="#8B9977"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      strokeOpacity="0.6"
    />
  </svg>
);

// Senior Support - Caring for elder with dignity
export const SeniorSupportIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="senior-gentle" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4A574" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#E8DDD4" stopOpacity="0.35" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="78" fill="url(#senior-gentle)" />
    {/* Two figures - one supporting another */}
    {/* Elder figure */}
    <ellipse cx="90" cy="65" rx="16" ry="18" fill="#D4A574" fillOpacity="0.35" />
    <path
      d="M70 88c4 6 12 10 20 10"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Caregiver figure behind */}
    <ellipse cx="115" cy="58" rx="14" ry="16" fill="#C9A17A" fillOpacity="0.25" />
    <path
      d="M105 78c3 4 8 7 14 7"
      stroke="#C9A17A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Walking together */}
    <path
      d="M65 100c5 15 12 30 20 45M80 100c5 18 10 35 18 48"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M110 95c3 15 8 32 12 45M122 92c4 16 8 34 10 48"
      stroke="#C9A17A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Supportive arm connection */}
    <path
      d="M95 105c8 0 15 2 20 0"
      stroke="#8B7355"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Gentle cane suggestion */}
    <path
      d="M72 95l-8 55"
      stroke="#A89080"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Warmth dots */}
    <circle cx="145" cy="75" r="3" fill="#C9A17A" fillOpacity="0.5" />
    <circle cx="50" cy="85" r="2.5" fill="#D4A574" fillOpacity="0.4" />
  </svg>
);

// Memory Support - Mind and gentle care
export const MemorySupportIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="memory-soft" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#E0D4E8" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#D4A574" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#memory-soft)" />
    {/* Head profile with gentle curves */}
    <path
      d="M70 110c0-25 15-45 35-45s35 20 35 45c0 15-8 28-20 35"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Floating memory elements - soft shapes */}
    <circle cx="85" cy="85" r="8" fill="#E0D4E8" fillOpacity="0.5" stroke="#C9A17A" strokeWidth="1" />
    <circle cx="110" cy="78" r="6" fill="#D4A574" fillOpacity="0.4" stroke="#8B7355" strokeWidth="1" />
    <circle cx="100" cy="95" r="5" fill="#C9A17A" fillOpacity="0.4" />
    {/* Connecting gentle lines suggesting thoughts */}
    <path
      d="M90 90c5 2 10 3 15 2"
      stroke="#C9A17A"
      strokeWidth="1"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="2 3"
    />
    {/* Protective hands around */}
    <path
      d="M55 95c5-10 15-18 25-20"
      stroke="#C9A17A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M145 95c-5-10-15-18-25-20"
      stroke="#C9A17A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Heart at center */}
    <path
      d="M95 115c2-3 6-4 8-1 2-3 6-2 8 1 0 4-8 10-8 10s-8-6-8-10z"
      fill="#C9A17A"
      fillOpacity="0.6"
    />
    {/* Floating stars/sparkles */}
    <path d="M60 70l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" fill="#D4A574" fillOpacity="0.4" />
    <path d="M140 65l1.5 3 3 .75-2.25 2.25.75 3-3-1.5-3 1.5.75-3-2.25-2.25 3-.75z" fill="#E0D4E8" fillOpacity="0.5" />
  </svg>
);

// Overnight Care - Moon and peaceful night
export const OvernightCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="night-peace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2C3E50" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#D4A574" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="78" fill="url(#night-peace)" />
    {/* Crescent moon */}
    <path
      d="M120 45c-20 5-35 25-35 48s15 43 35 48c-25-5-45-28-45-48s20-43 45-48z"
      fill="#C9A17A"
      fillOpacity="0.4"
      stroke="#8B7355"
      strokeWidth="1.5"
    />
    {/* Stars */}
    <circle cx="145" cy="55" r="3" fill="#D4A574" />
    <circle cx="160" cy="75" r="2" fill="#C9A17A" fillOpacity="0.7" />
    <circle cx="150" cy="90" r="1.5" fill="#D4A574" fillOpacity="0.6" />
    <circle cx="55" cy="65" r="2" fill="#C9A17A" fillOpacity="0.5" />
    <circle cx="45" cy="85" r="1.5" fill="#D4A574" fillOpacity="0.4" />
    {/* Peaceful sleeping figure */}
    <ellipse cx="100" cy="130" rx="40" ry="12" fill="#E8DDD4" fillOpacity="0.5" />
    <ellipse cx="85" cy="125" rx="12" ry="10" fill="#D4A574" fillOpacity="0.3" />
    {/* Blanket wave */}
    <path
      d="M60 135c10-5 25-8 40-8s30 3 40 8"
      stroke="#C9A17A"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M65 145c8-3 22-5 35-5s27 2 35 5"
      stroke="#8B7355"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Watchful presence - small candle/light */}
    <ellipse cx="150" cy="130" rx="5" ry="8" fill="#FFF8E7" fillOpacity="0.6" />
    <path
      d="M150 120c0-3 2-5 0-8"
      stroke="#C9A17A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Transportation - Gentle movement and assistance
export const TransportationIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="transport-move" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#E8DDD4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#C9A17A" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#transport-move)" />
    {/* Elegant car silhouette */}
    <path
      d="M45 115c5-20 20-30 40-30h30c20 0 35 10 40 30"
      stroke="#8B7355"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M40 115h120c5 0 8 3 8 8v12c0 3-3 5-5 5H37c-2 0-5-2-5-5v-12c0-5 3-8 8-8z"
      fill="#D4A574"
      fillOpacity="0.3"
      stroke="#8B7355"
      strokeWidth="1.5"
    />
    {/* Windows */}
    <path
      d="M60 105c3-12 12-18 25-18h30c13 0 22 6 25 18"
      fill="#E8DDD4"
      fillOpacity="0.5"
      stroke="#C9A17A"
      strokeWidth="1"
    />
    {/* Wheels */}
    <circle cx="65" cy="140" r="12" fill="#8B7355" fillOpacity="0.3" stroke="#8B7355" strokeWidth="2" />
    <circle cx="65" cy="140" r="5" fill="#D4A574" fillOpacity="0.5" />
    <circle cx="135" cy="140" r="12" fill="#8B7355" fillOpacity="0.3" stroke="#8B7355" strokeWidth="2" />
    <circle cx="135" cy="140" r="5" fill="#D4A574" fillOpacity="0.5" />
    {/* Motion lines */}
    <path
      d="M25 110h10M20 120h12M25 130h8"
      stroke="#C9A17A"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      strokeOpacity="0.6"
    />
    {/* Person figure inside (silhouette) */}
    <ellipse cx="100" cy="100" rx="8" ry="10" fill="#8B7355" fillOpacity="0.3" />
    {/* Road suggestion */}
    <path
      d="M30 160h140"
      stroke="#D4A574"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="8 6"
    />
    {/* Destination marker */}
    <path
      d="M165 75c0-8 6-15 15-15s15 7 15 15c0 10-15 20-15 20s-15-10-15-20z"
      fill="#C9A17A"
      fillOpacity="0.5"
      stroke="#8B7355"
      strokeWidth="1.5"
    />
    <circle cx="180" cy="75" r="5" fill="#FFF8E7" fillOpacity="0.8" />
  </svg>
);

// Export map for easy lookup
export const serviceIllustrations: Record<string, FC<IllustrationProps>> = {
  "companion-care": CompanionCareIllustration,
  "personal-assistance": PersonalAssistanceIllustration,
  "homemaking": HomemakingIllustration,
  "respite-care": RespiteCareIllustration,
  "senior-support": SeniorSupportIllustration,
  "memory-support": MemorySupportIllustration,
  "overnight-care": OvernightCareIllustration,
  "transportation": TransportationIllustration,
};

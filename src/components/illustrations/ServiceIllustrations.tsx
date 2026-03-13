import { FC } from "react";

interface IllustrationProps {
  className?: string;
}

// Companion Care - Two people sitting together
export const CompanionCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Background */}
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Couch/bench */}
    <rect x="35" y="120" width="130" height="35" rx="8" fill="#D4A574" />
    <rect x="30" y="115" width="140" height="12" rx="4" fill="#C9A17A" />

    {/* Person 1 - sitting left */}
    <circle cx="70" cy="85" r="18" fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />
    <path d="M70 75 Q70 82 70 80" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="65" cy="82" r="2" fill="#8B7355" />
    <circle cx="75" cy="82" r="2" fill="#8B7355" />
    <path d="M65 88 Q70 92 75 88" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Body */}
    <path d="M55 103 Q70 95 85 103 L85 120 L55 120 Z" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1.5" />

    {/* Person 2 - sitting right */}
    <circle cx="130" cy="85" r="18" fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />
    <circle cx="125" cy="82" r="2" fill="#8B7355" />
    <circle cx="135" cy="82" r="2" fill="#8B7355" />
    <path d="M125 88 Q130 92 135 88" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Body */}
    <path d="M115 103 Q130 95 145 103 L145 120 L115 120 Z" fill="#C9A17A" stroke="#8B7355" strokeWidth="1.5" />

    {/* Heart between them */}
    <path d="M100 95 C100 90 93 88 93 93 C93 98 100 105 100 105 C100 105 107 98 107 93 C107 88 100 90 100 95" fill="#E07A7A" />

    {/* Coffee cups */}
    <rect x="58" y="108" width="8" height="10" rx="1" fill="#FFF8E7" stroke="#8B7355" strokeWidth="1" />
    <path d="M66 111 Q70 111 70 114 Q70 117 66 117" stroke="#8B7355" strokeWidth="1" fill="none" />
    <rect x="134" y="108" width="8" height="10" rx="1" fill="#FFF8E7" stroke="#8B7355" strokeWidth="1" />
  </svg>
);

// Personal Assistance - Caregiver helping person
export const PersonalAssistanceIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Person being helped */}
    <circle cx="85" cy="70" r="20" fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />
    <circle cx="80" cy="67" r="2" fill="#8B7355" />
    <circle cx="90" cy="67" r="2" fill="#8B7355" />
    <path d="M80 75 Q85 79 90 75" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Body */}
    <rect x="70" y="90" width="30" height="50" rx="8" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1.5" />
    {/* Arm reaching out */}
    <path d="M100 100 L115 95" stroke="#E8DDD4" strokeWidth="8" strokeLinecap="round" />
    <circle cx="118" cy="94" r="6" fill="#E8DDD4" stroke="#8B7355" strokeWidth="1" />

    {/* Caregiver */}
    <circle cx="135" cy="75" r="18" fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />
    <circle cx="130" cy="72" r="2" fill="#8B7355" />
    <circle cx="140" cy="72" r="2" fill="#8B7355" />
    <path d="M130 78 Q135 82 140 78" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Body */}
    <rect x="120" y="93" width="30" height="45" rx="8" fill="#C9A17A" stroke="#8B7355" strokeWidth="1.5" />
    {/* Helping arm */}
    <path d="M120 105 L105 100" stroke="#E8DDD4" strokeWidth="8" strokeLinecap="round" />
    <circle cx="102" cy="99" r="6" fill="#E8DDD4" stroke="#8B7355" strokeWidth="1" />

    {/* Sparkle/care symbol */}
    <path d="M155 60 L157 65 L163 65 L158 69 L160 75 L155 71 L150 75 L152 69 L147 65 L153 65 Z" fill="#D4A574" />
  </svg>
);

// Homemaking - Cozy house with heart
export const HomemakingIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* House */}
    {/* Roof */}
    <path d="M100 35 L160 85 L40 85 Z" fill="#C9A17A" stroke="#8B7355" strokeWidth="2" />

    {/* House body */}
    <rect x="50" y="85" width="100" height="70" fill="#FFF8E7" stroke="#8B7355" strokeWidth="2" />

    {/* Door */}
    <rect x="85" y="115" width="30" height="40" rx="3" fill="#8B7355" />
    <circle cx="108" cy="137" r="3" fill="#D4A574" />

    {/* Windows */}
    <rect x="58" y="95" width="22" height="22" rx="2" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1.5" />
    <path d="M58 106 L80 106 M69 95 L69 117" stroke="#8B7355" strokeWidth="1" />

    <rect x="120" y="95" width="22" height="22" rx="2" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1.5" />
    <path d="M120 106 L142 106 M131 95 L131 117" stroke="#8B7355" strokeWidth="1" />

    {/* Chimney */}
    <rect x="130" y="45" width="15" height="25" fill="#D4A574" stroke="#8B7355" strokeWidth="1.5" />

    {/* Smoke */}
    <circle cx="137" cy="38" r="4" fill="#E8DDD4" />
    <circle cx="142" cy="30" r="3" fill="#E8DDD4" />
    <circle cx="139" cy="23" r="2.5" fill="#E8DDD4" />

    {/* Heart on house */}
    <path d="M100 70 C100 65 92 63 92 68 C92 73 100 80 100 80 C100 80 108 73 108 68 C108 63 100 65 100 70" fill="#E07A7A" />

    {/* Little flowers/bushes */}
    <circle cx="45" cy="152" r="8" fill="#8B9977" />
    <circle cx="38" cy="148" r="6" fill="#8B9977" />
    <circle cx="155" cy="152" r="8" fill="#8B9977" />
    <circle cx="162" cy="148" r="6" fill="#8B9977" />
  </svg>
);

// Respite Care - Hands passing/relief symbol
export const RespiteCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Left hand (family) reaching */}
    <path d="M30 110 Q50 100 70 105 L75 95 L80 105 L85 93 L90 105 L95 97 L97 110 Q90 120 70 120 Q45 120 30 110"
          fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />

    {/* Right hand (caregiver) receiving */}
    <path d="M170 110 Q150 100 130 105 L125 95 L120 105 L115 93 L110 105 L105 97 L103 110 Q110 120 130 120 Q155 120 170 110"
          fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />

    {/* Heart being passed between hands */}
    <path d="M100 90 C100 82 88 78 88 86 C88 94 100 105 100 105 C100 105 112 94 112 86 C112 78 100 82 100 90"
          fill="#E07A7A" stroke="#C75050" strokeWidth="1" />

    {/* Peaceful zzz above */}
    <text x="55" y="70" fontFamily="serif" fontSize="16" fill="#8B7355">z</text>
    <text x="65" y="60" fontFamily="serif" fontSize="20" fill="#8B7355">z</text>
    <text x="78" y="48" fontFamily="serif" fontSize="24" fill="#8B7355">z</text>

    {/* Sun/warmth */}
    <circle cx="150" cy="50" r="15" fill="#D4A574" />
    <path d="M150 28 L150 22 M150 78 L150 72 M128 50 L122 50 M178 50 L172 50 M135 35 L130 30 M165 65 L170 70 M135 65 L130 70 M165 35 L170 30"
          stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />

    {/* Calming waves at bottom */}
    <path d="M30 150 Q55 140 80 150 Q105 160 130 150 Q155 140 170 150" stroke="#B8D4E3" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M40 165 Q60 157 85 165 Q110 173 135 165 Q160 157 175 165" stroke="#B8D4E3" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Senior Support - Elder with walking support
export const SeniorSupportIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Senior person */}
    <circle cx="80" cy="55" r="20" fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />
    {/* Glasses */}
    <circle cx="74" cy="53" r="5" fill="none" stroke="#8B7355" strokeWidth="1.5" />
    <circle cx="86" cy="53" r="5" fill="none" stroke="#8B7355" strokeWidth="1.5" />
    <path d="M79 53 L81 53" stroke="#8B7355" strokeWidth="1" />
    {/* Smile */}
    <path d="M74 61 Q80 66 86 61" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Hair/indication of elder */}
    <path d="M62 48 Q70 35 80 38 Q90 35 98 48" stroke="#A0A0A0" strokeWidth="2" fill="none" />

    {/* Body */}
    <rect x="65" y="75" width="30" height="55" rx="8" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1.5" />

    {/* Cane */}
    <path d="M55 85 L50 150" stroke="#8B7355" strokeWidth="4" strokeLinecap="round" />
    <path d="M45 85 Q50 80 55 85" stroke="#8B7355" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Caregiver supporting */}
    <circle cx="130" cy="60" r="18" fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />
    <circle cx="125" cy="57" r="2" fill="#8B7355" />
    <circle cx="135" cy="57" r="2" fill="#8B7355" />
    <path d="M125 64 Q130 68 135 64" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />

    {/* Caregiver body */}
    <rect x="115" y="78" width="30" height="50" rx="8" fill="#C9A17A" stroke="#8B7355" strokeWidth="1.5" />

    {/* Supporting arm */}
    <path d="M115 95 L95 90" stroke="#E8DDD4" strokeWidth="8" strokeLinecap="round" />
    <circle cx="93" cy="89" r="5" fill="#E8DDD4" stroke="#8B7355" strokeWidth="1" />

    {/* Ground/path */}
    <path d="M30 155 L170 155" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" />
    <path d="M40 162 L55 162 M75 162 L90 162 M110 162 L125 162 M145 162 L160 162" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// Memory Support - Head with gentle elements
export const MemorySupportIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Head profile */}
    <path d="M70 130 L70 90 Q70 50 100 50 Q140 50 140 90 L140 100 Q145 105 145 115 Q145 125 135 125 L135 130 Q135 145 115 150 L85 150 Q70 145 70 130"
          fill="#E8DDD4" stroke="#8B7355" strokeWidth="2" />

    {/* Face */}
    <circle cx="95" cy="85" r="3" fill="#8B7355" />
    <path d="M90 100 Q95 105 100 100" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" fill="none" />

    {/* Puzzle pieces in head (memories) */}
    <rect x="105" y="65" width="15" height="15" rx="2" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1" />
    <rect x="115" y="80" width="12" height="12" rx="2" fill="#C9A17A" stroke="#8B7355" strokeWidth="1" />
    <rect x="100" y="82" width="10" height="10" rx="2" fill="#E0D4E8" stroke="#8B7355" strokeWidth="1" />

    {/* Floating memories/thoughts */}
    <circle cx="55" cy="55" r="12" fill="#FFF8E7" stroke="#C9A17A" strokeWidth="1.5" />
    <text x="51" y="60" fontSize="12" fill="#8B7355">♪</text>

    <circle cx="155" cy="70" r="10" fill="#FFF8E7" stroke="#C9A17A" strokeWidth="1.5" />
    <path d="M150 70 L160 70 M155 65 L155 75" stroke="#8B7355" strokeWidth="1.5" />

    <circle cx="60" cy="90" r="8" fill="#FFF8E7" stroke="#C9A17A" strokeWidth="1" />

    {/* Caring hands cradling */}
    <path d="M45 120 Q35 130 40 145 Q45 155 60 155" stroke="#C9A17A" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M155 120 Q165 130 160 145 Q155 155 140 155" stroke="#C9A17A" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* Heart */}
    <path d="M100 165 C100 160 93 158 93 162 C93 166 100 172 100 172 C100 172 107 166 107 162 C107 158 100 160 100 165" fill="#E07A7A" />
  </svg>
);

// Overnight Care - Moon and bed
export const OvernightCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#2C3E50" fillOpacity="0.1" />
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Moon */}
    <circle cx="150" cy="45" r="25" fill="#D4A574" />
    <circle cx="160" cy="40" r="20" fill="#F5F0E8" />

    {/* Stars */}
    <path d="M55 40 L57 46 L63 46 L58 50 L60 56 L55 52 L50 56 L52 50 L47 46 L53 46 Z" fill="#C9A17A" />
    <path d="M80 55 L81 58 L84 58 L82 60 L83 63 L80 61 L77 63 L78 60 L76 58 L79 58 Z" fill="#C9A17A" />
    <path d="M120 35 L121 38 L124 38 L122 40 L123 43 L120 41 L117 43 L118 40 L116 38 L119 38 Z" fill="#C9A17A" />

    {/* Bed */}
    <rect x="35" y="130" width="130" height="8" rx="2" fill="#8B7355" />
    {/* Headboard */}
    <rect x="35" y="100" width="15" height="35" rx="3" fill="#8B7355" />
    {/* Footboard */}
    <rect x="150" y="115" width="15" height="20" rx="3" fill="#8B7355" />

    {/* Mattress */}
    <rect x="50" y="110" width="100" height="20" rx="4" fill="#FFF8E7" stroke="#D4A574" strokeWidth="1" />

    {/* Blanket */}
    <path d="M50 115 Q100 105 150 115 L150 130 L50 130 Z" fill="#B8D4E3" stroke="#8B7355" strokeWidth="1" />

    {/* Pillow */}
    <ellipse cx="70" cy="115" rx="18" ry="8" fill="#FFF8E7" stroke="#D4A574" strokeWidth="1" />

    {/* Sleeping person head */}
    <circle cx="70" cy="108" r="12" fill="#E8DDD4" stroke="#8B7355" strokeWidth="1.5" />
    {/* Closed eyes */}
    <path d="M65 107 Q67 105 69 107" stroke="#8B7355" strokeWidth="1" />
    <path d="M71 107 Q73 105 75 107" stroke="#8B7355" strokeWidth="1" />
    {/* Peaceful smile */}
    <path d="M67 112 Q70 114 73 112" stroke="#8B7355" strokeWidth="1" strokeLinecap="round" />

    {/* ZZZ */}
    <text x="90" y="95" fontFamily="serif" fontSize="14" fill="#8B7355" fontWeight="bold">z</text>
    <text x="100" y="85" fontFamily="serif" fontSize="18" fill="#8B7355" fontWeight="bold">z</text>
    <text x="112" y="73" fontFamily="serif" fontSize="22" fill="#8B7355" fontWeight="bold">z</text>

    {/* Nightstand with lamp */}
    <rect x="155" y="105" width="20" height="25" rx="2" fill="#C9A17A" stroke="#8B7355" strokeWidth="1" />
    <ellipse cx="165" cy="100" rx="8" ry="5" fill="#FFF8E7" stroke="#D4A574" strokeWidth="1" />
    <rect x="163" y="95" width="4" height="5" fill="#8B7355" />
  </svg>
);

// Transportation - Car with person
export const TransportationIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="100" cy="100" r="85" fill="#F5F0E8" />

    {/* Road */}
    <rect x="20" y="140" width="160" height="25" fill="#A0A0A0" />
    <path d="M30 152 L50 152 M70 152 L90 152 M110 152 L130 152 M150 152 L170 152" stroke="#FFF8E7" strokeWidth="3" strokeLinecap="round" />

    {/* Car body */}
    <path d="M45 130 L55 100 Q60 90 80 90 L120 90 Q140 90 145 100 L155 130 Z" fill="#B8D4E3" stroke="#8B7355" strokeWidth="2" />

    {/* Car bottom */}
    <rect x="40" y="125" width="120" height="20" rx="5" fill="#B8D4E3" stroke="#8B7355" strokeWidth="2" />

    {/* Windows */}
    <path d="M60 105 L67 95 Q70 92 80 92 L95 92 L95 105 Z" fill="#FFF8E7" stroke="#8B7355" strokeWidth="1" />
    <path d="M100 92 L120 92 Q130 92 133 95 L140 105 L100 105 Z" fill="#FFF8E7" stroke="#8B7355" strokeWidth="1" />

    {/* Person driving */}
    <circle cx="75" cy="100" r="6" fill="#E8DDD4" stroke="#8B7355" strokeWidth="1" />

    {/* Person passenger (senior) */}
    <circle cx="115" cy="100" r="6" fill="#E8DDD4" stroke="#8B7355" strokeWidth="1" />
    <path d="M112 98 Q115 95 118 98" stroke="#A0A0A0" strokeWidth="1" fill="none" />

    {/* Wheels */}
    <circle cx="65" cy="145" r="15" fill="#4A4A4A" stroke="#333" strokeWidth="2" />
    <circle cx="65" cy="145" r="7" fill="#8B7355" />
    <circle cx="135" cy="145" r="15" fill="#4A4A4A" stroke="#333" strokeWidth="2" />
    <circle cx="135" cy="145" r="7" fill="#8B7355" />

    {/* Destination pin */}
    <path d="M165 50 Q165 35 175 35 Q185 35 185 50 Q185 60 175 70 Q165 60 165 50" fill="#E07A7A" stroke="#C75050" strokeWidth="1.5" />
    <circle cx="175" cy="48" r="5" fill="#FFF8E7" />

    {/* Motion lines */}
    <path d="M25 120 L35 120 M20 130 L32 130 M25 140 L35 140" stroke="#C9A17A" strokeWidth="2" strokeLinecap="round" />

    {/* Trees/scenery in background */}
    <circle cx="40" cy="75" r="15" fill="#8B9977" />
    <rect x="37" y="85" width="6" height="15" fill="#8B7355" />
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

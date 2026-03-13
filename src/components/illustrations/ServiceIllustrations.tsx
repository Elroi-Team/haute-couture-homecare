import { FC } from "react";
import {
  Heart,
  HandHeart,
  Home,
  Coffee,
  UserCheck,
  Brain,
  Moon,
  Car,
} from "lucide-react";

interface IllustrationProps {
  className?: string;
}

// Wrapper component for consistent styling
const IllustrationWrapper: FC<{ children: React.ReactNode; accentColor?: string }> = ({
  children,
  accentColor = "#C9A17A"
}) => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Decorative background circles */}
    <div className="absolute w-48 h-48 rounded-full bg-champagne-light/60" />
    <div className="absolute w-36 h-36 rounded-full bg-seafoam-light/40" />
    <div className="absolute w-24 h-24 rounded-full bg-white/80 shadow-sm" />

    {/* Icon */}
    <div className="relative z-10 text-gold">
      {children}
    </div>

    {/* Decorative dots */}
    <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-gold/40" />
    <div className="absolute top-12 right-4 w-1.5 h-1.5 rounded-full bg-gold/30" />
    <div className="absolute bottom-8 left-6 w-2 h-2 rounded-full bg-seafoam/40" />
    <div className="absolute bottom-4 left-12 w-1.5 h-1.5 rounded-full bg-gold/20" />
  </div>
);

export const CompanionCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <Heart size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const PersonalAssistanceIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <HandHeart size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const HomemakingIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <Home size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const RespiteCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <Coffee size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const SeniorSupportIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <UserCheck size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const MemorySupportIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <Brain size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const OvernightCareIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <Moon size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
);

export const TransportationIllustration: FC<IllustrationProps> = ({ className = "" }) => (
  <div className={className}>
    <IllustrationWrapper>
      <Car size={56} strokeWidth={1.25} />
    </IllustrationWrapper>
  </div>
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

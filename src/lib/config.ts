// Site Configuration - Update these values with your actual information
export const siteConfig = {
  name: "Haute Couture Home Care",
  tagline: "Exceptional Care, Tailored to You",
  description:
    "Premium in-home care services in Wellington and Palm Beach County, FL",

  // Contact Information
  phone: "(561) 421-0745",
  email: "care@hautecouturehomecare.com",
  intakeEmail: "care@hautecouturehomecare.com",
  website: "www.hautecouturehomecare.com",

  // Service Area
  serviceArea: {
    primary: "Wellington",
    region: "Palm Beach County",
    state: "FL",
    cities: [
      "Wellington",
      "West Palm Beach",
      "Royal Palm Beach",
      "Palm Beach Gardens",
      "Jupiter",
      "Boca Raton",
      "Delray Beach",
      "Boynton Beach",
      "Lake Worth",
      "Palm Beach",
    ],
  },

  // Social Links (optional)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // Calendly URL
  calendlyUrl: "https://calendly.com/care-hautecouturehomecare/30min",

  // Google Analytics - UPDATE THIS
  gaId: "G-XXXXXXXXXX", // TODO: Replace with actual GA4 Measurement ID

  // Hours of Operation
  hours: {
    office: "Monday - Friday: 9:00 AM - 5:00 PM",
    care: "24/7 Care Available",
  },
} as const;

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  cta: { name: "Request Care", href: "/request-care" },
  footer: [
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export const services = [
  {
    id: "companion-care",
    title: "Companion Care",
    shortDescription:
      "Meaningful companionship and social engagement for your loved one.",
    description:
      "Our companion care services provide meaningful social interaction, mental stimulation, and emotional support. Caregivers engage in conversation, accompany clients on outings, assist with hobbies, and provide the human connection that enriches daily life.",
    features: [
      "Engaging conversation and companionship",
      "Accompaniment to appointments and social events",
      "Assistance with hobbies and recreational activities",
      "Light meal preparation and dining company",
      "Reading, games, and mental stimulation",
      "Emotional support and active listening",
    ],
    icon: "Heart",
  },
  {
    id: "personal-assistance",
    title: "Personal Assistance",
    shortDescription:
      "Dignified assistance with daily routines and activities.",
    description:
      "Our personal assistance services help maintain independence and dignity with sensitive, professional support. We assist clients with daily routines, grooming, dressing, and other activities while respecting privacy and personal preferences.",
    features: [
      "Grooming and personal hygiene reminders",
      "Dressing and wardrobe selection",
      "Mobility support and walking assistance",
      "Daily routine assistance",
      "Personal organization",
      "Maintaining dignity and independence",
    ],
    icon: "Sparkles",
  },
  {
    id: "homemaking",
    title: "Homemaking Services",
    shortDescription:
      "Maintain a pristine, comfortable living environment.",
    description:
      "Our homemaking services ensure a clean, organized, and comfortable home environment. From light housekeeping to meal preparation, we handle domestic tasks so clients can focus on what matters most.",
    features: [
      "Light housekeeping and tidying",
      "Laundry and linen care",
      "Meal planning and preparation",
      "Grocery shopping and errands",
      "Organization and decluttering",
      "Plant care and home maintenance coordination",
    ],
    icon: "Home",
  },
  {
    id: "respite-care",
    title: "Respite Care",
    shortDescription:
      "Reliable relief for family caregivers when you need it most.",
    description:
      "Our respite care provides family caregivers with the break they need while ensuring loved ones receive exceptional attention. Whether for a few hours or several days, we offer seamless, trustworthy coverage.",
    features: [
      "Flexible scheduling for caregiver relief",
      "Consistent, reliable coverage",
      "Detailed reporting to family",
      "Continuation of established routines",
      "Emergency and planned respite options",
      "Overnight and weekend availability",
    ],
    icon: "RefreshCw",
  },
  {
    id: "senior-support",
    title: "Senior Support",
    shortDescription:
      "Compassionate daily support for aging loved ones.",
    description:
      "Our senior support services provide compassionate assistance for daily living, helping your loved ones maintain their independence and quality of life in the comfort of their own home.",
    features: [
      "Daily check-ins and wellness visits",
      "Meal preparation and nutrition support",
      "Light exercise and activity encouragement",
      "Safety monitoring and fall prevention",
      "Appointment accompaniment",
      "Social engagement and stimulation",
    ],
    icon: "Activity",
  },
  {
    id: "memory-support",
    title: "Memory Support",
    shortDescription:
      "Compassionate support for those needing extra attention.",
    description:
      "Our memory support services provide patient, compassionate companionship for clients who benefit from additional attention and routine. We focus on maintaining dignity, comfort, and quality of life.",
    features: [
      "Engaging activities and stimulation",
      "Routine establishment and consistency",
      "Safety monitoring and supervision",
      "Patient, compassionate companionship",
      "Family communication and support",
      "Engagement with familiar activities",
    ],
    icon: "Brain",
  },
  {
    id: "overnight-care",
    title: "Overnight & Live-In Care",
    shortDescription:
      "Round-the-clock support for complete peace of mind.",
    description:
      "Our overnight and live-in options provide continuous support for clients who benefit from assistance throughout the day and night. We ensure safety, comfort, and companionship around the clock.",
    features: [
      "Nighttime presence and safety",
      "Evening and morning routine assistance",
      "Companionship and reassurance",
      "Light housekeeping duties",
      "Live-in and shift options",
      "Emergency contact readiness",
    ],
    icon: "Moon",
  },
  {
    id: "transportation",
    title: "Transportation & Errands",
    shortDescription:
      "Safe, reliable transportation and errand assistance.",
    description:
      "Our transportation services ensure clients can maintain appointments, social engagements, and independence. We provide door-to-door assistance, accompaniment, and help with errands.",
    features: [
      "Appointment transportation",
      "Grocery and shopping trips",
      "Social event accompaniment",
      "Pharmacy and store pickups",
      "Banking and postal errands",
      "Door-through-door assistance",
    ],
    icon: "Car",
  },
];

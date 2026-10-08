export const COURSE_MODULES = [
  {
    id: "module-1",
    title: "Editing Fundamentals",
    tagline: "Master Cuts, Timelines & Storytelling Pacing",
    icon: "Scissors",
    badge: "Module 01",
    bgGradient: "from-orange-500/20 via-red-500/10 to-transparent",
    description: "Build a rock-solid foundation in CapCut (Desktop & Mobile). Learn professional clip trimming, multi-track timeline organization, speed ramping, and narrative pacing used by top creators.",
    lessonsCount: 14,
    duration: "2h 45m",
    lessons: [
      { id: "1.1", title: "CapCut Desktop & Mobile Interface Deep Dive", duration: "12:30", type: "Video", freePreview: true },
      { id: "1.2", title: "Mastering the Blade Tool, Ripple Edits & J/L Cuts", duration: "18:45", type: "Video", freePreview: true },
      { id: "1.3", title: "Speed Ramping & Smooth Optical Flow Motion", duration: "15:20", type: "Video", freePreview: false },
      { id: "1.4", title: "Keyframe Animation Masterclass: Smooth Easing & Curves", duration: "22:10", type: "Video", freePreview: false },
      { id: "1.5", title: "Hands-on Project: Crafting a High-Paced Commercial Reel", duration: "35:00", type: "Project", freePreview: false }
    ],
    highlights: ["Optical Flow Motion Smoothness", "Custom Curve Keyframing", "J-Cut & L-Cut Audio Sync", "4K 60FPS Render Presets"]
  },
  {
    id: "module-2",
    title: "Color Grading & Aesthetics",
    tagline: "Turn Flat Footage into Hollywood Cinematic Visuals",
    icon: "Palette",
    badge: "Module 02",
    bgGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    description: "Transform ordinary phone & camera footage with color correction, LUTs, HSL wheel adjustments, skin tone protection, and moody cinematic color science.",
    lessonsCount: 16,
    duration: "3h 10m",
    lessons: [
      { id: "2.1", title: "Color Correction vs Color Grading Explained", duration: "14:15", type: "Video", freePreview: true },
      { id: "2.2", title: "Mastering HSL, Curves & Temperature Wheels", duration: "24:30", type: "Video", freePreview: false },
      { id: "2.3", title: "Skin Tone Protection & Background Masking", duration: "19:00", type: "Video", freePreview: false },
      { id: "2.4", title: "Applying & Customizing 3D LUTs for Vlogs & Commercials", duration: "16:40", type: "Video", freePreview: false },
      { id: "2.5", title: "Hands-on Project: Moody Cinematic Film Look Challenge", duration: "40:00", type: "Project", freePreview: false }
    ],
    highlights: ["Teal & Orange Color Palette", "Custom LUT Creation", "CapCut Color Scopes & Curves", "HDR & 10-bit Color Workflow"]
  },
  {
    id: "module-3",
    title: "Music & Sound Design",
    tagline: "Create Emotion Through Audio & Impactful SFX",
    icon: "Music",
    badge: "Module 03",
    bgGradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    description: "Learn sound selection, beat syncing, audio noise reduction, voiceover clarity enhancement, and layering 3D sound effects (Whooshes, Risers, Bass Drops).",
    lessonsCount: 12,
    duration: "2h 30m",
    lessons: [
      { id: "3.1", title: "The Psychology of Music & Track Selection", duration: "11:20", type: "Video", freePreview: true },
      { id: "3.2", title: "Automated Beat Matching & Rythm Cuts", duration: "16:50", type: "Video", freePreview: false },
      { id: "3.3", title: "Noise Reduction, EQ & Vocal Polish in CapCut", duration: "21:15", type: "Video", freePreview: false },
      { id: "3.4", title: "Layering Whooshes, Hits, Risers & Ambience", duration: "25:00", type: "Video", freePreview: false },
      { id: "3.5", title: "Hands-on Project: Immersive Audio Design for Action Trailer", duration: "32:00", type: "Project", freePreview: false }
    ],
    highlights: ["Beat-Sync Auto Markers", "Studio-Quality Vocal EQ", "500+ Royalty-Free SFX Library", "Audio Ducking & Volume Balancing"]
  },
  {
    id: "module-4",
    title: "Typography & Motion Graphics",
    tagline: "Pop Subtitles, 3D Captions & Dynamic Text",
    icon: "Type",
    badge: "Module 04",
    bgGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    description: "Hook viewers in the first 3 seconds with trending viral subtitles (Alex Hormozi style), 3D title tracking, neon glow effects, and animated text transitions.",
    lessonsCount: 15,
    duration: "2h 55m",
    lessons: [
      { id: "4.1", title: "Auto Captions & Custom Font Pairing", duration: "13:40", type: "Video", freePreview: true },
      { id: "4.2", title: "Viral Pop-up Subtitles (Hormozi / Cinematic style)", duration: "20:10", type: "Video", freePreview: false },
      { id: "4.3", title: "3D Motion Tracking Titles Behind Subjects", duration: "28:30", type: "Video", freePreview: false },
      { id: "4.4", title: "Lower Thirds, Text Masks & Neon Glow Effects", duration: "19:50", type: "Video", freePreview: false },
      { id: "4.5", title: "Hands-on Project: High-Retention Viral Reel Typography", duration: "35:00", type: "Project", freePreview: false }
    ],
    highlights: ["Auto-Caption Preset Styles", "Text Motion Tracking", "Custom Font Importing", "Kinetic Typography Animations"]
  }
];

export const STUDENT_PROJECTS = [
  {
    id: "project-1",
    title: "Cinematic Sri Lankan Travel Vlog",
    studentName: "Kasun Perera",
    views: "1.4M Views",
    platform: "Instagram Reel",
    category: "Vlog & Color Grade",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tags: ["Color Graded", "Speed Ramp", "Sound Layered"]
  },
  {
    id: "project-2",
    title: "Luxury Streetwear Brand Commercial",
    studentName: "Dilshan Fernando",
    views: "850K Views",
    platform: "TikTok Viral",
    category: "Commercial Edit",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    tags: ["Beat Synced", "Motion Tracking", "Pop Captions"]
  },
  {
    id: "project-3",
    title: "High Octane Sports & Fitness Edit",
    studentName: "Nipuni Silva",
    views: "620K Views",
    platform: "YouTube Short",
    category: "Action Pacing",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    tags: ["Sound FX", "Keyframing", "Optical Flow"]
  },
  {
    id: "project-4",
    title: "Moody Coffee Shop Storytelling Reel",
    studentName: "Sharanya Nair",
    views: "430K Views",
    platform: "Instagram Reel",
    category: "Aesthetic Edit",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    tags: ["Teal & Orange", "Ambient SFX", "Smooth Transitions"]
  }
];

export const ASSET_PACK_ITEMS = [
  { title: "500+ Premium SFX Pack", desc: "Whooshes, Risers, Cinematic Hits, Glitches, Pops & Ambience", icon: "Volume2", badge: "Audio Assets" },
  { title: "50+ Cinematic 3D LUTs", desc: "Teal & Orange, Moody Film, Cyberpunk, Vlog Warmth, Clean Commercial", icon: "Palette", badge: "Color Presets" },
  { title: "100+ Commercial Motion Fonts", desc: "Handpicked sans-serif, bold display fonts and animated font presets", icon: "Type", badge: "Typography" },
  { title: "CapCut Pro Keyboard Cheat Sheet", desc: "PDF & Wallpaper of desktop hotkeys to speed up editing 3x faster", icon: "Keyboard", badge: "Productivity" },
  { title: "Exclusive Discord & WhatsApp Group", desc: "Direct feedback from instructors & daily job opportunities in SL", icon: "Users", badge: "Community" },
  { title: "Verified Certificate of Completion", desc: "Sharable digital certificate with QR verification code for portfolio", icon: "Award", badge: "Certificate" }
];

export const COMPARISON_DATA = [
  { feature: "Step-by-Step Sinhala + English Instruction", editorLK: true, youtube: false, traditional: false },
  { feature: "CapCut Desktop AND Mobile Masterclass", editorLK: true, youtube: false, traditional: false },
  { feature: "500+ Royalty-Free SFX & 50+ Cinematic LUT Pack", editorLK: true, youtube: false, traditional: false },
  { feature: "Lifetime Access & Continuous Software Updates", editorLK: true, youtube: false, traditional: false },
  { feature: "Direct Instructor Video Feedback on Your Edits", editorLK: true, youtube: false, traditional: false },
  { feature: "Private Creator Community & Freelance Job Board", editorLK: true, youtube: false, traditional: false },
  { feature: "100% Refund Guarantee within 7 Days", editorLK: true, youtube: false, traditional: false },
];

export const FAQ_DATA = [
  {
    q: "Do I need an expensive PC or Laptop to take this course?",
    a: "No! CapCut runs smoothly on both standard mobile phones (Android & iOS) and basic PCs/Macs. We teach techniques for both mobile and desktop platforms so you can edit anywhere."
  },
  {
    q: "In what language is the course taught?",
    a: "The masterclass is delivered in clear, easy-to-understand Sinhala mixed with standard English technical terms, making it 100% beginner friendly regardless of your background."
  },
  {
    q: "How long do I have access to the lessons?",
    a: "You get LIFETIME access! You can re-watch any video, re-download resource files, and access new bonus lessons whenever you want at your own pace."
  },
  {
    q: "Is CapCut free to use?",
    a: "Yes! CapCut is completely free. We also show you how to unlock pro-level cinematic results without paying for expensive subscription software."
  },
  {
    q: "How do I enroll and pay in Sri Lanka?",
    a: "You can enroll instantly using any Credit/Debit card (Visa, Mastercard) or via Direct Bank Transfer (Commercial Bank, Sampath, HNB, BOK) with manual slip upload."
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "Yes! Once you complete the course modules and submit your capstone project, you receive a verified digital Certificate of Completion to showcase to clients."
  }
];

export const TESTIMONIALS = [
  {
    name: "Ravindu Wickremasinghe",
    role: "Content Creator (120k Followers)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "Before Editor.lk, my videos lacked pacing and color depth. Within 2 weeks of taking this masterclass, my Reels views jumped from 2k to over 500k! The SFX pack alone is worth double the price.",
    rating: 5,
    city: "Colombo"
  },
  {
    name: "Sanduni Jayasooriya",
    role: "Freelance Video Editor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "I used to think you needed Premiere Pro to get client work. Editor.lk proved CapCut Desktop can deliver 100% professional results. I landed my first $500 client last week!",
    rating: 5,
    city: "Kandy"
  },
  {
    name: "Akila Rathnayake",
    role: "Mobile Vlogger",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "The audio sound design section changed everything for me. Learning how to properly layer whooshes and background ambience turned my simple phone footage into cinematic movies.",
    rating: 5,
    city: "Galle"
  }
];

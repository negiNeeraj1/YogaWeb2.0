const DarkModeClasses = {
  
  gradients: {

    primary: {
      normal:
        "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600",
      text: "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white",
    },
    
    secondary:
      "bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600",
    success:
      "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
    warning:
      "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
    info: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    subtle:
      "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    glass:
      "bg-gradient-to-r from-white/10 to-white/30 dark:from-gray-900/10 dark:to-gray-900/30 backdrop-blur-lg",
    card: {
      purple:
        "bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20",
      blue: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20",
      green:
        "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
      orange:
        "bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20",
    },
    text: "bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent",
    border:
      "border border-gradient-to-r from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30",
    // Ocean Theme
    ocean:
      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
    deepSea:
      "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600",

    // Sunset Theme
    sunset:
      "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600",
    dusk: "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600",

    // Forest Theme
    forest:
      "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600",
    jungle:
      "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600",

    // Galaxy Theme
    galaxy:
      "bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600",
    nebula:
      "bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600",

    // Fire Theme
    fire: "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600",
    ember:
      "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",

    // Ice Theme
    ice: "bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600",
    frost:
      "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600",

    // Earth Theme
    earth:
      "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600",
    desert:
      "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",

    // Glass Effects
    glassOcean:
      "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20",
    glassFire:
      "bg-gradient-to-br from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20",
    glassForest:
      "bg-gradient-to-br from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20",
    glassIce:
      "bg-gradient-to-br from-sky-500/10 to-cyan-500/10 dark:from-sky-500/20 dark:to-cyan-500/20",
    glassSunset:
      "bg-gradient-to-br from-orange-500/10 to-rose-500/10 dark:from-orange-500/20 dark:to-rose-500/20",
    glassGalaxy:
      "bg-gradient-to-br from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/20 dark:to-violet-500/20",

    // Card Backgrounds
    cardOcean:
      "bg-gradient-to-br from-blue-900/40 to-cyan-900/40 dark:from-blue-600/20 dark:to-cyan-600/20",
    cardFire:
      "bg-gradient-to-br from-red-900/40 to-orange-900/40 dark:from-red-600/20 dark:to-orange-600/20",
    cardForest:
      "bg-gradient-to-br from-emerald-900/40 to-green-900/40 dark:from-emerald-600/20 dark:to-green-600/20",
    cardIce:
      "bg-gradient-to-br from-sky-900/40 to-cyan-900/40 dark:from-sky-600/20 dark:to-cyan-600/20",
    cardSunset:
      "bg-gradient-to-br from-orange-900/40 to-rose-900/40 dark:from-orange-600/20 dark:to-rose-600/20",
    cardGalaxy:
      "bg-gradient-to-br from-indigo-900/40 to-violet-900/40 dark:from-indigo-600/20 dark:to-violet-600/20",

    // Text Gradients
    textOcean:
      "bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent",
    textFire:
      "bg-gradient-to-r from-red-400 to-orange-400 dark:from-red-300 dark:to-orange-300 bg-clip-text text-transparent",
    textForest:
      "bg-gradient-to-r from-emerald-400 to-green-400 dark:from-emerald-300 dark:to-green-300 bg-clip-text text-transparent",
    textIce:
      "bg-gradient-to-r from-sky-400 to-cyan-400 dark:from-sky-300 dark:to-cyan-300 bg-clip-text text-transparent",
    textSunset:
      "bg-gradient-to-r from-orange-400 to-rose-400 dark:from-orange-300 dark:to-rose-300 bg-clip-text text-transparent",
    textGalaxy:
      "bg-gradient-to-r from-indigo-400 to-violet-400 dark:from-indigo-300 dark:to-violet-300 bg-clip-text text-transparent",

    // Borders
    borderOcean:
      "border border-gradient-to-r from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30",
    borderFire:
      "border border-gradient-to-r from-red-500/20 to-orange-500/20 dark:from-red-500/30 dark:to-orange-500/30",
    borderForest:
      "border border-gradient-to-r from-emerald-500/20 to-green-500/20 dark:from-emerald-500/30 dark:to-green-500/30",
    borderIce:
      "border border-gradient-to-r from-sky-500/20 to-cyan-500/20 dark:from-sky-500/30 dark:to-cyan-500/30",
    borderSunset:
      "border border-gradient-to-r from-orange-500/20 to-rose-500/20 dark:from-orange-500/30 dark:to-rose-500/30",
    borderGalaxy:
      "border border-gradient-to-r from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/30 dark:to-violet-500/30",
  },

  // Container styles
  container:
    "bg-white dark:bg-[#0F172A] transition-all duration-300 ease-in-out",

  // Card variations
  card: {
    default:
      "bg-white dark:bg-[#1E293B] border border-gray-100 dark:border-[#2D3D53] shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300",
    gradient:
      "bg-gradient-to-br from-white to-gray-50 dark:from-[#1E293B] dark:to-[#0F172A] border border-gray-100 dark:border-[#2D3D53] shadow-lg hover:shadow-xl dark:shadow-none transition-all duration-300",
    glassPurple:
      "backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-white/20 dark:border-gray-800/20",
    glassBlue:
      "backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-white/20 dark:border-gray-800/20",
    glassGreen:
      "backdrop-blur-md bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-white/20 dark:border-gray-800/20",
    ocean:
      "backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-600/20 dark:to-cyan-600/20 border border-white/20 dark:border-gray-800/20",
    fire: "backdrop-blur-md bg-gradient-to-br from-red-500/10 to-orange-500/10 dark:from-red-600/20 dark:to-orange-600/20 border border-white/20 dark:border-gray-800/20",
    forest:
      "backdrop-blur-md bg-gradient-to-br from-emerald-500/10 to-green-500/10 dark:from-emerald-600/20 dark:to-green-600/20 border border-white/20 dark:border-gray-800/20",
    ice: "backdrop-blur-md bg-gradient-to-br from-sky-500/10 to-cyan-500/10 dark:from-sky-600/20 dark:to-cyan-600/20 border border-white/20 dark:border-gray-800/20",
    sunset:
      "backdrop-blur-md bg-gradient-to-br from-orange-500/10 to-rose-500/10 dark:from-orange-600/20 dark:to-rose-600/20 border border-white/20 dark:border-gray-800/20",
    galaxy:
      "backdrop-blur-md bg-gradient-to-br from-indigo-500/10 to-violet-500/10 dark:from-indigo-600/20 dark:to-violet-600/20 border border-white/20 dark:border-gray-800/20",
  },

  // Typography system
  text: {
    primary: "text-gray-900 dark:text-gray-100 transition-colors duration-300",
    secondary:
      "text-gray-700 dark:text-gray-300 transition-colors duration-300",
    accent: "text-gray-500 dark:text-gray-400 transition-colors duration-300",
    muted: "text-gray-400 dark:text-gray-500 transition-colors duration-300",
    gradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300",
    heading:
      "font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300",
  },

  // Form elements
  input: {
    default:
      "bg-white dark:bg-[#1E293B] border-gray-200 dark:border-[#2D3D53] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300",
    search:
      "pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#2D3D53] border-gray-200 dark:border-[#374151] rounded-full focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300",
    textarea:
      "resize-none bg-white dark:bg-[#1E293B] border-gray-200 dark:border-[#2D3D53] rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300",
  },

  // Enhanced button system
  button: {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white shadow-sm hover:shadow-md transition-all duration-300",
    secondary:
      "bg-gray-100 hover:bg-gray-200 dark:bg-[#2D3D53] dark:hover:bg-[#374151] text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md transition-all duration-300",
    outline:
      "border border-gray-300 dark:border-[#2D3D53] hover:bg-gray-50 dark:hover:bg-[#1E293B] text-gray-700 dark:text-gray-300 transition-all duration-300",
    danger:
      "bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-white shadow-sm hover:shadow-md transition-all duration-300",
    success:
      "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white shadow-sm hover:shadow-md transition-all duration-300",
    gradient:
      "bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-400 hover:from-purple-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300",
  },

  // Navigation elements
  nav: {
    default:
      "bg-white dark:bg-[#1E293B] border-b border-gray-100 dark:border-[#2D3D53] shadow-sm dark:shadow-none transition-colors duration-300",
    transparent:
      "bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-md border-b border-gray-100 dark:border-[#2D3D53] shadow-sm dark:shadow-none transition-colors duration-300",
    item: "px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2D3D53] rounded-md transition-colors duration-300",
    active:
      "px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md transition-colors duration-300",
  },

  // Sidebar styling
  sidebar: {
    default:
      "bg-gray-50 dark:bg-[#1E293B] border-r border-gray-100 dark:border-[#2D3D53] transition-colors duration-300",
    floating:
      "bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-md border border-gray-100 dark:border-[#2D3D53] rounded-2xl shadow-xl transition-colors duration-300",
  },

  // Accent colors for various states
  accent: {
    primary:
      "text-indigo-600 dark:text-indigo-400 transition-colors duration-300",
    success:
      "text-emerald-600 dark:text-emerald-400 transition-colors duration-300",
    warning:
      "text-amber-600 dark:text-amber-400 transition-colors duration-300",
    error: "text-rose-600 dark:text-rose-400 transition-colors duration-300",
    info: "text-blue-600 dark:text-blue-400 transition-colors duration-300",
  },

  // Background variations
  background: {
    primary: "bg-white dark:bg-[#0F172A] transition-colors duration-300",
    secondary: "bg-gray-50 dark:bg-[#1E293B] transition-colors duration-300",
    tertiary: "bg-gray-100 dark:bg-[#2D3D53] transition-colors duration-300",
    gradient:
      "bg-gradient-to-br from-gray-50 to-white dark:from-[#0F172A] dark:to-[#1E293B] transition-colors duration-300",
    ocean:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10",
    fire: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10",
    forest:
      "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10",
    ice: "bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/10 dark:to-cyan-900/10",
    sunset:
      "bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-900/10 dark:to-rose-900/10",
    galaxy:
      "bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/10 dark:to-violet-900/10",
  },

  backgroundGradient: {
    primary:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0F172A] dark:to-[#1E293B]",
    secondary:
      "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10",
    tertiary:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10",
  },

  // Dividers and borders
  divider: {
    default:
      "border-gray-200 dark:border-[#2D3D53] transition-colors duration-300",
    gradient:
      "border-t border-gradient-to-r from-gray-200 to-gray-300 dark:from-[#2D3D53] dark:to-[#374151] transition-colors duration-300",
  },

  // Enhanced hover effects
  hover: {
    card: "hover:shadow-lg dark:hover:shadow-[#0F172A]/50 hover:-translate-y-1 transition-all duration-300",
    button:
      "hover:opacity-90 active:opacity-100 hover:-translate-y-0.5 transition-all duration-300",
    text: "hover:opacity-90 active:opacity-100 transition-all duration-100 hover:bg-gray-500 hover:text-gray-300",
    icon: "transition-all duration-300 hover:text-rose-500 active:text-rose-600 hover:scale-110",
    link: "hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline transition-all duration-300",
  },

  // Status indicators
  status: {
    online: "bg-green-500 dark:bg-green-400",
    offline: "bg-gray-400 dark:bg-gray-500",
    busy: "bg-red-500 dark:bg-red-400",
    away: "bg-yellow-500 dark:bg-yellow-400",
  },

  // Animations
  animation: {
    fadeIn: "animate-fadeIn",
    slideIn: "animate-slideIn",
    bounce: "animate-bounce",
    pulse: "animate-pulse",
    spin: "animate-spin",
  },

  // Glass morphism effects
  glass: {
    panel:
      "backdrop-blur-lg bg-white/30 dark:bg-[#1E293B]/30 border border-white/30 dark:border-[#2D3D53]/30 shadow-xl",
    card: "backdrop-blur-md bg-white/20 dark:bg-[#1E293B]/20 border border-white/20 dark:border-[#2D3D53]/20 shadow-lg",
  },
};

export default DarkModeClasses;

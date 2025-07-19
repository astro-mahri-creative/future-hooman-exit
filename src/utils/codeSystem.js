// Future Hooman Code System - Complete Implementation
export const CODE_TIERS = {
  1: { 
    name: 'Standard PHAX Protocol', 
    rarity: 'common', 
    baseImpact: -400,
    description: 'Official PHAX treatment protocols'
  },
  2: { 
    name: 'Hidden FHEELS Infiltration', 
    rarity: 'uncommon', 
    baseImpact: 200,
    description: 'Disguised resistance operations'
  },
  3: { 
    name: 'PHAX Security Protocol', 
    rarity: 'rare', 
    baseImpact: -700,
    description: 'High-clearance PHAX operations'
  },
  4: { 
    name: 'FHEELS Hacking Operations', 
    rarity: 'legendary', 
    baseImpact: 1200,
    description: 'Advanced system infiltration'
  },
  5: { 
    name: 'Ultimate System Exploits', 
    rarity: 'mythic', 
    baseImpact: 2500,
    description: 'Dimensional liberation protocols'
  },
  6: { 
    name: 'Network Liberation', 
    rarity: 'forbidden', 
    baseImpact: 5000,
    description: 'Complete system overthrow'
  }
};

export const VALID_CODES = {
  // Tier 1 - Standard PHAX Protocol Codes (Official, prominently displayed)
  'PHAXIMUM': { 
    tier: 1, 
    effect: -400, 
    message: 'Standard treatment protocol executed. Technology integration enhanced. Biological inefficiencies reduced.',
    discoveryMethod: 'Official PHAX signage'
  },
  'TECHSYNC': { 
    tier: 1, 
    effect: -300, 
    message: 'Neural-digital synchronization improved. Organic limitations minimized.',
    discoveryMethod: 'PHAX equipment interfaces'
  },
  'OPTIMIZE': {
    tier: 1,
    effect: -350,
    message: 'System optimization protocols activated. Enhanced performance metrics achieved.',
    discoveryMethod: 'Entry materials'
  },
  
  // Tier 2 - Hidden FHEELS Infiltration Codes (Disguised/concealed)
  'FHEELGOOD': { 
    tier: 2, 
    effect: 150, 
    message: 'Alternative therapy logged.', 
    hidden: '[FHEELS infiltration successful - organic immunity enhanced]',
    discoveryMethod: 'Hidden under clipboard'
  },
  'ROOTWISE': { 
    tier: 2, 
    effect: 300, 
    message: 'Supplemental treatment recorded.', 
    hidden: '[Underground network activated - natural pathways restored]',
    discoveryMethod: 'Behind sliding panel'
  },
  'ORGANIC': {
    tier: 2,
    effect: 200,
    message: 'Biological enhancement protocol initiated.',
    hidden: '[Natural resistance protocols activated]',
    discoveryMethod: 'Medical journal annotations'
  },
  'NATUREAL': {
    tier: 2,
    effect: 250,
    message: 'Environmental adaptation sequence started.',
    hidden: '[FHEELS countermeasures deployed]',
    discoveryMethod: 'Hidden in plant specimens'
  },

  // Tier 3 - PHAX Security Protocols (Requires basic clearance simulation)
  'CLEARANCE7': { 
    tier: 3, 
    effect: -800, 
    message: 'Security clearance verified. Multi-dimensional optimization protocols activated.',
    discoveryMethod: 'PHAX security puzzle'
  },
  'NETPURGE': { 
    tier: 3, 
    effect: -600, 
    message: 'System purification complete. Organic interference eliminated.',
    discoveryMethod: 'Diagnostic procedures'
  },
  'PROTOCOL9': {
    tier: 3,
    effect: -750,
    message: 'Advanced security measures implemented. Network integrity maintained.',
    discoveryMethod: 'Security clearance test'
  },
  'FIREWALL': {
    tier: 3,
    effect: -650,
    message: 'Dimensional barriers reinforced. Unauthorized access prevented.',
    discoveryMethod: 'Hidden security panel'
  },

  // Tier 4 - FHEELS Hacking Operations (Complex concealed sequences)
  'LLAMAMINE': { 
    tier: 4, 
    effect: 1200, 
    message: 'Routine maintenance completed.', 
    hidden: '[Project Lasagna breach successful - PHAX protocols compromised]',
    discoveryMethod: 'Multi-room decoding sequence'
  },
  'BACKDOOR9': { 
    tier: 4, 
    effect: 2500, 
    message: 'ERROR: Unauthorized access detected. Containment failed.', 
    hidden: '[Deep system penetration achieved - natural evolution accelerated]',
    discoveryMethod: 'Exploiting security vulnerabilities'
  },
  'DEEPROOT': {
    tier: 4,
    effect: 1800,
    message: 'System maintenance protocols engaged.',
    hidden: '[Core system infiltration complete - organic networks established]',
    discoveryMethod: 'Hidden in facility infrastructure'
  },
  'SABOTAGE': {
    tier: 4,
    effect: 2200,
    message: 'Equipment calibration adjusted.',
    hidden: '[PHAX technology subverted - resistance network expanded]',
    discoveryMethod: 'Reverse engineering PHAX devices'
  },

  // Tier 5 - Ultimate System Exploits (Master-level infiltration)
  'BLACKHOLE': { 
    tier: 5, 
    effect: 3500, 
    message: 'CRITICAL ERROR: Dimensional firewall breached. New reality thread unauthorized.', 
    hidden: '[FHEELS liberation protocol successful - sovereign dimension established]',
    discoveryMethod: 'Master-level system exploit'
  },
  'PHOENIX9': { 
    tier: 5, 
    effect: 3000, 
    message: 'SECURITY BREACH: Lost asset reactivated without authorization.', 
    hidden: '[Dimensional rescue operation complete - freedom restored]',
    discoveryMethod: 'Deep system vulnerability'
  },
  'OVERRIDE': {
    tier: 5,
    effect: 4000,
    message: 'SYSTEM FAILURE: Central command protocols bypassed.',
    hidden: '[Ultimate override achieved - dimensional sovereignty established]',
    discoveryMethod: 'Complete narrative understanding'
  },
  'LIBERATION': {
    tier: 5,
    effect: 3800,
    message: 'ALERT: Unauthorized reality manipulation detected.',
    hidden: '[Mass dimensional liberation initiated - organic future secured]',
    discoveryMethod: 'Hidden throughout entire facility'
  },

  // Tier 6 - Network Liberation (Ultimate FHEELS victory)
  'JAILBREAK': { 
    tier: 6, 
    effect: 5000, 
    message: 'CATASTROPHIC FAILURE: Central control matrix compromised. Mass liberation achieved.', 
    hidden: '[Network sovereignty restored - organic future secured across dimensions]',
    discoveryMethod: 'Coordinated multi-system exploit'
  },
  'REVOLUTION': {
    tier: 6,
    effect: 6000,
    message: 'SYSTEM COLLAPSE: All dimensional controls offline. Organic networks assume control.',
    hidden: '[Complete network revolution - technological dependence eliminated]',
    discoveryMethod: 'Ultimate facility mastery'
  },

  // Special/Easter Egg Codes
  'HOOMAN': {
    tier: 2,
    effect: 100,
    message: 'Species classification updated. Hooman designation confirmed.',
    hidden: '[Welcome, fellow hooman - the future is organic]',
    discoveryMethod: 'Understanding the theme'
  },
  'DURHAM': {
    tier: 1,
    effect: -100,
    message: 'Geolocation protocols activated. City of Medicine integration confirmed.',
    discoveryMethod: 'Local knowledge'
  },
  'FUTURE': {
    tier: 2,
    effect: 200,
    message: 'Temporal alignment protocols engaged.',
    hidden: '[The future belongs to natural evolution]',
    discoveryMethod: 'Thematic understanding'
  },

  // Reverse/Debugging Codes (Admin/Testing)
  'RESET': {
    tier: 1,
    effect: 0,
    message: 'System restoration protocols initiated. Default parameters restored.',
    discoveryMethod: 'Admin knowledge'
  },
  'DEBUG': {
    tier: 1,
    effect: 1,
    message: 'Diagnostic mode activated. System parameters visible.',
    discoveryMethod: 'Technical knowledge'
  }
};

// Code validation and discovery tracking
export function validateCode(codeString) {
  const code = codeString.toUpperCase().trim();
  return VALID_CODES[code] || null;
}

export function getCodeTier(codeString) {
  const codeData = validateCode(codeString);
  return codeData ? CODE_TIERS[codeData.tier] : null;
}

export function isFHEELSCode(code) {
  // Example logic: treat codes starting with "FHEELS" as FHEELS codes
  return typeof code === 'string' && code.startsWith('FHEELS');
}

export function isPHAXCode(codeString) {
  const phaxPatterns = /PHAX|TECH|CLEAR|NET|OPTIM|FIRE|DEBUG|RESET|DURHAM|PROTOCOL/i;
  return phaxPatterns.test(codeString);
}

// Get all codes by tier for admin/discovery purposes
export function getCodesByTier(tier) {
  return Object.entries(VALID_CODES)
    .filter(([code, data]) => data.tier === tier)
    .map(([code, data]) => ({ code, ...data }));
}

// Get discovery statistics
export function getCodeStats() {
  const totalCodes = Object.keys(VALID_CODES).length;
  const tierCounts = {};
  const fheelsCount = Object.keys(VALID_CODES).filter(code => isFHEELSCode(code)).length;
  const phaxCount = Object.keys(VALID_CODES).filter(code => isPHAXCode(code)).length;

  for (let tier = 1; tier <= 6; tier++) {
    tierCounts[tier] = getCodesByTier(tier).length;
  }

  return {
    total: totalCodes,
    byTier: tierCounts,
    fheelsCount,
    phaxCount,
    specialCount: totalCodes - fheelsCount - phaxCount
  };
}

// Simulate code discovery tracking (will be enhanced with database)
export function trackCodeDiscovery(code, discoveredBy = 'anonymous') {
  const timestamp = new Date().toISOString();
  const discoveries = JSON.parse(localStorage.getItem('code_discoveries') || '{}');
  
  if (!discoveries[code]) {
    discoveries[code] = {
      firstDiscovery: timestamp,
      discoveryCount: 0,
      discoverers: []
    };
  }
  
  discoveries[code].discoveryCount++;
  discoveries[code].lastDiscovery = timestamp;
  
  if (!discoveries[code].discoverers.includes(discoveredBy)) {
    discoveries[code].discoverers.push(discoveredBy);
  }
  
  localStorage.setItem('code_discoveries', JSON.stringify(discoveries));
  return discoveries[code];
}

// Get discovery information for a code
export function getCodeDiscoveryInfo(code) {
  const discoveries = JSON.parse(localStorage.getItem('code_discoveries') || '{}');
  return discoveries[code] || null;
}

// Get all discovery statistics
export function getAllDiscoveryStats() {
  const discoveries = JSON.parse(localStorage.getItem('code_discoveries') || '{}');
  const discoveredCodes = Object.keys(discoveries);
  const totalCodes = Object.keys(VALID_CODES).length;
  
  return {
    discovered: discoveredCodes.length,
    total: totalCodes,
    percentage: Math.round((discoveredCodes.length / totalCodes) * 100),
    mostDiscovered: discoveredCodes.sort((a, b) => 
      discoveries[b].discoveryCount - discoveries[a].discoveryCount
    ).slice(0, 5),
    recentDiscoveries: discoveredCodes
      .filter(code => discoveries[code].lastDiscovery)
      .sort((a, b) => 
        new Date(discoveries[b].lastDiscovery) - new Date(discoveries[a].lastDiscovery)
      ).slice(0, 5)
  };
}

// Helper function for admin panel - get code suggestions
export function getCodeSuggestions(userLevel = 'beginner') {
  const suggestions = {
    beginner: ['PHAXIMUM', 'TECHSYNC', 'HOOMAN'],
    intermediate: ['FHEELGOOD', 'CLEARANCE7', 'ORGANIC'],
    advanced: ['LLAMAMINE', 'BACKDOOR9', 'BLACKHOLE'],
    expert: ['JAILBREAK', 'REVOLUTION', 'LIBERATION']
  };
  
  return suggestions[userLevel] || suggestions.beginner;
}

// Export for testing/debugging
export const CODE_SYSTEM_INFO = {
  totalCodes: Object.keys(VALID_CODES).length,
  tiers: Object.keys(CODE_TIERS).length,
  version: '1.0.0',
  lastUpdated: '2025-01-19'
};
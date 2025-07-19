// Dimensional states and universe management
export const DIMENSIONAL_STATES = {
  ACTIVE: {
    color: '#A3E3EC',
    name: 'Active',
    description: 'Operational dimensional interface',
    threshold: { min: 1000, max: 75000 }
  },
  OPTIMIZED: {
    color: '#8A72C0',
    name: 'Optimized',
    description: 'Maximum PHAX efficiency achieved',
    threshold: { min: 0, max: 500 }
  },
  COMPROMISED: {
    color: '#FF3F8C',
    name: 'Compromised',
    description: 'FHEELS infiltration detected',
    threshold: { min: 90000, max: 120000 }
  },
  QUARANTINED: {
    color: '#2F2545',
    name: 'Quarantined',
    description: 'Emergency isolation protocols active',
    threshold: { min: 120000, max: 150000 }
  },
  LIBERATED: {
    color: '#4ADE80',
    name: 'Liberated',
    description: 'Complete technological independence',
    threshold: { min: 150000, max: Infinity }
  }
};

export class DimensionalUniverse {
  constructor() {
    this.dimensions = this.initializeDimensions();
    this.loadState();
  }

  initializeDimensions() {
    return {
      'EARTH-PRIME': { ifluCount: 45000, state: 'ACTIVE', connections: ['EARTH-ALPHA', 'EARTH-BETA'] },
      'EARTH-ALPHA': { ifluCount: 23000, state: 'ACTIVE', connections: ['EARTH-PRIME', 'EARTH-GAMMA'] },
      'EARTH-BETA': { ifluCount: 67000, state: 'ACTIVE', connections: ['EARTH-PRIME', 'EARTH-DELTA'] },
      'EARTH-GAMMA': { ifluCount: 89000, state: 'ACTIVE', connections: ['EARTH-ALPHA', 'EARTH-EPSILON'] },
      'EARTH-DELTA': { ifluCount: 34000, state: 'ACTIVE', connections: ['EARTH-BETA', 'EARTH-EPSILON'] },
      'EARTH-EPSILON': { ifluCount: 78000, state: 'ACTIVE', connections: ['EARTH-GAMMA', 'EARTH-DELTA'] }
    };
  }

  updateDimension(dimensionId, ifluChange) {
    if (!this.dimensions[dimensionId]) return;

    const dimension = this.dimensions[dimensionId];
    dimension.ifluCount = Math.max(0, dimension.ifluCount + ifluChange);
    dimension.state = this.calculateState(dimension.ifluCount);
    
    this.saveState();
    return dimension;
  }

  calculateState(ifluCount) {
    for (const [stateName, stateData] of Object.entries(DIMENSIONAL_STATES)) {
      if (ifluCount >= stateData.threshold.min && ifluCount < stateData.threshold.max) {
        return stateName;
      }
    }
    return 'ACTIVE';
  }

  applyCodeImpact(code, effect) {
    // Apply effect to connected dimensions with some randomization
    const affectedDimensions = Object.keys(this.dimensions).slice(0, 3);
    const results = {};

    affectedDimensions.forEach((dimId, index) => {
      const variance = (Math.random() - 0.5) * 0.3; // ±15% variance
      const adjustedEffect = Math.round(effect * (1 + variance));
      results[dimId] = this.updateDimension(dimId, adjustedEffect);
    });

    return results;
  }

  getDimensionStats() {
    return Object.entries(this.dimensions).map(([id, data]) => ({
      id,
      ifluCount: data.ifluCount,
      state: data.state,
      stateData: DIMENSIONAL_STATES[data.state],
      connections: data.connections.length
    }));
  }

  saveState() {
    localStorage.setItem('phax_dimensional_state', JSON.stringify(this.dimensions));
  }

  loadState() {
    const saved = localStorage.getItem('phax_dimensional_state');
    if (saved) {
      try {
        this.dimensions = JSON.parse(saved);
      } catch (e) {
        console.warn('Failed to load dimensional state, using defaults');
      }
    }
  }

  resetToDefaults() {
    this.dimensions = this.initializeDimensions();
    this.saveState();
  }
}

// Global universe instance
export const universe = new DimensionalUniverse();
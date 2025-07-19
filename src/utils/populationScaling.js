// Population scaling utility with admin controls
export class PopulationScaleManager {
  constructor() {
    this.defaultScale = parseFloat(import.meta.env.VITE_POPULATION_SCALE_DEFAULT) || 1.0;
    this.currentScale = this.defaultScale;
  }

  // Apply scaling to base impact values
  applyScale(baseImpact) {
    return Math.round(baseImpact * this.currentScale);
  }

  // Admin function to update scaling
  async updateScale(newScale, reason = '') {
    // This will call the admin API endpoint
    try {
      const response = await fetch('/.netlify/functions/admin-update-scale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          scale: newScale, 
          reason,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        this.currentScale = newScale;
        return { success: true };
      }
    } catch (error) {
      console.error('Failed to update population scale:', error);
      return { success: false, error };
    }
  }

  // Get current scaling info
  getCurrentScale() {
    return {
      scale: this.currentScale,
      isDefault: this.currentScale === this.defaultScale,
      lastUpdated: localStorage.getItem('scale_last_updated')
    };
  }
}

export const populationManager = new PopulationScaleManager();
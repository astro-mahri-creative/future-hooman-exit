import React, { useState, useEffect } from 'react';
import { Settings, Users, Database, AlertTriangle } from 'lucide-react';
import { getCodeStats, getAllDiscoveryStats, getCodeSuggestions } from '../utils/codeSystem';
import { populationManager } from '../utils/populationScaling';

const AdminPanel = ({ isVisible, onClose }) => {
  const [currentScale, setCurrentScale] = useState(1.0);
  const [newScale, setNewScale] = useState(1.0);
  const [reason, setReason] = useState('');
  const [stats, setStats] = useState({
    todayVisitors: 12,
    totalSubmissions: 8,
    avgImpact: 247
  });

  useEffect(() => {
    if (isVisible) {
      const scaleInfo = populationManager.getCurrentScale();
      setCurrentScale(scaleInfo.scale);
      setNewScale(scaleInfo.scale);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleScaleUpdate = async () => {
    const result = await populationManager.updateScale(newScale, reason);
    if (result.success) {
      setCurrentScale(newScale);
      setReason('');
      console.log('Scale updated successfully');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-phax-dark border-2 border-phax-purple p-6 max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Settings className="text-phax-cyan" size={24} />
            <h2 className="text-xl font-bold text-phax-cyan">PHAX Admin Controls</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-phax-cyan hover:text-white text-xl"
          >
            ×
          </button>
        </div>

        {/* Population Scaling Controls */}
        <div className="bg-phax-purple p-4 mb-4">
          <h3 className="font-bold text-phax-dark mb-3 flex items-center gap-2">
            <Users size={20} />
            Population Scaling Control
          </h3>
          
          <div className="grid grid-cols-2 gap-4 text-phax-dark">
            <div>
              <label className="block text-sm font-semibold mb-1">Current Scale</label>
              <div className="text-2xl font-bold">{currentScale.toFixed(1)}x</div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-1">New Scale</label>
              <input 
                type="range" 
                min="0.1" 
                max="5.0" 
                step="0.1"
                value={newScale}
                onChange={(e) => setNewScale(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-center font-bold">{newScale.toFixed(1)}x</div>
            </div>
          </div>

          <div className="mt-3">
            <input 
              type="text"
              placeholder="Reason for change (optional)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 bg-phax-cyan text-phax-dark font-semibold"
            />
          </div>

          <button 
            onClick={handleScaleUpdate}
            className="mt-3 bg-phax-pink text-phax-dark font-bold px-4 py-2 hover:bg-white transition-colors"
          >
            Update Population Scale
          </button>
        </div>

        {/* Code Discovery Statistics */}
<div className="bg-phax-cyan p-4 mb-4 text-phax-dark">
  <h3 className="font-bold mb-3 flex items-center gap-2">
    <Database size={20} />
    Code Discovery Statistics
  </h3>
  
  {(() => {
    const codeStats = getCodeStats();
    const discoveryStats = getAllDiscoveryStats();
    
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-bold">Total Codes: {codeStats.total}</div>
            <div>Discovered: {discoveryStats.discovered} ({discoveryStats.percentage}%)</div>
          </div>
          <div>
            <div className="font-bold">By Organization:</div>
            <div>FHEELS: {codeStats.fheelsCount} | PHAX: {codeStats.phaxCount}</div>
          </div>
        </div>
        
        <div>
          <div className="font-bold text-sm mb-1">Codes by Tier:</div>
          <div className="text-xs grid grid-cols-6 gap-1">
            {Object.entries(codeStats.byTier).map(([tier, count]) => (
              <div key={tier}>T{tier}: {count}</div>
            ))}
          </div>
        </div>
        
        {discoveryStats.recentDiscoveries.length > 0 && (
          <div>
            <div className="font-bold text-sm mb-1">Recent Discoveries:</div>
            <div className="text-xs">
              {discoveryStats.recentDiscoveries.slice(0, 3).join(', ')}
            </div>
          </div>
        )}
      </div>
    );
  })()}
</div>

        {/* Quick Stats */}
        <div className="bg-phax-cyan p-4 text-phax-dark">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Database size={20} />
            Today's Statistics
          </h3>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.todayVisitors}</div>
              <div className="text-sm">Visitors</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
              <div className="text-sm">Submissions</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.avgImpact}</div>
              <div className="text-sm">Avg Impact</div>
            </div>
          </div>
        </div>

        {/* Scale Guidelines */}
        <div className="mt-4 text-phax-cyan text-sm">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={16} />
            <span className="font-semibold">Scaling Guidelines:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 ml-6">
            <li>0.5x = Low attendance day (under 25 visitors)</li>
            <li>1.0x = Normal day (25-75 visitors)</li>
            <li>2.0x = High attendance day (75+ visitors)</li>
            <li>5.0x = Special events or testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
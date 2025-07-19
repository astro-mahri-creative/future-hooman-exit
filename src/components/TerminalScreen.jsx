import React, { useState } from 'react';
import { validateCode, isFHEELSCode, trackCodeDiscovery } from '../utils/codeSystem';
import { populationManager } from '../utils/populationScaling';

const TerminalScreen = ({ user, onCodeSubmit }) => {
  const [code, setCode] = useState('');
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [systemCompromised, setSystemCompromised] = useState(false);


  const [pendingCodeData, setPendingCodeData] = useState(null);

  const handleCodeSubmit = () => {
    const codeData = validateCode(code);
    if (!codeData) return;

    // Track the discovery
    trackCodeDiscovery(code, user.username);

    setPendingCodeData(codeData);
    setProcessing(true);
    setProgress(0);
  };

  // Progress animation effect
  React.useEffect(() => {
    if (processing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setProcessing(false);
            return 100;
          }
          return prev + 8;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [processing]);

  // Effect to handle code submission and system compromise after progress completes
  React.useEffect(() => {
    if (progress === 100 && pendingCodeData) {
      const isFheels = isFHEELSCode(code);
      if (isFheels) {
        setSystemCompromised(true);
        setTimeout(() => setSystemCompromised(false), 4000);
      }
      onCodeSubmit(code, pendingCodeData);
      setPendingCodeData(null);
    }
  }, [progress, pendingCodeData, code, onCodeSubmit]);

  return (
    <div className={`phax-window max-w-4xl mx-auto ${systemCompromised ? 'animate-pulse' : ''}`}>
      <div className="window-header bg-phax-purple text-phax-dark p-4 border-b-2 border-phax-cyan">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${systemCompromised ? 'bg-phax-pink' : 'bg-phax-cyan'} border-2 border-phax-dark rounded-full flex items-center justify-center`}>
              <div className="w-3 h-3 bg-phax-dark rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-lg font-bold">DIMENSIONAL INTERVENTION PROTOCOL</div>
              <div className="text-sm opacity-80">PARTICIPANT: {user.username}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${systemCompromised ? 'bg-phax-pink' : 'bg-phax-cyan'} rounded-full animate-pulse`}></div>
            <span className="text-sm font-bold">{systemCompromised ? 'ANOMALY' : 'ACTIVE'}</span>
          </div>
        </div>
      </div>
      
      <div className="content-area bg-phax-dark p-6">
        {/* Code Input Section */}
        <div className="bg-phax-purple p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-phax-cyan border border-phax-dark"></div>
            <span className="text-phax-dark font-bold">INTERVENTION CODE INPUT</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-phax-dark font-bold text-sm mb-2">
                RESEARCH PROTOCOL CODE
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="ENTER CODE"
                  className="w-full p-4 bg-phax-cyan text-phax-dark font-bold text-center tracking-wider text-lg border-2 border-phax-dark"
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-phax-pink animate-pulse"></div>
              </div>
            </div>
            
            <button 
              onClick={handleCodeSubmit}
              disabled={!code || processing}
              className="w-full bg-phax-cyan text-phax-dark font-bold py-3 hover:bg-white transition-colors disabled:opacity-50"
            >
              {processing ? 'PROCESSING' : 'EXECUTE PROTOCOL'}
            </button>
          </div>
        </div>

        {/* Processing Animation */}
        {processing && (
          <div className="bg-phax-dark border-2 border-phax-pink p-6 mb-6">
            <div className="text-center text-phax-cyan font-bold text-lg mb-4">
              DIMENSIONAL ANALYSIS IN PROGRESS
            </div>
            
            <div className="mb-4">
              <div className="w-full h-3 bg-phax-purple border-2 border-phax-cyan overflow-hidden">
                <div 
                  className="h-full bg-phax-pink transition-all duration-300"
                  style={{width: `${progress}%`}}
                ></div>
              </div>
              <div className="text-center text-phax-cyan font-bold text-sm mt-2">
                {progress}% COMPLETE
              </div>
            </div>

            <div className="text-center text-phax-purple text-sm space-y-1">
              <div>SCANNING INTERDIMENSIONAL PATHWAYS...</div>
              <div>CALCULATING IMPACT MATRICES...</div>
              <div>SYNCHRONIZING REALITY ANCHORS...</div>
            </div>
          </div>
        )}

        {/* Network Visualization */}
        <div className="bg-phax-dark border-2 border-phax-purple p-6">
          <div className="text-center text-phax-cyan font-bold mb-4">
            NETWORK VISUALIZATION
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {['PRIME', 'ALPHA', 'BETA', 'GAMMA', 'DELTA', 'EPSILON'].map((dim, i) => (
              <div key={dim} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-phax-purple border-2 border-phax-cyan relative">
                  <div className="absolute inset-2 bg-phax-cyan"></div>
                  <div className="absolute inset-0 animate-pulse"></div>
                </div>
                <div className="text-xs">
                  <div className="text-phax-cyan font-bold">EARTH-{dim}</div>
                  <div className="text-phax-pink font-semibold">ACTIVE</div>
                  <div className="text-phax-purple">{45000 - (i * 7000)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-phax-purple p-4 mt-6 text-phax-dark">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex justify-between">
              <span>DIMENSIONS:</span>
              <span className="font-bold">6 MONITORED</span>
            </div>
            <div className="flex justify-between">
              <span>NETWORK:</span>
              <span className="font-bold text-phax-cyan">SYNCHRONIZED</span>
            </div>
            <div className="flex justify-between">
              <span>LAST UPDATE:</span>
              <span className="font-bold">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalScreen;
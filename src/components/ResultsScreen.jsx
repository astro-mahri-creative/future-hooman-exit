import React from 'react';
import { isFHEELSCode } from '../utils/codeSystem';
import { populationManager } from '../utils/populationScaling';
import { universe, DIMENSIONAL_STATES } from '../utils/dimensionalStates';

const ResultsScreen = ({ code, codeData, onContinue }) => {
  // Defensive checks and logging
  if (!codeData) {
    console.error('codeData is undefined or null:', codeData);
    return (
      <div className="min-h-screen bg-phax-dark text-phax-pink p-4">
        <h1>Submission Error</h1>
        <pre>Code data is missing. Please try again or contact support.</pre>
        <button onClick={onContinue} className="mt-4 bg-phax-pink text-phax-dark font-bold py-2 px-4">Continue</button>
      </div>
    );
  }

  const isFheels = isFHEELSCode(code);
  const effect = typeof codeData.effect === 'number' ? codeData.effect : 0;
  if (typeof codeData.effect !== 'number') {
    console.warn('codeData.effect is not a number:', codeData.effect);
  }
  const scaledImpact = populationManager.applyScale(effect);

  let dimensionalImpact = {};
  try {
    dimensionalImpact = universe.applyCodeImpact(code, scaledImpact) || {};
  } catch (e) {
    console.error('Error applying code impact:', e);
    dimensionalImpact = {};
  }

  // Defensive rendering for dimension states
  const getStateColor = (state) => {
    return DIMENSIONAL_STATES[state]?.color || '#888';
  };

  return (
    <div className={`phax-window max-w-4xl mx-auto ${isFheels ? 'border-phax-pink' : 'border-phax-purple'}`}>
      <div className={`window-header ${isFheels ? 'bg-phax-pink' : 'bg-phax-purple'} text-phax-dark p-4 border-b-2 border-phax-cyan`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${isFheels ? 'bg-phax-dark' : 'bg-phax-cyan'} border-2 border-phax-dark rounded-full flex items-center justify-center`}>
              <div className="w-3 h-3 bg-phax-dark rounded-full"></div>
            </div>
            <div>
              <div className="text-lg font-bold">
                {isFheels ? 'SECURITY ALERT - UNAUTHORIZED PROTOCOL' : 'INTERVENTION COMPLETE'}
              </div>
              <div className="text-sm opacity-80">
                {isFheels ? 'SYSTEM INTEGRITY COMPROMISED' : 'RESEARCH DATA LOGGED'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 ${isFheels ? 'bg-phax-dark' : 'bg-phax-cyan'} rounded-full`}></div>
            <span className="text-sm font-bold">{isFheels ? 'BREACH' : 'SUCCESS'}</span>
          </div>
        </div>
      </div>
      
      <div className="content-area bg-phax-dark p-6">
        {/* Alert/Success Block */}
        <div className={`${isFheels ? 'bg-phax-dark border-phax-pink' : 'bg-phax-purple'} border-2 p-6 mb-6`}>
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="text-2xl">{isFheels ? '⚠' : '✓'}</div>
              <div className={`text-xl font-bold ${isFheels ? 'text-phax-pink' : 'text-phax-dark'}`}>
                {isFheels ? 'UNAUTHORIZED ACCESS DETECTED' : 'RESEARCH PROTOCOL EXECUTED SUCCESSFULLY'}
              </div>
            </div>
          </div>

          <div className={`space-y-3 max-w-2xl mx-auto ${isFheels ? 'text-phax-cyan' : 'text-phax-dark'}`}>
            <div className="flex justify-between">
              <span className="font-semibold">PROTOCOL CODE:</span>
              <span className="font-bold font-mono">{code}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">CLASSIFICATION:</span>
              <span className={`font-bold ${isFheels ? 'text-phax-pink' : 'text-phax-cyan'}`}>
                {isFheels ? 'UNKNOWN - NON-PHAX ORIGIN' : 'PHAX APPROVED'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">IMPACT:</span>
              <span className={`font-bold ${isFheels ? 'text-phax-pink' : 'text-phax-cyan'}`}>
                {isFheels ? 'NETWORK SECURITY COMPROMISED' : 'OPTIMIZATION ACHIEVED'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">RECOGNITION:</span>
              <span className="font-bold">
                {isFheels ? 'CONTAINMENT PROTOCOLS ENGAGED' : 'RESEARCH CONTRIBUTION LOGGED'}
              </span>
            </div>
          </div>

          <div className={`mt-4 text-center text-sm ${isFheels ? 'text-phax-purple' : 'text-phax-dark'} italic`}>
            {codeData.message}
          </div>

          {codeData.hidden && (
            <div className="mt-2 text-center text-sm text-green-400 italic">
              {codeData.hidden}
            </div>
          )}
        </div>

        {/* Impact Analysis */}
        <div className="bg-phax-purple p-6 mb-6 text-phax-dark">
  <div className="text-center font-bold mb-4">DIMENSIONAL IMPACT MATRIX</div>
  
  <div className="grid grid-cols-3 gap-4">
    {Object.entries(dimensionalImpact).map(([dimId, dimData]) => (
      <div key={dimId} className={`bg-phax-cyan p-4 border-2 border-phax-dark text-center ${isFheels ? 'bg-opacity-80' : ''}`}>
        <div className="font-bold text-sm mb-2">{dimId}</div>
        <div className="text-2xl font-bold mb-1">
          {dimData?.ifluCount !== undefined ? dimData.ifluCount.toLocaleString() : 'N/A'}
        </div>
        <div className="text-xs">iFLU CASES</div>
        <div className="text-xs mt-1 font-semibold" style={{ color: getStateColor(dimData?.state) }}>
          {dimData?.state || 'UNKNOWN'}
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Session Summary */}
        <div className="bg-phax-dark border-2 border-phax-cyan p-6 mb-6 text-phax-cyan">
          <div className="text-center font-bold mb-4">PARTICIPANT SESSION SUMMARY</div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-phax-purple p-4 text-phax-dark">
              <div className="text-sm font-bold mb-1">TOTAL IMPACT</div>
              <div className="text-xl font-bold">{scaledImpact > 0 ? '+' : ''}{scaledImpact} UNITS</div>
            </div>
            <div className="bg-phax-purple p-4 text-phax-dark">
              <div className="text-sm font-bold mb-1">SESSION TIME</div>
              <div className="text-xl font-bold">3.7 MINUTES</div>
            </div>
            <div className="bg-phax-purple p-4 text-phax-dark">
              <div className="text-sm font-bold mb-1">RECOGNITION LEVEL</div>
              <div className="text-xl font-bold">{isFheels ? 'ANOMALY' : `TIER ${codeData.tier}`}</div>
            </div>
          </div>
        </div>

        <button 
          onClick={onContinue}
          className="w-full bg-phax-pink text-phax-dark font-bold py-3 px-6 hover:bg-white transition-colors"
        >
          CONTINUE RESEARCH SESSION
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
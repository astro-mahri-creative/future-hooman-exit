import React from 'react';
import { DIMENSIONAL_STATES } from '../utils/dimensionalStates';

const UniverseVisualization = ({ dimensions, className = '' }) => {
  return (
    <div className={`universe-display ${className}`}>
      <div className="text-center text-phax-cyan font-bold mb-4 text-sm">
        INTERDIMENSIONAL NETWORK STATUS
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {dimensions.map((dim) => {
          const stateData = DIMENSIONAL_STATES[dim.state];
          return (
            <div key={dim.id} className="text-center">
              {/* Node visualization */}
              <div className="relative mx-auto mb-2 w-12 h-12">
                <div 
                  className="w-full h-full border-2 rounded-full relative overflow-hidden transition-all duration-500"
                  style={{ 
                    borderColor: stateData.color,
                    backgroundColor: `${stateData.color}20`
                  }}
                >
                  <div 
                    className="absolute inset-2 rounded-full animate-pulse"
                    style={{ backgroundColor: stateData.color }}
                  ></div>
                  
                  {/* Connection indicators */}
                  <div className="absolute inset-0">
                    {Array.from({ length: dim.connections }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-3 bg-current opacity-50"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * (360 / dim.connections)}deg)`,
                          transformOrigin: 'center 6px'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Dimension info */}
              <div className="text-xs space-y-1">
                <div 
                  className="font-bold"
                  style={{ color: stateData.color }}
                >
                  {dim.id.replace('EARTH-', '')}
                </div>
                <div className="text-phax-purple font-semibold">
                  {stateData.name.toUpperCase()}
                </div>
                <div className="text-phax-cyan text-xs">
                  {dim.ifluCount.toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Network connections visualization */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center space-x-4 text-xs">
          {Object.entries(DIMENSIONAL_STATES).slice(0, 3).map(([key, state]) => (
            <div key={key} className="flex items-center space-x-1">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: state.color }}
              ></div>
              <span className="text-phax-cyan">{state.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniverseVisualization;
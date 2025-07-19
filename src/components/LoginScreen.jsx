import React, { useState } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);

  const handleLogin = () => {
    if (username.length >= 8) {
      onLogin({ username, email, optIn });
    }
  };

  return (
    <div className="phax-window max-w-4xl mx-auto">
      <div className="window-header bg-phax-purple text-phax-dark p-4 border-b-2 border-phax-cyan">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-phax-cyan border-2 border-phax-dark rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-phax-dark rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-lg font-bold">PHAX RESEARCH TERMINAL</div>
              <div className="text-sm opacity-80">DIMENSIONAL IMPACT ASSESSMENT PLATFORM v4.2</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-phax-cyan rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">SECURE</span>
          </div>
        </div>
      </div>
      
      <div className="content-area bg-phax-dark p-6">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-8">
            <div className="w-20 h-20 relative">
              <div className="w-full h-full border-2 border-phax-purple rounded-full relative overflow-hidden">
                <div className="absolute inset-2 bg-phax-cyan rounded-full"></div>
                <div className="absolute inset-0 border border-phax-cyan opacity-50"></div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-phax-purple"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-phax-purple"></div>
                <div className="absolute inset-0 border border-phax-purple rotate-45"></div>
                <div className="absolute inset-0 border border-phax-purple -rotate-45"></div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold text-phax-pink tracking-wider">PHAX</div>
              <div className="text-sm text-phax-cyan">PANDIMENSIONAL HEALTH ALLIANCE EXCHANGE</div>
            </div>
          </div>
        </div>
        
        {/* Registration Panel */}
        <div className="bg-phax-purple p-6 mb-6">
          <div className="text-center text-phax-dark font-bold text-lg mb-4">
            RESEARCH PARTICIPANT REGISTRATION
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-phax-dark font-bold text-sm mb-2">
                PARTICIPANT IDENTIFIER
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="8+ CHARACTER UNIQUE IDENTIFIER"
                  className="w-full p-3 bg-phax-cyan text-phax-dark font-bold placeholder-phax-dark placeholder-opacity-60 border-2 border-phax-dark"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-phax-dark font-bold">
                  {username.length >= 8 ? '✓' : '⧗'}
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-phax-dark font-bold text-sm mb-2">
                CONTACT INFORMATION
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL@DOMAIN.COM (OPTIONAL)"
                className="w-full p-3 bg-phax-cyan text-phax-dark font-bold placeholder-phax-dark placeholder-opacity-60 border-2 border-phax-dark"
              />
              <div className="text-xs text-phax-dark mt-1 text-center opacity-80">
                FOR STUDY UPDATES AND RESULTS
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="consent"
                checked={optIn}
                onChange={(e) => setOptIn(e.target.checked)}
                className="mt-1 w-4 h-4 accent-phax-pink"
              />
              <label htmlFor="consent" className="text-phax-dark font-semibold text-sm">
                I CONSENT TO RECEIVE DIMENSIONAL RESEARCH UPDATES
              </label>
            </div>
            
            <button 
              onClick={handleLogin}
              disabled={username.length < 8}
              className="w-full bg-phax-pink text-phax-dark font-bold py-3 px-6 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              INITIALIZE RESEARCH SESSION
            </button>
          </div>
        </div>
        
        {/* System Status */}
        <div className="bg-phax-purple p-4 text-phax-dark">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span>NETWORK STATUS:</span>
              <span className="font-bold text-phax-cyan">DIMENSIONAL GRID ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>SECURITY LEVEL:</span>
              <span className="font-bold">RESEARCH CLEARANCE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
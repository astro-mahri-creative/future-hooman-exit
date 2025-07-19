import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import TerminalScreen from './components/TerminalScreen';
import ResultsScreen from './components/ResultsScreen';
import AdminPanel from './components/AdminPanel';
import { useDeviceFingerprint } from './hooks/useDeviceFingerprint';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [user, setUser] = useState(null);
  const [lastSubmission, setLastSubmission] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [error, setError] = useState(null);
  const { canSubmit, recordSubmission } = useDeviceFingerprint();

  // Admin access (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        const password = prompt('Enter admin password:');
        if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
          setShowAdmin(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentScreen('terminal');
  };

  const handleCodeSubmit = (code, codeData) => {
    if (canSubmit) {
      recordSubmission();
      setLastSubmission({ code, codeData });
      setCurrentScreen('results');
    } else {
      alert('You have already submitted a code today. Please try again tomorrow.');
    }
  };

  const handleContinue = () => {
    setCurrentScreen('terminal');
  };

  useEffect(() => {
    console.log("Current screen:", currentScreen);
  }, [currentScreen]);

  if (error) {
    return (
      <div className="min-h-screen bg-phax-dark text-phax-cyan p-4">
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
      </div>
    );
  }

  try {
    return (
      <div className="min-h-screen bg-phax-dark text-phax-cyan font-orbitron">
        <div className="container mx-auto p-4">
          {currentScreen === 'login' && (
            <LoginScreen onLogin={handleLogin} />
          )}
          
          {currentScreen === 'terminal' && user && (
            <TerminalScreen 
              user={user} 
              onCodeSubmit={handleCodeSubmit}
            />
          )}
          
          {currentScreen === 'results' && lastSubmission && (
            <ResultsScreen 
              code={lastSubmission.code}
              codeData={lastSubmission.codeData}
              onContinue={handleContinue}
            />
          )}
        </div>

        <AdminPanel 
          isVisible={showAdmin} 
          onClose={() => setShowAdmin(false)} 
        />
      </div>
    );
  } catch (err) {
    console.error("Error in App:", err);
    setError(err);
    return null;
  }
}

export default App;
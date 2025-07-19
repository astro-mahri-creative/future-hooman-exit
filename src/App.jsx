import React, { useState } from 'react';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('login');

  // Admin access (Ctrl+Shift+A)
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'Z') {
        const password = prompt('Enter admin password:');
        if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
          setShowAdmin(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-phax-dark text-phax-cyan font-orbitron">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          FUTURE HOOMAN EXIT TERMINAL
        </h1>
        
        {/* Main interface will go here */}
        <div className="text-center text-phax-purple">
          Interface components will be implemented next...
          <br />
          <span className="text-sm">Press Ctrl+Shift+Z for admin panel</span>
        </div>
      </div>

      <AdminPanel 
        isVisible={showAdmin} 
        onClose={() => setShowAdmin(false)} 
      />
    </div>
  );
}

export default App;
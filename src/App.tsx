import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Header } from './components/Layout/Header';
import { Login } from './screens/Auth/Login';
import { Home } from './screens/Home/Home';
import { ComplainantDashboard } from './screens/Complainant/Dashboard';
import { FileCase } from './screens/Complainant/FileCase';
import { PoliceDashboard } from './screens/Police/Dashboard';
import { Investigation } from './screens/Police/Investigation';
import { JudgeDashboard } from './screens/Judge/Dashboard';
import { LawyerDashboard } from './screens/Lawyer/Dashboard';
import { TrackCase } from './screens/TrackCase/TrackCase';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  // Auto-navigate to appropriate dashboard based on user role
  React.useEffect(() => {
    if (user && currentScreen === 'home') {
      switch (user.role) {
        case 'complainant':
          setCurrentScreen('complainant-dashboard');
          break;
        case 'police':
          setCurrentScreen('police-dashboard');
          break;
        case 'judge':
          setCurrentScreen('judge-dashboard');
          break;
        case 'lawyer':
          setCurrentScreen('lawyer-dashboard');
          break;
      }
    }
  }, [user, currentScreen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c7ff2] mx-auto mb-4"></div>
          <p className="text-[#49729b]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'complainant-dashboard':
        return <ComplainantDashboard onNavigate={handleNavigate} />;
      case 'file-case':
        return <FileCase onNavigate={handleNavigate} />;
      case 'track-case':
        return <TrackCase onNavigate={handleNavigate} />;
      case 'police-dashboard':
        return <PoliceDashboard onNavigate={handleNavigate} />;
      case 'investigation':
        return <Investigation onNavigate={handleNavigate} />;
      case 'judge-dashboard':
        return <JudgeDashboard onNavigate={handleNavigate} />;
      case 'lawyer-dashboard':
        return <LawyerDashboard onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fc]">
      <Header onNavigate={handleNavigate} currentScreen={currentScreen} />
      <main className="flex-1">
        {renderScreen()}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
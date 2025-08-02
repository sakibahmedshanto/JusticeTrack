import React from 'react';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onNavigate: (screen: string) => void;
  currentScreen: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentScreen }) => {
  const { user, logout } = useAuth();

  const getNavigationItems = () => {
    if (!user) return [];

    switch (user.role) {
      case 'complainant':
        return [
          { label: 'Dashboard', screen: 'complainant-dashboard' },
          { label: 'File Case', screen: 'file-case' },
          { label: 'My Cases', screen: 'my-cases' },
        ];
      case 'police':
        return [
          { label: 'Dashboard', screen: 'police-dashboard' },
          { label: 'Assigned Cases', screen: 'assigned-cases' },
          { label: 'Investigation', screen: 'investigation' },
        ];
      case 'judge':
        return [
          { label: 'Dashboard', screen: 'judge-dashboard' },
          { label: 'Pending Cases', screen: 'pending-cases' },
          { label: 'Hearings', screen: 'hearings' },
        ];
      case 'lawyer':
        return [
          { label: 'Dashboard', screen: 'lawyer-dashboard' },
          { label: 'Active Cases', screen: 'active-cases' },
          { label: 'Documents', screen: 'documents' },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavigationItems();

  return (
    <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
      <nav className="items-center justify-between px-10 py-3 flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e8ea] flex relative self-stretch w-full">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <img
            className="relative flex-[0_0_auto] h-8 w-8"
            alt="JusticeTrack logo"
            src="/justicetrack-logo.png"
          />
          <div className="items-start inline-flex flex-col relative flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-sans font-bold text-[#0c141c] text-lg tracking-[0] leading-[23px]">
              JusticeTrack
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-end gap-8 relative flex-1 grow">
          {user && (
            <>
              <div className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className={`font-sans font-medium text-sm tracking-[0] leading-[21px] cursor-pointer hover:text-[#0c7ff2] transition-colors ${
                      currentScreen === item.screen ? 'text-[#0c7ff2]' : 'text-[#0c141c]'
                    }`}
                    onClick={() => onNavigate(item.screen)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#49729b]">
                  {user.name} ({user.role})
                </span>
                <Button 
                  variant="secondary"
                  className="h-10 px-4 py-0 bg-[#e8edf4] text-[#0c141c] font-sans font-bold text-sm"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
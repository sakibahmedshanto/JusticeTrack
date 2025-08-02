import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';

interface ComplainantDashboardProps {
  onNavigate: (screen: string) => void;
}

export const ComplainantDashboard: React.FC<ComplainantDashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const recentCases = [
    { id: '1', title: 'Theft Case', status: 'Under Investigation', hash: 'ABC123' },
    { id: '2', title: 'Fraud Case', status: 'Filed', hash: 'DEF456' },
  ];

  const quickActions = [
    { title: 'File New Case', description: 'Submit a new criminal case', action: () => onNavigate('file-case') },
    { title: 'Track Case', description: 'Check status of existing case', action: () => onNavigate('track-case') },
    { title: 'View All Cases', description: 'See all your filed cases', action: () => onNavigate('my-cases') },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0c141c]">
            Welcome back, {user?.name}
          </h1>
          <p className="text-[#49729b] mt-1">
            Manage your cases and track their progress
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-bold text-[#0c141c] mb-2">{action.title}</h3>
              <p className="text-[#49729b] text-sm mb-4">{action.description}</p>
              <Button 
                onClick={action.action}
                className="w-full bg-[#0c7ff2] text-white"
              >
                {action.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-[#0c141c] mb-4">Recent Cases</h2>
          <div className="space-y-4">
            {recentCases.map((case_) => (
              <div key={case_.id} className="flex justify-between items-center p-4 bg-[#f7f9fc] rounded-lg">
                <div>
                  <h3 className="font-medium text-[#0c141c]">{case_.title}</h3>
                  <p className="text-sm text-[#49729b]">Case Hash: {case_.hash}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    case_.status === 'Filed' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {case_.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
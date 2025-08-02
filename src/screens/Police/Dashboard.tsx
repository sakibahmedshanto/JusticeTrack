import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';

interface PoliceDashboardProps {
  onNavigate: (screen: string) => void;
}

export const PoliceDashboard: React.FC<PoliceDashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const assignedCases = [
    { id: '1', title: 'Theft Case', status: 'Under Investigation', priority: 'High', hash: 'ABC123' },
    { id: '2', title: 'Fraud Case', status: 'Evidence Collection', priority: 'Medium', hash: 'DEF456' },
    { id: '3', title: 'Assault Case', status: 'Charge Sheet Pending', priority: 'High', hash: 'GHI789' },
  ];

  const stats = [
    { label: 'Total Assigned', value: '12', color: 'bg-blue-100 text-blue-800' },
    { label: 'Under Investigation', value: '8', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Completed', value: '4', color: 'bg-green-100 text-green-800' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0c141c]">
            Officer Dashboard
          </h1>
          <p className="text-[#49729b] mt-1">
            Badge: {user?.badge} | {user?.name}
          </p>
        </div>
        <Button 
          onClick={() => onNavigate('investigation')}
          className="bg-[#0c7ff2] text-white"
        >
          Start Investigation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#0c141c] mb-2">{stat.value}</div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${stat.color}`}>
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#0c141c]">Assigned Cases</h2>
            <Button 
              variant="secondary"
              onClick={() => onNavigate('assigned-cases')}
              className="bg-[#e8edf4] text-[#0c141c]"
            >
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {assignedCases.map((case_) => (
              <div key={case_.id} className="flex justify-between items-center p-4 bg-[#f7f9fc] rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-[#0c141c]">{case_.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      case_.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {case_.priority} Priority
                    </span>
                  </div>
                  <p className="text-sm text-[#49729b]">Case Hash: {case_.hash}</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-2 block">
                    {case_.status}
                  </span>
                  <Button 
                    size="sm"
                    onClick={() => onNavigate('investigation')}
                    className="bg-[#0c7ff2] text-white text-xs"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
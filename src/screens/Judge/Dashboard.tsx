import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';

interface JudgeDashboardProps {
  onNavigate: (screen: string) => void;
}

export const JudgeDashboard: React.FC<JudgeDashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const pendingCases = [
    { id: '1', title: 'Theft Case', officer: 'Officer Smith', submittedDate: '2024-01-15', priority: 'High' },
    { id: '2', title: 'Fraud Case', officer: 'Officer Johnson', submittedDate: '2024-01-14', priority: 'Medium' },
    { id: '3', title: 'Assault Case', officer: 'Officer Brown', submittedDate: '2024-01-13', priority: 'High' },
  ];

  const upcomingHearings = [
    { id: '1', case: 'Robbery Case', date: '2024-01-20', time: '10:00 AM', courtroom: 'Court 1' },
    { id: '2', case: 'Burglary Case', date: '2024-01-21', time: '2:00 PM', courtroom: 'Court 2' },
  ];

  const stats = [
    { label: 'Pending Review', value: '8', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Active Cases', value: '15', color: 'bg-blue-100 text-blue-800' },
    { label: 'Completed', value: '42', color: 'bg-green-100 text-green-800' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0c141c]">
            Judicial Dashboard
          </h1>
          <p className="text-[#49729b] mt-1">
            Court: {user?.courtId} | {user?.name}
          </p>
        </div>
        <Button 
          onClick={() => onNavigate('hearings')}
          className="bg-[#0c7ff2] text-white"
        >
          Schedule Hearing
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0c141c]">Pending Charge Sheets</h2>
              <Button 
                variant="secondary"
                onClick={() => onNavigate('pending-cases')}
                className="bg-[#e8edf4] text-[#0c141c]"
              >
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {pendingCases.map((case_) => (
                <div key={case_.id} className="p-4 bg-[#f7f9fc] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-[#0c141c]">{case_.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      case_.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {case_.priority}
                    </span>
                  </div>
                  <p className="text-sm text-[#49729b] mb-2">
                    Submitted by: {case_.officer}
                  </p>
                  <p className="text-sm text-[#49729b] mb-3">
                    Date: {case_.submittedDate}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 text-white text-xs">
                      Accept
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-red-100 text-red-800 text-xs">
                      Dismiss
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0c141c]">Upcoming Hearings</h2>
              <Button 
                variant="secondary"
                onClick={() => onNavigate('hearings')}
                className="bg-[#e8edf4] text-[#0c141c]"
              >
                View Calendar
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingHearings.map((hearing) => (
                <div key={hearing.id} className="p-4 bg-[#f7f9fc] rounded-lg">
                  <h3 className="font-medium text-[#0c141c] mb-2">{hearing.case}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-[#49729b]">
                    <p>Date: {hearing.date}</p>
                    <p>Time: {hearing.time}</p>
                    <p>Room: {hearing.courtroom}</p>
                  </div>
                  <Button size="sm" className="mt-2 bg-[#0c7ff2] text-white text-xs">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
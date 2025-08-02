import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';

interface LawyerDashboardProps {
  onNavigate: (screen: string) => void;
}

export const LawyerDashboard: React.FC<LawyerDashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const activeCases = [
    { id: '1', title: 'Theft Case', client: 'John Doe', status: 'Hearing Scheduled', nextHearing: '2024-01-20' },
    { id: '2', title: 'Fraud Case', client: 'Jane Smith', status: 'Document Review', nextHearing: '2024-01-25' },
    { id: '3', title: 'Assault Case', client: 'Mike Johnson', status: 'Evidence Collection', nextHearing: '2024-01-22' },
  ];

  const recentDocuments = [
    { id: '1', name: 'Counter Argument - Theft Case', type: 'Counter Argument', uploadDate: '2024-01-15' },
    { id: '2', name: 'Evidence Analysis - Fraud Case', type: 'Evidence', uploadDate: '2024-01-14' },
    { id: '3', name: 'Witness Statement - Assault Case', type: 'Witness Statement', uploadDate: '2024-01-13' },
  ];

  const stats = [
    { label: 'Active Cases', value: '12', color: 'bg-blue-100 text-blue-800' },
    { label: 'Pending Documents', value: '5', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'Won Cases', value: '28', color: 'bg-green-100 text-green-800' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0c141c]">
            Legal Dashboard
          </h1>
          <p className="text-[#49729b] mt-1">
            Bar ID: {user?.barId} | {user?.name}
          </p>
        </div>
        <Button 
          onClick={() => onNavigate('documents')}
          className="bg-[#0c7ff2] text-white"
        >
          Upload Document
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
              <h2 className="text-xl font-bold text-[#0c141c]">Active Cases</h2>
              <Button 
                variant="secondary"
                onClick={() => onNavigate('active-cases')}
                className="bg-[#e8edf4] text-[#0c141c]"
              >
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {activeCases.map((case_) => (
                <div key={case_.id} className="p-4 bg-[#f7f9fc] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-[#0c141c]">{case_.title}</h3>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {case_.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#49729b] mb-2">
                    Client: {case_.client}
                  </p>
                  <p className="text-sm text-[#49729b] mb-3">
                    Next Hearing: {case_.nextHearing}
                  </p>
                  <Button size="sm" className="bg-[#0c7ff2] text-white text-xs">
                    View Case
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0c141c]">Recent Documents</h2>
              <Button 
                variant="secondary"
                onClick={() => onNavigate('documents')}
                className="bg-[#e8edf4] text-[#0c141c]"
              >
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="p-4 bg-[#f7f9fc] rounded-lg">
                  <h3 className="font-medium text-[#0c141c] mb-2">{doc.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {doc.type}
                      </span>
                      <p className="text-sm text-[#49729b] mt-1">
                        Uploaded: {doc.uploadDate}
                      </p>
                    </div>
                    <Button size="sm" variant="secondary" className="text-xs">
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
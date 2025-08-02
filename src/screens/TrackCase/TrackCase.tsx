import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';

interface TrackCaseProps {
  onNavigate: (screen: string) => void;
}

export const TrackCase: React.FC<TrackCaseProps> = ({ onNavigate }) => {
  const [caseHash, setCaseHash] = useState('');
  const [caseData, setCaseData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackCase = async () => {
    if (!caseHash.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock case data
      setCaseData({
        hash: caseHash,
        title: 'Theft Case',
        status: 'Under Investigation',
        filedDate: '2024-01-10',
        lastUpdated: '2024-01-15',
        timeline: [
          { date: '2024-01-10', status: 'Case Filed', description: 'FIR submitted by complainant' },
          { date: '2024-01-12', status: 'Investigation Started', description: 'Case assigned to Officer Smith' },
          { date: '2024-01-15', status: 'Evidence Collection', description: 'Collecting evidence from crime scene' },
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'filed':
        return 'bg-blue-100 text-blue-800';
      case 'under investigation':
        return 'bg-yellow-100 text-yellow-800';
      case 'charge sheet submitted':
        return 'bg-orange-100 text-orange-800';
      case 'case accepted':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0c141c]">Track Case Status</h1>
        <p className="text-[#49729b] mt-1">
          Enter your case hash to track the current status and progress
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                value={caseHash}
                onChange={(e) => setCaseHash(e.target.value)}
                placeholder="Enter Case Hash (e.g., JT123ABC456)"
                className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
              />
            </div>
            <Button 
              onClick={handleTrackCase}
              disabled={isLoading || !caseHash.trim()}
              className="h-12 px-6 bg-[#0c7ff2] text-white"
            >
              {isLoading ? 'Tracking...' : 'Track Case'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {caseData && (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-[#0c141c] mb-4">Case Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#49729b]">Case Hash</label>
                  <p className="font-mono text-[#0c141c]">{caseData.hash}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#49729b]">Case Title</label>
                  <p className="text-[#0c141c]">{caseData.title}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#49729b]">Current Status</label>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(caseData.status)}`}>
                    {caseData.status}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#49729b]">Filed Date</label>
                  <p className="text-[#0c141c]">{caseData.filedDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-[#49729b]">Last Updated</label>
                  <p className="text-[#0c141c]">{caseData.lastUpdated}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-[#0c141c] mb-4">Case Timeline</h2>
              <div className="space-y-4">
                {caseData.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-[#0c7ff2] rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-[#0c141c]">{event.status}</h3>
                        <span className="text-sm text-[#49729b]">{event.date}</span>
                      </div>
                      <p className="text-sm text-[#49729b]">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 mb-2">Blockchain Verification</h3>
            <p className="text-sm text-blue-700">
              This case information is secured and verified on the blockchain. 
              All updates are immutable and can be independently verified.
            </p>
          </div>
        </div>
      )}

      <div className="mt-6">
        <Button 
          variant="secondary"
          onClick={() => onNavigate('home')}
          className="bg-[#e8edf4] text-[#0c141c]"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};
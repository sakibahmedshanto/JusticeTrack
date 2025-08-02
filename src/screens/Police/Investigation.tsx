import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';

interface InvestigationProps {
  onNavigate: (screen: string) => void;
}

export const Investigation: React.FC<InvestigationProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('summary');
  const [formData, setFormData] = useState({
    summary: '',
    findings: '',
    recommendations: '',
  });
  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
  const [chargeSheetFile, setChargeSheetFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEvidenceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setEvidenceFiles(Array.from(e.target.files));
    }
  };

  const handleChargeSheetUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setChargeSheetFile(e.target.files[0]);
    }
  };

  const handleSubmit = (type: 'summary' | 'evidence' | 'chargesheet') => {
    // Simulate blockchain hash generation
    const hash = 'BH' + Math.random().toString(36).substr(2, 9).toUpperCase();
    alert(`${type} submitted successfully! Blockchain Hash: ${hash}`);
  };

  const tabs = [
    { id: 'summary', label: 'Investigation Summary' },
    { id: 'evidence', label: 'Evidence Collection' },
    { id: 'chargesheet', label: 'Charge Sheet' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0c141c]">Investigation Panel</h1>
        <p className="text-[#49729b] mt-1">
          Case: Theft Case (Hash: ABC123)
        </p>
      </div>

      <div className="flex space-x-1 mb-6 bg-[#f7f9fc] p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-[#0c7ff2] shadow-sm'
                : 'text-[#49729b] hover:text-[#0c141c]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'summary' && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-[#0c141c] mb-4">Investigation Summary</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Investigation Summary
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed summary of your investigation..."
                  className="w-full h-32 p-3 bg-[#f7f9fc] border border-[#cedbe8] rounded-lg resize-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Key Findings
                </label>
                <textarea
                  name="findings"
                  value={formData.findings}
                  onChange={handleInputChange}
                  placeholder="List the key findings from your investigation..."
                  className="w-full h-32 p-3 bg-[#f7f9fc] border border-[#cedbe8] rounded-lg resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Recommendations
                </label>
                <textarea
                  name="recommendations"
                  value={formData.recommendations}
                  onChange={handleInputChange}
                  placeholder="Provide your recommendations based on the investigation..."
                  className="w-full h-32 p-3 bg-[#f7f9fc] border border-[#cedbe8] rounded-lg resize-none"
                />
              </div>

              <Button 
                onClick={() => handleSubmit('summary')}
                className="bg-[#0c7ff2] text-white"
              >
                Submit Investigation Summary
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'evidence' && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-[#0c141c] mb-4">Evidence Collection</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Upload Evidence Files
                </label>
                <Input
                  type="file"
                  multiple
                  onChange={handleEvidenceUpload}
                  accept=".pdf,.doc,.docx,.jpg,.png,.mp4,.mp3"
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                />
                <p className="text-xs text-[#49729b] mt-1">
                  Supported formats: PDF, DOC, DOCX, JPG, PNG, MP4, MP3 (Max 50MB per file)
                </p>
              </div>

              {evidenceFiles.length > 0 && (
                <div>
                  <h3 className="font-medium text-[#0c141c] mb-2">Selected Files:</h3>
                  <div className="space-y-2">
                    {evidenceFiles.map((file, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-[#f7f9fc] rounded">
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-[#49729b]">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                onClick={() => handleSubmit('evidence')}
                disabled={evidenceFiles.length === 0}
                className="bg-[#0c7ff2] text-white"
              >
                Upload Evidence to IPFS
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'chargesheet' && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-[#0c141c] mb-4">Charge Sheet Submission</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Upload Charge Sheet (PDF)
                </label>
                <Input
                  type="file"
                  onChange={handleChargeSheetUpload}
                  accept=".pdf"
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                />
                <p className="text-xs text-[#49729b] mt-1">
                  Only PDF format accepted (Max 10MB)
                </p>
              </div>

              {chargeSheetFile && (
                <div className="p-4 bg-[#f7f9fc] rounded-lg">
                  <h3 className="font-medium text-[#0c141c] mb-2">Selected File:</h3>
                  <p className="text-sm">{chargeSheetFile.name}</p>
                  <p className="text-xs text-[#49729b]">
                    {(chargeSheetFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-medium text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-sm text-yellow-700">
                  Submitting the charge sheet will automatically generate a blockchain hash and notify the court system. 
                  Please ensure all information is accurate before submission.
                </p>
              </div>

              <Button 
                onClick={() => handleSubmit('chargesheet')}
                disabled={!chargeSheetFile}
                className="bg-[#0c7ff2] text-white"
              >
                Submit Charge Sheet
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-6">
        <Button 
          variant="secondary"
          onClick={() => onNavigate('police-dashboard')}
          className="bg-[#e8edf4] text-[#0c141c]"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};
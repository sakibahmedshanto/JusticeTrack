import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';

interface FileCaseProps {
  onNavigate: (screen: string) => void;
}

export const FileCase: React.FC<FileCaseProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    dateOfIncident: '',
    timeOfIncident: '',
    witnessName: '',
    witnessContact: '',
  });
  const [firFile, setFirFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFirFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate case filing process
    setTimeout(() => {
      const caseHash = 'JT' + Math.random().toString(36).substr(2, 9).toUpperCase();
      alert(`Case filed successfully! Your case hash is: ${caseHash}`);
      setIsSubmitting(false);
      onNavigate('complainant-dashboard');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#0c141c]">File a New Case</h1>
        <p className="text-[#49729b] mt-1">
          Provide detailed information about the incident
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Case Title *
                </label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Brief description of the case"
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Location of Incident *
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Where did the incident occur?"
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Date of Incident *
                </label>
                <Input
                  type="date"
                  name="dateOfIncident"
                  value={formData.dateOfIncident}
                  onChange={handleInputChange}
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Time of Incident
                </label>
                <Input
                  type="time"
                  name="timeOfIncident"
                  value={formData.timeOfIncident}
                  onChange={handleInputChange}
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Witness Name
                </label>
                <Input
                  name="witnessName"
                  value={formData.witnessName}
                  onChange={handleInputChange}
                  placeholder="Name of witness (if any)"
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0c141c] mb-2">
                  Witness Contact
                </label>
                <Input
                  name="witnessContact"
                  value={formData.witnessContact}
                  onChange={handleInputChange}
                  placeholder="Contact number of witness"
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0c141c] mb-2">
                Detailed Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of what happened..."
                className="w-full h-32 p-3 bg-[#f7f9fc] border border-[#cedbe8] rounded-lg resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0c141c] mb-2">
                Upload FIR Document (Optional)
              </label>
              <Input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
              />
              <p className="text-xs text-[#49729b] mt-1">
                Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => onNavigate('complainant-dashboard')}
                className="px-8 bg-[#e8edf4] text-[#0c141c]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 bg-[#0c7ff2] text-white"
              >
                {isSubmitting ? 'Filing Case...' : 'File Case'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
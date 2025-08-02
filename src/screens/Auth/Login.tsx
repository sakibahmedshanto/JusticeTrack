import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { useAuth } from '../../contexts/AuthContext';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const demoAccounts = [
    { email: 'complainant@test.com', role: 'Complainant', password: 'demo' },
    { email: 'police@test.com', role: 'Police Officer', password: 'demo' },
    { email: 'judge@test.com', role: 'Judge', password: 'demo' },
    { email: 'lawyer@test.com', role: 'Lawyer', password: 'demo' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0c141c] mb-2">
            Welcome to JusticeTrack
          </h2>
          <p className="text-[#49729b]">
            Sign in to access the justice tracking system
          </p>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-[#f7f9fc] border-[#cedbe8]"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#0c7ff2] text-white font-bold"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-bold text-[#0c141c] mb-4">Demo Accounts</h3>
            <div className="space-y-2">
              {demoAccounts.map((account, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-[#f7f9fc] rounded">
                  <div>
                    <p className="font-medium text-sm">{account.role}</p>
                    <p className="text-xs text-[#49729b]">{account.email}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      setEmail(account.email);
                      setPassword(account.password);
                    }}
                    className="text-xs"
                  >
                    Use
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
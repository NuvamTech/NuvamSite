import React, { useState, useEffect } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
    setError('');
    setSuccess('');
    setName('');
    setEmail('');
    setPassword('');
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  // Real-time password strength evaluator
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) {
      return {
        score: 0,
        label: '',
        color: 'bg-transparent',
        checks: { length: false, number: false, upper: false, special: false }
      };
    }

    const checks = {
      length: pwd.length >= 8,
      number: /[0-9]/.test(pwd),
      upper: /[A-Z]/.test(pwd),
      special: /[^A-Za-z0-9]/.test(pwd)
    };

    const metCount = Object.values(checks).filter(Boolean).length;

    let label = 'Weak';
    let color = 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]';

    if (metCount === 3) {
      label = 'Medium';
      color = 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
    } else if (metCount === 4) {
      label = 'Strong';
      color = 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
    }

    return { score: metCount, label, color, checks };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Check for space anywhere inside email or password (including leading/trailing before trim)
    if (/\s/.test(email)) {
      setError('Email address cannot contain spaces. Please remove all spaces.');
      return;
    }
    if (/\s/.test(password)) {
      setError('Password cannot contain spaces. Please remove all spaces.');
      return;
    }

    const cleanEmail = email.trim();
    const cleanName = name.trim();
    const cleanPassword = password.trim();

    // 1. Advanced Full Name validation
    if (activeTab === 'signup') {
      if (!cleanName) {
        setError('Please enter your name.');
        return;
      }
      // Explicit check for numbers
      if (/\d/.test(cleanName)) {
        setError('Numbers are not allowed in the name field.');
        return;
      }
      // Regular expression to allow letters, spaces, hyphens, apostrophes (2-50 chars)
      const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
      if (!nameRegex.test(cleanName)) {
        setError('Name can only contain letters, spaces, hyphens, or apostrophes (minimum 2 characters, no numbers or special symbols).');
        return;
      }
    }

    // 2. Advanced Email validation
    if (!cleanEmail) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
      setError('Please enter a valid email address (e.g., alex@company.com).');
      return;
    }

    // 3. Advanced Password checks
    if (!cleanPassword) {
      setError('Please enter your password.');
      return;
    }
    if (activeTab === 'signup' && strength.score < 3) {
      setError('Password is too weak. Please satisfy at least 3 of the security check requirements below.');
      return;
    }

    setLoading(true);

    const url = activeTab === 'login' 
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/signup';

    const payload = activeTab === 'login'
      ? { email: cleanEmail, password: cleanPassword }
      : { name: cleanName, email: cleanEmail, password: cleanPassword };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      // Success
      localStorage.setItem('nuvam-token', data.token);
      localStorage.setItem('nuvam-user', JSON.stringify(data.user));
      
      setSuccess(activeTab === 'login' ? 'Logged in successfully!' : 'Registered successfully!');
      
      // Dispatch global auth change event
      window.dispatchEvent(new Event('nuvam-auth-change'));

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop blur */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modern Light-Theme 2-Column Split Layout Glassmorphic Modal Container */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-2xl backdrop-blur-3xl transition-all duration-300 transform scale-100 flex flex-col md:flex-row z-10 min-h-[520px]">
        
        {/* Soft Decorative Liquid Glow Backdrops */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--accent)]/15 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[var(--accent-2)]/15 blur-3xl animate-pulse" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-all cursor-pointer hover:scale-105 active:scale-95 z-20 shadow-xs"
          aria-label="Close modal"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Modern Interactive Branding/Stats Panel (Light Pastels) - Hidden on Mobile */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-50 via-slate-100/80 to-white p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80 relative overflow-hidden shrink-0">
          <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-2xl" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 select-none group/logo">
              <span className="text-2xl font-black tracking-widest text-slate-900 bg-clip-text bg-gradient-to-r from-slate-900 to-slate-800 transition-colors duration-300 hover:text-[var(--accent)]">
                NUVAM
              </span>
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.6)]"></span>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-slate-900 leading-tight">Empowering Automation with Secure Intelligence</h2>
              <p className="text-xs text-slate-600 leading-relaxed">Access NUVAM's portal to explore real-time face detection analytics, manage white-labeled storefront APIs, and monitor secure system integrations.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 relative z-10">
            {/* Interactive features highlights */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-xs shadow-xs">🔒</div>
              <div className="text-[11px] text-slate-700 font-semibold tracking-wide">AES-256 Encrypted Session Tokens</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-xs shadow-xs">👁️</div>
              <div className="text-[11px] text-slate-700 font-semibold tracking-wide">Sub-second Computer Vision logs verification</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Forms - Full width on Mobile */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center relative bg-white/40">
          {/* Mobile-only Brand Header with Dynamic Effects */}
          <div className="flex flex-col items-center mb-6 md:hidden select-none">
            <div className="flex items-center gap-2 group/logo">
              <span className="text-2xl font-black tracking-widest text-slate-900 transition-colors duration-300 hover:text-[var(--accent)]">
                NUVAM
              </span>
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_12px_rgba(var(--accent-rgb),0.6)]"></span>
              </div>
            </div>
            <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-1">Solutions Hub Gatekeeper</p>
          </div>
          {/* Tab Selection */}
          <div className="relative flex rounded-2xl bg-slate-100 p-1 border border-slate-200 mb-6 shadow-inner z-10">
            <button
              type="button"
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-white text-slate-900 border border-slate-200 shadow-sm scale-[1.02]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === 'signup'
                  ? 'bg-white text-slate-900 border border-slate-200 shadow-sm scale-[1.02]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Alerts */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-600 font-medium leading-relaxed shadow-sm z-10">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 rounded-xl border border-green-200 bg-green-50 p-3.5 text-xs text-green-600 font-medium leading-relaxed shadow-sm z-10">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 z-10">
            {activeTab === 'signup' && (
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <span className="text-[9px] text-slate-400">{name.length}/50</span>
                </div>
                <input
                  type="text"
                  required
                  maxLength={50}
                  value={name}
                  onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ''))}
                  onBlur={() => setName(name.trim())}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[var(--accent)]/60 focus:ring-2 focus:ring-[var(--accent)]/10 transition-all shadow-xs"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                <span className="text-[9px] text-slate-400">{email.length}/80</span>
              </div>
              <input
                type="email"
                required
                maxLength={80}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmail(email.trim())}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[var(--accent)]/60 focus:ring-2 focus:ring-[var(--accent)]/10 transition-all shadow-xs"
              />
            </div>

            <div className="space-y-1.5 relative">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Password</label>
                <span className="text-[9px] text-slate-400">{password.length}/32</span>
              </div>
              <input
                type="password"
                required
                maxLength={32}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPassword(password.trim())}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[var(--accent)]/60 focus:ring-2 focus:ring-[var(--accent)]/10 transition-all shadow-xs"
              />

              {/* Password security check indicator during signup */}
              {activeTab === 'signup' && password && (
                <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-500 font-medium">Password Security Status:</span>
                    <span className={`font-bold transition-all duration-300 ${
                      strength.score <= 2 ? 'text-red-500' : strength.score === 3 ? 'text-amber-600' : 'text-emerald-600'
                    }`}>
                      {strength.label}
                    </span>
                  </div>
                  
                  <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden relative">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ease-out ${strength.color}`}
                      style={{ width: `${(strength.score / 4) * 100}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-1 border-t border-slate-200">
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className={`h-1.5 w-1.5 rounded-full ${strength.checks.length ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-slate-300'}`} />
                      <span className={strength.checks.length ? 'text-slate-800 font-semibold' : 'text-slate-400'}>Min 8 characters</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className={`h-1.5 w-1.5 rounded-full ${strength.checks.upper ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-slate-300'}`} />
                      <span className={strength.checks.upper ? 'text-slate-800 font-semibold' : 'text-slate-400'}>One uppercase letter</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className={`h-1.5 w-1.5 rounded-full ${strength.checks.number ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-slate-300'}`} />
                      <span className={strength.checks.number ? 'text-slate-800 font-semibold' : 'text-slate-400'}>One number (0-9)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px]">
                      <span className={`h-1.5 w-1.5 rounded-full ${strength.checks.special ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-slate-300'}`} />
                      <span className={strength.checks.special ? 'text-slate-800 font-semibold' : 'text-slate-400'}>Special symbol</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center rounded-xl border border-[var(--accent)]/30 bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent-2)]/20 py-3.5 text-xs font-semibold text-[var(--accent)] hover:from-[var(--accent)]/30 hover:to-[var(--accent-2)]/30 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none mt-2 cursor-pointer"
            >
              {loading ? (
                <svg className="animate-spin h-4 w-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                activeTab === 'login' ? 'Sign In to Dashboard' : 'Create Access Account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


import { useState, useEffect } from 'react';
import { authAPI } from '../services/api.js';

export function AuthPage({ onLogin, onGuestLogin, onGoogleLogin, onCancel }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errParam = params.get('error');
    if (errParam) {
      if (errParam === 'google_auth_failed') {
        setError('Google authentication failed. Please try again.');
      } else if (errParam === 'server_error') {
        setError('Server error during Google authentication.');
      } else {
        setError(errParam);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (isRegister) {
      if (!formData.name.trim()) {
        setError('Please enter your full name.');
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
    }

    setIsLoading(true);

    try {
      if (isRegister) {
        // Register user then automatically log in to set the auth cookie
        await authAPI.register({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
        });
      }

      const loginRes = await authAPI.login({
        email: formData.email.trim(),
        password: formData.password,
      });

      if (loginRes.success && loginRes.user) {
        onLogin(loginRes.user);
      } else {
        setError(loginRes.message || 'Authentication failed');
      }
    } catch (err) {
      const msg =
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.message ||
        err.message ||
        'An error occurred during authentication.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const backendBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');
    window.location.href = `${backendBaseUrl}/api/auth/google`;
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget && onCancel) {
          onCancel();
        }
      }}
      className="fixed inset-0 z-50 bg-[#090d14]/90 backdrop-blur-2xl flex items-center justify-center p-3 font-sans overflow-hidden select-none"
    >
      {/* Compact Modal Container - Zero Scrollbars */}
      <div className="w-full max-w-[380px] bg-[#121721] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden my-auto animate-fadeIn">
        {/* Subtle Glow Backgrounds */}
        <div className="absolute -top-20 -left-20 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close X Button */}
        <button
          type="button"
          onClick={() => {
            if (onCancel) onCancel();
          }}
          className="absolute top-3.5 right-3.5 z-30 w-7 h-7 text-slate-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer shadow flex items-center justify-center border border-white/10 active:scale-95"
          title="Close modal"
        >
          <span className="material-symbols-outlined text-base">close</span>
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center space-y-1 mb-4 relative z-10 pt-0.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-md shadow-cyan-500/20 mb-1">
            <span className="material-symbols-outlined text-slate-950 font-extrabold text-xl">bolt</span>
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight leading-tight">
            {isRegister ? 'Create your Account' : 'Welcome back to AI Arena'}
          </h2>
          <p className="text-[11px] text-slate-400 leading-none">
            {isRegister ? 'Join to compare models & save chats' : 'Sign in to access your battlegrounds'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="grid grid-cols-2 p-0.5 bg-[#090d14] rounded-lg border border-white/5 mb-3.5 relative z-10 text-xs font-medium">
          <button
            type="button"
            onClick={() => {
              setIsRegister(false);
              setError('');
            }}
            className={`py-1.5 rounded-md transition-all cursor-pointer text-center ${
              !isRegister
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegister(true);
              setError('');
            }}
            className={`py-1.5 rounded-md transition-all cursor-pointer text-center ${
              isRegister
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Register
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-3 p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-[11px] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-red-400">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5 relative z-10">
          {isRegister && (
            <div>
              <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">
                Full Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-500 text-sm">
                  person
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alex Johnson"
                  className="w-full bg-[#090d14] border border-white/10 focus:border-cyan-500/60 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">
              Email Address
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-500 text-sm">
                mail
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-[#090d14] border border-white/10 focus:border-cyan-500/60 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-500 text-sm">
                lock
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#090d14] border border-white/10 focus:border-cyan-500/60 rounded-lg pl-8 pr-8 py-1.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-2 text-slate-500 hover:text-slate-300 text-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="block text-[10px] font-semibold text-slate-300 mb-0.5">
                Confirm Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-500 text-sm">
                  lock_reset
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-[#090d14] border border-white/10 focus:border-cyan-500/60 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 outline-none transition-all"
                />
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 transition-all cursor-pointer mt-1 disabled:opacity-50 active:scale-[0.99]"
          >
            {isLoading
              ? 'Authenticating...'
              : isRegister
              ? 'Create Account'
              : 'Sign In to Arena'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-3 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <span className="relative bg-[#121721] px-2 text-[10px] font-mono text-slate-500 uppercase">
            Or
          </span>
        </div>

        {/* Social & Guest Actions */}
        <div className="space-y-1.5 relative z-10">
          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={isLoading}
            className="w-full py-1.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] shadow-sm disabled:opacity-50"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
              />
              <path
                fill="#FBBC05"
                d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Guest Button */}
          <button
            type="button"
            onClick={onGuestLogin}
            className="w-full py-1.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-slate-400 hover:text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-cyan-400">
              rocket_launch
            </span>
            <span>Continue as Demo Guest</span>
          </button>
        </div>

        {/* Footer Toggle text */}
        <div className="mt-3 text-center text-[11px] text-slate-400">
          {isRegister ? (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsRegister(false);
                  setError('');
                }}
                className="text-cyan-400 font-semibold hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsRegister(true);
                  setError('');
                }}
                className="text-purple-400 font-semibold hover:underline cursor-pointer"
              >
                Create One
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AlertCircle, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);

    const { error: signInError } = await signIn(email, password);

    if (signInError) {
      if (signInError.includes('Invalid login credentials')) {
        setError('Invalid email or password. Only lifetime subscribers ($147) can access this area.');
      } else {
        setError(signInError);
      }
      setLoading(false);
      return;
    }

    navigate('/documents');
  }

  return (
    <div className="min-h-screen bg-[#101820] flex flex-col items-center justify-center px-4 py-16 relative">
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-[#FEE715] transition-colors"
      >
        <ArrowLeft size={28} />
      </Link>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-extrabold text-[#FEE715] tracking-tight">
              STOP OIL SCAM
            </h1>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-[#1a2332] rounded-2xl p-8 shadow-2xl border border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Member Login</h2>
            <p className="text-gray-400 text-sm">Access your subscription documents</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-900/30 border border-red-700/50 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-[#101820] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FEE715]/50 focus:border-[#FEE715] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#101820] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FEE715]/50 focus:border-[#FEE715] transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#101820] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FEE715]/50 focus:border-[#FEE715] transition-colors pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FEE715] text-[#101820] py-3.5 rounded-lg font-bold text-lg hover:bg-[#e6d013] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FEE715]/20"
            >
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setError('Please contact info@stopoilscam.com to reset your password.')}
              className="text-gray-400 text-sm hover:text-[#FEE715] transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Subscriber Notice */}
          <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
            <p className="text-gray-500 text-xs">
              This area is exclusively for lifetime subscribers ($147).
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Non-members cannot access subscriber content.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
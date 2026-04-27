import React, { useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Linkedin, ArrowUp, X, Menu, Facebook, LogIn } from 'lucide-react';
import CookieConsent from './CookieConsent';
import { useAuth } from '../context/AuthContext';

function Layout() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const { user, isSubscriber } = useAuth();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeColor = '#FEE715';

  const navLinks = [
    { to: '/', label: 'HOME', ariaLabel: 'Navigate to Home page' },
    { to: '/about', label: 'ABOUT US', ariaLabel: 'Navigate to About Us page' },
    { to: '/scam-list', label: 'SCAMMER LIST', ariaLabel: 'Navigate to Scammer List page' },
    { to: '/dd-report', label: 'DD REPORT SERVICE', ariaLabel: 'Navigate to DD Report Service page' },
    { to: '/trusted-seller', label: 'TRUSTED SELLER', ariaLabel: 'Navigate to Trusted Seller page' },
    { to: '/learn', label: 'BLOG', ariaLabel: 'Navigate to Blog page' }
  ];

  const handleMobileMenuClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#101820] shadow-md">
        <div className="container mx-auto px-4">
          {/* Top Bar with Logo and Social Icons */}
          <div className="flex justify-between items-center mb-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-[#FEE715]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <Menu size={24} />
              </button>
              <Link 
                to="/" 
                className="text-2xl font-extrabold"
                style={{ color: themeColor }}
                aria-label="Return to homepage"
              >
                STOP OIL SCAM
              </Link>
            </div>
            <div className="flex space-x-3 items-center">
              <Link
                to={user && isSubscriber ? '/documents' : '/login'}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold border border-[#FEE715] text-[#FEE715] hover:bg-[#FEE715] hover:text-[#101820] transition-colors"
              >
                <LogIn size={14} />
                {user && isSubscriber ? 'My Documents' : 'Login'}
              </Link>
              <a
                href="https://www.linkedin.com/company/stop-oil-scam"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ backgroundColor: themeColor }}
                aria-label="Visit our LinkedIn profile"
              >
                <Linkedin size={20} color="#101820" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573343773573"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ backgroundColor: themeColor }}
                aria-label="Visit our Facebook profile"
              >
                <Facebook size={20} color="#101820" />
              </a>
              <a
                href="https://x.com/StopOilScams"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{ backgroundColor: themeColor }}
                aria-label="Visit our X (Twitter) profile"
              >
                <X size={20} color="#101820" />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-64 bg-[#101820] shadow-lg rounded-br-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative py-4 px-4 space-y-2">
              <button
                onClick={handleMobileMenuClose}
                className="absolute top-2 right-2 text-white hover:text-[#FEE715]"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleMobileMenuClose}
                  className={`block w-full text-left py-2 px-4 rounded-lg text-white font-bold hover:bg-[#FEE715] hover:text-[#101820] ${
                    location.pathname === link.to ? 'bg-[#FEE715] text-[#101820]' : ''
                  }`}
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-wrap justify-center" style={{ gap: '24px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-white font-bold hover:bg-[#FEE715] hover:text-[#101820] px-6 py-2 text-base rounded-full ${
                  location.pathname === link.to ? 'bg-[#FEE715] text-[#101820]' : ''
                }`}
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#101820] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: themeColor }}>Stop Oil Scam</h3>
              <p className="text-gray-400">Protecting you from fraud in the oil trading industry.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: themeColor }}>Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-[#FEE715]" aria-label="Navigate to Home page">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-[#FEE715]" aria-label="Navigate to About Us page">About Us</Link></li>
                <li><Link to="/scam-list" className="text-gray-400 hover:text-[#FEE715]" aria-label="Navigate to Scammer List page">Scammer List</Link></li>
                <li><Link to="/dd-report" className="text-gray-400 hover:text-[#FEE715]" aria-label="Navigate to DD Report Service page">DD Report</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: themeColor }}>Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/trusted-seller" className="text-gray-400 hover:text-[#FEE715]" aria-label="Navigate to Trusted Sellers page">Trusted Sellers</Link></li>
                <li><Link to="/learn" className="text-gray-400 hover:text-[#FEE715]" aria-label="Navigate to Blog page">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: themeColor }}>Contact Us</h3>
              <p className="text-gray-400 mb-2">info@stopoilscam.com</p>
              <div className="flex space-x-3 mt-4">
                <a
                  href="https://www.linkedin.com/company/stop-oil-scam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white"
                  style={{ backgroundColor: themeColor }}
                  aria-label="Visit our LinkedIn profile"
                >
                  <Linkedin size={18} color="#101820" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61573343773573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white"
                  style={{ backgroundColor: themeColor }}
                  aria-label="Visit our Facebook profile"
                >
                  <Facebook size={18} color="#101820" />
                </a>
                <a
                  href="https://x.com/StopOilScams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white"
                  style={{ backgroundColor: themeColor }}
                  aria-label="Visit our X (Twitter) profile"
                >
                  <X size={18} color="#101820" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Stop Oil Scam. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        className="fixed bottom-4 right-4 z-50 text-[#101820] rounded-full p-3 flex items-center justify-center hover:bg-white shadow-lg bg-[#FEE715]"
        aria-label="Scroll to top of page"
      >
        <ArrowUp size={24} />
      </button>

      <CookieConsent />
    </div>
  );
}

export default Layout;
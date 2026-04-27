import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const STORAGE_KEY = 'cookie_consent';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveAndClose = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    saveAndClose({ necessary: true, analytics: true, marketing: true });
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    saveAndClose(preferences);
  };

  if (!visible) return null;

  return (
    <>
      {/* Settings Modal Overlay */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#101820]">Cookie Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close cookie settings"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5">
              {/* Necessary */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#101820] text-sm">Necessary Cookies</p>
                  <p className="text-xs text-gray-500 mt-0.5">Required for the website to function properly</p>
                </div>
                <div className="relative">
                  <div className="w-11 h-6 bg-[#FEE715] rounded-full cursor-not-allowed">
                    <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow" />
                  </div>
                  <span className="text-[10px] text-gray-400 absolute -bottom-4 right-0">Always on</span>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="font-semibold text-[#101820] text-sm">Analytics Cookies</p>
                  <p className="text-xs text-gray-500 mt-0.5">Help us understand how visitors use our site</p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                    preferences.analytics ? 'bg-[#FEE715]' : 'bg-gray-300'
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    preferences.analytics ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#101820] text-sm">Marketing Cookies</p>
                  <p className="text-xs text-gray-500 mt-0.5">Used to deliver relevant advertisements</p>
                </div>
                <button
                  onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                    preferences.marketing ? 'bg-[#FEE715]' : 'bg-gray-300'
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    preferences.marketing ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>
            </div>

            <button
              onClick={handleSavePreferences}
              className="w-full mt-8 bg-[#FEE715] text-[#101820] py-3 rounded-lg font-bold hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[55] animate-slide-up">
        <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="container mx-auto px-4 py-4 md:py-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Icon + Text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <Cookie size={24} className="text-[#FEE715] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies.{' '}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#101820] font-semibold underline hover:text-[#FEE715] transition-colors"
                  >
                    See Privacy Policy
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 text-[#101820] text-sm font-semibold hover:border-[#101820] transition-colors whitespace-nowrap"
                >
                  Cookie Settings
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-lg bg-[#FEE715] text-[#101820] text-sm font-bold hover:bg-[#101820] hover:text-[#FEE715] transition-colors whitespace-nowrap"
                >
                  Got it
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  aria-label="Close cookie banner"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CookieConsent;

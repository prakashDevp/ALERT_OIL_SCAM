import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Shield, LogOut, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { scammers } from '../data/scammers';

function Documents() {
  const { user, isSubscriber, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isSubscriber)) {
      navigate('/login');
    }
  }, [user, isSubscriber, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#101820] flex items-center justify-center">
        <div className="text-gray-400 text-lg">Loading...</div>
      </div>
    );
  }

  if (!user || !isSubscriber) return null;

  const scammerList = scammers.filter(s =>
    ['Fuel Scams', 'Mandate Scams', 'Logistics Scams'].includes(s.category)
  );

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#101820] py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="text-[#FEE715] font-extrabold text-xl">
              STOP OIL SCAM
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-gray-400 hover:text-[#FEE715] transition-colors text-sm font-medium"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Shield size={16} />
              LIFETIME SUBSCRIBER
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Document Library
            </h1>
            <p className="text-gray-400">
              Welcome back, {user.email}. All documents are unlocked.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scammerList.map((scammer) => {
              const scamDocs = scammer.documents?.scamDocs || [];
              const ddDocs = scammer.documents?.dueDiligence || [];
              const totalDocs = scamDocs.length + ddDocs.length;

              return (
                <div key={scammer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#FEE715]/10 rounded-lg flex items-center justify-center">
                        <FileText size={20} className="text-[#FEE715]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-[#101820] truncate">{scammer.name}</h3>
                        <p className="text-gray-400 text-xs">{scammer.country}</p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 mb-4">
                      {totalDocs} document{totalDocs !== 1 ? 's' : ''} available
                    </div>

                    <Link
                      to={`/scam-list/${scammer.id}`}
                      className="flex items-center justify-center gap-2 w-full bg-[#101820] text-[#FEE715] py-2.5 rounded-lg font-bold text-sm hover:bg-[#1a2332] transition-colors"
                    >
                      View Full Report
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documents;

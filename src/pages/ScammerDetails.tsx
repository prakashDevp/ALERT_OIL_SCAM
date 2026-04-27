import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Mail, Phone, Users, AlertTriangle, Lock } from 'lucide-react';
import { scammers } from '../data/scammers';
import PdfDocIcon from '../components/PdfDocIcon';
import { useAuth } from '../context/AuthContext';

function ScammerDetails() {
  const { id } = useParams();
  const { isSubscriber } = useAuth();

  const scammer = scammers.find(s => s.id === id) || scammers[0];

  const scamDocs = scammer.documents?.scamDocs || [];
  const ddDocs = scammer.documents?.dueDiligence || [];

  const isLockedCategory = ['Fuel Scams', 'Mandate Scams', 'Logistics Scams'].includes(scammer.category);
  const showLocked = isLockedCategory && !isSubscriber;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Black Header */}
      <section className="bg-[#101820] py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/scam-list"
              className="flex items-center gap-2 text-gray-400 hover:text-[#FEE715] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to List
            </Link>
            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              <AlertTriangle size={16} />
              SCAM ALERT
            </div>
          </div>

          <div className="text-center">
            {scammer.headerImage && (
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#FEE715]">
                <img
                  src={scammer.headerImage}
                  alt={scammer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-[#FEE715] mb-3">
              {scammer.name}
            </h1>
            <p className="text-gray-400 text-lg">Scam Alert Report</p>
            {scammer.country && (
              <p className="text-gray-500 text-sm mt-2">{scammer.country}</p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* FREE Section — Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Fraudulent Website Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#101820] mb-4 flex items-center gap-2">
                <Globe size={20} className="text-[#FEE715]" />
                Fraudulent Website Links
              </h2>
              <ul className="space-y-2">
                {scammer.websites.map((website, index) => (
                  <li key={index}>
                    {website === 'XXXXX' ? (
                      <span className="text-gray-400">{website}</span>
                    ) : (
                      <a
                        href={website.startsWith('http') ? website : `https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 underline break-all text-sm"
                      >
                        {website}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fraudulent Phone Numbers */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#101820] mb-4 flex items-center gap-2">
                <Phone size={20} className="text-[#FEE715]" />
                Fraudulent Phone Numbers
              </h2>
              <ul className="space-y-2">
                {scammer.phones.map((phone, index) => (
                  <li key={index} className="text-gray-700 text-sm font-medium">
                    {phone}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fraudulent Email Addresses */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#101820] mb-4 flex items-center gap-2">
                <Mail size={20} className="text-[#FEE715]" />
                Fraudulent Email Addresses
              </h2>
              <ul className="space-y-2">
                {scammer.emails.map((email, index) => (
                  <li key={index} className="text-gray-700 text-sm font-medium break-all">
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Known Scam Representatives */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-lg font-bold text-[#101820] mb-4 flex items-center gap-2">
              <Users size={20} className="text-[#FEE715]" />
              Known Scam Representatives
            </h2>
            <div className="flex flex-wrap gap-3">
              {scammer.representatives.map((rep, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                  {rep}
                </span>
              ))}
            </div>
          </div>

          {/* LOCKED Section for non-subscribers in Fuel/Mandate/Logistics */}
          {showLocked ? (
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200 mb-12 relative overflow-hidden">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Lock size={24} className="text-[#101820]" />
                <h2 className="text-2xl font-bold text-[#101820]">
                  Subscriber Content
                </h2>
              </div>

              {/* Blurred General Information */}
              <div className="relative mb-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 select-none" style={{ filter: 'blur(5px)' }}>
                  <h3 className="text-lg font-bold text-[#101820] mb-3">General Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {scammer.generalInfo.slice(0, 200)}...
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#101820]/80 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Lock size={14} />
                    Locked — Subscribe to view
                  </div>
                </div>
              </div>

              {/* Blurred Investigation Notes */}
              {scammer.additionalComments && (
                <div className="relative mb-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 select-none" style={{ filter: 'blur(5px)' }}>
                    <h3 className="text-lg font-bold text-[#101820] mb-3">Investigation Notes</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {scammer.additionalComments.slice(0, 200)}...
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#101820]/80 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Lock size={14} />
                      Locked — Subscribe to view
                    </div>
                  </div>
                </div>
              )}

              {/* Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {scamDocs.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-base font-bold text-[#101820] mb-6 uppercase tracking-wide text-center">
                      Scam Documents
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      {scamDocs.map((doc, index) => (
                        <PdfDocIcon
                          key={index}
                          name={doc.name}
                          url={doc.url}
                          locked={doc.locked}
                        />
                      ))}
                    </div>
                    {scamDocs.some(d => d.locked) && (
                      <p className="text-gray-500 text-xs text-center mt-4">
                        Subscribe to access — $147 lifetime
                      </p>
                    )}
                  </div>
                )}

                {ddDocs.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-base font-bold text-[#101820] mb-6 uppercase tracking-wide text-center">
                      Due Diligence Report
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      {ddDocs.map((doc, index) => (
                        <PdfDocIcon
                          key={index}
                          name={doc.name}
                          url={doc.url}
                          locked={doc.locked}
                        />
                      ))}
                    </div>
                    {ddDocs.some(d => d.locked) && (
                      <p className="text-gray-500 text-xs text-center mt-4">
                        Subscribe to access — $147 lifetime
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Unlock CTA */}
              <div className="text-center">
                <Link
                  to="/login"
                  className="inline-block w-full max-w-lg bg-[#FEE715] text-[#101820] py-5 rounded-lg font-bold text-xl hover:bg-[#101820] hover:text-[#FEE715] transition-colors shadow-lg"
                >
                  UNLOCK ALL DOCUMENTS — $147 LIFETIME ACCESS
                </Link>
                <p className="text-gray-500 text-sm mt-3">
                  One time payment — lifetime access to all 1000+ scammer documents
                </p>
              </div>
            </div>
          ) : isLockedCategory && isSubscriber ? (
            <>
              {/* Subscriber sees everything unlocked */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-lg font-bold text-[#101820] mb-4">General Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  {scammer.generalInfo}
                </p>
              </div>

              {scammer.additionalComments && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                  <h2 className="text-lg font-bold text-[#101820] mb-4">Investigation Notes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {scammer.additionalComments}
                  </p>
                </div>
              )}

              {(scamDocs.length > 0 || ddDocs.length > 0) && (
                <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200 mb-12">
                  <h2 className="text-2xl font-bold text-[#101820] mb-8 text-center">
                    Verified Evidence & Documents
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {scamDocs.length > 0 && (
                      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <h3 className="text-base font-bold text-[#101820] mb-6 uppercase tracking-wide text-center">
                          Scam Documents
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                          {scamDocs.map((doc, index) => (
                            <PdfDocIcon
                              key={index}
                              name={doc.name}
                              url={doc.url}
                              locked={false}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    {ddDocs.length > 0 && (
                      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <h3 className="text-base font-bold text-[#101820] mb-6 uppercase tracking-wide text-center">
                          Due Diligence Report
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                          {ddDocs.map((doc, index) => (
                            <PdfDocIcon
                              key={index}
                              name={doc.name}
                              url={doc.url}
                              locked={false}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Non-locked categories (e.g. Independent DD) show everything openly */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-lg font-bold text-[#101820] mb-4">General Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  {scammer.generalInfo}
                </p>
              </div>

              {scammer.additionalComments && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-12">
                  <h2 className="text-lg font-bold text-[#101820] mb-4">Investigation Notes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {scammer.additionalComments}
                  </p>
                </div>
              )}

              {(scamDocs.length > 0 || ddDocs.length > 0) && (
                <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-gray-200 mb-12">
                  <h2 className="text-2xl font-bold text-[#101820] mb-8 text-center">
                    Verified Evidence & Documents
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {scamDocs.length > 0 && (
                      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <h3 className="text-base font-bold text-[#101820] mb-6 uppercase tracking-wide text-center">
                          Scam Documents
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                          {scamDocs.map((doc, index) => (
                            <PdfDocIcon
                              key={index}
                              name={doc.name}
                              url={doc.url}
                              locked={doc.locked}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    {ddDocs.length > 0 && (
                      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                        <h3 className="text-base font-bold text-[#101820] mb-6 uppercase tracking-wide text-center">
                          Due Diligence Report
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                          {ddDocs.map((doc, index) => (
                            <PdfDocIcon
                              key={index}
                              name={doc.name}
                              url={doc.url}
                              locked={doc.locked}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Back Button */}
          <div className="text-center">
            <Link
              to="/scam-list"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <ArrowLeft size={20} />
              BACK TO SCAMMER LIST
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScammerDetails;

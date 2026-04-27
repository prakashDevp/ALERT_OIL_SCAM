import React, { useState } from 'react';
import { FileText, Search, Star, Info, ChevronDown, ChevronUp, X, Linkedin, Facebook } from 'lucide-react';
import PageHeader from '../components/PageHeader';

function WhatWeDo() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const faqs = [
    {
      id: 'dd-report',
      question: 'How do I request a detailed due diligence report?',
      answer: "Simply fill out our inquiry form and we'll schedule your personalized due diligence review.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'scam-list',
      question: 'What process is used to compile your scam list?',
      answer: "We verify data from multiple independent sources before including any company on our scam list.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#101820]">
      <PageHeader 
        title="What We Do"
        subtitle="Combating Oil Industry Fraud with Expertise & Integrity"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Document Verification */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <FileText size={32} className="text-[#FEE715]" />
                <div>
                  <h3 className="text-xl font-bold text-[#101820] mb-4">DOCUMENT VERIFICATION</h3>
                  <p className="text-gray-600">
                    We verify if documents are genuine and legitimate, have proper language, stamps, 
                    signatures, and contacts.
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    * We accept seller POP documents, SGS reports, SCOs, Product Passports, Commercial Invoices, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Company Verification */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Search size={32} className="text-[#FEE715]" />
                <div>
                  <h3 className="text-xl font-bold text-[#101820] mb-4">COMPANY VERIFICATION</h3>
                  <p className="text-gray-600">
                    We perform company verifications, check registration, financial ability, legal state and 
                    legitimacy.
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    * In conformity with the government institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Translation */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Star size={32} className="text-[#FEE715]" />
                <div>
                  <h3 className="text-xl font-bold text-[#101820] mb-4">DOCUMENT TRANSLATION</h3>
                  <p className="text-gray-600">
                    We provide assistance in documents and communications translation in English, 
                    Russian, and Spanish. We do not charge any money for translation services.
                  </p>
                </div>
              </div>
            </div>

            {/* Due Diligence Report */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Info size={32} className="text-[#FEE715]" />
                <div>
                  <h3 className="text-xl font-bold text-[#101820] mb-4">DUE DILIGENCE REPORT</h3>
                  <p className="text-gray-600">
                    We prepare a full Due Diligence report based on the documents and companies' 
                    information provided by you.
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    * Our expertise covers companies from Russia, USA, Canada, and Kazakhstan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#101820] mb-12 text-center">
              General Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                  <button
                    className="w-full text-left px-6 py-4 focus:outline-none"
                    onClick={() => setSelectedQuestion(selectedQuestion === faq.id ? null : faq.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-[#101820]">{faq.question}</h3>
                      {selectedQuestion === faq.id ? (
                        <ChevronUp size={20} className="text-[#101820]" />
                      ) : (
                        <ChevronDown size={20} className="text-[#101820]" />
                      )}
                    </div>
                  </button>
                  {selectedQuestion === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <div className="flex space-x-4">
                        <a
                          href={faq.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FEE715] text-[#101820] hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                          aria-label="Visit LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={faq.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FEE715] text-[#101820] hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                          aria-label="Visit Facebook"
                        >
                          <Facebook size={18} />
                        </a>
                        <a
                          href={faq.socialLinks.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FEE715] text-[#101820] hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                          aria-label="Visit X"
                        >
                          <X size={18} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
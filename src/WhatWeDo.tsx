import React, { useState } from 'react';
import { FileText, Search, Star, Info, ChevronDown, ChevronUp, X, Linkedin, Facebook } from 'lucide-react';
import PageHeader from './components/PageHeader';

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
    },
    {
      id: 'costs',
      question: 'What are the costs associated with your scam tracking services?',
      answer: "Our basic services are free, with premium in-depth reports available at a nominal subscription fee.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'company-listing',
      question: 'Do you label every company as a scam on your website?',
      answer: "No, we only list companies with solid, verifiable evidence of fraudulent behavior.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'scam-determination',
      question: 'How do you determine if a company is a scam?',
      answer: "We analyze transaction records, client reports, and legal documentation to identify fraudulent activities.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'supplier-info',
      question: 'Where can I find trustworthy supplier information?',
      answer: "Our website features a dedicated section with verified and reputable supplier listings.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'reliable-suppliers',
      question: 'Do you offer recommendations for real, reliable suppliers?',
      answer: "Yes, we provide detailed profiles and contact information for verified suppliers.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'suspected-scam',
      question: "What should I do if I suspect I'm being scammed?",
      answer: "Immediately report your concerns to our team and notify your local law enforcement authorities.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'service-fees',
      question: 'Are there any fees to access your services?',
      answer: "Basic scam alerts are free while premium research reports require a small subscription fee.",
      socialLinks: {
        linkedin: 'https://www.linkedin.com/company/stop-oil-scam',
        facebook: 'https://www.facebook.com/profile.php?id=61573343773573',
        x: 'https://x.com/StopOilScams'
      }
    },
    {
      id: 'learn-more',
      question: 'Where can I learn more about scams in the oil and gas industry?',
      answer: "Visit our blog and resource center for the latest insights, updates, and detailed scam reports.",
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
        title="About Us"
        subtitle="Protecting the petroleum trading industry from fraud"
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#101820] mb-4">Who We Are</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Stop Oil Scam is an independent platform dedicated to exposing fraud in the petroleum trading industry. We work tirelessly to protect genuine buyers, brokers, and traders worldwide from fraudulent schemes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#101820] mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Protect genuine buyers, brokers, and traders worldwide from fake oil sellers, fake mandates, fake terminals, and fraudulent documents. We are committed to bringing transparency and trust to the petroleum industry.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#101820] mb-4">Why We Started</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The petroleum trading industry has been plagued by an ever-growing problem of fuel scams globally. Billions of dollars are lost annually to fraudulent activities. We created Stop Oil Scam to address this critical need.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#101820] mb-4">What We Do</h2>
                <ul className="text-gray-700 text-lg space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FEE715] font-bold">•</span>
                    <span>Verify sellers and companies for legitimacy and financial ability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FEE715] font-bold">•</span>
                    <span>Publish detailed scammer reports with verifiable evidence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FEE715] font-bold">•</span>
                    <span>Provide professional due diligence reports for document and company verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FEE715] font-bold">•</span>
                    <span>Maintain a trusted directory of verified sellers and industry professionals</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#101820] mb-4">Our Reach</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Connected to 1000+ industry professionals on LinkedIn, we leverage our network to verify information and maintain the highest standards of accuracy. Our community of traders, brokers, and logistics companies rely on us for trusted information.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="border-b-2 border-gray-200 pb-8 md:border-b-0 md:border-r-2">
              <h3 className="text-2xl font-bold text-[#101820] mb-4">Core Services</h3>
            </div>
            <div></div>
          </div>

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
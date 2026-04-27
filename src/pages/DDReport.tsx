import React from 'react';
import { Check, Shield, Clock, Lock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

function DDReport() {
  const navigate = useNavigate();
  const benefits = [
    'Full background check on seller or company',
    'Document verification — POP, SCO, SPA, LOI',
    'Scam risk score',
    'Clear recommendation — safe or avoid',
    'Delivered within 24–48 hours by email',
    'Watermarked confidential PDF report'
  ];

  return (
    <div className="min-h-screen bg-[#101820]">
      <PageHeader
        title="Due Diligence Report Service"
        subtitle="Protect yourself with professional background verification"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-[#101820] mb-2">
                  Due Diligence Report
                </h2>
                <div className="flex justify-center items-center gap-4 mt-6">
                  <span className="text-3xl font-bold text-gray-400 line-through">$497</span>
                  <span className="text-4xl font-bold text-[#FEE715]">$297</span>
                </div>
                <p className="text-lg text-[#FEE715] mt-4">Save $200 with our special offer</p>
              </div>

              {/* Sample Button */}
              <button
                onClick={() => navigate('/scam-list#independent-dd')}
                className="inline-flex items-center gap-2 bg-white text-[#101820] px-8 py-3 rounded-lg font-bold border-2 border-[#101820] hover:bg-[#101820] hover:text-white transition-colors mb-8"
              >
                <FileText size={20} />
                Click Here to View a Sample DD Report
              </button>
            </div>

            {/* What You Get Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-[#101820] mb-8">What You Get</h3>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check size={24} className="text-[#FEE715] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#101820] mb-3">How It Works</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    After your purchase — simply send us the seller's website, KYC documents, SCO or any documents related to the seller or buyer to <span className="font-semibold">info@stopoilscam.com</span>. Our team will conduct thorough due diligence and provide a comprehensive DD report covering both buyer and seller protection. Report delivered within <span className="font-semibold">24–48 hours</span>.
                  </p>
                </div>
              </div>

              <div>
                {/* After Purchase Section */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#101820] mb-6">After Purchase</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Simply email us at <span className="font-bold">info@stopoilscam.com</span> with:
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Seller website link</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">KYC documents</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">SCO or any related seller/buyer documents</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base">
                    We will investigate and provide full DD report covering both buyer and seller protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="mb-8">
              <button className="w-full bg-[#FEE715] text-[#101820] py-6 rounded-lg font-bold text-xl hover:bg-[#101820] hover:text-[#FEE715] transition-colors">
                Buy Now — $297
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg">
                <Lock size={24} className="text-[#FEE715] mb-2" />
                <span className="text-sm font-semibold text-gray-700">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg">
                <Shield size={24} className="text-[#FEE715] mb-2" />
                <span className="text-sm font-semibold text-gray-700">Confidential</span>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-lg">
                <Clock size={24} className="text-[#FEE715] mb-2" />
                <span className="text-sm font-semibold text-gray-700">24–48hr Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DDReport;

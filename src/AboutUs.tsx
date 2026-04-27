import React from 'react';
import { Shield, AlertTriangle, BookOpen, Users } from 'lucide-react';
import PageHeader from './components/PageHeader';

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="About Us"
        subtitle="We provide Due Diligence (DD) Reports to eliminate fraud in oil and gas transactions"
      />
      
      {/* About Us Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#101820]">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Stop Oil Scam, we are dedicated to eliminating fraud in the petroleum trading industry through rigorous due diligence and verification processes. Our team of experts works tirelessly to identify potential scams and protect legitimate businesses and individuals from fraudulent activities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2023, our organization has quickly become a trusted resource for oil and gas transaction verification. We combine advanced technological solutions with industry expertise to provide comprehensive Due Diligence (DD) Reports that help our clients make informed decisions.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-8 text-[#101820]">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4" style={{ borderColor: 'var(--theme-color)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--theme-color)' }}>
                  <Shield size={32} className="text-[#101820]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[#101820]">Verification Services</h3>
                <p className="text-gray-600 text-center">
                  We verify the legitimacy of oil and petroleum sellers, brokers, and transactions through our comprehensive due diligence process.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4" style={{ borderColor: 'var(--theme-color)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--theme-color)' }}>
                  <AlertTriangle size={32} className="text-[#101820]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[#101820]">Scam Identification</h3>
                <p className="text-gray-600 text-center">
                  Our experts identify and document fraudulent schemes and actors in the oil trading industry to protect potential victims.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4" style={{ borderColor: 'var(--theme-color)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--theme-color)' }}>
                  <BookOpen size={32} className="text-[#101820]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[#101820]">Educational Resources</h3>
                <p className="text-gray-600 text-center">
                  We provide educational materials and training to help industry participants recognize and avoid common scam tactics.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4" style={{ borderColor: 'var(--theme-color)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--theme-color)' }}>
                  <Users size={32} className="text-[#101820]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[#101820]">Trusted Seller Registry</h3>
                <p className="text-gray-600 text-center">
                  We maintain a database of verified, legitimate sellers and brokers to facilitate safe and secure transactions.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-8 text-[#101820]">Our Team</h2>
            <p className="text-lg text-gray-700 mb-10">
              Our team consists of industry veterans, security experts, and fraud prevention specialists with decades of combined experience in the oil and gas sector. We are committed to maintaining the highest standards of integrity and professionalism in all our operations.
            </p>
            
            <div className="flex justify-center mt-12">
              <a href="#" className="font-bold py-3 px-8 rounded-full hover:bg-white transition-colors text-center text-[#101820]" style={{ backgroundColor: 'var(--theme-color)' }}>
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
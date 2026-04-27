import React from 'react';
import { BookOpen, AlertTriangle, Shield } from 'lucide-react';

function Awareness() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <BookOpen size={40} className="text-[#FEE715] mr-4" />
            <h1 className="text-4xl font-bold text-[#101820]">Awareness Center</h1>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#101820]">Common Scam Tactics</h2>
              <div className="space-y-4">
                {['Fake Documentation', 'Price Manipulation', 'Identity Theft'].map((tactic) => (
                  <div key={tactic} className="flex items-start">
                    <AlertTriangle className="text-[#FEE715] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{tactic}</h3>
                      <p className="text-gray-600">Learn how scammers operate and protect yourself from common fraudulent schemes in oil trading.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#101820]">Safety Guidelines</h2>
              <div className="space-y-4">
                {['Verify Credentials', 'Secure Transactions', 'Due Diligence'].map((guideline) => (
                  <div key={guideline} className="flex items-start">
                    <Shield className="text-[#FEE715] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{guideline}</h3>
                      <p className="text-gray-600">Essential steps to ensure safe and legitimate oil trading transactions.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#101820] text-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest updates on oil trading scams and prevention techniques.</p>
            <button className="bg-[#FEE715] text-[#101820] px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awareness;
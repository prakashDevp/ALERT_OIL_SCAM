import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';

function Reseller() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Users size={40} className="text-[#FEE715] mr-4" />
            <h1 className="text-4xl font-bold text-[#101820]">Reseller Program</h1>
          </div>

          <div className="grid gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#101820]">Program Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Access to Verified Sellers',
                  'Priority Support',
                  'Market Intelligence',
                  'Training Resources'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <Award className="text-[#FEE715] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{benefit}</h3>
                      <p className="text-gray-600">Exclusive advantages for authorized resellers in our network.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#101820]">Requirements</h2>
              <div className="space-y-4">
                {[
                  'Business Registration',
                  'Industry Experience',
                  'Financial Stability'
                ].map((req) => (
                  <div key={req} className="flex items-start">
                    <Briefcase className="text-[#FEE715] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{req}</h3>
                      <p className="text-gray-600">Essential criteria for joining our reseller program.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#101820] text-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Network</h2>
            <p className="mb-6">Become an authorized reseller and grow your business with us.</p>
            <button className="bg-[#FEE715] text-[#101820] px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
              Apply as Reseller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reseller;
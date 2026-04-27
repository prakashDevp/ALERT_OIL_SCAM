import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, AlertTriangle, ArrowUpDown, FileText } from 'lucide-react';
import { scammers } from '../data/scammers';
import PageHeader from '../components/PageHeader';

const sampleDDReports = [
  {
    title: 'Independent DD Report — Sample',
    country: 'Nigeria',
    product: 'Crude Oil',
    riskScore: 'HIGH RISK',
    riskLevel: 9,
    date: '2024-03-15',
    seller: 'XXXXX',
    buyer: 'XXXXX',
    sellerContact: 'XXXXX',
    buyerContact: 'XXXXX',
    email: 'XXXXX',
    phone: 'XXXXX',
    website: 'XXXXX',
    bankDetails: 'XXXXX',
    docRef: 'XXXXX',
    findings: 'Seller company registration details do not match official records. All documents submitted appear to be high-quality forgeries. No verifiable trading history found in industry databases.',
    pdfUrl: '/Client_DD_report_1.pdf',
    downloadName: 'Sample_DD_Report_Nigeria.pdf'
  },
  {
    title: 'Independent DD Report — Sample',
    country: 'UAE',
    product: 'Fuel Oil',
    riskScore: 'MEDIUM RISK',
    riskLevel: 6,
    date: '2024-03-10',
    seller: 'XXXXX',
    buyer: 'XXXXX',
    sellerContact: 'XXXXX',
    buyerContact: 'XXXXX',
    email: 'XXXXX',
    phone: 'XXXXX',
    website: 'XXXXX',
    bankDetails: 'XXXXX',
    docRef: 'XXXXX',
    findings: 'Seller company exists but lacks proper regulatory approvals. Banking relationships remain unverified despite multiple requests. Recommendation: Proceed with extreme caution.',
    pdfUrl: '/Client_DD_report_2.pdf',
    downloadName: 'Sample_DD_Report_UAE.pdf'
  },
  {
    title: 'Independent DD Report — Sample',
    country: 'Singapore',
    product: 'LNG',
    riskScore: 'HIGH RISK',
    riskLevel: 8,
    date: '2024-03-08',
    seller: 'XXXXX',
    buyer: 'XXXXX',
    sellerContact: 'XXXXX',
    buyerContact: 'XXXXX',
    email: 'XXXXX',
    phone: 'XXXXX',
    website: 'XXXXX',
    bankDetails: 'XXXXX',
    docRef: 'XXXXX',
    findings: 'Seller website clones industry-standard design patterns. SCO and SPA documents contain multiple inconsistencies and legal language errors. Multiple red flags detected.',
    pdfUrl: '/Client_DD_report_3.pdf',
    downloadName: 'Sample_DD_Report_Singapore.pdf'
  }
];

function ScamList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeFilter, setActiveFilter] = useState<string>('Fuel Scams');
  const location = useLocation();

  const filterOptions = ['Fuel Scams', 'Mandate Scams', 'Logistics Scams', 'Independent DD'];

  useEffect(() => {
    if (location.hash === '#independent-dd') {
      setActiveFilter('Independent DD');
      setTimeout(() => {
        const el = document.getElementById('independent-dd');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const filteredScammers = useMemo(() => {
    let result = scammers.filter(s => s.category === activeFilter);

    if (searchTerm) {
      result = result.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result.sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });
  }, [searchTerm, sortOrder, activeFilter]);

  const riskColor = (score: string) => {
    if (score === 'HIGH RISK') return 'bg-red-100 text-red-700 border-red-200';
    if (score === 'MEDIUM RISK') return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-green-100 text-green-700 border-green-200';
  };

  const riskBarColor = (score: string) => {
    if (score === 'HIGH RISK') return 'bg-red-600';
    if (score === 'MEDIUM RISK') return 'bg-amber-500';
    return 'bg-green-500';
  };

  const typeBadgeColor = (type: string) => {
    switch (type) {
      case 'Fuel Scam': return 'bg-red-600';
      case 'Mandate Scam': return 'bg-amber-600';
      case 'Logistics Scam': return 'bg-blue-700';
      case 'Independent DD': return 'bg-teal-700';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#101820]">
      <PageHeader
        title="Scammer List"
        subtitle="Reported scam companies in the oil trading industry"
      />

      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search & DD Button */}
          <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by scammer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button
              onClick={() => setActiveFilter('Independent DD')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold border transition-colors whitespace-nowrap ${
                activeFilter === 'Independent DD'
                  ? 'bg-[#FEE715] text-[#101820] border-[#FEE715]'
                  : 'bg-white text-[#101820] border-gray-300 hover:border-[#FEE715]'
              }`}
            >
              <FileText size={20} />
              View Sample DD Report
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#FEE715] text-[#101820]'
                      : 'bg-white text-[#101820] border border-gray-300 hover:border-[#FEE715]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Scammer Count & Sort */}
          <div className="bg-white rounded-t-lg p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">
                Showing: <span className="font-bold text-[#101820]">{activeFilter}</span>
                <span className="text-gray-400 ml-2">({filteredScammers.length} {filteredScammers.length === 1 ? 'entry' : 'entries'})</span>
              </span>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium"
              >
                <ArrowUpDown size={18} />
                Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
              </button>
            </div>
          </div>

          {/* Scammer Cards */}
          {activeFilter !== 'Independent DD' && (
            <div className="bg-white rounded-b-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredScammers.map((scammer) => (
                  <Link
                    key={scammer.id}
                    to={`/scam-list/${scammer.id}`}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#FEE715] transition-all"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                          <AlertTriangle size={24} className="text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-[#101820] mb-1 truncate">
                            {scammer.name}
                          </h3>
                          <p className="text-gray-500 text-sm mb-3">{scammer.country}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${typeBadgeColor(scammer.type)}`}>
                            {scammer.type}
                          </span>
                          <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
                            {scammer.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                        <span className="text-sm font-bold text-[#101820] group-hover:text-[#FEE715] transition-colors flex items-center gap-1">
                          View Full Report
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredScammers.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <AlertTriangle size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg">No scammers found matching your search.</p>
                </div>
              )}
            </div>
          )}

          {/* Independent DD Section */}
          {activeFilter === 'Independent DD' && (
            <div id="independent-dd" className="bg-white rounded-b-lg shadow-lg p-6">
              <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#101820] mb-2">Sample Due Diligence Reports</h3>
                <p className="text-gray-700">
                  See examples of our comprehensive DD reports. All identifying details are hidden to protect client confidentiality. This demonstrates our professional standards and report quality.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {sampleDDReports.map((report, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-500">
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-[#101820] mb-1">{report.title}</h4>
                      <p className="text-xs text-gray-500 mb-4">Report Date: {report.date}</p>

                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 ${riskColor(report.riskScore)}`}>
                        {report.riskScore}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Country</p>
                          <p className="font-semibold text-[#101820]">{report.country}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Product</p>
                          <p className="font-semibold text-[#101820]">{report.product}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Seller</p>
                          <p className="font-semibold text-gray-400">{report.seller}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Buyer</p>
                          <p className="font-semibold text-gray-400">{report.buyer}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Contact</p>
                          <p className="font-semibold text-gray-400">{report.sellerContact}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                          <p className="font-semibold text-gray-400">{report.email}</p>
                        </div>
                      </div>

                      <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-sm font-bold ${report.riskScore === 'HIGH RISK' ? 'text-red-700' : 'text-amber-700'}`}>
                            {report.riskScore}
                          </span>
                          <span className={`text-xs font-semibold ${report.riskScore === 'HIGH RISK' ? 'text-red-700' : 'text-amber-700'}`}>
                            {report.riskLevel}/10
                          </span>
                        </div>
                        <div className="w-full bg-red-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${riskBarColor(report.riskScore)}`}
                            style={{ width: `${report.riskLevel * 10}%` }}
                          />
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {report.findings}
                      </p>

                      <p className="text-xs text-gray-400 italic mb-4">
                        Client details hidden to protect confidentiality
                      </p>

                      <div className="flex justify-center mb-4">
                        <a
                          href={report.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-2 cursor-pointer group"
                        >
                          <div
                            className="rounded-md flex flex-col items-center justify-center transition-shadow duration-200 hover:shadow-lg hover:shadow-red-200"
                            style={{ width: '80px', height: '100px', backgroundColor: '#dc2626' }}
                          >
                            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 0H4C1.79 0 0 1.79 0 4V40C0 42.21 1.79 44 4 44H32C34.21 44 36 42.21 36 40V14L22 0Z" fill="white" fillOpacity="0.9"/>
                              <path d="M22 0L36 14H26C23.79 14 22 12.21 22 10V0Z" fill="white" fillOpacity="0.6"/>
                              <text x="18" y="32" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">PDF</text>
                            </svg>
                          </div>
                          <span className="text-xs text-gray-600 group-hover:text-red-600 transition-colors">PDF</span>
                        </a>
                      </div>

                      <a
                        href={report.pdfUrl}
                        download={report.downloadName}
                        type="application/pdf"
                        className="block w-full bg-[#FEE715] text-[#101820] py-3 rounded-lg font-bold text-center hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                      >
                        &#11015; Download Sample Report
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScamList;

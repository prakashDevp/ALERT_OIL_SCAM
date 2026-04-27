import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface Seller {
  name: string;
  website: string;
  country: string;
  countryCode: string;
}

interface SellerCategory {
  name: string;
  sellers: Seller[];
}

function TrustedSeller() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [appForm, setAppForm] = useState({
    company: '',
    email: '',
    products: '',
    country: '',
    message: ''
  });

  const handleAppChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAppForm({ ...appForm, [e.target.name]: e.target.value });
  };

  const handleAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@stopoilscam.com?subject=Application to Join Trusted Sellers&body=Company: ${appForm.company}%0DEmail: ${appForm.email}%0DProducts: ${appForm.products}%0DCountry: ${appForm.country}%0DMessage: ${appForm.message}`;
    window.location.href = mailtoLink;
  };

  const sellerCategories: SellerCategory[] = [
    {
      name: 'Europe',
      sellers: [
        { name: 'BP', website: 'https://www.bp.com', country: 'UK', countryCode: 'gb' },
        { name: 'Shell', website: 'https://www.shell.com', country: 'UK/Netherlands', countryCode: 'gb' },
        { name: 'TotalEnergies', website: 'https://www.totalenergies.com', country: 'France', countryCode: 'fr' },
        { name: 'Eni', website: 'https://www.eni.com', country: 'Italy', countryCode: 'it' },
        { name: 'Equinor', website: 'https://www.equinor.com', country: 'Norway', countryCode: 'no' },
      ]
    },
    {
      name: 'Russia',
      sellers: [
        { name: 'Rosneft', website: 'https://www.rosneft.com', country: 'Russia', countryCode: 'ru' },
        { name: 'Lukoil', website: 'https://www.lukoil.com', country: 'Russia', countryCode: 'ru' },
        { name: 'Gazprom Neft', website: 'https://www.gazprom-neft.com', country: 'Russia', countryCode: 'ru' },
        { name: 'Surgutneftegas', website: 'https://www.surgutneftegas.ru', country: 'Russia', countryCode: 'ru' },
        { name: 'Tatneft', website: 'https://www.tatneft.ru', country: 'Russia', countryCode: 'ru' },
        { name: 'Bashneft', website: 'https://www.bashneft.ru', country: 'Russia', countryCode: 'ru' },
        { name: 'Novatek', website: 'https://www.novatek.ru', country: 'Russia', countryCode: 'ru' },
        { name: 'Slavneft', website: 'https://www.slavneft.ru', country: 'Russia', countryCode: 'ru' },
      ]
    },
    {
      name: 'Kazakhstan',
      sellers: [
        { name: 'KazMunayGas (KMG)', website: 'https://www.kmg.kz', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'Tengizchevroil (TCO)', website: 'https://www.tengizchevroil.com', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'Karachaganak Petroleum Operating (KPO)', website: 'https://www.kpo.kz', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'CNPC Kazakhstan', website: 'https://www.cnpckz.kz', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'Mangistaumunaigas', website: 'https://www.mmg.kz', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'Embamunaigas', website: 'https://www.emg.kz', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'Kazakhoil Aktobe', website: 'https://www.kazakhoil.kz', country: 'Kazakhstan', countryCode: 'kz' },
        { name: 'Tethys Petroleum', website: 'https://www.tethyspetroleum.com', country: 'Kazakhstan', countryCode: 'kz' },
      ]
    },
    {
      name: 'America',
      sellers: [
        { name: 'ExxonMobil', website: 'https://www.exxonmobil.com', country: 'USA', countryCode: 'us' },
        { name: 'Chevron', website: 'https://www.chevron.com', country: 'USA', countryCode: 'us' },
        { name: 'Valero Energy', website: 'https://www.valero.com', country: 'USA', countryCode: 'us' },
        { name: 'Marathon Petroleum', website: 'https://www.marathonpetroleum.com', country: 'USA', countryCode: 'us' },
        { name: 'PDVSA', website: 'http://www.pdvsa.com', country: 'Venezuela', countryCode: 've' },
        { name: 'Petrobras', website: 'https://www.petrobras.com.br', country: 'Brazil', countryCode: 'br' },
        { name: 'Pemex', website: 'https://www.pemex.com', country: 'Mexico', countryCode: 'mx' },
        { name: 'Suncor Energy', website: 'https://www.suncor.com', country: 'Canada', countryCode: 'ca' },
      ]
    },
    {
      name: 'Middle East',
      sellers: [
        { name: 'Saudi Aramco', website: 'https://www.aramco.com', country: 'Saudi Arabia', countryCode: 'sa' },
        { name: 'ADNOC', website: 'https://www.adnoc.ae', country: 'UAE', countryCode: 'ae' },
        { name: 'QatarEnergy', website: 'https://www.qatarenergy.qa', country: 'Qatar', countryCode: 'qa' },
        { name: 'KPC', website: 'https://www.kpc.com.kw', country: 'Kuwait', countryCode: 'kw' },
        { name: 'NIOC', website: 'https://www.nioc.ir', country: 'Iran', countryCode: 'ir' },
      ]
    },
    {
      name: 'Asia-Pacific',
      sellers: [
        { name: 'Sinopec', website: 'https://www.sinopecgroup.com', country: 'China', countryCode: 'cn' },
        { name: 'PetroChina', website: 'http://www.petrochina.com.cn', country: 'China', countryCode: 'cn' },
        { name: 'CNOOC', website: 'https://www.cnooc.com.cn', country: 'China', countryCode: 'cn' },
        { name: 'ONGC', website: 'https://www.ongcindia.com', country: 'India', countryCode: 'in' },
        { name: 'PTT', website: 'https://www.pttplc.com', country: 'Thailand', countryCode: 'th' },
        { name: 'Petronas', website: 'https://www.petronas.com', country: 'Malaysia', countryCode: 'my' },
      ]
    },
    {
      name: 'Africa',
      sellers: [
        { name: 'Sonangol', website: 'https://www.sonangol.co.ao', country: 'Angola', countryCode: 'ao' },
        { name: 'NNPC Limited', website: 'https://www.nnpcgroup.com', country: 'Nigeria', countryCode: 'ng' },
        { name: 'Sonatrach', website: 'https://www.sonatrach.com', country: 'Algeria', countryCode: 'dz' },
        { name: 'ENH', website: 'https://www.enh.co.mz', country: 'Mozambique', countryCode: 'mz' },
      ]
    },
    {
      name: 'Major Independent Traders',
      sellers: [
        { name: 'Vitol', website: 'https://www.vitol.com', country: 'Switzerland', countryCode: 'ch' },
        { name: 'Glencore', website: 'https://www.glencore.com', country: 'Switzerland', countryCode: 'ch' },
        { name: 'Trafigura', website: 'https://www.trafigura.com', country: 'Singapore/Switzerland', countryCode: 'sg' },
        { name: 'Gunvor', website: 'https://www.gunvorgroup.com', country: 'Switzerland', countryCode: 'ch' },
        { name: 'Mercuria', website: 'https://www.mercuria.com', country: 'Switzerland', countryCode: 'ch' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#101820]">
      <PageHeader
        title="Verified Genuine Sellers"
        subtitle="These companies have been verified by Stop Oil Scam as legitimate"
      />

      {/* Seller List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {sellerCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#101820] mb-6">{category.name}</h2>
                <div className="divide-y divide-gray-100">
                  {category.sellers.map((seller) => (
                    <div
                      key={seller.name}
                      className="py-4 px-4 rounded-lg border border-transparent hover:border-[#FEE715] hover:shadow-md hover:shadow-yellow-100 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <img
                            src={`https://flagcdn.com/${seller.countryCode.toLowerCase()}.svg`}
                            alt={`${seller.country} flag`}
                            className="w-12 h-8 object-cover rounded shadow-sm"
                            loading="eager"
                          />
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#101820]">{seller.name}</h3>
                            <p className="text-gray-600 text-sm">{seller.country}</p>
                          </div>
                        </div>
                        <a
                          href={seller.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2 bg-[#FEE715] text-[#101820] rounded-full font-bold hover:bg-[#101820] hover:text-[#FEE715] transition-colors text-sm"
                        >
                          <ExternalLink size={16} />
                          Website
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to be Listed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#101820] mb-4">Apply to be Listed</h2>
              <p className="text-gray-600 text-lg">Is your company a verified genuine seller? Apply to join our trusted sellers directory</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              {!showApplicationForm ? (
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-[#FEE715] text-[#101820] py-4 rounded-lg font-bold text-lg hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                >
                  Start Your Application
                </button>
              ) : (
                <form onSubmit={handleAppSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#101820] mb-2">Company Name</label>
                    <input type="text" name="company" value={appForm.company} onChange={handleAppChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#101820] mb-2">Contact Email</label>
                    <input type="email" name="email" value={appForm.email} onChange={handleAppChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent" placeholder="contact@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#101820] mb-2">Products/Services</label>
                    <input type="text" name="products" value={appForm.products} onChange={handleAppChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent" placeholder="e.g., Crude Oil, Diesel, Gasoline" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#101820] mb-2">Country</label>
                    <input type="text" name="country" value={appForm.country} onChange={handleAppChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent" placeholder="Your country" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#101820] mb-2">Additional Information</label>
                    <textarea name="message" value={appForm.message} onChange={handleAppChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent" placeholder="Tell us about your company and why you should be listed" />
                  </div>
                  <div className="flex gap-4">
                    <button type="submit" className="flex-1 bg-[#FEE715] text-[#101820] py-4 rounded-lg font-bold text-lg hover:bg-[#101820] hover:text-[#FEE715] transition-colors">
                      Submit Application
                    </button>
                    <button type="button" onClick={() => setShowApplicationForm(false)} className="flex-1 bg-gray-300 text-[#101820] py-4 rounded-lg font-bold text-lg hover:bg-gray-400 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrustedSeller;

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { scammers } from '../data/scammers';

function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scammerTotal = scammers.length;
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 50;
    const increment = scammerTotal / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= scammerTotal) {
        setDisplayCount(scammerTotal);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [scammerTotal]);

  const sampleDDReports = [
    {
      title: 'Independent DD Report -- Nigeria',
      country: 'Nigeria',
      product: 'Crude Oil',
      riskScore: 'HIGH RISK',
      description: 'Seller company registration details do not match official records. All documents submitted appear to be high-quality forgeries.',
    },
    {
      title: 'Independent DD Report -- UAE',
      country: 'UAE',
      product: 'Fuel Oil',
      riskScore: 'MEDIUM RISK',
      description: 'Seller company exists but lacks proper regulatory approvals. Banking relationships remain unverified despite multiple requests.',
    },
    {
      title: 'Independent DD Report -- Singapore',
      country: 'Singapore',
      product: 'LNG',
      riskScore: 'HIGH RISK',
      description: 'Seller website clones industry-standard design patterns. SCO and SPA documents contain multiple inconsistencies.',
    },
  ];
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const blogPosts = [
    {
      id: "tank-storage-cost",
      title: "True Cost of Tank Storage: Why Fuel Doesn't Just Sit Around",
      excerpt: "Tank storage for fuel is far more than simply finding extra space—it's a high-stakes operation where every moment counts.",
      image: "https://ia902906.us.archive.org/13/items/1_20250314_20250314_1048/1.png",
      readTime: "10 min read"
    },
    {
      id: "navigating-high-seas",
      title: "Navigating the High Seas: Unlocking the True Cost of Fuel Vessel Leasing",
      excerpt: "In today's volatile fuel markets, leasing the right vessel is a strategic decision that goes far beyond simple logistics.",
      image: "https://ia803209.us.archive.org/0/items/2-1_20250314/2%20%281%29.jpg",
      readTime: "12 min read"
    },
    {
      id: "exposing-fuel-broker-scams",
      title: "Exposing Fuel Broker Scams: How They Lie, Cheat, and Steal",
      excerpt: "In the high stakes world of oil and gas, fuel brokers have carved out a dubious niche by exploiting the complexities of fuel transactions.",
      image: "https://ia601609.us.archive.org/8/items/3-1_20250314/3%20%281%29.png",
      readTime: "15 min read"
    },
    {
      id: "whatsapp-oil-transactions",
      title: "Is WhatsApp Really Where Oil and Gas Transactions Succeed?",
      excerpt: "In today's digital world, communication platforms have transformed the way business is conducted in every industry.",
      image: "https://ia601205.us.archive.org/2/items/4-1_20250314/4%20%281%29.png",
      readTime: "8 min read"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@stopoilscam.com?subject=Contact from ${contactForm.name}&body=Name: ${contactForm.name}%0DEmail: ${contactForm.email}%0DMessage: ${contactForm.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#101820]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Circuit Board Pattern */}
            <div className="absolute top-[10%] left-[5%] w-16 h-16 border border-[#FEE715] rounded-full opacity-20"></div>
            <div className="absolute top-[30%] left-[15%] w-24 h-24 border border-[#FEE715] rounded-full opacity-20"></div>
            <div className="absolute top-[60%] left-[25%] w-12 h-12 border border-[#FEE715] rounded-full opacity-20"></div>
            <div className="absolute top-[20%] right-[10%] w-20 h-20 border border-[#FEE715] rounded-full opacity-20"></div>
            <div className="absolute top-[50%] right-[20%] w-16 h-16 border border-[#FEE715] rounded-full opacity-20"></div>
            
            {/* Circuit Lines */}
            <div className="absolute top-[15%] left-[10%] w-[30%] h-[1px] bg-[#FEE715] rotate-45 opacity-20"></div>
            <div className="absolute top-[35%] left-[20%] w-[40%] h-[1px] bg-[#FEE715] rotate-[30deg] opacity-20"></div>
            <div className="absolute top-[65%] left-[30%] w-[20%] h-[1px] bg-[#FEE715] rotate-[60deg] opacity-20"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-8xl font-black mb-8">
              <span className="text-[#FEE715]">Stop Oil Scam</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop Oil Scam is dedicated to ensuring fair practices in the oil and gas industry. We verify fuel suppliers, refineries, tank farms, logistics companies, and key documents like POP, SCO, and SPA. Our mission is to protect businesses from scams and promote secure, transparent transactions globally.
            </p>
            <p className="text-xl text-[#FEE715] mb-12">
              Reach Us for DD Report: <a href="mailto:info@stopoilscam.com" className="hover:text-white transition-colors">info@stopoilscam.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-[#FEE715]">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto text-center">
            <h3 className="text-5xl font-black text-[#101820] mb-2">{displayCount}+</h3>
            <p className="text-[#101820] text-lg font-semibold">Scammers Listed</p>
          </div>
        </div>
      </section>

      {/* Latest Independent DD Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-[#101820]">Latest Independent DD Reports</h2>
              <Link
                to="/scam-list#independent-dd"
                className="flex items-center text-[#101820] hover:text-[#FEE715] font-semibold"
              >
                View All
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {sampleDDReports.map((report, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <FileText className="text-[#FEE715] mb-4" size={32} />
                  <h3 className="text-lg font-bold text-[#101820] mb-1">{report.title}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-500 text-sm">{report.country}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500 text-sm">{report.product}</span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                    report.riskScore === 'HIGH RISK'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {report.riskScore}
                  </span>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {report.description}
                  </p>
                  <Link
                    to="/scam-list#independent-dd"
                    className="text-[#FEE715] hover:text-[#101820] font-semibold flex items-center text-sm"
                  >
                    View Full Report
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#101820] mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-lg">Have questions? Contact our team directly</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#101820] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#101820] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#101820] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FEE715] text-[#101820] py-4 rounded-lg font-bold text-lg hover:bg-[#101820] hover:text-[#FEE715] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-[#101820]">Latest Blog Posts</h2>
              <Link 
                to="/learn"
                className="flex items-center text-[#101820] hover:text-[#FEE715] font-semibold"
              >
                View All
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            <div className="relative">
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-[#FEE715] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>

              <div 
                ref={carouselRef}
                className="overflow-x-auto scrollbar-hide flex gap-6 pb-4 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/learn/${post.id}`}
                    className="flex-none w-[400px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                        fetchpriority="high"
                        decoding="sync"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = post.image;
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock size={16} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#101820] mb-2 group-hover:text-[#FEE715] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-[#FEE715] font-semibold">
                        Read More
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-[#FEE715] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
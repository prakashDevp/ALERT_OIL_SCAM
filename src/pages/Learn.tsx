import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

function Learn() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['Scam Warnings', 'Industry News', 'How to Verify', 'Case Studies', 'Document Guides'];

  const blogPosts: BlogPost[] = [
    {
      id: "tank-storage-cost",
      title: "True Cost of Tank Storage: Why Fuel Doesn't Just Sit Around",
      excerpt: "Tank storage for fuel is far more than simply finding extra space—it's a high-stakes operation where every moment counts and every miscalculation can cost a fortune.",
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
    },
    {
      id: "stop-oil-scam-team",
      title: "Stop Oil Scam Team: Our Relentless Mission to Expose Fraudsters",
      excerpt: "In an industry where billions of dollars change hands, fraudulent schemes targeting oil and gas transactions have reached unprecedented levels.",
      image: "https://ia903205.us.archive.org/11/items/5-1_20250314/5%20%281%29.png",
      readTime: "12 min read"
    },
    {
      id: "holiday-oil-scams",
      title: "Holiday Oil and Gas Scams: How Fraudsters Exploit the Christmas Season",
      excerpt: "During the festive season, when businesses are focused on closing year-end deals, the oil and gas industry faces unique threats.",
      image: "https://ia601609.us.archive.org/4/items/8-1_20250314/8%20%281%29.png",
      readTime: "15 min read"
    },
    {
      id: "tank-runs-dry",
      title: "When the Tank Runs Dry: How Upfront Payment Scams Are Crippling Small Oil & Gas Startups",
      excerpt: "In today's cutthroat energy market, small oil and gas startups are already battling numerous challenges.",
      image: "https://ia600209.us.archive.org/8/items/9-1_20250314/9%20%281%29.png",
      readTime: "12 min read"
    },
    {
      id: "understanding-tactics",
      title: "Understanding the Tactics: Why Fake Sellers Demand Upfront Fees",
      excerpt: "In the intricate world of oil and gas transactions, trust is a critical currency but it is also one that fraudsters know how to exploit.",
      image: "https://ia600107.us.archive.org/13/items/10-1_20250314/10%20%281%29.png",
      readTime: "10 min read"
    }
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogPosts, searchTerm]);

  return (
    <div className="min-h-screen bg-[#101820]">
      <PageHeader
        title="Blog & Learning Center"
        subtitle="Stay informed about the latest scam tactics and protection strategies"
      />

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEE715] focus:border-transparent text-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    activeCategory === category
                      ? 'bg-[#FEE715] text-[#101820]'
                      : 'bg-gray-100 text-[#101820] hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/learn/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    fetchpriority="high"
                    decoding="sync"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#101820] mb-2 group-hover:text-[#FEE715] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learn;
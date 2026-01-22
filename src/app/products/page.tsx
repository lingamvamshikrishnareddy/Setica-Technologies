'use client';

import { useEffect, CSSProperties, useState } from 'react';
import { Clock, Code } from 'lucide-react';

interface ProductCardProps {
   title: string;
   category: string;
   description: string;
   imageUrl: string;
   status: string;
 }

 interface Product {
   title: string;
   category: string;
   description: string;
   imageUrl: string;
   status: string;
 }

export default function ProductsPage() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const products: Product[] = [
    {
      title: 'Justica.ai - Legal Tech',
      category: 'SaaS Platform',
      description: 'AI-powered legal technology platform streamlining legal research, document analysis, and case management for law firms and legal professionals.',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'B2B Marketplace',
      category: 'Marketplace Platform',
      description: 'Enterprise marketplace platform connecting buyers and sellers with intelligent matching, procurement automation, and seamless transaction management.',
      imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Telehealth Platform',
      category: 'Healthcare SaaS',
      description: 'Comprehensive healthcare solution combining online telemedicine consultations, pharmacy products, and ambulance connectivity.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Udoyag - Job Portal',
      category: 'Employment Platform',
      description: 'Comprehensive job portal connecting local and international workers with verified opportunities across industries.',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'PostRecovery - Workout App',
      category: 'Fitness & Wellness',
      description: 'Post-workout recovery optimization platform with personalized recovery plans and exercise recommendations.',
      imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Gatherly - Events',
      category: 'Event Management',
      description: 'Platform for organizing, discovering, and managing community gatherings and social events.',
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Women\'s Safety App',
      category: 'Safety Platform',
      description: 'SOS emergency platform with real-time alerts, location sharing, and trusted contact networks.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'TripNDrip - Travel',
      category: 'Travel & Hospitality',
      description: 'Online hospitality and booking platform for hotels, flights, and complete travel experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Road Accountability',
      category: 'Governance Platform',
      description: 'Platform for tracking and ensuring accountability in road construction and maintenance projects.',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'BioTech SaaS',
      category: 'BioTech Platform',
      description: 'Biotechnology management platform for research, lab operations, and data analysis in life sciences.',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Oil & Gas SaaS',
      category: 'Industry Platform',
      description: 'Comprehensive management platform for oil and gas operations, exploration, and supply chain optimization.',
      imageUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Freight Management',
      category: 'Logistics SaaS',
      description: 'International freight and logistics platform for cross-border shipping and supply chain coordination.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Manufacturing SaaS',
      category: 'Industry Platform',
      description: 'Production management, inventory control, and operations optimization for manufacturing businesses.',
      imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'CareNest - Senior & Baby Care',
      category: 'Healthcare Platform',
      description: 'Virtual nursing and care management for senior citizens and baby sitting services with real-time monitoring.',
      imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Scope Creep Killer',
      category: 'Project Management',
      description: 'Project management tool preventing clients from adding out-of-scope features after fixed-price agreements.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'WaveLink - Video Platform',
      category: 'Communication',
      description: 'Video communication platform with integrated features for enhanced meetings and team collaboration.',
      imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Restaurant Tech',
      category: 'Restaurant SaaS',
      description: 'Complete restaurant management system for orders, chef coordination, reservations, and inventory tracking.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Unisaz - Enterprise SaaS',
      category: 'Business Platform',
      description: 'Business OS for MSMEs and startups with CRM, project management, and workflow automation tools.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Creator Connect Marketing',
      category: 'Digital Marketing',
      description: 'Digital marketing platform connecting brands with memers, influencers, and podcasters for authentic reach.',
      imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Online Tailoring',
      category: 'Fashion Service',
      description: 'Specialized knitting and custom dress making service for women with precise measurements and designs.',
      imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8232?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Remis - Real Estate',
      category: 'Property SaaS',
      description: 'Real estate management platform for dealers, agents, and owners focusing on customer satisfaction and lead management.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'GateKeeping',
      category: 'Property Management',
      description: 'Visitor management and maintenance request system for residential communities and commercial buildings.',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Studio Suite',
      category: 'Creative Software',
      description: 'Professional platform for creators to edit videos, photos, design logos, and create after effects content.',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'User Stories News',
      category: 'Media Platform',
      description: 'Platform where every individual can share their story and get featured as news content.',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Energy Grid Monitor',
      category: 'Energy SaaS',
      description: 'Smart energy grid management, monitoring, and energy production optimization platform.',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'PocketCar Mobile',
      category: 'Vehicle Care',
      description: 'On-demand car wash, services, and comprehensive vehicle care with maintenance tracking and alerts.',
      imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Construction Management',
      category: 'Construction SaaS',
      description: 'Comprehensive platform for clients to track contractors from project start to completion, including design monitoring.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Fintech SaaS',
      category: 'SaaS Platform',
      description: 'Comprehensive financial technology platform providing SaaS solutions for banking, payments, and financial management.',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Wedding SaaS',
      category: 'Event Platform',
      description: 'Comprehensive wedding planning platform for managing vendors, guests, budgets, and complete wedding coordination.',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Excel Kitab - Accounting',
      category: 'FinTech SaaS',
      description: 'Simplified accounting and bookkeeping platform designed for small businesses and entrepreneurs.',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Waste Management SaaS',
      category: 'Sustainability',
      description: 'Waste management, water management, and carbon credits marketplace for sustainable environmental solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Yoga App',
      category: 'Wellness App',
      description: 'Comprehensive yoga platform offering guided sessions, personalized routines, and wellness tracking for holistic health.',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'ChippyChips Veg Delivery',
      category: 'Food Delivery',
      description: 'Pure vegetarian food delivery app where orders are accepted within 15 minutes with quality assurance.',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Traffic AI',
      category: 'Computer Vision AI',
      description: 'Vision model-based traffic management system with dynamic timer adjustments based on real-time traffic density.',
      imageUrl: 'https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'AI Chatbot Assistant',
      category: 'AI Platform',
      description: 'Domain-specialized AI assistant using small language models, achieving 80%+ relevance match scores.',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Cyber Shield',
      category: 'Cybersecurity',
      description: 'Enterprise-grade cybersecurity SaaS for comprehensive personal and business protection with threat monitoring.',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'AI Sales & Support Agent',
      category: 'AI Agent',
      description: 'Autonomous AI agents for customer service, sales call preparation, and automated templates generation.',
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'Synaptika - AI Code Editor',
      category: 'AI Development',
      description: 'AI coding editor where complete apps and websites can be built in 5 minutes with automated development.',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      status: 'testing'
    },
    {
      title: 'AI Robots',
      category: 'Hardware - Robotics',
      description: 'Advanced AI-powered robots for automation, assistance, and industrial applications with intelligent learning capabilities.',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      status: 'development'
    },
    {
      title: 'AI Drones',
      category: 'Hardware - Drones',
      description: 'Intelligent drone systems with AI navigation, autonomous flight, and advanced sensing for delivery and surveillance.',
      imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
      status: 'development'
    },
    {
      title: 'Telecommunication',
      category: 'Hardware - Telecom',
      description: 'Next-generation telecommunication hardware providing high-speed data and WiFi connectivity without voice call services.',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      status: 'development'
    },
    {
      title: 'Farmer First Productization',
      category: 'Hardware - Agriculture',
      description: 'Agricultural technology solutions focused on farmer-centric productization for efficient farming and crop management.',
      imageUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80',
      status: 'development'
    },
    {
      title: 'Low-cost Electric VTOL Planes',
      category: 'Hardware - Aviation',
      description: 'Affordable vertical take-off and landing electric aircraft for urban mobility and short-distance travel.',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
      status: 'development'
    },
    {
      title: 'Sodium Ion Batteries and Vehicles',
      category: 'Hardware - Energy',
      description: 'Advanced sodium-ion battery technology and electric vehicles offering sustainable and cost-effective energy solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      status: 'development'
    },
    {
      title: 'Solar Modules',
      category: 'Hardware - Energy',
      description: 'High-efficiency solar panel modules for renewable energy generation and sustainable power solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      status: 'development'
    },
    {
      title: 'AI Chips',
      category: 'Hardware - AI',
      description: 'Custom AI processing chips designed for advanced machine learning and neural network computations.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      status: 'development'
    }
  ];

  const handleInterestClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      {/* Notification */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #4a55ff, #ff6f00)',
          color: 'white',
          padding: '20px 30px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease'
        } as CSSProperties}>
          <strong>Coming Soon!</strong> This product is currently in development. Stay tuned!
        </div>
      )}

      {/* Header */}
      <header style={{
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 80px',
        backgroundColor: '#000',
        overflow: 'hidden'
      } as CSSProperties}>
        <div className="stars" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 0,
          background: '#000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center'
        } as CSSProperties}></div>
        <div className="twinkling" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          zIndex: 1,
          background: 'transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center',
          animation: 'move-twink-back 200s linear infinite'
        } as CSSProperties}></div>
        <div style={{ zIndex: 5, position: 'relative' } as CSSProperties}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 20px',
            background: 'rgba(255, 111, 0, 0.2)',
            border: '1px solid rgba(255, 111, 0, 0.4)',
            borderRadius: '30px',
            marginBottom: '20px',
            color: '#ff6f00',
            fontSize: '0.9rem',
            fontWeight: '600'
          } as CSSProperties}>
            <Code size={18} />
            All Products Currently in Development
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#fff',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #4a55ff, #ff6f00, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
            fontWeight: 800
          } as CSSProperties}>
            Our Product Ecosystem
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            color: '#ccc',
            lineHeight: 1.6
          } as CSSProperties}>
            {products.length} innovative solutions spanning AI, SaaS, healthcare, finance, hardware, and emerging technologies—currently being built to transform industries.
          </p>
          <div style={{
            display: 'flex',
            gap: '30px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '1rem',
            color: '#aaa'
          } as CSSProperties}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{products.length} Products</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>In Development</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <section style={{
        padding: '100px 5%',
        backgroundColor: '#0a0a0a'
      } as CSSProperties}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' } as CSSProperties}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '35px'
          } as CSSProperties}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} onInterestClick={handleInterestClick} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '120px 5%',
        background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.15), rgba(255, 111, 0, 0.15))',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      } as CSSProperties}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        } as CSSProperties}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            marginBottom: '2rem',
            color: '#fff',
            fontWeight: 700
          } as CSSProperties}>
            Be Part of Our Journey
          </h2>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#bbb',
            marginBottom: '3rem',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          } as CSSProperties}>
            Join our seed-stage journey and be among the first to experience our innovative product ecosystem as we build the future of technology.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          } as CSSProperties}>
            <button style={{
              padding: '20px 50px',
              background: 'linear-gradient(135deg, #4a55ff, #ff6f00)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(74, 85, 255, 0.3)'
            } as CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 85, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(74, 85, 255, 0.3)';
            }}>
              Join Waitlist →
            </button>
            <button style={{
              padding: '20px 50px',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            } as CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes move-twink-back {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

function ProductCard({ title, category, description, imageUrl, status, onInterestClick }: ProductCardProps & { onInterestClick: () => void }) {
  const getStatusBadge = (status: string) => {
    if (status === 'development') {
      return {
        label: 'In Development',
        color: '#ff6f00',
        bgColor: 'rgba(255, 111, 0, 0.15)',
        borderColor: 'rgba(255, 111, 0, 0.3)'
      };
    } else if (status === 'testing') {
      return {
        label: 'Testing & Production',
        color: '#00d4ff',
        bgColor: 'rgba(0, 212, 255, 0.15)',
        borderColor: 'rgba(0, 212, 255, 0.3)'
      };
    }
    return {
      label: status,
      color: '#ff6f00',
      bgColor: 'rgba(255, 111, 0, 0.15)',
      borderColor: 'rgba(255, 111, 0, 0.3)'
    };
  };

  const statusInfo = getStatusBadge(status);

  return (
    <div style={{
      position: 'relative',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      cursor: 'pointer'
    } as CSSProperties}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
      e.currentTarget.style.borderColor = 'rgba(74, 85, 255, 0.4)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    }}>
      {/* Status Badge */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 14px',
        borderRadius: '8px',
        fontSize: '0.75rem',
        fontWeight: 600,
        backgroundColor: statusInfo.bgColor,
        color: statusInfo.color,
        border: `1px solid ${statusInfo.borderColor}`,
        backdropFilter: 'blur(10px)'
      } as CSSProperties}>
        <Clock size={14} />
        {statusInfo.label}
      </div>

      {/* Image */}
      <div style={{
        width: '100%',
        height: '220px',
        overflow: 'hidden',
        position: 'relative'
      } as CSSProperties}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            filter: 'brightness(0.7)'
          } as CSSProperties}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)'
        } as CSSProperties}></div>
      </div>

      {/* Content */}
      <div style={{ padding: '25px' } as CSSProperties}>
        {/* Category Badge */}
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          borderRadius: '8px',
          fontSize: '0.75rem',
          fontWeight: 600,
          marginBottom: '15px',
          backgroundColor: 'rgba(74, 85, 255, 0.15)',
          color: '#7c88ff',
          border: '1px solid rgba(74, 85, 255, 0.3)'
        } as CSSProperties}>
          {category}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.4rem',
          marginBottom: '12px',
          color: '#fff',
          fontWeight: 600,
          lineHeight: 1.3
        } as CSSProperties}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.95rem',
          color: '#aaa',
          lineHeight: '1.7',
          marginBottom: '20px',
          minHeight: '80px'
        } as CSSProperties}>
          {description}
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          paddingTop: '15px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        } as CSSProperties}>
          <button
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #4a55ff, #6b73ff)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            } as CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(74, 85, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://example.com/demo', '_blank')}
          >
            Demo Link
          </button>
          <button
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #ff6f00, #ff8c00)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            } as CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 111, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
          >
            Demo Video
          </button>
        </div>
      </div>
    </div>
  );
}
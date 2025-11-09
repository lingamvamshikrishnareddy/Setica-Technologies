'use client';

import { useEffect, CSSProperties } from 'react';
import Link from 'next/link';

// Type definitions
interface ProductCardProps {
  icon: string;
  title: string;
  status: string;
  progress?: string;
  statusColor: string;
  tech: string;
  description: string;
  requirements?: string;
}

interface Product {
  icon: string;
  title: string;
  status: string;
  statusClass: string;
  progress?: string;
  tech: string;
  description: string;
  requirements?: string;
}

export default function ProductsPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const productRoadmap = {
    // ==================== ACTIVE PRODUCTS ====================
    active: [
      {
        icon: 'fas fa-balance-scale',
        title: 'Justica.ai - Legal Tech',
        status: 'Active',
        statusClass: 'status-active',
        tech: 'SaaS Platform',
        description: 'AI-powered legal technology platform streamlining legal research, document analysis, and case management for law firms and legal professionals.'
      },
      {
        icon: 'fas fa-handshake',
        title: 'B2B Marketplace',
        status: 'Active',
        statusClass: 'status-active',
        tech: 'Marketplace Platform',
        description: 'Enterprise marketplace platform connecting buyers and sellers with intelligent matching, procurement automation, and seamless transaction management.'
      }
    ],

    // ==================== COMPLETED (Ready to Launch) ====================
    completed: [
      {
        icon: 'fas fa-briefcase-medical',
        title: 'Telehealth Platform',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Healthcare SaaS',
        description: 'Comprehensive healthcare solution combining online telemedicine consultations, pharmacy services, and ambulance connectivity in one platform.'
      },
      {
        icon: 'fas fa-shipping-fast',
        title: 'SetCart Quick Commerce',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'E-commerce Platform',
        description: 'Transparent quick commerce with zero hidden prices, no dark patterns, and assured quality delivery.'
      },
      {
        icon: 'fas fa-om',
        title: 'Fast & Yoga',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Wellness App',
        description: 'Integrated fasting and yoga platform for nutritional wellness and holistic health practices.'
      },
      {
        icon: 'fas fa-cookie-bite',
        title: 'ChippyChips Veg Delivery',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Food Delivery App',
        description: 'Pure vegetarian food delivery app where orders are accepted within 15 minutes with quality assurance.'
      },
      {
        icon: 'fas fa-utensils',
        title: 'BriyaniBro',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Food Delivery App',
        description: 'Specialized biryani delivery platform emphasizing premium meat quantity and quality with perfectly flavored rice.'
      },
      {
        icon: 'fas fa-car',
        title: 'Vayu Ride Sharing',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Mobile App',
        description: 'Connected transportation with autonomous car services, car wash, and comprehensive vehicle care features.'
      },
      {
        icon: 'fas fa-solar-panel',
        title: 'Energy Grid Monitor',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Website',
        description: 'Smart energy grid management, monitoring, and energy production optimization platform.'
      },
      {
        icon: 'fas fa-bullhorn',
        title: 'Creator Connect Marketing',
        status: 'Completed',
        statusClass: 'status-completed',
        progress: '100%',
        tech: 'Website',
        description: 'Digital marketing platform connecting brands with memers, influencers, and podcasters for authentic reach.'
      }
    ],

    // ==================== IN DEVELOPMENT - HIGH PROGRESS ====================
    developmentHigh: [
      {
        icon: 'fas fa-ring',
        title: 'Wedding SaaS',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '70%',
        tech: 'JavaScript',
        description: 'Comprehensive wedding planning platform for managing vendors, guests, budgets, and complete wedding coordination.'
      },
      {
        icon: 'fas fa-home',
        title: 'Remis Real Estate SaaS',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '70%',
        tech: 'JavaScript',
        description: 'Real estate management platform specifically for dealers, agents, and owners focusing on customer satisfaction and lead management.'
      },
      {
        icon: 'fas fa-film',
        title: 'Studio Suite (Adobe Alternative)',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '50%',
        tech: 'TypeScript',
        description: 'Professional platform for creators to edit videos, photos, design logos, and create after effects content.'
      },
      {
        icon: 'fas fa-cogs',
        title: 'Enterprise Management SaaS',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '50%',
        tech: 'TypeScript',
        description: 'Business OS for MSMEs and startups with CRM, project management, and workflow automation tools.'
      },
      {
        icon: 'fas fa-utensils',
        title: 'Restaurant Tech',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '20%',
        tech: 'TypeScript',
        description: 'Complete restaurant management system for orders, chef coordination, reservations, and inventory tracking.'
      },
      {
        icon: 'fas fa-tools',
        title: 'Construction Management SaaS',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '40%',
        tech: 'JavaScript',
        description: 'Comprehensive platform for clients to track contractors from project start to build completion, including design and progress monitoring.'
      },
      {
        icon: 'fas fa-industry',
        title: 'Manufacturing SaaS',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '30%',
        tech: 'TypeScript',
        description: 'Production management, inventory control, and operations optimization for manufacturing businesses.'
      }
    ],

    // ==================== IN DEVELOPMENT - CORE SERVICES ====================
    developmentCore: [
      {
        icon: 'fas fa-hard-hat',
        title: 'Blue Collar Jobs Platform',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '45%',
        tech: 'Job Portal',
        description: 'Comprehensive job portal connecting local and international blue-collar workers with verified opportunities across industries.'
      },
      {
        icon: 'fas fa-heartbeat',
        title: 'NutriHealth Buddy',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '35%',
        tech: 'Health & Wellness',
        description: 'AI-powered nutrition and wellness companion for personalized meal planning, health tracking, and fitness guidance.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Women\'s Safety App',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '40%',
        tech: 'Safety Platform',
        description: 'Individual-registered SOS emergency platform with real-time alerts, location sharing, and trusted contact networks.'
      },
      {
        icon: 'fas fa-book',
        title: 'Excel Kitab Accounting',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '25%',
        tech: 'FinTech SaaS',
        description: 'Simplified accounting and bookkeeping platform designed for small businesses and entrepreneurs.'
      },
      {
        icon: 'fas fa-piggy-bank',
        title: 'FinTech Banking',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '15%',
        tech: 'Banking Platform',
        description: 'Digital banking platform offering personal and business loans, fixed deposits, and comprehensive financial services.'
      },
      {
        icon: 'fas fa-calendar-alt',
        title: 'Gatherly Event Platform',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '30%',
        tech: 'Event Management',
        description: 'Meetups and events platform for organizing, discovering, and managing community gatherings and social events.'
      },
      {
        icon: 'fas fa-plane-departure',
        title: 'TripNDrip Travel & Hospitality',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '20%',
        tech: 'Travel Platform',
        description: 'Online hospitality and booking platform for hotels, flights, and complete travel experiences.'
      }
    ],

    // ==================== AI & ML PRODUCTS (Training Phase - 20%) ====================
    aiMlProducts: [
      {
        icon: 'fas fa-traffic-light',
        title: 'Traffic AI',
        status: 'Training Phase',
        statusClass: 'status-training',
        progress: '20%',
        requirements: 'GPU Training Required',
        tech: 'Computer Vision AI',
        description: 'Vision model-based traffic management system with dynamic timer adjustments based on real-time traffic density instead of traditional fixed timers.'
      },
      {
        icon: 'fas fa-comments',
        title: 'AI Chatbot (SLM)',
        status: 'Training Phase',
        statusClass: 'status-training',
        progress: '20%',
        requirements: 'GPU Training Required',
        tech: 'Small Language Model',
        description: 'Domain-specialized AI assistant using small language models, beating LLMs in speed, context accuracy, and achieving 80%+ relevance match scores.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Stock Trading AI',
        status: 'Training Phase',
        statusClass: 'status-training',
        progress: '20%',
        requirements: 'GPU Training Required',
        tech: 'Predictive AI',
        description: 'AI-powered stock and trading platform with intelligent market analysis and automated trading strategies.'
      }
    ],

    // ==================== AI AGENT ECOSYSTEM ====================
    aiAgents: [
      {
        icon: 'fas fa-user-tie',
        title: 'AI Sales Agent',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '20%',
        requirements: 'Training & GPU Required',
        tech: 'Autonomous AI Agent',
        description: 'Autonomous sales agent for lead qualification, outreach, follow-ups, and deal closing with natural conversation abilities.'
      },
      {
        icon: 'fas fa-headset',
        title: 'AI Customer Support Agent',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '20%',
        requirements: 'Training & GPU Required',
        tech: 'Autonomous AI Agent',
        description: 'Intelligent customer support agent handling queries, troubleshooting, escalations, and providing 24/7 multilingual assistance.'
      },
      {
        icon: 'fas fa-gavel',
        title: 'AI Legal Agent',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '15%',
        tech: 'Autonomous AI Agent',
        description: 'Legal AI assistant for contract analysis, case research, document drafting, and compliance monitoring.'
      },
      {
        icon: 'fas fa-calculator',
        title: 'AI Accounting Agent',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '10%',
        tech: 'Autonomous AI Agent',
        description: 'Automated accounting agent for bookkeeping, tax preparation, financial reporting, and audit assistance.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'AI Finance Search Agent',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '15%',
        tech: 'Autonomous AI Agent',
        description: 'Financial intelligence agent for market research, investment analysis, and real-time financial data discovery.'
      },
      {
        icon: 'fas fa-robot',
        title: 'AI Job Application Agent',
        status: 'In Development',
        statusClass: 'status-development',
        progress: '10%',
        tech: 'Autonomous AI Agent',
        description: 'Automated job searching and application agent with intelligent matching and profile optimization.'
      }
    ],

    // ==================== ADVANCED DEVELOPMENT (10-30%) ====================
    advancedDevelopment: [
      {
        icon: 'fas fa-spa',
        title: 'BeautyCare AI',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '25%',
        tech: 'AI-Powered SaaS',
        description: 'AI-powered beauty routine optimizer with exercise recommendations and personalized product suggestions for skin glow-up and wellness.'
      },
      {
        icon: 'fas fa-car-side',
        title: 'Vehicle Care Services',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '20%',
        tech: 'Service Platform',
        description: 'On-demand car wash, services, and comprehensive vehicle care with maintenance tracking and alerts.'
      },
      {
        icon: 'fas fa-hand-holding-medical',
        title: 'Addiction Recovery App',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '15%',
        tech: 'Healthcare App',
        description: 'Support platform for alcoholic, smoker, and drug addiction recovery with alternative therapy recommendations and community support.'
      },
      {
        icon: 'fas fa-envelope-open-text',
        title: 'Cold DM Platform',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '30%',
        tech: 'Marketing SaaS',
        description: 'Consent-first, multi-platform cold DM tool for businesses across Instagram, Twitter, WhatsApp, WeChat, and Snapchat with proper opt-in/opt-out mechanisms.'
      },
      {
        icon: 'fas fa-user-shield',
        title: 'Cyber Shield',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '20%',
        tech: 'Cybersecurity SaaS',
        description: 'Enterprise-grade cybersecurity SaaS for comprehensive personal and business protection with threat monitoring.'
      },
      {
        icon: 'fas fa-user-nurse',
        title: 'Senior & Baby Care',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '18%',
        tech: 'Healthcare Platform',
        description: 'Virtual nursing and care management for senior citizens and baby sitting services with real-time monitoring.'
      },
      {
        icon: 'fas fa-clipboard-check',
        title: 'Scope Creep Killer',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '22%',
        tech: 'Project Management',
        description: 'Project management tool preventing clients from adding out-of-scope features after fixed-price agreements with clear boundary enforcement.'
      },
      {
        icon: 'fas fa-link',
        title: 'Blockchain Rewards',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '15%',
        tech: 'Blockchain Platform',
        description: 'Token and rewards system using blockchain for purchase incentives and loyalty programs.'
      },
      {
        icon: 'fas fa-graduation-cap',
        title: 'College Life Management',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '28%',
        tech: 'EdTech SaaS',
        description: 'All-in-one SaaS platform for students managing academics, schedules, and campus life activities.'
      },
      {
        icon: 'fas fa-heart-broken',
        title: 'Divorce Support Platform',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '12%',
        tech: 'Support Platform',
        description: 'Divorce support resources and legal guidance specifically focused on individual needs during separation.'
      },
      {
        icon: 'fas fa-code',
        title: 'Synaptika AI Editor',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '25%',
        tech: 'AI Development Tool',
        description: 'AI coding editor where complete apps and websites can be built in 5 minutes with automated development.'
      },
      {
        icon: 'fas fa-building',
        title: 'GateKeeping Resident Portal',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '20%',
        tech: 'Property Management',
        description: 'Visitor management and maintenance request system for residential communities and commercial buildings.'
      },
      {
        icon: 'fas fa-newspaper',
        title: 'User Stories News',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '15%',
        tech: 'Media Platform',
        description: 'Platform where every individual can share their story and get featured as news content.'
      },
      {
        icon: 'fas fa-cut',
        title: 'Women\'s Tailoring',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '18%',
        tech: 'Service Platform',
        description: 'Specialized knitting and custom dress making service for women with precise measurements and designs.'
      },
      {
        icon: 'fas fa-helicopter',
        title: 'Drones Logistics',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '10%',
        tech: 'Drone Platform',
        description: 'Fast drone delivery platform for logistics under 3km with comprehensive drone management software.'
      },
      {
        icon: 'fas fa-tractor',
        title: 'FarmiCart AgriTech',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '22%',
        tech: 'B2B Marketplace',
        description: 'B2B online agriculture marketplace connecting farmers directly, eliminating middlemen for better pricing and fair trade.'
      },
      {
        icon: 'fas fa-baby',
        title: 'Parenting App (2-6 Years)',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '20%',
        tech: 'Parenting Platform',
        description: 'Screen-free parenting platform for daily routine management and skill training for children aged 2-6 years.'
      },
      {
        icon: 'fas fa-laugh',
        title: 'Nexora Entertainment',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '25%',
        tech: 'Entertainment Platform',
        description: 'Entertainment platform featuring shorts, movie clips, and viral memes for trending content discovery.'
      },
      {
        icon: 'fas fa-video',
        title: 'PixelStream OTT',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '18%',
        tech: 'OTT Platform',
        description: 'OTT platform for local creators, short films, soap operas, and showcasing new artists with original content.'
      },
      {
        icon: 'fas fa-broadcast-tower',
        title: 'WaveLink Video Platform',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '20%',
        tech: 'Video Communication',
        description: 'Video communication platform with integrated features for enhanced meetings and team collaboration.'
      },
      {
        icon: 'fas fa-road',
        title: 'Road Accountability',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '15%',
        tech: 'Governance Platform',
        description: 'Platform for tracking and ensuring accountability in road construction and maintenance projects.'
      },
      {
        icon: 'fas fa-dna',
        title: 'BioTech SaaS',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '12%',
        tech: 'BioTech Platform',
        description: 'Biotechnology management platform for research, lab operations, and data analysis in life sciences.'
      },
      {
        icon: 'fas fa-cloud',
        title: 'Cloud Bharath',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '10%',
        tech: 'Cloud Infrastructure',
        description: 'Indigenous cloud infrastructure platform designed specifically for Indian businesses with local compliance.'
      },
      {
        icon: 'fas fa-oil-can',
        title: 'Oil & Gas SaaS',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '15%',
        tech: 'Industry SaaS',
        description: 'Comprehensive management platform for oil and gas operations, exploration, and supply chain optimization.'
      },
      {
        icon: 'fas fa-ship',
        title: 'Freight Management',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '18%',
        tech: 'Logistics SaaS',
        description: 'International freight and logistics SaaS for cross-border shipping and supply chain coordination.'
      },
      {
        icon: 'fas fa-recycle',
        title: 'Waste & Carbon Management',
        status: 'In Development',
        statusClass: 'status-early',
        progress: '20%',
        tech: 'Sustainability Platform',
        description: 'Waste management, water management, and carbon credits marketplace for sustainable environmental solutions.'
      }
    ],

    // ==================== IDEATION PHASE (Concept Stage) ====================
    ideation: [
      {
        icon: 'fas fa-robot',
        title: 'Robotics Platform',
        status: 'Ideation',
        statusClass: 'status-ideation',
        requirements: 'Hardware R&D Required',
        tech: 'Robotics & AI',
        description: 'Robotics development and deployment platform for industrial automation and smart manufacturing.'
      },
      {
        icon: 'fas fa-dna',
        title: 'Mother AI - Life Creation',
        status: 'Ideation',
        statusClass: 'status-ideation',
        requirements: 'BioTech R&D Required',
        tech: 'BioTech & AI',
        description: 'Biotech platform combining AI with gene editing for assisted reproductive technologies and life creation research.'
      }
    ],

    // ==================== HARDWARE DEVELOPMENT (Embedded Systems) ====================
    hardwareProducts: [
      {
        icon: 'fas fa-charging-station',
        title: 'Kalam EV Vehicle',
        status: 'Hardware Development',
        statusClass: 'status-hardware',
        requirements: 'Embedded Systems & Battery Tech',
        tech: 'Electric Vehicle',
        description: 'Quad-motor electric vehicle with specialized lithium battery cells for unmatched reliability and performance.'
      },
      {
        icon: 'fas fa-wifi',
        title: 'LiFi Telecommunication',
        status: 'Hardware Development',
        statusClass: 'status-hardware',
        requirements: 'Embedded Systems & Optical Tech',
        tech: 'Light Fidelity Network',
        description: 'Pure digital data-only communication service using light fidelity technology at reduced operational costs.'
      },
      {
        icon: 'fas fa-brain',
        title: 'NeuroSync Brain Interface',
        status: 'Hardware Development',
        statusClass: 'status-hardware',
        requirements: 'Embedded Systems & Neuroscience',
        tech: 'Neural Interface',
        description: 'Neural chip technology enabling brain-to-brain API communication for next-generation connectivity.'
      },
      {
        icon: 'fas fa-water',
        title: 'Ganga Water Purification',
        status: 'Hardware Development',
        statusClass: 'status-hardware',
        requirements: 'Embedded Systems & Desalination Tech',
        tech: 'Water Technology',
        description: 'Advanced desalination and water purification technology converting seawater to fresh water for water scarcity solutions.'
      },
      {
        icon: 'fas fa-shield',
        title: 'Defense Threat Detection',
        status: 'Hardware Development',
        statusClass: 'status-hardware',
        requirements: 'Embedded Systems & Laser Tech',
        tech: 'Defense System',
        description: 'Advanced threat detection system with laser-based iron dome technology for national security applications.'
      }
    ]
  };

  const getStatusColor = (statusClass: string): string => {
    const colorMap: { [key: string]: string } = {
      'status-active': '#10b981',
      'status-completed': '#3b82f6',
      'status-development': '#f59e0b',
      'status-training': '#8b5cf6',
      'status-early': '#06b6d4',
      'status-ideation': '#6366f1',
      'status-hardware': '#14b8a6'
    };
    return colorMap[statusClass] || '#6366f1';
  };

  const renderProductSection = (title: string, products: Product[], sectionColor: string) => {
    if (!products || products.length === 0) return null;
    
    return (
      <div style={{ marginBottom: '80px' } as CSSProperties}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          marginBottom: '40px',
          color: sectionColor,
          fontWeight: 700,
          textAlign: 'center',
          textShadow: `0 0 20px ${sectionColor}66`
        } as CSSProperties}>
          {title}
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px'
        } as CSSProperties}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              status={product.status}
              progress={product.progress}
              statusColor={getStatusColor(product.statusClass)}
              tech={product.tech}
              description={product.description}
              requirements={product.requirements}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <header style={{
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '120px 5% 60px',
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
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            color: '#fff',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #4a55ff, #ff6f00, #00d4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite'
          } as CSSProperties}>
            Product Ecosystem 2025
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '700px',
            margin: '0 auto',
            color: '#aaa'
          } as CSSProperties}>
            Our comprehensive suite of 70+ integrated solutions spanning healthcare, AI, productivity, and emerging technologies.
          </p>
        </div>
      </header>

      {/* Products Section */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: '#0a0a0a'
      } as CSSProperties}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' } as CSSProperties}>
          
          {/* All Product Sections */}
          {renderProductSection('🚀 Active Products', productRoadmap.active, '#10b981')}
          {renderProductSection('✅ Completed & Ready to Launch', productRoadmap.completed, '#3b82f6')}
          {renderProductSection('⚡ High Progress Development (20-70%)', productRoadmap.developmentHigh, '#f59e0b')}
          {renderProductSection('🔧 Core Services Development', productRoadmap.developmentCore, '#f59e0b')}
          {renderProductSection('🧠 AI/ML Training Phase', productRoadmap.aiMlProducts, '#8b5cf6')}
          {renderProductSection('🤖 AI Agent Ecosystem', productRoadmap.aiAgents, '#ec4899')}
          {renderProductSection('🚧 Early Development (10-30%)', productRoadmap.advancedDevelopment, '#06b6d4')}
          {renderProductSection('💡 Ideation Phase', productRoadmap.ideation, '#6366f1')}
          {renderProductSection('⚙️ Hardware Development', productRoadmap.hardwareProducts, '#14b8a6')}

        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(135deg, rgba(74, 85, 255, 0.1), rgba(255, 111, 0, 0.1))',
        backgroundColor: '#0a0a0a'
      } as CSSProperties}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        } as CSSProperties}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1.5rem',
            color: '#fff',
            fontWeight: 700
          } as CSSProperties}>
            Join Our Innovation Journey
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#aaa',
            marginBottom: '2.5rem',
            lineHeight: '1.8'
          } as CSSProperties}>
            Be part of building the future with our comprehensive product ecosystem of 70+ solutions spanning AI, SaaS, hardware, and emerging technologies.
          </p>
          <Link
            href="/join-waitlist"
            className="btn-cta"
            style={{
              padding: '18px 45px',
              background: 'linear-gradient(135deg, #4a55ff, #ff6f00)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            } as CSSProperties}
          >
            JOIN WAITLIST →
          </Link>
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

        .btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(74, 85, 255, 0.4);
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

function ProductCard({ icon, title, status, progress, statusColor, tech, description, requirements }: ProductCardProps) {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '16px',
      padding: '30px',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    } as CSSProperties}>
      {/* Icon */}
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${statusColor}20, ${statusColor}10)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      } as CSSProperties}>
        <i className={icon} style={{
          color: statusColor,
          fontSize: '1.8rem'
        } as CSSProperties}></i>
      </div>

      {/* Status Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 600,
        marginBottom: '12px',
        backgroundColor: `${statusColor}20`,
        color: statusColor,
        border: `1px solid ${statusColor}40`
      } as CSSProperties}>
        {status}
        {progress && (
          <span style={{
            backgroundColor: statusColor,
            color: '#000',
            padding: '2px 8px',
            borderRadius: '10px',
            fontSize: '0.7rem',
            fontWeight: 700
          } as CSSProperties}>
            {progress}
          </span>
        )}
      </div>

      {/* Tech Badge */}
      <div style={{
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '0.7rem',
        fontWeight: 600,
        marginBottom: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#aaa'
      } as CSSProperties}>
        {tech}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1.3rem',
        marginBottom: '12px',
        color: '#fff',
        fontWeight: 600
      } as CSSProperties}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.9rem',
        color: '#aaa',
        lineHeight: '1.6',
        marginBottom: requirements ? '15px' : '0'
      } as CSSProperties}>
        {description}
      </p>

      {/* Requirements */}
      {requirements && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '15px'
        } as CSSProperties}>
          <i className="fas fa-info-circle" style={{
            color: statusColor,
            fontSize: '0.9rem'
          } as CSSProperties}></i>
          <span style={{
            fontSize: '0.8rem',
            color: '#aaa',
            fontStyle: 'italic'
          } as CSSProperties}>
            {requirements}
          </span>
        </div>
      )}
    </div>
  );
}
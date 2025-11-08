'use client';

import { useEffect } from 'react';

export default function SolutionsPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const phases = [
    {
      title: 'Phase 1: Foundation & Core Services',
      description: 'Essential products currently in active development',
      products: [
        {
          title: 'Telehealth Platform',
          icon: 'fas fa-briefcase-medical',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Connect with healthcare providers, schedule appointments, and manage your health records - all in one secure location.',
          features: [
            'Virtual doctor consultations',
            'Secure medical record access',
            'Ambulance service connectivity',
            'Prescription management'
          ]
        },
        {
          title: 'Blue Collar Jobs Platform',
          icon: 'fas fa-hard-hat',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'A dedicated platform connecting skilled workers with relevant opportunities, designed specifically for the underserved blue-collar segment.',
          features: [
            'AI-powered job matching',
            'Skill verification tracking',
            'Direct messaging',
            'Career resources'
          ]
        },
        {
          title: 'NutriHealth Buddy',
          icon: 'fas fa-heartbeat',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Track your nutrition, plan workouts, and monitor your progress with personalized health insights.',
          features: [
            'Personalized nutrition tracking',
            'Adaptive workout routines',
            'Progress tracking & reports',
            'Wearable device integration'
          ]
        },
        {
          title: 'Women\'s Safety Tools',
          icon: 'fas fa-shield-alt',
          status: 'In Development',
          statusClass: 'status-development',
          description: 'Enhance personal security with location sharing, emergency contacts, and community safety features.',
          features: [
            'Real-time location sharing',
            'One-tap emergency alert (SOS)',
            'Institutional safety partnerships',
            'Automated journey monitoring'
          ]
        }
      ]
    },
    {
      title: 'Phase 2: Service Expansion & Integration',
      description: 'Next wave of services planned for deployment',
      products: [
        {
          title: 'Enterprise Management SaaS',
          icon: 'fas fa-cogs',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Complete business OS with CRM, project management, and workflow automation. Alternative to Zoho and Salesforce.',
          features: [
            'Unified CRM platform',
            'Project management tools',
            'Workflow automation',
            'Team collaboration'
          ]
        },
        {
          title: 'SetCart Quick Commerce',
          icon: 'fas fa-shipping-fast',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Transparent quick commerce with zero dark patterns, connecting users with local stores for rapid delivery.',
          features: [
            '100% transparent pricing',
            'Sub-30 min local delivery',
            'No hidden fees or tricks',
            'Support local businesses'
          ]
        },
        {
          title: 'Construction Management SaaS',
          icon: 'fas fa-tools',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Comprehensive platform for clients to track contractors from project start to build completion.',
          features: [
            'Project tracking',
            'Design monitoring',
            'Progress updates',
            'Contractor management'
          ]
        },
        {
          title: 'Vayu Ride Sharing',
          icon: 'fas fa-car',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Connected transportation service optimizing urban mobility with focus on affordability and efficiency.',
          features: [
            'Real-time ride matching',
            'Driver verification & safety',
            'Multiple transport options',
            'Loyalty & rewards system'
          ]
        },
        {
          title: 'Gatherly Event Platform',
          icon: 'fas fa-calendar-alt',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Meetups and events platform for organizing, discovering, and managing community gatherings.',
          features: [
            'Event discovery',
            'Ticketing system',
            'Community building',
            'Social networking'
          ]
        },
        {
          title: 'TripNDrip Travel & Hospitality',
          icon: 'fas fa-plane-departure',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Complete travel platform with budget stays, spiritual travel, honeymoon packages, and AI itinerary planning.',
          features: [
            'Budget stays (₹99-₹499)',
            'Spiritual travel mode',
            'AI Travel Assistant',
            'Gamified rewards system'
          ]
        },
        {
          title: 'Excel Kitab Accounting',
          icon: 'fas fa-book',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Simplified accounting and bookkeeping platform designed for small businesses and entrepreneurs.',
          features: [
            'Easy bookkeeping',
            'Invoice generation',
            'Expense tracking',
            'Financial reports'
          ]
        },
        {
          title: 'FinTech Banking',
          icon: 'fas fa-piggy-bank',
          status: 'Planned',
          statusClass: 'status-planned',
          description: 'Digital banking platform offering personal and business loans, fixed deposits, and comprehensive financial services.',
          features: [
            'Automated expense tracking',
            'Secure P2P payments',
            'Financial health scoring',
            'Goal-based savings tracking'
          ]
        }
      ]
    },
    {
      title: 'Phase 3: Advanced Solutions & Technologies',
      description: 'Innovative products in research and development',
      products: [
        {
          title: 'Justica.ai - Legal Tech',
          icon: 'fas fa-balance-scale',
          status: 'Active',
          statusClass: 'status-active',
          description: 'AI-powered legal technology platform streamlining legal research, document analysis, and case management.',
          features: [
            'Legal research automation',
            'Document analysis',
            'Case management',
            'Compliance tracking'
          ]
        },
        {
          title: 'B2B Marketplace',
          icon: 'fas fa-handshake',
          status: 'Active',
          statusClass: 'status-active',
          description: 'Enterprise marketplace platform connecting buyers and sellers with intelligent matching and procurement automation.',
          features: [
            'Intelligent matching',
            'Procurement automation',
            'Transaction management',
            'Vendor analytics'
          ]
        },
        {
          title: 'Traffic AI',
          icon: 'fas fa-traffic-light',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Vision model-based traffic management system with dynamic timer adjustments based on real-time traffic density.',
          features: [
            'Real-time traffic analysis',
            'Dynamic signal timing',
            'Congestion prediction',
            'Smart city integration'
          ]
        },
        {
          title: 'BeautyCare AI',
          icon: 'fas fa-spa',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI-powered beauty routine optimizer with exercise recommendations and personalized product suggestions.',
          features: [
            'Skin analysis',
            'Product recommendations',
            'Routine optimization',
            'Progress tracking'
          ]
        },
        {
          title: 'Vehicle Care Services',
          icon: 'fas fa-car-side',
          status: 'Research',
          statusClass: 'status-research',
          description: 'On-demand car wash, services, and comprehensive vehicle care with maintenance tracking and alerts.',
          features: [
            'On-demand service',
            'Maintenance tracking',
            'Service reminders',
            'Quality assurance'
          ]
        },
        {
          title: 'Addiction Recovery App',
          icon: 'fas fa-hand-holding-medical',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Support platform for addiction recovery with alternative therapy recommendations and community support.',
          features: [
            'Recovery tracking',
            'Therapy recommendations',
            'Community support',
            'Progress milestones'
          ]
        },
        {
          title: 'Cold DM Platform',
          icon: 'fas fa-envelope-open-text',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Consent-first, multi-platform cold DM tool for businesses with proper opt-in/opt-out mechanisms.',
          features: [
            'Multi-platform reach',
            'Consent management',
            'Campaign analytics',
            'Response tracking'
          ]
        },
        {
          title: 'Cyber Shield',
          icon: 'fas fa-user-shield',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Comprehensive cybersecurity platform for personal and business protection with threat monitoring.',
          features: [
            'Real-time threat monitoring',
            'Identity protection',
            'Secure browsing & VPN',
            'Data encryption tools'
          ]
        },
        {
          title: 'Senior & Baby Care',
          icon: 'fas fa-user-nurse',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Virtual nursing and care management for senior citizens and baby sitting services with real-time monitoring.',
          features: [
            'Real-time monitoring',
            'Care scheduling',
            'Health tracking',
            'Emergency alerts'
          ]
        },
        {
          title: 'Scope Creep Killer',
          icon: 'fas fa-clipboard-check',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Project management tool preventing clients from adding out-of-scope features after fixed-price agreements.',
          features: [
            'Scope definition',
            'Change tracking',
            'Boundary enforcement',
            'Client communication'
          ]
        },
        {
          title: 'Blockchain Rewards',
          icon: 'fas fa-link',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Token and rewards system using blockchain for purchase incentives and loyalty programs.',
          features: [
            'Token economy',
            'Loyalty rewards',
            'Smart contracts',
            'Purchase incentives'
          ]
        },
        {
          title: 'College Life Management',
          icon: 'fas fa-graduation-cap',
          status: 'Research',
          statusClass: 'status-research',
          description: 'All-in-one SaaS platform for students managing academics, schedules, and campus life activities.',
          features: [
            'Academic tracking',
            'Schedule management',
            'Campus activities',
            'Study groups'
          ]
        },
        {
          title: 'AI Job Application Agent',
          icon: 'fas fa-robot',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Automated job searching and application with AI-powered resume optimization.',
          features: [
            'Auto job search & apply',
            'Resume optimization',
            'Interview preparation',
            'Application tracking'
          ]
        },
        {
          title: 'Divorce Support Platform',
          icon: 'fas fa-heart-broken',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Divorce support resources and legal guidance specifically focused on needs during separation.',
          features: [
            'Legal guidance',
            'Support resources',
            'Counseling services',
            'Document management'
          ]
        },
        {
          title: 'AI Chatbot (SLM)',
          icon: 'fas fa-comments',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Domain-specialized AI assistant using small language models, achieving 80%+ relevance match scores.',
          features: [
            'Domain specialization',
            'Fast response times',
            'High accuracy',
            'Context awareness'
          ]
        },
        {
          title: 'ChippyChips Veg Delivery',
          icon: 'fas fa-cookie-bite',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Pure vegetarian food delivery app where orders are accepted within 15 minutes with quality assurance.',
          features: [
            '100% vegetarian',
            '15-min acceptance',
            'Quality assured',
            'Fresh preparation'
          ]
        },
        {
          title: 'BriyaniBro',
          icon: 'fas fa-utensils',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Specialized biryani delivery platform emphasizing premium meat quantity and quality with perfectly flavored rice.',
          features: [
            'Premium quality',
            'Generous portions',
            'Perfect flavoring',
            'Fast delivery'
          ]
        },
        {
          title: 'Fast & Yoga',
          icon: 'fas fa-om',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Integrated fasting and yoga platform for nutritional wellness and holistic health practices.',
          features: [
            'Fasting schedules',
            'Yoga routines',
            'Wellness tracking',
            'Guided practices'
          ]
        },
        {
          title: 'Waste & Carbon Management',
          icon: 'fas fa-recycle',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Waste management, water management, and carbon credits marketplace for sustainable environmental solutions.',
          features: [
            'Waste tracking',
            'Carbon credits',
            'Water management',
            'Sustainability reports'
          ]
        },
        {
          title: 'Wedding SaaS',
          icon: 'fas fa-ring',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Comprehensive wedding planning platform for managing vendors, guests, budgets, and complete wedding coordination.',
          features: [
            'Vendor management',
            'Guest lists',
            'Budget tracking',
            'Event coordination'
          ]
        },
        {
          title: 'Synaptika AI Editor',
          icon: 'fas fa-code',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI coding editor where complete apps and websites can be built in 5 minutes with automated development.',
          features: [
            'Rapid development',
            'AI code generation',
            'Auto debugging',
            'Deployment tools'
          ]
        },
        {
          title: 'Energy Grid Monitor',
          icon: 'fas fa-solar-panel',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Smart energy grid management, monitoring, and energy production optimization platform.',
          features: [
            'Grid monitoring',
            'Energy optimization',
            'Production tracking',
            'Smart analytics'
          ]
        },
        {
          title: 'GateKeeping Resident Portal',
          icon: 'fas fa-building',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Visitor management and maintenance request system for residential communities and commercial buildings.',
          features: [
            'Visitor management',
            'Maintenance requests',
            'Community notices',
            'Security tracking'
          ]
        },
        {
          title: 'Kalam EV Vehicle',
          icon: 'fas fa-charging-station',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Quad-motor electric vehicle with specialized lithium battery cells for unmatched reliability.',
          features: [
            '4-motor redundancy',
            'Advanced battery tech',
            'Smart connectivity',
            'Sustainable design'
          ]
        },
        {
          title: 'Studio Suite',
          icon: 'fas fa-film',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Professional platform for creators to edit videos, photos, design logos, and create after effects content.',
          features: [
            'Video editing',
            'Photo editing',
            'Logo design',
            'Effects creation'
          ]
        },
        {
          title: 'Remis Real Estate SaaS',
          icon: 'fas fa-home',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Real estate management platform for dealers, agents, and owners focusing on customer satisfaction and lead management.',
          features: [
            'Lead management',
            'Property listings',
            'Client tracking',
            'Deal pipeline'
          ]
        },
        {
          title: 'User Stories News',
          icon: 'fas fa-newspaper',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Platform where every individual can share their story and get featured as news content.',
          features: [
            'Story submission',
            'Content curation',
            'Community voting',
            'Featured stories'
          ]
        },
        {
          title: 'Women\'s Tailoring',
          icon: 'fas fa-cut',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Specialized knitting and custom dress making service for women with precise measurements and designs.',
          features: [
            'Custom designs',
            'Precise measurements',
            'Quality fabrics',
            'Home delivery'
          ]
        },
        {
          title: 'Stock Trading AI',
          icon: 'fas fa-chart-line',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI-powered stock and trading platform with intelligent market analysis and automated trading strategies.',
          features: [
            'Market analysis',
            'Automated trading',
            'Risk management',
            'Portfolio tracking'
          ]
        },
        {
          title: 'Drones Logistics',
          icon: 'fas fa-helicopter',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Fast drone delivery platform for logistics under 3km with comprehensive drone management software.',
          features: [
            'Fast delivery',
            'Route optimization',
            'Fleet management',
            'Real-time tracking'
          ]
        },
        {
          title: 'Creator Connect Marketing',
          icon: 'fas fa-bullhorn',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Digital marketing platform connecting brands with memers, influencers, and podcasters for authentic reach.',
          features: [
            'Influencer matching',
            'Campaign management',
            'Analytics dashboard',
            'ROI tracking'
          ]
        },
        {
          title: 'Manufacturing SaaS',
          icon: 'fas fa-industry',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Production management, inventory control, and operations optimization for manufacturing businesses.',
          features: [
            'Production tracking',
            'Inventory management',
            'Quality control',
            'Operations analytics'
          ]
        },
        {
          title: 'Restaurant Tech',
          icon: 'fas fa-utensils',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Complete restaurant management system for orders, chef coordination, reservations, and inventory tracking.',
          features: [
            'Order management',
            'Reservation system',
            'Inventory tracking',
            'Kitchen coordination'
          ]
        },
        {
          title: 'FarmiCart AgriTech',
          icon: 'fas fa-tractor',
          status: 'Research',
          statusClass: 'status-research',
          description: 'B2B online agriculture marketplace connecting farmers directly, eliminating middlemen for better pricing.',
          features: [
            'Direct farmer connect',
            'Fair pricing',
            'Quality assurance',
            'Logistics support'
          ]
        },
        {
          title: 'Parenting App (2-6 Years)',
          icon: 'fas fa-baby',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Screen-free parenting platform for daily routine management and skill training for children aged 2-6 years.',
          features: [
            'Routine management',
            'Skill training',
            'Development tracking',
            'Parent resources'
          ]
        },
        {
          title: 'Nexora Entertainment',
          icon: 'fas fa-laugh',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Entertainment platform featuring shorts, movie clips, and viral memes for trending content discovery.',
          features: [
            'Short videos',
            'Movie clips',
            'Viral content',
            'Trending discovery'
          ]
        },
        {
          title: 'PixelStream OTT',
          icon: 'fas fa-video',
          status: 'Research',
          statusClass: 'status-research',
          description: 'OTT platform for local creators, short films, soap operas, and showcasing new artists with original content.',
          features: [
            'Original content',
            'Creator platform',
            'Live streaming',
            'Subscription model'
          ]
        },
        {
          title: 'Startup Fundraising CRM',
          icon: 'fas fa-rocket',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Specialized CRM for startups to manage investor relations, pitch tracking, and fundraising pipelines.',
          features: [
            'Investor database',
            'Pitch tracking',
            'Pipeline management',
            'Analytics dashboard'
          ]
        },
        {
          title: 'WaveLink Video Platform',
          icon: 'fas fa-broadcast-tower',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Video communication platform with integrated features for enhanced meetings and team collaboration.',
          features: [
            'HD video calls',
            'Screen sharing',
            'Recording',
            'Collaboration tools'
          ]
        },
        {
          title: 'Road Accountability',
          icon: 'fas fa-road',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Platform for tracking and ensuring accountability in road construction and maintenance projects.',
          features: [
            'Project tracking',
            'Quality monitoring',
            'Contractor accountability',
            'Public reporting'
          ]
        },
        {
          title: 'BioTech SaaS',
          icon: 'fas fa-dna',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Biotechnology management platform for research, lab operations, and data analysis in life sciences.',
          features: [
            'Lab management',
            'Research tracking',
            'Data analysis',
            'Compliance tools'
          ]
        },
        {
          title: 'Cloud Bharath',
          icon: 'fas fa-cloud',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Indigenous cloud infrastructure platform designed specifically for Indian businesses with local compliance.',
          features: [
            'Data sovereignty',
            'Local compliance',
            'Scalable infrastructure',
            'Cost-effective'
          ]
        },
        {
          title: 'LiFi Telecommunication',
          icon: 'fas fa-wifi',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Pure digital data-only communication service using light fidelity technology at reduced operational costs.',
          features: [
            'Light-based data',
            'High speed',
            'Low cost',
            'Secure transmission'
          ]
        },
        {
          title: 'NeuroSync Brain Interface',
          icon: 'fas fa-brain',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Neural chip technology enabling brain-to-brain API communication for next-generation connectivity.',
          features: [
            'Neural interface',
            'Brain communication',
            'API integration',
            'Advanced research'
          ]
        },
        {
          title: 'Ganga Water Purification',
          icon: 'fas fa-water',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Advanced desalination and water purification technology converting seawater to fresh water.',
          features: [
            'Desalination tech',
            'Water purification',
            'Scalable solution',
            'Environmental impact'
          ]
        },
        {
          title: 'Defense Threat Detection',
          icon: 'fas fa-shield',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Advanced threat detection system with laser-based iron dome technology for national security applications.',
          features: [
            'Threat detection',
            'Laser defense',
            'Real-time monitoring',
            'Security systems'
          ]
        },
        {
          title: 'Oil & Gas SaaS',
          icon: 'fas fa-oil-can',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Comprehensive management platform for oil and gas operations, exploration, and supply chain optimization.',
          features: [
            'Operations management',
            'Exploration tracking',
            'Supply chain',
            'Safety compliance'
          ]
        },
        {
          title: 'Freight Management',
          icon: 'fas fa-ship',
          status: 'Research',
          statusClass: 'status-research',
          description: 'International freight and logistics SaaS for cross-border shipping and supply chain coordination.',
          features: [
            'Global shipping',
            'Route optimization',
            'Customs management',
            'Real-time tracking'
          ]
        },
        {
          title: 'Robotics Platform',
          icon: 'fas fa-robot',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Robotics development and deployment platform for industrial automation and smart manufacturing.',
          features: [
            'Robot control',
            'Automation tools',
            'AI integration',
            'Manufacturing ops'
          ]
        },
        {
          title: 'Mother AI - Life Creation',
          icon: 'fas fa-dna',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Biotech platform combining AI with gene editing for assisted reproductive technologies and life creation research.',
          features: [
            'Gene editing',
            'AI assistance',
            'Research tools',
            'Ethical framework'
          ]
        }
      ]
    },
    {
      title: 'Phase 4: AI Agent Ecosystem',
      description: 'Next-generation autonomous AI agents',
      products: [
        {
          title: 'AI Sales Agent',
          icon: 'fas fa-user-tie',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Autonomous sales agent for lead qualification, outreach, follow-ups, and deal closing.',
          features: [
            'Lead qualification',
            'Automated outreach',
            'Follow-up management',
            'Deal closing support'
          ]
        },
        {
          title: 'AI Real Estate Agent',
          icon: 'fas fa-building',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI-powered real estate agent for asset management, acquisitions, brokerage, and property management.',
          features: [
            'Asset management',
            'Property acquisition',
            'Tenant management',
            'Damage reports'
          ]
        },
        {
          title: 'AI Agriculture Agent',
          icon: 'fas fa-seedling',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Precision farming AI agent for crop monitoring, disease detection, and resource optimization.',
          features: [
            'Crop monitoring',
            'Disease detection',
            'Resource optimization',
            'Yield prediction'
          ]
        },
        {
          title: 'AI Legal Agent',
          icon: 'fas fa-gavel',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Legal AI assistant for contract analysis, case research, document drafting, and compliance monitoring.',
          features: [
            'Contract analysis',
            'Case research',
            'Document drafting',
            'Compliance tracking'
          ]
        },
        {
          title: 'AI Accounting Agent',
          icon: 'fas fa-calculator',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Automated accounting agent for bookkeeping, tax preparation, financial reporting, and audit assistance.',
          features: [
            'Automated bookkeeping',
            'Tax preparation',
            'Financial reports',
            'Audit support'
          ]
        },
        {
          title: 'AI Finance Search Agent',
          icon: 'fas fa-chart-bar',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Financial intelligence agent for market research, investment analysis, and real-time financial data discovery.',
          features: [
            'Market research',
            'Investment analysis',
            'Data discovery',
            'Trend prediction'
          ]
        },
        {
          title: 'AI Government Infrastructure Agent',
          icon: 'fas fa-landmark',
          status: 'Research',
          statusClass: 'status-research',
          description: 'AI agent for government infrastructure planning, project monitoring, and resource allocation.',
          features: [
            'Infrastructure planning',
            'Project monitoring',
            'Resource allocation',
            'Public service optimization'
          ]
        },
        {
          title: 'AI Customer Support Agent',
          icon: 'fas fa-headset',
          status: 'Research',
          statusClass: 'status-research',
          description: 'Intelligent customer support agent handling queries, troubleshooting, and providing 24/7 multilingual assistance.',
          features: [
            'Query handling',
            'Troubleshooting',
            '24/7 availability',
            'Multilingual support'
          ]
        }
      ]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 20px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(74, 85, 255, 0.1) 0%, transparent 50%)',
          opacity: 0.5
        }}></div>
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '900px', 
          position: 'relative',
          zIndex: 1 
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Our Solutions Ecosystem
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#a0a0a0',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Explore Setica's comprehensive portfolio of 50+ integrated solutions 
            spanning healthcare, logistics, fintech, enterprise tools, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Solutions by Phase */}
      {phases.map((phase, phaseIndex) => (
        <section key={phaseIndex} style={{
          padding: '80px 5%',
          backgroundColor: phaseIndex % 2 === 0 ? '#0a0a0a' : '#111111'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Phase Header */}
            <div style={{ marginBottom: '50px', textAlign: 'center' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#fff'
              }}>
                {phase.title}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#888',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {phase.description}
              </p>
            </div>

            {/* Products Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '30px'
            }}>
              {phase.products.map((product, productIndex) => (
                <div key={productIndex} style={{
                  backgroundColor: '#1a1a1a',
                  borderRadius: '16px',
                  padding: '30px',
                  border: '1px solid #2a2a2a',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = product.statusClass === 'status-development' ? '#4A55FF' :
                                                       product.statusClass === 'status-planned' ? '#ff6f00' :
                                                       product.statusClass === 'status-active' ? '#00b894' : '#666';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#2a2a2a';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  {/* Background Gradient */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: product.statusClass === 'status-development' ? 'linear-gradient(90deg, #4A55FF, #6B75FF)' :
                               product.statusClass === 'status-planned' ? 'linear-gradient(90deg, #ff6f00, #ff8f40)' :
                               product.statusClass === 'status-active' ? 'linear-gradient(90deg, #00b894, #00d4aa)' :
                               'linear-gradient(90deg, #666, #888)'
                  }}></div>

                  {/* Status Badge */}
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '20px',
                    backgroundColor: product.statusClass === 'status-development' ? 'rgba(74, 85, 255, 0.15)' :
                                    product.statusClass === 'status-planned' ? 'rgba(255, 111, 0, 0.15)' :
                                    product.statusClass === 'status-active' ? 'rgba(0, 184, 148, 0.15)' :
                                    'rgba(102, 102, 102, 0.15)',
                    color: product.statusClass === 'status-development' ? '#6B75FF' :
                           product.statusClass === 'status-planned' ? '#ff8f40' :
                           product.statusClass === 'status-active' ? '#00d4aa' : '#999'
                  }}>
                    {product.status}
                  </span>

                  {/* Icon and Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <i className={product.icon} style={{
                      fontSize: '2.5rem',
                      background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}></i>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#fff',
                      margin: 0,
                      lineHeight: 1.3
                    }}>
                      {product.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#999',
                    lineHeight: 1.6,
                    marginBottom: '25px',
                    minHeight: '60px'
                  }}>
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 20px 0'
                  }}>
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 0',
                        fontSize: '0.875rem',
                        color: '#777'
                      }}>
                        <i className="fas fa-check-circle" style={{
                          color: '#4A55FF',
                          fontSize: '0.75rem',
                          flexShrink: 0
                        }}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#4A55FF',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginTop: 'auto',
                    paddingTop: '15px',
                    borderTop: '1px solid #2a2a2a'
                  }}>
                    Get Early Access <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section style={{
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(74, 85, 255, 0.15) 0%, transparent 70%)',
          opacity: 0.6
        }}></div>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: '#fff'
          }}>
            Ready to Experience the Future?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#999',
            marginBottom: '3rem',
            lineHeight: 1.6
          }}>
            Join our waitlist to get early access to Setica's integrated solutions and be part of the revolution.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '18px 40px',
              fontSize: '1.1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #4A55FF, #ff6f00)',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 85, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              JOIN WAITLIST NOW
            </button>
            <button style={{
              padding: '18px 40px',
              fontSize: '1.1rem',
              fontWeight: 600,
              background: 'transparent',
              color: '#4A55FF',
              border: '2px solid #4A55FF',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(74, 85, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
}
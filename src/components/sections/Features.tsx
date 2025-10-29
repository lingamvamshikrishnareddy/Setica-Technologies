'use client';

import Card from '@/components/ui/Card';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'orange' | 'purple' | 'green';
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: 'fas fa-layer-group',
    title: '40+ Integrated Solutions',
    description: 'Access a comprehensive ecosystem of products spanning healthcare, logistics, fintech, enterprise tools, and more - all unified under one platform.',
    color: 'blue',
  },
  {
    icon: 'fas fa-code',
    title: 'Premium Development Services',
    description: 'Expert software development team delivering custom solutions, from MVPs to enterprise-grade applications with cutting-edge technology.',
    color: 'orange',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption, compliance with international standards, and robust data protection ensuring your information stays safe.',
    color: 'purple',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Rapid Deployment',
    description: 'Quick time-to-market with agile development methodology, continuous integration, and seamless deployment processes.',
    color: 'green',
  },
  {
    icon: 'fas fa-users',
    title: 'Dedicated Support',
    description: '24/7 customer support, comprehensive documentation, and dedicated account managers to ensure your success.',
    color: 'blue',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Scalable Infrastructure',
    description: 'Built to scale from startups to enterprise, handling millions of users with high availability and performance.',
    color: 'orange',
  },
];

const colorMap = {
  blue: '#4A55FF',
  orange: '#ff6f00',
  purple: '#9c27b0',
  green: '#4caf50',
};

export default function Features({
  title = "Why Choose Setica?",
  subtitle = "Everything you need to build, scale, and transform your business - all in one unified platform.",
  features = defaultFeatures,
}: FeaturesProps) {
  return (
    <section style={{
      padding: '100px 5%',
      background: 'var(--dark-bg)',
    }}>
      <div className="section-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {features.map((feature, index) => (
          <Card key={index}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '15px',
            }}>
              <div style={{
                minWidth: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                background: `rgba(${feature.color === 'blue' ? '74, 85, 255' : feature.color === 'orange' ? '255, 111, 0' : feature.color === 'purple' ? '156, 39, 176' : '76, 175, 80'}, 0.1)`,
                border: `1px solid rgba(${feature.color === 'blue' ? '74, 85, 255' : feature.color === 'orange' ? '255, 111, 0' : feature.color === 'purple' ? '156, 39, 176' : '76, 175, 80'}, 0.2)`,
              }}>
                <i className={feature.icon} style={{
                  fontSize: '1.8rem',
                  color: colorMap[feature.color],
                }}></i>
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--text-color)',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}>
                  {feature.title}
                </h3>
              </div>
            </div>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: '1.6',
            }}>
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
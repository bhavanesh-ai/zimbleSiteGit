import React from 'react';

const features = [
  {
    title: 'Overview',
    description: 'Zimble is a powerful and reliable solution designed to help businesses seamlessly integrate and manage their e-commerce data across multiple platforms. ',
    link: '/zimbleBenefits', 
    image: 'img/overview-word-summary-recap-concept-600nw-2351843411.webp',
  },
  {
    title: 'Benefits of Zimble Integration',
    description: 'Get live updates from all your platforms to make smarter decisions.',
    link: '/docs/real-time-data', // docs pages work too
    image: 'img/feature-realtime.png',
  },
  {
    title: 'Technical Description',
    description: 'We ensure your data is safe with enterprise-grade security measures.',
    link: '/docs/security',
    image: 'img/feature-secure.png',
  },
];



export default function HomepageFeatures() {
  return (
    <section className="homepage-features" style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem 0' }}>
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="feature-block"
          style={{
            textAlign: 'center',
            maxWidth: '300px',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            style={{ objectFit: 'contain', marginBottom: '1rem' }}
          />
          <h3>{feature.title}</h3>
          <p style={{ textAlign: "left" }}>{feature.description}</p>
          <a href={feature.link} style={{ color: '#1e88e5', fontWeight: 'bold' }}>
           <button style={{width:"100%"}}> Know More &rarr;</button>
          </a>
        </div>
      ))}
    </section>
  );
}

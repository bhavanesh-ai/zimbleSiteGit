import React from 'react';

const features = [
  {
    title: 'Zimble 2.0',
    description: 'Zimble is a powerful and reliable solution designed to help businesses seamlessly integrate and manage their e-commerce data across multiple platforms. ',
    link: '/ZimbleDoc', 
    image: 'img/overview-word-summary-recap-concept-600nw-2351843411.webp',
  },
  {
    title: 'Zimble 3.0',
    description: 'Zimble is a powerful and reliable solution designed to help businesses seamlessly integrate and manage their e-commerce data across multiple platforms.',
    link: '/ZimbleDoc', // docs pages work too
    image: 'img/overview-word-summary-recap-concept-600nw-2351843411.webp',
  },
  {
    title: 'Zimble-X',
    description: 'Future Development',
    link: '/Zimble-x',
    image: 'img/overview-word-summary-recap-concept-600nw-2351843411.webp',
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

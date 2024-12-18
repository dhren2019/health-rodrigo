'use client';

import { Link } from '@/src/navigation';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import Image from 'next/image';
import GithubIcon from '/public/vercel.svg';
import LogoIcon from '/public/next.svg';
import Button from './components/Button';
import NovorapidImage from '/public/novorapid.webp';
import TresibaImage from '/public/tresiva.jpeg';
import StelaraImage from '/public/stelara.jpeg';
import EuthyroxImage from '/public/eutirox.jpg';



// New DashboardPage Component with Medical Info
export default function DashboardPage() {
  const t = useTranslations('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const medications = [
    {
      name: 'Insulin Novorapid',
      description: 'Fast-acting insulin used to control blood sugar spikes immediately after meals. Administered via injection and starts working within 10-20 minutes.',
      image: NovorapidImage.src,
    },
    {
      name: 'Insulin Tresiba',
      description: 'Long-acting insulin that provides a steady release of insulin for up to 42 hours, helping to maintain stable blood sugar levels throughout the day and night.',
      image: TresibaImage.src,
    },
    {
      name: 'Stelara',
      description: "Biologic medication used for treating Crohn's disease and ulcerative colitis. It reduces inflammation by targeting specific proteins in the immune system.",
      image: StelaraImage.src,
    },
    {
      name: 'Euthyrox',
      description: 'Synthetic thyroid hormone replacement used to treat hypothyroidism. It helps restore normal energy levels, metabolism, and overall thyroid function.',
      image: EuthyroxImage.src,
    },
  ];

  return (
    <div style={{ margin: '0', padding: '0',  fontFamily: 'Arial, sans-serif', color: '#333' }}>

<section style={{ width: '100%', margin: '0', padding: '50px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>

        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Medical Emergency Card
        </h1>
        <div style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#555' }}>
          In case of emergency, please contact:
        </div>
        <div style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
  <p>Mother: <strong>+34 684 119 287</strong></p>
  <p>Father: <strong>+34 659 490 567</strong></p>
  <p>Brother: <strong>+34 664 23 93 58</strong></p>
  <p>Friend: <strong>+34 685 18 43 63</strong></p>
</div>
        <div style={{ fontSize: '1.5rem', margin: '30px 30px', color: '#555' }}>
          Medical Information:
        </div>
        <div style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#555' }}>
          Blood Type: <strong>O-</strong>
        </div>
        <div style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>
          Allergies: <strong>None</strong>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            justifyContent: 'center',
          }}
        >
          {medications.map((med, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '250px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={med.image}
                alt={med.name}
                style={{
                  cursor: 'pointer',
                  marginBottom: '10px',
                  borderRadius: '8px',
                  maxHeight: '120px',
                  objectFit: 'contain',
                }}
                onClick={() => setSelectedImage(med.image)}
              />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', fontWeight: 'bold', color: '#222' }}>
                {med.name}
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.4' }}>{med.description}</p>
            </div>
          ))}
        </div>
      </section>
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt='Enlarged View'
            style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
          />
        </div>
      )}
    </div>
  );
}


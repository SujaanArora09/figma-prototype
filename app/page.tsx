"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/landing-page/hero';
import Features from '@/components/landing-page/features';
import Footer from '@/components/landing-page/footer';
import Loader from '@/components/Loader'; 

const App = dynamic(() => import('./App'), { ssr: false });

export default function LandingPage() {
  const [showApp, setShowApp] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleGetStarted = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); 
      setShowApp(true); 
    }, 5000);
  };

  return (
    <div>
      {showApp ? (
        <App /> 
      ) : loading ? ( 
        <Loader />
      ) : (
        <>
          <Hero onGetStarted={handleGetStarted} />
          <Features />
          <Footer/>
        </>
      )}
    </div>
  );
}

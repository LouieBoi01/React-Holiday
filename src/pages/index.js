import React from 'react';
import { FeaturedStays } from "../components/FeaturedStays/FeaturedStays";
import { useEffect } from 'react';
import { AbilityForm } from "../components/AbilityForm/AbilityForm";


const Home = () => {
  useEffect(() => {
    document.title = "Active Life | Home"
  });

  return (
    <div style={{paddingTop:'2rem', backgroundColor: '#f0ead6' }}>
        <AbilityForm />
        <div style={{ display: 'block', padding: '2rem' }} className='FeaturedStays-container'>
        <FeaturedStays />
        </div>
    </div>
  );
};

export default Home;
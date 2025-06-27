"use client"
import AdviceToolsSection from '@/components/AdviceToolsSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
// import RealEstateLoader from '@/components/RouteLoader';
import SearchFilters from '@/components/SearchFilters';
import {useState, useEffect} from 'react';

const Rent = () => {
  const rentalProperties = [
    {
      id: 1,
      title: 'Modern Apartment in Civil Lines',
      location: 'Civil Lines, Nagpur',
      area: '1200 sq.ft (2BHK)',
      price: '₹25,000/month',
      type: 'Apartment',
      image: '/images/rental1.jpg',
      amenities: 'Fully Furnished, AC, Modular Kitchen, Security',
      availableFrom: 'Immediate'
    },
    {
      id: 2,
      title: 'Cozy Villa in Dharampeth',
      location: 'Dharampeth, Nagpur',
      area: '1800 sq.ft (3BHK)',
      price: '₹45,000/month',
      type: 'Villa',
      image: '/images/rental2.jpg',
      amenities: 'Garden, Parking, Modular Kitchen, Security',
      availableFrom: '1st Next Month'
    },
    {
      id: 3,
      title: 'Studio Apartment in Wardha Road',
      location: 'Wardha Road, Nagpur',
      area: '600 sq.ft (1BHK)',
      price: '₹15,000/month',
      type: 'Apartment',
      image: '/images/rental3.jpg',
      amenities: 'Semi-Furnished, Wardrobe, Kitchenette',
      availableFrom: 'Immediate'
    },
    {
      id: 4,
      title: 'Penthouse in Manish Nagar',
      location: 'Manish Nagar, Nagpur',
      area: '2200 sq.ft (4BHK)',
      price: '₹60,000/month',
      type: 'Penthouse',
      image: '/images/rental4.jpg',
      amenities: 'Fully Furnished, AC, Gym, Swimming Pool',
      availableFrom: '15th Next Month'
    },
    {
      id: 5,
      title: 'Commercial Space in Sitabuldi',
      location: 'Sitabuldi, Nagpur',
      area: '1500 sq.ft',
      price: '₹50,000/month',
      type: 'Commercial',
      image: '/images/rental5.jpg',
      amenities: 'Ground Floor, Parking, Security',
      availableFrom: 'Immediate'
    },
    {
      id: 6,
      title: 'Independent House in Pratap Nagar',
      location: 'Pratap Nagar, Nagpur',
      area: '2000 sq.ft (3BHK)',
      price: '₹40,000/month',
      type: 'House',
      image: '/images/rental6.jpg',
      amenities: 'Garden, Parking, Modular Kitchen',
      availableFrom: '1st Next Month'
    }
  ];


 

  return (
    <>
      <Header />
      <div
        className="relative py-16 mt-16 " // 90% opacity blue overlay
        style={{
          backgroundImage: "url('./images/back22.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10"> {/* z-10 brings content above overlay */}
          <h1 className="text-4xl font-bold mb-4 text-black">Find Your Perfect Rental Property in Nagpur</h1>
          <p className="text-xl mb-8 text-black">Discover the best rental properties in Nagpur that match your lifestyle and budget</p>
          <SearchFilters />
        </div>
      </div>



      <div>
        <AdviceToolsSection />
      </div>

      <Footer />
    </>
  );
}

export default Rent;

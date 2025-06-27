import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { FaChartLine, FaMoneyBillWave, FaBuilding, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const InvestmentHotspotNagpur = () => {
    // Top investment localities data
    const hotspots = [
        {
            name: 'Wardha Road',
            growth: '18% YoY',
            avgPrice: '₹4,800/sq.ft',
            rentalYield: '5.2%',
            description: 'Emerging IT corridor with upcoming infrastructure projects',
            type: 'residential',
        },
        {
            name: 'Sitabuldi',
            growth: '12% YoY',
            avgPrice: '₹7,200/sq.ft',
            rentalYield: '6.8%',
            description: 'Prime commercial hub with high footfall',
            type: 'commercial',
        },
        {
            name: 'Manish Nagar',
            growth: '15% YoY',
            avgPrice: '₹5,500/sq.ft',
            rentalYield: '4.9%',
            description: 'Well-established residential area with good amenities',
            type: 'residential',
        },
        {
            name: 'Hingna MIDC',
            growth: '22% YoY',
            avgPrice: '₹3,900/sq.ft',
            rentalYield: '5.8%',
            description: 'Industrial growth driving real estate demand',
            type: 'mixed',
        },
        {
            name: 'Dharampeth',
            growth: '10% YoY',
            avgPrice: '₹6,800/sq.ft',
            rentalYield: '5.5%',
            description: 'Premium locality with established social infrastructure',
            type: 'residential',
        },
        {
            name: 'Mihan SEZ',
            growth: '25% YoY',
            avgPrice: '₹5,200/sq.ft',
            rentalYield: '6.2%',
            description: 'Special Economic Zone with massive future potential',
            type: 'commercial',
        },
    ];

    const getTypeIcon = (type) => {
        switch (type) {
            case 'residential':
                return <FaHome className="text-blue-500" />;
            case 'commercial':
                return <FaBuilding className="text-green-500" />;
            case 'mixed':
                return (
                    <div className="flex">
                        <FaHome className="text-blue-500" />
                        <FaBuilding className="text-green-500 ml-1" />
                    </div>
                );
            default:
                return <FaHome className="text-blue-500" />;
        }
    };

    return (
        <>
            <Header />
            <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-24 pb-12 mt-10">
                <div className="max-w-7xl mx-auto ">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Investment Hotspots in Nagpur
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Discover the top localities in Nagpur for real estate investment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hotspots.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                                        <div className="flex items-center">
                                            {getTypeIcon(area.type)}
                                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                {area.growth}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <FaMoneyBillWave className="text-yellow-500" />
                                            <span className="ml-2 text-gray-600">Avg. Price: {area.avgPrice}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaChartLine className="text-purple-500" />
                                            <span className="ml-2 text-gray-600">Yield: {area.rentalYield}</span>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-gray-600">{area.description}</p>

                                    <div className="mt-6">
                                        <Link href={`/property/`} passHref>
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                            View Properties
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-gray-300 rounded-lg shadow-sm transition-colors duration-300">
                            View All Investment Areas
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InvestmentHotspotNagpur;
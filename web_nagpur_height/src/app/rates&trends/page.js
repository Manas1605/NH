"use client"
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RatesTrendsNagpur = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [timePeriod, setTimePeriod] = useState('1y');
  const [loading, setLoading] = useState(true);
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = async () => {
      setLoading(true);
      
      // Mock data for different time periods
      const mockData = {
        residential: {
          '3m': {
            labels: ['Oct', 'Nov', 'Dec'],
            prices: [5400, 5500, 5600],
            trend: 'up',
            percentageChange: '3.7%',
            avgPrice: '₹5,500/sq.ft',
            hotspots: ['Wardha Road', 'Hingna', 'Manish Nagar', 'Dharampeth'],
          },
          '6m': {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            prices: [5100, 5200, 5300, 5400, 5500, 5600],
            trend: 'up',
            percentageChange: '7.8%',
            avgPrice: '₹5,350/sq.ft',
            hotspots: ['Wardha Road', 'Hingna', 'Manish Nagar', 'Dharampeth'],
          },
          '1y': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            prices: [4500, 4544, 4589, 4634, 4680, 4726, 4773, 4820, 4867, 4915, 4963, 5011],
            trend: 'up',
            percentageChange: '12.5%',
            avgPrice: '₹5,050/sq.ft',
            hotspots: ['Wardha Road', 'Hingna', 'Manish Nagar', 'Dharampeth'],
          },
          '3y': {
            labels: ['2021', '2022', '2023'],
            prices: [3800, 4200, 5011],
            trend: 'up',
            percentageChange: '31.9%',
            avgPrice: '₹4,337/sq.ft',
            hotspots: ['Wardha Road', 'Hingna', 'Manish Nagar', 'Dharampeth'],
          }
        },
        commercial: {
          '3m': {
            labels: ['Oct', 'Nov', 'Dec'],
            prices: [7400, 7500, 7600],
            trend: 'up',
            percentageChange: '2.7%',
            avgPrice: '₹7,500/sq.ft',
            hotspots: ['Sitabuldi', 'Sadar', 'Ramdaspeth', 'Civil Lines'],
          },
          '6m': {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            prices: [7100, 7200, 7300, 7400, 7500, 7600],
            trend: 'up',
            percentageChange: '7.0%',
            avgPrice: '₹7,350/sq.ft',
            hotspots: ['Sitabuldi', 'Sadar', 'Ramdaspeth', 'Civil Lines'],
          },
          '1y': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            prices: [6500, 6544, 6587, 6631, 6676, 6720, 6765, 6810, 6856, 6902, 6948, 6994],
            trend: 'up',
            percentageChange: '8.3%',
            avgPrice: '₹7,050/sq.ft',
            hotspots: ['Sitabuldi', 'Sadar', 'Ramdaspeth', 'Civil Lines'],
          },
          '3y': {
            labels: ['2021', '2022', '2023'],
            prices: [5800, 6300, 6994],
            trend: 'up',
            percentageChange: '20.6%',
            avgPrice: '₹6,365/sq.ft',
            hotspots: ['Sitabuldi', 'Sadar', 'Ramdaspeth', 'Civil Lines'],
          }
        },
        rental: {
          '3m': {
            labels: ['Oct', 'Nov', 'Dec'],
            prices: [22.5, 23.0, 23.5],
            trend: 'up',
            percentageChange: '4.4%',
            avgPrice: '₹23.0/sq.ft/month',
            hotspots: ['Pratap Nagar', 'Ajni', 'Koradi Road', 'Besa'],
          },
          '6m': {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            prices: [21.0, 21.5, 22.0, 22.5, 23.0, 23.5],
            trend: 'up',
            percentageChange: '11.9%',
            avgPrice: '₹22.1/sq.ft/month',
            hotspots: ['Pratap Nagar', 'Ajni', 'Koradi Road', 'Besa'],
          },
          '1y': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            prices: [18.0, 18.2, 18.4, 18.6, 18.9, 19.1, 19.3, 19.5, 19.8, 20.0, 20.2, 20.5],
            trend: 'up',
            percentageChange: '15.2%',
            avgPrice: '₹20.5/sq.ft/month',
            hotspots: ['Pratap Nagar', 'Ajni', 'Koradi Road', 'Besa'],
          },
          '3y': {
            labels: ['2021', '2022', '2023'],
            prices: [15.5, 17.0, 20.5],
            trend: 'up',
            percentageChange: '32.3%',
            avgPrice: '₹17.7/sq.ft/month',
            hotspots: ['Pratap Nagar', 'Ajni', 'Koradi Road', 'Besa'],
          }
        }
      };
      
      setTimeout(() => {
        setMarketData(mockData);
        setLoading(false);
      }, 800);
    };

    fetchData();
  }, [timePeriod]);

  const renderChart = () => {
    if (loading || !marketData) {
      return <div className="flex justify-center items-center h-64">Loading...</div>;
    }

    const data = marketData[activeTab][timePeriod];
    const isRental = activeTab === 'rental';

    const chartData = {
      labels: data.labels,
      datasets: [
        {
          label: isRental ? 'Rental Rate (₹/sq.ft/month)' : 'Price (₹/sq.ft)',
          data: data.prices,
          borderColor: data.trend === 'up' ? '#10B981' : '#EF4444',
          backgroundColor: data.trend === 'up' ? '#10B981' : '#EF4444',
          tension: 0.3,
          fill: false,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Nagpur ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Market Trends (${getTimePeriodLabel(timePeriod)})`,
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: isRental ? 'Rent (₹/sq.ft/month)' : 'Price (₹/sq.ft)',
          },
        },
      },
    };

    return <Line data={chartData} options={options} />;
  };

  const getTimePeriodLabel = (period) => {
    switch (period) {
      case '3m': return 'Last 3 Months';
      case '6m': return 'Last 6 Months';
      case '1y': return 'Last 1 Year';
      case '3y': return 'Last 3 Years';
      default: return period;
    }
  };

  const renderHotspots = () => {
    if (loading || !marketData) return null;

    const data = marketData[activeTab][timePeriod];

    return (
      <div className="pt-24 pb-12 mt-20">
        <h3 className="text-lg font-semibold mb-2">Emerging Hotspots in Nagpur</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {data.hotspots.map((area, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span className="font-medium">{area}</span>
              </div>
              <div className="mt-1 text-sm text-gray-600">+{Math.floor(Math.random() * 5) + 3}% YoY growth</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStats = () => {
    if (loading || !marketData) return null;

    const data = marketData[activeTab][timePeriod];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">Average Price</div>
          <div className="text-2xl font-bold mt-1">{data.avgPrice}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">{getTimePeriodLabel(timePeriod)} Change</div>
          <div className={`text-2xl font-bold mt-1 ${data.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {data.trend === 'up' ? '↑' : '↓'} {data.percentageChange}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">Market Sentiment</div>
          <div className="text-2xl font-bold mt-1">
            {data.trend === 'up' ? 'Positive' : 'Negative'}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-14 pb-12 mt-10">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Nagpur Real Estate Rates & Trends</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex space-x-2 mb-4 md:mb-0">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'residential' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'commercial' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveTab('rental')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'rental' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Rental
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setTimePeriod('3m')}
                className={`px-3 py-1 rounded-lg ${timePeriod === '3m' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                3M
              </button>
              <button
                onClick={() => setTimePeriod('6m')}
                className={`px-3 py-1 rounded-lg ${timePeriod === '6m' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                6M
              </button>
              <button
                onClick={() => setTimePeriod('1y')}
                className={`px-3 py-1 rounded-lg ${timePeriod === '1y' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                1Y
              </button>
              <button
                onClick={() => setTimePeriod('3y')}
                className={`px-3 py-1 rounded-lg ${timePeriod === '3y' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                3Y
              </button>
            </div>
          </div>
          
          {renderStats()}
          
          <div className="h-96">
            {renderChart()}
          </div>
          
          {renderHotspots()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RatesTrendsNagpur;
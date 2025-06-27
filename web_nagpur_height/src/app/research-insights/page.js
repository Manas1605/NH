'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ResearchInsights = () => {
  const [activeTab, setActiveTab] = useState('market-trends');

  // Sample market data
  const marketTrends = [
    { year: '2020', price: 4500, demand: 65 },
    { year: '2021', price: 5200, demand: 72 },
    { year: '2022', price: 6100, demand: 78 },
    { year: '2023', price: 6800, demand: 82 },
    { year: '2024', price: 7500, demand: 85 }
  ];

  // Sample reports
  const reports = [
    {
      title: 'Nagpur Residential Market Outlook 2024',
      description: 'Comprehensive analysis of housing trends and future projections',
      downloadLink: '/reports/nagpur-outlook-2024.pdf'
    },
    {
      title: 'Commercial Real Estate Growth Report',
      description: 'Office space and retail sector performance analysis',
      downloadLink: '/reports/commercial-growth.pdf'
    }
  ];

  // Sample articles
  const articles = [
    {
      title: 'Emerging Hotspots in Nagpur',
      date: 'May 15, 2024',
      excerpt: 'Analysis of up-and-coming neighborhoods with high growth potential'
    },
    {
      title: 'Impact of Infrastructure Projects',
      date: 'April 28, 2024',
      excerpt: 'How new roads and metro lines are transforming property values'
    }
  ];

  return (
    <>
      <Header />

      <main className="pt-24 pb-12 mt-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Research Insights</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data-driven analysis and market intelligence for informed real estate decisions
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`py-4 px-6 font-medium ${activeTab === 'market-trends' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('market-trends')}
            >
              Market Trends
            </button>
            <button
              className={`py-4 px-6 font-medium ${activeTab === 'reports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('reports')}
            >
              Research Reports
            </button>
            <button
              className={`py-4 px-6 font-medium ${activeTab === 'articles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('articles')}
            >
              Expert Articles
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md p-8">
            {activeTab === 'market-trends' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Nagpur Property Market Trends</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Price Trend Chart */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Average Price Per Sq.Ft (₹)</h3>
                    <div className="h-64">
                      <Bar
                        data={{
                          labels: marketTrends.map(item => item.year),
                          datasets: [{
                            label: 'Price (₹/sq.ft)',
                            data: marketTrends.map(item => item.price),
                            backgroundColor: 'rgba(59, 130, 246, 0.7)',
                            borderColor: 'rgba(59, 130, 246, 1)',
                            borderWidth: 1,
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false
                            },
                            tooltip: {
                              callbacks: {
                                label: function (context) {
                                  return `₹${context.raw.toLocaleString('en-IN')}/sq.ft`;
                                }
                              }
                            }
                          },
                          scales: {
                            y: {
                              beginAtZero: false,
                              ticks: {
                                callback: function (value) {
                                  return `₹${value.toLocaleString('en-IN')}`;
                                }
                              }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Demand Trend Chart */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Market Demand Index</h3>
                    <div className="h-64">
                      <Line
                        data={{
                          labels: marketTrends.map(item => item.year),
                          datasets: [{
                            label: 'Demand Index',
                            data: marketTrends.map(item => item.demand),
                            borderColor: 'rgba(16, 185, 129, 1)',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            borderWidth: 2,
                            tension: 0.3,
                            fill: true
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false
                            }
                          },
                          scales: {
                            y: {
                              beginAtZero: true,
                              max: 100,
                              ticks: {
                                callback: function (value) {
                                  return `${value}%`;
                                }
                              }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Key Observations</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>15% year-over-year price appreciation in residential sector</li>
                    <li>West Nagpur emerging as premium residential corridor</li>
                    <li>Commercial demand shifting towards ring road developments</li>
                    <li>Increased NRI investment in luxury segment</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Market Research Reports</h2>

                <div className="space-y-6">
                  {reports.map((report, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                      <p className="text-gray-600 mb-4">{report.description}</p>
                      <a
                        href={report.downloadLink}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        download
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Report (PDF)
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'articles' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Expert Analysis & Articles</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles.map((article, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-500 text-sm mb-3">{article.date}</p>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                        Read Full Article →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-12 bg-blue-600 text-white rounded-xl shadow-md p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-2">Stay Updated with Our Research</h2>
              <p className="mb-6">Subscribe to receive monthly market insights and reports</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ResearchInsights;
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsApp from "@/components/WhatsApp";
import { Properties } from '../../../data/properties.json';
import ImageGallery from "@/components/ImageGallery"; // import client component
import WhatsApp_button from "@/components/WhatsApp_button";
import { FaBuilding } from 'react-icons/fa';
import Breadcrumbs from '@/components/Breadcrumbs';



export async function generateMetadata({ params }) {
  const id = Number(params.slug.split('-')[0]);
  const property = Properties.find(prop => prop.id === id);


  const url = `http://nagpurheights.com/property/${params.slug}`;

  return {
    title: property ? property.title + ' | Buy, Sell & Rent Real estate properties in Nagpur  | NAGPUR HEIGHTS' : 'Property Not Found',
    description: property ? `Details of ${property.title} located at ${property.location}` : 'No details available',
    keywords: [
      property.title,
      'Nagpur real estate',
      'property for sale in Nagpur',
      'buy plots Nagpur',
      'sell plots Nagpur',
      'buy flat Nagpur',
      'sell flat Nagpur',
      property.location,
      'Nagpur Heights',
    ],
    openGraph: {
      title: `${property.title} |  Real Estate Services`,
      description: `Buy, sell, or rent real estate at ${property.location}. Browse details, prices, and photos.`,
      siteName: 'Nagpur Heights',
      url: url
    },
    robots: {
      index: true,
      follow: true,
    },
    type: 'website',

  };
}

export default function PropertyDetails({ params }) {
  const id = Number(params.slug.split('-')[0]);
  const property = Properties.find(p => p.id === id);
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Properties in Nagpur', href: '/property' },
    { label: property.title }, // No href means current page
  ];

  if (!property) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto mt-40 p-6 text-center">
          <h1 className="text-2xl font-bold text-red-500">Property not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <WhatsApp />
      <main className="max-w-7xl mx-auto pt-32 px-4 pb-12 bg-white">
        <Breadcrumbs  items={breadcrumbs} />
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{property.location}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-3">
            <ImageGallery images={property.images} title={property.title} />

            {/* property Status */}
            <div className="bg-[#f2faff] rounded-md p-6 w-full max-w-3xl mt-8">
              <h4 className="text-xs text-gray-500 uppercase mb-1">Construction Status</h4>
              <h2 className="text-xl font-bold text-[#0d1a38] mb-4">New Launch</h2>

              <div className="flex flex-wrap gap-4">
                {property.Phases.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-sm flex-1 min-w-[164px] max-w-sm flex items-start gap-3"
                  >
                    {/* Optional icon */}
                    <FaBuilding className="text-blue-500 text-xl mt-1" />

                    <div>
                      <p className="text-sm">
                        <strong>{phase} Phase</strong> is New Launch
                      </p>
                      <p className="text-sm text-gray-500">
                         {property.Completion_Date_of_phases[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Amenities Section */}
            {property.amenities && (
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities in {property.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.split(', ').map((amenity, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Details Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Price</span>
                  <span className="text-green-600 font-bold text-lg">{property.price}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Property Type</span>
                  <span className="text-blue-600 capitalize">{property.type}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Area</span>
                  <span className="text-gray-800">{property.area}</span>
                </div>

                {/* Contact Button */}
                <WhatsApp_button number={property.whatsapp} />
              </div>
            </div>

            {/* Property Description */}
            {property.description && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">About {property.title}</h2>
                <p className="text-gray-700">{property.description}</p>
              </div>
            )}
            {/* Additional Information */}
            {property.info && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
                <ul className="space-y-2 text-gray-700">
                  {property.info.split(', ').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
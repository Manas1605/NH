import Link from 'next/link';

const PropertyCard = ({ property }) => {
  const slug = property.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  return (
    <Link href={`/property/${property.id}-${slug}`} passHref>
      <div className="bg-white rounded-md overflow-hidden shadow-sm transition-all duration-300 cursor-pointer
        w-[160px] sm:w-[180px] md:w-full h-[200px] flex-shrink-0 mx-2">
        
        {/* Image */}
        <div className="h-[55%]">
          <img
            loading="lazy"
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-2 text-[11px] sm:text-xs text-gray-800">
          <div className="font-semibold truncate">{property.title}</div>
          <div className="text-gray-500 truncate">{property.location}</div>
          <div className="text-gray-500 text-[10px] truncate">{property.area}</div>
          <div className="flex justify-between items-center mt-1">
            <span className="font-bold text-[12px]">{property.price}</span>
            <span className="text-blue-600 underline text-[10px]">View</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

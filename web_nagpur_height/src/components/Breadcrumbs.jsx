// components/Breadcrumbs.js
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-sm text-gray-400 flex items-center flex-wrap">
      {items.map((item, index) => (
        <div className="flex items-center" key={index}>
          {index !== 0 && <HiChevronRight className="mx-1 text-gray-400 text-base" />}
          {item.href ? (
            <Link href={item.href} className="hover:underline text-blue-400">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700">{item.label}</span> // current page
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;

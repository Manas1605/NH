'use client'
import { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import RouteLoader from '@/components/RouteLoader';

// Wrap the component that uses useSearchParams
function LoadingContent({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay (remove in production)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading && <RouteLoader />}
      {children}
    </>
  );
}

// Main provider component with Suspense
export function LoadingProvider({ children }) {
  return (
    <Suspense fallback={<RouteLoader />}>
      <LoadingContent>{children}</LoadingContent>
    </Suspense>
  );
}
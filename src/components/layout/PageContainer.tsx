
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BreadcrumbNav from '../navigation/BreadcrumbNav';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  darkBackground?: boolean;
}

const PageContainer = ({ 
  children, 
  className = '', 
  fullWidth = false,
  darkBackground = false
}: PageContainerProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${darkBackground ? 'bg-scramble-gradient' : 'bg-scramble-dark'}`}>
      <Navbar />
      <main className={`flex-1 ${className}`}>
        {fullWidth ? (
          <>
            <div className="container mx-auto px-4">
              <BreadcrumbNav />
            </div>
            {children}
          </>
        ) : (
          <div className="container mx-auto px-4">
            <BreadcrumbNav />
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;

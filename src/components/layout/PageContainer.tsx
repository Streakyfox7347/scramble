
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
        {fullWidth ? children : (
          <div className="container mx-auto px-4">
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;

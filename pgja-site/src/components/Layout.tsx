import React from 'react';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop/>
      <main className="flex-1">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
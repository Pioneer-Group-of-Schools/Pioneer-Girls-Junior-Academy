import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Pioneer Girls Junior </title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};

export default Page;

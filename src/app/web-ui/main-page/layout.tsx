import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO GEN',
  description: 'SEO Generation Tool',
};

interface WebUILayoutProps {
  children: React.ReactNode;
}

const WebUILayout: React.FC<WebUILayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default WebUILayout; 
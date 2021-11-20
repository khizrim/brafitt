import React from 'react';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main>{children}</main>
    </div>
  );
};

type LayoutProps = {
  children?: React.ReactNode;
};

export default Layout;

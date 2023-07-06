import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default Layout;

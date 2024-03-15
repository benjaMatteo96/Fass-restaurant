import React, { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: ReactNode;
};

export const LayoutMain = ({ children }: Props) => (
  <>
    <Header />
    <br />
    {children}
    <br />
    <Footer />
  </>
);

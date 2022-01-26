import { MuiThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { theme } from '../theme';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Магазин кроссовок'}</title>
        <meta name="description" content={`Магазин кроссовок.` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Обувь, кроссовки'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800,900&display=swap"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </MuiThemeProvider>
    </>
  );
};

export default MainLayout;

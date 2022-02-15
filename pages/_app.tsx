import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import Script from "next/script";
import { ContractProvider } from '../context/Contract';
import * as gtag from "../lib/gtag";

function getLibrary(provider: any) {
  return new ethers.providers.Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContractProvider>
        <Component {...pageProps} />
      </ContractProvider>
    </Web3ReactProvider>
    
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script id="gtm-script"
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
  />
  <Script id="gtm-script-html"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
    }}
  />
  </>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./header/header";
import { usePathname } from "next/navigation";
import Footer from "./footer/footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

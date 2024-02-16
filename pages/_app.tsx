import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CSSProperties, useEffect, useState } from "react";
import Layout from "./layout/layout";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "35vh auto",
};
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          color="#b12930"
          loading={loading}
          cssOverride={override}
          size={100}
        />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

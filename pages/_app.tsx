import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './header/header'
import { usePathname } from 'next/navigation'
 

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
console.log(pathname);

  return (

    <>
  {pathname!=="/"&&<Header />}
  <Component {...pageProps} />
  {/* <Footer/> */}

  </>
    )
}

import Navbar from '@/components/navbar'
import ActiveSectionContextProvider from '@/context/active-section-context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveSectionContextProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ActiveSectionContextProvider>
  )
}

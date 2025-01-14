import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  //ssr --> server side rendering
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    //this code is executed inside of react which is client side
    setIsSSR(false)
  }, [])
  
  //if server side rendering we dont want to show our components
  if(isSSR) return null

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>           
        <div>
          <Navbar />
          <div className='flex gap-6 md:gap-20'>
            <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
              <Sidebar />
            </div>
            <div className='mt-4 flex flex-col gap-10 overflow-auto h-{88vh] videos flex-1'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </AuthProvider>
    
  )
}

import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import StoreContext from '../context/StoreContext'
import '../styles/globals.css'
import Layout from './../containers/Layout'
function SafeHydrate({ children }) {
  return (
    <div>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <StoreContext>
      <SafeHydrate>
        <Layout >
          <Toaster containerClassName='toast' />
          <Component {...pageProps} />
        </Layout>
      </SafeHydrate>
    </StoreContext>
  )
}

export default MyApp

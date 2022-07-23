import { useEffect, useState } from 'react';
import Layout from '../containers/Layout'
import StoreContext from '../context/StoreContext'
import '../styles/globals.css'

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SafeHydrate>
    </StoreContext>
  )
}

export default MyApp

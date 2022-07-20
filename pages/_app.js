import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return <></>
  } else {
    return <Component {...pageProps} />
  }
}

export default MyApp

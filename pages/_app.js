import '../styles/globals.css'
import '../styles/loader.css'
import '../styles/welcome.css'
import '../styles/planner.css'
import "aos/dist/aos.css"
import AppProvider from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
)}

export default MyApp

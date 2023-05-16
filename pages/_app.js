import '../styles/globals.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
function MyApp({ Component, pageProps }) {
  
  dayjs.extend(relativeTime);

  return <Component {...pageProps} />
}

export default MyApp

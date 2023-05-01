import '@/styles/globals.css'
import '@/styles/galerie.css'
import '@/styles/home.css'
import '@/styles/tarif.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '@/components/Nav'


export default function App({ Component, pageProps }) {
  return (
  <Container>
    <Component {...pageProps} />
  </Container>
  
  )
}

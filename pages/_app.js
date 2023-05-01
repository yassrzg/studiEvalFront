import '@/styles/globals.css'
import '@/styles/galerie.css'
import '@/styles/home.css'
import '@/styles/tarif.css'
import '@/styles/contact.css'
import '@/styles/navbar.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '@/components/Nav';
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
  <Container>
    <Component {...pageProps} />
  </Container>
  
  )
}

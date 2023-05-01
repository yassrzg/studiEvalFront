
import Link from 'next/link'
import React from 'react'

export default function Container({children}) {

  return (
    <>
    <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid justify-content-center">
            <Link href="/">
                <p className="navbar-brand mx-4">Acceuil</p>
            </Link>
            <Link href="/galerie">
                <p className="navbar-brand mx-4">Galerie</p>
            </Link>
            <Link href="/tarifs">
                <p className="navbar-brand mx-4">Tarifs et Prestations</p>
            </Link>
            <Link href="/contact">
                <p className="navbar-brand mx-4">Contact</p>
            </Link>
        </div>
    </nav>
    {children}
    </>
  )
}

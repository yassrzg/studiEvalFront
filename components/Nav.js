
import Link from 'next/link'
import React from 'react'
import FbIcon from '../public/asset/IconFb.svg'
import InstIcon from '../public/asset/iconInst.svg'
import Image from 'next/image'

export default function Container({children}) {

  return (
    <>
    <nav className="navbar navbar-light navbar1" id='navbar-pc'>
        <div>
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
        <div>
            <Link href="#">
                <Image src={FbIcon} />
            </Link>
            <Link href="#">
                <Image src={InstIcon} />
            </Link>
        </div>
    </nav>

    <nav className="navbar bg-body-tertiary fixed-top" id='navbar-phone'>
        <div className="container-fluid">
            <Link href="/"className="navbar-brand"> Charles Cantin </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/galerie">Galerie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/tarifs">Tarifs et Prestations</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>  
                    </ul>
                    <div>
                        <Link href="#">
                            <Image src={FbIcon} />
                        </Link>
                        <Link href="#">
                            <Image src={InstIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    {children}
    </>
  )
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="row row-cols5- py5- my-5 border-top" width={1000}>
        <hr />

        <div className="col"></div>
        <div className="col footerlogo">
          <Image id="footerimg "src={logo} alt="company logo"  />

          <p>
            Contrary to populer belif, Lorem Ispum is not simply random text. It
            has roots In the place of classical Latin literatire from 45 BC
          </p>
        </div>

        <div className="col">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                About
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Career
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Mobile
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Contact</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Why Travlog
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Partner with US
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Meet Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                +00 92 1212 567894
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                info@travelog.com
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-muted">
                206, A Street New York R02124578
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

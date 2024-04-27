import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <Link className="navbar-brand brand1" href="#">
            <Image src={logo} alt="company logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mynavbar">
                <Link className="nav-link" href="/Discover">
                  Discover
                </Link>
              </li>
              <li className="nav-item mynavbar">
                <Link className="nav-link" href="/Special_deals">
                  Special Deals
                </Link>
              </li>
              <li className="nav-item mynavbar">
                <Link className="nav-link" href="/Contact_us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;

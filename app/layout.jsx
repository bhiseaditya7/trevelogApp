import React from "react";
//import { Html, Head} from "next/document";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "@/components/Navbar1";
import "../styles/globals.css";
import { Outfit } from "next/font/google";
//import { Main } from 'next/document'

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700"],
});

const Mainlayout = ({ children }) => {
  return (
    <html>
      <body className="topgra">
        <div className={outfit.className}>
          <Navbar1 />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Mainlayout;

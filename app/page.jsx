"use client";
import React from "react";
import { Button } from "react-bootstrap";
import Navbar1 from "@/components/Navbar1";
import Footer from "@/components/Footer";
import first from "../public/abc.png";
import Image from "next/image";
import First from "@/components/First";
import Second from "@/components/second";
import Three from "@/components/Three";
import Forth from "@/components/Forth";
import Fifth from "@/components/Fifth";

const HomePage = () => {
  return (
    <div>
      <div className="firstgra secondgra ">
        <First />

        <Second />
      </div>
        <Three />
        <Forth />
        <Fifth />

      <Footer />
    </div>
  );
};

export default HomePage;

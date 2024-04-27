import Image from "next/image";
import book1 from "../public/book1.png";
import Card1 from "./Card1";

const Three = () => {
  return (
    <div>
      <div className="thirdleft">
        <p><span className="pink">SERVICES</span>
        <h1>Our top value categories for you</h1></p>
      <Card1 id="mycard" />
      <Card1 id="mycard"  />
      </div>
      
      
    </div>
  );
};

export default Three;

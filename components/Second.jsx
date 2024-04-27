import Image from "next/image";
import sk from "../public/leftside.png";
import Link from "next/link";
import s1 from "../public/s1.png";
import s2 from "../public/s2.png";
import s3 from "../public/s3.png";
import s4 from "../public/s4.png";
import s5 from "../public/s5.png";
const Second = () => {
  return (
    <div>
      <div className="SecondContainer">
        <Image className="leftImg" src={sk} alt="side image" />
        <Link
          className="navbar-brand brand1 " 
          href="https://www.tripadvisor.in/"
        >
          <Image className="secondMidImg" id="trip" src={s1} alt="company logo" />
        </Link>
        <Link
          className="navbar-brand brand1 "
          href="https://www.expedia.co.in/"
        >
          <Image
            className="secondMidImg"
            id="expedia"
            src={s2}
            alt="company logo"
          />
        </Link>
        <Link className="navbar-brand brand1 " href="https://www.booking.com/">
          <Image className="secondMidImg" id="booking" src={s3} alt="company logo" />
        </Link>
        <Link className="navbar-brand brand1 " href="https://www.airbnb.co.in/">
          <Image className="secondMidImg" id="expedia" src={s4} alt="company logo" />
        </Link>
        <Link className="navbar-brand brand1 " href="https://www.orbitz.com/">
          <Image className="secondMidImg" id="orbitz" src={s5} alt="company logo" />
        </Link>
      </div>
    </div>
  );
};

export default Second;

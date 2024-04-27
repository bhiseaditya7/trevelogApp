import Image from "next/image";
import work1 from "../public/work_1.png";
import abc from "../public/img01.png";
const First = () => {
  return (
    <div>
      <div className="mycontainer1">
        <button className="button button1">
          Explore the World!{" "}
          <Image
            className="mybtn"
            src={work1}
            width={50}
            height={50}
            alt="work image"
          />{" "}
        </button>
        <div className="mycontainer2">
          <h1>Travel <span className="pink">top destination</span> of the world</h1>
          
          <Image className="image1" src={abc} alt="main image" />
        </div>
      </div>
    </div>
  );
};

export default First;

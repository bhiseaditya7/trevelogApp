import Image from "next/image"
import forth from "../public/forth.png"
const Forth = () => {
  return (
    <div>
        <div className="forth">
            <Image className="forthimg" src={forth} alt="lady image" />

                <div className="forthbold">
                <h1>We helping you find your dream location
                </h1>
                <hr></hr>
                <p>
                Contrary to populer belif, Lorem Ispum is not simply random text. It
            has roots In the place of classical Latin literatire from 45 BC
                </p>
                

                </div>
                
            

        </div>


    </div>
  )
}

export default Forth

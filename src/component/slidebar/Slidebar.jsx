import React,{useState }from "react";
import "./Slidebar";
import image1 from "../../images/productImage/1.jpg";
import image2 from "../../images/productImage/2.jpg";
import image3 from "../../images/productImage/3.jpg";
import image4 from "../../images/productImage/4.jpg";
import { Carousel } from 'react-responsive-carousel';
const sildeImages = [
  {
    imagee: image1,
    describetion: "this is the image 1 , we need to see image next",
    alt: "image Loading",
  },
  {
    imagee: image2,
    describetion: "this is the image 1 , we need to see image next",
    alt: "image Loading",
  },
  {
    imagee: image3,
    describetion: "this is the image 1 , we need to see image next",
    alt: "image Loading",
  },
  {
    imagee: image4,
    describetion: "this is the image 1 , we need to see image next",
    alt: "image Loading",
  },
];
function Slidebar() {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="slideImage">
        <Carousel>
                  {sildeImages.map((images) => (
        <img src={images.imagee} alt={images.alt} />
      ))}
        </Carousel>

    
    </div>
  );
}

export default Slidebar;

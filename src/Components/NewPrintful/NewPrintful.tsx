import React from 'react';
import pic1 from './pictures/picture1.jpeg';
import pic4 from './pictures/try.jpg';
import './NewPrintful.css';
import printful from './pictures/Printful.jpg';

interface NewProps {
    action: () => void,
    standardQuantity: (number:any) => void,
    ecoQuantity: (number:any) => void,

}

const NewPrintful = ({
  action, standardQuantity, ecoQuantity,
}: NewProps) => (
  <div className="container">
    <div className="pictureContainer">
      <img src={printful} alt="" />
      <span className="fakeElement">
        <div className="headerContainer">
          <span className="header">Suggested products</span>
          <span className="endHeader">See new products</span>
        </div>
        <div className="itemContainer">

          <div className="itemCard">
            <div onClick={ecoQuantity}>
              <img src={pic1} alt="" className="itemPictureEko" />
              <div className="leafy">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" /></svg>
              </div>
              <span className="ecoTextoo">
                Eco-friendly line
              </span>
            </div>

            <span className="itemName">Eko-bag /There is no planet B/</span>
            <span className="price"> €20.00</span>
            <span className="estimate"> Estimated delivery Jun 26⁠–Jul 13</span>
          </div>

          <div className="itemCard">
            <div onClick={standardQuantity}>
              <img src={pic4} alt="" className="itemPicture" />
            </div>
            <span className="itemName">Unisex Stable T-Shirt | White</span>
            <span className="price"> €13.75</span>
            <span className="estimate"> Estimated delivery Jun 26⁠–Jul 13</span>
          </div>
          <div className="itemCard">
            <div onClick={standardQuantity}>
              <img src={pic4} alt="" className="itemPicture" />
            </div>
            <span className="itemName">Unisex Stable T-Shirt | White</span>
            <span className="price"> €13.75</span>
            <span className="estimate"> Estimated delivery Jun 26⁠–Jul 13</span>
          </div>
          <div className="itemCard">
            <div onClick={standardQuantity}>
              <img src={pic4} alt="" className="itemPicture" />
            </div>
            <span className="itemName">Unisex Stable T-Shirt | White</span>
            <span className="price"> €13.75</span>
            <span className="estimate"> Estimated delivery Jun 26⁠–Jul 13</span>
          </div>
        </div>
      </span>
    </div>
    <button type="button" className="submit" onClick={action}>To the checkout</button>
  </div>
);
export default NewPrintful;

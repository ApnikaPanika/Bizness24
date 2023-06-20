/* eslint-disable max-len */
import React, { useState } from 'react';
import './Checkout.css';
import pic1 from './pictures/picture1.jpeg';
import pic4 from './pictures/try.jpg';
import picCheckout from './pictures/checkoutout.jpeg';

type CheckoutProps = {
    ecoItemCount: number,
    standardItemCount: number,
    action: () => void
}

const Checkout = ({ ecoItemCount, standardItemCount, action }: CheckoutProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const ecoPrice = 20.00;

  const subtotal = (ecoItemCount * (!isVisible ? (ecoPrice / 2) : ecoPrice) + standardItemCount * 13.75).toFixed(2);
  const bagTotal = (0.40 * (ecoItemCount + standardItemCount)).toFixed(2);

  const total = ((ecoItemCount * (!isVisible ? (ecoPrice / 2) : ecoPrice) + standardItemCount * 13.75) + (0.40 * (ecoItemCount + standardItemCount))).toFixed(2);

  return (
    <div className="Checkout">
      <img src={picCheckout} alt="" />
      <div id="fakeCheckout">

        <div className="GreenBox">
          <div className="greenContainer">
            <div className="bigCircle" onClick={() => setIsVisible(!isVisible)}>
              <div className="smallCircle" hidden={isVisible} />
            </div>
            <span className="text" onClick={() => setIsVisible(!isVisible)}>Eco-friendly packaging</span>
            <div className="leaf">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" /></svg>
            </div>
          </div>
          <div className="gift tooltip">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h3.17A3 3 0 0 1 6 5a3 3 0 0 1 3-3c1 0 1.88.5 2.43 1.24v-.01L12 4l.57-.77v.01C13.12 2.5 14 2 15 2a3 3 0 0 1 3 3a3 3 0 0 1-.17 1H21a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1M4 20h7v-8H4v8m16 0v-8h-7v8h7M9 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M3 8v2h8V8H3m10 0v2h8V8h-8Z" /></svg>
            <span>GIFT</span>
            <span className="tooltiptext">Choose recycled carton packaging and receive 50% off for our eco-friendly line items</span>
          </div>
        </div>
        <div className="headingBox">
          <div className="headingLine">
            <span>PRODCUT</span>
            <div className="qty">
              <span>QTY</span>
              <span>PRICE</span>
            </div>
          </div>

          {ecoItemCount !== 0 && (
          <div className="itemBox">
            <div className="oneItemContainer">
              <div className="firstContainer">
                <img className="smallImage" src={pic1} alt="" />
                <span className="itemText">Eko-bag /There is no planet B/</span>
              </div>
              <div className="moneyContainer">
                <span className="numberMoney">{ecoItemCount}</span>
                <span className="numberMoney">
                  {!isVisible ? (
                    <div className="priceReducer">
                      <span className="oldPrice">€20.00</span>
                      <span className="newPrice">€10.00</span>

                    </div>
                  ) : '€20.00'}

                </span>
              </div>
            </div>
          </div>
          )}

          {standardItemCount !== 0 && (
          <div className="itemBox">
            <div className="oneItemContainer">
              <div className="firstContainer">
                <img className="smallImage" src={pic4} alt="" />
                <span className="itemText">Unisex Stable T-Shirt | White</span>
              </div>
              <div className="moneyContainer">
                <span className="numberMoney">{standardItemCount}</span>
                <span className="numberMoney">€13.75</span>
              </div>

            </div>
          </div>
          )}

          {!isVisible && (
          <div className="itemBox">
            <div className="oneItemContainer">
              <div className="secondContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" /></svg>
                <span className="itemText">Eco-friendly packaging</span>
              </div>
              <div className="moneyContainer">
                <span className="numberMoney">{ecoItemCount + standardItemCount}</span>
                <span className="numberMoney">
                  €
                  {(0.40 * (ecoItemCount + standardItemCount)).toFixed(2)}
                </span>
              </div>

            </div>
          </div>
          )}

        </div>
        <div className="box1">
          <div className="price">
            <span>
              Subtotal
            </span>
            <span>
              €
              {subtotal}
            </span>
          </div>
          {!isVisible && (
          <div className="price">
            <span className="ecoText">
              Eco-friendly packaging
            </span>
            <span>
              €
              {bagTotal}
            </span>
          </div>
          )}
          <div className="price">
            <span>
              Total
            </span>
            <span>
              €
              {!isVisible ? total : subtotal}
            </span>
          </div>

          {!isVisible ? (
            <div className="buttonContainer">
              <button type="button" className="submit">Continue to shipping</button>
              <button type="button" className="submit" onClick={action}>Back</button>
            </div>
          ) : (
            <div className="buttonContainer">
              <button type="button" className="submired">Continue to shipping</button>
              <button type="button" className="submired" onClick={action}>Back</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Checkout;

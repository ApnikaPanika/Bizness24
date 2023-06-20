import React from 'react';
import './OldPrintful.css';
import pic5 from './pictures/Printful.jpg';

type OldProps = {
    action: () => void
}

const OldPrintful = ({ action }: OldProps) => (
  <div className="container">
    <div>
      <img src={pic5} alt="" />
    </div>

    <button type="button" className="submit" onClick={action}>New design</button>

  </div>

);

export default OldPrintful;

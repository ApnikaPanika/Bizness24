import React, { useState } from 'react';
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import OldPrintful from './Components/OldPrintful/OldPrintful';
import printfulPhoto from '../public/Printful.png';
import NewPrintful from './Components/NewPrintful/NewPrintful';

const App = () => {
  const [status, setStatus] = useState<string>('old');

  const [ekoItemQuantity, setEkoItemQuantity] = useState(0);
  const [standardItemQuantity, setStandardItemQuantity] = useState<any>(0);

  return (
    <div className="BigBigContainer">
      <img className="imagino" src={printfulPhoto} alt="" />
      {
        status === 'checkout' && (<Checkout ecoItemCount={ekoItemQuantity} standardItemCount={standardItemQuantity} action={() => setStatus('new')} />)
      }
      {
        status === 'old' && (<OldPrintful action={() => setStatus('new')} />)
      }
      {
        status === 'new' && (
        <NewPrintful
          action={() => setStatus('checkout')}
          standardQuantity={() => setStandardItemQuantity(standardItemQuantity + 1)}
          ecoQuantity={() => setEkoItemQuantity(ekoItemQuantity + 1)}
        />
        )
      }
    </div>
  );
};

export default App;

import React from 'react';
import Button from './reusableComponents/Button';

const CardInfo = ( {shoePrice, updateCart }) => {
    return (
      <div className="cardInfo">
      <p>{shoePrice}<span>TL</span></p>
      <Button addItem={updateCart}/>
      </div> 
    );
};

export default CardInfo;
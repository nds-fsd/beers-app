import React from 'react';

const Item = ({ beerData, onClick }) => (
  <>
    <p onClick={() => onClick(beerData)}>{beerData.name}({beerData.abv})</p>
  </>
);

export default Item;

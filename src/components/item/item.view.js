import React from 'react';

const Item = ({ beerData, onClick }) => (
  <>
    <p onClick={() => onClick(beerData.id)}>{beerData.name}({beerData.abv})</p>
  </>
);

export default Item;

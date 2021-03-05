import React from 'react';

const Item = ({ beerData }) => (
  <>
    <p>{beerData.name}({beerData.abv})</p>
  </>
);

export default Item;

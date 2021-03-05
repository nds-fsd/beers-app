import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';
import Item from '../item';

const List = () => {
  const [listOfBeers, setListofBeers] = useState([]);

  useEffect(() => {
    request({ url: '/beers', onSuccess: setListofBeers })
  }, []);

  return (
    <>
      {listOfBeers ? listOfBeers.map(beer => <Item key={beer.id} beerData={beer} />) : <p>Loading...</p>}
    </>
  );
};

export default List;

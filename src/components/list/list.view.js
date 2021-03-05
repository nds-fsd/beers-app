import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';
import BeerDetailModal from '../beerDetailModal';
import Item from '../item';

const List = () => {
  const [listOfBeers, setListofBeers] = useState([]);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState();

  useEffect(() => {
    request({ url: '/beers', onSuccess: setListofBeers })
  }, []);

  return (
    <>
      {listOfBeers ? listOfBeers.map(beer => (
        <Item
          onClick={data => {
            setOpenDetailsModal(true);
            setSelectedBeer(data);
          }}
          key={beer.id}
          beerData={beer}
        />))
        :
        <p>Loading...</p>
      }
      {openDetailsModal && selectedBeer && (
        <BeerDetailModal open handleCloseModal={() => setOpenDetailsModal(false)} selectedBeer={selectedBeer} />
      )}
    </>
  );
};

export default List;

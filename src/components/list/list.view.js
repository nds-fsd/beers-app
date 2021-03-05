import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';
import BeerDetailModal from '../beerDetailModal';
import Item from '../item';
import Pagination from '../pagination';

const List = () => {
  const [listOfBeers, setListofBeers] = useState([]);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    request({ url: `/beers?page=${selectedPage}&per_page=25`, onSuccess: setListofBeers })
  }, []);

  useEffect(() => {
    request({ url: `/beers?page=${selectedPage}&per_page=25`, onSuccess: setListofBeers })
  }, [selectedPage]);

  /// FETCH PAGINATION

  return (
    <>
      {listOfBeers ? listOfBeers.map(beer => (
        <Item
          onClick={id => {
            setOpenDetailsModal(true);
            setSelectedBeer(id);
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
      <Pagination handleOnClick={page => setSelectedPage(page)} currentPage={selectedPage} />
    </>
  );
};

export default List;

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
  const [filteredBeers, setFilteredBeers] = useState();

  useEffect(() => {
    request({ url: `/beers?page=${selectedPage}&per_page=25`, onSuccess: setListofBeers })
  }, []);

  useEffect(() => {
    request({ url: `/beers?page=${selectedPage}&per_page=25`, onSuccess: setListofBeers })
  }, [selectedPage]);

  useEffect(() => {
    if (listOfBeers) {
      // setFilteredBeers(listOfBeers.filter(beer => {
      //   const pattern = /India/ig;
      //   const regex = new RegExp(pattern);
      //   console.debug(beer.name);
      //   return regex.test(beer.name);
      // }));
      setFilteredBeers(listOfBeers.map(beer => {
        let icon = 'default-icon';

        if (parseInt(beer.abv, 10) > 6) {
          icon = 'major-6';
        } else if (parseInt(beer.adv, 10) < 2) {
          icon = 'minor-2';
        }

        return {...beer, icon };
      }));
    }
  }, [listOfBeers]);

  return (
    <>
      {filteredBeers ? filteredBeers.map(beer => (
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

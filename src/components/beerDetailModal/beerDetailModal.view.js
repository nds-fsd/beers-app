import React, { useEffect, useState } from 'react';
import { request } from '../../utils/request.utils';
import Modal from '../modal';

const BeerDetailModal = ({ selectedBeer, open, handleCloseModal }) => {
  const [beerInfo, setBeerInfo] = useState();
  useEffect(() => {
    if (selectedBeer) {
      request({ url: `/beers/${selectedBeer}`, onSuccess: response => setBeerInfo(response[0])});
    }
  }, [selectedBeer]);
  return (
    <Modal open={open} handleCloseModal={handleCloseModal}>
      {beerInfo ? <p>{beerInfo.name}({beerInfo.abv})</p> : <p>Loading...</p>}
    </Modal>
  );
};

export default BeerDetailModal;

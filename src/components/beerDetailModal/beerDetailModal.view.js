import React from 'react';
import Modal from '../modal';

const BeerDetailModal = ({ selectedBeer, open, handleCloseModal }) => (
  <Modal open={open} handleCloseModal={handleCloseModal}>
    <p>{selectedBeer.name}({selectedBeer.abv})</p>
  </Modal>
);

export default BeerDetailModal;

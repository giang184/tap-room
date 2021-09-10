import React from "react";
import PropTypes from 'prop-types';

function TapDetail(props){
  const {tap, onClickingDelete, onClickingBuy} = props;

  let quantity = tap.quantity;
  if (quantity === 0) {
    quantity = "Out of Stock";
  }

  function handleRestockTapSubmission(event) {
    event.preventDefault();
    props.onClickingRestock({
      ...tap,
      quantity: parseInt(tap.quantity) + parseInt(event.target.quantity.value),
    });
  }

  return (
    <React.Fragment>
      <h1>Name: {tap.name}</h1>
      <h3>Description: {tap.description}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>ID: {tap.id}</h3>
      <button 
        onClick={ props.onClickingEdit }
        className="btn btn-success">
        Update Tap
      </button>
      <button 
        className="btn btn-danger"
        onClick={() => onClickingDelete(tap.id)}>
          Delete Tap
      </button>
      {/* <button 
        className="btn btn-success"
        onClick={() => onClickingBuy(tap)}>
          Buy 1
      </button> */}
      <hr/>

      <form onSubmit={handleRestockTapSubmission}>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='quantity' />
          {/* // defaultValue={startingQuantity} */}
          <button className="btn btn-warning" type='submit'>restock</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default TapDetail;
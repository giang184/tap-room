import React from "react";
import PropTypes from 'prop-types';

function TapDetail(props) {
  const {tap, onClickingDelete, onClickingSell} = props;
  const quantity = (tap.quantity === 0)? "Out of Stock" : tap.quantity;
  const almostEmpty = (tap.quantity < 10 && tap.quantity >0)? "(Almost Empty)" : "";

  function handleRestockTapSubmission(event) {
    event.preventDefault();
    props.onClickingRestock({
      ...tap,
      quantity: parseInt(tap.quantity) + parseInt(event.target.quantity.value),
    });
  }

  return (
    <React.Fragment>
      <h1>{tap.name}</h1>
      <h5>Brand: {tap.brand}</h5>
      <h5>Pints available: {quantity} {almostEmpty}</h5>
      <br/>
      <button 
        onClick={ props.onClickingEdit }
        className="btn btn-warning">
        Update Tap
      </button>
      <button 
        className="btn btn-danger"
        onClick={() => onClickingDelete(tap.id)}>
          Delete Tap
      </button>
      <button 
        className="btn btn-success"
        onClick={() => onClickingSell(tap)}>
          Sell 1
      </button>
      <hr/>
      <form onSubmit={handleRestockTapSubmission}>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='quantity' />
          <button className="btn btn-info" type='submit'>restock</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default TapDetail;
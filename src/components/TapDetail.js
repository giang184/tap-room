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
      <h2>Keg Details:</h2>
      <div class="card">
        <div class="card-header">
          <h3>{tap.name}</h3>
        </div>
        <div class="card-body">
          <p>Brand: <strong>{tap.brand}</strong></p>
          <p>Pints Available: <strong>{quantity} {almostEmpty}</strong></p>
          <p>Alcohol Content = <strong>{tap.alcoholContent}%</strong></p>
        </div>
        <div class="card-footer text-muted">
          <p>Price: <strong>${tap.price}</strong></p>
        </div>
      </div>
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
      <h2>Restock keg:</h2>
      <form onSubmit={handleRestockTapSubmission}>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='pints' />
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
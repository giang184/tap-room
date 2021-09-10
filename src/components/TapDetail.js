import React from "react";
import PropTypes from 'prop-types';

function TapDetail(props){
  const {tap, onClickingDelete, onClickingSell} = props;

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
      <h1>{tap.name}</h1>
      <h5>Description: {tap.description}</h5>
      <h5>Pints available: {quantity}</h5>
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
      

      <form onSubmit={handleRestockTapSubmission}>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='quantity' />
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
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default TapDetail;
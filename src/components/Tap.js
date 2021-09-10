import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  const quantity = (props.quantity === 0)? "Out of Stock" : props.quantity;
  const almostEmpty = (props.quantity < 10 && props.quantity >0)? "(Almost Empty)" : "";

  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Brand: {props.brand}</p>
        <p>Pints available: {quantity} <strong>{almostEmpty}</strong></p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  whenTapClicked: PropTypes.func
};

export default Tap;
import React from "react";
import PropTypes from "prop-types";

function Tap(props) {

  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenTapClicked(props.id)}> */}
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Quantity: {props.quantity}</p>
        <hr />
      {/* </div> */}
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  // whenTapClicked: PropTypes.func
};

export default Tap;
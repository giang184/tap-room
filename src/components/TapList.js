import React from "react";
import Tap from "./Tap";
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <React.Fragment>
      <h1>Beers on Tap:</h1>
      <p><em>{props.empty}</em></p>
      <br/>
      {props.tapList.map((tap) =>
        <Tap 
          whenTapClicked = {props.onTapSelection}
          name = {tap.name}
          brand = {tap.brand}
          quantity = {tap.quantity}
          price = {tap.price}
          alcoholContent = {tap.alcoholContent}
          id={tap.id}
          key={tap.id}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  TapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  empty: PropTypes.string,
};

export default TapList;
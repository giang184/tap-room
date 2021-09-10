import React from "react";
import Tap from "./Tap";
import PropTypes from 'prop-types';

function TapList(props){
  return (
    <React.Fragment>
      {props.tapList.map((tap) =>
        <Tap 
          // whenTapClicked = {props.onTapSelection}
          name = {tap.name}
          description = {tap.description}
          quantity = {tap.quantity}
          id={tap.id}
          key={tap.id}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  TapList: PropTypes.array,
  // onTapSelection: PropTypes.func
};

export default TapList;
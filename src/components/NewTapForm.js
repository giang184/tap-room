import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewTapForm(props){
  function handleNewTapFromSubmission(e) {
    e.preventDefault();
    props.onNewTapCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      quantity: e.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTapFromSubmission}
        buttonText="Add"
      />
    </React.Fragment>
  );
}


NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default NewTapForm;
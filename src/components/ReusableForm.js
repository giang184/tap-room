import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const startingName = props.tap ? props.tap.name : '';
  const startingBrand = props.tap ? props.tap.brand : '';
  const startingQuantity = props.tap? props.tap.quantity : '';

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className="form-control"
          type='text'
          name='name'
          placeholder='Name' 
          defaultValue={startingName}/>
        <textarea
          className="form-control"
          type='text'
          name='brand'
          placeholder='brand' 
          defaultValue={startingBrand}/>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='# of pints' 
          defaultValue={startingQuantity}/>
          <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  tap: PropTypes.object
};

export default ReusableForm;
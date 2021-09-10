import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const startingName = props.tap ? props.tap.name : '';
  const startingBrand = props.tap ? props.tap.brand : '';
  const startingQuantity = props.tap? props.tap.quantity : '';
  const startingPrice = props.tap? props.tap.price : '';
  const startingAlcoholContent = props.tap? props.tap.alcoholContent : '';

  return (
    <>
      <h2>Add a new Keg:</h2>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className="form-control"
          type='text'
          name='name'
          placeholder='Name' 
          defaultValue={startingName}/>
        <input
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
        <input
          className="form-control"
          type='number'
          name='price'
          placeholder='price' 
          defaultValue={startingPrice}/>
        <input
          className="form-control"
          type='number'
          name='alcoholContent'
          placeholder='alcohol content' 
          defaultValue={startingAlcoholContent}/>
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
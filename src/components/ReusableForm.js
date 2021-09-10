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
        <label>Name: --------------
          <input type='text' name='name' defaultValue={startingName} />
        </label>
        <label>Brand: -------------- 
          <input type='text' name='brand' defaultValue={startingBrand}/>
        </label>
        <label># of pints: ----------
          <input type='text' name='quantity' defaultValue={startingQuantity}/>
        </label>
        <label>Alcohol %: ---------
          <input type='text' name='alcoholContent' defaultValue={startingAlcoholContent} />
        </label>
        <label>Price: ---------------
          <input type='text' name='price' defaultValue={startingPrice}/>
        </label>
        <br/>
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
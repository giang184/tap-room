import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
// import EditTapForm from './EditTapForm';
// import Cart from './Cart';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null,
      editing: false,

    };
  }

  // handleBuyingTap = (tap) => {
  //   if (tap.quantity > 0) {
  //     tap.quantity--;
  //     const newTap = this.state.cart.filter(m => m.id === this.state.selectedTap.id)[0];
  //     const newCart = this.state.cart.filter(m => m.id !== this.state.selectedTap.id);
  //     console.log('newTap', newTap);
  //     console.log('newCart', newCart)
  //     if(newTap) {
  //       newTap.quantity++;
  //       newCart.push(newTap);
  //       console.log('newCartTrue', newCart)
  //     } else {
  //       const newTap0 = {...tap};
  //       newTap0.quantity = 1;
  //       newCart.push(newTap0);
  //       console.log('newTap0', newTap0)
  //       console.log('newCartFalse', newCart)
  //     }
  //     this.setState({
  //       cart: newCart,
  //       selectedTap: tap,
  //     });
  //   } else {
  //     alert('OUT OF STOCK!!!!!!');
  //   }
  // }

  handleEditClick = () => {
    console.log('handleEditClick reached');
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTap = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false,
    });
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleDeletingTap = (id) => {
    const newMasterTapList = this.state.masterTapList.filter(tap => tap.id !== id);
    this.setState({
      masterTapList: newMasterTapList,
      selectedTap: null
    });
  }

  // handleEditingTapInList = (tapToEdit) => {
  //   const editedMasterTapList = this.state.masterTapList
  //     .filter(tap => tap.id !== this.state.selectedTap.id)
  //     .concat(tapToEdit);
  //   this.setState({
  //       masterTapList: editedMasterTapList,
  //       editing: false,
  //       selectedTap: null
  //     });
  //     console.log('cart', this.state.cart)
  // }
  
  handleRestockingTap = (tapToEdit) => {
    const editedMasterTapList = this.state.masterTapList
    .filter(tap => tap.id !== this.state.selectedTap.id)
    .concat(tapToEdit);
  this.setState({
      masterTapList: editedMasterTapList,
      editing: false,
      selectedTap: tapToEdit
    });
  }


  render(){
      
    let currentlyVisibleState = null;
    let buttonText = null;
    
    // if (this.state.editing) {
    //   currentlyVisibleState = <EditTapForm 
    //     // tap = {this.state.selectedTap} 
    //     // onEditTap = {this.handleEditingTapInList} 
    //     />
    //   buttonText = "Return to Tap List";
    // } 
    // else 
    if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail 
        tap = {this.state.selectedTap}
        // onClickingBuy={this.handleBuyingTap}
        onClickingDelete={this.handleDeletingTap}
        onClickingEdit={this.handleEditClick}
        onClickingRestock= {this.handleRestockingTap}
      />
      buttonText= "Return to Tap List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTap} />
      buttonText = "Return to Tap List"
    } 
    else {
      currentlyVisibleState = <TapList 
        tapList = {this.state.masterTapList} 
        onTapSelection={this.handleChangingSelectedTap} 
        />;
      buttonText = "Add Tap"
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className='col-6'>
            <h1>Tap Stock</h1>
            {currentlyVisibleState}
            <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div className='col-3'>
          </div>
          {/* <div className='col-3'>
          <h1>Cart: </h1>
            <Cart selectedTap={this.state.selectedTap} cart={this.state.cart}/>
          </div> */}

        </div>
      </React.Fragment>
    );
  }
}

export default TapControl;
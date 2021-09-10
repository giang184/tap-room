import React from 'react';
import NewTapForm from './NewTapForm';
// import TapList from './TapList';
// import TapDetail from './TapDetail';
// import EditTapForm from './EditTapForm';
// import Cart from './Cart';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null,
      // editing: false,
      // cart: []
    };
  }

  // handleBuyingMerch = (merch) => {
  //   if (merch.quantity > 0) {
  //     merch.quantity--;
  //     const newMerch = this.state.cart.filter(m => m.id === this.state.selectedMerch.id)[0];
  //     const newCart = this.state.cart.filter(m => m.id !== this.state.selectedMerch.id);
  //     console.log('newMerch', newMerch);
  //     console.log('newCart', newCart)
  //     if(newMerch) {
  //       newMerch.quantity++;
  //       newCart.push(newMerch);
  //       console.log('newCartTrue', newCart)
  //     } else {
  //       const newMerch0 = {...merch};
  //       newMerch0.quantity = 1;
  //       newCart.push(newMerch0);
  //       console.log('newMerch0', newMerch0)
  //       console.log('newCartFalse', newCart)
  //     }
  //     this.setState({
  //       cart: newCart,
  //       selectedMerch: merch,
  //     });
  //   } else {
  //     alert('OUT OF STOCK!!!!!!');
  //   }
  // }

  // handleEditClick = () => {
  //   console.log('handleEditClick reached');
  //   this.setState({editing: true});
  // }

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

  // handleChangingSelectedMerch = (id) => {
  //   const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
  //   this.setState({selectedMerch: selectedMerch});
  // }

  // handleDeletingMerch = (id) => {
  //   const newMasterMerchList = this.state.masterMerchList.filter(merch => merch.id !== id);
  //   this.setState({
  //     masterMerchList: newMasterMerchList,
  //     selectedMerch: null
  //   });
  // }

  // handleEditingMerchInList = (merchToEdit) => {
  //   const editedMasterMerchList = this.state.masterMerchList
  //     .filter(merch => merch.id !== this.state.selectedMerch.id)
  //     .concat(merchToEdit);
  //   this.setState({
  //       masterMerchList: editedMasterMerchList,
  //       editing: false,
  //       selectedMerch: null
  //     });
  //     console.log('cart', this.state.cart)
  // }
  
  // handleRestockingMerch = (merchToEdit) => {
  //   const editedMasterMerchList = this.state.masterMerchList
  //   .filter(merch => merch.id !== this.state.selectedMerch.id)
  //   .concat(merchToEdit);
  // this.setState({
  //     masterMerchList: editedMasterMerchList,
  //     editing: false,
  //     selectedMerch: merchToEdit
  //   });
  // }


  render(){
    let empty = null;
    if (this.state.masterMerchList.length === 0) {
      empty = <h1>NO MERCH YET</h1>
    }
      
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditMerchForm 
        merch = {this.state.selectedMerch} 
        onEditMerch = {this.handleEditingMerchInList} />
      buttonText = "Return to Merch List";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail 
        merch = {this.state.selectedMerch}
        onClickingBuy={this.handleBuyingMerch}
        onClickingDelete={this.handleDeletingMerch}
        onClickingEdit={this.handleEditClick}
        onClickingRestock= {this.handleRestockingMerch}
      />
      buttonText= "Return to Merch List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerch} />
      buttonText = "Return to Merch List"
    } else {
      currentlyVisibleState = <MerchList MerchList={this.state.masterMerchList} onMerchSelection={this.handleChangingSelectedMerch} />;
      buttonText = "Add Merch"
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className='col-6'>
            <h1>Merchandise Stock</h1>
            {empty}
            {currentlyVisibleState}
            <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div className='col-3'>
          </div>
          <div className='col-3'>
          <h1>Cart: </h1>
            <Cart selectedMerch={this.state.selectedMerch} cart={this.state.cart}/>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default MerchControl;
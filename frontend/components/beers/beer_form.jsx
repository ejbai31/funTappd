import React from 'react';

class BeerForm extends React.Component{

  constructor(props){
    super(props);
    this.state = ({
      name: '',
      style: '',
      abv: '',
      rating: false,
      description: '',
      brewery: ''
    });
  }

















  render(){
    return(
      <div className="create-beer-main">
        <form className="add-beer-form">
          <h1>Add New Beer!</h1>
          <br />
          <h2>Beer Name</h2>
          <input type="text"/>
          
          <h2>Brewery</h2>
          <input type="text"/>
          
          <h2>Style</h2>
          <input type="text"/>
          
          <h2>ABV</h2>
          <input type="text"/>
          
          <h2>Description</h2> 
          <textarea name="" id="" cols="30" rows="10"></textarea>
           
          <button>Create!</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;
import React from 'react';

class BeerForm extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.fields;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  
  
  handleSubmit(e){
    e.preventDefault();
    this.props.createBeer(this.state)
      .then(() => this.props.history.push(','));
  }
  
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }


  render(){
    console.log(this.props);
    return(
      <div className="create-beer-main">
        <form className="add-beer-form">
          <h1>Add New Beer!</h1>
          <br />
          <h2>Beer Name</h2>
          <input 
          type="text" 
          onChange={this.update('name')}
          value={this.state.name} />
          
          <h2>Brewery</h2>
          <input 
          onChange={this.update('brewery')}
          type="text"/>
          
          <h2>Style</h2>
          <input 
          type="text" 
          onChange={this.update('style')}
          value={this.state.style}/>
          
          <h2>ABV</h2>
          <input 
          type="number" 
          onChange={this.update('abv')}
          value={this.state.abv}/>
          
          <h2>Description</h2> 
          <textarea cols="30" rows="10" 
          onChange={this.update('description')}
          value={this.state.description}></textarea>
           
          <button onClick={this.handleSubmit}>Create!</button>
        </form>
      </div>
    );
  }
}

export default BeerForm;
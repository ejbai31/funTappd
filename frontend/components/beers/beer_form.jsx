import React from 'react';

class BeerForm extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.fields;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
  }

  componentDidMount(){
    if(this.props.formType === "edit" && !this.state){
      this.props.fetchBeer(this.props.match.params.id);
    }
  }
  
  componentWillReceiveProps(newProps){
    this.setState(newProps.fields);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.formType === "new"){
      this.props.createBeer(this.state)
        .then(() => this.props.history.push('/beers'));
    }else{
      this.props.updateBeer(this.state)
        .then(() => this.props.history.push('/beers'));
    }
  }
  
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  deleteBeer(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.deleteBeer(this.state.id)
    .then(() => this.props.history.push('/beers'));
  }

  render(){
    console.log(this.props);
    let deleteButton = "";
    let formType = this.props.formType;
    if (formType === 'edit') {
      deleteButton = <button onClick={this.deleteBeer.bind(this)}>Delete</button>;
    }

    if (this.props.formType === "edit" && !this.props.fields) return null;
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
          value={this.state.brewery}
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
          {deleteButton}
        </form>
      </div>
    );
  }
}

export default BeerForm;
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BeerIndexItem extends React.Component{
  constructor(props){
    super(props);
    console.log("IN THE BEER INDEX ITEM");
    console.log(this);
  }

  render(){
    console.log("IN THE BEER INDEX ITEM");

    return(
      <div className="beer-index-item">
        <img src={this.props.beer.image_url} alt="beer default"/>
        <h2>Beer Name: {this.props.beer.name}</h2>
        <h3>Brewery: </h3>
        <div className="beer-info">
          <h3>Style: {this.props.beer.style}</h3>
          <h3>ABV: {this.props.beer.abv}</h3>
          <h3>Info: {this.props.beer.description}</h3>
          {this.props.beer.rating}
        </div>
      </div>
    );
  }
}

export default withRouter(BeerIndexItem);
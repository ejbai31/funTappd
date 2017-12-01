import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';

class BeerIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getBeers();
  }

  render(){
  

    const display = this.props.beers ? (
      Object.keys(this.props.beers).reverse().map(key => 
      <BeerIndexItem
      key={this.props.beers[key].id}
      beer = {this.props.beers[key]}
      />)
    ) : (
      <div>NO BEERS</div>
    );
      return(

        <div className="beer-index">
          <div className="form-top">
            <h1>Beer List</h1>
            <Link className="add-beer-button" to="/create_beer">+ Beer!</Link>
          </div>
          <ul className="beer-index-list">
            {display}
          </ul>
        </div>
      );
    }
  }


export default BeerIndex;
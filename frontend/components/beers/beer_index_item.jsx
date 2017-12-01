import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BeerIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="beer-index-item">
        <div className="beer-info-main">
        
          <img src={this.props.beer.img_url} alt="beer default"/>
          <h2>{this.props.beer.name}</h2>
          <h3>Brewery: {this.props.beer.brewery_name}</h3>
          <div className="edit-delete-buttons">
            <Link to={`/beers/${this.props.beer.id}/edit`}>Edit</Link>
      
          </div>
        </div>
        <div className="beer-info">
          <h3>Style: {this.props.beer.style}</h3>
          <h3>ABV: {this.props.beer.abv}</h3>
          <h3>Info: {this.props.beer.description}</h3>
          Avg. Rating: {this.props.beer.rating}
        </div>
      </div>
    );
  }
}

export default withRouter(BeerIndexItem);
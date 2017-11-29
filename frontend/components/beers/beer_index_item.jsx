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
      
      <li>
        BEERS
      </li>
    );
  }
}

export default withRouter(BeerIndexItem);
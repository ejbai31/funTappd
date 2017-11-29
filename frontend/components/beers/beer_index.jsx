import React from 'react';
import { Link } from 'react-router-dom';

class BeerIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.getBeers();
  }

  render(){
    // const {beers} = this.props;
    // console.log(beers);
    console.log(this.props.beers);
    if (!this.props.beers){
      return null;
    }else{
      return(

        <div className="beer-index">
          <ul>
            {
              this.props.beers.map(beer => (
                <BeerIndexItem 
                  beer={beer}
                />
              ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default BeerIndex;
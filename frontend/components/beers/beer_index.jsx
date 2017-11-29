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

  componentWillReceiveProps(newProps){
    console.log("OLDPROPS", this.props);
    console.log("NEWPROPS", newProps);
  }

  render(){
    // const {beers} = this.props;
    // console.log(beers);
    console.log(this.props.beers);
    // if (!(this.props.beers)){
    //   debugger
    //   return null;
    // }else{
    //   console.log("IN HERE", this.props.beers);

    const display = this.props.beers ? (
      Object.keys(this.props.beers).map(key => 
      <BeerIndexItem 
      beer = {this.props.beers[key]}
      />)
    ) : (
      <div>NO BEERS</div>
    );

      return(

        <div className="beer-index">
          <ul>
            {/* {
              Object.keys(this.state.beers).map((key) => (
                <BeerIndexItem 
                  beer={this.state.beers[key]}
                />
              ))
            } */}
            {display}
          </ul>
        </div>
      );
    }
  }


export default BeerIndex;
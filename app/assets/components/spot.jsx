/**
 @jsx React.DOM
*/
//= require react

var Spot = React.createClass({

  getInitialState: function() {
    return {
      editing: false,
      errors: []
    };
  },

  render: function(){

    return(
      <div className="spot">
        {this.renderSpot()}
        <a href="#spot_display" onClick={this.displaySpot}>
          Display Spot
        </a>
      </div>

    )
  },
  displaySpot: function(){
    //this function needs to tell everybody else to like display the spot display panel and shit, recenter the map, everything.
    console.log('what is getting set to display')
    console.log(this.props.spot)
    SpotStore.setDisplayedSpot(this.props.spot);

  },
  renderSpot: function(){
    console.log(this.props)
    return(
        <li>title: {this.props.spot.title}</li>
    )
  }
})
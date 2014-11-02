/**
 @jsx React.DOM
*/
//= require react

var Spot = React.createClass({displayName: 'Spot',

  getInitialState: function() {
    return {
      editing: false,
      errors: []
    };
  },

  render: function(){

    return(
      React.DOM.div({className: "spot"}, 
        this.renderSpot(), 
        React.DOM.a({href: "#spot_display", onClick: this.displaySpot}, 
          "Display Spot"
        )
      )

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
        React.DOM.li(null, "title: ", this.props.spot.title)
    )
  }
})
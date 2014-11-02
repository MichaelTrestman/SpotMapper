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
        this.renderSpot()
      )

    )
  },
  renderSpot: function(){
    console.log(this.props)
    return(
        React.DOM.li(null, this.props.spot.title)
    )
  }
})
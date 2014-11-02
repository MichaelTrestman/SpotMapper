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
      </div>

    )
  },
  renderSpot: function(){
    console.log(this.props)
    return(
        <li>{this.props.spot.title}</li>
    )
  }
})
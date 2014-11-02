/**
 @jsx React.DOM
*/
//= require react
//= require form-for
//= require stores/spot-store
//= require actions/spot-actions
//= require react/spot

var SpotList = React.createClass({displayName: 'SpotList',
  getInitialState: function(){
    return {
      spots: [],
      errors: []
    }
  },
  componentDidMount: function(){
    SpotStore.addChangeEvent(function(){
      this.setState({
        spots: SpotStore.spots()
      })
    }.bind(this))
    SpotStore.all();
  },
  render: function(){
    var spots = [];
    if (this.state.spots) {
      this.state.spots.forEach(
        function(spt){
          spots.push(
            Spot({key: spt.id, spot: spt, errors: this.state.errors})
        )}
        .bind(this)
      );

    };

    return(
      React.DOM.div({className: "spot-listy"}, 
        React.DOM.h1(null, "Spots"), 
        React.DOM.a({href: "#", onClick: this.newSpot}, "Create New Spot"
        ), 

        React.DOM.ul(null, spots)
      )
    )
  }
})


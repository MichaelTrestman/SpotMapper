/**
@jsx React.DOM
*/
//= require react

var Collection = React.createClass({displayName: 'Collection',

  getInitialState: function(){
    return{
      editing: false,
      errors: []
    }
  },
  render: function(){
    return(
      React.DOM.div(null)
    )
  }

})
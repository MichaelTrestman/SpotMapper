/**
 @jsx React.DOM
*/
//= require react
//= require form-for
//= require stores/spot-store
//= require actions/spot-actions

var SpotList = React.createClass({displayName: 'SpotList',

  render: function(){
    return(
      React.DOM.h1(null, "Spots")
    )
  }
})
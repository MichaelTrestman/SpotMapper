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
      React.DOM.div({className: "collection"}, 
        this.renderCollection(), 
        React.DOM.a({href: "#collection_display", onClick: this.displayCollection}, "Display  |"), 
        React.DOM.a({href: "#", onClick: this.editCollection}, 
          "|  Edit"
        )
      )
    )
  }

})
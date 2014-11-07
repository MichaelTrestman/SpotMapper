/**
@jsx React.DOM
*/
//= require react
//= require form-for
//= require stores/collection-store
//= require react/collection

var CollectionList = React.createClass({displayName: 'CollectionList',
  getInitialState: function(){
    return {
      errors: [],
      collections: [],
      creatingNew: false,
      editing: false
    }
  },
  componentDidMount: function(){
    CollectionStore.addChangeEvent(function(data){
      if(this.isMounted()) {
        console.log('updating some shit!')
        this.setState({
          collections: CollectionStore.collections(),
          editing: false,
          creatingNew: false
        });
        console.log('just set my collections to:')
        console.log(this.state.collections)
      }
    }.bind(this));
    CollectionStore.all();
  },
  render: function(){
    var collections = [];
    if (this.state.collections) {
      this.state.collections.forEach(function(col){
        collections.push(
          React.DOM.li(null, 
            col.title
          )
        )
      }.bind(this));
    } else{
      collections.push(
        React.DOM.li(null, React.DOM.h2(null, "No Collections!"))
      )
    };
    return(
        React.DOM.div(null, 
          React.DOM.h1(null, "Collections, dude!"), 
          React.DOM.ul(null, 
          collections
          )
        )
      )
  }
})
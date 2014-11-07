/**
@jsx React.DOM
*/
//= require react
//= require form-for
//= require stores/collection-store
//= require react/collection

var CollectionList = React.createClass({
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
          <li>
            {col.title}
          </li>
        )
      }.bind(this));
    } else{
      collections.push(
        <li><h2>No Collections!</h2></li>
      )
    };
    return(
        <div>
          <h1>Collections, dude!</h1>
          <ul>
          {collections}
          </ul>
        </div>
      )
  }
})
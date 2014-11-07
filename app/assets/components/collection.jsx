/**
@jsx React.DOM
*/
//= require react

var Collection = React.createClass({

  getInitialState: function(){
    return{
      editing: false,
      errors: []
    }
  },
  render: function(){
    return(
      <div className="collection">
        {this.renderCollection()}
        <a href="#collection_display" onClick={this.displayCollection}>Display  |</a>
        <a href="#" onClick={this.editCollection}>
          |  Edit
        </a>
      </div>
    )
  }

})
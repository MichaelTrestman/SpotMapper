/**
 @jsx React.DOM
*/
//= require react
//= require form-for
//= require stores/spot-store
//= require actions/spot-actions
//= require react/spot

var SpotList = React.createClass({
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
            <Spot key={spt.id} spot={spt} errors={this.state.errors}/>
        )}
        .bind(this)
      );

    };

    return(
      <div className="spot-listy">
        <h1>Spots</h1>
        <a href="#" onClick={this.newSpot}>Create New Spot
        </a>

        <ul>{spots}</ul>
      </div>
    )
  }
})


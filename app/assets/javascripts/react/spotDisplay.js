/**
 @jsx React.DOM
*/
//= require react
var SpotDisplay = React.createClass({displayName: 'SpotDisplay',
  getInitialState: function(){
    return {
      spotOnDisplay: "no spot bra",
      errors: []
    }
  },
  componentDidMount: function(){

    console.log('trigger trigga')
    SpotStore.addSpotDisplay(function(){
      console.log('trigger fired')
      console.log(this)

      this.setState({
        spotOnDisplay: SpotStore.getDisplayedSpot()
      })
      console.log(this.state.spotOnDisplay)
    }.bind(this))

    SpotStore.triggerSpotDisplay(this.spotOnDisplay)
  },
  render: function(){
    console.log('rendering spotDisplay')

    var spt = this.state.spotOnDisplay
    console.log(spt)
    if (spt === "no spot bra"){
      return (React.DOM.div(null, "no dice mang"))
    } else {
      return (
        // <Spot object={this.state.spotOnDisplay.spot}/>

        React.DOM.div(null, " yay", 
          Spot({key: spt.id, spot: spt, errors: this.state.errors})
        )
      )
    }
  }
})
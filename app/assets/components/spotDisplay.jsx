/**
 @jsx React.DOM
*/
//= require react
var SpotDisplay = React.createClass({
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
      return (<div>no dice mang</div>)
    } else {
      return (
        // <Spot object={this.state.spotOnDisplay.spot}/>

        <div> yay
          <Spot key={spt.id} spot={spt} errors={this.state.errors}/>
        </div>
      )
    }
  }
})
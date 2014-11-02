//= require constants/spotmapper-constants
//= require dispatchers/spotmapper-dispatcher

var SpotStore = (function(){
  var _spots = [];
  var _currently_displayed_spot = null;
  var CHANGE_EVENT = 'change';
  var SPOT_DISPLAY = 'spot-display'
  var FAIL_TO_CREATE_EVENT = 'creation-failed';

  return {
    all: function(collection_id) {
      $.ajax({
        url: 'lists/1/spots',
        type: 'GET'
      })
      .done(function(data){
        _spots = data.spots;
        this.triggerChange();
      }.bind(this)).fail(console.log('oh shit spot-fetching failed'))
    },
    setDisplayedSpot: function(spot){
      // _spots.forEach(
      //   function(spt){
      //     if (spot_id === spt.id){
      //       _currently_displayed_spot = spt
      //       //this is inefficient because it keeps searching through all the spots. should halt on successful match.
      //     }
      //   }.bind(this)
      // );
      _currently_displayed_spot = spot
      console.log('currently displayed spot from spot store')
      console.log(_currently_displayed_spot)
      this.triggerSpotDisplay(_currently_displayed_spot); //is this right? this should work if the spotDisplay is listening
    },
    getDisplayedSpot: function(){
      return _currently_displayed_spot
    },
    spots: function () {
      return _spots;
    },
    addChangeEvent: function (callback) {
      $(this).on(CHANGE_EVENT, callback);
    },
    triggerChange: function (data) {
      $(this).trigger(CHANGE_EVENT, data);
    },
    triggerSpotDisplay: function(data){
      $(this).trigger(SPOT_DISPLAY, data)
    },
    addSpotDisplay: function(callback){
      $(this).on(SPOT_DISPLAY, callback);
    },
    payload: function(payload){
      var action = payload.action;
    }
  }
}());

SpotMapperDispatcher.register(SpotStore.payload.bind(SpotStore));
//= require constants/spotmapper-constants
//= require dispatchers/spotmapper-dispatcher

var SpotStore = (function(){
  var _spots = [];
  var CHANGE_EVENT = 'change';
  var FAIL_TO_CREATE_EVENT = 'creation-failed';

  return {
    all: function(collection_id) {
      $.ajax({
        url: 'lists/1/spots',
        type: 'GET'
      })
      .done(function(data){
        _spots = data.spots;
        console.log('yo')
        console.log(data)
        this.triggerChange();
      }.bind(this)).fail(console.log('oh shit spot-fetching failed'))
    },
    spots: function () {
      console.log('here are da spots from da store:')
      console.log(_spots)
      return _spots;
    },
    addChangeEvent: function (callback) {
      $(this).on(CHANGE_EVENT, callback);
    },
    triggerChange: function (data) {
      $(this).trigger(CHANGE_EVENT, data);
    },
    payload: function(payload){
      var action = payload.action;
    }
  }
}());

SpotMapperDispatcher.register(SpotStore.payload.bind(SpotStore));
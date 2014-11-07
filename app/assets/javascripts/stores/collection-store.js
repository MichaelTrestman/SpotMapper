//= require constants/spotmapper-constants
//= require dispatchers/spotmapper-dispatcher

var CollectionStore = (function(){
  var _collections = [];
  var CHANGE_EVENT = 'change';
  var FAIL_TO_UPDATE_COLLECTION = 'update-failed';
  return {
    addChangeEvent: function(callback){
      $(this).on(CHANGE_EVENT, callback);
    },
    triggerChange: function(data){
      $(this).trigger(CHANGE_EVENT, data)
    },

    all: function(query){
      $.ajax({
        url: '/lists',
        data: {query: query}
      })
      .done(function(data){

        _collections = data.lists;
        console.log('yay collection-fetching worked')
        this.triggerChange();
      }.bind(this))
      .fail(console.log('shit collection-fetching failed'))
    },
    collections: function(){
      console.log('someone called collections; they ordered these collections:')
      console.log(_collections)
      return _collections
    },
    payload: function(payload){

    }
  }
}());

SpotMapperDispatcher.register(CollectionStore.payload.bind(CollectionStore))
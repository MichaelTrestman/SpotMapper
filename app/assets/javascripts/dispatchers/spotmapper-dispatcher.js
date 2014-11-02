//= require dispatcher

var SpotMapperDispatcher = $.extend(new Dispatcher(), {

  handleServerAction: function(action){
    var payload = {
      source: 'SERVER_ACTION',
      action: action
    };
    this.dispatch(payload);
  },
  handleViewAction: function(action){
    var payload = {
      source: 'VIEW_ACTION',
      action: action
    };
    this.dispatch(payload);
  }

})
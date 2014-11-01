var SpotActions = {
  createSpot: function(data){
    SpotMapperDispatcher.handleViewAction({
      type: SpotMapperConstants.CREATE_SPOT,
      data: data
    })
  },
  updateSpot: function(data){
    SpotMapperDispatcher.handleViewAction({
      type: SpotMapperConstants.UPDATE_SPOT,
      data: data
    })
  },
  destroySpot: function(id){
    SpotMapperDispatcher.handleViewAction({
      type: SpotMapperConstants.DESTROY_SPOT,
      id: id
    })
  }
}
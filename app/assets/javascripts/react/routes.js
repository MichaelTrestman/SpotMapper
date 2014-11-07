/**
 * @jsx React.DOM
 */
//= require router
//= require react/spotList
//= require react/collectionList
//= require react/spotDisplay


Router.routes = (function(){
  var _collection_list = function(){
    React.unmountComponentAtNode(document.getElementById('collection-list'));
      React.render(CollectionList(null), document.getElementById('collection-list'))
  }
  var _spot_list = function(){
    React.unmountComponentAtNode(document.getElementById('spot-list'));
    React.render(SpotList(null), document.getElementById('spot-list'));

  }
  var _spot_display = function(){
    React.unmountComponentAtNode(document.getElementById('spot-display'));
    console.log()
    React.render(SpotDisplay(null), document.getElementById('spot-display'));

  }
  return {
    '#': _collection_list,
    '#collection_list': _collection_list,
    "#spot_list": _spot_list,
    "#spot_display": _spot_display
  }
}());

$(document).ready(
  function() {
  Router.route(window.location.hash)
})
$(window).on('hashchange', function() {
  Router.route(window.location.hash);
})
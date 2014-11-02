/**
 * @jsx React.DOM
 */
//= require router
//= require react/spotList
//= require react/spotDisplay


Router.routes = (function(){
  var _spot_list = function(){
    React.unmountComponentAtNode(document.getElementById('spot-list'));
    React.render(<SpotList />, document.getElementById('spot-list'));

  }
  var _spot_display = function(){
    React.unmountComponentAtNode(document.getElementById('spot-display'));
    console.log()
    React.render(<SpotDisplay/>, document.getElementById('spot-display'));

  }
  return {
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
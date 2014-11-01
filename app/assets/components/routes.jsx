/**
 * @jsx React.DOM
 */
//= require router
//= require react/spotList


Router.routes = (function(){
  var _spot_list = function(){
    React.unmountComponentAtNode(document.getElementById('spot-list'));
    React.render(<SpotList />, document.getElementById('spot-list'));

  }
  return {
    "#spot_list": _spot_list
  }
}());

$(document).ready(
  function() {
  Router.route(window.location.hash)
})
$(window).on('hashchange', function() {
  Router.route(window.location.hash);
})
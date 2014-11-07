/**
 @jsx React.DOM
*/
//= require react

var Spot = React.createClass({

  getInitialState: function() {
    return {
      editing: false,
      errors: [],
      myClass: null
    };
  },
  componentDidMount: function() {
    console.log(this)
    // this.addEventListener('dragstart', this.handleDragStart());
    this.myClass = "spot" + this.props.spot.id.toString();

  },

  render: function(){

    return(
      <div className="spot">
        {this.renderSpot()}
        <a href="#spot_display" onClick={this.displaySpot}>
          Display  |
        </a>
        <a href="#" onClick={this.editSpot}>
          |  Edit
        </a>
      </div>

    )
  },
  editSpot: function(){
    alert('edit spot!!')
  },
  displaySpot: function(){
    //this function needs to tell everybody else to like display the spot display panel and shit, recenter the map, everything.
    console.log('what is getting set to display')
    console.log(this.props.spot)
    SpotStore.setDisplayedSpot(this.props.spot);

  },
  renderSpot: function(){

    return(
        // <p></p>
        <li className={this.myClass} draggable="true">title: {this.props.spot.title}</li>
    )
  }

});


// function handleDragStart(e) {
//   this.style.opacity = '0.4';  // this / e.target is the source node.
// }

// function handleDragOver(e) {
//   if (e.preventDefault) {
//     e.preventDefault(); // Necessary. Allows us to drop.
//   }

//   e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

//   return false;
// }

// function handleDragEnter(e) {
//   // this / e.target is the current hover target.
//   this.classList.add('over');
// }

// function handleDragLeave(e) {
//   this.classList.remove('over');  // this / e.target is previous target element.
// }
// function handleDrop(e) {
//   // this / e.target is current target element.

//   if (e.stopPropagation) {
//     e.stopPropagation(); // stops the browser from redirecting.
//   }

//   // See the section on the DataTransfer object.

//   return false;
// }

// function handleDragEnd(e) {
//   // this/e.target is the source node.

//   [].forEach.call(cols, function (col) {
//     col.classList.remove('over');
//   });
// }
// var cols = document.querySelectorAll('#nav-bar .nav-item');

// [].forEach.call(cols, function(col) {
//   col.addEventListener('dragstart', handleDragStart, false);
//   col.addEventListener('dragenter', handleDragEnter, false);
//   col.addEventListener('dragover', handleDragOver, false);
//   col.addEventListener('dragleave', handleDragLeave, false);
//   col.addEventListener('drop', handleDrop, false);
//   col.addEventListener('dragend', handleDragEnd, false);
// });
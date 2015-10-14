//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

// select canvas
var $canvas = $("canvas");
/*
Draw lines
Like this we access actual canvas no jQuery representation of canvas
grabs first element in the array canvas elements.
The same as document.getElementByTagName("canvas")[0]. Need to read up on HTML5.
Acontext in 2d/3d graphics is just to let the computer know where to draw.
Just selecting canvas because there isn't other canvas in this document 
ctx is just short hand for context
*/
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
// is great for dynamic elements on page.
// vs static click
// controls element feels it
// then determines if its been on list
$(".controls").on("click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  
  //Select clicked element
  $(this).addClass("selected");
  
  //cache current color
  color = $(this).css("background-color");
});


//When "New Color" is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide color select
  changeColor();
  $("#colorSelect").toggle();
});

//Update the new color span
function changeColor(){
  var r= $("#red").val();
  var g= $("#green").val();
  var b= $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    
}

//When color sliders change
$("input[type=range]").change(changeColor);
  
//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  //triggers event (sort of like a setter in getter/setter jQuery model)
  $newColor.click();
})
  
//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  // if mouseDown is false, code won't execute
  if(mouseDown){
    //draw line
    context.beginPath();
    // starts line
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    // move line to
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    //make line
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  //stops drawing by calling previous function
  $canvas.mouseup();
});

  //Draw lines
  
/*
// example.
//saying in the context we want to start a path.
context.beginPath();

//telling pen to move to particular location.- the start position
context.moveTo(10,10);

//draw line to end position. -end position 20,10
context.lineTo(20,10);

//now complete by drawing square
context.lineTo(200,20);
context.lineTo(100,275);

// context.lineTo(10,10) or use method called context.closePath();
context.closePath();

//draws line
context.stroke();

//Now instead of doing this manually, 
//we can use mouse to draw as series of small straight lines
*/



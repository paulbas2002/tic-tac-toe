// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn= "player1"
function topLeft(){
  if(turn=="player1")
  var circle = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  circle.setAttribute("cx", 50)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "purple")
}

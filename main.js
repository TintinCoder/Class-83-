console.log("Class 83 | Paint (Part 3)");
// Variables
// var mouseEvent = "empty";
var last_x_position, last_y_position;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var color = "black";
var line_width = 2;
var new_width, new_height;
var width;
width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992) {
    document.getElementById('myCanvas').width = new_width;
    document.getElementById('myCanvas').height = new_height;
    document.body.style.overflow = "hidden";
}
// Mouse Events
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    last_x_position = e.touches[0].clientX - offsetLeft;
    last_y_position = e.touches[0].clientY - offsetTop;
    color = document.getElementById('color').value;
    line_width = document.getElementById('width_of_line').value;
    console.log("My Touchstart Worked !!!!!!");
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log("My Touchmove Worked !!!!!!");
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    console.log("Last Position Of X AND Y Coordinates")
    console.log(last_x_position + last_y_position);
    ctx.moveTo(last_x_position, last_y_position);
    console.log("New X N Y Coordinates");
    console.log(current_x, current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    last_x_position = current_x;
    last_y_position = current_y;
}
function clear() {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
}
var mouseEvent="empty";
var last_position_x,last_position_y;
//snakecase
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value ;
    width_of_line=document.getElementById("widthOfline").value ;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_x, current_position_y,50,0,2*Math.PI);
        ctx.stroke();
    }
last_position_x=current_position_x;
last_position_y=current_position_y;

}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseEvent="mouseleave";
    
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
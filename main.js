var canvas =new fabric.Canvas("mycanvas");
x=10;
y=10;
bw=30;
bh=30;

var pobject="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img) {
  pobject=Img;
  pobject.scaleToWidth(150);    
  pobject.scaleToHeight(140); 
  pobject.set({ top:y, left:x }); canvas.add(pobject);
    });
}
function new_Image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img) {
  block_object=Img;
  block_object.scaleToWidth(bw);    
  block_object.scaleToHeight(bh); 
  block_object.set({ top:y, left:x }); canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed =e.keyCode;
    console.log(keyPressed) ;
    if(keyPressed == '38')
    {
        up();
        console.log("up arrow key");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down arrow key");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left arrow key");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right arrow key");
    }
    if(e.shiftKey==true && keyPressed == '80'){
      console.log("plus");
      bw=bw+10;
      bh=bh+10;
      document.getElementById("width").innerHTML=bw;
      document.getElementById("height").innerHTML=bh;
    }
    if(e.shiftKey==true && keyPressed == '77'){
      console.log("minus");
      bw=bw-10;
      bh=bh-10;
      document.getElementById("width").innerHTML=bw;
      document.getElementById("height").innerHTML=bh;
    }
    if(keyPressed == '87')
    {
        new_Image('wall.jpg');
        console.log("w arrow key");
    }
    if(keyPressed == '71')
    {
        new_Image('ground.png');
        console.log("g arrow key");
    }
    if(keyPressed == '76')
    {
        new_Image('light_green.png');
        console.log("l arrow key");
    }
    if(keyPressed == '84')
    {
        new_Image('trunk.jpg');
        console.log("t arrow key");
    }
    if(keyPressed == '82')
    {
        new_Image('roof.jpg');
        console.log("r arrow key");
    }
    if(keyPressed == '89')
    {
        new_Image('yellow_wall.png');
        console.log("y arrow key");
    }
    if(keyPressed == '68')
    {
        new_Image('dark_green.png');
        console.log("d arrow key");
    }
    if(keyPressed == '85')
    {
        new_Image('unique.png');
        console.log("u arrow key");
    }
    if(keyPressed == '67')
    {
        new_Image('cloud.jpg');
       console.log("c arrow key");
    }
}
function up(){
    if(y>=0){
        y=y-bh;
        console.log("height"+bh);
        canvas.remove(pobject);
        player_update();
    }
}
function down(){
    if(y<=500){
        y=y+bh;
        console.log("height"+bh);
        canvas.remove(pobject);
        player_update();
    }
}
function left(){
    if(x>=0){
        x=x-bw;
        console.log("width"+bw);
        canvas.remove(pobject);
        player_update();
    }
}
function right(){
    if(x<=850){
        x=x+bw;
        console.log("width"+bw);
        canvas.remove(pobject);
        player_update();
    }
}
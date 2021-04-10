var canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({top:playery,left:playerx});
        canvas.add(player_object);
    })
}
function block_update(newimg) {
    fabric.Image.fromURL(newimg,function(Img) {
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({top:playery,left:playerx});
        canvas.add(block_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {var keypressed=e.keyCode;
if(e.shiftKey==true&&keypressed=='80') {block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true&&keypressed=='77') {block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    }
if(keypressed=='38') {up();}
if(keypressed=='39') {right();}
if(keypressed=='37') {left();}
if(keypressed=='40') {down();}
if(keypressed=='87') {block_update('wall.jpg');}
if(keypressed=='71') {block_update('ground.png');}
if(keypressed=='76') {block_update('light_green.png');}
if(keypressed=='84') {block_update('trunk.jpg');}
if(keypressed=='82') {block_update('roof.jpg');}
if(keypressed=='89') {block_update('yellow_wall.png');}
if(keypressed=='68') {block_update('dark_green.png');}
if(keypressed=='85') {block_update('unique.png');}
if(keypressed=='67') {block_update('cloud.jpg');}
}
function up() {if(playery>0)
    {playery=playery-block_height;
    canvas.remove(player_object);
    player_update()}}
    function down() {if(playery<500)
        {playery=playery+block_height;
        canvas.remove(player_object);
        player_update()}}
        function left() {if(playerx>0)
            {playerx=playerx-block_height;
            canvas.remove(player_object);
            player_update()}}
            function right() {if(playerx<900)
                {playerx=playerx+block_height;
                canvas.remove(player_object);
                player_update()}}    
/**
 * Created by Lance on 6/7/2015.
 */
/**
 * Displays the avatars/characters the person could be
 */

var URL_IMAGE_LIST = ["http://opengameart.org/sites/default/files/S31-Scientists-01_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Scientists-02_0.png",
    "http://opengameart.org/sites/default/files/styles/medium/public/S31-Dark%20Force-03_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Dark%20Force-02_0.png",
    "http://opengameart.org/sites/default/files/styles/medium/public/S31-Dark%20Force-01_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-05_0.png",
    "http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-05_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-06.png",
    "http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-07_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-08_0.png",
    "http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-04_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-03_0.png",
    "http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-02_0.png","http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-01_0.png"];

var SPRITE_HEIGHT = 48;
var SPRITE_WIDTH = 32;
var ROW_WIDTH = 4;
var TOTAL_SPRITES = 6;

var context;
var ctx;

function init() {
    context = document.getElementById('myCanvas');
    ctx = context.getContext("2d");
};

function drawAvatars() {
    //var img = document.createElement(URL_IMAGE_LIST[0]);
    //img.style.width = '20%';
    //img.style.height = '30%';
    //var ctx = context.getContext("2d");


    //console.log($("#status").innerHTML);
    var img = new Image();
    img.src = "http://opengameart.org/sites/default/files/S31-Scientists-01_0.png";

    img.onload = function(){
        ctx.drawImage(img,100,100);
    };
    //context.drawImage(img,100,100);
    //for (i = 0; i < TOTAL_SPRITES; i ++){
      //  $(".img-here").prepend(img);
    //}
    //$(".my-canvas").prepend(img);

};

function testRun(){
    console.log("working");
};
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

/**
    Will create a set of sprite images. The different indexes indicate sprite direction.
    @image - Image object/Sprite Sheet
    @x - Starting x in SpriteSheet
    @y - Starting y in SpriteSheet
 */
function SpriteSet(image,x,y){
    this.image = image;
    this.x = x;
    this.y = y;


};

/**
    Constructor for SpriteSet
 */
SpriteSet.prototype = {
    /**
     @index - Sprite index what to access 0-8
     @x - The x value the image will be drawn at
     @y - The y value the image will be drawn at
     */
    draw: function(index,x,y){

        var actualX = (index % 3)*SPRITE_WIDTH;;
        var actualY = Math.floor(index / 3)*SPRITE_HEIGHT;

        ctx.drawImage(this.image,actualX,actualY,SPRITE_WIDTH,SPRITE_HEIGHT,x,y,SPRITE_WIDTH,SPRITE_HEIGHT);
    }
};

/**
 * Draws a preview of all avatars that can be chosen from
 *
 *  Will add Sprite Sheet Array Parameter
 */
function drawAvatarPreview() {
    //var img = document.createElement(URL_IMAGE_LIST[0]);
    //img.style.width = '20%';
    //img.style.height = '30%';
    //var ctx = context.getContext("2d");

    //console.log($("#status").innerHTML);
    console.log("test");


    // ADD LATER
    //img.load = function(){
    //    ctx.fillRect(400,400,1600,1600);
    //};


    var spriteSheets = ["http://opengameart.org/sites/default/files/S31-Scientists-01_0.png", "http://opengameart.org/sites/default/files/styles/medium/public/S31-Scientists-02_0.png",
        "http://opengameart.org/sites/default/files/styles/medium/public/S31-Dark%20Force-03_0.png", "http://opengameart.org/sites/default/files/styles/medium/public/S31-Dark%20Force-02_0.png",
        "http://opengameart.org/sites/default/files/styles/medium/public/S31-Dark%20Force-01_0.png", "http://opengameart.org/sites/default/files/styles/medium/public/S31-Civilians-05_0.png"];

    var curSprite;
    var spriteSheetNum = 5;
    var spriteNum = 8;
    var spriteSubImgNum = 8;

    var globalXIndex = 0
    var globalYIndex = 0;

    spriteSheets.forEach(function (sheet) {
        var img = new Image();
        console.log(sheet.toString());
        img.src = sheet.toString();
        curSprite = new SpriteSet(img, 0, 0);

        img.onload = function () {
            for (var i = 0; i < spriteNum; i++) {
                curSprite.draw(i, globalXIndex * SPRITE_WIDTH, 0);
                globalXIndex += 1;
            };
        };
    });
    //ctx.drawImage(img,0,0,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,SPRITE_WIDTH,SPRITE_HEIGHT);
};

function testRun(){
    console.log("working");
};
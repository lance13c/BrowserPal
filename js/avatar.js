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

var SPRITE_SET_WIDTH = 96;
var SPRITE_SET_HEIGHT = 192;
var ROWS = 2;
var COLUMNS = 4;
var ROW_WIDTH = 4;
var TOTAL_SPRITES = 6;
var TOTAL_SPRITE_SUB_IMAGES = 12;

var context;
var ctx;

function init() {
    context = document.getElementById('myCanvas');
    ctx = context.getContext("2d");
};

//Reference http://opengameart.org/content/s31-scientists-01

/**
    Will create a set of sprite images. The different indexes indicate sprite direction.
    @image - Image object/Sprite Sheet
    @imageX = The x value the image the first sprite is located
    @imageY = The y value on the image the first sprite is located
    @x - Starting x in SpriteSheet
    @y - Starting y in SpriteSheet
 */
function SpriteSet(image,imageX,imageY){
    this.image = image;
    this.imageX = imageX;
    this.imageY = imageY;
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
        var actualX = (index % 3)*SPRITE_WIDTH;
        var actualY = Math.floor(index / 3)*SPRITE_HEIGHT;

        ctx.drawImage(this.image,actualX+this.imageX,actualY+this.imageY,SPRITE_WIDTH,SPRITE_HEIGHT,x,y,SPRITE_WIDTH,SPRITE_HEIGHT);
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


    var spriteSheets = ["http://opengameart.org/sites/default/files/S31-Scientists-01_0.png", "http://opengameart.org/sites/default/files/S31-Scientists-02_0.png",,
        "http://opengameart.org/sites/default/files/S31-Dark%20Force-03_0.png","http://opengameart.org/sites/default/files/S31-Dark%20Force-02_0.png","" +
        "http://opengameart.org/sites/default/files/S31-Dark%20Force-01_0.png","http://opengameart.org/sites/default/files/S31-Civilians-08_0.png","" +
        "http://opengameart.org/sites/default/files/S31-Civilians-07_0.png","http://opengameart.org/sites/default/files/S31-Civilians-06.png",
        "http://opengameart.org/sites/default/files/S31-Civilians-05_0.png"];

    var curSprite;
    var spriteSheetNum = 5;
    var spriteNum = 8;
    var spriteSubImgNum = 8;

    var globalXIndex = 0;
    var globalYIndex = 0;

    //getImages(spriteSheets);

    //imageGroup.forEach(function (sheet) {
        var img = new Image();
        //console.log(sheet.toString());
        img.src = "http://opengameart.org/sites/default/files/S31-Scientists-01_0.png";
        //var index = 0;
        img.onload = function () {
            for (var i = 0; i < ROWS; i++) {
                for (var j = 0; j < COLUMNS; j++) {
                    curSprite = new SpriteSet(img, SPRITE_SET_WIDTH * j, SPRITE_SET_HEIGHT * i);
                    for(var index=0;index<TOTAL_SPRITE_SUB_IMAGES;index++){
                        curSprite.draw(index,globalXIndex * SPRITE_WIDTH, globalYIndex * SPRITE_HEIGHT);
                        globalXIndex += 1;
                        if ((globalXIndex * SPRITE_WIDTH)+SPRITE_WIDTH > context.width){
                            globalXIndex = 0;
                            globalYIndex += 1;
                        }
                    }
                }
            }
        };
    //});
    //ctx.drawImage(img,0,0,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,SPRITE_WIDTH,SPRITE_HEIGHT);
};

/*


/**
 * Returns an array of sprites with 8 sub-images
 * Works only with sprite sheets from S31 urls
 * @param links - An array of links represented as Strings
 */
/*
var getSpriteChooseArray = function(links,spriteNum){
    var imageArray = [];
    var img;
    var imagesLoaded = 0;
    var spriteArray = [];
    links.forEach(function (currentLink){
        img = new Image();
        img.src = currentLink;
        imageArray.push(img);

        img.onload = function() {
            for (var i = 0; i < TOTAL_SPRITE_SUB_IMAGES; i++) {
                var actualX = (i % 3)*SPRITE_WIDTH;;
                var actualY = Math.floor(i / 3)*SPRITE_HEIGHT;
                var curSprite = new SpriteSet(img, 0, 0);
        };
    });
    //When all images load call callback
    if (imagesLoaded >= imageArray.length){

        if (!callback){
            return callback(imageArray);
        }else{
            return imageArray;
        };
    };
*/

/**
 *  Get the sprite you choose.
 */
/*
var getSprite = function(){

};

    imageArray.forEach(function(img){
        var curSprite;

        for (var i = 0; i < spriteNum; i++) {

            var actualX = (index % 3)*SPRITE_WIDTH;;
            var actualY = Math.floor(index / 3)*SPRITE_HEIGHT;

            curSprite = new SpriteSet(img, 0, 0);

            ctx.drawImage(this.image,actualX,actualY,SPRITE_WIDTH,SPRITE_HEIGHT,x,y,SPRITE_WIDTH,SPRITE_HEIGHT);
        };


    });
};
*/
/**
 *
 * @param links - An array of links represented as Strings
 * @param callback - the callback function to get Sprite Arrays
 * @return An array of Image Objects, created by the links
 */


/*
var getImages = function(links,callback){
    var imageArray = [];
    var img;
    var imagesLoaded = 0;
    links.forEach(function (currentLink){
        img = new Image();
        img.src = currentLink;
        imageArray.push(img);

        img.onload = function() {
          imagesLoaded += 1;
        };
    });
    //When all images load call callback
    if (imagesLoaded >= imageArray.length){

        if (!callback){
            return callback(imageArray);
        }else{
            return imageArray;
        };
    };
};

function testRun(){
    console.log("working");
};

*/
/**
 * Created by Lance on 8/2/2015.
 */


var displayStats = function(){
    var storage = localStorage["avatar_data"];
    console.log(JSON.parse(storage));
};

/*
Sets default avatar data
The save file initialization
 */
var saveInit = function(callback){
    var data;
    if (localStorage.avatar_data == undefined){
        console.log("Setting Local");
        data = {
            "avatar" : {
                "image" : "url",
                "stats" : {
                    "stat_health" : "0",
                    "stat_armor" : "0",
                    "stat_magic" : "0",
                    "stat_magic_armor" : "0",
                    "stat_agility" : "0",
                    "stat_health" : "0",
                    "stat_str" : "0",
                    "stat_dex" : "0",
                    "stat_con" : "0",
                    "stat_int" : "0",
                    "stat_wis" : "0",
                    "stat_cha" : "0"
                }
            }
        };
        console.log(data);
        localStorage.avatar_data = JSON.stringify(data);
    }
    console.log("Here");
    callback;
};

/**
 * Updates a specified stat in the
 * @param stat
 */
var updateStat = function(stat,operator,value){
    var data = $.getJson('../data/data.json');
    data.set()
};


$.get('../templates/stat_screen.html', function(data){
    $("body").html(data);
    //Crafty.init(300,400, $('.avatar_image').toElement);
    //Crafty.e('2D, DOM, Color, Fourway')
    //    .attr({x: 0, y: 0, w: 100, h: 100})
    //    .color('#F00')
    //    .fourway(4);

    saveInit(displayStats());

});
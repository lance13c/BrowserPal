/**
 * Created by Lance on 8/2/2015.
 */

$.get('../templates/stat_screen.html', function(data){
    $("body").html(data);
    Crafty.init(300,400, $('.avatar_image').toElement);
    Crafty.e('2D, DOM, Color, Fourway')
        .attr({x: 0, y: 0, w: 100, h: 100})
        .color('#F00')
        .fourway(4);
});
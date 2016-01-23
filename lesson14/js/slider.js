
var countitem=0;


$(document).ready(function() {
    $('.slides li').each(function(index, element){
        ++countitem;
    });
    $('.slides').css('width', 645*countitem);

    setInterval(function(){
        var sl = $('#slider').scrollLeft();
        var newsl = Number(sl)+Number(645);
        $('#slider').children('li:first').remove();
        $('#slider').animate( {scrollLeft: newsl}, 1000);

    },3000);
    $('#next').click(function() {
        var sl = $('#slider').scrollLeft();
        var newsl = Number(sl)+Number(645);
        $('#slider').animate( {scrollLeft: newsl}, 1000);

    });
    $('#prev').click(function() {
        var sl = $('#slider').scrollLeft();
        var newsl = sl-645;
        $('#slider').animate( {scrollLeft: newsl}, 1000);

    });

});


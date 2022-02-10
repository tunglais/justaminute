$(document) .ready(function() {

    $('#hamburger-menu').click(function() {
        $('#menu').show();
        $('#logo').hide();
        $('#hamburger-menu').hide();
    
    });

    $('#exit').click(function() {
        $('#menu').hide();
        $('#logo').show();
        $('#hamburger-menu').show();
    
    });

    $('.campaign').click(function() {
        $('#menu').hide();
        
    
    });

    $('#menu').hide();
    

});

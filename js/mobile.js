$('#query').focus(function() {
    $(this).parent().addClass('search-focus');
}).blur(function(){
    $(this).parent().removeClass('search-focus');
});


$('a.menu-mobile').on('click', function(){
    
    $(this).toggleClass('open-menu');

    if ($(this).is('.open-menu')) {
        $('.ml-navigation ul').addClass('ch-list').show();
        $('.ml-container').css({'padding-top':'108px'});
    } else {
        $('.ml-navigation ul').removeClass('ch-list').hide();
        $('.ml-container').css({'padding-top':'0px'});
    }
});

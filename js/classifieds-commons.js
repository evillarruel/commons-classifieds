$('.ml-footer-control').on('click', function(){
    $(this).children('.icon').toggleClass('ch-icon-chevron-up').toggleClass('ch-icon-chevron-down');
    $('.ml-footer-access').toggleClass('ch-hide');
    var addHeight = $('.ml-footer-access').outerHeight();

    if($(this).children('.icon').is('.ch-icon-chevron-down')) {
        $('.ml-content').css({
            'padding-bottom': function(index, value) {
              return parseFloat(value) + addHeight;
            }
        });
    }else{
        $('.ml-content').css('padding-bottom', '');
    }
    
});
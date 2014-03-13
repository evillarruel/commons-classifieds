$('.ml-footer-control').on('click', function(){
    $(this).children('.icon').toggleClass('ch-icon-chevron-up').toggleClass('ch-icon-chevron-down');
    $('.ml-footer-access').toggleClass('ch-hide');
});
$(document).ready(function () {
    $('#search').click(function () {
        $(this).toggleClass('active');
        $('.movielist').addClass('active');
    });
});

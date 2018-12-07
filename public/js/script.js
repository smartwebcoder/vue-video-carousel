$(document).ready(function () {
    resizeSlide();
})
$(window).resize(function(){
    resizeSlide();
});
function resizeSlide()
{
    $('.slick-slide').each(function(){
        var width = $(this).width();
        var height = width * 0.75; // 4:3
        $(this).height(width * 0.75);
        $(this).find('div.cld-video-player').height(height);
        $(this).find('.vjs-big-play-button').css("zoom", height/300.0);
    })
}
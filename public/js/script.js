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
$(document).ready(function(){
    $('code').each(function() {
        var text = $(this).html();
        text = text.replace(' data-v-e3565ce0=""', '').trim();
        $(this).text(text);
    });
    $('img').click(function(){
        $('#myModal #modal_image').attr('src', $(this).attr('src'));
        $('#myModal').modal({show:true});
    })
    $('code').click(function() {
        window.open("https://www.w3schools.com");//Customize.
    });
});

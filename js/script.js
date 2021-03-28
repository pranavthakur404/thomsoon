$('.toggle').click(function(){
    $('.menu').slideToggle('slow',function(){
        if($(this).is(':visible'))
        $(this).css('display','flex');
    })
})
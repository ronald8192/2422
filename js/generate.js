$(function(){

    $("#timetable-view").click(function(e){
        $("#container-preview").removeClass("hidden");
        $(this).addClass("hidden");
        $("#scroll-top").parent().removeClass("hidden");
    });

    $("#scroll-top").click(function(){
        $("body").animate({
            scrollTop: 0
        }, 300);
    });


});
/**
 * Created by ronald8192 on 29/11/2015.
 */


$.fn.extend({
    mdLoading:function(){
        $(this).html(
            '<div class="loader">' +
            '   <svg class="circular" viewBox="25 25 50 50">' +
            '       <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>'+
            '   </svg>'+
            '</div>'
        )
        return $(this);
    }
});
(function($){
    $.fn.myColor=function(options){
        // this.css("color", "red")
        // return this;
        var settings = $.extend({
            color: "red",
            backgroundColor: "pink"
        }, options );
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    
    }
})(jQuery)
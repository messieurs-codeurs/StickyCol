(function($) {

    $.fn.stickyScroll = function () {
        var el = $(this);
            
        $(window).scroll(function() {

            var top_offset = el.parent().offset().top;
            var bottom_max = el.parent().height() + el.parent().offset().top;
        
          var height_offset = el.height();

            var scroll_top = $(window).scrollTop();
            
            if ( scroll_top >= top_offset ) {

            	pos_max = ( bottom_max  - height_offset);
	            if ( ( scroll_top ) >= ( pos_max ) ) {
	            	el.css('top', ( ( pos_max - top_offset ) + 'px' ) );
	            } else {
		            el.css('top', ( ( scroll_top - top_offset ) + 'px' ) );
		        }
		        
            } else {
                el.css('top', '');
            }

        });
        
    };

    $('.sticky-1').stickyScroll();
    $('.sticky-2').stickyScroll();

})(jQuery);

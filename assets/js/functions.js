$('ul.sub-sub-menu').parent('li').addClass("parent");

$('ul.usa-nav-primary li a').keypress(function(event) {
    if (event.which === 32 || event.which === 13) {
    $(":focus").click();	
    }
});

      $(".usa-js-mobile-nav--active ul.usa-nav-primary li.main-parent.parent.focus-within").click(function(e){
	  	   e.preventDefault();
      	   $(".plus-minus", this).closest().toggleClass("plus minus");
           $("ul.sub-menu", this).closett().toggle();
      });


(function(window, document){
	'use strict';
	var slice = [].slice;
	var removeClass = function(elem){
		elem.classList.remove('focus-within');
	};
	var update = (function(){
		var running, last;
		var action = function(){
			var element = document.activeElement;
			running = false;
			if(last !== element){
				last = element;
				slice.call(document.getElementsByClassName('focus-within')).forEach(removeClass);
				while(element && element.classList){
					element.classList.add('focus-within');
					element = element.parentNode;
				}
			}
		};
		return function(){
			if(!running){
				requestAnimationFrame(action);
				running = true;
			}
		};
	})();
	document.addEventListener('focus', update, true);
	document.addEventListener('blur', update, true);
	update();
})(window, document);

$(window).resize(function(event) {
    if ($(window).width() > 950) {
		$('body').removeClass('usa-js-mobile-nav--active');
		$('#navigation').removeClass('is-visible');
		$('.usa-overlay.is-visible').remove();
				event.preventDefault();
		}
		else if ($(window).width() < 950) {
			$('.usa-menu-btn').click(function () {
				$('.usa-overlay').addClass('is-visible');
		event.preventDefault();
			})	
			}
});

$('.usa-nav-primary li.main-parent').click(function () {
	$(this).find('ul.sub-menu').toggle();
});

$(".bell").click(function() {
	$("#alert-logic").toggle();
});

//$(function(){
//  	  $('#navigation a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//});

$(function(){
    var current = window.location.pathname;
    $('#navigation li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
			}
						})
		if (current == '/preview/gsa/fedramp-gov/dev/') {
				$("#navigation ul li a").removeClass("active");
//		        $("#navigation ul li a").first().addClass("active");
		    }
});


/// scroll to top button js ////

var btn = $('#topButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// End Scroll to Top //


$(function(){
    $('#navigation ul.sub-menu li a.active').closest('ul.usa-nav-primary li.main-parent').addClass('primary-active');
});



$(function () {
    $(".blog-card").slice(0, 4).addClass('display');
    $(".load-more-bkg").on('click', function (e) {
        e.preventDefault();
        var firstDisplay = $(".blog-card:hidden").slice(0, 12) .addClass('display');  
//        $(".blog-card:hidden").slice(0, 2).addClass('display');
        if ($(".blog-card:hidden").length == 0) {
           $(".load-more-bkg").remove();
        } else {
            $('html,body').animate({
                scrollTop: $(firstDisplay).offset().top
//                scrollTop: $(this).offset().top  
            }, 1500);
        }
    });
});  


// In Page Navigation //

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// Cache selectors
var topMenu = $(".in-page-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
});

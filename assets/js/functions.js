
function checkFilter(inId) {
    $(inId).click();
}

$(document).ready(function(){
  $("#search").on("keyup", function() {
    $('input[type="checkbox"]').prop("checked", false);
    var value = $(this).val().toLowerCase();
    $("#search-table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  $("#search-field-small").on("keyup", function() {

    var value = $(this).val().toLowerCase();

    $(".usa-accordion__heading button").attr("aria-expanded", "true");
    $(".usa-accordion__content:gt(0)").show();
    
    $(".usa-accordion__content:gt(0)").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      $(this).prev("h4").toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});


function searchScroll(e) {
   e.preventDefault();
   $(document).scrollTop($('#faq-general').offset().top);
}

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

// #***************************************************
// # AV01 - When "bell" in header is clicked, toggle the
// #        pane and set the 'last-bell-click' cookie with
// #        epoc time, expiring 30 days from now.
// #***************************************************
$(".bell").click(function() {

        $("#alert-logic").toggle();

        $(".post-count").remove();      // remove red alert over bell

        var now = new Date();           // get now and +30 day epoc
        var exp = new Date();
        exp.setTime(now.getTime() + (30*24*60*60*1000));

        // set cookie
        document.cookie = "last-bell-click=" + (now.getTime() / 1000) + "; expires=" + exp.toUTCString() + "; path=/";
});

// #***************************************************
// # AV01 - Use value of last-bell-click cookie
// #        to compare the timestamps of each post.
// #***************************************************
$(document).ready(function() {

        const value = `; ${document.cookie}`;                   // get all cookies
        const parts = value.split(`; last-bell-click=`);        // split on cookie we want

        var lastBellClick = 0;

        if (parts.length === 2) {                                       // if split happened (cookie present),
                lastBellClick = parts.pop().split(';').shift();         // pop last from array, split on ';',
        }                                                               // and shift to get first element

        var i = 0;
        var postCount = 0;
        var docCountNew = 0;
        var docCountUpdate = 0;

        var postTime = document.getElementsByClassName("post-time");    // get all post-time timestamps
        var postList = document.getElementsByClassName("current-post");

        var docTimeNew = document.getElementsByClassName("doc-time-new");    // get all doc-time timestamps
        var docListNew = document.getElementsByClassName("current-doc-new");

        var docTimeUpdate = document.getElementsByClassName("doc-time-update");    // get all doc-time timestamps
        var docListUpdate = document.getElementsByClassName("current-doc-update");

        for (i = 0; i < postTime.length; i++) {                         // compare and count
                if (lastBellClick < postTime[i].innerHTML) {
                        postCount++;
                } else {
                        postList[i].remove();
                }
        }

        for (i = 0; i < docTimeNew.length; i++) {
                if (lastBellClick < docTimeNew[i].innerHTML) {
                        docCountNew++;
                } else {
                        docListNew[i].remove();
                }
        }
        for (i = 0; i < docTimeUpdate.length; i++) {
                if (lastBellClick < docTimeUpdate[i].innerHTML) {
                        docCountUpdate++;
                } else {
                        docListUpdate[i].remove();
                }
        }

        var count = postCount + docCountNew + docCountUpdate;

        if (count == 0) {

                $(".bell").css("display", "none");

                if (typeof(Storage) !== "undefined") {
                        var oldBell = sessionStorage.getItem('old-bell');
                        if (oldBell !== null) {
                                $("#alert-logic").html(oldBell);
                                $(".bell").css("display", "block");
                                $(".post-count").css("display", "none");
                        }
                }
        } else {                                                          // show count on bell

                $(".post-count").html(count);
                $(".post-count").css("display", "block");

                if (postCount == 0) {
                        $("#post-label").next().remove("ul");
                        $("#post-label").remove();
                }
                if (docCountNew == 0) {
                        $("#doc-label-new").next().remove("ul");
                        $("#doc-label-new").remove();
                }
                if (docCountUpdate == 0) {
                        $("#doc-label-update").next().remove("ul");
                        $("#doc-label-update").remove();
                }

                // save old menu
                if (typeof(Storage) !== "undefined") {
                        sessionStorage.setItem('old-bell', $("#alert-logic").html());
                }
        }
});

// #--------------------------------------------------*



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
        var saveTop = $(document).scrollTop();
        $(".blog-card:hidden").slice(0, 12).addClass('display');
        if ($(".blog-card:hidden").length == 0) {
           $(".load-more-bkg").remove();
        } else {
            $(document).scrollTop(saveTop);
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

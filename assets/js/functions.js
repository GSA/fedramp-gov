
function checkFilter(inId) {
  $(inId).click();
}
var globalHtml;
function clearResults() {
  $('input[type="checkbox"]').prop("checked", false);
  $("#search-area").html(globalHtml);
  $("#result-count").html("");
  $(".clear-results").css("display", "none");
  $("#search").val("");
}

$(document).ready(function(){
  var html = $('#search-area').html();
  globalHtml = html;
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    var reg = new RegExp(value || "&fakeEntity;", 'gi');
    $('#search-area').html(html.replace(reg, function(str, index) {
      var t = html.slice(0, index+1),
        lastLt = t.lastIndexOf("<"),
        lastGt = t.lastIndexOf(">"),
        lastAmp = t.lastIndexOf("&"),
        lastSemi = t.lastIndexOf(";");

      if(lastLt > lastGt) return str; // inside a tag
      if(lastAmp > lastSemi) return str; // inside an entity
      return '<span class="keyword-highlight">' + str + '</span>';
    }));

    $(".flower").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

    var results = ($(".flower:visible").length == 1) ? " Result" : " Results";
    $("#result-count").html($(".flower:visible").length + results);
	$(".clear-results").css("display", "inline");
  
    $('input[type="checkbox"]').prop("checked", false);
  });
});


var sa = $('#search-area').html();


function clearFaqs() {


  $(".clear-results").css("display", "none");
  $("#search-field-small").val("");


    $('#search-area').html(sa);


    $(".usa-accordion__heading button").attr("aria-expanded", "false");
    $(".usa-accordion__content:gt(0)").attr("hidden", "true");


    $("#result-count").html("");
}


$(document).ready(function(){


    var html = $('#search-area').html();
    $("#search-field-small").on("keyup", function() {
    
    $('.clear-results').css("display", "none");
    if($(this).val().length != 0) {
    $('.clear-results').css("display", "inline");
    }
    
    var value = $(this).val().toLowerCase();
    var reg = new RegExp(value || "&fakeEntity;", 'gi');
    
    $('#search-area').html(html.replace(reg, function(str, index) {
      var t = html.slice(0, index+1),
        lastLt = t.lastIndexOf("<"),
        lastGt = t.lastIndexOf(">"),
        lastAmp = t.lastIndexOf("&"),
        lastSemi = t.lastIndexOf(";");
        
      if(lastLt > lastGt) return str; // inside a tag
      if(lastAmp > lastSemi) return str; // inside an entity
      return '<span class="keyword-highlight">' + str + '</span>';
    }));
    
    if($(this).val().length === 0) {
    
      $(".usa-accordion__heading button").attr("aria-expanded", "false");
      $(".usa-accordion__content:gt(0)").attr("hidden", "true");
      $("#result-count").html("");
      
    } else {
    
      $(".usa-accordion__content:gt(0)").filter(function() {
      
        var isFound = $(this).text().toLowerCase().indexOf(value) > -1 || $(this).prev("h4").text().toLowerCase().indexOf(value) > -1;
        
        $(this).toggle(isFound);
        $(this).prev("h4").toggle(isFound);
      });
      
      $(".usa-accordion__heading button").attr("aria-expanded", "true");
      $(".usa-accordion__content:gt(0)").removeAttr("hidden");
      
      var results = ($(".keyword-highlight:visible").length == 1) ? " Result" : " Results";
      $("#result-count").html($(".keyword-highlight:visible").length + results);
    } 
    
  });

});


function searchScroll(e) {
   e.preventDefault();
  // $(document).scrollTop($('#faq-general').offset().top);
}

$('ul.sub-sub-menu').parent('li').addClass("parent");

$('ul.usa-nav-primary li').keypress(function(event) {
    if (event.which === 32 || event.which === 13) {
       
        $(":focus").click();
    }
});

$('.usa-nav-primary li.main-parent').click(function () {
	 var prevDisplay = $(this).find('ul.sub-menu').css("display");
        $("ul.sub-menu").css("display","none");
        $(this).find('ul.sub-menu').css("display", prevDisplay);
	$(this).find('ul.sub-menu').toggle();
});

/*
$(".usa-js-mobile-nav--active ul.usa-nav-primary li.main-parent.parent.focus-within").click(function(e){
   e.preventDefault();
   $(".plus-minus", this).closest().toggleClass("plus minus");
   $("ul.sub-menu", this).closest().toggle();
});
*/



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



// #***************************************************
// # AV01 - When "bell" in header is clicked, toggle the
// #        pane and set the 'last-bell-click' cookie with
// #        epoc time, expiring 30 days from now.
// #***************************************************
$(".bell").click(function() {

	$(".alert-wrapper-fallback").remove();
        $("#alert-logic").toggle();
        $(".post-count").remove();      // remove red alert over bell

        var now = new Date();           // get now and +30 day epoc
        var exp = new Date();
        exp.setTime(now.getTime() + (30*24*60*60*1000));

        // set cookie
        document.cookie = "last-bell-click=" + (now.getTime() / 1000) + "; expires=" + exp.toUTCString() + "; path=/";
});


$(document).mouseup(function(e) {
	if ($(e.target).closest("#alert-logic").length === 0) {
		$("#alert-logic").hide();
	}
});


// #***************************************************
// # AV02 - change toggle to click
// #***************************************************
$(document).ready(function() {
	$(".bell").on("keyup", function(event) {
		if (event.keyCode === 13) {
        		$("#alert-logic").click();
		}
	});
});

// #***************************************************
// # AV02 - Use value of last-bell-click cookie
// #        to compare the timestamps of each post.
// #        Simplify for merged collection.
// #***************************************************
$(document).ready(function() {


        var value = `; ${document.cookie}`;                   // get all cookies
        var parts = value.split(`; last-bell-click=`);        // split on cookie we want

        var lastBellClick = 0;

        if (parts.length === 2) {                                       // if split happened (cookie present),
                lastBellClick = parts.pop().split(';').shift();         // pop last from array, split on ';',
        }                                                               // and shift to get first element
	
	 if (lastBellClick == 0) {

                var now = new Date();           // get now and +30 day epoc
                var exp = new Date();
                exp.setTime(now.getTime() + (30*24*60*60*1000));


                // set cookie

                document.cookie = "last-bell-click=" + (now.getTime() / 1000) + "; expires=" + exp.toUTCString() + "; path=/";
		 
				value = `; ${document.cookie}`;                   // get all cookies
				parts = value.split(`; last-bell-click=`);        // split on cookie we want

                lastBellClick = parts.pop().split(';').shift();         // pop last from array, split on ';',

        }

        var i = 0;
        var j = 0;

        var count = 0;

        var postTime = document.getElementsByClassName("post-time");    // get all post-time timestamps
        var postList = document.getElementsByClassName("current-post");

        for (i = 0, j = 0; i < postTime.length; i++) {                         // compare and count
                if (lastBellClick < postTime[i].innerHTML) {
                        count++;
			j++;
                } else {
                        postList[j].remove();
                }
        }

        if (count == 0) {

                if (typeof(Storage) !== "undefined") {
                        var oldBell = localStorage.getItem('old-bell');
                        if (oldBell !== null) {
							if (oldBell.toLowerCase().indexOf("<script>") >= 0) {
								  oldBell = '<div class="alert-wrapper"> <button class="bell-close"><img class="notification-close" src="/assets/img/bell-close.svg" alt=""></button> <ul> <li> <p class="date">No new notifications.</p> </li> </ul> </div>';
								}
							
                                $("#alert-logic").html(oldBell);
                                $(".bell").css("display", "block");
                   		$(".post-count").css("display", "none");
				return;
                        }
                }

                $(".alert-wrapper").remove();
                $(".alert-wrapper-fallback").removeClass("alert-wrapper-fallback").addClass("alert-wrapper");
                if (parts.length !== 2) {   
                   $(".post-count").html($(".alert-wrapper li").length);
  //                 $(".post-count").css("display", "block");
		}
        } else {                                                          // show count on bell

		if(count <= 12) {
                	$(".post-count").html(count);
		} else {
                	$(".post-count").html("12+");
		}
                $(".post-count").css("display", "block");
        }
        // save old menu
        if (typeof(Storage) !== "undefined") {
        	localStorage.setItem('old-bell', $("#alert-logic").html());
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

		if (current == "/") {
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


    var drawer = function () {


      if (!Element.prototype.closest) {
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        Element.prototype.closest = function (s) {
          var el = this;
          var ancestor = this;
          if (!document.documentElement.contains(el)) return null;
          do {
            if (ancestor.matches(s)) return ancestor;
            ancestor = ancestor.parentElement;
          } while (ancestor !== null);
          return null;
        };
      }


      //
      // Settings
      //
      var settings = {
        speedOpen: 50,
        speedClose: 350,
        activeClass: 'is-active',
        visibleClass: 'is-visible',
        selectorTarget: '[data-drawer-target]',
        selectorTrigger: '[data-drawer-trigger]',
        selectorClose: '[data-drawer-close]',

      };


      //
      // Methods
      //

      // Toggle accessibility
      var toggleAccessibility = function (event) {
        if (event.getAttribute('aria-expanded') === 'true') {
          event.setAttribute('aria-expanded', false);
        } else {
          event.setAttribute('aria-expanded', true);
        }   
      };

      // Open Drawer
      var openDrawer = function (trigger) {

        // Find target
        var target = document.getElementById(trigger.getAttribute('aria-controls'));

        // Make it active
        target.classList.add(settings.activeClass);

        // Make body overflow hidden so it's not scrollable
        document.documentElement.style.overflow = 'hidden';

        // Toggle accessibility
        toggleAccessibility(trigger);

        // Make it visible
        setTimeout(function () {
          target.classList.add(settings.visibleClass);
        }, settings.speedOpen); 

      };

      // Close Drawer
      var closeDrawer = function (event) {

        // Find target
        var closestParent = event.closest(settings.selectorTarget),
          childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');

        // Make it not visible
        closestParent.classList.remove(settings.visibleClass);

        // Remove body overflow hidden
        document.documentElement.style.overflow = '';

        // Toggle accessibility
        toggleAccessibility(childrenTrigger);

        // Make it not active
        setTimeout(function () {
          closestParent.classList.remove(settings.activeClass);
        }, settings.speedClose);             

      };

      // Click Handler
      var clickHandler = function (event) {

        // Find elements
        var toggle = event.target,
          open = toggle.closest(settings.selectorTrigger),
          close = toggle.closest(settings.selectorClose);

        // Open drawer when the open button is clicked
        if (open) {
          openDrawer(open);
        }

        // Close drawer when the close button (or overlay area) is clicked
        if (close) {
          closeDrawer(close);
        }

        // Prevent default link behavior
        if (open || close) {
          event.preventDefault();
        }

      };

      // Keydown Handler, handle Escape button
      var keydownHandler = function (event) {

        if (event.key === 'Escape' || event.keyCode === 27) {

          // Find all possible drawers
          var drawers = document.querySelectorAll(settings.selectorTarget),
            i;

          // Find active drawers and close them when escape is clicked
          for (i = 0; i < drawers.length; ++i) {
            if (drawers[i].classList.contains(settings.activeClass)) {
              closeDrawer(drawers[i]);
            }
          }

        }

      };


      //
      // Inits & Event Listeners
      //
      document.addEventListener('click', clickHandler, false);
      document.addEventListener('keydown', keydownHandler, false);


    };

    drawer();

// Policy Checklist

  var $filterCheckboxes = $('input[type="checkbox"]');
  $filterCheckboxes.on('change', function() {
  var selectedFilters = {};
  $filterCheckboxes.filter(':checked').each(function() {
    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }
    selectedFilters[this.name].push(this.value);
  });

  // create a collection containing all of the filterable elements
  var $filteredResults = $('.flower');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {

    // filter each .flower element
    $filteredResults = $filteredResults.filter(function() {
      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .flower element is returned
      return matched;

    });
  });

  $('.flower').hide().filter($filteredResults).show();

  var results = ($(".flower:visible").length == 1) ? " Result" : " Results";
  $("#result-count").html($(".flower:visible").length + results);
  $(".clear-results").css("display", "inline");

});


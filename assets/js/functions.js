 
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
    $(".clear-results").css("display", "block");
  
    $('input[type="checkbox"]').prop("checked", false);
  });
});


$(document).ready(function(){

  var html = $('#search-area').html();
  $("#search-field-small").on("keyup", function() {    
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

    $(".usa-accordion__content:gt(0)").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      $(this).prev("h4").toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

    $(".usa-accordion__heading button:gt(0)").attr("aria-expanded", "true");
    $(".usa-accordion__content:gt(0)").removeAttr("hidden");
  });
});



function searchScroll(e) {
   e.preventDefault();
  // $(document).scrollTop($('#faq-general').offset().top);
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
$(document).ready(function() {
	$(".bell").on("keyup", function(event) {
		if (event.keyCode === 13) {
        		$("#alert-logic").toggle();
		}
	});
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

                if (typeof(Storage) !== "undefined") {
                        var oldBell = localStorage.getItem('old-bell');
                        if (oldBell !== null) {
                                $("#alert-logic").html(oldBell);
                                $(".bell").css("display", "block");
                   		$(".post-count").css("display", "none");
				return;
                        }
                }

                $(".alert-wrapper").remove();
                $(".alert-wrapper-fallback").removeClass("alert-wrapper-fallback").addClass("alert-wrapper");
                if (parts.length !== 2) {   
                   $(".post-count").html("4");
                   $(".post-count").css("display", "block");
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


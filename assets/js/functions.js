$('ul.sub-sub-menu').parent('li').addClass("parent");

$('ul.usa-nav-primary li a').keypress(function(event) {
    if (event.which === 32 || event.which === 13) {
    $(":focus").click();	
    }
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


$(".bell").click(function() {
	$("#alert-logic").toggle();
});


//$(document).ready(function() {
//    $(".nav").accessibleDropDown();
//});
//
//$.fn.accessibleDropDown = function () {
//    var el = $(this);
//
//    /* Make dropdown menus keyboard accessible */
//
//    $("a", el).focus(function() {
//        $(this).parents("li").addClass("hover");
//    }).blur(function() {
//        $(this).parents("li").removeClass("hover");
//    });
//}

//window.onload = function () {
//    document.getElementById('button').onclick = function () {
//        document.getElementById('modal').style.display = "none"
//    };
//};

//$(window).load(function() {
//  // if no cookie
//  if ($.cookie('alert') != "true") {
//    $(".post-count").show();
//    $(".bell").click(function() {
//      $(".post-count").slideUp("slow");
//      // set the cookie for 24 hours
//      var date = new Date();
//      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
//      $.cookie('alert', "true", {
//        expires: date
//      });
//    });
//  }
//});
//
//window.cookieconsent.initialise({
//  container: document.getElementById("cookieconsent"),
//  palette:{
//    popup: { background: "#1aa3ff" },
//    button: { background: "#e0e0e0" },
//  },
//  revokable: true,
//  onStatusChange: function(status) {
//    console.log(this.hasConsented() ?
//    'enable cookies' : 'disable cookies');
//  },
//  "theme": "edgeless"
//});
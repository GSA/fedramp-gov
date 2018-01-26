    	$(document).ready(function(){
    	      $("li.parent").click(function(){
    	      	   $(".plus-minus", this).toggleClass("plus minus");
    	           $(".sub-menu", this).toggle();
    	      });
    	});

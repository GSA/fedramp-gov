    	$(document).ready(function(){
    	      $("li.parent").click(function(){
    	      	   $(".plus-minus").toggleClass("plus minus");
    	           $(".sub-menu", this).toggle();
    	      });
    	});

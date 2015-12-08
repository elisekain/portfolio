'use strict';

$(document).ready(function() {

  // Automatically set year for copyright in footer
  var year = new Date();
  year = year.getFullYear();
  document.getElementById("year").textContent = year;

  // Smooth Scrolling
  $('a[href^="#"]').on("click",function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 1100, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});
});

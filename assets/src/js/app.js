jQuery(document).ready(function($) {

    //Countries
    $("#countries").msDropdown();
    $("#country").msDropdown();

    $('#select_country').attr('data-selected-country','CN');
    $('#select_country').flagStrap();

	// Scroll to down
	// Add smooth scrolling to all links
	$("#explore").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	});

    // Window Scrolling for navbar
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var windowWidth = $(window).width();
        if ((scroll > 300) && (windowWidth > 554)) {
            $(".navbar").css("display", "none");
            $(".scrolling-nav").css("display", "block");
        }

        else{
            $(".navbar").css("display" , "flex");   
            $(".scrolling-nav").css("display", "none");
        }
    })

});









(function($) {
  "use strict"; // Start of use strict

  // Update Kindle links so that GB users are sent to the correct Amazon URL
  $.get("https://ipinfo.io", function(response) {
    // console.log(response);
    if (response.country === 'GB') {
      $("a.kindle")
        .each(function() {
          this.href = 'http://amzn.to/2zWwRxs';
        });
    }
  }, "jsonp");

  // All external links to open in a new window
  $('a')
  		.filter('[href^="http"], [href^="//"]')
  		.not('[href*="' + window.location.host + '"]')
  		//.attr('rel', 'noopener noreferrer')
  		.attr('target', '_blank');

})(jQuery); // End of use strict

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

})(jQuery); // End of use strict

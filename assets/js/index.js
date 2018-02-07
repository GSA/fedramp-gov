(function (document, window, $) {
  $(document).ready(function(){
    ajaxifyContactForm();
  });

  function ajaxifyContactForm () {
    var contactForm = $('#contact'),
        originalUrl = contactForm.attr('action');
        contactBtn  = $('.contact [type=submit]'),
        alert       = $('#contact-alert');

    contactBtn.on('click', function (e) {
      e.preventDefault();
      var url = [originalUrl, contactForm.serialize()].join('?'),
          img = $('<img></img');

      img.on('error', function (e) {
        console.log('known error', e);
      });

      contactBtn.val('Thank you');
      contactBtn.attr('disabled', true);
      img.attr('src', url);

    });
  }
})(document, window, $);


// searchgov
$("#search-button").click(search);

$('#results').empty();

    function search(){
      var searchTerm = $("#searchgovinput").val();
      var url = 'https://search.usa.gov/api/v2/search?affiliate=fedramp&access_key=pkwSg7Bh0i05jHA-ubLZkuVx5gz_AIL0HVPc09Vq_VQ=&query=' + searchTerm;

      $('#results').empty();

      $.getJSON(url, function(json) {
        console.log("GOT SOME DATA:", json.web.results)

        json.web.results.forEach(function(result){
          console.log(result)
          $('#results').append("<li><a href='" + result.url + "'>" + result.title + "</a></li>")
        });
      });
    };

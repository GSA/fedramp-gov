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
const SEARCH_BASE = 'https://search.usa.gov/api/v2/search?affiliate=fedramp&access_key=pkwSg7Bh0i05jHA-ubLZkuVx5gz_AIL0HVPc09Vq_VQ=';

function searchAndDisplayResults(query) {
  // clear results from page
  $('#results').empty();

  // attempt search
  $.getJSON(`${SEARCH_BASE}&query=${query}`, json => {
    // format each entry as li element
    const results = json.web.results.map(
      d => `<li><a href="${d.url}">${d.title}</a></li>`
    );

    // add results to page
    $('#results').append(results.join(''));
  });
}

$('#searchgovform').on('submit', e => {
  e.preventDefault(); // stop GET form request
  const query = $('#searchgovinput').val(); // retrieve input value
  searchAndDisplayResults(query); // perform search and show results

});

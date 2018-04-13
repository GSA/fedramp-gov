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
// Prod URL below
const SEARCH_BASE = 'https://search.usa.gov/api/v2/search/i14y?affiliate=fedramp&access_key=pkwSg7Bh0i05jHA-ubLZkuVx5gz_AIL0HVPc09Vq_VQ=';
// Test URL
//  const SEARCH_BASE = 'https://search.usa.gov/api/v2/search/i14y?affiliate=fedramp_searchgov&access_key=t7sRhv4txKhAmdYR44Hcw2EMjS16J9ZtSWUPUUgbmMU=';

function getUrlParams(paramStr) {
  const idx = paramStr.indexOf('?') + 1;
  const hashes = paramStr.slice(idx).split('&');

  return hashes.reduce((params, hash) => {
    const [key, val] = hash.split('=');
    // Decode the value, replacing + with %20 (space characters)
    return Object.assign(params, { [key]: decodeURIComponent((val || '').replace(/\+/g, '%20')) });
  }, {});
}

function highlight(text) {
  // search.gov returns highlight markers that need to be replaced for HTML tags
  return (text || '')
    .replace(/\ue000/g, '<strong>')
    .replace(/\ue001/g, '</strong>');
}

function searchAndDisplayResults(query) {
  // clear results from page
  $('#results').empty();

  // attempt search
  $.getJSON(SEARCH_BASE, { query }, json => {
    // format each entry as li element
    const results = json.web.results.map((result) => {
      // Use jQuery to encode the result, then replace the highlight markers.
      const title = highlight($('<i>').text(result.title).html());
      const snippet = highlight($('<i>').text(result.snippet).html());

      const $header = $('<h2>')
        .append(
          $('<a>')
            .attr('href', result.url)
            .html(title)
        );

      const $snippet = $('<p>').html(snippet);

      return $('<li>')
        .append($header)
        .append($snippet)
        .html();
    });

    // Check for results
    const content = results.length ? results.join('') : '<p>No results found.</p>';

    // add results to page
    $('#results').append(content);
  });
}

function initSearch() {
  // Gather URL params
  const urlParams = getUrlParams(window.location.search);

  // if there is a search query param:
  // 1) fill in search input with query
  // 2) conduct search and display results
  if (urlParams && urlParams.search) {
     const query = urlParams.search;

     $('#searchgovinput').val(query);
     searchAndDisplayResults(query);
   }
}

initSearch();

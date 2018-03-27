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
//const SEARCH_BASE = 'https://search.usa.gov/api/v2/search/i14y?affiliate=fedramp&access_key=pkwSg7Bh0i05jHA-ubLZkuVx5gz_AIL0HVPc09Vq_VQ=';
// Test URL
  const SEARCH_BASE = 'https://search.usa.gov/api/v2/search/i14y?affiliate=fedramp_searchgov&access_key=t7sRhv4txKhAmdYR44Hcw2EMjS16J9ZtSWUPUUgbmMU=';

function getUrlParams(paramStr) {
  const idx = paramStr.indexOf('?') + 1;
  const hashes = paramStr.slice(idx).split('&');

  return hashes.reduce((params, hash) => {
    const [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
}

function searchAndDisplayResults(query) {
  // clear results from page
  $('#results').empty();

  // attempt search
  $.getJSON(`${SEARCH_BASE}&query=${query}`, json => {
    // format each entry as li element
    const results = json.web.results.map(
      d => `<li><h2><a href="${d.url}">${d.title}</a></h2><p>${d.snippet}</p></li>`
    );

    // add results to page
    $('#results').append(results.join(''));
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
=======


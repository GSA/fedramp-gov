/**
Fetch FedRAMP total numbers from Auth Log JSON
See _includes/fedramp-summary.html for element id's
**/

$(document).ready(function(){
    var authEl      = document.getElementById("totalAuthorized");
    var inProcessEl = document.getElementById("totalInProcess");
    var readyEl     = document.getElementById("totalReady");
    if (!authEl || !inProcessEl || !readyEl) return;

    var onSuccess = function(json, elements) {
        if (!json.data) return;

        var providers = json.data.Providers;
        var totalAuthorized = 0;
        var totalInProcess = 0;
        var totalReady = 0;

        for (i = 0; i < providers.length; i++) {
          if (providers[i].Designation === 'Compliant') totalAuthorized += 1;
          if (providers[i].Designation === 'In Process') totalInProcess += 1;
          if (providers[i].Designation === 'FedRAMP Ready') totalReady += 1;
        }

        elements.authEl.textContent = totalAuthorized;
        elements.inProcessEl.textContent = totalInProcess;
        elements.readyEl.textContent = totalReady;
    }

    $.ajax({
      url: 'https://raw.githubusercontent.com/18F/fedramp-data/master/data/data.json',
      dataType: 'json',
      success: function ( json ) {
        onSuccess(json, {
            authEl:      authEl,
            inProcessEl: inProcessEl,
            readyEl:     readyEl
        }) }
    });
});

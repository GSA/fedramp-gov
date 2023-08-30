$(document).ready(function(){
    if($('#totalReady').length && $('#totalInProcess').length && $('#totalAuthorized').length) {
        $.getJSON('https://raw.githubusercontent.com/GSA/marketplace-fedramp-gov-data/main/data.json', function(j) {
            $("#totalReady").text(j.data.Metrics.ready);
            $("#totalInProcess").text(j.data.Metrics.in_process);
            $("#totalAuthorized").text(j.data.Metrics.total);
        });
    }
});
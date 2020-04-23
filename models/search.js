$(document).ready(function () {
    $("#search").submit(function( event ) {
        var query = $("#search-query").val();

        
        var results = JSON.parse(search(query));
        
        
        console.log(results.hits.length);
        console.log(Object.keys(results.hits).length);


        event.preventDefault()
    });
});
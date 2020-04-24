var API_CALL = "https://api.edamam.com/search";
var APP_ID = "707b0925";
var APP_KEY = "56c065dbb92734af43a553f50c3b0b97";

function search(query) {
    var url =
        API_CALL + "?app_id=" + APP_ID + "&app_key=" + APP_KEY + "&q=" + query;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
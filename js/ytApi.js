var apiKey='AIzaSyBqCs-fmczYiVknKSvZWS8aE93VnKHDCzI'
var channelId='UCRjypPU642xzjARktLuFpzw'
var apiURL='https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelId + '&eventType=live&maxResults=1&type=video&key=' + apiKey;

var HttpClient = function() { // Thanks http://stackoverflow.com/a/22076667/1709894!
  this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    }

    anHttpRequest.open( "GET", aUrl, true );
    anHttpRequest.send( null );
  }
}

ytGet = new HttpClient();
ytGet.get(apiURL, function(response) {
  var ytResponse = JSON.parse(response);
  isStreaming = (ytResponse.pageInfo.totalResults); // 0 if not streaming, 1 if streaming, else error
  if ( isStreaming == 1 ) {
    document.getElementById("ytText").innerHTML = "Streaming!";
    document.getElementById("ytLink").title = "Live streaming right now on YouTube!";
  }
});

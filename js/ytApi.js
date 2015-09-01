apiKey='AIzaSyBqCs-fmczYiVknKSvZWS8aE93VnKHDCzI'
channelId='UCRjypPU642xzjARktLuFpzw'
var ytURL='https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + channelId + '&eventType=live&maxResults=1&type=video&key=' + apiKey;

ytGet = new HttpClient();
ytGet.get(ytURL, function(response) {
  var ytResponse = JSON.parse(response);
  isStreaming = (ytResponse.pageInfo.totalResults); // 0 if not streaming, 1 if streaming, else error
  if ( isStreaming == 1 ) {
    document.getElementById("ytText").innerHTML = "Streaming!";
    document.getElementById("ytLink").title = "Live streaming right now on YouTube!";
    document.getElementById("ytLink").href = 'https://youtube.com/watch?v=' + (ytResponse.items.id.videoId);
  }
});

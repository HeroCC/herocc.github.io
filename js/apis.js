ytKey='AIzaSyBqCs-fmczYiVknKSvZWS8aE93VnKHDCzI'
ytId='UCRjypPU642xzjARktLuFpzw'
var ytURL='https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' + ytId + '&eventType=live&maxResults=1&type=video&key=' + ytKey;
ytGet = new HttpClient();
ytGet.get(ytURL, function(response) {
  var ytResponse = JSON.parse(response);
  isStreaming = (ytResponse.pageInfo.totalResults); // 0 if not streaming, 1 if streaming, else error
  if ( isStreaming == 1 ) {
    document.getElementById("ytText").innerHTML = "Streaming!";
    document.getElementById("ytLink").title = "Live streaming right now on YouTube!";
    document.getElementById("ytLink").href = 'https://youtube.com/watch?v=' + (ytResponse.items.id.videoId);
    document.getElementById("ytLink").onmouseout = "hoverChanger(this, 'Streaming!')"
    document.getElementById("ytLink").onmouseover = "hoverChanger(this, '/c/HeroCC live on YouTube!')"
  }
});

/*
// Gratipay
gratUsername='HeroCC'
var gratUrl='https://gratipay.com/~' + gratUsername + '/public.json';
gratGet = new HttpClient();
gratGet.get(gratUrl, function(response) {
  var gratResponse = JSON.parse(response);
  var receivingVal = (gratResponse.taking);
  if ( receivingVal !== '0.00' ) {
    document.getElementById("gratText").innerHTML = ('$' + receivingVal);
  }
});
*/

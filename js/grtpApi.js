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

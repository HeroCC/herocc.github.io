// Async HTTP GET Function
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

// Gets random images from list of images and path
// Used for random background images
var bkg_images = ["forest.jpg", "mtns-lake-nature.jpg", "swamp-dusk.jpg", "yosemite.jpg", "china-natgeo-water-forest.jpg", "otago-nz-mtns.jpg", "italian-mtn.jpg", "vesper-forest.jpg", "sea-cave.jpg", "panther-creek.jpg", "colorado-mtns.jpg", "LakeWanakaTree.jpg", "RainyYosemite.jpg", "GreenlandStoneTowers.jpg", "SwissAlps.jpg", "glaciernationalpark.jpg"];
function getRandomImage(imgAr, path) { // http://www.dyn-web.com/code/basics/random_image/random_img_js.php
  path = path || 'img/bkg/'; // default path here
  imgAr = imgAr || bkg_images;
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[ num ];
  fullImg = path + img;
  // var imgStr = '<img src="' + path + img + '" alt = "">';
  return fullImg;
}

// If no-js is in tag, replace it with js
var docElement = document.documentElement, jsClassName = ["js"], classes = docElement.className.replace(/(^|\s)no-js(\s|$)/, "").split(" ").concat(jsClassName);
docElement.className = classes.join(" ");

function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'button',
    eventAction: 'click',
    eventLabel: event.target.href,
    transport: 'beacon'
  });
}

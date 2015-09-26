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


var bkg_images = ["forest.jpg", "mtns-lake-nature.jpg"];
function getRandomImage(imgAr, path) { // http://www.dyn-web.com/code/basics/random_image/random_img_js.php
  path = path || 'img/bkg/'; // default path here
  imgAr = imgAr || bkg_images;
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[ num ];
  fullImg = path + img;
  // var imgStr = '<img src="' + path + img + '" alt = "">';
  return fullImg;
}
var bkgImg = getRandomImage();

//document.getElementById("headStyle").background = bkgImg;
//document.head.style="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + bkgImg + ") no-repeat center center fixed;";
//document.getElementsByTagName("head")[0].style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + bkgImg + ") no-repeat center center fixed;";
//document.getElementsByTagName("body")[0].setAttribute('style', "background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + bkgImg + ") no-repeat center center fixed; background-size: cover;");

var docElement = document.documentElement, jsClassName = ["js"], classes = docElement.className.replace(/(^|\s)no-js(\s|$)/, "").split(" ").concat(jsClassName);
docElement.className = classes.join(" ");

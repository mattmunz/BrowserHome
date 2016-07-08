
var IMAGE_COUNT = 136; // The number of images to choose from.
var PHOTO_PREFIX = "DesktopPhotos.";
var PHOTO_SUFFIX = ".jpeg";
	
function initialize()
{
  console.log("Initializing...");

  var imageChangeDelayInMs = 900000; // 15m

  window.onload = changeSplashImage;
  window.setInterval(changeSplashImage, imageChangeDelayInMs);
}

/*
 * Uses a random number to pick the image URL.
 */
function changeSplashImage() 
{
  console.log("Changing the background image...");
  
  var imageNumber = getRandomNumber(1, IMAGE_COUNT + 1);
  
  var url = PHOTO_PREFIX + getPaddedNumberText(imageNumber, 4) + PHOTO_SUFFIX;
  
  document.getElementById('backgroundImage').src = url;
}

/**
 * Returns a random integer between minimum (inclusive) and maximum (exclusive).
 *
 * minumum :: integer
 */
function getRandomNumber(minimum, maximum) 
{
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function getPaddedNumberText(number, size) 
{
    var text = number + "";
    
    while (text.length < size) { text = "0" + text; }
    
    return text;
}

initialize();

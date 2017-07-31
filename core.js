//Author: Armando L. Toledo
//Last updated: 07/31/2017





var config = require('./config');         //import file config
var Twit = require('twit');               //import package twit
var T = new Twit(config);                 //make twitter object
var stream = T.stream('user');      //make user stream object
var request = require('request');         //import package request
     

//DECLARE SOME VARIABLES
var areTheyOn = undefined;  //boolean


//lightsOff
//lightsOn
//lightsRed
//lightsGreen
//lightsCustomHue
//areLightsOn (TAKES TIME SETTING THE VARIABLE)
//flashLights
//snorlaxLightAlert()
//getCurrentHue

//alertIfSnorlax();
//flashLights();
//areLightsOn();










//CALLS TO BRIDGE
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

function areLightsOn(callback) {
  request.get(
    'http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1',
    {json:true},
    function (error, response, body) {
      console.log('body:', body);
      areTheyOn = body.state.all_on; if(callback){callback()};}
  );
}

function lightsOff() {
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"on":false}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function lightsOn() {
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"on":true}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function lightsBlue() {
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"hue":46920}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function lightsRed() {
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"hue":0}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function lightsGreen() {
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"hue":25500}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function lightsWhite() {
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"hue":32000}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function lightsCustomHue(hue) {
  var bodyData = '{"hue":' + hue + '}';
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:bodyData}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function getCurrentHue() {
  var hueNow = 0;
  request.get('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1', function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    hueNow = parseFloat(JSON.stringify(response.action.hue))
  });
}

function flashLights() {
  var hueNow = 0;
  request.put('http://192.168.1.5/api/3MWz5lzDLxmE3b-CEBB93hBgyiP2DuERszBLWjDf/groups/1/action', {form:'{"alert":"select"}'}, function (error, response, body){
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

  });
}




//OTHER FUNCTIONS

function snorlaxLightAlert() {
  lightsBlue();
  setTimeout(flashLights, 100);
  setTimeout(lightsWhite, 1200);
  setTimeout(flashLights, 1400);
  setTimeout(lightsBlue, 2600);
  setTimeout(flashLights,2800);
}

function alertIfSnorlax() {
  T.get('statuses/user_timeline', {screen_name: "PGANVACentralCh", count: 1}, function(err, data, response){
    for(i = 0; i < data.length; i++) {
      console.log(data[i].text, '\n\n');
      if(data[i].text.toLowerCase().includes('snorlax')) {
        console.log('SNORLAX IS OUT THERE');
        snorlaxLightAlert();
      }
    }
  })
}




//MAIN
setInterval(alertIfSnorlax, 5000);

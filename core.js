

    var $ = require("jquery");



var config = require('./config');
var Twit = require('twit');
twitter = new Twit(config);



twitter.get('statuses/user_timeline', {screen_name: "kraken1339", count: 1}, function(err, data, response){
  console.log(data[0].text);
})


function alertIfSnorlax() {
  twitter.get('statuses/user_timeline', {screen_name: "kraken1339", count: 1}, function(err, data, response){
    if((data[0].text) == "location 2 hunna") {
      console.log('FLASH HERE FLASH HERE');
      flashLights();
    }
    else {

      console.log('NOT FLASHING :()');
      console.log(data[0].text);
    }
  })
}

alertIfSnorlax();






//AJAX CALLS TO BRIDGE
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
function lightsOff() {
    $.ajax({
        async: false,
        type: 'PUT',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1/action',
        data: '{"on":false}',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response));
    });
}

function lightsOn() {
    $.ajax({
        type: 'PUT',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1/action',
        data: '{"on":true}',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response));
    });
}

function lightsRed() {
    $.ajax({
        async: false,
        type: 'PUT',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1/action',
        data: '{"hue":0}',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response));
    });
}

function lightsGreen() {
    $.ajax({
        type: 'PUT',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1/action',
        data: '{"hue":25500}',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response));
    });
}

function lightsCustomHue(hue) {
    var bodyData = '{"hue":' + hue + '}';
    $.ajax({
        async: false,
        type: 'PUT',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1/action',
        data: bodyData,
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response));
    });
}

function getCurrentHue() {
    var hueNow = 0;
    $.ajax({
        async: false,
        type: 'GET',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response.action.hue));
        hueNow = parseFloat(JSON.stringify(response.action.hue));
    });
    return hueNow;
}

function flashLights() {
    $.ajax({
        type: 'PUT',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1/action',
        data: '{"alert":"select"}',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response));
    });
}

function areLightsOn() {
    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.5/api/hnpWKAUC0llMVOzIwfVnnjOfuGQ1aLF0Q6uNaGDn/groups/1',
        async: false
    })
    .done(function(response) {
        console.log(JSON.stringify(response.state.all_on));
    });
}











//PGANVACentralCh

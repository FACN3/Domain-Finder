// Domain and timestamp (testing purposes)
var domain = "github.com";
var timestamp = "2006";

//API XHR Request function
var location_api = "freegeoip.net/json/";
var timeMachine_api = "http://archive.org/wayback/available?url="; //need to fill in domain name and timestamp
var Wiki_api = "https://en.wikipedia.org/w/api.php?action=query&format=json&"; //need to fill in params

//Function api_call
var sendRequest = function(url, callback) {
  var xhr = new XMLHttpRequest(url);
  var location = {};
  xhr.onreadystatechange = function() {
    if (xhr.readystate == 200 && xhr.status == 4) {
      var data = xhr.responseText;
      console.log(data);
      //callback(data);
      location.ip = data.ip;
      location.city = data.city;
      location.region = data.region_name;
      location.country = data.country_name;
      location.zip = data.zip_code;
      location.timezone = data.time_zone;
      location.coords = [data.latitude, data.longitude];
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
  //console.log(location);
};

//Object of functions holding each of the api requests
var api_calls = {
  location: function() {
    var loc_url =  location_api + domain;
    var location = {};

    sendRequest(url, function(data){
      location.ip = data.ip;
      location.city = data.city;
      location.region = data.region_name;
      location.country = data.country_name;
      location.zip = data.zip_code;
      location.timezone = data.time_zone;
      location.coords = [data.latitude, data.longitude];
    });

    console.log(location);
    return location;
  },
  timeMachine: function() {
    var time_url = timeMachine_api + domain + "&timestamp=" + timestamp;
    var timeMachine = {};

    sendRequest(url, function(data){
      timeMachine.status = data.archived_snapshots.closest[0];
      timeMachine.available = data.archived_snapshots.closest[1];
      timeMachine.url = data.archived_snapshots.closest[2];
    });

    console.log(timeMachine);
    return timeMachine;
  },
  Wiki: function() {
    console.log("working3");
  }
};















//Filter function

//Object Creation and mapping function

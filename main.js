// Domain and timestamp (testing purposes)
//var domain = "github.com";
//var timestamp = "2006";

//API XHR Request function
//var location_api = "http://freegeoip.net/json/";
//var timeMachine_api = "http://archive.org/wayback/available?url="; //need to fill in domain name and timestamp
//var Wiki_api = "https://en.wikipedia.org/w/api.php?action=query&format=json&"; //need to fill in params


//Function to make API requests
var sendRequest = function(url, callback) {
  var xhr = new XMLHttpRequest(url);
  //console.log("We are in the Send Request");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
      console.log(xhr.responseText);
    }
    else {
      console.log(xhr.readyState, xhr.status);
      return "Sorry, there was an error.";
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

//Object of functions holding each of the api requests
var api_calls = {
  location: function(domain) {
    var loc_url =  "http://freegeoip.net/json/" + domain;
    var location = {};
    console.log(loc_url);
    sendRequest(loc_url, function(xhr){
      var data = xhr;
      location.ip = data.ip;
      location.city = data.city;
      location.region = data.region_name;
      location.country = data.country_name;
      location.zip = data.zip_code;
      location.timezone = data.time_zone;
      location.coords = [data.latitude, data.longitude];
      console.log(location);
    });

    return location;
  },
  archive: function(domain, timestamp) {
    var time_url = "https://cors-anywhere.herokuapp.com/" + "http://archive.org/wayback/available?url=" + domain + "&timestamp=" + timestamp;
    var timeMachine = {};

    sendRequest(time_url, function(xhr){
      var data = xhr;
      timeMachine.status = data.archived_snapshots.closest.status;
      timeMachine.available = data.archived_snapshots.closest.available;
      timeMachine.url = data.archived_snapshots.closest.url;
      console.log(timeMachine);
    });

    return timeMachine;
  },
  Wiki: function() {
    console.log("Wiki-working");
  }
};

//Filter function

//Object Creation and mapping function

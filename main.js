
// Error handling function
function error() {
  alert("Invalid domain or timestamp.");
}

//Function to make API requests
var sendRequest = function(url, callback) {
  var xhr = new XMLHttpRequest(url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    }
    else if (xhr.readyState == 4 && xhr.status == 404){
      console.log(xhr.readyState, xhr.status);
      error();
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

//Object of functions holding each of the api requests
var api_calls = {
  location: function(domain) {
    var loc_url =  "https://freegeoip.net/json/" + domain;
    var location = {};
    sendRequest(loc_url, function(xhr){
      var data = xhr;
      location.ip = data.ip;
      location.city = data.city;
      location.region = data.region_name;
      location.country = data.country_name;
      location.zip = data.zip_code;
      location.timezone = data.time_zone;
      location.coords = [data.latitude, data.longitude];

      if (location.ip) {
        return displayLocation(location);
      }
    });
  },
  archive: function(domain, timestamp) {
    var time_url = "https://cors-anywhere.herokuapp.com/" + "http://archive.org/wayback/available?url=" + domain + "&timestamp=" + timestamp;
    var timeMachine = {};

    sendRequest(time_url, function(xhr){
      var data = xhr;

      var dataArcSnap = data.archived_snapshots.closest;

      timeMachine.status = dataArcSnap.status;
      timeMachine.available = dataArcSnap.available;
      timeMachine.url = dataArcSnap.url;

      if (timeMachine.url) {
        displayArchive(timeMachine);
      }
    });
  }
};

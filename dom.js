
function updateDOM(event) {
  event.preventDefault();
  var domain = document.getElementById('domain_name').value;
  console.log(domain);
  var year = document.getElementById('year').value;
  console.log(year);
  // var loc_url = "http://freegeoip.net/json/" + domain;
  // var archive_url = "http://archive.org/wayback/available?url=" + domain + "&timestamp" + year;

  var location = api_calls.location(domain);
  console.log(location);

  var archive_obj = api_calls.archive(domain, year);
  console.log(archive_obj);

  displayLocation(location);
  displayArchive(archive_obj);
}

function displayLocation(location_obj) {
  var list = document.createElement('ul');
  list.setAttribute("id", "location_infos");
  document.getElementById('location').appendChild(list);

  var len = location_obj.length;
  for (var i = 1; i <= len; i++) {
    var list_element = document.createElement('li');
    list_element.setAttribute("id", "loc_" + i);
    list.appendChild(list_element);
  }

  var ip = document.getElementById("loc_1");
  ip.textContent = "IP address:\t" + location_obj.ip;
  var city = document.getElementById("loc_2");
  city.textContent = "City:\t" + location_obj.city;
  var region = document.getElementById("loc_3");
  region.textContent = "State/Region:\t" + location_obj.region;
  var country = document.getElementById("loc_4");
  country.textContent = "Country:\t" + location_obj.country;
  var zip = document.getElementById("loc_5");
  zip.textContent = "Zipcode:\t" + location_obj.zip;
  var timezone = document.getElementById("loc_6");
  timezone.textContent = "Timezone:\t" + location_obj.timezone;
  var coords = document.getElementById("loc_7");
  coords.textContent = "Coordinates:\t" + location_obj.coords;

}

function displayArchive(archive_obj) {
  var parent = document.getElementById('summonButton');
  if (archive_obj.status !== "200" && archive_obj.available !== true) {
    var err = document.createElement('h2');
    err.textContent = "Sorry, no archive snapshot available for this website...";
    parent.appendChild(err);
  }
  else {
    //Create button

  }
}

function summonButton() {
    var btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode('Submit'));
    var summonButton = document.getElementById('summonButton');
    summonButton.appendChild(btn);
    document.getElementById("submitButton").disabled = true;
}

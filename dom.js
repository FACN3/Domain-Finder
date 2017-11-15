
function updateDOM(event) {
  event.preventDefault();
  var domain = document.getElementById('domain_name').value;
  var year = document.getElementById('year').value;

  var location = api_calls.location(domain);
  console.log(location);

  var archive_obj = api_calls.archive(domain, year);
  console.log(archive_obj);
}

function displayLocation(location_obj) {
  var list = document.createElement('ul');
  list.setAttribute("id", "location_infos");
  document.getElementById('location').appendChild(list);

  //console.log(location_obj);
  Object.keys(location_obj).forEach(function(li,idx) {
    var list_element = document.createElement('li');
    list_element.setAttribute("id", "loc_" + idx);
    list.appendChild(list_element);
  });
  //console.log(Object.keys(location_obj));

  var ip = document.getElementById("loc_0");
  ip.textContent = "IP address:\t" + location_obj.ip;
  var city = document.getElementById("loc_1");
  city.textContent = "City:\t" + location_obj.city;
  var region = document.getElementById("loc_2");
  region.textContent = "State/Region:\t" + location_obj.region;
  var country = document.getElementById("loc_3");
  country.textContent = "Country:\t" + location_obj.country;
  var zip = document.getElementById("loc_4");
  zip.textContent = "Zipcode:\t" + location_obj.zip;
  var timezone = document.getElementById("loc_5");
  timezone.textContent = "Timezone:\t" + location_obj.timezone;
  var coords = document.getElementById("loc_6");
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
    summonButton(archive_obj.url);
  }
}

function summonButton(url) {
    var btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode('Submit'));
    btn.setAttribute("href", url);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("type", "submit");
    var summonButton = document.getElementById('summonButton');
    summonButton.appendChild(btn);
    //document.getElementById("submitButton").disabled = true;
}

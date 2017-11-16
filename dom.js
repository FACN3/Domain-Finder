
function updateDOM(event) {
  event.preventDefault();
  var domain = document.getElementById('domain_name').value;
  var year = document.getElementById('year').value;

  var location = api_calls.location(domain);
  var archive_obj = api_calls.archive(domain, year);
}

function displayLocation(location_obj) {

  var is_it_there = document.getElementById("location_infos");
    var list = document.createElement('ul');
    list.setAttribute("id", "location_infos");
    list.setAttribute("class", "content__display__location--ul");
    document.getElementById('location').appendChild(list);

    Object.keys(location_obj).forEach(function(li,idx) {
      var list_element = document.createElement('li');
      list_element.setAttribute("id", "loc_" + idx);
      list_element.setAttribute("class", "content__display__location--li")
      list.appendChild(list_element);
    });

    var ip = document.getElementById("loc_0");
    ip.textContent = "IP address: " + location_obj.ip;
    var city = document.getElementById("loc_1");
    city.textContent = "City: " + location_obj.city;
    var region = document.getElementById("loc_2");
    region.textContent = "State/Region: " + location_obj.region;
    var country = document.getElementById("loc_3");
    country.textContent = "Country: " + location_obj.country;
    var zip = document.getElementById("loc_4");
    zip.textContent = "Zipcode: " + location_obj.zip;
    var timezone = document.getElementById("loc_5");
    timezone.textContent = "Timezone: " + location_obj.timezone;
    var coords = document.getElementById("loc_6");
    coords.textContent = "Coordinates: " + location_obj.coords[0] + ", " + location_obj.coords[1];

}

function displayArchive(archive_obj) {
  var parent_div = document.getElementById('archive_info');
  if (archive_obj.status !== "200" && archive_obj.available !== true) {
    var err = document.createElement('h2');
    err.textContent = "Sorry, no archive snapshot available for this website...";
    parent_div.appendChild(err);
  }
  else {
    updateButton(archive_obj.url);
  }
}

function createButton(url) {
  var btn = document.createElement("BUTTON");
  btn.appendChild(document.createTextNode('Take Me Back!'));
  btn.setAttribute("onclick", "window.open('" + url +"', '_blank');");
  btn.setAttribute("id", "hidden_btn");
  var summonButton = document.getElementById('archive_info');
  summonButton.appendChild(btn);
}

function updateButton(url) {
    var hidden_btn = document.getElementById('hidden_btn');
    if (hidden_btn) {
      var parent_div = document.getElementById("archive_info");
      parent_div.removeChild(hidden);
      createButton(url);
    }
    else {
      createButton(url);
    }
}

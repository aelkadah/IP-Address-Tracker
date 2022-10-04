let ipText = document.querySelector("#ip");
let locationText = document.querySelector("#location");
let timezoneText = document.querySelector("#timezone");
let ispText = document.querySelector("#isp");

var ip = "8.8.8.8";
var api_key = "at_cBRsXaC53gzi9e8BlaoEJV2xjRFDt";

function theChecker() {
  $(function () {
    $.ajax({
      url: "https://geo.ipify.org/api/v1",
      data: { apiKey: api_key, ipAddress: ip },
      success: function (data) {
        ipText.innerHTML = `${data.ip}`;
        locationText.innerHTML = `${data.location.country}, ${data.location.region}`;
        timezoneText.innerHTML = `${data.location.timezone}`;
        ispText.innerHTML = `${data.isp}`;

        var map = L.map("map").setView(
          [data.location.lat, data.location.lng],
          13
        );
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        //   $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
      },
    });
  });
}

let searchInpt = document.querySelector(".input-field");
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  ip = searchInpt.value;
  theChecker();
});

document.onload = theChecker();

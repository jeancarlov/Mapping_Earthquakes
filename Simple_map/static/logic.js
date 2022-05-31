// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
//   zoom: 4,
// });
let map = L.map("map").setView([40.7, -94.5], 4);
// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '© OpenStreetMap'
// }).addTo(map);

// let map = L.map("map", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

let mapcode = "pk.eyJ1IjoiamVhbmNhcmxvdiIsImEiOiJjbDM5Y2E0OXcwOGFzM2pvYXdxeXF2NGR0In0.JdYk_VG4gk3e_wS6dyoCuQ"

let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapcode,
  }
);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer(
//   "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY,
//   }
// );

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

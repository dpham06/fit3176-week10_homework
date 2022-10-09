var map = "js/map.vg.json";
vegaEmbed('#map', map).then(function (result) {
}).catch(console.error);

var line = "js/line.vg.json"
vegaEmbed('#line', line).then(function (result) {
}).catch(console.error);
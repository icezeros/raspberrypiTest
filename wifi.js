var wifi = require('node-raspbian-wifi');

wifi.resetWifi(function(error) {
  console.log(error);
});

var options = {
  ssid: 'home',
  passphrase: 'hu63897861',
};

wifi.connectToWifi(options, function(error) {
  console.log(error);
});

wifi.getCurrentWifiSettings(function(error, data) {
  console.log(data.ssid);
});
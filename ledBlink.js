// led-blink.js
var rpio = require('rpio');
rpio.open(11, rpio.OUTPUT);

// function blink() {
//   rpio.write(11, rpio.HIGH);
//   setTimeout(function ledoff() {
//     rpio.write(11, rpio.LOW);
//   }, 50);
// }
let status = rpio.HIGH;
function blink() {
  let tmp = status;
  const num = Math.random() * 100;
  console.log('============ tmp,num =============');
  console.log(tmp, num);
  if (num > 50) {
    status = status === rpio.HIGH ? rpio.LOW : rpio.HIGH;
  }
  // if (num > 50) {
  //   rpio.write(11, status);
  // } else {
  //   status = status === rpio.HIGH ? rpio.Low : rpio.HIGH;
  //   rpio.write(11, status);
  // }
  setTimeout(function ledoff() {
    rpio.write(11, tmp);
  }, 50);
}

setInterval(blink, 1000);

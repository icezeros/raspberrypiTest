const shell = require('shelljs');
const path = require('path');
const { exec } = shell;
const version = exec('node --version', { silent: true }).stdout;
let obj = {
  ch0: 0,
  ch1: 0,
  index: 0,
};

// const child = exec('yarn add lodash', { async: true });
const child = exec(path.join(__dirname, 'index.py'), { async: true });

// child.code.on('data', function(data) {
//   /* ... do something with data ... */
// });
child.stdout.on('data', function(data) {
  /* ... do something with data ... */
  // console.log('============ data =============');
  // console.log(data);
  try {
    const arr = JSON.parse(data);
    // console.log('============ arr =============');
    // console.log(arr);
    const i = (arr[0] - arr[1]) * 1000;
    obj.ch0 += arr[0] * 1000;
    obj.ch1 += arr[1] * 1000;
    obj.index += 1;
    deal();

    // console.log('============ i =============');
    // console.log(i);
  } catch (error) {
    console.log('============ error.message =============');
    console.log(error.message);
  }
  // const arr = JSON.parse(data);
  // console.log('============ arr =============');
  // console.log(arr);
});
child.stderr.on('data', function(data) {
  /* ... do something with data ... */
  console.log('===================Program stderr:', data);
});

function deal() {
  const index = 1000;
  if (obj.index == index) {
    console.log('============ obj.ch0 =============');
    console.log(obj.ch0);
    console.log('============ obj.ch1 =============');
    console.log(obj.ch1);
    console.log('============ result  =============');
    console.log((obj.ch0 - obj.ch1) / index);
    obj = {
      ch0: 0,
      ch1: 0,
      index: 0,
    };
  }
}

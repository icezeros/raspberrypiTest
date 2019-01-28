const shell = require('shelljs');
const { exec } = shell;
const version = exec('node --version', { silent: true }).stdout;

// const child = exec('yarn add lodash', { async: true });
const child = exec('/home/pi/daqhats/examples/python/mcc118/single_value_read.py', { async: true });

// child.code.on('data', function(data) {
//   /* ... do something with data ... */
// });
child.stdout.on('data', function(data) {
  /* ... do something with data ... */
  const arr = data.split('     ');
  console.log('============ arr =============');
  console.log(arr);
  // console.log('   ');
  // console.log(data);
  // console.log('   ');
});
child.stderr.on('data', function(data) {
  /* ... do something with data ... */
  console.log('===================Program stderr:', data);
});

// exec('node -v', function(code, stdout, stderr) {
//   console.log('Exit code:', code);
//   console.log('Program output:', stdout);
//   console.log('Program stderr:', stderr);
// });

const shell = require('shelljs');
const path = require('path');
const { exec } = shell;
const version = exec('node --version', { silent: true }).stdout;

// const child = exec('yarn add lodash', { async: true });
const child = exec(path.join(__dirname, 'index.py'), { async: true });

// child.code.on('data', function(data) {
//   /* ... do something with data ... */
// });
child.stdout.on('data', function(data) {
  /* ... do something with data ... */
  const arr = JSON.parse(data);
  console.log('============ arr =============');
  console.log(arr);
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

#!/usr/bin/env node
var help = require('u-help'),
    fs = require('fs'),
    nijm = require('./main.js'),

    ugly = false,
    i;

if(process.argv.length == 2) help.show('nijm [options] <filename.js>',['A JavaScript minifier that keeps your code readable.','Prints result to the standard output.'],{
  Options: {
    '-u': 'Uglify code'
  }
});
else{

  i = process.argv.indexOf('-u');
  if(i != -1){
    ugly = true;
    process.argv.splice(i,1);
  }

  process.stdout.write(
    nijm(
      fs.readFileSync(process.argv[2]) + '',
      ugly
    )
  );

}

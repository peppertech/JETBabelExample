/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/

'use strict';

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
    console.log("Running before_release_build hook.");
    if (configObj.buildType === 'release') {
      console.log("configObj: "+JSON.stringify(configObj));
      const exec = require("child_process").exec;
      exec('npx babel src -d web --presets=@babel/preset-env --ignore=main.js', (error, stdout, stderr) => {
        console.log("exec results from Release: \n" + stdout + 'Errors: ' + error? error : 'None' );
      });
    }
  	resolve(configObj);
  });
};

"use strict";

var util = require('util');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3030);
  
  app.on('error', function (err) {
    util.log(err);
    process.exit(1);
  });
  app.listen(app.get('port'), function() {
    util.log("GeoCode service listening on port " + app.get('port') + ' in ' + app.get('env'));
  });

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
// var Thing = require('./thing.model');
var fitness = require('mongoose');
var fs = require('fs');
var path = require('path');
var root = path.dirname(require.main.filename);
// Get a single thing
exports.showlocations = function(req, res) {
  var json = fs.readFileSync(path.join(root,'/location.json'),{encoding:'utf8'});
  console.log(JSON.parse(json));
};
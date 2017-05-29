var promise = require('bluebird');
var app = require('express');
var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:oauth@localhost:5432/postgres';   //replace oauth with your postgres password
var db = pgp(connectionString);

// add query functions

var jwt = require('jsonwebtoken');
var authcontroller = require('./routes/authcontroller');
process.env.SECRET_KEY = "secretkey";

function getAllPlaces(req, res, next) {
  db.any('select * from places')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL places'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSinglePlace(req, res, next) {
  var placeID = req.params.id;
  db.one('select * from places where place_id = $1', placeID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE place'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function createPlace(req, res, next) {
  
  db.none('insert into places(NAME, PLACE_ID)' +
      'values(${name}, ${id1})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one place'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updatePlace(req, res, next) {
  db.none('update places set NAME=$1 where place_id=$2',
    [req.body.name, req.params.id])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'PLACE updated'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}






module.exports = {
  getAllPlaces: getAllPlaces,
  getSinglePlace: getSinglePlace,
  createPlace: createPlace,
  updatePlace: updatePlace
  
};




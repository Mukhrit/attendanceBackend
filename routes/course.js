var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var Course = require('../models/courseModel');

router.use(bodyParser.json());

router.post('/addcourse', (req, res, next) => {
  console.log(req);
  var course = new Course(req.body);
  course
    .save()
    .then((course) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ course, success: true });
    })
    .catch((err) => next(err));
});

router.get('/getcourse/:accountnumber', (req, res, next) => {
  console.log(req);
  Course.find({ accountnumber: req.params.accountnumber })
    .then((course) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.send(course);
    })
    .catch((err) => next(err));
});

module.exports = router;

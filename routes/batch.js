var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var Batch = require('../models/batchModel');

router.use(bodyParser.json());

router.post('/addbatch', (req, res, next) => {
  var batch = new Batch(req.body);
  batch
    .save()
    .then((batch) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ batch, success: true });
    })
    .catch((err) => next(err));
});

router.get(
  '/getbatch/:accountnumber',

  (req, res, next) => {
    Batch.find({ accountnumber: req.params.accountnumber })
      .then((batch) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(batch);
      })
      .catch((err) => next(err));
  }
);

module.exports = router;

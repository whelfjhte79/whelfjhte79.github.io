const express = require('express');
const router = express.Router();

//const users = require('../data/user.json');

router.post('/#//regist', function (req, res) {
    var user = {
      'userid': req.body.userid,
      'name': req.body.name,
      'address': req.body.address
    };
    var query = connection.query('insert into users set ?', user, function (err, result) {
      if (err) {
        console.error(err);
        throw err;
      }
      res.status(200).send('success');
    });
  });
module.exports = router;
var express = require('express');
var router = express.Router();
var Member = require('../models/member.model');
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Member.find({}, (err, members) => {
    if (err) { console.log(err); return res.status(500).json({ msg: 'Error fetching members' }); }
    return res.status(200).json({data: members});
  });
});

router.post('/add', function (req, res, next) {
  var newMember = new Member(req.body);
  newMember.save(err => {
    if (err) { console.log(err); return res.status(400).json({ msg: 'Error Adding Member' }); }
    return res.status(200).json({ msg: 'Member Added Succesfully' });
  })
});

router.delete('/:id/delete', function(req, res, next){
  Member.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, doc) =>{
    if (err) { return res.status(400).json({ msg: 'Error deleting Members' }); }
    return res.status(200).json({ data: doc });
  });
});

router.put('/:id/update', function(req, res,next){
  Member.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set:req.body},(err, doc)=> {
    if (err) { return res.status(400).json({ msg: 'Error updating Members' }); }
    return res.status(200).json({ data:doc });
  });
});

//get all names
router.get('/allNames', function (req, res, next) {
  Member.find({}, "name", (err, name) => {
      if (err) { 
          return res.status(500).json({ msg: 'Error fetching names' });
      }
      return res.status(200).json({data: name});
  });
});

// Search name
router.get('/search', function (req, res, next) {
  var searchQuery = req.query.q;
  console.log(searchQuery);
  if(searchQuery){
    Member.find({ name: { '$regex': searchQuery, '$options': 'i' } }, "name", (err, name) => {
      if (err) {
        return res.status(500).json({ msg: 'Error fetching names' });
      }
      return res.status(200).json({ data: name });
    });
  } else{
    return res.status(400).json({ msg: 'No search query' });
  }
});

// get member details by its name
router.get('/:name', function (req, res, next) {
  Member.findOne({name:req.params.name}, (err, name) => {
      if (err) {
          return res.status(500).json({ msg: 'Error fetching name of the member' });
      }
      return res.status(200).json({data: name});
  });
});




module.exports = router;

// router.route("/find").get(function(req, res) {
//   detail.find({}, { name: 1 }, function(err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(result);
//     }
//   });
// });
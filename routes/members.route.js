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

module.exports = router;

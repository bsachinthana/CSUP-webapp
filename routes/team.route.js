var express = require('express');
var router = express.Router();
var Team = require('../models/team.model');
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Team.find({}, (err, teams) => {
    if (err) { return res.status(500).json({ msg: 'Error fetching team' }); }
    return res.status(200).json({data: teams});
  });
});

router.post('/add', function (req, res, next) {
    rawTeam = req.body;
    rawTeam.members.map(m => {m.member = mongoose.Types.ObjectId(m.member); return m;});
    const newTeam= new Team(rawTeam);
    newTeam.save(err => {
        if (err) { return res.status(400).json({ msg: 'Error Adding Team', data:err }); }
        return res.status(200).json({ msg: 'Team Added Succesfully' });
    });
});

router.put('/:year/members', function (req, res, next) {
    rawMembers = req.body.members;
    rawMembers.map(m => {m.member = mongoose.Types.ObjectId(m.member); return m;});

  Team.findOneAndUpdate({year:req.params.year}, { $set: { members: req.body.members } }, (err, doc) => {
    if (err) { return res.status(400).json({ msg: 'Error updating Members' }); }
    return res.status(200).json({ msg: 'Members updated Succesfully', data: doc });
  });
});

//Get Team by its year
router.get('/:year', function (req, res, next) {
    Member.findOne({year:req.params.year}, (err, team) => {
        if (err) { 
            return res.status(500).json({ msg: 'Error fetching team' });
        }
        return res.status(200).json({data: team});
    });
});

module.exports = router;
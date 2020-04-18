let mongoose = require('mongoose');

let teamModel = new mongoose.Schema({
    year:{type: Number, unique:true, required:true},
    members:[
        {
            member:{type: mongoose.Types.ObjectId, ref: 'Member'},
            position:{type:String, required: true}
        }
    ]
});

module.exports = mongoose.model('Team', teamModel);
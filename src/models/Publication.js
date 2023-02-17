const mongoose = require('mongoose');

const publicationShema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    technique: {
        type: String,
        required: true
    },
    artPicture: {
        type: String,
        required: true
    },
    authenticity: {
        type: String,
        enum: ["Yes", "No"],
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const Publication = mongoose.model('Publication', publicationShema);

module.exports = Publication;
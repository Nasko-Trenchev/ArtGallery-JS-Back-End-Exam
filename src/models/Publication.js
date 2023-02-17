const mongoose = require('mongoose');

const publicationShema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
        minLength: 6
    },
    technique: {
        type: String,
        required: true,
        maxLength: 15
    },
    artPicture: {
        type: String,
        required: true,
        match: [/^https?:\/\//, "Invalid URL"]
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
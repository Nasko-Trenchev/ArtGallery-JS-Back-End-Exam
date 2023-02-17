const publicationService = require('../services/publicationService');

exports.getCreate = (req, res) =>{

    res.render('create');
}

exports.postCreate = async (req, res) => {

    const {title, technique, artPicture, authenticity} = req.body;

    try {
        await publicationService.create({title, technique, artPicture, authenticity, author: req.user._id})
    }
    catch(err) {
        
        const errors = Object.keys(err.errors).map(key => err.errors[key].message)

        return res.render('create', {error: errors[0]})
    }

    res.render('gallery')
}

exports.getGalery = async (req, res) =>{

    const publications = await publicationService.getAll().lean();

    res.render('gallery', {publications})
}

exports.getDetails = async (req, res) =>{

    const publication = await publicationService.getById(req.params.id).populate('author').lean();
    console.log(publication);

    res.render('details', {publication})
}
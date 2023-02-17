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

    res.redirect('/galery')
}

exports.getGalery = async (req, res) =>{

    const publications = await publicationService.getAll().lean();

    res.render('gallery', {publications})
}

exports.getDetails = async (req, res) =>{

    const publication = await publicationService.getById(req.params.id).populate('author').lean();

    console.log(publication)

    const isOwner = req.user._id == publication.author._id;
    const hasShared = publication.usersShared.some(id=> id == req.user._id);

    res.render('details', {publication, isOwner, hasShared})
}

exports.getEdit = async (req, res) =>{

    const publication = await publicationService.getById(req.params.id).lean();

    res.render('edit', {publication})
}

exports.postEdit = async (req, res) =>{

    const {title, technique, artPicture, authenticity} = req.body;

    try {

        await publicationService.editById(req.params.id, {title, technique, artPicture, authenticity})
    }
    catch(err){

        const errors = Object.keys(err.errors).map(key => err.errors[key].message)

        return res.render('create', {error: errors[0]})
    }

    res.redirect(`/details/${req.params.id}`)
}

exports.getDelete = async (req, res) =>{

    await publicationService.deleteById(req.params.id);

    res.redirect('/galery')
}

exports.sharePublication = async (req, res) =>{

    try {
        await publicationService.share(req.user._id, req.params.id)
    }
    catch(err){
        console.log(err);
    }

    res.redirect(`/`)
}
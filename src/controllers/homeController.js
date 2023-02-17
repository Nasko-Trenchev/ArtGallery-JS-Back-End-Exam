const publicationsService = require('../services/publicationService');

exports.getHomePage = async (req, res) => {

    const publications = await publicationsService.getAll().lean();

    res.render('home', {publications});
}

exports.erorrPage = (req, res) =>{

    res.render('404');
}
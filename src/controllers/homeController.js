const publicationsService = require('../services/publicationService');

exports.getHomePage = async (req, res) => {

    const publications = await publicationsService.getAll().lean();

    const publicationWithShared = publications.map(x=> ({...x, shareCount: x.usersShared.length}))

    res.render('home', {publicationWithShared});
}

exports.erorrPage = (req, res) =>{

    res.render('404');
}
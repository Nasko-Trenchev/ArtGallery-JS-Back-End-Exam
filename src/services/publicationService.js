const Publication = require('../models/Publication');

exports.getAll = () => Publication.find({});

exports.create = (data) => Publication.create(data);

exports.getById = (id) => Publication.findById(id);

exports.getAuthor = (publicationId) => Publication.find();
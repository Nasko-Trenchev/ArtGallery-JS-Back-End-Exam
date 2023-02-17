const Publication = require('../models/Publication');

exports.getAll = () => Publication.find({});

exports.create = (data) => Publication.create(data);

exports.getById = (id) => Publication.findById(id);

exports.editById = (id, data) => Publication.findByIdAndUpdate(id, data);

exports.deleteById = (id) => Publication.findByIdAndDelete(id);
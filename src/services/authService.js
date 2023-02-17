const User = require('../models/User');
const jwt = require('../lib/jsonwebtoken');
const config = require('../config')


exports.register = async (username, address, password) => {
    
    await User.create({username, address, password})
    
    return this.login(username, password);
};

exports.findByUsername = (username) => User.findOne({username});

exports.findByEmail = (email) => User.findOne({email});

exports.login = async (username) => {

    const user = await this.findByUsername(username);

    const payload = {_id: user._id, user: user.username}
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'})
    return token;
}

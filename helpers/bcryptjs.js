const bcrypt = require('bcryptjs');

function hash(input){
    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(input, salt);
    return newPassword;
}

function comparePassword(password, savedPassword){
    return bcrypt.compareSync(password, savedPassword);
}

module.exports = {hash, comparePassword}
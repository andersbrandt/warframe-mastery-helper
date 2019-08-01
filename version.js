var crypto = require('crypto');
var version = Math.floor(Math.random() * Math.floor(999999999999)).toString() + "asdf";
var versionHash = crypto.createHash('md5').update(version).digest("hex");

module.exports = versionHash;

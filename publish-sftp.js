var ftpConfig = require("./.ftpconfig.js");
var sftpUpload = require("sftp-upload");
var fs = require("fs");

var version = require("./version.js");
require('child_process').execSync("echo " + version + " > public/version.txt");

var options = {
	host: ftpConfig.host,
	port: 2020,
	username: ftpConfig.user,
	path: "./public/",
	remoteDir: ftpConfig.path,
	excludedFolders: ["./public/helper/Classes/vendor"],
	exclude: [
		".gitignore",
		"./public/conf.php",
		"./public/conf.php.sample",
		"./public/user-auth.php",
		"./public/setuser.php",
		"./public/setuser-test.php",
		"./public/setuser.php",
		"./public/.DS_Store",
		"./public/**/.DS_Store",
	],
	password: ftpConfig.password,
	dryRun: false,
};
var sftp = new sftpUpload(options);

sftp
	.on("error", function (err) {
		throw err;
	})
	.on("uploading", function (progress) {
		console.log("Uploading", progress.file);
		//console.log(progress.percent + "% completed");
	})
	.on("completed", function () {
		console.log("Upload Completed");
	})
	.upload();


// require("./generate-sitemap.js");

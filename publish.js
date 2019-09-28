var fs = require("vinyl-fs");
var ftp = require("vinyl-ftp");
var ftpConfig = require("./.ftpconfig.js");
var colors = require('ansi-colors');

require('dotenv').config();

var version = require("./version.js");
require('child_process').execSync("echo " + version + " > public/version.txt");

const paths = {
  upload: {
    dest: ftpConfig.path,
    base: "./public",
    globs: [
      'public/**',
      '!public/conf.php',
      '!public/conf.php.sample',
      '!public/user-auth.php',
      '!public/helper/Classes/vendor/**'
    ]
  }
};

if (process.env.SAFE_TO_PUBLISH === 'true') {

  var conn = new ftp(ftpConfig);
  fs.src(
    paths.upload.globs,
    {
      buffer: false
    })
    .pipe(conn.newer(paths.upload.dest))
    .pipe(conn.dest(paths.upload.dest)
  );
  // Update sitemap
  require("./generate-sitemap.js");

} else {

  console.log(colors.red("Publishing are prohibited by env-var 'SAFE_TO_PUBLISH', check file .env"));

}

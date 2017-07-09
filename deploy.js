var fs = require('fs');
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = JSON.parse(fs.readFileSync('deploy.json', 'utf8'));
config.localRoot = __dirname + "/dist";
config.exclude = ['.git', '.DS_Store'];

ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});
ftpDeploy.on('uploaded', function(data) {
    console.log(data);
});

var through = require('through2');
var slack = require('node-slack');

module.exports = function() {

    var post = function(param, input) {
        slack.setup(param);
        slack.postToSlack(input);
        return through.obj();
    };

    return post;

};
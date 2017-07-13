#gulp-slack-bitegg

Simple gulp plugin to post information to Slack.

##Usage

###Basic use

```javascript

var sftp = require('gulp-sftp');
var slack = require('gulp-slack-bitegg')({});

var slackSetup = ({
    url: '*Your Webhook URL*',
    channel: '#foo', // Optional
    user: 'bar', // Optional
    icon_url: 'http://foo.com/bar.jpg', // Optional
    icon_emoji: ':bowtie:' // Optional
});

gulp.task('deploy', function () {
    return gulp.src('src/*')
        .pipe(sftp({
            host: 'website.com',
            user: 'johndoe',
            pass: '1234'
        }))
        .pipe(slack(slackSetup, 'Deployed latest build'));
});

```

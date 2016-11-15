exports.handler = (event, context, callback) => {

    var time = require('time');
    var currentTime = new time.Date();

    currentTime.setTimezone("America/Los_Angeles");

     callback(null, {
        statusCode: '200',
        body: currentTime.toString(),
    });
};

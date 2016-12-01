exports.handler = (event, context, callback) => {

    var time = require('time');
    var currentTime = new time.Date();

    currentTime.setTimezone(process.env.TIME_ZONE);

    callback(null, {
        statusCode: '200',
        body: '<h1 style="color:#000080;">' + 'Welcome to my ' + process.env.STAGE + ' stage! <br/>' +
              'The time in ' + process.env.TIME_ZONE + ' is: ' + currentTime.toString() + '</h1>',
        headers: {
                  'Content-Type': 'text/html; charset=utf-8',
    },
  });
};

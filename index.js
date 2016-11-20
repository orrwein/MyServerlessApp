exports.handler = (event, context, callback) => {

    /*var time = require('time');
    //var currentTime = new time.Date();

    // Replace with env var ("America/Los_Angeles" and "America/New_York")
    var timeZone = process.env.TIME_ZONE;
    currentTime.setTimezone(timeZone);

    callback(null, {
        statusCode: '200',
        body: '<h1 style="color:#000080;">' + 'welcome to re:Invent!<br/>' + 'The time in ' + timeZone +  ' is: ' + currentTime.toString() + '</h1>',
        headers: {
                  'Content-Type': 'text/html; charset=utf-8',
    },
  });*/
  callback(null, {
      statusCode: '200',
      body: '<h1 style="color:#000080;">' + 'Welcome to re:Invent!<br/>' + 'new line' + '</h1>',
      headers: {
                'Content-Type': 'text/html; charset=utf-8',
  },
});
};

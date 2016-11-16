exports.handler = (event, context, callback) => {

    //var time = require('time');
    //var currentTime = new time.Date();

    //currentTime.setTimezone("America/Los_Angeles");

    /*callback(null, {
        statusCode: '200',
        body: '<h1 style="color:#000080;">' + currentTime.toString() + '</h1>',
        headers: {
                  'Content-Type': 'text/html; charset=utf-8',
    },
  });*/
  callback(null, {
      statusCode: '200',
      body: '<h1 style="color:#000080;">' + 'My test!' + '</h1>',
      headers: {
                'Content-Type': 'text/html; charset=utf-8',
  },
});
};

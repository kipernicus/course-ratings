var express = require('express');

var app = express();

app.use(express.static('dist'));
app.listen(3020, function() {
  console.log('Course Rater listening on port 3020!');
});
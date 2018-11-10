const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist/HelloWorld-Angular'));

app.get('*', function(req, res) {
// load the single view file (angular will handle the page changes on the front-end)
   res.sendFile("./dist/HelloWorld-Amgular/index.html", {"root": __dirname});
});

app.listen(port, function () {
  console.log('Angular app listening on port ' + port +'!');
});
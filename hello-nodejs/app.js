console.log("Hello World!\n");
app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
  });
app.listen(8080,function) {console.log(' Example app listening port 8080')}
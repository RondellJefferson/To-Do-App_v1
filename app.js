const express = require('express');
var bodyParser = require('body-parser');
const https = require("https");
const ejs = require('ejs');
const date = require(__dirname + "/date.js");
const app = express();
const port = 80;

console.log(date.getTheDate());

var items = [];
var workItems = [];

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => {

  var day = date.getTheDate();
  res.render("list", {listTitle:day, addNewItems:items});
});

app.get('/work', (req, res) => {
  res.render("list", {listTitle:"Work List", addNewItems:workItems});
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.post('/', (req, res) => {
  item = req.body.addItem;
  if (req.body.list == "Work"){
    workItem = req.body.addItem;
    workItems.push(workItem);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.post('/work', (req, res) => {
  workItem = req.body.addItem;
  workItems.push(workItem);
  res.redirect('/work');

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

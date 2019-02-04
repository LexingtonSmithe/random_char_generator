var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var builder = require('./builder.js');
var character = require('./character.js');
var utils = require('./utils.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // setup the router
app.use('/api', router);                    // route everything through /api
app.listen(port);                           // activate the server
console.log('The server is up and runing on port:' + port);


router.get('/health', function(req, res) {
    res.json({
      "Message": "Hooray! Welcome to our api it's up and running!",
   });
});


router.get('/generateCharacter', function(req, res) {

    var data = builder.CreateChar()
    res.json({
      data
   });
});

router.get('/rollStats', function(req, res) {
    var stats = {
            "Strength": utils.rollStatDie(4, 6, "Strength"),
            "Dexterity": utils.rollStatDie(4, 6, "Dexterity"),
            "Constitution": utils.rollStatDie(4, 6, "Constitution"),
            "Intelligence": utils.rollStatDie(4, 6, "Intelligence"),
            "Wisdom": utils.rollStatDie(4, 6, "Wisdom"),
            "Charisma": utils.rollStatDie(4, 6, "Charisma")
          }
    res.json({
      stats
    });
});

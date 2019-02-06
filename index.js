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

  var strength =  utils.rollStatDie(4, 6, "Strength");
  var dexterity = utils.rollStatDie(4, 6, "Dexterity");
  var constitution = utils.rollStatDie(4, 6, "Constitution");
  var intelligence = utils.rollStatDie(4, 6, "Intelligence");
  var wisdom = utils.rollStatDie(4, 6, "Wisdom");
  var charisma = utils.rollStatDie(4, 6, "Charisma");
    var stats = {
      "Ability Scores": {
        "Strength": strength,
        "Dexterity": dexterity,
        "Constitution": constitution,
        "Intelligence": intelligence,
        "Wisdom": wisdom,
        "Charisma": charisma,
        },
      "Skills" :{
        "Acrobatics": builder.CalculateModifer(dexterity),
        "Animal Handling": builder.CalculateModifer(wisdom),
        "Aracana": builder.CalculateModifer(intelligence),
        "Athletics": builder.CalculateModifer(strength),
        "Deception": builder.CalculateModifer(charisma),
        "History": builder.CalculateModifer(intelligence),
        "Insight": builder.CalculateModifer(wisdom),
        "Intimidation": builder.CalculateModifer(charisma),
        "Investigation": builder.CalculateModifer(intelligence),
        "Medicine": builder.CalculateModifer(wisdom),
        "Nature": builder.CalculateModifer(intelligence),
        "Perception": builder.CalculateModifer(wisdom),
        "Performance": builder.CalculateModifer(charisma),
        "Persuasion": builder.CalculateModifer(charisma),
        "Religion": builder.CalculateModifer(intelligence),
        "Sleight Of Hand": builder.CalculateModifer(dexterity),
        "Stealth": builder.CalculateModifer(dexterity),
        "Survival": builder.CalculateModifer(wisdom)
      }

    }
    res.json({
      stats
    });
});

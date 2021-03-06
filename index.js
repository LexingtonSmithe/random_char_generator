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
  let not_evil = req.query.no_evil || "true";
  let stat_generation = req.query.stat_generation || "standard_array";
  var data = builder.CreateChar(stat_generation, not_evil);
    res.json({
      data
   });
});
router.get('/generateCharacterLite', function(req, res) {
  let not_evil = req.query.no_evil || "true";
  let stat_generation = req.query.stat_generation || "standard_array";
  var data = builder.CreateChar(stat_generation, not_evil);
  data = {
      "Name": character.Name,
      "Race": {
        "Race": character.Race.Race,
        "Sub-Race": character.Race["Sub-Race"]
      },
      "Class": {
        "Class": character.Class.Class,
        "Sub-Class": character.Class["Sub-Class"],
      },
      "Background": character.Background.Name,
      "Appearance": character.Appearance,
      "Tool Proficiencies": character["Tool Proficiencies"],
      "Starting Equipment": character["Starting Equipment"],
  }
  res.json({
      data
  });
});
router.get('/rollStats', function(req, res) {
  let statArray = utils.rollStatDice();
  var strength =  statArray[0];
  var dexterity = statArray[1];
  var constitution = statArray[2];
  var intelligence = statArray[3];
  var wisdom = statArray[4];
  var charisma = statArray[5];

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

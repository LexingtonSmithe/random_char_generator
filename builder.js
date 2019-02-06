var exports = module.exports = {};
var request = require('sync-request');
var utils = require('./utils.js');
var character = require('./character.js');
var reset = require('./charTemplate.js');
var names = require('./Library/names.js');
var races = require('./Library/races.js');
var subraces = require('./Library/subraces.js');
var backgrounds = require('./Library/backgrounds.js');
var alignments = require('./Library/alignments.js');

var mainURL = 'http://dnd5eapi.co/api'
function generateEndpoint(path, param) {
    param = param || ''
    url = mainURL + path + param
    return url;
}

// variables
var skill_bonuses = []

exports.CreateChar = function(){
  resetCharacter();
  rollStats();
  chooseAlignment();
  chooseBackground();
  chooseRace();
  var c = getClasses();
  var s = chooseClass(c);
  getSkills();


  return character;
}

function chooseName(race){
  firstName = names[race].First_Names[utils.getRandomInt(0,names[race].First_Names.length)];
  lastName = names[race].Last_Names[utils.getRandomInt(0,names[race].Last_Names.length)];
  if(lastName != ""){
    lastName = " " + lastName
  }
  name = firstName + lastName;
  character.Name = name;
  return name;
}
function rollStats(){
  character["Ability Scores"].Strength += utils.rollStatDie(4, 6, "Strength");
  character["Ability Scores"].Dexterity += utils.rollStatDie(4, 6, "Dexterity");
  character["Ability Scores"].Constitution += utils.rollStatDie(4, 6, "Constitution");
  character["Ability Scores"].Intelligence += utils.rollStatDie(4, 6, "Intelligence");
  character["Ability Scores"].Wisdom += utils.rollStatDie(4, 6, "Wisdom");
  character["Ability Scores"].Charisma += utils.rollStatDie(4, 6, "Charisma");
}
function chooseAlignment(){
  character.Alignment = alignments[utils.getRandomInt(0, alignments.length)];
}
function chooseRace(race){
  var num = utils.getRandomInt(0, races.length);
  character.Race.Race = races[num].name
  chooseName(races[num].name);
  character.Race.Description = races[num].description
  character.Appearance.Age = utils.getRandomInt(races[num].min_age, races[num].max_age);
  character.Stats.Size = races[num].size;
  character.Stats.Speed = races[num].speed;
  character["Ability Scores"].Strength += races[num].ability_bonuses[0];
  character["Ability Scores"].Dexterity += races[num].ability_bonuses[1];
  character["Ability Scores"].Constitution += races[num].ability_bonuses[2];
  character["Ability Scores"].Intelligence += races[num].ability_bonuses[3];
  character["Ability Scores"].Wisdom += races[num].ability_bonuses[4];
  character["Ability Scores"].Charisma += races[num].ability_bonuses[5];

  if(races[num].starting_proficiencies.length){
    for(var j = 0; j < races[num].starting_proficiencies.length; j++) {
      var p = races[num].starting_proficiencies[j];
      if(p == "Versitility"){
        getRandomProficiencies();
      } else {
        character.Proficiencies.push(p);
      }
    }
  }
  if(races[num].skill_bonuses.length){
    for(var j = 0; j < races[num].skill_bonuses.length; j++) {
      var b = races[num].skill_bonuses[j];
      skill_bonuses.push(b);
    }
  }
  if(races[num].additional_languages){
    if(races[num].additional_languages.number == 1){
      character.Languages.push(races[num].additional_languages.languages[utils.getRandomInt(0,races[num].additional_languages.languages.length)])    }
  }
  for(var i = 0; i < races[num].languages.length; i++){
    character.Languages.push(races[num].languages[i]);
  }
  for(var i = 0; i < races[num].traits.length; i++){
    trait = races[num].traits[i];
    character.Race["Special Abilities"].push(trait);
  }
  if(races[num].subraces.length){
    var odds = utils.getRandomInt(0, 2);
    if(odds == 2){ // don't always get a subrace only do it 1/3 of the time
      var s_num = utils.getRandomInt(0,races[num].subraces.length);
      var subrace_name = races[num].subraces[s_num];
      getSubRace(subrace_name);
    } else {
      character.Race["Sub-Race"] = "None"
    }
  } else {
    character.Race["Sub-Race"] = "None"
  }
}
function getSubRace(subrace_name){
  var num = 0;
  console.log("Looking for subrace: " + subrace_name)
  for(var s = 0; s < subraces.length; s++){
    if(subraces[s].name === subrace_name){
      num = s;
      console.log("Found subrace name: " + subrace_name + " = " + subraces[num].name);
      character.Race["Sub-Race"] = subraces[num].name;
      character["Ability Scores"].Strength += subraces[num].ability_bonuses[0];
      character["Ability Scores"].Dexterity += subraces[num].ability_bonuses[1];
      character["Ability Scores"].Constitution += subraces[num].ability_bonuses[2];
      character["Ability Scores"].Intelligence += subraces[num].ability_bonuses[3];
      character["Ability Scores"].Wisdom += subraces[num].ability_bonuses[4];
      character["Ability Scores"].Charisma += subraces[num].ability_bonuses[5];

      if(subraces[num].starting_proficiencies) {
        for(var i = 0; i < subraces[num].starting_proficiencies.length; i++){
          var p = subraces[num].starting_proficiencies[i];
          character.Proficiencies.push(p);
        }
      }
      if(subraces[num].traits) {
        for(var i = 0; i < subraces[num].traits.length; i++){
          var trait = subraces[num].traits[i];
          if(trait == "choose_one"){
            trait = subraces[num].traits[i].choose_one[utils.getRandomInt(0, subraces[num].traits[i].choose_one.length)]
          }
          character.Race["Special Abilities"].push(trait);
        }
      }
      if(subraces[num].skill_bonuses) {
        for(var i = 0; i < subraces[num].skill_bonuses.length; i++){
          var b = subraces[num].skill_bonuses[i];
          skill_bonuses.push(b);
        }
      }
      if(subraces[num].languages){
        for(var i = 0; i < subraces[num].languages.length; i++){
          character.Languages.push(subraces[num].languages[i]);
        }
      }
      if(subraces[num].additional_languages){
        if(subraces[num].additional_languages.number == 1){
          character.Languages.push(subraces[num].additional_languages.languages[utils.getRandomInt(0,subraces[num].additional_languages.languages.length)])
        }
      }
      break;
    }
  }
}
function chooseBackground(){
  var background_choice = utils.getRandomInt(0, backgrounds.length);
  for(var j = 0; j < backgrounds[background_choice].Bonuses.length; j++) {
    var b = backgrounds[background_choice].Bonuses[j];
    skill_bonuses.push(b);
  }
  character.Background.Name = backgrounds[background_choice].Name;
  character.Background.Description = backgrounds[background_choice].Description;
  character.Personality["Personality Trait"] = backgrounds[background_choice]["Personality Trait"][utils.rollDie(1, 8)];
  character.Personality.Ideals = backgrounds[background_choice].Ideals[utils.rollDie(1, 6)];
  character.Personality.Bond = backgrounds[background_choice].Bond[utils.rollDie(1, 6)];
  character.Personality.Flaws = backgrounds[background_choice].Flaws[utils.rollDie(1, 6)];
}
function getClasses(){
  var req = request('GET', generateEndpoint('/classes'))
  var response = JSON.parse(req.body);
  var races = response.results;
  var num = utils.getRandomInt(0,races.length) + 1;
  return num;
}
function chooseClass(num){
  var req = request('GET', generateEndpoint('/classes/' + num))
  var response = JSON.parse(req.body);
  character.Class.Class = response.name;
  console.log("Chosen Class: " + response.name);
  var subclass_number = false;
  if(response.subclasses.length > 0){
    var num = utils.getRandomInt(0,response.subclasses.length);
    var str = response.subclasses[num].url;
    console.log("Chosen Sub-Class: " + response.subclasses[num].name);
    var test_string = "http://www.dnd5eapi.co/api/subclasses/1"
    if(str.length > test_string.length){
      var a = str.charAt(str.length-2);
      var b = str.charAt(str.length-1);
      subclass_number =("" + a + b);
    } else{
      var subclass_number = str.charAt(str.length-1);
    }
  }
  return subclass_number;
}
function getSubClass(num){
  var req = request('GET', generateEndpoint('/subclasses/' + num))
  var response = JSON.parse(req.body);
  character.Class["Sub-Class"] = response.name;
  return true;
}
function getSkills(){
  calculateBonuses();
}
function calculateBonuses(){
  // once the class bonuses have been added to the array remove duplicates and then add each skills prof modifier
  console.log("Bonuses: " + skill_bonuses);
}

function getRandomProficiencies(){
  var arr = [
    "Acrobatics",
    "Animal Handling",
    "Aracana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight Of Hand",
    "Stealth",
    "Survival"
  ]
  for(var p = 0; p < 2; p++){
    var n = getRandomInt(0,arr.length)
    b = arr[n]
    skill_bonuses.push(b)
    arr.splice(n, 1);
  }
}


function resetCharacter(){
  character = reset;
  skill_bonuses = []
  character.Race["Special Abilities"] = []
  character["Ability Scores"].Strength = 0;
  character["Ability Scores"].Dexterity = 0;
  character["Ability Scores"].Constitution = 0;
  character["Ability Scores"].Intelligence = 0;
  character["Ability Scores"].Wisdom = 0;
  character["Ability Scores"].Charisma = 0;
  character.Proficiencies = [];
  character.Languages = [];
}

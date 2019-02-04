var exports = module.exports = {};
var request = require('sync-request');
var character = require('./character.js');
var utils = require('./utils.js');
var names = require('./names.js');
var reset = require('./charTemplate.js');
var backgrounds = require('./backgrounds.js');
var alignments = require('./alignments.js');
var mainURL = 'http://dnd5eapi.co/api'
function generateEndpoint(path, param) {
    param = param || ''
    url = mainURL + path + param
    return url;
}

// variables
const skill_bonuses = []

exports.CreateChar = function(){
  resetCharacter();
  getStats();
  getAlignment();
  getBackground();
  var classNumber = getClasses();
  var subclassNumber = chooseClass(classNumber);
  if(subclassNumber){
      var subRace = getSubClass(subclassNumber);
  }
  getSkills();
  var raceNumber = getRaces();
  var subRaceNumber = chooseRace(raceNumber);
  if(subRaceNumber) {
    var subRace = getSubRace(subRaceNumber);
  }

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
function getStats(){
  character["Ability Scores"].Strength += utils.rollStatDie(4, 6, "Strength");
  character["Ability Scores"].Dexterity += utils.rollStatDie(4, 6, "Dexterity");
  character["Ability Scores"].Constitution += utils.rollStatDie(4, 6, "Constitution");
  character["Ability Scores"].Intelligence += utils.rollStatDie(4, 6, "Intelligence");
  character["Ability Scores"].Wisdom += utils.rollStatDie(4, 6, "Wisdom");
  character["Ability Scores"].Charisma += utils.rollStatDie(4, 6, "Charisma");
}
function getAlignment(){
  character.Alignment = alignments[utils.getRandomInt(0, alignments.length)];
}
function getRaces(){
  var req = request('GET', generateEndpoint('/races'))
  var response = JSON.parse(req.body);
  var races = response.results;
  var num = utils.getRandomInt(0,races.length) + 1;
  return num;
}
function chooseRace(race){
  var race_req = request('GET', generateEndpoint('/races/' + race))
  var race_response = JSON.parse(race_req.body);
  character.Race.Race = race_response.name;
  var n = chooseName(race_response.name);
  console.log("Name:" + n)
  console.log("Race Name: " + race_response.name);
  // This applies to racial skill proficiency bonuses such as 'Intimidation'
  if(race_response.starting_proficiencies.length){
    for(var j = 0; j < race_response.starting_proficiencies.length; j++) {
      var b = race_response.starting_proficiencies[j].name;
      addBonus(b);
    }
  }
  for(var i = 0; i < race_response.languages.length; i++){
    character.Languages.push(race_response.languages[i].name);
    console.log("Adding Language: " + race_response.languages[i].name);
  }
  for(var i = 0; i < race_response.traits.length; i++){
    var trait_name = race_response.traits[i].name;
    if(trait_name.includes("Darkvision")){
      trait_name = "Darkvision";
    };
    if(trait_name){
      addTrait(trait_name);
    };
  }
  character.Stats.Speed = race_response.speed;
  character["Ability Scores"].Strength += race_response.ability_bonuses[0];
  character["Ability Scores"].Dexterity += race_response.ability_bonuses[1];
  character["Ability Scores"].Constitution += race_response.ability_bonuses[2];
  character["Ability Scores"].Intelligence += race_response.ability_bonuses[3];
  character["Ability Scores"].Wisdom += race_response.ability_bonuses[4];
  character["Ability Scores"].Charisma += race_response.ability_bonuses[5];
  character.Race.Description = race_response.size_description;

  var subrace_number = false;
  if(race_response.subraces.length > 0){
    var num = utils.getRandomInt(0,race_response.subraces.length);
    var str = race_response.subraces[num].url;
    var subrace_number = str.charAt(str.length-1);
  }
  return subrace_number;
}
function getSubRace(subrace_number){
  var sub_req = request('GET', generateEndpoint('/subraces/' + subrace_number));
  var sub_response = JSON.parse(sub_req.body);
  if(sub_response){
    character.Race["Sub-Race"] = sub_response.name;
    character["Ability Scores"].Strength += sub_response.ability_bonuses[0];
    character["Ability Scores"].Dexterity += sub_response.ability_bonuses[1];
    character["Ability Scores"].Constitution += sub_response.ability_bonuses[2];
    character["Ability Scores"].Intelligence += sub_response.ability_bonuses[3];
    character["Ability Scores"].Wisdom += sub_response.ability_bonuses[4];
    character["Ability Scores"].Charisma += sub_response.ability_bonuses[5];
    if(sub_response.starting_proficiencies) {
      for(var i = 0; i < sub_response.starting_proficiencies.length; i++){
        var b = race_response.starting_proficiencies[i].name;
        addBonus(b);
      }
    }
    if(sub_response.racial_traits) {
      for(var i = 0; i < sub_response.racial_traits.length; i++){
        var trait_name = sub_response.racial_traits[i].name;
        if(trait_name.includes("Darkvision")){
          trait_name = "Darkvision";
        }
        if(trait_name){
          addTrait(trait_name);
        }
      }
    }
  } else {
    character.Race["Sub-Race"] = "None";
  }
  return true;
}
function addTrait(name) {
  var t_req = request('GET', generateEndpoint('/traits'));
  var t_res = JSON.parse(t_req.body);
  console.log("Looking for trait: " + name);
  var url_num = false;
  var trait = {};
  for(var i = 0; i < t_res.results.length; i ++){
    if(t_res.results[i].name.includes(name)){
      var t_str = t_res.results[i].url;
      if(i > 8) {
        var a = t_str.charAt(t_str.length-2);
        var b = t_str.charAt(t_str.length-1);
        url_num =("" + a + b);
      } else {
        url_num = t_str.charAt(t_str.length-1);
      }
      break;
    }
  }

  if(url_num) {
    trait = getTrait(url_num);
    character.Race["Special Abilities"].push(trait);
  } else {
    console.log("Unable to find trait: " + name);
  }
  return true;
}
function getTrait(num){
  var t_d_req = request('GET', generateEndpoint('/traits/' + num));
  var t_d_res = JSON.parse(t_d_req.body);
  var t_n = t_d_res.name;
  var t_d = t_d_res.desc[0];
  var trait = {
    "Name": t_n,
    "Description": t_d
  };
  return trait;
}
function getBackground(){
  var background_choice = utils.getRandomInt(0, backgrounds.length);
  for(var j = 0; j < backgrounds[background_choice].Bonuses.length; j++) {
    var b = backgrounds[background_choice].Bonuses[j];
    addBonus(b);
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
  console.log("Bonuses: " + skill_bonuses);
}
function addBonus(bonus){
  if(bonus.includes("Skill:")){
    bonus = bonus.slice(7);
    skill_bonuses.push(bonus);
  } else {
    character.Proficiencies.push(bonus);
  }
}


function resetCharacter(){
  character = reset;
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

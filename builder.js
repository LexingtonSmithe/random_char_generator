var exports = module.exports = {};
var request = require('sync-request');
var character = require('./character.js');
var utils = require('./utils.js');
var names = require('./names.js');
var reset = require('./charTemplate.js');

var mainURL = 'http://dnd5eapi.co/api'
function generateEndpoint(path, param) {
    param = param || ''
    url = mainURL + path + param
    return url;
}

exports.CreateChar = function(){
  resetCharacter();
  getStats();
  getAlignment();
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
  var align = [
    {
      "Alignment": "Lawful Good",
      "Description": "You act as a good person is expected or required to act. You combine a commitment to opposing evil with the discipline to fight relentlessly. You tells the truth, keep your word, helps those in need, and speaks out against injustice."
    },
    {
      "Alignment": "Neutral Good",
      "Description": "You do the best you can to help people according to their needs. You responds well to higher authority until that authority attempts to use the law to hamper your ability to do good. You are trustful of organizations as long as they serve your utilitarian purpose. You will follow the law unless more good can come from breaking the law"
    },
    {
      "Alignment": "Chaotic Good",
      "Description": "You act as your conscience directs you with little regard for what others expect of you. You makes your own way, but you're kind and benevolent. You believe in goodness and right but you has little use for laws and regulations. You hates it when people try to intimidate others and tell them what to do. You follow your own moral compass, which, although good, may not agree with that of society"
    },
    {
      "Alignment": "Lawful Neutral",
      "Description": "You act as law, tradition, or a personal code direct you. Order and organization are paramount to you. You may believe in personal order and live by a code or standard, or you may believe in order for all and favor a strong, organized government.  It is your view that law and order give purpose and meaning to everything. Without regimentation and strict definition, there would be no purpose in the cosmos. Therefore, whether a law is good or evil is of no import as long as it brings order and meaning"
    },
    {
      "Alignment": "True Neutral",
      "Description": "You do what seems to be a good idea. You doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Mostly you exhibit a lack of conviction or bias rather than a commitment to neutrality. Ulimately you think of good as better than evil-after all, as you would rather have good neighbors and rulers than evil ones. Still, you're not personally committed to upholding good in any abstract or universal way"
    },
    {
      "Alignment": "Chaotic Neutral",
      "Description": "You follows your whims. You're an individualist first and last. You values your own liberty but don't strive to protect others' freedom. You avoid authority, resent restrictions, and challenge traditions. You do not intentionally disrupt organizations as part of a campaign of anarchy. To do so, you would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). You may be unpredictable, but your behavior is not totally random"
    },
    {
      "Alignment": "Lawful Evil",
      "Description": "You methodically takes what you wants within the limits of your code of conduct without regard for whom it hurts. You cares about tradition, loyalty, and order but not about freedom, dignity, or life. You play by the rules but without mercy or compassion. You are comfortable in a hierarchy and would like to rule, but are willing to serve. Ypu condemn others not according to their actions but according to race, religion, homeland, or social rank. You're is loath to break laws or promises."
    },
    {
      "Alignment": "Neutral Evil",
      "Description": "You do whatever you can get away with. You're out for yourself, pure and simple. You sheds no tears for those you kills, whether for profit, sport, or convenience. You have no love of order and holds no illusion that following laws, traditions, or codes would make you any better or more noble. On the other hand, you don't have the restless nature or love of conflict that a chaotic evil villain has."
    },
    {
      "Alignment": "Chaotic Evil",
      "Description": "You do whatever your greed, hatred, and lust for destruction drive you to do. You are hot-tempered, vicious, arbitrarily violent, and unpredictable. If you're simply out for whatever you can get, you are ruthless and brutal. If you are committed to the spread of evil and chaos, you are even worse. Thankfully, your plans are haphazard, and any groups you joins or form are poorly organized. Typically, you can only be made to work together only by force, and your leader lasts only as long as they can thwart attempts to topple or assassinate them."
    }
  ]
  character.Alignment = align[utils.getRandomInt(0, align.length)];
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


  for(var i = 0; i < race_response.languages.length; i++){
    character.Languages.push(race_response.languages[i].name);
    console.log("Adding Language: " + race_response.languages[i].name);
  }
  for(var i = 0; i < race_response.starting_proficiencies.length; i++){
    character.Proficiencies.push(race_response.starting_proficiencies[i].name);
    console.log("Adding Proficiency: " + race_response.starting_proficiencies[i].name);
  }
  for(var i = 0; i < race_response.traits.length; i++){
    var trait_name = race_response.traits[i].name;
    if(trait_name.includes("Darkvision")){
      trait_name = "Darkvision";
    }
    var trait_description = getTrait(trait_name)
    var trait = {
      "Name": trait_name,
      "Description": trait_description
    };
    character.Race["Special Abilities"].push(trait);
  }
  character.Speed = race_response.speed;
  character["Ability Scores"].Strength += race_response.ability_bonuses[0];
  character["Ability Scores"].Dexterity += race_response.ability_bonuses[1];
  character["Ability Scores"].Constitution += race_response.ability_bonuses[2];
  character["Ability Scores"].Intelligence += race_response.ability_bonuses[3];
  character["Ability Scores"].Wisdom += race_response.ability_bonuses[4];
  character["Ability Scores"].Charisma += race_response.ability_bonuses[5];
  console.log("Racial Strength Bonus: " + race_response.ability_bonuses[0]);
  console.log("Racial Dexterity Bonus: " + race_response.ability_bonuses[1]);
  console.log("Racial Constitution Bonus: " + race_response.ability_bonuses[2]);
  console.log("Racial Intelligence Bonus: " + race_response.ability_bonuses[3]);
  console.log("Racial Wisdom Bonus: " + race_response.ability_bonuses[4]);
  console.log("Racial Charisma Bonus: " + race_response.ability_bonuses[5]);
  //character.Race."Special Abilities" = race_special_ablities;
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
    character.Race["Sub Race"] = sub_response.name;
    character["Ability Scores"].Strength += sub_response.ability_bonuses[0];
    character["Ability Scores"].Dexterity += sub_response.ability_bonuses[1];
    character["Ability Scores"].Constitution += sub_response.ability_bonuses[2];
    character["Ability Scores"].Intelligence += sub_response.ability_bonuses[3];
    character["Ability Scores"].Wisdom += sub_response.ability_bonuses[4];
    character["Ability Scores"].Charisma += sub_response.ability_bonuses[5];
    console.log("Racial Strength Bonus: " + sub_response.ability_bonuses[0]);
    console.log("Racial Dexterity Bonus: " + sub_response.ability_bonuses[1]);
    console.log("Racial Constitution Bonus: " + sub_response.ability_bonuses[2]);
    console.log("Racial Intelligence Bonus: " + sub_response.ability_bonuses[3]);
    console.log("Racial Wisdom Bonus: " + sub_response.ability_bonuses[4]);
    console.log("Racial Charisma Bonus: " + sub_response.ability_bonuses[5]);
    if(sub_response.starting_proficiencies) {
      for(var i = 0; i < sub_response.starting_proficiencies.length; i++){
        character.Proficiencies.push(sub_response.starting_proficiencies[i].name);
        console.log("Adding Proficiency: " + sub_response.starting_proficiencies[i].name);
      }
    }
  }
  return true;
}
function getTrait(name) {
  var t_req = request('GET', generateEndpoint('/traits'));
  var t_res = JSON.parse(t_req.body);
  console.log("Looking for trait: " + name);
  var url_num = 0;
  var description = "";
  for(var i = 0; i < t_res.results.length; i ++){
    if(t_res.results[i].name.includes(name)){
      var t_str = t_res.results[i].url;
      if(i > 8) {
        url_num = t_str.charAt(t_str.length-2);
        url_num = url_num + t_str.charAt(t_str.length-1);
      } else {
        url_num = t_str.charAt(t_str.length-1);
      }
      break;
    }
  }

  if(url_num != 0) {
    description = getTraitDescription(url_num);
  } else {
    console.log("Unable to find trait: " + name);
  }
  return description;
}
function getTraitDescription(num){
  var t_d_req = request('GET', generateEndpoint('/traits/' + num));
  var t_d_res = JSON.parse(t_d_req.body);
  var t_d = t_d_res.desc[0];
  return t_d;
}


function getBackground(){

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

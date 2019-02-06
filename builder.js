var exports = module.exports = {};
var request = require('sync-request');
var utils = require('./utils.js');
var character = require('./character.js');
var reset = require('./charTemplate.js');
var names = require('./Library/names.js');
var races = require('./Library/races.js');
var subraces = require('./Library/subraces.js');
var classes = require('./Library/classes.js');
var subclasses = require('./Library/subclasses.js');
var backgrounds = require('./Library/backgrounds.js');
var alignments = require('./Library/alignments.js');
var appearances = require('./Library/appearances.js');

var mainURL = 'http://dnd5eapi.co/api'
function generateEndpoint(path, param) {
    param = param || ''
    url = mainURL + path + param
    return url;
}

// variables
var skill_bonuses = [];
var save_proficiencies = [];

exports.CreateChar = function(){
  console.log("-----------------------------------------");
  console.log("----------- Creating new character ------");
  resetCharacter();
  console.log("----------- Rolling Stats ---------------");
  rollStats();
  console.log("----------- Choosing Alignment ----------");
  chooseAlignment();
  console.log("----------- Choosing Background ---------");
  chooseBackground();
  console.log("----------- Choosing Race ---------------");
  chooseRace();
  console.log("----------- Choosing Class --------------");
  chooseClass();
  console.log("----------- Choosing Appearance ---------");
  chooseAppearance();
  console.log("----------- Calculating Skills ----------");
  getSkills();
  console.log("----------- Calculating Proficiencies ---");
  calculateProficiencyBonuses();
  console.log("----------- Calculating Saves -----------");
  getSavingThrows();
  console.log("----------- Calculating Health ----------");
  getHealth();
  console.log("-----------------------------------------");
  return character;
};

function chooseName(race){
  firstName = names[race].First_Names[utils.getRandomInt(0,names[race].First_Names.length)];
  lastName = names[race].Last_Names[utils.getRandomInt(0,names[race].Last_Names.length)];
  if(lastName != ""){
    lastName = " " + lastName
  }
  name = firstName + lastName;
  character.Name = name;
  return name;
};
function rollStats(){
  character["Ability Scores"].Strength += utils.rollStatDie(4, 6, "Strength");
  character["Ability Scores"].Dexterity += utils.rollStatDie(4, 6, "Dexterity");
  character["Ability Scores"].Constitution += utils.rollStatDie(4, 6, "Constitution");
  character["Ability Scores"].Intelligence += utils.rollStatDie(4, 6, "Intelligence");
  character["Ability Scores"].Wisdom += utils.rollStatDie(4, 6, "Wisdom");
  character["Ability Scores"].Charisma += utils.rollStatDie(4, 6, "Charisma");
};
function chooseAlignment(){
  character.Alignment = alignments[utils.getRandomInt(0, alignments.length)];
};
function chooseRace(race){
  var num = utils.getRandomInt(0, races.length);
  character.Race.Race = races[num].name
  chooseName(races[num].name);
  character.Race.Description = races[num].description
  character.Appearance.Age = utils.getRandomInt(races[num].min_age, races[num].max_age) + " years old";
  character.Appearance.Height = utils.getRandomInt(races[num].min_height, races[num].max_height) + "ft " + utils.getRandomInt(0,7) + " inches";
  character.Appearance.Weight = utils.getRandomInt(races[num].min_weight, races[num].max_weight) + "kg";
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
        var choose = 2;
        var v_arr = [
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
        console.log("Versitile Elf");
        getRandomProficiencies(choose, v_arr);
      } else {
        character.Proficiencies.push(p);
      }
    }
  }
  if(races[num].skill_bonuses.length){
    for(var j = 0; j < races[num].skill_bonuses.length; j++) {
      var b = races[num].skill_bonuses[j];
      skill_bonuses.push(b);
      console.log("Proficiency list updated from races: " + b)
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
    character["Racial Abilities"].push(trait);
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
};
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
          character["Racial Abilities"].push(trait);
        }
      }
      if(subraces[num].choose_one){
        trait = subraces[num].choose_one[utils.getRandomInt(0, subraces[num].choose_one.length)]
      }
      if(subraces[num].skill_bonuses) {
        for(var i = 0; i < subraces[num].skill_bonuses.length; i++){
          var b = subraces[num].skill_bonuses[i];
          skill_bonuses.push(b);
          console.log("Proficiency list updated from subraces: " + b)
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
};
function chooseBackground(){
  var background_choice = utils.getRandomInt(0, backgrounds.length);
  for(var j = 0; j < backgrounds[background_choice].Bonuses.length; j++) {
    var b = backgrounds[background_choice].Bonuses[j];
    skill_bonuses.push(b);
    console.log("Proficiency list updated from background: " + b)
  }
  character.Background.Name = backgrounds[background_choice].Name;
  character.Background.Description = backgrounds[background_choice].Description;
  character.Personality["Personality Trait"] = backgrounds[background_choice]["Personality Trait"][utils.rollDie(1, 8)];
  character.Personality.Ideals = backgrounds[background_choice].Ideals[utils.rollDie(1, 6)];
  character.Personality.Bond = backgrounds[background_choice].Bond[utils.rollDie(1, 6)];
  character.Personality.Flaws = backgrounds[background_choice].Flaws[utils.rollDie(1, 6)];
};
function chooseClass(){
  var num = utils.getRandomInt(0, classes.length);
  character.Class.Class = classes[num].name;
  character.Class.Description = classes[num].description;
  character.Class["Primary Ability"] = classes[num].primary_ability
  character.Stats["Hit Die"] = classes[num].hit_die;
  if(classes[num].proficiency_choices){
    var p_c = classes[num].proficiency_choices.how_many;
    var p_arr = classes[num].proficiency_choices.choices;
    console.log("Adding proficiencies from class");
    getRandomProficiencies(p_c, p_arr);
  };
  if(classes[num].traits.length){
    for(var j = 0; j < classes[num].traits.length; j++){
      trait = classes[num].traits[j];
      character["Class Abilities"].push(trait);
    };
  };
  if(classes[num].choose_one){
    var c_trait = classes[num].choose_one[utils.getRandomInt(0, classes[num].choose_one.length)];
    character["Class Abilities"].push(c_trait);
  }
  for(var s = 0; s < classes[num].saving_throws.length; s++){
    save_proficiencies.push(classes[num].saving_throws);
  };
  if(classes[num].starting_proficiencies.length){
    for(var j = 0; j < classes[num].starting_proficiencies.length; j++) {
      var p = classes[num].starting_proficiencies[j];
      character.Proficiencies.push(p);
    }
  };
  if(classes[num].spellcasting.Modifier){
    var mod = classes[num].spellcasting.modifier;
    character["Spell Casting"].Modifier = mod;
    character["Spell Casting"]["Spell save DC"] = 8 + character.Stats["Proficieny Bonus"] + module.exports.CalculateModifer(getAbilityScore(mod));
    character["Spell Casting"]["Spell attack modifier"] = character.Stats["Proficieny Bonus"] + module.exports.CalculateModifer(getAbilityScore(mod));
    character["Spell Casting"].Cantrips = classes[num].spellcasting.cantrips;
    character["Spell Casting"]["First level slots"] = classes[num].spellcasting.first_level_slots;
    character["Spell Casting"]["First level known"] = classes[num].spellcasting.first_level_known;
  };
  if(classes[num].subclasses.length){
    var odds = utils.getRandomInt(0, 2);
    if(odds == 2){ // don't always get a subclasses only do it 1/3 of the time
      var c_num = utils.getRandomInt(0,classes[num].subclasses.length);
      var subclasses_name = classes[num].subclasses[c_num];
      getSubClass(subclasses_name);
    } else {
      character.Class["Sub-Class"] = "None"
    }
  } else {
    character.Class["Sub-Class"] = "None"
  }
};
function getSubClass(num){

};
function getSkills(){
  character.Skills.Acrobatics = module.exports.CalculateModifer(getAbilityScore("Dexterity"));
  character.Skills["Animal Handling"] = module.exports.CalculateModifer(getAbilityScore("Wisdom"));
  character.Skills.Aracana = module.exports.CalculateModifer(getAbilityScore("Intelligence"));
  character.Skills.Athletics = module.exports.CalculateModifer(getAbilityScore("Strength"));
  character.Skills.Deception = module.exports.CalculateModifer(getAbilityScore("Charisma"));
  character.Skills.History = module.exports.CalculateModifer(getAbilityScore("Intelligence"));
  character.Skills.Insight = module.exports.CalculateModifer(getAbilityScore("Wisdom"));
  character.Skills.Intimidation = module.exports.CalculateModifer(getAbilityScore("Charisma"));
  character.Skills.Investigation = module.exports.CalculateModifer(getAbilityScore("Intelligence"));
  character.Skills.Medicine = module.exports.CalculateModifer(getAbilityScore("Wisdom"));
  character.Skills.Nature = module.exports.CalculateModifer(getAbilityScore("Intelligence"));
  character.Skills.Perception = module.exports.CalculateModifer(getAbilityScore("Wisdom"));
  character.Skills.Performance = module.exports.CalculateModifer(getAbilityScore("Charisma"));
  character.Skills.Persuasion = module.exports.CalculateModifer(getAbilityScore("Charisma"));
  character.Skills.Religion = module.exports.CalculateModifer(getAbilityScore("Intelligence"));
  character.Skills["Sleight Of Hand"] = module.exports.CalculateModifer(getAbilityScore("Dexterity"));
  character.Skills.Stealth = module.exports.CalculateModifer(getAbilityScore("Dexterity"));
  character.Skills.Survival = module.exports.CalculateModifer(getAbilityScore("Wisdom"));
};
function calculateProficiencyBonuses(){
  for(var c = 0; c < skill_bonuses.length; c++){
    var skill_name = skill_bonuses[c];
    console.log("Adding proficiency bonus for: " + skill_name);
    character.Skills[skill_name] += character.Stats["Proficieny Bonus"];
  }
};
function chooseAppearance(){
  character.Appearance.Eyes = appearances.eyes[utils.getRandomInt(0, appearances.eyes.length)]
  character.Appearance.Hair = appearances.hair_colour[utils.getRandomInt(0, appearances.hair_colour.length)] + " - " + appearances.hair_style[utils.getRandomInt(0, appearances.hair_style.length)]
  character.Appearance.Skin = appearances.skin[utils.getRandomInt(0, appearances.skin.length)]
  var scar_odds = utils.getRandomInt(0,5);
  if(scar_odds == 1){
    character.Appearance.Scars = appearances.scars[utils.getRandomInt(0, appearances.scars.length)]
  } else {
    character.Appearance.Scars = "None"
  }
  var marks_odds = utils.getRandomInt(0,5);
  if(marks_odds == 1){
    character.Appearance["Distinguishing Marks"] = appearances.distinguishing_marks[utils.getRandomInt(0, appearances.distinguishing_marks.length)]
  } else {
    character.Appearance["Distinguishing Marks"] = "None"
  }

};
function getSavingThrows(){
  character["Saving Throws"].Strength = module.exports.CalculateModifer(getAbilityScore("Strength"));
  character["Saving Throws"].Dexterity = module.exports.CalculateModifer(getAbilityScore("Dexterity"));
  character["Saving Throws"].Constitution = module.exports.CalculateModifer(getAbilityScore("Constitution"));
  character["Saving Throws"].Intelligence = module.exports.CalculateModifer(getAbilityScore("Intelligence"));
  character["Saving Throws"].Wisdom = module.exports.CalculateModifer(getAbilityScore("Wisdom"));
  character["Saving Throws"].Charisma = module.exports.CalculateModifer(getAbilityScore("Charisma"));
  for(var s = 0; s < save_proficiencies.length; s++){
    var s_name = save_proficiencies[s];
    character["Saving Throws"][s_name] += character.Stats["Proficiency Bonus"];
  }
};
function getHealth(){
  character.Stats["Max Health"] = character.Stats["Hit Die"] + module.exports.CalculateModifer(getAbilityScore("Constitution"))
  if(character["Racial Abilities"].length){
    for(var i = 0; i < character["Racial Abilities"].length; i++){
      if(character["Racial Abilities"][i].name == "Dwarven Toughness"){
        character.Stats["Max Health"] += 1;
        console.log("That's a tough lookin Dwarf!");
      }
    }
  }
};
function getRandomProficiencies(number_to_pick, array_of_options){
  // get rid of all of the things we are already proficient in to prevent wasted picks
  for(var k = 0; k < array_of_options.length; k++){
    for(var b = 0; b < skill_bonuses.length; b++){
      if(array_of_options[k] == skill_bonuses[b]){
        console.log("Removing duplicate from list of options: " + array_of_options[k]);
        array_of_options.splice(k, 1)
      }
    }
  }
  // then add random ones to the skill_bonuses list
  for(var i = 0; i < number_to_pick; i++){
      var choice = utils.getRandomInt(0, array_of_options.length);
      var b = array_of_options[choice]
      skill_bonuses.push(b)
      console.log("Proficiency list updated from list of options: " + b)
      array_of_options.splice(choice, 1);
  }
};
function getAbilityScore(ability){
  var score = character["Ability Scores"][ability];
  return score;
};
exports.CalculateModifer = function(ability_score){
  var mod = 0;
  switch(ability_score){
    case 1:
      mod = -5;
    break;
    case 2:
      mod = -4;
    break;
    case 3:
      mod = -4;
    break;
    case 4:
      mod = -3;
    break;
    case 5:
      mod = -3;
    break;
    case 6:
      mod = -2;
    break;
    case 7:
      mod = -2;
    break;
    case 8:
      mod = -1;
    break;
    case 9:
      mod = -1;
    break;
    case 12:
      mod = 1;
    break;
    case 13:
      mod = 1;
    break;
    case 14:
      mod = 2;
    break;
    case 15:
      mod = 2;
    break;
    case 16:
      mod = 3;
    break;
    case 17:
      mod = 3;
    break;
    case 18:
      mod = 4;
    break;
    case 19:
      mod = 4;
    break;
    case 20:
      mod = 5;
    break;
  };
  return mod;
};

function resetCharacter(){
  character = reset;
  skill_bonuses = [];
  save_proficiencies = [];
  character["Racial Abilities"] = [];
  character["Class Abilities"] = [];
  character["Ability Scores"].Strength = 0;
  character["Ability Scores"].Dexterity = 0;
  character["Ability Scores"].Constitution = 0;
  character["Ability Scores"].Intelligence = 0;
  character["Ability Scores"].Wisdom = 0;
  character["Ability Scores"].Charisma = 0;
  character.Proficiencies = [];
  character.Languages = [];
};

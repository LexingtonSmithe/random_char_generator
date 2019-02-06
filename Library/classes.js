module.exports = [
  // barbarian
  {
    "name": "Barbarian",
    "description": "",
    "primary_ability": "Strength",
    "hit_die": 12,
    "starting_proficiencies": [
      "Light Armour",
      "Medium Armour",
      "Shields",
      "Simple Weapons",
      "Martial Weapons"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Animal Handling",
        "Athletics",
        "Intimidation",
        "Nature",
        "Perception",
        "Survival"
      ]
    },
    "traits": [
      {
        "name": "Rage",
        "description": "On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor: You have advantage on all Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can't cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
      },
      {
        "name": "Unarmoured Defence",
        "description": "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
      }
    ],
    "spellcasting":{},
    "saving_throws": [
      "Strength",
      "Constitution"
    ],
    "starting_equipment": {

    },
    "subclasses": [
      "Beserker"
    ]
  },
  // bard
  {
    "name": "Bard",
    "description": "",
    "primary_ability": "Charisma",
    "hit_die": 8,
    "starting_proficiencies": [
      "Light Armour",
      "Simple Weapons",
      "Longswords",
      "Rapiers",
      "Shortswords",
      "Crossbows (1-hand)"
    ],
    "proficiency_choices": {
      "how_many": 3,
      "choices": [
        "Acrobatics",
        "Animal Handling",
        "Arcana",
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
        "Survival",
      ]
    },
    "traits": [
      {
        "name": "Bardic Inspiration",
        "description": "You can use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
      }
    ],
    "spellcasting":{
      "modifier": "Charisma",
      "cantrips": 2,
      "first_level_slots": 2,
      "first_level_known": 4
    },
    "saving_throws": [
      "Dexterity",
      "Charisma"
    ],
    "subclasses": []
  },
  // cleric
  {
    "name": "Cleric",
    "description": "",
    "primary_ability": "Wisdom",
    "hit_die": 8,
    "starting_proficiencies": [
      "Light Armour",
      "Medium Armour",
      "Shields",
      "Simple Weapons"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "History",
        "Insight",
        "Medicine",
        "Persuasion",
        "Religion"
      ]
    },
    "traits": [],
    "spellcasting":{
      "modifier": "Wisdom",
      "cantrips": 2,
      "first_level_slots": 2,
      "first_level_known": "All Cleric Spells"
    },
    "saving_throws": [
      "Wisdom",
      "Charisma"
    ],
    "subclasses": [
      "Life",
      "Light",
      "Knowledge",
      "Nature",
      "Tempest",
      "Trickery",
      "War"
    ]
  },
  // druid
  {
    "name": "Druid",
    "description": "",
    "primary_ability": "Druid",
    "hit_die": 8,
    "starting_proficiencies": [
      "Light Armour",
      "Medium Armour (Non Metal)",
      "Shields (Non Metal)",
      "Clubs",
      "Daggers",
      "Darts",
      "Javelins",
      "Maces",
      "Quarterstaffs",
      "Sickles",
      "Slings",
      "Spears"
    ],
    "proficiency_choices": {
      "how_many": 3,
      "choices": [
        "Animal Handling",
        "Arcana",
        "Insight",
        "Medicine",
        "Nature",
        "Perception",
        "Religion",
        "Survival"
      ]
    },
    "traits": [
      {
        "name": "Druidic",
        "description": "You know Druidic, the secret lanugage of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom check but can't decipher it without magic"
      }
    ],
    "spellcasting":{
      "modifier": "Wisdom",
      "cantrips": 2,
      "first_level_slots": 2,
      "first_level_known": "All Druid Spells"
    },
    "saving_throws": [
      "Intelligence",
      "Wisdom"
    ],
    "subclasses": []
  },
  // fighter
  {
    "name": "Fighter",
    "description": "",
    "primary_ability": "Strength",
    "hit_die": 10,
    "starting_proficiencies": [
      "Light Armour",
      "Medium Armour",
      "Heavy Armour",
      "Simple Weapons",
      "Martial Weapons"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Acrobatics",
        "Animal Handling",
        "Athletics",
        "History",
        "Insight",
        "Intimidation",
        "Perception",
        "Survival",
      ]
    },
    "traits": [
      {
        "name": "Second Wind",
        "description": "You have a limited well of stamina that you can draw on to rotect yourself from harm. On your turn, you can use a bonus action to regain hit points equalt to 1D10 + your fighter level. Once you use this feature, you must finish a short of long rest before you can use it again"
      },
    ],
    "choose_one": [
      {
        "name": "Fighting Style: Archery",
        "description" :"You gain +2 bonus to attack rolls you make with ranged weapons"
      },
      {
        "name": "Fighting Style: Defence",
        "description" :"While you are wearing armour you gain +1 bonus to AC"
      },
      {
        "name": "Fighting Style: Dueling",
        "description" :"When you are wielding a melee weapon in one hand and no other weapons, you gain +2 bonus to damage rolls with that weapon"
      },
      {
        "name": "Fighting Style: Great Weapon Fighting",
        "description" :"When you roll a 1 or a 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can re-roll the die and must use the new roll even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit"
      },
      {
        "name": "Fighting Style: Protection",
        "description" :"When a creature you can see attacks a target other tan you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield"
      },
      {
        "name": "Fighting Style: Two-weapon Fighting",
        "description" :"When you engage in two-weapon fighting , you can add your ability modifier to the damage of the second attack"
      },
    ],
    "spellcasting":{},
    "saving_throws": [
      "Strength",
      "Constitution"
    ],
    "subclasses": []
  },
  // monk
  {
    "name": "Monk",
    "description": "",
    "primary_ability": "Dexterity",
    "hit_die": 8,
    "starting_proficiencies": [
      "Simple Weapons",
      "Shortswords"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Acrobatics",
        "Athletics",
        "History",
        "Insight",
        "Religion",
        "Stealth"
      ]
    },
    "traits": [
      {
        "name": "Unarmoured defence",
        "description": "While you are not wearing any amour and are not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier"
      },
      {
        "name": "Martial Arts",
        "description": "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, ashown in the Martial Arts column of the Monk table. When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn."
      },
    ],
    "spellcasting":{},
    "saving_throws": [
      "Dexterity",
      "Strength"
    ],
    "subclasses": []
  },
]

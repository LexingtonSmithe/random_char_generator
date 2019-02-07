module.exports = [
  // barbarian
  {
    "name": "Barbarian",
    "description": "Unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
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
    "description": "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
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
    "tool_proficiencies": [
      "One type of musical instrument"
    ],
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
    "description": "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
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
    "description": "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature’s indomitable will.",
    "primary_ability": "Wisdom",
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
    "tool_proficiencies": [
      "Herbalism Kit"
    ],
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
    "description": "Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.",
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
    "description": "Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
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
    "tool_proficiencies": [
      "One type of musical instrument"
    ],
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
  // paladin
  {
    "name": "Paladin",
    "description": "Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god’s altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin’s oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
    "primary_ability": "Charisma",
    "hit_die": 10,
    "starting_proficiencies": [
      "Light Armour",
      "Medium armour",
      "Heavy Armour",
      "Shields",
      "Simple Weapons",
      "Martial Weapons"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Athletics",
        "Insight",
        "Intimidation",
        "Medicine",
        "Persuasion",
        "Religion"
      ]
    },
    "traits": [
      {
        "name": "Divine Sense",
        "description": "As an action, until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain   all expended uses."
      },
      {
        "name": "Lay On Hands",
        "description": "You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs."
      }
    ],
    "spellcasting":{},
    "saving_throws": [
      "Wisdom",
      "Charisma"
    ],
    "subclasses": []
  },
  // ranger
  {
    "name": "Ranger",
    "description": "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
    "primary_ability": "Dexterity",
    "hit_die": 10,
    "starting_proficiencies": [
      "Light Armour",
      "Medium armour",
      "Shields",
      "Simple Weapons",
      "Martial Weapons"
    ],
    "proficiency_choices": {
      "how_many": 3,
      "choices": [
        "Animal Handling",
        "Athletics",
        "Insight",
        "Investigation",
        "Nature",
        "Perception",
        "Stealth",
        "Survival"
      ]
    },
    "traits": [
      {
        "name": "Favoured Enemy",
        "description": "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and goblins) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all"
      },
      {
        "name": "Natural Explorer",
        "description": "Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: 1: Difficult terrain doesn’t slow your group’s travel. 2: Your group can’t become lost except by magical means. 3: Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. 4: If you are traveling alone, you can move stealthily at a normal pace. 5: When you forage, you find twice as much food as you normally would. 6: While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
      }
    ],
    "spellcasting":{},
    "saving_throws": [
      "Strength",
      "Dexterity"
    ],
    "subclasses": []
  },
  // rogue
  {
    "name": "Rogue",
    "description": "Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    "primary_ability": "Dexterity",
    "hit_die": 8,
    "starting_proficiencies": [
      "Light Armour",
      "Simple Weapons",
      "Crossbows (1-Hand)",
      "Longswords",
      "Rapiers",
      "Shortswords"
    ],
    "proficiency_choices": {
      "how_many": 4,
      "choices": [
        "Acrobatics",
        "Athletics",
        "Deception",
        "Insight",
        "Intimidation",
        "Investigation",
        "Perception",
        "Performance",
        "Persuasion",
        "Sleight Of Hand",
        "Stealth"
      ]
    },
    "tool_proficiencies": [
      "Thieves tools"
    ],
    "traits": [
      {
        "name": "Expertise",
        "description": "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
      },
      {
        "name": "Sneak Attack",
        "description": "Once per turn, you can deal extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll."
      },
      {
        "name": "Thieves Cant",
        "description": "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
      }
    ],
    "spellcasting":{},
    "saving_throws": [
      "Intelligence",
      "Dexterity"
    ],
    "subclasses": []
  },
  // sorcerer
  {
    "name": "Sorcerer",
    "description": "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can’t study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
    "primary_ability": "Charisma",
    "hit_die": 6,
    "starting_proficiencies": [
      "Daggers",
      "Darts",
      "Slings",
      "Quarterstaffs",
      "Light Crossbows"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Arcana",
        "Deception",
        "Insight",
        "Intimidation",
        "Persuasion",
        "Religion"
      ]
    },
    "traits": [],
    "spellcasting":{
      "modifier": "Charisma",
      "cantrips": 4,
      "first_level_slots": 2,
      "first_level_known": 2
    },
    "saving_throws": [
      "Constitution",
      "Charisma"
    ],
    "subclasses": [
      "Draconic Bloodline",
      "Wild Magic"
    ]
  },
  // warlock
  {
    "name": "Warlock",
    "description": "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.",
    "primary_ability": "Charisma",
    "hit_die": 8,
    "starting_proficiencies": [
      "Light Armour",
      "Simple Weapons"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Arcana",
        "Deception",
        "History",
        "Intimidation",
        "Investigation",
        "Nature",
        "Religion"
      ]
    },
    "traits": [
      {
        "name": "Otherworldly Patron",
        "description": "You have struck a bargain with an otherworldly being of your choice. Your choice grants you special features. A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf."
      }
    ],
    "spellcasting":{
      "modifier": "Charisma",
      "cantrips": 2,
      "first_level_slots": 2,
      "first_level_known": 2
    },
    "saving_throws": [
      "Wisdom",
      "Charisma"
    ],
    "subclasses": [
      "The Archfey",
      "The Fiend",
      "The Great Old One"
    ]
  },
  // wizard
  {
    "name": "Wizard",
    "description": "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
    "primary_ability": "Intelligence",
    "hit_die": 6,
    "starting_proficiencies": [
      "Daggers",
      "Darts",
      "Slings",
      "Quarterstaffs",
      "Light Crossbows"
    ],
    "proficiency_choices": {
      "how_many": 2,
      "choices": [
        "Arcana",
        "History",
        "Insight",
        "Investigation",
        "Medicine",
        "Religion"
      ]
    },
    "traits": [
      {
        "name": "Spellbook",
        "description": "At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know. When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a level which you can prepare and if you can spare the time to decipher and copy it. For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells. Replacing your spellbook: You can copy a spell from your own spellbook into another book. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal."
      },
      {
        "name": "Arcane Recovery",
        "description": "Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."
      }
    ],
    "spellcasting":{
      "modifier": "Intelligence",
      "cantrips": 3,
      "first_level_slots": 2,
      "first_level_known": 6
    },
    "saving_throws": [
      "Wisdom",
      "Intelligence"
    ],
    "subclasses": []
  },
]

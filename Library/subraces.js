module.exports = [
  // hill dwarf
  {
    "name": "Hill Dwarf",
    "ability_bonuses": [
      0, 0, 0, 0, 1, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Dwarven Toughness",
        "description": "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
      }
    ],
  },
  // mountain dwarf
  {
    "name": "Mountain Dwarf",
    "ability_bonuses": [
      2, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [
      "Medium Armour",
      "Heavy Armour"
    ],
    "languages": [],
    "additional_languages": {},
    "traits": [],
  },
  // high elf
  {
    "name": "High Elf",
    "ability_bonuses": [
      0, 0, 0, 1, 0, 0,
    ],
    "skill_bonuses" :[
      "Perception"
    ],
    "starting_proficiencies": [
      "Long Swords",
      "Short Swords",
      "Shortbows",
      "Longbows"
    ],
    "languages": [],
    "additional_languages": {
      "number": 1,
      "languages": [
        "Dwarvish",
        "Giant",
        "Gnomish",
        "Goblin",
        "Halfling",
        "Orc",
        "Abyssal",
        "Celestial",
        "Draconic",
        "Deep Speech",
        "Infernal",
        "Primordial",
        "Sylvan",
        "Undercommon"
      ]
    },
    "traits": [{
      "choose_one": [
          {
              "name": "High Elf Cantrip: Light",
              "description": "You use your action to touch an object no longer than 10 feet in any dimension, causing it to shine bright light of a color you choose in a 20-foot radius and dim light for an additional 20 feet. If the object is completely covered, the light is blocked. The spell ends if you cast it again or dismiss the light as an action."
          },
          {
              "name": "High Elf Cantrip: Mage Hand",
              "description": "You use your action to create a spectral, floating hand at a point you choose. Once made, you can use your action to control the hand. It can move up to 30 feet at a time, but can't be more than 30 feet away from you or it will vanish. The hand is able to manipulate objects, open an unlocked door or container, put away or get an item out of an open container, or pour out a vial's contents. It can't attack, activate magic items, or carry more than 10 pounds. You use an action to dismiss the hand before the end of the duration"
          },
          {
              "name": "High Elf Cantrip: Mending",
              "description": "You take a minute to cast this spell, and it fixes a break or tear in an object you touch while leaving no traces of the damage. The damage can't be longer than 1 foot in any dimension. The spell can fix constructs and magic items, but can't restore magical properties."
          },
          {
              "name": "High Elf Cantrip: Message",
              "description": "You point at a creature and whisper a message that only it can hear, and it can whisper back a reply that only you hear. You can cast through objects if you know the target and that it's beyond the wall, but magical silence, 1 foot of stone, 1 inch of metals, a thin sheet of lead, and 3 feet of wood will block the spell. The spell can move through corners and other openings"
          },
          {
              "name": "High Elf Cantrip: Minor Illusion",
              "description": "You create a sound or an image of an object that lasts for the duration. The illusion ends early if you dismiss it as an action or cast this spell again. If you create a sound, it can be any volume and noise. The sound can continue unabated for the duration, or you can make sounds at different times. If you create an image of an object, it must be no larger than a 5-foot cube. The image can't create any sensory effects. Physical interaction with the image reveals it to be an illusion."
          },
          {
              "name": "High Elf Cantrip: Acid Splash",
              "description": "You throw a bubble of acid at a creature you can see, or at two creatures within 5 feet of each other, and force them to pass a Dexterity save or take 1d6 acid damage. Intelligence is your spellcasting ability for it."
          },
          {
              "name": "High Elf Cantrip: Prestidigitation",
              "description": "You can create a harmless sensory effect, light or put out a small fire, clean or soil an object no larger than 1 cubic foot, hill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour, make a small mark appear on an object or surface for 1 hour, create a nonmagical trinket or a hand-sized illusory image that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss an effect as an action."
          },
          {
              "name": "High Elf Cantrip: Ray of Frost",
              "description": "You use your action to fire a beam of ice at a creature you can see. Make a ranged spell attack. On hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. Intelligence is your spellcasting ability for it."
          },
          {
              "name": "High Elf Cantrip: Shocking Grasp",
              "description": "You use your action to try to touch a creature with a lightning shock. Make a melee spell attack, with advantage if the target is wearing metal armor. On hit, the target takes 1d8 lightning damage and can't take reactions until the start of its next turn. Intelligence is your spellcasting ability for it."
          },
          {
              "name": "High Elf Cantrip: True Strike",
              "description": "After taking one action to concentrate on your next turn, your first attack roll on the target has advantage."
          },
          {
              "name": "High Elf Cantrip: Chill Touch",
              "description": "You use your action to make a ghostly, skeletal hand that attempts to cling to a creature you can see within range. Make a ranged spell attack. On hit, the hand grabs the target, dealing 1d8 necrotic damage. The hand then remains there until the start of your next turn. During this time, the target is unable to regain hit points. If you hit an undead creature with this spell, it has disadvantage on attack rolls against you until the end of your next turn. Intelligence is your spellcasting ability for it."
          },
          {
              "name": "High Elf Cantrip: Dancing Lights",
              "description": "You create up to four torch-sized lights that hover in the air. Each shed dim light in a 10-foot radius. You can also form them into one glowing humanoid shape. As a bonus action, you can move the lights up to 60 feet. Each light must be within at least 20 feet of another one. A light goes out if it exceeds the ranges of the spell."
          }
        ]}
    ],},
  // dark elf
  {
    "name": "Dark Elf (Drow)",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 1,
    ],
    "starting_proficiencies": [
      "Rapiers",
      "Shortswords",
      "Crossbows (1-hand)"
    ],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Superior Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can also discern some color in darkness, tinged with shades of gray."
      },
      {
        "name": "Sunlight Sensitivity",
        "description": "You have disadvantage on attack rolls and Wisdom (Perception) checks when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
      },
      {
        "name": "Drow Magic",
        "description": "You know the dancing lights cantrip and can cast it at will. Starting from 3rd level, you can cast the faerie fire spell once. Starting from 5th level, you can cast the darkness spell once. Charisma is your spellcasting ability for these spells. You regain expended uses of this trait when you complete a long rest."
      }
    ],
  },
  // lightfoot halfling
  {
  "name": "Lightfoot Halfling",
  "ability_bonuses": [
    0, 0, 0, 0, 0, 1,
  ],
  "starting_proficiencies": [],
  "languages": [],
  "additional_languages": {},
  "traits": [
    {
      "name": "Naturally Stealthy",
      "description": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
    }
  ],},
  // stout halfling
  {
  "name": "Stout Halfling",
  "ability_bonuses": [
    0, 0, 1, 0, 0, 0,
  ],
  "starting_proficiencies": [],
  "languages": [],
  "additional_languages": {},
  "traits": [
    {
      "name": "Stout Resiliance",
      "description": "You have advantage on saving throws against poison, an dyou have resistance against poision damage"
    }
  ],},
  // forest gnome
  {
    "name": "Forest Gnome",
    "ability_bonuses": [
      0, 1, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Natural Illusionist",
        "description": "Minor Illusion Cantrip: You create a sound or an image of an object that lasts for the duration. The illusion ends early if you dismiss it as an action or cast this spell again. If you create a sound, it can be any volume and noise. The sound can continue unabated for the duration, or you can make sounds at different times. If you create an image of an object, it must be no larger than a 5-foot cube. The image can't create any sensory effects. Physical interaction with the image reveals it to be an illusion. A creature can use its action to make an Investigation check on the illusion. If it succeeds, the illusion becomes faint to it."
      },
      {
        "name": "Speak with small beasts",
        "description": "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers and other creatures as beloved pets"
      }

    ],
  },
  // rock gnome
  {
    "name": "Rock Gnome",
    "ability_bonuses": [
      0, 0, 1, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Artificer's Lore",
        "description": "Whenever you make an Intelligence (history) check related to magic items, alchemical objects or technological devices, you can add twice your proficiency bonus you normally apply"
      },
      {
        "name": "Tinker",
        "description": "You have proficiency with artisan tools (tinkers tools). Using those tools you can spend 1 hour and 10gp worth of materials to construct a tink clockwork device (AC 5 1hp) such as a clockwork toy, fire starter or music box. The device ceases to function after 24 hours unless you spend 1 hour to repair it"
      }
    ],
  },
  // black draconic ancestry
  {
    "name": "Black",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Acid",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in 5ft by 30ft line of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Acid",
        "description": "You have resistance to acid damage type due to your draconic ancestry."
      }
    ],
  },
  // blue draconic ancestry
  {
    "name": "Blue",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Lightning",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in 5ft by 30ft line of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Lightning",
        "description": "You have resistance to lightning damage type due to your draconic ancestry."
      }
    ],
  },
  // brass draconic ancestry
  {
    "name": "Brass",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Fire",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in 5ft by 30ft line of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Fire",
        "description": "You have resistance to fire damage type due to your draconic ancestry."
      }
    ],
  },
  // bronze draconic ancestry
  {
    "name": "Bronze",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Lightning",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in 5ft by 30ft line of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Lightning",
        "description": "You have resistance to lightning damage type due to your draconic ancestry."
      }
    ],
  },
  // copper draconic ancestry
  {
    "name": "Copper",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Acid",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in 5ft by 30ft line of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Acid",
        "description": "You have resistance to acid damage type due to your draconic ancestry."
      }
    ],
  },
  // gold draconic ancestry
  {
    "name": "Gold",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Fire",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in a 15ft cone of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Fire",
        "description": "You have resistance to fire damage type due to your draconic ancestry."
      }
    ],
  },
  // green draconic ancestry
  {
    "name": "Green",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Poison",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in a 15ft cone of the exhalation must make a constitution saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Poison",
        "description": "You have resistance to poison damage type due to your draconic ancestry."
      }
    ],
  },
  // red draconic ancestry
  {
    "name": "Red",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Fire",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in a 15ft cone of the exhalation must make a dexterity saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Fire",
        "description": "You have resistance to fire damage type due to your draconic ancestry."
      }
    ],
  },
  // silver draconic ancestry
  {
    "name": "Silver",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Cold",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in a 15ft cone of the exhalation must make a constitution saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Cold",
        "description": "You have resistance to cold damage type due to your draconic ancestry."
      }
    ],
  },
  // white draconic ancestry
  {
    "name": "White",
    "ability_bonuses": [
      0, 0, 0, 0, 0, 0,
    ],
    "starting_proficiencies": [],
    "languages": [],
    "additional_languages": {},
    "traits": [
      {
        "name": "Breath Weapon: Cold",
        "description": "You can use your action to exhale destructive energy. When you use your breath weapon, each creature in a 15ft cone of the exhalation must make a constitution saving throw. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest."
      },
      {
        "name": "Damage Resitance: Cold",
        "description": "You have resistance to cold damage type due to your draconic ancestry."
      }
    ],
  },
]

module.exports = [
  // dwarf
  {
    "name": "Dwarf",
    "description": "Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.",
    "min_age": 50,
    "max_age": 350,
    "min_height": 3,
    "max_height": 4,
    "min_weight": 60,
    "max_weight": 80,
    "ability_bonuses": [
      0, 0, 2, 0, 0, 0,
    ],
    "size": "Medium",
    "speed": 30,
    "starting_proficiencies": [
      "Battleaxes",
      "Handaxes",
      "Light hammers",
      "Warhammers"
    ],
    "skill_bonuses": [],
    "languages": [
      "Dwarvish",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
      },
      {
        "name": "Dwarven Resiliance",
        "description": "You have advantage on saving throws against poison, and you have resistance against poison damage."
      },
      {
        "name": "Stonecunning",
        "description": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
      }
    ],
    "subraces": [
      "Hill Dwarf",
      "Mountain Dwarf"
    ]},
  // elf
  {
    "name": "Elf",
    "description": "With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females.Elves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.",
    "min_age": 100,
    "max_age": 750,
    "min_height": 4,
    "max_height": 6,
    "min_weight": 50,
    "max_weight": 75,
    "ability_bonuses": [
      0, 2, 0, 0, 0, 0,
    ],
    "size": "Medium",
    "speed": 30,
    "starting_proficiencies": [],
    "skill_bonuses": [
      "Perception"
    ],
    "languages": [
      "Elvish",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
      },
      {
        "name": "Fey Ancestry",
        "description": "You have advantage on saving throws against being charmed, and magic cannot put you to sleep."
      },
      {
        "name": "Trance",
        "description": "Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance'). While meditating, you can dream after a fasion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep."
      }
    ],
    "subraces": [
      "High Elf",
      "Wood Elf",
      "Dark Elf (Drow)"
    ]},
  // halfling
  {
    "name": "Halfling",
    "description": "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors.",
    "min_age": 20,
    "max_age": 250,
    "min_height": 2,
    "max_height": 3,
    "min_weight": 20,
    "max_weight": 40,
    "ability_bonuses": [
      0, 2, 0, 0, 0, 0,
    ],
    "size": "Small",
    "speed": 25,
    "starting_proficiencies": [],
    "skill_bonuses": [],
    "languages": [
      "Halfling",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Brave",
        "description": "You have advantage on saving throw against being frghtened"
      },
      {
        "name": "Halfling Nimbleness",
        "description": "You can move through the space of any creature that is of a size larger than yours."
      },
      {
        "name": "Lucky",
        "description": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
      }
    ],
    "subraces": [
      "Lightfoot Halfling",
      "Stout Halfling"
    ]
  },
  // human
  {
    "name": "Human",
    "description": "You are a generic piece of shit...",
    "min_age": 18,
    "max_age": 90,
    "min_height": 4,
    "max_height": 5,
    "min_weight": 60,
    "max_weight": 90,
    "ability_bonuses": [
      1, 1, 1, 1, 1, 1,
    ],
    "size": "Medium",
    "speed": 30,
    "starting_proficiencies": [],
    "skill_bonuses": [],
    "languages": [
      "Common"
    ],
    "additional_languages": {
      "number": 1,
      "languages": [
        "Dwarvish",
        "Elvish",
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
    "traits": [],
    "subraces": []},
  // dragonborn
  {
    "name": "Dragonborn",
    "description": "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand.The blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor",
    "min_age": 12,
    "max_age": 70,
    "min_height": 5,
    "max_height": 6,
    "min_weight": 110,
    "max_weight": 140,
    "ability_bonuses": [
      2, 0, 0, 0, 0, 1,
    ],
    "size": "Medium",
    "speed": 30,
    "starting_proficiencies": [],
    "skill_bonuses": [],
    "languages": [
      "Draconic",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Draconic Ancestry",
        "description": "You have draconic ancestry inherrent to your colour giving you damage resistance and a powerful breath weapon of the damage type associated with your colour."
      }
    ],
    "subraces": [
      "Black",
      "Blue",
      "Bronze",
      "Brass",
      "Copper",
      "Gold",
      "Green",
      "Red",
      "Silver",
      "White"
    ]
  },
  // gnome
  {
    "name": "Gnome",
    "description": "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around.A gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated with embroidery, embossing, or gleaming jewels.",
    "min_age": 35,
    "max_age": 400,
    "min_height": 2,
    "max_height": 3,
    "min_weight": 20,
    "max_weight": 40,
    "ability_bonuses": [
      0, 0, 0, 2, 0, 0,
    ],
    "size": "Small",
    "speed": 25,
    "starting_proficiencies": [],
    "skill_bonuses": [],
    "languages": [
      "Gnomish",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
      },
      {
        "name": "Gnome Cunning",
        "description": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      }
    ],
    "subraces": [
      "Forest Gnome",
      "Rock Gnome"
    ]
  },
  // half-elf
  {
    "name": "Half-Elf",
    "description": "To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par with both parents, though they’re neither as slender as elves nor as broad as humans. They range from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their elven ancestry. Half-elven coloration and features lie somewhere between their human and elf parents, and thus show a variety even more pronounced than that found among either race. They tend to have the eyes of their elven parents.",
    "min_age": 20,
    "max_age": 160,
    "min_height": 4,
    "max_height": 6,
    "min_weight": 60,
    "max_weight": 80,
    "ability_bonuses": [
      0, 0, 0, 0, 0, 2,
    ],
    "size": "Small",
    "speed": 30,
    "starting_proficiencies": [
      "Versitility"
    ],
    "skill_bonuses": [],
    "languages": [
      "Elvish",
      "Common"
    ],
    "additional_languages": {
      "number": 1,
      "languages": [
        "Dwarvish",
        "Elvish",
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
    "traits": [
      {
        "name": "Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
      }
    ],
    "subraces": []
  },
  // half-orc
  {
    "name": "Half-Orc",
    "description": "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 5 and 7 feet tall and usually weigh between 180 and 250 pounds. Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame.",
    "min_age": 35,
    "max_age": 400,
    "min_height": 4,
    "max_height": 6,
    "min_weight": 90,
    "max_weight": 120,
    "ability_bonuses": [
      2, 0, 1, 0, 0, 0,
    ],
    "size": "Medium",
    "speed": 30,
    "starting_proficiencies": [],
    "skill_bonuses": [
      "Intimidation"
    ],
    "languages": [
      "Orcish",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
      },
      {
        "name": "Savage Attacks",
        "description": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damge of the critical hit."
      },
      {
        "name": "Restless Endurance",
        "description": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. you cannot use this feature again until you finish a long rest."
      }
    ],
    "subraces": []
  },
  // tiefling
  {
    "name": "Tiefling",
    "description": "Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.",
    "min_age": 18,
    "max_age": 80,
    "min_height": 4,
    "max_height": 6,
    "min_weight": 70,
    "max_weight": 90,
    "ability_bonuses": [
      0, 0, 0, 1, 0, 2,
    ],
    "size": "Medium",
    "speed": 30,
    "starting_proficiencies": [],
    "skill_bonuses": [],
    "languages": [
      "Infernal",
      "Common"
    ],
    "additional_languages": {},
    "traits": [
      {
        "name": "Darkvision",
        "description": "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray."
      },
      {
        "name": "Hellish Resistance",
        "description": "You have resistance to fire damage."
      },
      {
        "name": "Infernal Legacy",
        "description": "You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5h level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
      }
    ],
    "subraces": []
  },
]

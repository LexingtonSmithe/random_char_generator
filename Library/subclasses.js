module.exports = [
  // sorcerer - draconic bloodline
  {
    "name": "Draconic Bloodline",
    "description": "Your innate magic comes from Draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this Origin trace their descent back to a mighty Sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given Sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Dragon Ancestor",
        "description": "You choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later. You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with Dragons, your Proficiency Bonus is doubled if it applies to the check."
      },
      {
        "name": "Draconic Resiliance",
        "description": "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier."
      }
    ]
  },
  // sorcerer - wild magic
  {
    "name": "Wild Magic",
    "description": "Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet.",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Wild Magic Surge",
        "description": "Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect."
      },
      {
        "name": "Tides Of Chaos",
        "description": "Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
      }
    ]
  },
  // cleric - life
  {
    "name": "Life",
    "description": "The Life domain focuses on the vibrant positive energy – one of the fundamental forces of the universe – that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrci).",
    "starting_proficiencies": [
      "Heavy Armour"
    ],
    "traits": [
      {
        "name": "Discipline Of Life",
        "description": "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
      },
      {
        "name": "Domain Spell: Bless",
        "description": "1st Level: You bless up to three creatures of your choice. Whenever a target makes an attack roll or a saving throw, it can add a 1d4 to it."
      },
      {
        "name": "Domain Spell: Cure Wounds",
        "description": "1st Level: A creature you touch regains hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs."
      }
    ]
  },
  // cleric - light
  {
    "name": "Light",
    "description": "Gods of light – including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty – promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power oftheir gods' discerning vision, charged with chasing away lies and burning away darkness.",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Warding Flare",
        "description": "Also at 1st level, when you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
      },
      {
        "name": "Domain Spell: Light",
        "description": "Cantrip: You use your action to touch an object no longer than 10 feet in any dimension, causing it to shine bright light of a color you choose in a 20-foot radius and dim light for an additional 20 feet. If the object is completely covered, the light is blocked. The spell ends if you cast it again or dismiss the light as an action."
      },
      {
        "name": "Domain Spell: Burning Hands",
        "description": "1st Level: As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one."
      },
      {
        "name": "Domain Spell: Faerie Fire",
        "description": "1st Level: Blue, green, or violet lights outline objects inside a 20-foot cube of space. All creatures in the area make a Dexterity save or be cast in light as well. The light cast by this spell illuminates a 10-foot radius. Attacks against affected creatures are made with advantage, and affected creature or object can't be invisible"
      }
    ]
  },
  // cleric - nature
  {
    "name": "Nature",
    "description": "Gods of nature are as varied as the natural world itself; from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
    "starting_proficiencies": [
      "Heavy Armour"
    ],
    "traits": [
      {
        "name": "Acolyte Of Nature",
        "description": "At 1st level, you learn one cantrip of your choice from the druid spell list. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival."
      },
      {
        "name": "Domain Spell: Animal Friendship",
        "description": "1st Level: This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spell ends."
      },
      {
        "name": "Domain Spell: Speak With Animals",
        "description": "1st Level: You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM’s discretion."
      }
    ]
  },
  // cleric - tempest
  {
    "name": "Tempest",
    "description": "Gods whose portfolios include the Tempest domain – including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor – govern storms, sea, and, sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
    "starting_proficiencies": [
      "Heavy Armour",
      "Martial Weapons"
    ],
    "traits": [
      {
        "name": "Wrath Of The Storm",
        "description": "Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
      },
      {
        "name": "Domain Spell: Fog Cloud",
        "description": "1st Level: You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured, It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it."
      },
      {
        "name": "Domain Spell: Thunderwave",
        "description": "1st Level: A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet."
      }
    ]
  },
  // cleric - trickery
  {
    "name": "Trickery",
    "description": "Gods of trickery – such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki – are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Blessing Of The Trickster",
        "description": "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."
      },
      {
        "name": "Domain Spell: Charm Person",
        "description": "1st Level: You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
      },
      {
        "name": "Domain Spell: Disguise Self",
        "description": "1st Level: You make yourself – including your clothing, armor, weapons, and other belongings on your person – look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
      }
    ]
  },
  // cleric - war
  {
    "name": "War",
    "description": "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
    "starting_proficiencies": [
      "Heavy Armour",
      "Martial Weapons"
    ],
    "traits": [
      {
        "name": "War Priest",
        "description": "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
      },
      {
        "name": "Domain Spell: Divine Favour",
        "description": "1st Level: Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
      },
      {
        "name": "Domain Spell: Shield Of Faith",
        "description": "1st Level: A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
      }
    ]
  },
  // warlock - the archfey
  {
    "name": "The Archfey",
    "description": "Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Fey Presence",
        "description": "As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn."
      },
      {
        "name": "Patron Spell: Fairie Fire",
        "description": "1st Level: Blue, green, or violet lights outline objects inside a 20-foot cube of space. All creatures in the area make a Dexterity save or be cast in light as well. The light cast by this spell illuminates a 10-foot radius. Attacks against affected creatures are made with advantage, and affected creature or object can't be invisible"
      },
      {
        "name": "Patron Spell: Sleep",
        "description": "1st Level: This spell sends creatures into a magical slumber. Roll 5d8, the total is how many Hit Points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current Hit Points (ignoring Unconscious creatures). Starting with the creature that has the lowest current Hit Points, each creature affected by this spell falls Unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's Hit Points from the total before moving on to the creature with the next lowest Hit Points. A creature's Hit Points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being Charmed aren't affected by this spell."
      }
    ]
  },
  // warlock - the fiend
  {
    "name": "The Fiend",
    "description": "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Dark Ones Blessing",
        "description": "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)"
      },
      {
        "name": "Patron Spell: Burning Hands",
        "description": "1st Level: As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one."
      },
      {
        "name": "Patron Spell: Command",
        "description": "1st Level: You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is Undead, if it doesn't understand your language, or if your command is directly harmful to it. The DM determines how the target behaves. If the target can't follow your command, the spell ends."
      }
    ]
  },
  // warlock - the great old one
  {
    "name": "The Great ",
    "description": "Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it.",
    "starting_proficiencies": [],
    "traits": [
      {
        "name": "Awakened Mind",
        "description": "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
      },
      {
        "name": "Patron Spell: Dissonant Whispers",
        "description": "1st Level: You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save."
      },
      {
        "name": "Patron Spell: Tasha's Hideous Laughter",
        "description": "1st Level: A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by damage. On a success, the spell ends."
      }
    ]
  },
]

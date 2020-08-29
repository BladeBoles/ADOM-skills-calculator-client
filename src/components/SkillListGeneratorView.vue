<template>
  <div class="container">
    <div class="choices-outer">
      <div class="choices">
        <label class="race-class-label" for="player-races"></label>
        <select class="race-class-select" v-model="selectedRace">
          <option
            v-for="playerRace in playableRaces.sort()"
            class="race-class-option"
            :key="playerRace"
            >{{ playerRace }}</option
          >
        </select>
      </div>
      <div class="choices">
        <label class="race-class-label" for="player-classes"></label>
        <select class="race-class-select" v-model="selectedClass">
          <option
            v-for="playerClass in playableClasses.sort()"
            class="race-class-option"
            :key="playerClass"
            >{{ playerClass }}</option
          >
        </select>
      </div>
    </div>
    <h3 class="character-choice-header">
      Starting Skills for <span id="race-span">{{ selectedRace }} </span>

      <span id="class-span">{{ selectedClass }}</span>
    </h3>
    <ul>
      <li
        :class="`skills-list-li-${skill.source}`"
        v-for="skill in startingSkills"
        :key="skill.name"
      >
        {{ skill.name }}
        <span :class="`skills-list-li-span-${skill.source}`">{{
          skill.source !== 'free' ? '(' + skill.source + ')' : null
        }}</span>
      </li>
    </ul>
    <p>
      Bards start with random skills and merchants have slightly different
      skills depending on specialty.
    </p>
    <p>
      All characters train in listening, haggling, first aid and climbing.
    </p>
  </div>
</template>

<script>
export default {
  name: 'skillsListGeneratorView',
  props: {
    msg: String
  },
  data() {
    return {
      raceObjects: [
        {
          name: 'Human',
          skills: ['Climbing', 'Food Preservation', 'Haggling', 'Swimming'],
          notes: 'none'
        },
        {
          name: 'Troll',
          skills: [
            'Athletics',
            'Bridge Building',
            'Climbing',
            'Food Preservation',
            'Gemology',
            'Mining'
          ],
          notes: 'none'
        },
        {
          name: 'High Elf',
          skills: ['Climbing', 'Dodge', 'Listening', 'Literacy', 'Stealth'],
          notes: 'none'
        },
        {
          name: 'Gray Elf',
          skills: ['Climbing', 'Dodge', 'Listening', 'Literacy', 'Stealth'],
          notes: 'none'
        },
        {
          name: 'Dark Elf',
          skills: ['Alertness', 'Climbing', 'Find Weakness', 'Stealth'],
          notes: 'none'
        },
        {
          name: 'Dwarf',
          skills: [
            'Climbing',
            'Detect Traps',
            'Metallurgy',
            'Mining',
            'Smithing'
          ],
          notes: 'none'
        },
        {
          name: 'Gnome',
          skills: [
            'Climbing',
            'Gemology',
            'Listening',
            'Mining',
            'Pick Pockets',
            'Ventriloquism'
          ],
          notes: 'none'
        },
        {
          name: 'Hurthling',
          skills: [
            'Archery',
            'Cooking',
            'Food Preservation',
            'Gardening',
            'Stealth'
          ],
          notes: 'none'
        },
        {
          name: 'Orc',
          skills: ['Backstabbing', 'Find Weakness', 'Metallurgy', 'Mining'],
          notes: 'none'
        },
        {
          name: 'Drakeling',
          skills: ['Alertness', 'Food Preservation', 'Music', 'Swimming'],
          notes: 'none'
        },
        {
          name: 'Mist Elf',
          skills: [
            'Alertness',
            'Concentration',
            'Dodge',
            'Literacy',
            'Necromancy'
          ],
          notes: 'none'
        },
        {
          name: 'Ratling',
          skills: ['Appraising', 'Detect Item Status', 'Survival', 'Swimming'],
          notes: 'none'
        }
      ],
      playableRaces: [
        'Human',
        'Troll',
        'High Elf',
        'Gray Elf',
        'Dark Elf',
        'Dwarf',
        'Gnome',
        'Hurthling',
        'Orc',
        'Drakeling',
        'Mist Elf',
        'Ratling',
        'No Race'
      ],
      playableClasses: [
        'Fighter',
        'Paladin',
        'Ranger',
        'Thief',
        'Assassin',
        'Wizard',
        'Priest',
        'Bard',
        'Monk',
        'Healer',
        'Weaponsmith',
        'Archer',
        'Merchant',
        'Farmer',
        'Mindcrafter',
        'Barbarian',
        'Druid',
        'Necromancer',
        'Elementalist',
        'Beastfighter',
        'Duelist',
        'Chaos Knight',
        'No Class'
      ],
      skillsList: [
        {
          name: 'Alchemy',
          description: 'Allowsbrewingpotionsusingafixedlistofrecipes',
          races: [],
          classes: ['Assassin', 'Merchant', 'Necromancer', 'Wizard'],
          inGame: false
        },
        {
          name: 'Alertness',
          description: 'Givesachancetoevadecombatmagicandtrap',
          races: ['Dark Elf', 'Drakeling', 'Mist Elf'],
          classes: [
            'Archer',
            'Assassin',
            'Duelist',
            'Healer',
            'Monk',
            'Ranger',
            'Thief'
          ],
          inGame: false
        },
        {
          name: 'Appraising',
          description: 'Performsitemqualityevaluation',
          races: ['Ratling'],
          classes: ['Merchant', 'Necromancer', 'Thief', 'Weaponsmith'],
          inGame: false
        },
        {
          name: 'Archery',
          description: 'Grantsmissileattackbonuses',
          races: ['Hurthling'],
          classes: ['Archer', 'Assassin', ' Farmer', 'Fighter', 'Ranger'],
          inGame: false
        },
        {
          name: 'Athletics',
          description: 'Grantsspeedbonus,helpsphysicalAttributestraining',
          races: ['Troll'],
          classes: [
            'Barbarian',
            'Beastfighter',
            'Chaos Knight',
            'Duelist',
            'Fighter',
            'Monk',
            'Paladin',
            'Ranger',
            'Weaponsmith'
          ],
          inGame: false
        },
        {
          name: 'Backstabbing',
          description: 'Grantsachancetoinflictbonusdamageonunawareopponents',
          races: ['Orc'],
          classes: ['Assassin', 'Chaos Knight', ' Thief'],
          inGame: true
        },
        {
          name: 'Bridge Building',
          description: 'Allowsbuildingbridges',
          races: ['Troll'],
          classes: ['Farmer'],
          inGame: true
        },
        {
          name: 'Climbing',
          description:
            'Grantsachancetoclimboutofpits;prerequisitetoentertheRift',
          races: ['All'],
          classes: ['All'],
          inGame: false
        },
        {
          name: 'Concentration',
          description:
            'IncreasesPPregenerationrate;improvesspelllearningprocess',
          races: ['Mist Elf'],
          classes: [
            'Archer',
            'Druid',
            'Duelist',
            'Elementalist',
            'Healer',
            'Mindcrafter',
            'Monk',
            'Necromancer',
            'Paladin',
            'Priest',
            'Weaponsmith',
            'Wizard'
          ],
          inGame: false
        },
        {
          name: 'Cooking',
          description: 'Allowscookingcorpses',
          races: ['Hurthling'],
          classes: ['Healer', 'Farmer'],
          inGame: false
        },
        {
          name: 'Courage',
          description: 'Reducesto-hitpenaltieswhenfightingwithmultipleenemies',
          races: ['None'],
          classes: ['None'],
          inGame: true
        },
        {
          name: 'Detect Item Status',
          description: 'GivesachancetoautomaticallyidentifyB/U/Cstatusofanitem',
          races: ['Ratling'],
          classes: ['Merchant', 'Priest'],
          inGame: false
        },
        {
          name: 'Detect Traps',
          description:
            'Givesachancetofindtrapspassively/onthespecifiedlocation',
          races: ['Dwarf'],
          classes: ['Assassin', 'Thief', 'Weaponsmith'],
          inGame: true
        },
        {
          name: 'Disarm Traps',
          description: 'Allowsdisarmingtraps',
          races: ['None'],
          classes: ['Thief'],
          inGame: true
        },
        {
          name: 'Dodge',
          description: 'GrantsDVbonus,grantsasmallchancetoavoidcombatmagic',
          races: ['High Elf', 'Gray Elf', 'Mist Elf'],
          classes: [
            'Archer',
            'Assassin',
            'Barbarian',
            'Beastfighter',
            'Chaos Knight',
            'Duelist',
            'Fighter',
            'Monk',
            'Paladin',
            'Ranger'
          ],
          inGame: false
        },
        {
          name: 'Find Weakness',
          description: 'Grantsachancetoinflictacriticalhit',
          races: ['Dark Elf', 'Orc'],
          classes: [
            'Assassin',
            'Chaos Knight',
            'Duelist',
            'Fighter',
            'Healer',
            'Monk',
            'Necromancer',
            'Weaponsmith'
          ],
          inGame: false
        },
        {
          name: 'First Aid',
          description: 'CanbeusedtorestorerecentlylostHP',
          races: ['All'],
          classes: ['All'],
          inGame: false
        },
        {
          name: 'Fletchery',
          description: 'Allowscreatingammunitionusingfletcherysets',
          races: ['None'],
          classes: ['Archer', 'Farmer'],
          inGame: false
        },
        {
          name: 'Food Preservation',
          description:
            'Increasesthechancetogeneratecorpses,helpspreservecorpseslonger',
          races: ['Drakeling', 'Human', 'Hurthling', 'Troll'],
          classes: ['Farmer', 'Necromancer', 'Ranger'],
          inGame: false
        },
        {
          name: 'Gardening',
          description:
            'Allowsplantingherbbushesandgatheringherbseedsfromblossomingbushes',
          races: ['Hurthling'],
          classes: ['Druid', 'Farmer'],
          inGame: true
        },
        {
          name: 'Gemology',
          description:
            'Grantsachancetogenerateandautomaticallyidentifygemsfromdigging',
          races: ['Gnome', 'Troll'],
          classes: ['Elementalist', 'Merchant', 'Mindcrafter'],
          inGame: false
        },
        {
          name: 'Haggling',
          description: 'Canbeusedtohagglewithshopkeepers',
          races: ['All'],
          classes: ['All'],
          inGame: false
        },
        {
          name: 'Healing',
          description: 'PassivelyrestoresHP',
          races: ['None'],
          classes: [
            'Beastfighter',
            'Druid',
            'Duelist',
            'Elementalist',
            'Healer',
            'Monk',
            'Paladin',
            'Priest',
            'Ranger',
            'Wizard'
          ],
          inGame: true
        },
        {
          name: 'Herbalism',
          description: 'Improvesthequality(B/U/Cstatus)ofcollectedherbs',
          races: ['None'],
          classes: [
            'Barbarian',
            'Beastfighter',
            'Druid',
            'Farmer',
            'Healer',
            'Merchant',
            'Mindcrafter',
            'Necromancer',
            'Priest',
            'Ranger',
            'Wizard'
          ],
          inGame: true
        },
        {
          name: 'Law',
          description: 'ProvidesmessageswhenthePCperformslawful/chaoticacts',
          races: ['None'],
          classes: ['Duelist;Paladinifstartingalignmentislawful'],
          inGame: true
        },
        {
          name: 'Listening',
          description:
            'Increasesthechanceofreceivingaudiblemessages(e.g.poolorriversounds)',
          races: ['All'],
          classes: ['All'],
          inGame: false
        },
        {
          name: 'Literacy',
          description: 'Allowsreadingscrolls,spellbooksandinscriptionsongraves',
          races: ['High Elf', 'Gray Elf', 'Mist Elf', 'Learning > 9'],
          classes: [
            'Druid',
            'Elementalist',
            'Healer',
            'Merchant',
            'Mindcrafter',
            'Monk',
            'Necromancer',
            'Paladin',
            'Priest',
            'Wizard',
            'Learning > 9'
          ],
          inGame: true
        },
        {
          name: 'Metallurgy',
          description: 'Canbeusedtoidentifyitemmaterialifitismetallic',
          races: ['Dwarf', ' Orc'],
          classes: ['Elementalist', 'Fighter', 'Merchant', 'Weaponsmith'],
          inGame: false
        },
        {
          name: 'Mining',
          description: 'Reducesdiggingtime;increasesthechancetogenerateore',
          races: ['Dwarf', 'Gnome', 'Orc', 'Troll'],
          classes: ['None'],
          inGame: false
        },
        {
          name: 'Music',
          description: 'Allowsplayingmusicalinstrumentstotameanimals',
          races: ['Drakeling'],
          classes: ['Bard', 'Mindcrafter', ' Priest'],
          inGame: false
        },
        {
          name: 'Necromancy',
          description: 'Canbeusedtocreateundeadslaves',
          races: ['Mist Elf'],
          classes: ['Necromancer'],
          inGame: false
        },
        {
          name: 'Pick Locks',
          description: 'Allowstheuseofthievespickstoopenlockeddoors',
          races: ['None'],
          classes: ['Assassin', 'Thief'],
          inGame: true
        },
        {
          name: 'Pick Pockets',
          description: 'Canbeusedtostealfromhumanoidenemies',
          races: ['Gnome'],
          classes: ['Merchant', 'Thief'],
          inGame: true
        },
        {
          name: 'Smithing',
          description: 'Canbeappliedtouseaforgetoimprovemetallicitems',
          races: ['Dwarf'],
          classes: ['Farmer', 'Weaponsmith'],
          inGame: true
        },
        {
          name: 'Stealth',
          description: 'Grantsachancetonotbedetectedbymonsters/NPCs',
          races: [
            'Dark Elf',
            ' Gray Elf',
            'High Elf',
            'Hurthling',
            ' Mist Elf',
            'Ratling'
          ],
          classes: [
            'Archer',
            'Assassin',
            ' Barbarian',
            'Beastfighter',
            'Farmer',
            'Fighter',
            'Mindcrafter',
            'Monk',
            'Necromancer',
            'Paladin',
            'Thief',
            'Wizard'
          ],
          inGame: true
        },
        {
          name: 'Survival',
          description: 'Canbeusedtofindfoodinthewilderness',
          races: ['RatlingorbornunderFalcon'],
          classes: [
            'Barbarian',
            'Beastfighter',
            'Druid',
            'Farmer',
            'Merchant',
            'Ranger(oranycharacterbornunderFalcon)'
          ],
          inGame: false
        },
        {
          name: 'Swimming',
          description: 'Reducesdrowningdamage',
          races: ['Drakeling', 'Human', 'Ratling'],
          classes: [
            'Barbarian',
            'Beastfighter',
            'Druid',
            'Elementalist',
            'Fighter',
            'Paladin',
            'Ranger'
          ],
          inGame: true
        },
        {
          name: 'Tactics',
          description: 'Increasestacticsbonusesanddecreasespenalties',
          races: ['None'],
          classes: ['None'],
          inGame: true
        },
        {
          name: 'Two Weapon Combat',
          description:
            'Decreasesto-hitandenergycostpenaltieswhiledual-wielding',
          races: ['None'],
          classes: [
            'Assassin',
            'Barbarian',
            'Chaos Knight',
            'Fighter',
            'Paladin',
            'Ranger'
          ],
          inGame: true
        },
        {
          name: 'Ventriloquism',
          description: 'Canbeusedtoconfusemonstersforseveralturns',
          races: ['Gnome'],
          classes: ['Wizard'],
          inGame: false
        },
        {
          name: 'Woodcraft',
          description:
            'Decreasesthetimetocutdowntrees,increasescriticalhitchanceagainstplantmonsters',
          races: ['None'],
          classes: ['Barbarian', 'Druid', 'Farmer', 'Ranger'],
          inGame: false
        }
      ],
      selectedClass: 'Archer',
      selectedRace: 'Dark Elf',
      randomString: 'Okay'
    }
  },
  computed: {
    selectedCombo() {
      return this.selectedRace + ' ' + this.selectedClass
    },
    startingSkills() {
      const startingSkillsListArray = [
        { name: 'Climbing', source: 'free' },
        { name: 'First Aid', source: 'free' },
        { name: 'Haggling', source: 'free' },
        { name: 'Listening', source: 'free' }
      ]
      this.skillsList.forEach(skill => {
        if (
          skill.races.includes(this.selectedRace || 'All') &&
          skill.classes.includes(this.selectedClass || 'All')
        ) {
          let skillObject = { name: `${skill.name}`, source: 'both' }
          startingSkillsListArray.push(skillObject)
        } else if (skill.races.includes(this.selectedRace)) {
          let skillObject = { name: skill.name, source: 'race' }
          startingSkillsListArray.push(skillObject)
        } else if (skill.classes.includes(this.selectedClass)) {
          let skillObject = { name: skill.name, source: 'class' }
          startingSkillsListArray.push(skillObject)
        }
      })
      return startingSkillsListArray.sort((a, b) => a.name > b.name)
    },
    watch: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.character-choice-header,
ul {
  width: 41vw;
}

.choices {
  display: flex;
  flex-direction: column;
}

.choices-outer {
  display: flex;
}

.race-class-select {
  margin-right: 10px;
  font-size: 1.4em;
}

.race-class-label {
  font-size: 1.5em;
}

#race-span {
  color: darkgreen;
  font-weight: 550;
}
#class-span {
  color: darkblue;
  font-weight: 550;
}

.skills-list-li-race {
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
}

.skills-list-li-class {
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
}

.skills-list-li-both {
  font-weight: 550;
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
}

.skills-list-li-free {
  color: black;
  text-align: start;
  font-size: 1.4em;
  padding-bottom: 5px;
}

.skills-list-li-span-race {
  color: darkgreen;
  font-weight: 600;
}
.skills-list-li-span-class {
  color: darkblue;
  font-weight: 600;
}
.skills-list-li-span-both {
  color: darkred;
  font-weight: 600;
}
.skills-list-li-span-free {
}

h3 {
  font-weight: normal;
  justify-self: flex-start;
  font-size: 1.5em;
  max-width: 500px;
}

#combo-span {
  font-weight: 900;
}

label,
select {
  margin-bottom: 10px;
}

p {
  max-width: 500px;
}
ul {
  margin-left: 0;
  padding-left: 0;
}
li {
  list-style-type: none;
  margin-left: 0;
}
</style>

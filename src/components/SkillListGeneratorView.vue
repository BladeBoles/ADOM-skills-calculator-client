<template>
  <div class="container">
    <div class="hello">Hello there {{ msg }}!</div>
    <label for="player-races">Choose a race: </label>
    <select v-model="selectedRace" name="player-races" id="chosen-race">
      <option v-for="playerRace in playableRaces" :key="playerRace">{{
        playerRace
      }}</option>
    </select>
    <label for="player-classes">Choose a class: </label>
    <select v-model="selectedClass" name="player-classes" id="chosen-class">
      <option v-for="playerClass in playableClasses" :key="playerClass">{{
        playerClass
      }}</option>
    </select>
    <p :playerClass="selectedClass" :playerRace="selectedRace">
      You have chosen a {{ selectedRace }} {{ selectedClass }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'skillsListGeneratorView',
  props: {
    msg: String
  },
  methods: {
    // Find And Replace Text, only serious work here losers
    fart(toReplace) {
      let newArray = []
      toReplace.forEach(skillObject => {
        if (typeof skillObject.races === 'string') {
          skillObject.races = skillObject.races.split(',')
        }
        if (typeof skillObject.classes === 'string') {
          skillObject.classes = skillObject.classes.split(',')
        }
        newArray.push(skillObject)
      })
      this.skillsList = newArray
      console.log(this.skillsList)
    }
  },
  data() {
    return {
      skillsList: [],
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
        'Ratling'
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
        'Chaos Knight'
      ],
      jsonDump: [
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
          races: 'Dark Elf,Drakeling,Mist Elf',
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
          races: 'Ratling',
          classes: 'Merchant,Necromancer,Thief,Weaponsmith',
          inGame: false
        },
        {
          name: 'Archery',
          description: 'Grantsmissileattackbonuses',
          races: 'Hurthling',
          classes: 'Archer,Assassin, Farmer,Fighter,Ranger',
          inGame: false
        },
        {
          name: 'Athletics',
          description: 'Grantsspeedbonus,helpsphysicalAttributestraining',
          races: 'Troll',
          classes:
            'Barbarian,Beastfighter,ChaosKnight,Duelist,Fighter,Monk,Paladin,Ranger,Weaponsmith',
          inGame: false
        },
        {
          name: 'Backstabbing',
          description: 'Grantsachancetoinflictbonusdamageonunawareopponents',
          races: 'Orc',
          classes: 'Assassin,ChaosKnight, Thief',
          inGame: true
        },
        {
          name: 'Bridgebuilding',
          description: 'Allowsbuildingbridges',
          races: 'Troll',
          classes: 'Farmer',
          inGame: true
        },
        {
          name: 'Climbing',
          description:
            'Grantsachancetoclimboutofpits;prerequisitetoentertheRift',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          name: 'Concentration',
          description:
            'IncreasesPPregenerationrate;improvesspelllearningprocess',
          races: 'Mist Elf',
          classes:
            'Archer,Druid,Duelist,Elementalist,Healer,Mindcrafter,Monk,Necromancer,Paladin,Priest,Weaponsmith,Wizard',
          inGame: false
        },
        {
          name: 'Cooking',
          description: 'Allowscookingcorpses',
          races: 'Hurthling',
          classes: 'Healer,Farmer',
          inGame: false
        },
        {
          name: 'Courage',
          description: 'Reducesto-hitpenaltieswhenfightingwithmultipleenemies',
          races: 'None',
          classes: 'None',
          inGame: true
        },
        {
          name: 'Detectitemstatus',
          description: 'GivesachancetoautomaticallyidentifyB/U/Cstatusofanitem',
          races: 'Ratling',
          classes: 'Merchant,Priest',
          inGame: false
        },
        {
          name: 'Detecttraps',
          description:
            'Givesachancetofindtrapspassively/onthespecifiedlocation',
          races: 'Dwarf',
          classes: 'Assassin,Thief,Weaponsmith',
          inGame: true
        },
        {
          name: 'Disarmtraps',
          description: 'Allowsdisarmingtraps',
          races: 'None',
          classes: 'Thief',
          inGame: true
        },
        {
          name: 'Dodge',
          description: 'GrantsDVbonus,grantsasmallchancetoavoidcombatmagic',
          races: 'High Elf,Gray Elf,Mist Elf',
          classes:
            'Archer,Assassin,Barbarian,Beastfighter,ChaosKnight,Duelist,Fighter,Monk,Paladin,Ranger',
          inGame: false
        },
        {
          name: 'Findweakness',
          description: 'Grantsachancetoinflictacriticalhit',
          races: 'Dark Elf,Orc',
          classes:
            'Assassin,ChaosKnight,Duelist,Fighter,Healer,Monk,Necromancer,Weaponsmith',
          inGame: false
        },
        {
          name: 'Firstaid',
          description: 'CanbeusedtorestorerecentlylostHP',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          name: 'Fletchery',
          description: 'Allowscreatingammunitionusingfletcherysets',
          races: 'None',
          classes: 'Archer,Farmer',
          inGame: false
        },
        {
          name: 'Foodpreservation',
          description:
            'Increasesthechancetogeneratecorpses,helpspreservecorpseslonger',
          races: 'Drakeling,Human,Hurthling,Troll',
          classes: 'Farmer,Necromancer,Ranger',
          inGame: false
        },
        {
          name: 'Gardening',
          description:
            'Allowsplantingherbbushesandgatheringherbseedsfromblossomingbushes',
          races: 'Hurthling',
          classes: 'Druid,Farmer',
          inGame: true
        },
        {
          name: 'Gemology',
          description:
            'Grantsachancetogenerateandautomaticallyidentifygemsfromdigging',
          races: 'Gnome,Troll',
          classes: 'Elementalist,Merchant,Mindcrafter',
          inGame: false
        },
        {
          name: 'Haggling',
          description: 'Canbeusedtohagglewithshopkeepers',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          name: 'Healing',
          description: 'PassivelyrestoresHP',
          races: 'None',
          classes:
            'Beastfighter,Druid,Duelist,Elementalist,Healer,Monk,Paladin,Priest,Ranger,Wizard',
          inGame: true
        },
        {
          name: 'Herbalism',
          description: 'Improvesthequality(B/U/Cstatus)ofcollectedherbs',
          races: 'None',
          classes:
            'Barbarian,Beastfighter,Druid,Farmer,Healer,Merchant,Mindcrafter,Necromancer,Priest,Ranger,Wizard',
          inGame: true
        },
        {
          name: 'Law',
          description: 'ProvidesmessageswhenthePCperformslawful/chaoticacts',
          races: 'None',
          classes: 'Duelist;Paladinifstartingalignmentislawful',
          inGame: true
        },
        {
          name: 'Listening',
          description:
            'Increasesthechanceofreceivingaudiblemessages(e.g.poolorriversounds)',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          name: 'Literacy',
          description: 'Allowsreadingscrolls,spellbooksandinscriptionsongraves',
          races: 'High Elf,Gray Elf,Mist ElforstartingLearning≥10',
          classes:
            'Druid,Elementalist,Healer,Merchant,Mindcrafter,Monk,Necromancer,Paladin,Priest,WizardorstartingLearning≥10;BarbarianandBeastfighteronlyifraceallows',
          inGame: true
        },
        {
          name: 'Metallurgy',
          description: 'Canbeusedtoidentifyitemmaterialifitismetallic',
          races: 'Dwarf, Orc',
          classes: 'Elementalist,Fighter,Merchant,Weaponsmith',
          inGame: false
        },
        {
          name: 'Mining',
          description: 'Reducesdiggingtime;increasesthechancetogenerateore',
          races: 'Dwarf,Gnome,Orc,Troll',
          classes: 'None',
          inGame: false
        },
        {
          name: 'Music',
          description: 'Allowsplayingmusicalinstrumentstotameanimals',
          races: 'Drakeling',
          classes: 'Bard,Mindcrafter, Priest',
          inGame: false
        },
        {
          name: 'Necromancy',
          description: 'Canbeusedtocreateundeadslaves',
          races: 'Mist Elf',
          classes: 'Necromancer',
          inGame: false
        },
        {
          name: 'Picklocks',
          description: 'Allowstheuseofthievespickstoopenlockeddoors',
          races: 'None',
          classes: 'Assassin,Thief',
          inGame: true
        },
        {
          name: 'Pickpockets',
          description: 'Canbeusedtostealfromhumanoidenemies',
          races: 'Gnome',
          classes: 'Merchant,Thief',
          inGame: true
        },
        {
          name: 'Smithing',
          description: 'Canbeappliedtouseaforgetoimprovemetallicitems',
          races: 'Dwarf',
          classes: 'Farmer,Weaponsmith',
          inGame: true
        },
        {
          name: 'Stealth',
          description: 'Grantsachancetonotbedetectedbymonsters/NPCs',
          races: 'Dark Elf, Gray Elf,High Elf,Hurthling, Mist Elf,Ratling',
          classes:
            'Archer,Assassin, Barbarian,Beastfighter,Farmer,Fighter,Mindcrafter,Monk,Necromancer,Paladin,Thief,Wizard',
          inGame: true
        },
        {
          name: 'Survival',
          description: 'Canbeusedtofindfoodinthewilderness',
          races: 'RatlingorbornunderFalcon',
          classes:
            'Barbarian,Beastfighter,Druid,Farmer,Merchant,Ranger(oranycharacterbornunderFalcon)',
          inGame: false
        },
        {
          name: 'Swimming',
          description: 'Reducesdrowningdamage',
          races: 'Drakeling,Human,Ratling',
          classes:
            'Barbarian,Beastfighter,Druid,Elementalist,Fighter,Paladin,Ranger',
          inGame: true
        },
        {
          name: 'Tactics',
          description: 'Increasestacticsbonusesanddecreasespenalties',
          races: 'None',
          classes: 'None',
          inGame: true
        },
        {
          name: 'Twoweaponcombat',
          description:
            'Decreasesto-hitandenergycostpenaltieswhiledual-wielding',
          races: 'None',
          classes: 'Assassin,Barbarian,ChaosKnight,Fighter,Paladin,Ranger',
          inGame: true
        },
        {
          name: 'Ventriloquism',
          description: 'Canbeusedtoconfusemonstersforseveralturns',
          races: 'Gnome',
          classes: 'Wizard',
          inGame: false
        },
        {
          name: 'Woodcraft',
          description:
            'Decreasesthetimetocutdowntrees,increasescriticalhitchanceagainstplantmonsters',
          races: 'None',
          classes: 'Barbarian,Druid,Farmer,Ranger',
          inGame: false
        }
      ],
      selectedClass: 'Fighter',
      selectedRace: 'Human'
    }
  },
  computed: {},
  mounted() {
    this.fart(this.jsonDump)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

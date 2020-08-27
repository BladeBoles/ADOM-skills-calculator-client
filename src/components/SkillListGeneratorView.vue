<template>
  <div class="container">
    <div class="hello">Hello there {{ msg }}!</div>
    <p>Here's a list of races with their skills:</p>
    <ul class="playableraces">
      <li v-for="race in playableraces" :key="race.name">
        Race: {{ race.name }}
        <br />
        <br />
        skills:

        <div v-for="(skill, index) in race.skills" :key="index">
          {{ skill }}
        </div>
        <br />
      </li>
    </ul>
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
      playableraces: [
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
      playableclasses: [
        {
          name: 'Fighter',
          skills: [
            'Archery',
            'Athletics',
            'Climbing',
            'Dodge',
            'Find Weakness',
            'First Aid',
            'Haggling',
            'Listening',
            'Metallurgy',
            'Stealth',
            'Swimming',
            'Two Weapon Combat'
          ],
          notes: 'none'
        }
      ],
      jsonDump: [
        {
          skill: 'Alchemy',
          description: 'Allowsbrewingpotionsusingafixedlistofrecipes',
          races: [],
          classes: ['Assassin', 'Merchant', 'Necromancer', 'Wizard'],
          inGame: false
        },
        {
          skill: 'Alertness',
          description: 'Givesachancetoevadecombatmagicandtrap',
          races: 'Darkelf,Drakeling,Mistelf',
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
          skill: 'Appraising',
          description: 'Performsitemqualityevaluation',
          races: 'Ratling',
          classes: 'Merchant,Necromancer,Thief,Weaponsmith',
          inGame: false
        },
        {
          skill: 'Archery',
          description: 'Grantsmissileattackbonuses',
          races: 'Hurthling',
          classes: 'Archer,Assassin, Farmer,Fighter,Ranger',
          inGame: false
        },
        {
          skill: 'Athletics',
          description: 'Grantsspeedbonus,helpsphysicalAttributestraining',
          races: 'Troll',
          classes:
            'Barbarian,Beastfighter,ChaosKnight,Duelist,Fighter,Monk,Paladin,Ranger,Weaponsmith',
          inGame: false
        },
        {
          skill: 'Backstabbing',
          description: 'Grantsachancetoinflictbonusdamageonunawareopponents',
          races: 'Orc',
          classes: 'Assassin,ChaosKnight, Thief',
          inGame: true
        },
        {
          skill: 'Bridgebuilding',
          description: 'Allowsbuildingbridges',
          races: 'Troll',
          classes: 'Farmer',
          inGame: true
        },
        {
          skill: 'Climbing',
          description:
            'Grantsachancetoclimboutofpits;prerequisitetoentertheRift',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          skill: 'Concentration',
          description:
            'IncreasesPPregenerationrate;improvesspelllearningprocess',
          races: 'Mistelf',
          classes:
            'Archer,Druid,Duelist,Elementalist,Healer,Mindcrafter,Monk,Necromancer,Paladin,Priest,Weaponsmith,Wizard',
          inGame: false
        },
        {
          skill: 'Cooking',
          description: 'Allowscookingcorpses',
          races: 'Hurthling',
          classes: 'Healer,Farmer',
          inGame: false
        },
        {
          skill: 'Courage',
          description: 'Reducesto-hitpenaltieswhenfightingwithmultipleenemies',
          races: 'None',
          classes: 'None',
          inGame: true
        },
        {
          skill: 'Detectitemstatus',
          description: 'GivesachancetoautomaticallyidentifyB/U/Cstatusofanitem',
          races: 'Ratling',
          classes: 'Merchant,Priest',
          inGame: false
        },
        {
          skill: 'Detecttraps',
          description:
            'Givesachancetofindtrapspassively/onthespecifiedlocation',
          races: 'Dwarf',
          classes: 'Assassin,Thief,Weaponsmith',
          inGame: true
        },
        {
          skill: 'Disarmtraps',
          description: 'Allowsdisarmingtraps',
          races: 'None',
          classes: 'Thief',
          inGame: true
        },
        {
          skill: 'Dodge',
          description: 'GrantsDVbonus,grantsasmallchancetoavoidcombatmagic',
          races: 'Highelf,Grayelf,Mistelf',
          classes:
            'Archer,Assassin,Barbarian,Beastfighter,ChaosKnight,Duelist,Fighter,Monk,Paladin,Ranger',
          inGame: false
        },
        {
          skill: 'Findweakness',
          description: 'Grantsachancetoinflictacriticalhit',
          races: 'Darkelf,Orc',
          classes:
            'Assassin,ChaosKnight,Duelist,Fighter,Healer,Monk,Necromancer,Weaponsmith',
          inGame: false
        },
        {
          skill: 'Firstaid',
          description: 'CanbeusedtorestorerecentlylostHP',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          skill: 'Fletchery',
          description: 'Allowscreatingammunitionusingfletcherysets',
          races: 'None',
          classes: 'Archer,Farmer',
          inGame: false
        },
        {
          skill: 'Foodpreservation',
          description:
            'Increasesthechancetogeneratecorpses,helpspreservecorpseslonger',
          races: 'Drakeling,Human,Hurthling,Troll',
          classes: 'Farmer,Necromancer,Ranger',
          inGame: false
        },
        {
          skill: 'Gardening',
          description:
            'Allowsplantingherbbushesandgatheringherbseedsfromblossomingbushes',
          races: 'Hurthling',
          classes: 'Druid,Farmer',
          inGame: true
        },
        {
          skill: 'Gemology',
          description:
            'Grantsachancetogenerateandautomaticallyidentifygemsfromdigging',
          races: 'Gnome,Troll',
          classes: 'Elementalist,Merchant,Mindcrafter',
          inGame: false
        },
        {
          skill: 'Haggling',
          description: 'Canbeusedtohagglewithshopkeepers',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          skill: 'Healing',
          description: 'PassivelyrestoresHP',
          races: 'None',
          classes:
            'Beastfighter,Druid,Duelist,Elementalist,Healer,Monk,Paladin,Priest,Ranger,Wizard',
          inGame: true
        },
        {
          skill: 'Herbalism',
          description: 'Improvesthequality(B/U/Cstatus)ofcollectedherbs',
          races: 'None',
          classes:
            'Barbarian,Beastfighter,Druid,Farmer,Healer,Merchant,Mindcrafter,Necromancer,Priest,Ranger,Wizard',
          inGame: true
        },
        {
          skill: 'Law',
          description: 'ProvidesmessageswhenthePCperformslawful/chaoticacts',
          races: 'None',
          classes: 'Duelist;Paladinifstartingalignmentislawful',
          inGame: true
        },
        {
          skill: 'Listening',
          description:
            'Increasesthechanceofreceivingaudiblemessages(e.g.poolorriversounds)',
          races: 'All',
          classes: 'All',
          inGame: false
        },
        {
          skill: 'Literacy',
          description: 'Allowsreadingscrolls,spellbooksandinscriptionsongraves',
          races: 'Highelf,Grayelf,MistelforstartingLearning≥10',
          classes:
            'Druid,Elementalist,Healer,Merchant,Mindcrafter,Monk,Necromancer,Paladin,Priest,WizardorstartingLearning≥10;BarbarianandBeastfighteronlyifraceallows',
          inGame: true
        },
        {
          skill: 'Metallurgy',
          description: 'Canbeusedtoidentifyitemmaterialifitismetallic',
          races: 'Dwarf, Orc',
          classes: 'Elementalist,Fighter,Merchant,Weaponsmith',
          inGame: false
        },
        {
          skill: 'Mining',
          description: 'Reducesdiggingtime;increasesthechancetogenerateore',
          races: 'Dwarf,Gnome,Orc,Troll',
          classes: 'None',
          inGame: false
        },
        {
          skill: 'Music',
          description: 'Allowsplayingmusicalinstrumentstotameanimals',
          races: 'Drakeling',
          classes: 'Bard,Mindcrafter, Priest',
          inGame: false
        },
        {
          skill: 'Necromancy',
          description: 'Canbeusedtocreateundeadslaves',
          races: 'Mistelf',
          classes: 'Necromancer',
          inGame: false
        },
        {
          skill: 'Picklocks',
          description: 'Allowstheuseofthievespickstoopenlockeddoors',
          races: 'None',
          classes: 'Assassin,Thief',
          inGame: true
        },
        {
          skill: 'Pickpockets',
          description: 'Canbeusedtostealfromhumanoidenemies',
          races: 'Gnome',
          classes: 'Merchant,Thief',
          inGame: true
        },
        {
          skill: 'Smithing',
          description: 'Canbeappliedtouseaforgetoimprovemetallicitems',
          races: 'Dwarf',
          classes: 'Farmer,Weaponsmith',
          inGame: true
        },
        {
          skill: 'Stealth',
          description: 'Grantsachancetonotbedetectedbymonsters/NPCs',
          races: 'Darkelf, Grayelf,Highelf,Hurthling, Mistelf,Ratling',
          classes:
            'Archer,Assassin, Barbarian,Beastfighter,Farmer,Fighter,Mindcrafter,Monk,Necromancer,Paladin,Thief,Wizard',
          inGame: true
        },
        {
          skill: 'Survival',
          description: 'Canbeusedtofindfoodinthewilderness',
          races: 'RatlingorbornunderFalcon',
          classes:
            'Barbarian,Beastfighter,Druid,Farmer,Merchant,Ranger(oranycharacterbornunderFalcon)',
          inGame: false
        },
        {
          skill: 'Swimming',
          description: 'Reducesdrowningdamage',
          races: 'Drakeling,Human,Ratling',
          classes:
            'Barbarian,Beastfighter,Druid,Elementalist,Fighter,Paladin,Ranger',
          inGame: true
        },
        {
          skill: 'Tactics',
          description: 'Increasestacticsbonusesanddecreasespenalties',
          races: 'None',
          classes: 'None',
          inGame: true
        },
        {
          skill: 'Twoweaponcombat',
          description:
            'Decreasesto-hitandenergycostpenaltieswhiledual-wielding',
          races: 'None',
          classes: 'Assassin,Barbarian,ChaosKnight,Fighter,Paladin,Ranger',
          inGame: true
        },
        {
          skill: 'Ventriloquism',
          description: 'Canbeusedtoconfusemonstersforseveralturns',
          races: 'Gnome',
          classes: 'Wizard',
          inGame: false
        },
        {
          skill: 'Woodcraft',
          description:
            'Decreasesthetimetocutdowntrees,increasescriticalhitchanceagainstplantmonsters',
          races: 'None',
          classes: 'Barbarian,Druid,Farmer,Ranger',
          inGame: false
        }
      ]
    }
  },
  mounted() {
    this.fart(this.jsonDump)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

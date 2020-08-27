<template>
  <div class="container">
    <div class="hello">Hello there {{ msg }}!</div>
    <p>Here's your list of skills: {{ skillsList }}</p>
    <p>Here's a list of races with their skills:</p>
    <ul class="playableRaces">
      <li v-for="race in playableRaces" :key="race.name">
        Race: {{ race.name }}
        <br />
        <br />
        Skills:

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
  name: 'SkillsListGeneratorView',
  props: {
    msg: String
  },
  data() {
    return {
      skillsList: 'dying',
      playableRaces: [
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

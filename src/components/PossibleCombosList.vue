<template>
  <ul v-if="combosList.length > 0">
    <li v-for="(race, index) in uniqueRaces" :key="`${race}${index}`">
      <div class="race-list-header">
        <h4>{{ race }} Classes:</h4>
        <button @click="toggleRaceVisibility(race)">
          {{ hiddenRaces.includes(race) ? 'Show' : 'Hide' }}
        </button>
      </div>

      <ul class="race-list" v-if="!hiddenRaces.includes(race)">
        <li
          v-for="(combo, index) in combosForRace(race)"
          :key="`${combo}${index}`"
        >
          {{ combo.playableClass }}
        </li>
      </ul>
    </li>
  </ul>
  <p v-else>Sorry, no combo begins the game with that skill list.</p>
</template>

<script>
export default {
  name: 'PossibleCombosList',
  data() {
    return {
      hiddenRaces: [
        'Dark Elf',
        'Drakeling',
        'Dwarf',
        'Gnome',
        'Gray Elf',
        'High Elf',
        'Human',
        'Hurthling',
        'Mist Elf',
        'Orc',
        'Ratling',
        'Troll',
        'No Race'
      ]
    }
  },
  props: {
    combosList: Array
  },
  computed: {
    uniqueRaces() {
      const races = []
      this.combosList.forEach(combo => {
        if (!races.includes(combo.race)) {
          races.push(combo.race)
        }
      })
      return races
    }
  },
  methods: {
    combosForRace(race) {
      return this.combosList.filter(combo => combo.race === race)
    },
    toggleRaceVisibility(race) {
      if (this.hiddenRaces.includes(race)) {
        this.hiddenRaces.splice(this.hiddenRaces.indexOf(race), 1)
      } else {
        this.hiddenRaces.push(race)
      }
    }
  }
}
</script>

<style scoped>
h4 {
  margin: 0;
}
ul.race-list {
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
div.race-list-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}
button {
  margin-left: 20px;

  height: 25px;
}
</style>

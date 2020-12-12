<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn @skill-added="updateWantedSkills($event)" />
      </div>

      <CalculateCombosButton @click="calculateCombos"
        >Calculate Combos</CalculateCombosButton
      >
    </form>
    <PossibleCombosList :combosList="possibleCombos" />
  </div>
</template>

<script>
import SkillPickerColumn from '../components/SkillPickerColumn'
import CalculateCombosButton from '../components/CalculateCombosButton'
import PossibleCombosList from '../components/PossibleCombosList'
import {
  raceObjects,
  playableRaces,
  playableClasses,
  skillsList,
  allCombinations
} from '../tables/skills.js'

export default {
  name: 'NewSkillsPicker',
  components: { SkillPickerColumn, CalculateCombosButton, PossibleCombosList },
  data() {
    return {
      wantedSkills: [],
      allCombos: [],
      possibleCombos: []
    }
  },
  methods: {
    updateWantedSkills(newSkillsList) {
      this.wantedSkills = newSkillsList
    },
    calculateCombos() {
      this.findValidCombos(this.wantedSkills)
    },
    skillSelected(event = {}) {
      let skillIndex = this.wantedSkills.indexOf(event.target.value)
      if (skillIndex === -1) this.wantedSkills.push(event.target.value)
      else {
        this.wantedSkills.splice(skillIndex, 1)
      }

      this.possibleCombos = this.findValidCombos(this.wantedSkills)
    },
    findValidCombos(desiredSkills = []) {
      try {
        const comboPossibilities = []
        this.allCombos.forEach(combination => {
          if (
            desiredSkills.every(
              skill =>
                combination.skills.includes(skill.name) ||
                combination.doubleSkills.includes(skill.name)
            )
          ) {
            comboPossibilities.push(combination)
          }
        })
        this.possibleCombos = comboPossibilities
      } catch (error) {
        console.log('error: ', error)
      }
    },
    removeDuplicateStrings(array) {
      return array.filter((a, b) => array.indexOf(a) === b)
    }
  },
  mounted() {
    this.allCombos = allCombinations()
  }
}
</script>

<style scoped>
.double-columns-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.columns-component-div {
  display: flex;
  justify-content: center;
}

.skill-picker-form {
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 400px;
  justify-content: space-between;
}
</style>

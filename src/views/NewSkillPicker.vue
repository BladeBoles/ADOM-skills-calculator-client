<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn @skill-added="updateCombos($event)" />
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
  skillsList
} from '../tables/skills.js'

export default {
  name: 'NewSkillsPicker',
  components: { SkillPickerColumn, CalculateCombosButton, PossibleCombosList },
  data() {
    return {
      raceObjects,
      playableRaces,
      playableClasses,
      skillsList,
      wantedSkills: [],
      possibleCombos: ['Kobold Dreamweaver', 'Orc Scientist', 'Sweaty Marauder']
    }
  },
  methods: {
    updateCombos(newSkillsList) {
      this.wantedSkills = newSkillsList
    },
    calculateCombos() {
      this.findValidCombos(this.wantedSkills)
    },
    skillSelected(event = {}) {
      console.log(event.target.value)
      let skillIndex = this.wantedSkills.indexOf(event.target.value)
      console.log(skillIndex)
      if (skillIndex === -1) this.wantedSkills.push(event.target.value)
      else {
        this.wantedSkills.splice(skillIndex, 1)
      }

      this.possibleCombos = this.findValidCombos(this.wantedSkills)
      console.log(this.possibleCombos)
    },
    findValidCombos(desiredSkills = {}) {
      try {
        console.log('yo')
        // get desired skills list in an array

        // for the first skill, calculate every possible combo and store it in an array
        let firstSkillName = desiredSkills.slice(0, 1)[0].name
        console.log(firstSkillName)

        let firstSkillObject = {}

        firstSkillObject = this.skillsList.find(
          skillName => firstSkillName === skillName.name
        )
        let possibleCombos = []
        let newCompareArray = []
        let answerArray = []

        firstSkillObject.races.forEach(race => {
          possibleCombos.push(...this.allCombosForRace(race))
        })
        firstSkillObject.classes.forEach(playerClass =>
          possibleCombos.push(...this.allCombosForClass(playerClass))
        )

        desiredSkills.forEach(skill => {
          let skillObject = this.skillsList.find(
            skillName => skill.name === skillName.name
          )
          let allRaceCombos = []
          skillObject.races.forEach(race => {
            allRaceCombos = [...this.allCombosForRace(race), ...allRaceCombos]
          })
          let allClassCombos = []
          skillObject.classes.forEach(playerClass => {
            allClassCombos = [
              ...this.allCombosForClass(playerClass),
              ...allClassCombos
            ]
          })
          possibleCombos = possibleCombos.filter(combo => {
            return allRaceCombos.concat(allClassCombos).indexOf(combo) !== -1
          })
        })
        this.possibleCombos = possibleCombos
      } catch (error) {
        console.log('error: ', error)
      }

      // for each other skill, calculate every combo but only add it to the array if it already exists

      // return the finished possibilities

      console.log(desiredSkills)
    },
    allCombosForRace(playableRace) {
      let allCombos = []
      this.playableClasses.forEach(playableClass => {
        if (playableRace !== 'None')
          allCombos.push(`${playableRace} ${playableClass}`)
      })

      return allCombos
    },
    allCombosForClass(playableClass) {
      let allCombos = []
      this.playableRaces.forEach(playableRace =>
        allCombos.push(`${playableRace} ${playableClass}`)
      )
      return allCombos
    },

    removeDuplicateStrings(array) {
      return array.filter((a, b) => array.indexOf(a) === b)
    }
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

<template>
  <div>
    <p>
      Bards start with random skills and merchants have slightly different
      skills depending on specialty.
    </p>
    <p>
      All characters train in listening, haggling, first aid and climbing so
      they are not included.
    </p>
    <p>
      Some skills can only be obtained in game, so these are not included in
      this list.
    </p>
    <div class="skill-picker">
      <div class="choices-div">
        <div
          v-for="skill in skillsList"
          :key="skill.name + 'div'"
          class="checkbox-div"
        >
          <input
            @click="event => skillSelected(event)"
            :key="skill.name + 'input'"
            type="checkbox"
            :value="skill.name"
          />
          <label :key="skill.name + 'label'" for="checkbox">{{
            skill.name
          }}</label>
        </div>
      </div>
      <div class="combo-list-div">
        <ul>
          <li v-for="combo in this.possibleCombos" :key="combo + Math.random()">
            {{ combo }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  raceObjects,
  playableRaces,
  playableClasses,
  skillsList
} from '../tables/skills.js'
export default {
  name: 'SkillsPicker',
  data() {
    return {
      raceObjects,
      playableRaces,
      playableClasses,
      skillsList,
      wantedSkills: [],
      possibleCombos: []
    }
  },
  methods: {
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
        let firstSkillName = desiredSkills.slice(0, 1)[0]
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
            skillName => skill === skillName.name
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
        return possibleCombos
      } catch (error) {
        console.log('error: ', error)
      }

      // for each other skill, calculate every combo but only add it to the array if it already exists

      // return the finished possibilities

      console.log(desiredSkills)
    },
    allCombosForRace(playableRace) {
      let allCombos = []
      this.playableClasses.forEach(playableClass =>
        // allCombos.push({
        //   playableRace,
        //   playableClass,
        //   comboName: `${playableRace} ${playableClass}`
        // })
        {
          if (playableRace !== 'None')
            allCombos.push(`${playableRace} ${playableClass}`)
        }
      )

      return allCombos
    },
    allCombosForClass(playableClass) {
      let allCombos = []
      this.playableRaces.forEach(playableRace =>
        // allCombos.push({
        //   playableRace,
        //   playableClass,
        //   comboName: `${playableRace} ${playableClass}`
        // })
        allCombos.push(`${playableRace} ${playableClass}`)
      )
      return allCombos
    },

    removeDuplicateStrings(array) {
      return array.filter((a, b) => array.indexOf(a) === b)
    }
  },
  mounted() {}
}
</script>
<style scoped>
div.skill-picker {
  display: flex;
  flex-direction: row;
}
</style>

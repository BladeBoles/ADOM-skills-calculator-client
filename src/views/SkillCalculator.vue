<template>
  <div class="container">
    <div class="choices-outer">
      <div class="choices">
        <label class="race-class-label" for="player-races"></label>
        <select class="race-class-select" v-model="selectedRace">
          <option
            v-for="playerRace in playableRaces"
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
            v-for="playerClass in playableClasses"
            class="race-class-option"
            :key="playerClass"
            >{{ playerClass }}</option
          >
        </select>
      </div>
    </div>
    <div class="list-and-title">
      <h3 class="character-choice-header">
        Starting Skills for <span id="race-span">{{ selectedRace }} </span>

        <span id="class-span">{{ selectedClass }}</span
        >:
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
  name: 'SkillCalculator',

  data() {
    return {
      raceObjects,
      playableRaces,
      playableClasses,
      skillsList,
      selectedClass: 'Archer',
      selectedRace: 'Dark Elf',
      randomString: 'Okay'
    }
  },
  mounted() {
    playableRaces.push('No Race')
    playableClasses.push('No Class')
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  font-size: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.character-choice-header,
ul {
  width: 40vw;
}

.choices-outer {
  display: flex;
}

.list-and-title {
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: flex-start;
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

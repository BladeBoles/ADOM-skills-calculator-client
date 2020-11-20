<template>
  <div class="column-div">
    <h3>Choose Your Skills:</h3>
    <SkillChoiceModal @skill-chosen="showChosen" />
    <ul>
      <li v-for="(skill, index) in chosenSkills" :key="`${skill.name}${index}`">
        <span class="skill-name-span">{{ skill.name }}</span
        ><font-awesome-icon
          id="minus"
          icon="minus-square"
          @click="removeSkill(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SkillChoiceModal from './modals/SkillChoiceModal'
export default {
  name: 'SkillPickerColumn',
  components: { SkillChoiceModal },
  data: function() {
    return {
      chosenSkills: [
        { name: 'Alertness' },
        { name: 'Healing' },
        { name: 'Alchemy' }
      ]
    }
  },
  methods: {
    showChosen: function(chosenSkill) {
      this.chosenSkills.push({ name: chosenSkill })
      this.$emit('skill-added', this.chosenSkills)
    },
    removeSkill: function(skillToRemove) {
      console.log(skillToRemove)
      this.chosenSkills.splice(skillToRemove, 1)
      this.$emit('skill-added', this.chosenSkills)
    }
  }
}
</script>

<style scoped>
#minus {
  font-size: 20px;
  padding-left: 25px;
}

#minus:hover {
  color: darkred;
  cursor: pointer;
}
.skill-name-span {
  font-size: 24px;
}
.skill-name-span:hover {
  text-decoration: 2px black underline;
  cursor: pointer;
}
.column-div {
  display: flex;
  flex-direction: column;
}
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  padding-top: 10px;
}
</style>

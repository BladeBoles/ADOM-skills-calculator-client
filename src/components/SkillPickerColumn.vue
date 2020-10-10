<template>
  <div class="column-div">
    <h3>Choose Your Skills:</h3>
    <SkillChoiceModal />
    <ul>
      <li v-for="skill in chosenSkills" :key="skill.name">
        <span class="skill-name-span">{{ skill.name }}</span
        ><font-awesome-icon id="minus" icon="minus-square" />
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

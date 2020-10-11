<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn />
      </div>

      <CalculateCombosButton>Calculate Combos</CalculateCombosButton>
    </form>
    <PossibleCombosList :combosList="combosList" />
  </div>
</template>

<script>
import SkillPickerColumn from '../components/SkillPickerColumn'
import CalculateCombosButton from '../components/CalculateCombosButton'
import PossibleCombosList from '../components/PossibleCombosList'
export default {
  name: 'NewSkillsPicker',
  components: { SkillPickerColumn, CalculateCombosButton, PossibleCombosList },
  data() {
    return {
      combosList: ['Kobold Dreamweaver', 'Orc Scientist', 'Sweaty Marauder']
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

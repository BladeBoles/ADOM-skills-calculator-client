<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" submit.prevent="submit">
      <div class="columns-component-div">
        <SkillPickerColumn />
      </div>

      <CalculateCombosButton>Calculate Combos</CalculateCombosButton>
    </form>
  </div>
</template>

<script>
import SkillPickerColumn from '../components/SkillPickerColumn'
import CalculateCombosButton from '../components/CalculateCombosButton'
export default {
  name: 'NewSkillsPicker',
  components: { SkillPickerColumn, CalculateCombosButton }
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

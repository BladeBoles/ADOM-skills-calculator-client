<template>
  <div class="double-columns-container">
    <form class="skill-picker-form" submit.prevent="submit">
      <SkillPickerColumn />
      <SkillPickerColumn />

      <button @click.prevent="submit" for="form-button">
        Calculate Combos
      </button>
    </form>
  </div>
</template>

<script>
import SkillPickerColumn from '../components/SkillPickerColumn'
export default {
  name: 'NewSkillsPicker',
  components: { SkillPickerColumn },
  methods: {
    submit() {
      console.log('Potato salad is tasy')
    }
  }
}
</script>

<style scoped>
.double-columns-container {
}

.skill-picker-form {
  display: flex;
  flex-direction: row;
  width: 80vw;
  max-width: 400px;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>

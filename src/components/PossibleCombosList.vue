<template>
  <ul>
    <li v-for="combo in this.combosList" :key="combo">{{ combo }}</li>
  </ul>
</template>

<script>
export default {
  name: 'PossibleCombosList',
  props: {
    combosList: Array
  }
}
</script>

<style lang="scss" scoped></style>

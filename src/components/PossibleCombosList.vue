<template>
  <ul>
    <li v-for="(combo, index) in combosList" :key="`${combo}${index}`">
      {{ combo }}
    </li>
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

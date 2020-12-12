<template>
  <ul v-if="combosList.length > 0">
    <li v-for="(combo, index) in combosList" :key="`${combo}${index}`">
      {{ `${combo.race} ${combo.playableClass}` }}
    </li>
  </ul>
  <p v-else>Sorry, no combo begins the game with that skill list.</p>
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

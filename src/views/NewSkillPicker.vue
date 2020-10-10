<template>
  <div class="double-columns-container">
    <ul class="column-ul">
      <li class="column-li"></li>
      <li class="column-li"></li>
      <li class="column-li"></li>
      <li class="column-li"></li>
      <li class="column-li"></li>
    </ul>
    <ul class="column-ul">
      <li class="column-li"></li>
      <li class="column-li"></li>
      <li class="column-li"></li>
      <li class="column-li"></li>
      <li class="column-li"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewSkillsPicker'
}
</script>

<style scoped>
.double-columns-container {
  display: flex;
  flex-direction: row;
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>

<template>
  <div class="container">
    <div class="hello">Hello there {{ msg }}!</div>
    <p>Here's your list of skills: {{ skillsList }}</p>
  </div>
</template>

<script>
export default {
  name: 'SkillsListGeneratorView',
  props: {
    msg: String
  },
  data() {
    return {
      skillsList: 'dying'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

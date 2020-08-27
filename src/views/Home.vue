<template>
  <div class="home">
    <SkillsListGeneratorView msg="ADOM lover" />
  </div>
</template>

<script>
// @ is an alias to /src
import SkillsListGeneratorView from '@/components/SkillListGeneratorView.vue'

export default {
  name: 'Home',
  components: {
    SkillsListGeneratorView
  }
}
</script>

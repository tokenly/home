<template lang="pug">

div.home
  hero
  content

</template>

<script>

import Hero from './hero.vue'
import Content from './content.vue'

export default {
  components: {Hero, Content},
  data () {
    return {
    }
  },
  created () {
  },

  methods: {

  },

  computed: {
    //compute some form labels
  }
}

</script>

<style lang="sass?indentedSyntax=true" scoped>


</style>

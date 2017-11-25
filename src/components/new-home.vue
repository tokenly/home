<template lang="pug">
div.home
  hero
  about
  products
  token-layer
  team
  partners
  more-details

</template>

<script>

import Hero from './hero.vue'
import About from './about.vue'
import Products from './products.vue'
import TokenLayer from './token-layer.vue'
import Team from './team.vue'
import Partners from './partners.vue'
import MoreDetails from './more-details.vue'

export default {
  components: {Hero, About, Products, TokenLayer, Team, Partners, MoreDetails},
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

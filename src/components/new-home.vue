<template lang="pug">
div.home
  hero
  open-for-business
  about
  div.brand-section-divider
  products
  div.brand-section-divider
  token-layer
  div.brand-section-divider
  team
  div.brand-section-divider
  advisors
  div.brand-section-divider
  partners
  div.brand-section-divider
  faq
  div.brand-section-divider
  more-details
</template>

<script>

import Hero from './hero.vue'
import OpenForBusiness from './open_for_business.vue'
import SubHero from './sub_hero.vue'
import About from './about.vue'
import Products from './products.vue'
import TokenLayer from './token-layer.vue'
import Faq from './faq.vue'
import Team from './team.vue'
import Advisors from './advisors.vue'
import Partners from './partners.vue'
import MoreDetails from './more-details.vue'

export default {
  components: {Hero, OpenForBusiness, SubHero, About, Products, TokenLayer, Faq, Team, Advisors, Partners, MoreDetails},
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

.brand-section-divider
  padding: 5px
  background: #039BE5;
  background: linear-gradient(to right, #29B6F6, #039BE5, #01579B);

.sub-hero-divider
  width: 100%

</style>

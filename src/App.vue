<template lang="pug">
#app()
  navigation
  hero
  about
  products
  token-layer
  team
  partners
  more-details
  return-to-top
  tokenly-footer
</template>

<script>
import Navigation from './components/nav.vue'
import Hero from './components/hero.vue'
import About from './components/about.vue'
import Products from './components/products.vue'
import TokenLayer from './components/token-layer.vue'
import Team from './components/team.vue'
import Partners from './components/partners.vue'
import MoreDetails from './components/more-details.vue'
import ReturnToTop from './components/return-to-top.vue'
import TokenlyContent from './components/content.vue'
import TokenlyFooter from './components/footer.vue'

export default {
  name: 'app',
  components: {Navigation, Hero, About, ReturnToTop, TokenlyContent, TokenlyFooter, Products, MoreDetails, TokenLayer, Team, Partners },
  data () {
    return {}
  },
  methods: {
  }
}

</script>

<style lang="sass?indentedSyntax=true">
@import 'sass/application.sass'
</style>

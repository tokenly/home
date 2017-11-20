<template lang="pug">
#app()
  navigation
  hero
  about
  products
  team
  return-to-top
  tokenly-footer
</template>

<script>
import Navigation from './components/nav.vue'
import Hero from './components/hero.vue'
import About from './components/about.vue'
import Products from './components/products.vue'
import Team from './components/team.vue'
import ReturnToTop from './components/return-to-top.vue'
import TokenlyContent from './components/content.vue'
import TokenlyFooter from './components/footer.vue'

export default {
  name: 'app',
  components: { Navigation, Hero, About, ReturnToTop, TokenlyContent, TokenlyFooter, Products, Team },
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

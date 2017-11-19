<template lang="pug">
#app()
  navigation
  hero
  about
  products
  return-to-top
  tokenly-content
  tokenly-footer
</template>

<script>
import Navigation from './components/nav.vue'
import Hero from './components/hero.vue'
import About from './components/about.vue'
import Products from './components/products.vue'
import ReturnToTop from './components/return-to-top.vue'
import TokenlyContent from './components/content.vue'
import TokenlyFooter from './components/footer.vue'

export default {
  name: 'app',
  components: { Navigation, Hero, About, ReturnToTop, TokenlyContent, TokenlyFooter, Products },
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

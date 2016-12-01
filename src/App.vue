<template lang="pug">
#app
  navigation
  hero
  tokenly-content
  tokenly-footer
</template>

<script>
import Navigation from './components/nav.vue'
import Hero from './components/hero.vue'
import TokenlyContent from './components/content.vue'
import TokenlyFooter from './components/footer.vue'

export default {
  name: 'app',
  components: { Navigation, Hero, TokenlyContent, TokenlyFooter },
  data () {
    return {}
  }
}
</script>

<style lang="sass?indentedSyntax=true">
@import 'sass/application.sass'
</style>

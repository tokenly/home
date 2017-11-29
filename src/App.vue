<template lang="pug">
#app()
  navigation
  router-view
  return-to-top
  tokenly-footer
</template>

<script>
import Navigation from './components/nav.vue'
import ReturnToTop from './components/return-to-top.vue'
import TokenlyFooter from './components/footer.vue'

export default {
  name: 'app',
  components: {Navigation, ReturnToTop, TokenlyFooter },
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

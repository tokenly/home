<template lang="pug">
#app
  navigation
  hero
  .app__content
    .container
      h2 What are Tokens?
      p Tokens are a digital representation of your good whether it’s a trading card, song, movie, game, loyalty point, membership, and more. You can buy, sell, trade, or rent tokens for any traditional currency, digital currency, or other tokens. Only token holders can use the goods tokens represent and only creators can issue more.
      .row
        .six.columns
          h3 Redeemables
          p Think `digital gift certificate`
        .six.columns
          h3 Access tokens
          p This kind gives holders entry to features, services or accounts they wouldn’t have access to otherwise.
  tokenly-footer
</template>

<script>
import Navigation from './components/nav.vue'
import Hero from './components/hero.vue'
import TokenlyFooter from './components/footer.vue'

export default {
  name: 'app',
  components: { Navigation, Hero, TokenlyFooter },
  data () {
    return {}
  }
}
</script>

<style lang="sass?indentedSyntax=true">
@import 'sass/application.sass'

#app
  margin: 70px 0 0 0

.app__content
  margin: 80px 10px

body
  font-size: 13px
  +mobile
    font-size: 14px
  +tablet
    font-size: 15px
  +desktop
    font-size: 16px
</style>

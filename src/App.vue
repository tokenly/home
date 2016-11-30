<template lang="pug">
#app
  navigation
  hero
  .app__content
    .app__section
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
    .app__section
      .container
        .perks
          .perk
            .perk__head
              .perk__icon: i.material-icons motorcycle
              .perk__name Low Risk
            .perk__info Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
          .perk
            .perk__head
              .perk__icon: i.material-icons airplanemode_active
              .perk__name For Anyone
            .perk__info Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
          .perk
            .perk__head
              .perk__icon: i.material-icons battery_charging_full
              .perk__name Efficient
            .perk__info Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
          .perk
            .perk__head
              .perk__icon: i.material-icons insert_emoticon
              .perk__name Requards Systems
            .perk__info Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
          .perk
            .perk__head
              .perk__icon: i.material-icons adjust
              .perk__name Token eCommerce
            .perk__info Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
          .perk
            .perk__head
              .perk__icon: i.material-icons details
              .perk__name Crowdfunding
            .perk__info Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
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
</style>

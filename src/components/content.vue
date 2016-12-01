<template lang="pug">
.app__content
  .app__section
    .container
      h2 What are Tokens?
      p Tokens are a digital representation of your good whether it’s a trading card, song, movie, game, loyalty point, membership, and more. You can buy, sell, trade, or rent tokens for any traditional currency, digital currency, or other tokens. Only token holders can use the goods tokens represent and only creators can issue more.
      .row
        .six.columns
          h3 Redeemables
          p These give holders the ability to trade-in their tokens for goods. Think ‘digital gift certificate'.
        .six.columns
          h3 Access tokens
          p This kind gives holders entry to features, services or accounts they wouldn’t have access to otherwise.
  .app__section
    .container
      h2 Why Tokenly?
      .perks__wrapper
        .perks
          .perk(v-for="perk in perks")
            .perk__content
              .perk__head
                .perk__icon: i.material-icons {{ perk.icon }}
              .perk__text
                .perk__name {{ perk.name }}
                .perk__info {{ perk.text }}
  .app__section
    contact
</template>

<script>
import Contact from './contact.vue'

export default {
  components: { Contact },
  data () {
    return {
      perks: [
        {
          icon: 'nature_people',
          name: 'Low Risk',
          text: 'Cheap to get started and take advantage of our tools.'
        },
        {
          icon: 'group_work',
          name: 'For Anyone',
          text: 'Individuals, small and large businesses or established platforms can integrate with our tools.'
        },
        {
          icon: 'battery_charging_full',
          name: 'Efficient',
          text: 'Users can get Instant gratification upon purchase- using token controlled access.'
        },
        {
          icon: 'attach_money',
          name: 'Rewards Systems',
          text: 'Track interaction and reward your audience with a digital gift certificate- otherwise known as a token.'
        },
        {
          icon: 'shopping_basket',
          name: 'Token eCommerce',
          text: 'We give you tools to easily create and embed a store on your website. We take no fees.'
        },
        {
          icon: 'trending_up',
          name: 'Crowdfunding',
          text: 'Have the perfect token related project? Fund it on our token enabled crowdfunding platform.'
        }
      ]
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
.app__content
  margin: 80px 0

.app__section
  &:not(:last-of-type)
    margin-bottom: 3em

$perk-count: 6
$perk-width: 600px
$perk-spacing: 40

.perks__wrapper
  padding-top: 1em
  overflow: hidden

.perks
  display: flex
  justify-content: space-between
  flex-wrap: wrap

$perk-color-1: #4170a0
$perk-color-2: #ffed80
.perk
  display: flex
  align-items: center
  justify-content: center
  width: 340px
  height: 140px
  border-radius: 5px
  background-color: #fff
  margin: 0 1em 2em
  padding: 2em
  box-shadow: 0 2px 5px -2px #d6d2d2
  flex-grow: 1
  /* Border gradient */
  border-width: 0 0 0 3px
  border-style: solid
  /*-webkit-border-image: -webkit-gradient(linear, 100% 0, 0 0, from($perk-color-1), to($perk-color-2)) 1 100%*/
  /*-webkit-border-image: -webkit-linear-gradient(top, $perk-color-1, $perk-color-2) 1 100%*/
  /*-moz-border-image: -moz-linear-gradient(top, $perk-color-1, $perk-color-2) 1 100%*/
  /*-o-border-image: -o-linear-gradient(top, $perk-color-1, $perk-color-2) 1 100%*/
  border-image: linear-gradient(to top, $perk-color-1, $perk-color-2) 1 100%
  .perk__icon
    color: lighten(#4170a0, 38%)

.perk__content
  max-width: 420px
  display: flex
  align-items: center
  justify-content: center
  margin: 0 auto

.perk__head
  text-align: center
  margin-right: 2em

.perk__name
  font-weight: bold
  margin-bottom: 0.5em

.perk__info
  font-size: 0.85em
  line-height: 1.5

.perk__icon
  font-size: 4em
  line-height: 1
  color: #ccc

.panel
  border-radius: 5px
  background-color: #fff
  border-top: 5px solid #ccc
  margin: 0 0 40px 0
  padding: 2em
  box-shadow: 0 3px 1px -1px #d6d2d2
</style>

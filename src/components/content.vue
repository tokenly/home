<template lang="pug">
.app__content
  .app__section
    .container
      h2 What are Tokens?
      p Tokens are a digital representation of your good whether it’s a trading card, song, movie, game, loyalty point, membership, and more. You can buy, sell, trade, or rent tokens for any traditional currency, digital currency, or other tokens. Only token holders can use the goods tokens represent and only creators can issue more.
      .row
        .six.columns
          h3 Redeemables
          p These gives holders the ability to trade-in their tokens for goods. Think ‘digital gift certificate'.
        .six.columns
          h3 Access tokens
          p This kind gives holders entry to features, services or accounts they wouldn’t have access to otherwise.
  .app__section
    .container
      .perks__wrapper
        .perks
          .perk(v-for="perk in perks")
            .perk__head
              .perk__icon: i.material-icons {{ perk.icon }}
            .perk__text
              .perk__name {{ perk.name }}
              .perk__info {{ perk.text }}
</template>

<script>
export default {
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
    margin-bottom: 60px

$perk-count: 6
$perk-width: 600px
$perk-spacing: 40

.perks__wrapper
  overflow: hidden

.perks
  display: flex
  justify-content: space-between
  flex-wrap: wrap

.perk
  float: left
  display: flex
  align-items: center
  justify-content: center
  width: 340px
  height: 140px
  border-radius: 5px
  background-color: #fff
  border-top: 5px solid #fff
  margin: 0 10px 20px
  padding: 2em
  box-shadow: 0 2px 5px -2px #d6d2d2
  flex-grow: 1
  &:nth-of-type(4n+0)
    border-color: #76E88E
    .perk__icon
      color: #76E88E
  &:nth-of-type(4n+1)
    border-color: lighten(#4170a0, 20%)
    .perk__icon
      color: lighten(#4170a0, 20%)
  &:nth-of-type(4n+2)
    border-color: #6c5cc7
    .perk__icon
      color: #6c5cc7
  &:nth-of-type(4n+3)
    border-color: #FF474C
    .perk__icon
      color: #FF474C

.perk__head
  text-align: center
  margin-right: 2em

.perk__name
  font-weight: bold
  margin-bottom: 6px

.perk__info
  font-size: 0.9em
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

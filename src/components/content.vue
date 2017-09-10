<template lang="pug">
.app__content(id="content")
  section.app__section
    .container
      header Our Products
      .grid
        .grid-entry.two-columns.padded
          div.product-logo
            img.product-logo__img(src="../assets/tekk-logo.png")
          h3.product-title Tekk Token Sale
          .product-description
            p Buy into the future of ownership. Token Sale Sep 22, 2017.
            a.product-description__cta(
              href="https://tekk.tokenly.com"
              target="_blank"
            ) Join the Token Sale
        .grid-entry.two-columns.padded
          div.product-logo
            img.product-logo__img(src="../assets/tokenfm-logo.png")
          h3.product-title TokenFM
          .product-description
            p The world's first blockchain-based media streaming platform.
            a.product-description__cta(
              href="https://token.fm"
              target="_blank"
            ) Learn More About TokenFM
      .grid
        .grid-entry.two-columns.padded
          div.product-logo
            i.material-icons vpn_key
          h3.product-title Tokenpass
          .product-description
            p Username-based token inventory and management platform.
            a.product-description__cta(
              href="https://tokenpass.tokenly.com/"
            ) Create Your Tokenpass Account
        .grid-entry.two-columns.padded
          div.product-logo
            img.product-logo__img(src="../assets/tokenpockets-logo.svg")
          h3.product-title TokenPockets
          .product-description
            p Create and multi-sig wallets.  Issue your own tokens.
            a.product-description__cta(
              href="https://wallet.tokenpockets.com/"
            ) Try the TokenPockets Demo
      .grid
        .grid-entry.no-columns.padded
          div.product-logo
            i.material-icons shopping_cart
          h3.product-title Token Markets
          .product-description
            p Turnkey eCommerce and crowdsale solution.
            a.product-description__cta(
              href="https://wallet.tokenpockets.com/"
            ) Signup for Token Markets Beta

  section.app__section.grey
    .container
      header What are Tokens?
      p Tokens are a digital representation of your good whether it’s a trading card, song, movie, game, loyalty point, membership, and more. You can buy, sell, trade, or rent tokens for any traditional currency, digital currency, or other tokens. Only token holders can use the goods tokens represent and only creators can issue more.
      .row
        .six.columns
          h3 Redeemables
          p These give holders the ability to trade-in their tokens for goods. Think ‘digital gift certificate'.
        .six.columns
          h3 Access tokens
          p This kind gives holders entry to features, services or accounts they wouldn’t have access to otherwise.
  section.app__section.dark
    .container
      header Why Tokenly?
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
  padding: 0px 0px

.app__section
  padding: 80px 0px
  border-bottom: 3px solid #ccc
  &.dark
    background: #284461
    color: #fff
  &.grey
    background: #eee

$perk-count: 6
$perk-width: 600px
$perk-spacing: 40

.perks__wrapper
  padding-top: 1em
  overflow: hidden
  margin-left: -10px
  margin-right: -10px

.perks
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  color: #666

$perk-color-1: lighten(#ff8080, 10%)
$perk-color-2: #4170a0
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
  border-width: 3px
  border-style: solid
  border-color: #cecece
  border-image: linear-gradient(to top right, #cecece, #9ecdfd)
  border-image-slice: 1
  .perk__icon
    color: #c8d3da

.perk__content
  max-width: 420px
  width: 100%
  display: flex
  align-items: center
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

.product-logo
  text-align: center
  &__img
    display: inline-block
    width: 200px
    height: 200px
    margin: 0 auto
  i
    display: inline-block
    height: 200px
    width: 200px
    font-size: 200px
    color: #444
    text-shadow: 0px 2px 2px rgba(0,0,0,0.2)
    background: -webkit-linear-gradient(#eee, #333)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

.product-title
  text-align: center
  margin: 0px 0px 20px 0px
  font-size: 30px
  font-weight: 400
  color: #111

.product-description
  text-align: center
  &__cta
    display: inline-block
    width: 300px
    margin: 0 auto
    max-width: 100%
    padding: 20px
    background: #4270a1
    box-shadow: inset 0px 1px 1px rgba(255,255,255,0.3), 0px 2px 2px rgba(0,0,0,0.2)
    border: 1px solid rgba(0,0,0,0.2)
    border-radius: 2px
    font-weight: 600
    text-shadow: 0px 1px 1px rgba(0,0,0,0.2)
    color: #fff
    text-decoration: none

</style>

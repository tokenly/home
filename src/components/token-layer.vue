<template lang="pug">
section.token-layer
  div.token-layer__container
    div.token-layer__container__content
      header
        span Token Layer&trade;
      p.sub-header
        span Our flexible sidechain protocol built to support secure, high volume transactions with low fees.
      ul.token-layer__container__content__menu
        li(v-for="(featureEntry, index) in this.featureData")
          a.product-option(
            v-bind:data-target-el="featureEntry.elID"
            v-bind:data-product-index="index"
          )
            span {{ featureEntry.name }}
      p
        span add nav similar to token suites section, except for features (fast, secure, agnostic, )
  div.token-layer__mask
  div.token-layer__bg
</template>

<script>

export default {
  components: {},
  data () {
    return {
      featureData: [
        {
          name: 'TokenMarkets',
          elID: 'tokenmarkets',
          headline: 'Shopify for the Blockchain',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'TokenPockets',
          elID: 'tokenpockets',
          headline: 'Multisig Wallet with Token Creation',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-225x225.png'
        },
        {
          name: 'TokenChats',
          elID: 'tokenchats',
          headline: "World's First Token-Gated Chat",
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'tokenFM',
          elID: 'tokenFM',
          headline: 'Token-Powered Media Streaming Platform',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/microphone-wireframe-recovered-900-900x900.png'
        },
        {
          name: 'TokenMarkets',
          elID: 'tokenmarkets1',
          headline: 'Shopify for the Blockchain',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'TokenPass',
          elID: 'tokenpass',
          headline: 'Token Controlled Access',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/card-wireframe-900-900x900.png'
        }
      ]

    }
  },
  created () {
  },

  methods: {

  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.token-layer
  background: rgba(0,94,191, 1)
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/zwartevilt.png")
  background-size: cover
  background-position: center
  color: #fff
  min-height: 100vh
  position: relative
  &__container
    padding: 80px 30px
    position: relative
    z-index: 8
    &__content
      max-width: 800px
      margin: 0 auto
      &__menu
        text-align: center
        padding: 0px
        margin: 0px
        border-bottom: 1px solid rgba(255,255,255,0.1)
        li
          display: inline-block
          margin: 0px
          a
            padding: 10px 20px
            color: rgba(255,255,255,0.8)
            font-weight: 700
            letter-spacing: 0.5px
            display: inline-block
            cursor: pointer
          a.active
            color: #E6FF0D
            font-weight: 700
            border-bottom: 3px solid #E6FF0D
  &__mask
    background: url(https://tokenpockets.com/images/bg2.c37d81d0.png) top right no-repeat
    transform: scaleX(-1)
    position: absolute
    left: 0px
    right: 0px
    top: 0px
    bottom: 0px
  &__bg
    background: rgba(5,3,64,0.6)
    position: absolute
    left: 0px
    right: 0px
    top: 0px
    bottom: 0px
  header
    margin: 0px
    font-size: 40px
    font-weight: 700
    margin: 0px
    margin-bottom: 20px
    letter-spacing: 3px
  p.sub-header
    font-size: 18px
    text-align: center
    opacity: 0.7
    margin-bottom: 40px

</style>

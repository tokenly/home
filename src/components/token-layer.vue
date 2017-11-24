<template lang="pug">
section.token-layer(id="token-layer")
  div.token-layer__container
    div.token-layer__container__content
      header
        span Token Layer&trade;
      p.sub-header
        span Tokenly's scalable sidechain protocol built to support interoperability and low cost transactions.
      ul.token-layer__container__content__menu
        li(v-for="(featureEntry, index) in this.featureData")
          a.product-option(
            @click="activateFeature"
            v-bind:data-target-el="featureEntry.elID"
            v-bind:data-feature-index="index"
            :class="{ 'active': index === activeFeatureIndex }"
          )
            span {{ featureEntry.name }}
      div.token-layer-feature__content
        TokenLayerFeature(
          :elID = "this.activeFeature.elID"
          :headline = "this.activeFeature.headline"
          :summary = "this.activeFeature.summary"
          :imgURL = "this.activeFeature.imgURL"
        )
  div.token-layer__mask
  div.token-layer__bg
</template>

<script>

import TokenLayerFeature from './token-layer-feature.vue'

export default {
  components: { TokenLayerFeature },
  data () {
    return {
      activeFeatureIndex: 0,
      featureData: [
        {
          name: 'Low Cost',
          elID: 'low-cost',
          headline: 'Stable, predicatable, low cost transaction fees are critical to widespread consumer use of blockchain technology.',
          summary: 'TokenLayer ',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Secure',
          elID: 'secure',
          headline: 'Shopify for the Blockchain',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Scalable',
          elID: 'scalable',
          headline: '...high volume transactions.',
          summary: 'Token Layer is engineered to handle 1,000s transactions per second. ... with low, stable transaction fees will make this the best ....',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-225x225.png'
        },
        {
          name: 'Flexible',
          elID: 'flexible',
          headline: "Token Layer plays nice with most blockchains and ... systems",
          summary: 'Token Layer is built to be blockchain and platform agnostic so .... That means .... and blockchains still to come.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Limitless',
          elID: 'limitless',
          headline: 'Token-Powered Media Streaming Platform',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/microphone-wireframe-recovered-900-900x900.png'
        }
      ]

    }
  },
  created () {
  },

  methods: {
    activateFeature: function (event) {
      let targetIndex = $(event.currentTarget).data('feature-index')
      this.activeFeatureIndex = targetIndex
    },
  },

  computed: {
    activeFeature () {
      let i = this.activeFeatureIndex
      return this.featureData[i]
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.token-layer
  background: #333
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/zwartevilt.png")
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
        li
          display: inline-block
          margin: 0px
          a
            padding: 20px
            color: rgba(255,255,255,0.8)
            font-weight: 700
            letter-spacing: 1px
            font-size: 18px
            display: inline-block
            cursor: pointer
            border-bottom: 1px solid rgba(255,255,255,0.1)
            text-transform: uppercase
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
    margin-bottom: 40px
    letter-spacing: 3px
  p.sub-header
    font-size: 18px
    text-align: center
    opacity: 0.7
    margin-bottom: 40px

.token-layer-feature__content
  padding: 50px 20px
  text-align: center
  padding-bottom: 0px

</style>

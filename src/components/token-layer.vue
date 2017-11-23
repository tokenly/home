<template lang="pug">
section.token-layer(id="token-layer")
  div.token-layer__container
    div.token-layer__container__content
      header
        span Token Layer&trade;
      p.sub-header
        span Our scalable sidechain protocol built to support stable transactions fees and interoperability.
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
          name: 'Secure',
          elID: 'secure',
          headline: 'Shopify for the Blockchain',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Scalable',
          elID: 'scalable',
          headline: 'Multisig Wallet with Token Creation',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-225x225.png'
        },
        {
          name: 'Flexible',
          elID: 'flexible',
          headline: "World's First Token-Gated Chat",
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
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

.token-layer-feature__content
  padding: 50px 20px

</style>

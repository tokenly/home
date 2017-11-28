<template lang="pug">
section.token-layer(id="token-layer")
  div.token-layer__container
    div.token-layer__container__content
      header
        img(
          src="../assets/images/token-layer.png"
        )
      p.sub-header
        span Tokenly's scalable sidechain protocol built to support interoperability and low cost transactions.
    div
      ul.token-layer__container__content__menu
        li(v-for="(featureEntry, index) in this.featureData")
          a.product-option(
            @click="activateFeature"
            v-bind:data-target-el="featureEntry.elID"
            v-bind:data-feature-index="index"
            :class="{ 'active': index === activeFeatureIndex }"
          )
            span {{ featureEntry.name }}
      div.token-layer-feature__image
        img(
          src="../assets/images/token-layer-white.jpg"
        )
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
          headline: 'Stable, predicatable, low cost transactions.',
          summary: 'TokenLayer ',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Secure',
          elID: 'secure',
          headline: 'World-Class Security',
          summary: '[Placeholder]',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Scalable',
          elID: 'scalable',
          headline: 'Built for Worldwide ..',
          summary: 'Token Layer is engineered to handle 1,000s transactions per second.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-225x225.png'
        },
        {
          name: 'Flexible',
          elID: 'flexible',
          headline: "Token Layer plays nice with most blockchains",
          summary: 'Token Layer is built to be blockchain and platform agnostic so .... That means .... and blockchains still to come.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Innovative',
          elID: 'innovative',
          headline: 'Open and ready for anything',
          summary: 'Token Layer is the the first middleware for Bitcoin Counterparty & ERC20 Tokens.',
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
  background: #f9f9f9
  background-size: cover
  background-position: center
  min-height: 100vh
  position: relative
  &__container
    padding: 80px 30px
    position: relative
    z-index: 8
    margin: 0 auto
    width: 1000px
    max-width: 100%
    &__content, &__image
      display: inline-block
      vertical-align: top
    &__content
      width: 100%
      &__menu
        padding: 0px
        margin: 0px
        margin-bottom: 20px
        text-align: center
        li
          display: inline-block
          margin: 0px
          a
            padding: 10px 20px
            color: #333
            font-weight: 700
            letter-spacing: 1px
            font-size: 16px
            display: inline-block
            cursor: pointer
            background: rgba(200,200,200,0.5)
            border-radius: 30px
            margin: 0px 10px 10px 0px
            text-transform: uppercase
            border: 1px solid rgba(0,0,0,0.1)
          a.active
            background: #E6FF0D
            font-weight: 700
            color: #111
    &__image
      padding: 10px 30px
      width: 40%
      img
        width: 100%
  &__mask
    background: url(https://tokenpockets.com/images/bg2.c37d81d0.png) top right no-repeat
    transform: scaleX(-1)
    position: absolute
    left: 0px
    right: 0px
    top: 0px
    bottom: 0px
  &__bg
    background: rgba(255,255,255,0.7)
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
    letter-spacing: 2px
    text-align: left
    img
      width: auto
      height: 60px
  p.sub-header
    font-size: 20px
    text-align: left
    opacity: 0.7
    margin-bottom: 40px

.token-layer-feature__content, .token-layer-feature__image
  display: inline-block
  vertical-align: top
  padding: 10px

.token-layer-feature__content
  width: 70%

.token-layer-feature__image
  width: 30%
  img
    max-width: 100%

@media(max-width: 787px)
  body
    .token-layer__container
      padding: 40px 20px
      &__content, &__image
        width: 100%
      &__image
        text-align: center
        img
          width: 50%
    .token-layer__container__content
      header
        font-size: 24px
        img
          width: auto
          height: 40px
      p.sub-header
        font-size: 16px
      .product__row__content.token-layer-feature
        p.header
          font-size: 18px !important
      ul.token-layer__container__content__menu
        li
          a
            font-size: 14px
            border-bottom: none
            border-radius: 30px
            background: rgba(0,0,0,0.5)
            padding: 10px 30px
            margin: 0px 10px 10px 0px
          a.active
            background: #E6FF0D
            color: #111
            font-weight: 700

</style>

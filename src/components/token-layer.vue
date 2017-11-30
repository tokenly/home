<template lang="pug">
section.token-layer(id="token-layer")
  div.token-layer__header
    div.token-layer__header__content
      div.token-layer__header__content__left
        img(
          src="../assets/images/token-layer.png"
        )
        p
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
        TokenLayerFeature(
          :elID = "this.activeFeature.elID"
          :headline = "this.activeFeature.headline"
          :summary = "this.activeFeature.summary"
          :imgURL = "this.activeFeature.imgURL"
        )
      div.token-layer__header__content__right
        img.token-layer__image(
          src="../assets/images/token-layer-white.jpg"
        )
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
    incrementFeature: function(value) {
      let newIndex = this.activeFeatureIndex + value
      if (this.featureData.length < newIndex + 1) {
        this.activeFeatureIndex = 0
      } else if (newIndex < 0) {
        this.activeFeatureIndex = this.featureData.length - 1
      } else {
        this.activeFeatureIndex = newIndex
      }
    }
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
  background: #039BE5 /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #29B6F6, #039BE5, #01579B) /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #29B6F6, #039BE5, #01579B)
  position: relative
  z-index: 99
  &__header
    &__content
      max-width: 1000px
      padding: 80px 20px
      margin: 0 auto
      img
        max-width: 100%
      p
        color: #fff
      &__left, &__right
        width: 50%
        display: inline-block
        vertical-align: top
        padding: 0px 20px
      &__left
        img
          margin-bottom: 20px
        p
          padding: 5px 15px
          font-size: 18px
          opacity: 0.9
          margin-bottom: 20px
      &__right
        text-align: center
  &__container
    position: relative
    z-index: 8
    margin: 0 auto
    width: 1000px
    max-width: 100%
    padding: 5px
    border-radius: 5px
    &__content, &__image
      display: inline-block
      vertical-align: top
    &__content
      width: 100%
      text-align: center
      &__menu
        padding: 0px
        margin: 0px
        margin-bottom: 40px
        li
          display: inline-block
          margin: 0px
          a
            padding: 10px 20px
            color: #666
            font-weight: 500
            letter-spacing: 1px
            font-size: 16px
            display: inline-block
            cursor: pointer
            background: #f9f9f9
            border-radius: 30px
            margin: 0px 10px 10px 0px
            text-transform: uppercase
            border: 1px solid rgba(0,0,0,0.1)
            box-shadow: 0px 1px 3px rgba(0,0,0,0.05)
          a.active
            background: #0064CC
            font-weight: 700
            color: #fff
            box-shadow: none
    &__image
      padding: 10px 30px
      width: 40%
      img
        width: 100%
  &__bg
    background: #222
    position: absolute
    left: 0px
    right: 0px
    top: 00px
    bottom: 10px
    z-index: -8
  header
    margin: 0px
    font-size: 40px
    font-weight: 700
    margin: 0px
    margin-bottom: 20px
    letter-spacing: 2px
    img
      width: auto
      height: 60px
  p.sub-header
    font-size: 20px
    opacity: 0.7
    margin-bottom: 20px
    color: #333

.token-layer-feature__content, .token-layer-feature__image, .token-layer-feature__increment
  display: table-cell
  vertical-align: top
  padding: 10px

.token-layer-feature
  display: table

.token-layer-feature__content
  width: 100%

.token-layer-feature__increment
  vertical-align: middle
  span
    font-size: 40px
    text-align: center
    i
      line-height: 90px
      display: inline-block
      width: 60px
      height: 90px
      border: 1px solid #0064CC
      color: #0064CC
      border-radius: 5px
      cursor: pointer
      transition: 0.5s
      &:hover
        background: #fff
        color: #0064CC
        border: 2px solid #0064CC
        transform: scale(1.1)

@media(max-width: 900px)
  body
    .token-layer
      &__header
        padding: 40px 10px
        &__content
          padding: 0px
          &__left
            width: 100%
            img
              height: 60px
          &__right
            width: 30%
            display: none
      &__container
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
        margin-bottom: 10px
        li
          a
            font-size: 16px
            border-radius: 30px
            padding: 10px
            margin: 0px 10px 10px 0px
            letter-spacing: 0px
  .token-layer-feature__content
    width: 100%
  .token-layer-feature__image
    display: none

  .token-layer-feature__increment
    span
      font-size: 20px
      i
        line-height: 60px
        width: 30px
        height: 60px

@media(max-width: 600px)
  body
    .token-layer
      &__header
        text-align: center
        &__content
          padding: 0px
          &__left
            width: 100%
            padding: 0px
            img
              height: 60px
          &__right
            display: none

</style>

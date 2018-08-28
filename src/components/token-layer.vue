<template lang="pug">
section.token-layer(id="token-layer")
  div.token-layer__header
    div.token-layer__header__content
      div.token-layer__header__content__left
        img(
          src="../assets/images/token-layer.png"
        )
        p
          span Tokenly's scalable sidechain protocol built to support interoperability and low cost transactions. Optimized for frequent and low value blockchain token transactions. The first middleware for Bitcoin Counterparty & ERC20 Tokens.
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
          headline: 'Cheap and predictable transactions fees.',
          summary: 'Token Layer is engineered to maintain low, predictable blockchain transaction fees.  Low, predictable fees are essential to reducing customer purchase friction, transacting with low value tokens, and facilitate micropayments.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Secure',
          elID: 'secure',
          headline: 'World-Class Security',
          summary: 'Tokenly is secured by a consortium of validating nodes.  This provides strong tamper evident and immutability guarantees from multiple independent entities.  The network will reject that do not follow the consensus rules.  The network security will grow as additional validating nodes are added.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'Scalable',
          elID: 'scalable',
          headline: 'Blockchain Agnostic Platform Built for Global Adoption',
          summary: 'Token Layer handles throughputs of 1,000 transactions per second.  Future optimizations will significantly increase this throughput. Token Layer is blockchain and platform agnostic. Token Layer is compatible with the most popular blockchain ecosystems today and will remain compatible with the most popular blockchains yet to be created.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-225x225.png'
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
  background: #fff
  position: relative
  z-index: 99
  &__header
    &__content
      max-width: 1000px
      padding: 80px 20px
      margin: 0 auto
      display: table
      img
        max-width: 100%
      p
        color: #334
      &__left, &__right
        display: table-cell
        vertical-align: middle
        padding: 0px 20px
      &__left
        width: 60%
        img
          margin-bottom: 20px
          height: 85px
        p
          padding: 5px 15px
          font-size: 20px
          opacity: 0.9
          margin-bottom: 20px
      &__right
        text-align: center
        width: 40%
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
        padding: 5px
        margin: 0px
        margin-bottom: 30px
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
            p
              padding: 5px
              font-size: 16px
            img
              height: 60px
          &__right
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
            font-size: 14px
            border-radius: 30px
            padding: 8px 10px
            margin: 0px 10px 10px 0px
            text-transform: none
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
              height: 40px
          &__right
            display: none

</style>

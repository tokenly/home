<template lang="pug">
section.products(ref="products")
  div.products__header
    div.products__header__content
      header
        span Token Suite&trade;
      p.sub-header
        span Our consumer-ready turnkey solutions for the entire token life cycle: from creation and sale to use and redemption.
      ul.products__header__content__menu
        li(v-for="(productEntry, index) in this.productData")
          a.product-option(
            @click="activateProduct"
            v-bind:data-target-el="productEntry.elID"
            v-bind:data-product-index="index"
            :class="{ 'active': index === activeProductIndex }"
          )
            span {{productEntry.name}}
  div.products__content
    Product(
      :elID = "this.activeProduct.elID"
      :headline = "this.activeProduct.headline"
      :summary = "this.activeProduct.summary"
      :imgURL = "this.activeProduct.imgURL"
    )
  .products__bg
  .products__mask
</template>

<script>
import Product from './product.vue'

export default {
  components: {Product},
  data () {
    return {
      activeProductIndex: 0,
      productData: [
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
    activateProduct: function (event) {
      let targetIndex = $(event.currentTarget).data('product-index')
      this.activeProductIndex = targetIndex
    },

    slideHideProducts: function () {
      $('.product__row').animate({
        opacity: '0',
      }, 500, function() {
        $('.product__row').hide()
      });
    },

    slideShowProduct: function (targetName) {
      $(targetName).animate({
        opacity: '1',
      }, 200, function() {
        $(targetName).show()
      });
    }
  },

  computed: {
    //compute some form labels
    activeProduct () {
      let i = this.activeProductIndex
      return this.productData[i]
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.products
  background: #111
  background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/zwartevilt.png)
  color: #fff
  position: relative
  z-index: 99
  min-height: 100vh
  padding: 80px 0px
  &__mask
    background: url(https://tokenpockets.com/images/bg2.c37d81d0.png) top right no-repeat
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -2
  &__bg
    background: rgba(20,20,20,0.5)
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -1
  &__header
    padding: 30px
    padding-bottom: 0px
    &__content
      max-width: 800px
      margin: 0 auto
      header
        font-size: 40px
        font-weight: 700
        letter-spacing: 3px
        margin-bottom: 40px
      p.sub-header
        font-size: 18px
        text-align: center
        opacity: 0.7
        margin-bottom: 40px
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
  &__content
    padding: 50px 20px
    margin: 0 auto
    max-width: 800px

@media(max-width: 767px)
  .products__header
    padding: 30px 10px
    padding-bottom: 0px
    header
      font-size: 24px
  .products__content
    padding: 50px 10px
  .products__header__content__menu
    border-bottom: none
    li
      a
        background: rgba(0,0,0,0.3)
        border-radius: 30px
        margin: 5px
      a.active
        background: #E6FF0D
        color: #111

</style>

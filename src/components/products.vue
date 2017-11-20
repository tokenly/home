<template lang="pug">
section.products(ref="products")
  div.products__header
    div.products__header__content
      header
        span The Token Suite
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
  span()
    i.material-icons keyboard_arrow_left
  span
    i.material-icons keyboard_arrow_right
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
  background: #001933
  color: #fff
  position: relative
  z-index: 99
  &__header
    padding: 30px
    padding-bottom: 0px
    &__content
      max-width: 800px
      margin: 0 auto
      header
        font-size: 32px
        font-weight: 700
        letter-spacing: 3px
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

.product__row
  display: flex
  &__image, &__content
    padding: 10px
    vertical-align: middle
  &__content
    width: 70%
    padding: 10px
    vertical-align: middle
    p
      line-height: 2
    p.header
      font-weight: 700
      font-size: 24px
      letter-spacing: 0.5px
    span.live
      font-weight: 700
      color: #E6FF0D

  &__image
    width: 30%
    img
      max-width: 100%

</style>

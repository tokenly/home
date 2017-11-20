<template lang="pug">
section.products(ref="products")
  div.products__header
    div.products__header__content
      header
        span The Token Suite
      ul.products__header__content__menu
        li
          a
            span Tokenpass
        li
          a
            span Token Pockets
        li
          a.active
            span Token Markets
        li
          a
            span TokenFM
        li
          a
            span Tokenchats
        li
          a
            span Tokenpass
  div.products__content(v-for="productEntry in this.productData")
    Product(
      :headline = "productEntry.headline"
      :summary = "productEntry.summary"
      :imgURL = "productEntry.imgURL"

    )
</template>

<script>
import Product from './product.vue'

export default {
  components: {Product},
  data () {
    return {
      productData: [
        {
          name: 'TokenMarkets',
          headline: 'Shopify for the Blockchain',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'TokenPass',
          headline: 'Token Controlled Access',
          summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
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
            color: #fff
            font-weight: 500
            letter-spacing: 0.5px
            display: inline-block
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

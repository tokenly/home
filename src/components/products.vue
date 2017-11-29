<template lang="pug">
section.products(
  ref="products"
  id="products"
)
  div.products__container
    div.products__container__content
      div.products__header
        div.products__header__content
          header
            img(
              src="../assets/images/token-suite.png"
            )
          p.sub-header
            span Our consumer-ready turnkey solutions for the entire token life cycle: from creation and sale to use and redemption.
    div
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
        div.products__content__increment
          span(@click="incrementProduct(-1)")
            i.material-icons.backwards play_arrow
        Product(
          :elID = "this.activeProduct.elID"
          :headline = "this.activeProduct.headline"
          :summary = "this.activeProduct.summary"
          :linkURL = "this.activeProduct.linkURL"
          :linkText = "this.activeProduct.linkText"
          :imgURL = "this.activeProduct.imgURL"
        )
        div.products__content__increment
          span(@click="incrementProduct(1)")
            i.material-icons play_arrow
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
          headline: 'Shopify with Blockchain Tokens',
          summary: 'TokenMarkets get setup in minutes to buy or sell physical goods, services, or token assets. Accept tokens, digital currency, or credit cards as payment.',
          linkText: 'TokenMarkets.com',
          linkURL: 'https://tokenmarkets.com',
          imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
        },
        {
          name: 'TokenPockets',
          elID: 'tokenpockets',
          headline: 'Create Your Own Token',
          summary: 'TokenPockets is a comprehensive token wallet. Signup and create shared, multi-signature wallets or issue your own blockchain token.',
          linkText: 'TokenPockets.com',
          linkURL: 'https://tokenpockets.com',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-225x225.png'
        },
        {
          name: 'Token Launch',
          elID: 'token-launch',
          headline: 'Launch Your Own Token Crowdsale',
          summary: 'Token Launch is a turnkey solution for managing your own token crowdsale to fund your next project. Set volume limits and more.',
          linkText: '',
          linkURL: '',
          imgURL: 'https://tekk.wpengine.com/wp-content/uploads/2017/06/launch-wireframe-recovered-900.png'
        },
        {
          name: 'TokenFM',
          elID: 'tokenFM',
          headline: 'Media Tokenized',
          summary: 'TokenFM is a token launch pad and community streaming platform for creators, curators, and fans. Media player, artist engagement tools, media and merchandize market, and more.',
          linkText: 'Token.FM',
          linkURL: 'https://tokenfm.com',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/microphone-wireframe-recovered-900-900x900.png'
        },
        {
          name: 'TokenPass',
          elID: 'tokenpass',
          headline: 'Token Controlled Access',
          summary: 'Tokenpass is a digital access pass hub for universal, platform agnostic user management. API connectivity, token lending and rentals, token controlled chats, and more.',
          linkText: 'TokenPass.Tokenly.com',
          linkURL: 'https://tokenpass.tokenly.com/',
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

    incrementProduct: function(value) {
      let newIndex = this.activeProductIndex + value
      if (this.productData.length < newIndex + 1) {
        this.activeProductIndex = 0
      } else if (newIndex < 0) {
        this.activeProductIndex = this.productData.length - 1
      } else {
        this.activeProductIndex = newIndex
      }
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
  background: #fff
  color: #111
  position: relative
  z-index: 99
  padding: 80px 30px
  &__mask
    background: url(https://tokenpockets.com/images/bg2.c37d81d0.png) top right no-repeat
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -2
  &__bg
    background: rgba(250,250,250,0.9)
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -1
  &__content
    display: table
    &__increment
      display: table-cell
      vertical-align: middle
      padding: 10px
      span
        font-size: 40px
        text-align: center
        i
          line-height: 60px
          display: inline-block
          width: 60px
          height: 60px
          background: #eee
          border: 1px solid rgba(0,0,0,0.1)
          box-shadow: 0px 1px 3px rgba(0,0,0,0.05)
          border-radius: 50%
          cursor: pointer
          transition: 0.5s
          &:hover
            background: #ddd
            box-shadow: none
        i.backwards
          transform: rotateZ(180deg)
  &__container
    max-width: 1000px
    margin: 0 auto
    &__content, &__image
      display: inline-block
      vertical-align: top
    &__content
      width: 100%
    &__image
      width: 40%
      img
        width: 100%
  &__header
    &__content
      text-align: center
      header
        font-size: 40px
        font-weight: 700
        letter-spacing: 2px
        margin-bottom: 20px
        img
          width: auto
          height: 60px
      p.sub-header
        font-size: 20px
        opacity: 0.7
        margin-bottom: 40px
        color: #333
      &__menu
        padding: 0px
        margin: 0px
        margin-bottom: 40px
        text-align: center
        li
          display: inline-block
          margin: 0px
          a
            padding: 10px 20px
            color: #333
            font-weight: 500
            letter-spacing: 1px
            font-size: 16px
            display: inline-block
            cursor: pointer
            background: #eee
            border-radius: 30px
            margin: 0px 10px 10px 0px
            text-transform: uppercase
            border: 1px solid rgba(0,0,0,0.1)
            box-shadow: 0px 1px 3px rgba(0,0,0,0.05)
          a.active
            color: #fff
            font-weight: 700
            background: #0064CC
            box-shadow: none

@media(max-width: 767px)
  body
    .products
      &__container
        padding: 60px 10px
        &__image, &__content
          width: 100%
        &__image
          text-align: center
          img
            width: 50%
    .products__header
      padding: 0px
      header
        font-size: 24px
        img
          width: auto
          height: 40px
      p.sub-header
        font-size: 16px
    .products__content
      padding: 0px
      text-align: center
      p
        color: #eee
    .products__header__content__menu
      border-bottom: none
      li
        a
          border-radius: 30px
          margin: 5px
          font-size: 14px
          padding: 10px
          font-weight: 400
        a.active
          background: #E6FF0D
          color: #111
    .product__row
      padding: 15px
    .product__row__content
      p.header
        font-size: 18px
      p
        font-size: 18px

</style>

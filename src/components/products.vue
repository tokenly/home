<template lang="pug">
section.products(
  ref="products"
  id="products"
)
  div.products__header
    div.products__header__content
      div
        div.products__header__content__entry
          div
            p.header
              i.material-icons check_circle
              span Get Setup in Minutes
            p.details
              span Signup with just your email and start selling physical products, services, and blockchain tokens.
              span It’s never been easier to get started buying and selling using cryptocurrency. Tokenly handles everything from wallets and invoicing, to secure checkout and affiliate programs.
          div
            img(src="https://images.pexels.com/photos/280264/pexels-photo-280264.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")
        div.products__header__content__entry
          div
            img(src="https://images.pexels.com/photos/37539/colored-pencils-colour-pencils-mirroring-color-37539.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")
          div
            p.header
              i.material-icons check_circle
              span Your Store, Your brand
            p.details
              span Add custom elements to your store, including logos, color schemes, and cover photos. Organize your products into catalogs. No design skills necessary.
        div.products__header__content__entry
          div
            p.header
              i.material-icons check_circle
              span Stay in Control
            p.details
              span Monitor your inventory, customer orders, and much more, all from a single store dashboard. Whether you're at the office or on your mobile device, you're always in control of your store.
          div
            img(src="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")
        div.products__header__content__entry.centered
          div.centered
            p.header
              i.material-icons check_circle
              span We're Live, Now.
            p.details
              span Token Markets is more than a mere idea; it is a live application providing true cryptocurrency ecommerce to merchants all over the world.
            br
            br
            a.cta(href="https://tokenmarkets.com")
              span Signup Now for Token Markets
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
          summary: 'Get setup in minutes to buy or sell physical goods, services, or token assets with Token Markets. Accept tokens, digital currency, or credit cards as payment.',
          linkText: 'TokenMarkets.com',
          linkURL: 'https://tokenmarkets.com',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900-500x500.png',
          status: 'Live'
        },
        {
          name: 'TokenPockets',
          elID: 'tokenpockets',
          headline: 'Create Your Own Token',
          summary: 'TokenPockets is a comprehensive token wallet. Signup and create shared, multi-signature wallets or issue your own blockchain token.',
          linkText: 'TokenPockets.com',
          linkURL: 'https://tokenpockets.com',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/vault-wireframe_900-414x414.png',
          status: 'Live Beta'
        },
        {
          name: 'Token Launch',
          elID: 'token-launch',
          headline: 'Launch Your Own Token Crowdsale',
          summary: 'Token Launch is a turnkey solution for managing your own token crowdsale to fund your next project. Set volume limits and more.',
          linkText: '',
          linkURL: '',
          imgURL: 'https://tekk.wpengine.com/wp-content/uploads/2017/06/launch-wireframe-recovered-900.png',
          status: 'Private Beta'
        },
        {
          name: 'TokenFM',
          elID: 'tokenFM',
          headline: 'Media Tokenized',
          summary: 'TokenFM is a token launch pad and community streaming platform for creators, curators, and fans. Media player, artist engagement tools, media and merchandize market, and more.',
          linkText: 'Token.FM',
          linkURL: 'https://tokenfm.com',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/microphone-wireframe-recovered-900-500x500.png',
          status: 'Private Beta'
        },
        {
          name: 'TokenPass',
          elID: 'tokenpass',
          headline: 'Token Controlled Access',
          summary: 'Tokenpass is a digital access pass hub for universal, platform agnostic user management. API connectivity, token lending and rentals, token controlled chats, and more.',
          linkText: 'TokenPass.Tokenly.com',
          linkURL: 'https://tokenpass.tokenly.com/',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/06/card-wireframe-900-550x550.png',
          status: 'Live'
        },
        {
          name: 'Coming Soon',
          elID: 'development',
          headline: 'Solutions Under Development',
          summary: "We're developing the next generation of blockchain token solutions to extend the functionality of our existing Token Suite. Solutions under development include enchanced token analytics and verification, token-integrated chat rooms, and more.",
          linkText: '',
          linkURL: '',
          imgURL: 'https://tekk.wpengine.com/wp-content/uploads/2017/06/lightning-wireframe_900-550x550.png',
          status: 'In Development'
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
  background: #fdfdfd
  position: relative
  z-index: 99
  &__header
    padding: 80px 20px
    &__content
      max-width: 1000px
      margin: 0 auto
      &__left, &__right
        display: inline-block
        vertical-align: top
        padding: 0px 20px
      header
        margin: 0px
        margin-bottom: 50px
        font-size: 36px
        line-height: 60px
        font-weight: 600
        color: #00254C
        position: relative
      header:before
        content: ''
        background-color: #29B6F6
        opacity: 0.7
        height: 2px
        width: 70px
        border-radius: 1px
        position: absolute
        top: 70px
        left: 0
        p
          font-size: 20px
          color: #888
      &__entry
        padding: 10px
        div
          display: inline-block
          width: 50%
          vertical-align: top
          padding: 30px
          p.header
            margin: 0px
            margin-bottom: 20px
            font-size: 30px
            line-height: 60px
            font-weight: 600
            color: #00254C
            position: relative
            span, i
              vertical-align: middle
            i
              margin-right: 10px
              color: #00C853
          p.details
            font-size: 18px
            color: #888
          a.cta
            background: #E65100
            color: #fff
            padding: 15px 30px
            border-radius: 30px
            font-size: 18px
            box-shadow: 0px 1px 5px rgba(0,0,0,0.2)
            border: 1px solid rgba(0,0,0,0.1)
            cursor: pointer
            text-decoration: none
          img
            width: 100%
  &__mask
    background: url(https://tokenpockets.com/images/bg2.c37d81d0.png) top right no-repeat
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -2
  &__bg
    position: absolute
    top: 10px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -1
    background: rgba(255,255,255,1)
  &__entries:before
    content: ''
    position: absolute
    width: 1px
    height: 100%
    left: 50%
    background-color: rgba(78, 56, 162, 0.1)
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
  &__container
    max-width: 1000px
    margin: 0 auto
    padding: 5px
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
      p.sub-header
        font-size: 20px
        opacity: 0.7
        margin-bottom: 40px
        color: #333
      &__menu
        padding: 0px
        margin: 0px
        margin-bottom: 20px
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
            background: #eee
            border-radius: 30px
            margin: 0px 10px 10px 0px
            text-transform: uppercase
            border: 1px solid rgba(0,0,0,0.1)
            box-shadow: 0px 1px 3px rgba(0,0,0,0.05)
            transition: 0.2s
          a.active
            color: #fff
            font-weight: 700
            background: #0064CC
            box-shadow: none

@media(max-width: 900px)
  body
    .products
      &__entries:before
        display: none
      padding: 40px 20px
      &__header
        &__content
          &__left, &__right
            width: 100%
          &__left
            img
              height: 60px
              width: auto
              max-width: 100%
            p
              font-size: 16px
              padding: 0px
      &__container
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
          height: 60px
      p.sub-header
        font-size: 16px
    .products__content
      padding: 0px
      p
        color: #eee
    .products__header__content__menu
      margin-bottom: 10px
      li
        a
          border-radius: 30px
          margin: 5px
          font-size: 14px
          padding: 8px 10px
          font-weight: 400
          letter-spacing: 0px
    .product__row
      padding: 5px
    .product__row__content
      p.header
        font-size: 18px
      p
        font-size: 18px

  .products__content__increment
    span
      font-size: 20px
      i
        line-height: 60px
        width: 30px
        height: 60px

@media(max-width: 600px)
  body
    .products
      &__header
        &__content
          &__left
            padding: 0px
            text-align: center
            img
              height: 40px
              width: auto
      &__content
        text-align: center
</style>

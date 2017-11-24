<template lang="pug">
section.about(ref="about" id="about")
  div.about__container
    div.about__container__content
      header
        span About &nbsp;
        span.name Tokenly
      p Tokenly is a leading developer of turnkey blockchain and token solutions.  Our vision is to create a turnkey platform that enables anyone to create, share, and use scalable blockchain-based consumer products.
      div.about__container__content__sub
        div.about__container__content__sub__section
          div.about__container__content__sub__section__content
            div.led-green
            p.about__container__content__sub-header
              span We're &nbsp;
              span Live
            p.about__container__content__sub-header__details
              span 5 Live Applications &nbsp;
              b and counting
            div.about__container__content__sub-header__divider
            p.about__container__content__sub-text
              span Tokenly's ecosystem of consumer-ready blockchain solutions,
              b Token Suite&trade;
              span , includes 5 LIVE products with thousands of active users.
            div
              a(v-scroll-to="'#products'")
                span Learn More About Token Suite&trade;
        div.about__container__content__sub__section
          div.about__container__content__sub__section__content
            i.material-icons.build build
            p.about__container__content__sub-header
              span We're Building the Future
            p.about__container__content__sub-header__details
              span Fast, flexible, secure payment layer
            div.about__container__content__sub-header__divider
            p.about__container__content__sub-text
              span To meet the unique challenges of consumer products, we are developing
              b Token Layer&trade;
              span , a sidechain protocol engineered to support unlimited scalable blockchain token products.
            div
              a(v-scroll-to="'#token-layer'") Learn More About Token Layer&trade;
      div.centered(style="display: none;")
        div.about__container__content__feature
          div.about__container__content__feature__content
            div.about__container__content__feature__content__text
              i.material-icons account_balance_wallet
              p Secure Multisig Wallet
        div.about__container__content__feature
          div.about__container__content__feature__content
            div.about__container__content__feature__content__text
              i.material-icons shopping_cart
              p Turnkey eCommerce Solution
        div.about__container__content__feature
          div.about__container__content__feature__content
            div.about__container__content__feature__content__text
              i.material-icons vpn_key
              p Universal ID & Token Access
        div.about__container__content__feature
          div.about__container__content__feature__content
            div.about__container__content__feature__content__text
              i.material-icons attach_money
              p Token Creation and ICO platform
        div.about__container__content__feature
          div.about__container__content__feature__content
            div.about__container__content__feature__content__text
              i.material-icons chat
              p Token Chats
        div.about__container__content__feature
          div.about__container__content__feature__content
            div.about__container__content__feature__content__text
              i.material-icons library_music
              p TokenFM
      div.about__container__content__continue(style="display: none;")
        a(@click="scrollToProducts")
          span Our Applications
          br
          span
            i.material-icons keyboard_arrow_down
  div.about__mask

</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    let self = this
    window.addEventListener('scroll', e => {
    })
  },

  methods: {
    scrollToProducts: function () {
      var productEl = this.$el.querySelector("#about")
      alert(productEl)
      $('html, body').animate({
        scrollTop: productTopOffset
      }, 500);
    },
  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.about
  background: #001933
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/zwartevilt.png")
  color: #fff
  border-top: 1px solid rgba(0,0,0,0.3)
  box-shadow: 0px -1px 3px rgba(100,100,100,0.2)
  min-height: calc(100vh - 70px)
  display: table
  width: 100%
  z-index: 99
  position: relative
  &__mask
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -1
    background: rgba(0, 25, 51, 1)
    background-image: url(https://tokenpockets.com/images/bg1.658fcf29.png)
    background-size: cover;
    background-position: center;
  &__container
    padding: 80px 30px
    display: table-cell
    vertical-align: middle
    background: rgba(0, 25, 51, 0.5)
    &__content
      max-width: 800px
      margin: 0 auto
      header
        font-size: 40px
        font-weight: 500
        margin: 0px
        margin-bottom: 40px
        letter-spacing: 2px
        text-shadow: 0px 1px 3px rgba(0,0,0,0.3)
        text-align: left
        span.name
          font-weight: 700
      &__sub
        text-align: center
        &__section
          text-align: center
          display: inline-block
          width: 50%
          padding: 20px
          vertical-align: top
          &__content
            background: rgba(5,5,5, 0.5)
            border: 1px solid rgba(0,0,0,0.1)
            padding: 30px 20px
            box-shadow: 0px 2px 5px rgba(0,0,0,0.5)
            border-radius: 5px
            i
              font-size: 70px
              padding-bottom: 20px
          p
            font-size: 18px
            text-align: center
            color: #fff
            font-weight: 600
          a
            padding: 20px
            width: 100%
            display: inline-block
            border: 2px solid #fff
            border-radius: 2px
            color: #fff
            background: #D50000
            cursor: pointer
            transition: 0.5s
            font-weight: 600
            border-radius: 3px
            border: 1px solid rgba(0,0,0,0.1)
            box-shadow: 0px 1px 4px rgba(0,0,0,0.2)
      p
        line-height: 2
        text-align: left
        font-size: 18px
        margin-bottom: 60px
        &.about__container__content__sub-header
          font-size: 20px
          text-transform: uppercase
          letter-spacing: 1px
          color: #E6FF0D
          text-align: center
          margin-bottom: 10px
          &__details
            color: #eee
            letter-spacing: 0.5px
            margin-bottom: 0px
            font-size: 16px
            text-align: center
            font-weight: 400
            b
              font-style: italic
              color: #fff
        &.about__container__content__sub-text
          max-width: 600px
          display: inline-block
          margin: 0 auto
          font-size: 16px
          line-height: 1.5
          margin-bottom: 30px
          text-align: center
          height: 130px
          color: #eee
          letter-spacing: 0.5px
          font-weight: 400
          b
            color: #fff
            margin-left: 6px
      &__feature
        display: inline-block
        padding: 10px
        width: 250px
        height: 250px
        text-align: center
        vertical-align: top
        &__content
          background: #fff
          color: #001933
          border: 1px solid rgba(0,0,0,0.1)
          box-shadow: 0px 1px 3px rgba(0,0,0,0.3)
          padding: 15px
          border-radius: 2px
          height: 100%
          display: table
          width: 100%
          border-radius: 50%
          &__text
            display: table-cell
            vertical-align: middle
        p
          text-align: center
          font-size: 18px
          font-weight: 700
          margin-bottom: 0px
        i
          font-size: 40px
      &__continue
        padding: 30px
        text-align: center
        a
          display: inline-block
          padding: 15px 50px
          border-radius: 50px
          background: #fff
          color: #111
          font-weight: 700
          font-size: 20px
          i
            vertical-align: middle

.about__container__content__sub-header__divider
  border-bottom: 2px solid #bbb
  width: 50%
  display: inline-block
  margin-bottom: 30px
  padding-top: 20px

.led-green
  margin: 0 auto
  width: 70px
  height: 70px
  background-color: #4CAF50
  margin: 0px auto 20px auto
  border-radius: 50%
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset rgba(5,5,5,0.1) 0 -1px 9px, rgba(5,5,5,0.1) 0 2px 12px
  -webkit-animation: blinkGreen 3s infinite;
  -moz-animation: blinkGreen 3s infinite;
  -ms-animation: blinkGreen 3s infinite;
  -o-animation: blinkGreen 3s infinite;
  animation: blinkGreen 3s infinite;

@keyframes blinkGreen
  from
    background-color: #36AD00
  50%
    background-color: #1BFF00
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset rgba(27,255,0,0.7) 0 -1px 9px, rgba(27,255,0,0.7) 0 2px 0
  to
    background-color: #36AD00

.build
  -webkit-animation: spin 4s linear infinite
  -moz-animation: spin 4s linear infinite
  animation: spin 4s linear infinite
  transform: rotate(90deg)
  color: #fff

@keyframes spin
  from
    transform: rotate(90deg)
  50%
    transform: rotate(120deg)
  to
    transform: rotate(90deg)

@media(max-width: 767px)
  body
    .about__container__content
      header
        font-size: 24px
        margin-bottom: 20px
      p
        font-size: 16px
        color: #eee
        margin-bottom: 20px
        line-height: 1.5
      div.about__container__content__sub__section
        width: 100%
    p.about__container__content__sub-text
      height: auto !important

</style>

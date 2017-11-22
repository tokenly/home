<template lang="pug">
section.about(id="about")
  div.about__container
    div.about__container__content
      header
        span About &nbsp;
        span.name Tokenly
      p Tokenly is a leading developer of turnkey blockchain and token solutions.  Our vision is to create a turnkey platform that enables anyone to create, share, and use scalable blockchain-based consumer products.
      div.about__container__content__sub
        div.about__container__content__sub__section
          div.about__container__content__sub__section__content
            p.about__container__content__sub-header
              span We're &nbsp;
              span Live
            p.about__container__content__sub-text
              span Tokenly's ecosystem of consumer-ready blockchain solutions, Token Suite&trade;, includes 5 LIVE products with thousands of active users.
            div
              a
                span Learn More About Token Suite&trade;
        div.about__container__content__sub__section
          div.about__container__content__sub__section__content
            p.about__container__content__sub-header
              span We're Building the Future
            p.about__container__content__sub-text
              span To date, Tokenly has 5 live products with thousands of active users.
            div
              a Learn More About Token Layer&trade;
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
      _.debounce(() => {
        console.log('derl')
        let scroll = document.body.scrollTop
        self.$refs.bg.style.top = `${scroll / 4}px`
      })
    })
  },

  methods: {
    scrollToProducts: function () {
      var productTopOffset = this.$el.offsetHeight - 70
      productTopOffset = window.pageYOffset + productTopOffset
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
        letter-spacing: 3px
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
            background: rgba(255,255,255,0.9)
            border: 1px solid rgba(0,0,0,0.1)
            padding: 30px 20px
            box-shadow: 0px 1px 5px rgba(0,0,0,0.2)
            border-radius: 2px
          p
            font-size: 18px
            text-align: center
            color: rgba(0, 25, 51, 0.9)
            font-weight: 600
          a
            padding: 20px
            width: 100%
            max-width: 300px
            display: inline-block
            border: 2px solid #fff
            border-radius: 2px
            color: #fff
            cursor: pointer
            transition: 0.5s
            &:hover
              background: #fff
              color: #111

      p
        line-height: 2
        text-align: left
        font-size: 18px
        margin-bottom: 60px
        &.about__container__content__sub-header
          font-size: 24px
          color: yellow
          text-align: center
          margin-bottom: 15px
        &.about__container__content__sub-text
          max-width: 600px
          display: inline-block
          margin: 0 auto
          font-size: 16px
          line-height: 1.5
          margin-bottom: 30px
          text-align: justify
          height: 100px
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

@media(max-width: 767px)
  .about__container__content
    header
      font-size: 24px
    div.about__container__content__sub__section
      width: 100%

</style>

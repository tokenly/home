<template lang="pug">
section.about(id="about")
  div.about__container
    div.about__container__content
      header
        span Tokenly Makes Blockchain Easy
      p Tokenly's integrated suite of applications brings the power of blockchain technology ...
      div
        div.about__container__content__feature
          i.material-icons account_balance_wallet
          p Secure Multisig Wallet
        div.about__container__content__feature
          i.material-icons shopping_cart
          p Turnkey eCommerce Solution
        div.about__container__content__feature
          i.material-icons vpn_key
          p Universal ID & Token Access
        div.about__container__content__feature
          i.material-icons attach_money
          p Token Creation and ICO platform
        div.about__container__content__feature
          i.material-icons chat
          p Token Chats
        div.about__container__content__feature
          i.material-icons library_music
          p TokenFM
      div.about__container__content__continue
        a(@click="scrollToProducts")
          span Our Applications
          br
          span
            i.material-icons keyboard_arrow_down

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
  color: #fff
  border-top: 1px solid rgba(0,0,0,0.3)
  box-shadow: 0px -1px 3px rgba(100,100,100,0.2)
  min-height: calc(100vh - 70px)
  display: table
  width: 100%
  z-index: 99
  position: relative
  &__container
    padding: 60px 30px
    display: table-cell
    vertical-align: middle
    &__content
      max-width: 800px
      margin: 0 auto
      header
        font-size: 32px
        font-weight: 700
        margin: 0px
        margin-bottom: 50px
        letter-spacing: 3px
        text-shadow: 0px 1px 3px rgba(0,0,0,0.3);
        span.name
          font-weight: 700
      p
        line-height: 2
        text-align: center
        font-size: 22px
        margin-bottom: 40px
      &__feature
        display: inline-block
        padding: 10px
        width: 33.3%
        text-align: center
        vertical-align: top
        p
          text-align: center
          font-size: 16px
          font-weight: 700
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
</style>

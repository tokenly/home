<template lang="pug">
section.partners(
  ref="partners"
  id="partners"
)
  div.partners__container
    div.partners__container__content
      header Community
      p.sub-header Our turnkey token solutions have already enabled us to partner with some of the most innovative projects in the blockchain space.
      div.partners__container__content__partner
        div.partners__container__content__partner__increment
          span(@click="incrementPartner(-1)")
            i.material-icons keyboard_arrow_left
        Partner(
          :name="this.activePartner.name"
          :summary="this.activePartner.summary"
          :imgURL="this.activePartner.imgURL"
          transition="someEffect"
        )
        div.partners__container__content__partner__increment
          span(@click="incrementPartner(1)")
            i.material-icons keyboard_arrow_right
</template>

<script>
import Partner from './partner.vue'

export default {
  components: {Partner},
  data () {
    return {
      activePartnerIndex: 0,
      partnerData: [
        {
          name: 'Augmentors',
          summary: 'Tokenly helped Augmentors succesfully create and sell $1MM+ token. Augmentors also uses integrations of Token Suite applications in its blockchain and token gaming platform.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/08/augmentors-logo.png'
        },
        {
          name: 'SohoMuse',
          summary: 'Tokenly helped SohoMuse issue the worlds first collectible blockchain token for a high fashion designer.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/08/sohomuse-logo-1.png'
        },
        {
          name: 'RocketChat',
          summary: 'Tokenly worked with Rocket Chat to develop the worlds first blockchain token-controlled access protocol for live chats.',
          imgURL: 'http://jps.layershift.com/rocketchat/images/rocketchatlogo.png'
        }
      ]
    }
  },
  created () {
  },

  methods: {

    incrementPartner: function(value) {
      //$('.product__row.partner').addClass('transition')
      let newIndex = this.activePartnerIndex + value
      if (this.partnerData.length < newIndex + 1) {
        this.activePartnerIndex = 0
      } else if (newIndex < 0) {
        this.activePartnerIndex = this.partnerData.length - 1
      } else {
        this.activePartnerIndex = newIndex
      }
      //$('.product__row.partner').removeClass('transition')
    }
  },

  computed: {
    //compute some form labels
    activePartner () {
      let i = this.activePartnerIndex
      return this.partnerData[i]
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.partners
  position: relative
  background: #f9f9f9
  &__container
    padding: 80px 20px
    &__content
      max-width: 1000px
      margin: 0 auto
      header
        margin: 0px
        text-align: left
        margin-bottom: 50px
        font-size: 30px
        line-height: 60px
        font-weight: 500
        color: #444
        position: relative
      header:before
        content: ''
        background-color: #1565C0
        opacity: 0.7
        height: 2px
        width: 70px
        border-radius: 1px
        position: absolute
        top: 70px
        left: 0
      p.sub-header
        font-size: 20px
        color: #666
        margin-bottom: 40px

.partners__container__content__partner
  width: 100%
  vertical-align: top
  display: table
  vertical-align: top
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
  .product__row
    padding: 20px
    display: table-cell
    vertical-align: middle
    height: 400px

.someEffect-transition
  transition: all .3s ease
  background-color: #eee
  overflow: hidden

/* .*-enter defines the starting state for entering */
/* .*-leave defines the ending state for leaving */

.someEffect-enter, .someEffect-leave
  height: 0
  padding: 0 10px
  opacity: 0

@media(max-width: 900px)
  body
    .partners__container
      padding: 40px 20px
    .partners__container__content
      header
        font-size: 24px
      p.sub-header
        font-size: 16px
    .partners__container__content__partner
      width: 100%
      text-align: center
      margin-bottom: 20px
      &__increment
        span
          font-size: 20px
          i
            line-height: 60px
            width: 30px
            height: 60px
</style>

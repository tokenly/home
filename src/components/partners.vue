<template lang="pug">
section.partners(
  ref="partners"
  id="partners"
)
  div.partners__container
    div.partners__container__content
      header Community
      p.sub-header Our turnkey token solutions have already enabled us to partner with some of the most innovative projects in the blockchain space.
      div.partners__container__content__partners(v-for="partner in partnersData")
        Partner(
          :name="partner.name"
          :summary="partner.summary"
          :imgURL="partner.imgURL"
        )
</template>

<script>
import Partner from './partner.vue'

export default {
  components: {Partner},
  data () {
    return {
    partnersData: [
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
  },

  computed: {
    //compute some form labels
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
        text-align: left
        font-size: 40px
        font-weight: 600
        margin-bottom: 20px
      p.sub-header
        font-size: 20px
        color: #666
        margin-bottom: 40px

.partners__container__content__partners
  width: 33.3%
  vertical-align: top
  display: inline-block
  vertical-align: top
  .product__row
    padding: 20px

@media(max-width: 787px)
  body
    .partners__container__content
      header
        font-size: 24px
      p.sub-header
        font-size: 16px
    .partners__container__content__partners
      width: 100%
      text-align: center
      margin-bottom: 20px
</style>

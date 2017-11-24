<template lang="pug">
section.partners(
  ref="partners"
  id="partners"
)
  div.partners__container
    div.partners__container__content
      header Partners
      p.sub-header Our turnkey token solutions have already enabled us to partner with some of the most innovative projects in the blockchain space.
      div.partners__container__content__partners
        div(v-for="partner in partnersData")
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
        name: 'TokenMarkets',
        summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
        imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
      },
      {
        name: 'TokenMarkets',
        summary: 'Tokenpass is a username-based token inventory and management platform. Instant token delivery, token-controlled access, token lending/rental, and more.',
        imgURL: 'http://tekk.wpengine.com/wp-content/uploads/2017/06/shoppingcart-wireframe-900.png'
      },
      {
        name: 'TokenMarkets',
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

.partners
  position: relative
  background: #eee
  &__container
    padding: 60px 20px
    &__content
      max-width: 800px
      margin: 0 auto
      header
        text-align: left
        font-size: 40px
        font-weight: 600
        margin-bottom: 20px
      p.sub-header
        font-size: 20px
        color: #888
</style>

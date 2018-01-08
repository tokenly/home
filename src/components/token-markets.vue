<template lang="pug">
section.token-markets(
  id="token_markets"
)
  div.products__header
    div.products__header__content
      div.products__header__content__left
        p Token Markets
        p
          span Our consumer-ready turnkey solutions for the entire blockchain token life cycle. Create, buy, sell, securely store blockchain tokens, and more.
      div.products__header__content__right

  .products__bg
  .products__mask
</template>

<script>

export default {
  components: {},
  data () {
    return {
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

</style>

<template lang="pug">

section.open_for_business#sub_hero
  div
    img.blue-divider(
      src = '../assets/images/blue-divider.png'
    )
  div.brand-blue-background.open-for-business-container
    .open-for-business-container__content
      .open-for-business-container__content__header
        header Cryptocurrency Meets eCommerce
        p.sub-header
          span Cryptocurrency is perfect for ecommerce, but bringing the two together still requires advanced technical expertise. Tokenly bridges that technical gap so that anyone can buy and sell using cryptocurrencies.
      div
        .open-for-business-container__content__image
          img(
            src = '../assets/images/token-markets-cart.png'
          )
        .open-for-business-container__content__text
          div.open-for-business-container__content__text__section
            p.open-for-business-container__content__text__header
              span Easy to Use.
            p.open-for-business-container__content__text__sub-header
              span Tokenly's flagship application,
              span(style="font-weight: 600; color: #fff;") &nbsp; Token Markets&trade;
              span , &nbsp; enables anyone to setup an online store that accepts credit cards, bitcoin, and thousands of other cryptocurrencies, all without writing a single line of code. Imagine Shopify with cryptocurrencies.
          div.open-for-business-container__content__text__section
            p.open-for-business-container__content__text__header
              span Instant, Cheap Transactions.
            p.open-for-business-container__content__text__sub-header
              span Tokenly ecommerce solutions are engineered to optimize for lightning fast, low cost transactions; a key to customer use and adoption.
          div.open-for-business-container__content__text__section
            p.open-for-business-container__content__text__header
              span Flexible.
            p.open-for-business-container__content__text__sub-header
              span Tokenly has developed an entire ecosystem of interoperable applications with the flexibility to support unlimited ecommerce use cases, including token-based sales, rentals, lending and more. Tokenly's blockchain- and payment-agnostic infrasture is compatible with almost all cryptocurrencies, even those not yet invented.
  div
    img.blue-divider.upside(
      src = '../assets/images/blue-divider.png'
    )


</template>

<script>
export default {
  data () {
    return {

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

.blue-divider
    width: 100%
    margin: -2px 0px
    vertical-align: top
    &.upside
      transform: rotate(180deg)
.open_for_business
  .open-for-business-container
    &__content
      max-width: 1000px
      width: 100%
      padding: 20px
      padding-bottom: 0px
      margin: 0 auto
      &__header
        max-width: 800px
        margin: 0 auto
        margin-bottom: 50px
        header
          margin: 0px
          color: #fff
          text-align: center
          font-weight: 600
          margin-bottom: 20px
          text-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
        p.sub-header
          color: rgba(255,255, 255, 0.8)
          font-size: 20px
          text-align: center
      &__image, &__text
        width: 50%
        display: inline-block
        padding: 0px 20px
        vertical-align: top
      &__image
        text-align: center
        img
          width: 66.6%
      &__text
        &__section
          margin-bottom: 40px
          &:last-child
            margin-bottom: 0px
        &__header
          line-height: 20px
          font-size: 20px
          color: #fff
          font-weight: 600
        &__sub-header
          font-size: 16px
          color: rgba(255,255,255,0.7)
          line-height: 1.5
          margin-bottom: 0px

@media(max-width: 900px)
  .open_for_business
    .open-for-business-container
      &__content
        padding: 40px 10px
        &__header
          max-width: 800px
          margin: 0 auto
          margin-bottom: 30px
          header
            font-size: 24px
          p.sub-header
            font-size: 16px
        &__image, &__text
          width: 100%
          display: block
        &__image
          margin-bottom: 20px
          img
            width: 25%
</style>

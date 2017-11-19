<template lang="pug">
section.products
  div.products__header
    div.products__header__content
      header
        span Our Products
      ul.products__header__content__menu
        li
          a
            span Tokenpass
        li
          a
            span Token Pockets
        li
          a
            span Token Markets
        li
          a
            span TokenFM
        li
          a
            span Tokenchats
        li
          a
            span Tokenpass
  div.products__content
    p Lorem ipsum
    div.product__row
      div.product__row__image
        span PPERR
      div.prodcut__row__content
        span PPERR


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

.products
  background: #fff
  &__header
    background: #001933
    padding: 30px
    padding-bottom: 0px
    &__content
      max-width: 800px
      margin: 0 auto
      &__menu
        padding: 0px
        margin: 0px
        li
          display: inline-block
          a
            padding: 10px 20px
            color: #fff
            font-weight: 700
            text-transform: uppercase
  &__content
    padding: 50px 20px
    margin: 0 auto
    max-width: 800px

.product__row
  display: flex
  &__image, &__content
    width: 50%
    padding: 10px

</style>

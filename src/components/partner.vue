<template lang="pug">
div.product__row.partner
  div.product__row__image
    img(v-bind:src="this.imgURL")
  div.product__row__content
    p.header
      span {{ this.name }}
    p.sub-header
      span {{ this.summary }}

</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    name: {
      'type': String
    },
    summary: {
      'type': String
    },
    imgURL: {
      'type': String
    }
  },
  created () {
  },

  methods: {

  },

  computed: {

    imageBackground () {
      let style = {
        backgroundImage: 'url(' + this.imgURL + ')'
      }
      return style
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.product__row.partner
  opacity: 1
  transition: 0.5s
  text-align: center
  &.transition
    opacity: 0
  .product__row__image
    text-align: center
    margin-bottom: 20px
    img
      max-width: 100%
      max-height: 100%
      vertical-align: middle
  p.header
    font-size: 24px
    font-weight: 600
  p.sub-header
    color: #666
    font-size: 18px

@media(max-width: 900px)
  .product__row.partner
    p.sub-header
      font-size: 16px
    .product__row__image
      img
        width: 50%

</style>

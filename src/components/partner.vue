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
  .product__row__image
    text-align: center
    margin-bottom: 20px
    img
      filter: grayscale(100%)
      max-width: 100%
      max-height: 100%
      vertical-align: middle
  p.header
    font-size: 18px
    font-weight: 600
  p.sub-header
    color: #666

</style>

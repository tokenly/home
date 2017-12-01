<template lang="pug">
div.product__row(v-bind:id="this.elID")
  div.product__row__content.token-layer-feature
    p.header
      span {{ this.headline }}
    p.detail
      span {{ this.summary }}

</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    elID: {
      'type': String
    },
    headline: {
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

.product__row
  display: flex
  &__content.token-layer-feature
    padding: 10px
    vertical-align: middle
    width: 100%
    p
      line-height: 1.5
      font-size: 18px
      color: #f9f9f9
    p.header
      color: #fff
      font-weight: 700
      font-size: 20px
      letter-spacing: 0.5px
      margin-bottom: 30px
      span
        padding-bottom: 10px
        border-bottom: 2px solid #29B6F6
    span.live
      font-weight: 700
      color: #E6FF0D

@media(max-width: 900px)
  .product__row
    padding: 5px
    .token-layer-feature
      p.header
        font-size: 18px
      p
        font-size: 16px

</style>

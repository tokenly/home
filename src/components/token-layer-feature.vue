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
  max-width: 500px
  margin: 0 auto
  &__content.token-layer-feature
    padding: 10px
    vertical-align: middle
    width: 100%
    p
      line-height: 1.5
      font-size: 18px
      color: #555
    p.header
      color: #444
      font-style: italic
      font-weight: 700
      font-size: 20px
      letter-spacing: 0.5px
    p.detail
      color: #888
    span.live
      font-weight: 700
      color: #E6FF0D

@media(max-width: 767px)
  .product__row
    padding: 5px
    .token-layer-feature
      p.header
        font-size: 18px
      p
        font-size: 14px

</style>

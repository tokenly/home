<template lang="pug">
div.product__row(v-bind:id="this.elID")
  div.product__row__content.token-layer-feature
    p.header
      span {{ this.headline }}
    div.divider
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
      color: #667
    p.header
      color: #334
      font-weight: 700
      font-size: 20px
      letter-spacing: 0.5px
      margin-bottom: 15px
    span.live
      font-weight: 700
      color: #E6FF0D
    div.divider
      padding: 1px
      width: 25%
      background: #29B6F6
      display: inline-block
      margin-bottom: 25px

@media(max-width: 900px)
  .product__row
    padding: 5px
    .token-layer-feature
      padding: 0px
      p.header
        font-size: 16px
      p
        font-size: 16px

</style>

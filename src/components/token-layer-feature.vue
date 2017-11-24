<template lang="pug">
div.product__row(v-bind:id="this.elID")
  div.product__row__content.token-layer-feature
    p.header
      span {{ this.headline }}
    p
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
  background: rgba(0,0,0,0.5)
  border: 1px solid rgba(0,0,0,0.2)
  box-shadow: 0px 2px 5px rgba(0,0,0,0.5)
  padding: 30px
  &__content.token-layer-feature
    padding: 10px
    vertical-align: middle
    p
      line-height: 2
      font-size: 16px
    p.header
      font-weight: 700
      font-size: 20px
      letter-spacing: 0.5px
    span.live
      font-weight: 700
      color: #E6FF0D

@media(max-width: 767px)
  .product__row

</style>

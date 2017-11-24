<template lang="pug">
div.product__row(v-bind:id="this.elID")
  div.product__row__image
    img(v-bind:src="this.imgURL")
  div.product__row__content
    p.header
      span {{ this.headline }}
    p
      span {{ this.summary }}
    p
      span Status: &nbsp;
      span.live LIVE
    p(v-if="this.linkURL.length > 0")
      a(
        v-bind:href="this.linkURL"
        target="__blank"
      )
        span URL: &nbsp;
        span {{ this.linkText }}
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
    linkURL: {
      'type': String
    },
    linkText: {
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
  &__image, &__content
    padding: 10px
    vertical-align: middle
  &__content
    width: 70%
    padding: 10px
    vertical-align: middle
    p
      line-height: 2
      font-size: 16px
      a
        color: #fff
        text-decoration: none
        color: rgba(255,255,255,0.9)
        font-weight: 700
    p.header
      font-weight: 700
      font-size: 24px
      letter-spacing: 0.5px
    span.live
      font-weight: 700
      color: #E6FF0D

  &__image
    width: 30%
    img
      width: 100%
    div
      max-width: 100%
      height: 100%
      background-size: cover
      background-repeat: no-repeat
      background-position: 50% 50%

@media(max-width: 767px)
  .product__row
    &__image
      display: none
    &__content
      width: 100%

</style>

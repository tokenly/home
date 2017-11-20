<template lang="pug">
div.product__row
  div.product__row__image
    div(
      v-bind:style="imageBackground"
    )
  div.product__row__content
    p.header
      span {{ this.headline }}
    p
      span {{ this.summary }}
    p
      span Status: &nbsp;
      span.live LIVE
    span
      i.material-icons keyboard_arrow_left
    span
      i.material-icons keyboard_arrow_right
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
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
  &__image, &__content
    padding: 10px
    vertical-align: middle
  &__content
    width: 70%
    padding: 10px
    vertical-align: middle
    p
      line-height: 2
    p.header
      font-weight: 700
      font-size: 24px
      letter-spacing: 0.5px
    span.live
      font-weight: 700
      color: #E6FF0D

  &__image
    width: 30%
    div
      max-width: 100%
      background-size: cover
      background-repeat: no-repeat
      background-position: 50% 50%

</style>

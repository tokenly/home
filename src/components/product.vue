<template lang="pug">
div.product__row(v-bind:id="this.elID")
  div.product__row__image(v-bind:class="{ active: imageLeft }")
    img(
      v-bind:src="imageBackgroundSrc"
    )
  div.product__row__content
    p.header
      span {{ this.headline }}
    p.detail
      span {{ this.summary }}
    p(v-if="this.status == 'Live'")
      span Status: &nbsp;
      a.live(
        v-if="this.linkURL.length > 0"
        v-bind:href="this.linkURL"
        target="__blank"
      ) Live
      span.live(
        v-else
      ) Live
    p(v-if="this.status == 'In Development'")
      span Status: &nbsp;
      span.development In Development
    p(v-if="this.linkURL.length > 0")
      a.link(
        v-bind:href="this.linkURL"
        target="__blank"
      )
        span {{ this.linkText }}
  div.product__row__image.hide-mobile(v-bind:class="{ active: !imageLeft }")
    img(
      v-bind:src="imageBackgroundSrc"
    )
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
    },
    status: {
      'type': String
    },
    indexNum: {
      'type': Number
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
    },

    imageBackgroundSrc () {

      return this.imgURL
    },

    imageLeft () {
      let val = (this.indexNum % 2)
      if (val == 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.product__row
  display: table
  border-radius: 5px
  margin-bottom: 20px
  &__image, &__content
    padding: 0px 50px
    vertical-align: middle
  &__content
    width: 50%
    vertical-align: middle
    display: table-cell
    p
      line-height: 1.5
      font-size: 18px
      color: #555
      margin-bottom: 25px
      a.link
        text-decoration: none
        padding: 5px 0px
        display: inline-block
        font-weight: 500
        border-radius: 30px
        color: #333
        span
          line-height: 22px
          vertical-align: middle
    p.header
      font-weight: 700
      font-size: 24px
      line-height: 1.25
      color: #00254C
    p.detail
      margin-bottom: 30px
      color: #666
    .live
      font-weight: 500
      background: #00D93A
      font-size: 14px
      padding: 3px 20px
      border: 1px solid rgba(0,0,0,0.1)
      border-radius: 20px
      color: #fff
      text-decoration: none
    .development
      font-weight: 500
      background: #00254C
      font-size: 14px
      padding: 3px 20px
      border: 1px solid rgba(0,0,0,0.1)
      border-radius: 20px
      color: #fff
      text-decoration: none
    p:last-of-type
      margin: 0px

  &__image
    display: none
    &.active
      display: table-cell
      width: 50%
    img
      width: 100%
    div
      max-width: 100%
      height: 100%
      background-size: cover
      background-repeat: no-repeat
      background-position: 50% 50%

@media(max-width: 750px)
  .product__row
    padding: 0px
    &__image, &__content
      width: 100%
      padding: 0px
      display: block
    &__image
      margin-bottom: 20px
      text-align: center
      img
        width: 50%
      &.hide-mobile
        display: none !important
      &.active
        display: block
        width: 100%
    &__content
      width: 100%
      margin-bottom: 30px
      p.header
        font-size: 20px
        margin-bottom: 10px
      p
        font-size: 16px

</style>

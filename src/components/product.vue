<template lang="pug">
div.product__row(v-bind:id="this.elID")
  div.product__row__image
    img(
      v-bind:src="imageBackgroundSrc"
    )
  div.product__row__content
    p.header
      span {{ this.headline }}
    p.detail
      span {{ this.summary }}
    p
      span Status: &nbsp;
      a.live(
        v-if="this.linkURL.length > 0"
        v-bind:href="this.linkURL"
        target="__blank"
      ) Live
      span.live(
        v-else
      ) Live
    p(v-if="this.linkURL.length > 0")
      a.link(
        v-bind:href="this.linkURL"
        target="__blank"
      )
        span Go to {{ this.linkText }}
        i.material-icons forward
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
    },

    imageBackgroundSrc () {

      return this.imgURL
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.product__row
  display: flex
  border-radius: 5px
  &__image, &__content
    padding: 10px
    vertical-align: middle
  &__content
    width: 70%
    padding: 10px
    vertical-align: middle
    p
      line-height: 2
      font-size: 18px
      color: #555
      margin-bottom: 25px
      a.link
        text-decoration: none
        padding: 5px 20px
        display: inline-block
        font-weight: 500
        background: #eee
        border-radius: 30px
        color: #333
        border: 1px solid rgba(0,0,0,0.1)
        span
          line-height: 22px
          vertical-align: middle
        i
          line-height: 22px
          vertical-align: middle
          margin-left: 5px
          font-size: 22px
    p.header
      font-weight: 700
      font-size: 20px
      letter-spacing: 0.5px
      color: #444
      font-style: italic
    p.detail
      margin-bottom: 30px
    .live
      font-weight: 700
      background: #00D93A
      padding: 3px 20px
      border-radius: 20px
      color: #fff
      text-decoration: none
    p:last-of-type
      margin: 0px

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
      p.header
        font-size: 18px
      p
        line-height: 1.5

</style>

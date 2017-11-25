<template lang="pug">
div.team-member
  div.team-member__image
    div(
      v-bind:style="imageBackground"
    )
  div.team-member__content
    p.name
      span {{ this.name }}
    p.title
      span {{ this.title }}
    p.summary
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
    name: {
      'type': String
    },
    title: {
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

.team-member
  padding: 10px
  text-align: left
  &__image, &__content
    padding: 10px
    vertical-align: middle
  &__content
    padding: 10px
    vertical-align: middle
    p
      line-height: 1
    p.name
      font-size: 18px
      color: #333
      font-weight: 600
      margin-bottom: 5px
    p.title
      color: #999
      margin-bottom: 25px
    p.summary
      color: #111
      line-height: 1.5
      margin-bottom: 0px

.team-member__image
  width: 100px
  height: 100px
  div
    border-radius: 50%
    max-width: 100%
    height: 100%
    background-size: cover
    background-repeat: no-repeat
    background-position: 50% 50%

@media(max-width: 767px)
  body
    .product__row
      &__image
        display: none
      &__content
        width: 100%
    .team-member__content
      p.summary
        font-size: 16px

</style>

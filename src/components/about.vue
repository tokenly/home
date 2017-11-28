<template lang="pug">
section.about(ref="about" id="about")
  div.about__container
    div.about__container__content
      header
        span About
        span.name Tokenly
      p Tokenly is a leading innovator and developer of turnkey blockchain and token solutions.

  div.about__mask

</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    let self = this
    window.addEventListener('scroll', e => {
    })
  },

  methods: {
    scrollToProducts: function () {
      var productEl = this.$el.querySelector("#about")
      alert(productEl)
      $('html, body').animate({
        scrollTop: productTopOffset
      }, 500);
    },
  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.about
  background: #fff
  color: #222
  box-shadow: 0px -1px 3px rgba(100,100,100,0.2)
  display: table
  width: 100%
  z-index: 99
  position: relative
  text-align: left
  &__mask
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -1
    background-size: cover
  &__container
    padding: 80px 30px
    display: table-cell
    vertical-align: middle
    background: rgba(255,255,255,0.85)
    &__content
      max-width: 1000px
      margin: 0 auto
      header
        font-size: 28px
        color: #666
        line-height: 60px
        font-weight: 400
        margin: 0px
        margin-bottom: 100px
        letter-spacing: 1px
        position: relative
        span
          vertical-align: top
        span.name
          font-weight: 400
          margin-left: 0.3em
        img
          height: 48px
          vertical-align: top
      header:before
        content: ''
        background-color: #00254C
        height: 2px
        width: 70px
        border-radius: 1px
        position: absolute
        top: 70px
        left: 0
      &__sub
        text-align: center
        &__section
          text-align: center
          display: inline-block
          width: 50%
          padding: 20px
          vertical-align: top
          &__content
            padding: 30px 20px
            i
              font-size: 70px
              padding-bottom: 20px
          p
            font-size: 18px
            text-align: center
            color: #111
            font-weight: 600
          a
            padding: 20px
            width: 100%
            display: inline-block
            border: 2px solid #fff
            border-radius: 2px
            color: #fff
            background: #0064CC
            cursor: pointer
            transition: 0.5s
            font-weight: 600
            border-radius: 40px
            border: 1px solid rgba(0,0,0,0.1)
            box-shadow: 0px 1px 4px rgba(0,0,0,0.2)
      p
        font-size: 20px
        margin-bottom: 20px
        color: #666
        &.about__container__content__sub-header
          font-size: 20px
          text-transform: uppercase
          letter-spacing: 1px
          color: #001933
          text-align: center
          margin-bottom: 10px
          &__details
            color: #666
            letter-spacing: 0.5px
            margin-bottom: 0px
            font-size: 16px
            text-align: center
            font-weight: 400
            b
              font-style: italic
              color: #555
        &.about__container__content__sub-text
          max-width: 600px
          display: inline-block
          margin: 0 auto
          font-size: 16px
          line-height: 1.5
          margin-bottom: 30px
          text-align: center
          height: 130px
          color: #222
          letter-spacing: 0.5px
          font-weight: 400
          b
            color: #111
            margin-left: 6px
            cursor: pointer
      &__feature
        display: inline-block
        padding: 10px
        width: 250px
        height: 250px
        text-align: center
        vertical-align: top
        &__content
          background: #fff
          color: #001933
          border: 1px solid rgba(0,0,0,0.1)
          box-shadow: 0px 1px 3px rgba(0,0,0,0.3)
          padding: 15px
          border-radius: 2px
          height: 100%
          display: table
          width: 100%
          border-radius: 50%
          &__text
            display: table-cell
            vertical-align: middle
        p
          text-align: center
          font-size: 18px
          font-weight: 700
          margin-bottom: 0px
        i
          font-size: 40px
      &__continue
        padding: 30px
        text-align: center
        a
          display: inline-block
          padding: 15px 50px
          border-radius: 50px
          background: #fff
          color: #111
          font-weight: 700
          font-size: 20px
          i
            vertical-align: middle

.about__container__content__sub-header__divider
  border-bottom: 2px solid #bbb
  width: 50%
  display: inline-block
  margin-bottom: 30px
  padding-top: 20px

.build
  -webkit-animation: spin 4s linear infinite
  -moz-animation: spin 4s linear infinite
  animation: spin 4s linear infinite
  transform: rotate(90deg)
  color: #001933

@keyframes spin
  from
    transform: rotate(90deg)
  50%
    transform: rotate(120deg)
  to
    transform: rotate(90deg)

@media(max-width: 900px)
  body
    .about__container
      padding: 40px 20px
    .about__container__content
      header
        font-size: 24px
        margin-bottom: 60px
      p
        font-size: 16px
        margin-bottom: 20px
        line-height: 1.5
      div.about__container__content__sub__section
        width: 100%
    p.about__container__content__sub-text
      height: auto !important

</style>

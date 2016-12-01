<template lang="pug">
.hero
  .hero__content__container.container
    .hero__content(ref="content")
      .row
        .hero__heading Tokenly
      .row
        .hero__subheading Ownership Reinvented
      .row
        h1.hero__h1 Building bridges between business and the blockchain.
      a.hero__btn(href="http://apidocs.tokenly.com/") Get Started
  .hero__bg__mask
  .hero__bg(ref="bg"): img(src="../assets/bginverted.svg")
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    let self = this
    window.addEventListener('scroll', e => {
      _.debounce(() => {
        console.log('derl')
        let scroll = document.body.scrollTop
        self.$refs.bg.style.top = `${scroll / 4}px`
      })
    })
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
$hero-spacing: 70px
$hero-btn-color: #4170a0

.hero
  display: flex
  position: relative
  font-size: 1em
  margin: 0 10px
  overflow: hidden

.hero__bg, .hero__bg__mask
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0

.hero__content__container
  position: relative
  z-index: 100

.hero__content
  position: relative
  margin-top: $hero-spacing
  margin-bottom: $hero-spacing

.hero__bg
  z-index: 1
  background-size: cover
  background-position: center
  overflow: hidden
  -webkit-filter: blur(8px)
  transform: scale(1.1)
  img
    width: 45em
    margin-top: 0
    margin-left: 0
    position: absolute
    right: 0
    top: -178%
    transform: rotate(180deg)

.hero__bg__mask
  z-index: 5
  background: linear-gradient(to top, rgba(255, 255, 255, 0), #f8f8f9)

.hero__heading
  font-size: 2em
  font-weight: bold
  margin-bottom: 0.2em

.hero__subheading
  font-size: 1em
  margin-bottom: 1em

.hero__h1
  overflow: hidden
  font-size: 1.3em
  text-transform: none
  letter-spacing: 0
  color: inherit
  margin-bottom: 1.5em
  line-height: 1.5

.hero__btn
  display: inline-block
  outline: none
  border: none
  background-color: $hero-btn-color
  color: #fff
  border-radius: 2px
  font-size: 1.3em
  font-weight: bold
  line-height: 1
  padding: 14px 36px
  transition: box-shadow 0.1s
  box-shadow: none
  text-decoration: none
  box-shadow: 0 1px 8px -2px #242424
  &:hover
    color: inherit
    cursor: pointer
    background-color: lighten($hero-btn-color, 5%)
</style>

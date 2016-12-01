<template lang="pug">
.hero
  .hero__content__container.container
    .hero__content
      .hero__heading Tokenly
      br
      .hero__subheading Ownership Reinvented
      br
      h1.hero__h1 Building bridges between business and the blockchain.
      br
      a.hero__btn(href="http://apidocs.tokenly.com/") Get Started
  .hero__bg__mask
  .hero__bg: img(src="../assets/bg.svg")
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
$hero-spacing: 80px
$hero-btn-color: #4170a0

@mixin textbg
  background-color: #454344
  padding: 0.2em 0.5em
  display: inline-block

.hero
  display: flex
  position: relative
  color: #fff
  font-size: 1em
  margin: 0 10px
  overflow: hiddden
  background-color: #ffed80

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
  margin-top: $hero-spacing
  margin-bottom: $hero-spacing

.hero__bg
  z-index: 1
  background-size: cover
  background-position: center 75%
  overflow: hidden
  img
    width: 60%
    transform: rotate(272deg)
    margin-top: -26%
    margin-left: 52%
    
.hero__bg__mask
  z-index: 5
  background-color: rgba(0, 0, 0, 0.1)

.hero__heading
  +textbg
  font-size: 2em
  font-weight: bold
  margin-bottom: 0.2em

.hero__subheading
  +textbg
  font-size: 1em
  margin-bottom: 1.5em

.hero__h1
  +textbg
  overflow: hidden
  font-size: 1.3em
  text-transform: none
  letter-spacing: 0
  color: inherit
  white-space: break-word
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

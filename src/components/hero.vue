<template lang="pug">
.hero
  .hero__content__container.container
    .hero__content(ref="content")
      .row
        h1.hero__h1 Build and Launch Digital Tokens
        h2.hero__h2 Tokenly is the world's first turnkey solution anyone can use to create and manage token-based consumer products
      .form-container
        form
          input.form-container__text(
            placeholder="Enter your email address"
            type="text"
          )
          input.form-container__submit(
            type="submit"
            value="Get Started"
          )
      div.more-information
        a New to Tokens?
  .hero__bg__mask
  .hero__bg(ref="bg"): img(src="../assets/dark_sharp_edges.png")
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
$hero-spacing: 110px
$hero-btn-color: #4170a0

.hero
  display: flex
  position: relative
  font-size: 1em
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
  padding-top: $hero-spacing
  padding-bottom: $hero-spacing
  text-align: center
  color: #fff

.hero__heading
  font-size: 2em
  font-weight: bold
  margin-bottom: 0.2em

.hero__subheading
  font-size: 1em
  margin-bottom: 1em

.hero__h1
  overflow: hidden
  text-transform: none
  color: inherit
  margin-bottom: 30px
  line-height: 1.5
  letter-spacing: 0.05px
  font-size: 60px
  text-shadow: 0px 1px 1px rgba(0,0,0,0.3)

.hero__h2
  overflow: hidden
  text-transform: none
  letter-spacing: 0
  color: inherit
  line-height: 1.1
  font-size: 24px
  font-weight: 500
  margin-bottom: 50px

.form-container
  margin: 0 auto
  padding: 25px
  border-radius: 15px
  background: rgba(0,0,0,0.3)
  display: inline-block
  margin-bottom: 30px
  .form-container__text
    width: 300px
    color: #666
    background: #eee
    margin-right: 20px
    font-size: 16px
    line-height: 20px
    padding: 18px
    vertical-align: middle
    font-weight: 500
    border: none
    border-radius: 3px
    &:focus
      border: none
      outline: none
      background: #fff
  .form-container__submit
    height: 61px
    vertical-align: middle
    padding: 10px 30px
    cursor: pointer
    background: #FF8B82
    background-image: linear-gradient(#FF8B82,#C96E67)
    background-color: #FF8B82
    border: 1px solid rgba(0,0,0,0.1)
    text-shadow: 0px 1px 1px rgba(0,0,0,0.2)
    font-weight: 600
    color: #fff
    border-radius: 3px
    box-shadow: 0px 1px 1px rgba(0,0,0,0.3)
    &:hover
      background: #EB786E
      background-image: linear-gradient(#EB786E,#EB786E)
      background-color: #EB786E


.more-information
  a
    color: rgba(255,255,255,0.6)

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
    cursor: pointer
    background-color: lighten($hero-btn-color, 5%)

.hero__bg__mask
  background: linear-gradient(to bottom, #4270a1 0%, #284461 100%)
  opacity: 0.6
  z-index: 5

.hero__bg
  z-index: 1
  background-size: cover
  background-position: center
  overflow: hidden
  -webkit-filter: blur(0px)
  img
    width: 100%
    margin-top: 0
    margin-left: 0
    position: absolute
    right: 0

</style>

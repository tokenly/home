<template lang="pug">
.hero
  .hero__content__container.container
    .hero__content
      .hero__heading Tokenly
      .hero__subheading Ownership Reinvented
      h1.hero__tag Building bridges between business and the blockchain.
      button.hero__btn() Get Started
  .hero__bg__mask
  .hero__bg(v-bind:style="{backgroundImage: backgroundImage}")
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    backgroundImage () {
      let url = 'https://images.unsplash.com/photo-1478147427282-58a87a120781?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop='
      return `url(${url})`
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true">
.hero
  display: flex
  position: relative
  color: #fff
  font-size: 1em
  margin: 0 10px

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
  margin-top: 60px
  margin-bottom: 60px

.hero__bg
  z-index: 1
  background-color: #f7b640
  background-size: cover
  background-position: center

.hero__bg__mask
  z-index: 5
  background-color: rgba(255, 255, 255, 0.2)

.hero__heading
  font-size: 2em
  font-weight: bold

.hero__subheading
  font-size: 1em

.hero__tag
  overflow: hidden
  font-size: 1.3em
  text-transform: none
  letter-spacing: 0
  color: inherit
  white-space: break-word

.hero__btn
  outline: none
  border: none
  background-color: #6c5cc7
  color: #fff
  border-radius: 2px
  font-size: 1.3em
  font-weight: bold
  line-height: 1
  padding: 14px 36px
  transition: box-shadow 0.1s
  &:hover
    cursor: pointer
    box-shadow: 0 2px 1px -1px #625d5d
</style>

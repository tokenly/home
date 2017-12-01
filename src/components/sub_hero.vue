<template lang="pug">
section.sub_hero
  div.sub_hero__container
    div.sub_hero__container__content
      div.sub_hero__container__content__entry
        div.sub_hero__container__content__entry__icon
          img(
            src="https://png.icons8.com/rocket/office/90/ffffff"
          )
        p.header We're Live
        div.divider
        br
        p.sub-header More than just an idea. Tokenly has 5 live blockchain token solutions and thousands of users.
        a.cta(v-scroll-to="'#products'")
          span Learn More About Tokenly Solutions
      div.sub_hero__container__content__entry
        div.sub_hero__container__content__entry__icon
          img(
            src="https://png.icons8.com/support/ultraviolet/90/ffffff"
          )
        p.header We're Building the Future
        div.divider
        br
        p.sub-header We are developing a sidechain protocol from the ground up with flexibility, scalability, and stable transaction fees in its DNA.
        a.cta(v-scroll-to="'#token-layer'")
          span Learn More About Token Layer&trade;
      div.sub_hero__container__content__entry
        div.sub_hero__container__content__entry__icon
          img(
            src="https://png.icons8.com/light-on/color/90/ffffff"
          )
        p.header We're Collaborating
        div.divider
        br
        p.sub-header Tokenly's turnkey solutions have been choice of many of the most innovative projects in the blockchain space.
        a.cta(v-scroll-to="'#partners'")
          span Learn More About Tokenly's Partnerships
  .sub_hero__bg
  .sub_hero__texture
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
  },

  methods: {

  },

  computed: {
    //compute some form labels
  }
}

</script>

<style lang="sass?indentedSyntax=true" scoped>

.sub_hero
  border-top: 2px solid #00254C
  border-bottom: 2px solid #00254C
  position: relative
  &__bg
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    background: #0D47A1
    background-image: linear-gradient(to bottom, #29B6F6, #039BE5, #01579B)
    opacity: 0.75
    z-index: -2
  &__texture
    background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/dark_mosaic.png")
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: -3
  &__container
    padding: 80px 20px
    &__content
      margin: 0 auto
      max-width: 1100px
      text-align: center
      color: #fff
      &__entry
        padding: 20px
        width: 33.3%
        display: inline-block
        vertical-align: top
        &__icon
          height: 100px
          margin-bottom: 10px
        p.header
          font-size: 24px
          font-weight: 700
          text-shadow: 0px 1px 3px rgba(0,0,0,0.3)
          letter-spacing: 0.5px
          margin-bottom: 20px
        p.sub-header
          color: rgba(255,255,255, 0.8)
          font-size: 18px
          height: 140px
        a.cta
          border: 2px solid #fff
          padding: 15px
          border-radius: 30px
          color: #fff
          background: rgba(20,20,20,0.5)
          max-width: 400px
          width: 100%
          cursor: pointer
          display: inline-block
        div.divider
          border-bottom: 2px solid rgba(255,255,255,0.5)
          width: 50%
          display: inline-block
          margin-bottom: 20px

.led-green
  display: inline-block
  width: 70px
  height: 70px
  background-color: #4CAF50
  margin: 10px auto
  border-radius: 50%
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset rgba(5,5,5,0.1) 0 -1px 9px, rgba(5,5,5,0.1) 0 2px 12px
  -webkit-animation: blinkGreen 3s infinite;
  -moz-animation: blinkGreen 3s infinite;
  -ms-animation: blinkGreen 3s infinite;
  -o-animation: blinkGreen 3s infinite;
  animation: blinkGreen 3s infinite;

@keyframes blinkGreen
  from
    background-color: #36AD00
  50%
    background-color: #1BFF00
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset rgba(27,255,0,0.7) 0 -1px 9px, rgba(27,255,0,0.7) 0 2px 0
  to
    background-color: #36AD00

.lightbulb
  -webkit-animation: glowYellow 3s infinite
  -moz-animation: glowYellow 3s infinite
  -ms-animation: glowYellow 3s infinite
  -o-animation: glowYellow 3s infinite
  animation: glowYellow 3s infinite

@keyframes glowYellow
  from
    text-shadow: none
    color: #fff
  50%
    text-shadow: 0px 1px 3px yellow
    color: #eee
  to
    text-shadow: none
    color: #fff

@media(max-width: 900px)
  body
  .sub_hero
    &__container
      padding: 40px 10px
      &__content
        &__entry
          width: 100%
          margin-bottom: 20px
          p.sub-header
            height: auto
            margin-bottom: 40px
            max-width: 500px
            display: inline-block
          div.divider
            width: 70px
        &__entry:last-of-type
          margin-bottom: 0px


</style>

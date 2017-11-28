<template lang="pug">
section.sub_hero
  div.sub_hero__container
    div.sub_hero__container__content
      div.sub_hero__container__content__entry
        div.sub_hero__container__content__entry__icon
          span.led-green
        p.header We're Live
        p.sub-header More than an idea. We have 5 live blockchain token solutions and counting.
      div.sub_hero__container__content__entry
        div.sub_hero__container__content__entry__icon
          i.material-icons.build build
        p.header We're Building the Future
        p.sub-header To meet the unique challenges of creating scalable consumer products, we are developing Token Layer, a sidechain protocol engineered to support ...
      div.sub_hero__container__content__entry
        div.sub_hero__container__content__entry__icon
          i.material-icons.build build
        p.header We're Live
        p.sub-header 5 Live Solutions and Counting
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
  background: #00458C
  &__container
    padding: 80px 20px
    &__content
      margin: 0 auto
      max-width: 1100px
      text-align: center
      color: #fff
      &__entry
        padding: 10px
        width: 33.3%
        display: inline-block
        vertical-align: top
        &__icon
          height: 70px
        i
          width: 50px
          height: 50px
          font-size: 50px
          margin-bottom: 20px
        p.header
          font-size: 24px
          font-weight: 700
        p.sub-header
          color: rgba(255,255,255, 0.8)
          font-size: 18px

.led-green
  margin: 0 auto
  display: inline-block
  width: 50px
  height: 50px
  background-color: #4CAF50
  margin: 0px auto 20px auto
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

@media(max-width: 900px)
  body
  .sub_hero
    &__container
      &__content
        &__entry
          width: 50%


</style>

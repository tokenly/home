<template lang="pug">
section.hero
  .hero__content__container
    .hero__content(ref="content")
      .hero__content__inner
        .hero__content__inner__text
          h1.hero__h1
            span Turnkey Token Solutions
          h2.hero__h2
            span Create, share, and use blockchain tokens without writing a single line of code.
          a.hero__cta.animated(v-scroll-to="'#about'")
            span Learn More
        .hero__content__inner__image
  .hero__bg__mask
  .hero__bg(
    ref="bg"
  )
  <!-- canvas.background -->
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

    scrollToAbout: function () {
      var aboutTopOffset = this.$el.offsetHeight - 70
      $('html, body').animate({
        scrollTop: aboutTopOffset
      }, 500);
    },

    submitForm: function () {
      if (!this.spamDetected) {
        if (this.validEmail) {
          this.emailSubmitted = true
          this.sendDataToSheet()
        } else {
            this.emailSubmissionError = true
        }
      }
    },

    addInterest: function (interest) {
      this.interestSubmitted = true
      this.contact.interest = interest
      this.sendDataToSheet()
    },

    addAdditionalInfo: function () {
      if (!this.spamDetected) {
        this.additionalInfoSubmitted = true
        this.sendDataToSheet()
      }
    },

    sendDataToSheet () {

      let self = this

      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzxPW1g-E33514VVOyuz6DwZfa71cYs3EnIeYYYX6L2hzk3liyL/exec",
        type: "post",
        data: self.contact,
        success: function(data) {
          console.log(data)
        },
        error: function(data) {
          console.log(data)
        },

      })

    }

  },

  computed: {
    //compute some form labels

    validEmail () {
      if (this.contact.email.length > 0 & !this.errors.has('email')) {
        return true
      } else {
        return false
      }
    },

    spamDetected () {
      //see if a pesky bot filled in the hidden input
      return (this.gotcha.length > 0)
    }
  }
}

//window.onload = function() {
//  Particles.init({
//    selector: '.background',
//    maxParticles: 20,
//    color: '#29B6F6',
//    connectParticles: true
//  });
//};

</script>

<style lang="sass?indentedSyntax=true" scoped>
$hero-spacing: 150px
$hero-spacing-mobile: 100px
$hero-btn-color: #4170a0

.hero
  display: flex
  position: relative
  font-size: 1em
  overflow: hidden
  min-height: 500px
  height: 100vh
  z-index: 0

.hero__bg, .hero__bg__mask
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0


.hero__content__container
  position: absolute
  z-index: 100
  top: 0px
  bottom: 0px
  right: 0px
  left: 0px
  display: table
  width: 100%
  height: 100%
  min-height: 400px

.hero__content
  position: relative
  text-align: center
  color: #333
  max-width: 800px
  margin: 0 auto
  display: table-cell
  vertical-align: middle
  padding: 20px
  &__inner
    max-width: 1100px
    margin: 0 auto
    &__text, &__image
      width: 50%
      display: inline-block
      vertical-align: top
      padding: 30px
    &__text
      text-align: left

.hero__continue
  position: absolute
  text-align: center
  bottom: 0px
  z-index: 9
  width: 100%
  padding: 30px
  z-index: 9999
  i
    vertical-align: middle

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
  margin: 0px 0px 30px 0px
  line-height: 1.5
  letter-spacing: 0.5px
  font-size: 36px
  font-weight: 700
  transition: 0.5s
  color: #00254C
  .emphasized
    color: #E6FF0D
    -webkit-animation: fadein 2s
    -moz-animation: fadein 2s
    -ms-animation: fadein 2s
    -o-animation: fadein 2s
    animation: fadein 2s

@-webkit-keyframes fadein
  from
    opacity: 0
    margin-left: 50px
    display: none
  to
    opacity: 1
    margin-left: 0px
    display: inline-block

@-moz-keyframes fadein
  from
    opacity: 0
    margin-left: 50px
    display: none
  to
    opacity: 1
    margin-left: 0px
    display: inline-block

@keyframes fadein
  from
    opacity: 0
    margin-left: 50px
    display: none
  to
    opacity: 1
    margin-left: 0px
    display: inline-block


.hero__h2
  overflow: hidden
  text-transform: none
  letter-spacing: 0
  color: inherit
  line-height: 1.5
  font-size: 22px
  font-weight: 500
  margin-bottom: 50px
  color: #888

.hero__cta
  padding: 15px 50px
  color: #fff
  background: #0063c6
  box-shadow: 0px 1px 5px rgba(0,0,0,0.4), inset 0px 1px 3px rgba(255,255,255,0.2)
  background-size: 200% auto
  background-image: linear-gradient(to right, #0064CC 0%, #0057B2 51%, #00254C 100%)
  transition: 0.5s
  border-radius: 30px
  cursor: pointer
  display: inline-block
  font-size: 20px
  border: 1px solid rgba(0,0,0,0.1)
  text-align: center
  width: 100%
  max-width: 300px
  &.animated
    -webkit-animation: pulsate 5s linear
    -moz-animation: pulsate 5s linear
    animation: pulsate 5s linear
    -webkit-animation-delay: 3s
    animation-delay: 3s
  &:hover
    color: #fff
    background-position: right center


@-webkit-keyframes pulsate
  0%
    transform: scale(1)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)

@-moz-keyframes pulsate
  0%
    transform: scale(1)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)

@keyframes pulsate
  0%
    transform: scale(1)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)


.form-container
  margin: 0 auto
  padding: 25px
  border-radius: 15px
  background: rgba(0,0,0,0.3)
  display: inline-block
  margin-bottom: 30px
  width: 550px
  max-width: 100%
  border: 1px solid rgba(0,0,0,0.2)
  box-shadow: 0px 1px 1px rgba(0,0,0,0.2)
  &__text
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
    &.full
      width: 400px
      max-width: 100%
      margin-bottom: 15px
      margin-right: 0px

  &.notice
    border: 2px solid #E4FA4D
  h3
    color: #fff
    font-size: 18px
    font-weight: 500
  a.follow-up-button
    width: 400px
    max-width: 100%
    padding: 15px
    display: inline-block
    margin: 0 auto 15px auto
    background: #fff
    cursor: pointer
    color: #fff
    border-radius: 3px
    text-decoration: none
    border: 1px solid rgba(0,0,0,0.2)
    box-shadow: inset 0px 1px 1px rgba(255,255,255,0.1), 0px 1px 1px rgba(0,0,0,0.2)
    &.final
      background: #E4FA4D
      color: #111
      font-weight: 600
    &.next
      background: #59AE7D
      box-shadow: inset 0px 1px 1px rgba(255,255,255,0.1)
  p.errors
    margin: 20px 0px 0px 0px



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
  opacity: 0.85
  background: linear-gradient(to bottom, #002346 0%, #0063c6 100%)
  opacity: 0.5
  background: #fff
  z-index: 5

.hero__bg
  z-index: 1
  background-size: cover
  background-position: center
  overflow: hidden
  -webkit-filter: blur(1px)
  filter: blur(0px)
  background-image: none
  position: absolute
  background: url(https://tokenpockets.com/images/bg2.c37d81d0.png) top right no-repeat
  top: 0px
  bottom: 0px
  left: 0px
  right: 0px

@media(max-width: 900px)
  .hero__content__inner__text
    width: 100%
    text-align: center
    padding: 10px
  .hero__content__inner__image
    display: none
  .hero__bg__mask
    opacity: 0.6
  .hero__content
    text-align: center
  .hero__h1
    font-size: 30px
  .hero__h2
    font-size: 18px
  .form-container
    &__text
      margin: 0px 0px 20px 0px
      width: 100%
    &__submit
      width: 100%
  .hero__continue
    position: absolute

</style>

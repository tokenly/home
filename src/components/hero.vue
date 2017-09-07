<template lang="pug">
.hero
  .hero__content__container.container
    .hero__content(ref="content")
      .row
        h1.hero__h1 Launch Your Own Digital Token
        h2.hero__h2 Tokenly is the world's easiest way to create, sell, and manage token-based consumer products without writing a single line of code.
      .form-container(
        v-bind:class="{ notice: emailSubmitted }"
      )
        form
          div(v-if="!emailSubmitted")
            input.form-container__text(
              placeholder="Enter your email address"
              type="text"
              v-model="contact.email"
            )
            input.form-container__submit(
              type="submit"
              value="Get Started"
              @click.prevent="submitForm"
            )
          div(v-else-if="!interestSubmitted")
            h3 I'm interest in:
            a.follow-up-button(
              @click="addInterest('merch')"
              v-bind:style="{ background: getColorVal(1) }"
            ) Tokenly for Selling Merchandise
            a.follow-up-button(
              @click="addInterest('fashion')"
              v-bind:style="{ background: getColorVal(2) }"
            ) Tokenly for my Fashion project
            a.follow-up-button(
              @click="addInterest('music')"
              v-bind:style="{ background: getColorVal(3) }"
            ) Tokenly for Music
            a.follow-up-button(
              @click="addInterest('vinyl')"
              v-bind:style="{ background: getColorVal(4) }"
            ) Tokenly for limited edition vinyls
            a.follow-up-button(
              @click="addInterest('chats')"
              v-bind:style="{ background: getColorVal(5) }"
            ) Tokenly for Chats
            a.follow-up-button(
              @click="addInterest('other')"
              v-bind:style="{ background: getColorVal(6) }"
            ) I'm interested in something else
          div(v-else-if="!additionalInfoSubmitted")
            h3 We want to get in touch with you.  Please provide some additional information so that we can ...
            input.form-container__text.full(
              placeholder="Your Name"
              type="text"
              v-model="contact.name"
            )
            input.form-container__text.full(
              placeholder="Company Name"
              type="text"
              v-model="contact.companyName"
            )
            input.form-container__text.full(
              placeholder="Brand/Company"
              type="text"
              v-model="contact.brandCompany"
            )
            a.follow-up-button.final(
              @click="addAdditionalInfo"
            ) Contact Me
          div(v-if="additionalInfoSubmitted")
            p Thanks for getting in touch with us! We will contact you soon.
            a.follow-up-button.final Join our Rocket Chat
            a.follow-up-button.final Tweet about Us
            a.follow-up-button.final Learn More About Tokenly

      div.more-information
        a New to Tokens?
  .hero__bg__mask
  .hero__bg(ref="bg")
</template>

<script>
export default {
  data () {
    return {
      emailSubmitted: false,
      interestSubmitted: false,
      additionalInfoSubmitted: false,
      contact: {
        email: '',
        interest: '',
        name: '',
        companyName: '',
        brandCompany: ''

      },

      colors: [
        { color: 'red', hex: '#f44336' },
        { color: 'pink', hex: '#e91e63' },
        { color: 'purple', hex: '#9c27b0' },
        { color: 'deep-purple', hex: '#673ab7' },
        { color: 'indigo', hex: '#3f51b5' },
        { color: 'blue', hex: '#2196f3' },
        { color: 'light-blue', hex: '#03a9f4' },
      ],
    }
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
  },

  methods: {
    submitForm: function () {
      this.emailSubmitted = true

      this.sendJSONToSheet()

      //submit email to backend
    },

    addInterest: function (interest) {
      this.interestSubmitted = true
      this.contact.interest = interest
      //submit interest to backend
    },

    addAdditionalInfo: function () {
      this.additionalInfoSubmitted = true
      //submit additional information to backend
    },

    getColorVal (n) {
      let index = n
      if (n > this.colors.length - 1) {
        index = n % this.colors.length
      }
      let hex = this.colors[index].hex
      return hex
    },

    sendJSONToSheet () {

      alert("json send initiated")

      alert(this.contactJSON)
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzxPW1g-E33514VVOyuz6DwZfa71cYs3EnIeYYYX6L2hzk3liyL/exec",
        type: "POST",
        dataType: "JSON",
        data: this.contactJSON
      })

    }

  },

  computed: {
    //compute some form labels

    contactJSON () {
      return JSON.stringify(this.contact)
    }
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
  padding-top: $hero-spacing + 70
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
  margin: 0px 0px 30px 0px
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
  font-size: 22px
  font-weight: 500
  margin-bottom: 50px

.form-container
  margin: 0 auto
  padding: 25px
  border-radius: 15px
  background: rgba(0,0,0,0.3)
  display: inline-block
  margin-bottom: 30px
  max-width: 550px
  border: 1px solid rgba(0,0,0,0.2)
  box-shadow: 0px 1px 1px rgba(0,0,0,0.2)
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
    &.full
      width: 400px
      max-width: 100%
      margin-bottom: 15px
      margin-right: 0px
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
    &.final
      background: #E4FA4D
      color: #111
      font-weight: 600



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
  background: url(../assets/dark_sharp_edges.png)


</style>

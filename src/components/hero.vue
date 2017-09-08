<template lang="pug">
.hero
  .hero__content__container.container
    .hero__content(ref="content")
      .row
        h1.hero__h1 Launch Your Own Product Token
        h2.hero__h2 Tokenly is the world's easiest way to create, sell, and manage token-based consumer products without writing a single line of code.
      .form-container(
        v-bind:class="{ notice: emailSubmitted }"
      )
        form
          div(v-if="!emailSubmitted")
            input.form-container__text(
              placeholder="Enter your email address"
              type="text"
              name="email"
              v-model="contact.email"
              v-validate="'required|email'"
            )
            input.form-container__submit(
              type="submit"
              value="Get Started"
              @click.prevent="submitForm"
            )
            p.errors(
              v-if="this.emailSubmissionError && !this.validEmail"
            ) {{ this.errors.first('email') }}
          div(v-else-if="!interestSubmitted")
            h3 I'm interest in:
            div(v-for="item in this.interests")
              a.follow-up-button(
                @click="addInterest(item.name)",
                v-bind:style="{ background: item.backgroundColor}"
              ) {{ item.name }}

          div(v-else-if="!additionalInfoSubmitted")
            h3 We want to get in touch with you.  Please provide some additional information so that we can best serve you.
            input.form-container__text.full(
              placeholder="Your Name"
              type="text"
              v-model="contact.name"
            )
            input.form-container__text.full(
              placeholder="Brand/Company"
              type="text"
              v-model="contact.brandCompany"
            )
            textarea.form-container__text.full(
              placeholder="Tell Us About Your Project"
              type="text"
              v-model="contact.aboutProject"
            )
            div
              a.follow-up-button.final(
                v-on:click.stop="addAdditionalInfo"
              ) Contact Me
          div(v-if="additionalInfoSubmitted")
            p Thanks for getting in touch with us! We will contact you soon.
            a.follow-up-button.next(
              href="#content"
            ) Learn More About Tokenly
            a.follow-up-button.next(
              href="https://chat.tokenly.com"
              target="_blank"
            ) Join our Rocket Chat
            a.follow-up-button.next(
               href="https://twitter.com/intent/tweet?text=I'm%20talking%20to%20@tokenly%20about%20my%20secret%20project."
               target="_blank"
            ) Tweet about Us


      div.more-information
        a(
          href="#content"
        ) New to Tokens?
  .hero__bg__mask
  .hero__bg(ref="bg")
</template>

<script>
export default {
  data () {
    return {
      emailSubmitted: false,
      emailSubmissionError: false,
      interestSubmitted: false,
      additionalInfoSubmitted: false,
      contact: {
        email: '',
        interest: '',
        name: '',
        companyName: '',
        brandCompany: '',
        aboutProject: ''

      },

      interests: [
        {
          name: 'Tokenly for Selling Merchandise',
          backgroundColor: '#f44336'
        },
        {
          name: 'Tokenly for Fashion Projects',
          backgroundColor: '#e91e63'
        },
        {
          name: 'Tokenly for Brands',
          backgroundColor: '#9c27b0'
        },
        {
          name: 'Tokenly for Music',
          backgroundColor: '#673ab7'
        },
        {
          name: 'Tokenly for Limited Edition Vinyls',
          backgroundColor: '#3f51b5'
        },
        {
          name: 'Tokenly for Chats',
          backgroundColor: '#2196f3'
        },
        {
          name: 'I am interest in something else',
          backgroundColor: '#03a9f4'
        },
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

      if (this.validEmail) {
        this.emailSubmitted = true
        this.sendDataToSheet()
      } else {
          this.emailSubmissionError = true
      }
    },

    addInterest: function (interest) {
      this.interestSubmitted = true
      this.contact.interest = interest
      this.sendDataToSheet()
    },

    addAdditionalInfo: function () {
      this.additionalInfoSubmitted = true
      this.sendDataToSheet()
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

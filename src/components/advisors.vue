<template lang="pug">
section.team
  div.team__container
    div.team__container__content
      header
        span Our Advisors
      p
        span Tokenly is ... with some of the most .... in technology, finance, and ....
      div.team-member-content
        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/adam.jpg'
              )
            div.team-member__content
              p.name
                span Adam Levine
              p.title
                span Founder, CEO
              p.summary
                span Founder of the "Lets Talk Bitcoin" network (LTBN), veteran project advisor in blockchain and token technology.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/devon.jpg'
              )
            div.team-member__content
              p.name
                span Devon Weller
              p.title
                span Founder, CTO
              p.summary
                span 18-year vetern internet software application developer for companies such as Price Waterhouse Coopers and Booz Allen Hamilton. Counterparty protocol developer.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/martin.jpg'
              )
            div.team-member__content
              p.name
                span Martin Rerak
              p.title
                span CSO
              p.summary
                span Experienced finance and strategic planning professional. Early blockchain evangelist.

</template>

<script>

export default {
  components: {},
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

.team
  background: #fff
  position: relative
  &__container
    padding: 80px 30px
    &__content
      max-width: 1000px
      margin: 0 auto
      header
        margin: 0px
        text-align: left
        margin-bottom: 50px
        font-size: 36px
        line-height: 60px
        font-weight: 500
        color: #00254C
        position: relative
      header:before
        content: ''
        background-color: #29B6F6
        opacity: 0.7
        height: 2px
        width: 70px
        border-radius: 1px
        position: absolute
        top: 70px
        left: 0
      p
        text-align: left
        color: #666
        font-size: 20px
        margin-bottom: 30px

.team-member-content
  text-align: left

.team-member-content__entry
  display: inline-block
  width: 33.3%
  margin-bottom: 10px
  vertical-align: top

@media(max-width: 900px)
  body
    .team__container
      padding: 40px 20px
    .team__container__content
      header
        font-size: 24px
      p
        font-size: 16px
    .team-member-content__entry
      width: 50.0%

@media(max-width: 600px)
  body
    .team-member-content__entry
      width: 100.0%

.team-member
  padding: 10px
  text-align: left
  &__image, &__content
    padding: 5px
    vertical-align: middle
  &__content
    padding: 10px
    vertical-align: middle
    p
      line-height: 1
    p.name
      font-size: 18px
      color: #333
      font-weight: 600
      margin-bottom: 5px
    p.title
      color: #999
      margin-bottom: 25px
      font-size: 16px
    p.summary
      color: #888
      line-height: 1.5
      margin-bottom: 0px
      font-size: 16px

.team-member__image
  img
    border-radius: 50%
    max-width: 100%
    height: 100%
    background-size: cover
    background-repeat: no-repeat
    background-position: 50% 50%
    width: 80px
    height: 80px
    display: inline-block

@media(max-width: 900px)
  body
    .product__row
      &__image
        display: none
      &__content
        width: 100%
    .team-member
      padding: 0px
    .team-member__content
      p.summary
        font-size: 16px
</style>

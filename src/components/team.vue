<template lang="pug">
section.team
  div.team__container
    div.team__container__content
      header
        span Our Team
      p
        span Our 9 person team includes blockchain and finance experts together with veteran software engineers.
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

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/steven.jpg'
              )
            div.team-member__content
              p.name
                span Steven Levine
              p.title
                span Founder, CFO
              p.summary
                span Founder of the "Lets Talk Bitcoin" network (LTBN). Experienced innovator and entrepreneur. Grew prior startup to $12.9MM annual revenue.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/nick.jpg'
              )
            div.team-member__content
              p.name
                span Nick Rathman
              p.title
                span Founder, Senior Developer
              p.summary
                span Experienced backend developer with expertise in blockchain and Counterparty protocol.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/tatiana.jpg'
              )
            div.team-member__content
              p.name
                span Tatiana Moroz
              p.title
                span Ambassador
              p.summary
                span Singer, Songwriter. Pioneer and advocate for the transformative power of blockchain technology for the music industy. The first musical artist ever to issue a blockchain token, TATIANACOIN.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/shane.png'
              )
            div.team-member__content
              p.name
                span Shane Randolph
              p.title
                span Front-end Developer, UI
              p.summary
                span Experienced frontend developer and entrepreneur. Former economist.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/michael.png'
              )
            div.team-member__content
              p.name
                span Michael Jonsson
              p.title
                span Marketing, Design
              p.summary
                span Experienced content marketer, graphic designer, photographer, and video producer.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img(
                src = '../assets/team/ruben.png'
              )
            div.team-member__content
              p.name
                span Ruben Meseguer
              p.title
                span Front- & Back-end Developer
              p.summary
                span Backend developer and open source software contributor.

</template>

<script>

export default {
  components: {},
  data () {
    return {
      teamData: [
        {
          name: 'Adam Levine',
          elID: 'adam-levine',
          title: 'Founder, CEO',
          summary: 'Founder of the "Lets Talk Bitcoin" network (LTBN), veteran project advisor in blockchain and token technology.'
        },
        {
          name: 'Devon Weller',
          elID: 'devon-weller',
          title: 'Founder, CTO',
          summary: '18-year vetern internet software application developer for companies such as Price Waterhouse Coopers and Booz Allen Hamilton. Counterparty protocol developer.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/devon-2013-nov-600-500x500.jpg'
        },
        {
          name: 'Martin Rerak',
          elID: 'martin-rerak',
          title: "CSO",
          summary: 'Experienced finance and strategic planning professional. Early blockchain evangelist.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/martin-rerak-500x500.jpg'
        },
        {
          name: 'Steven Levine',
          elID: 'steven-levine',
          title: 'Founder, CFO',
          summary: 'Founder of the "Lets Talk Bitcoin" network (LTBN). Experienced innovator and entrepreneur. Grew prior startup to $12.9MM annual revenue.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/steve-levine-e1494026781173-500x500.jpg'
        },
        {
          name: 'Nick Rathman',
          elID: 'nick-rathman',
          title: 'Founder, Senior Developer',
          summary: 'Experienced backend developer with expertise in blockchain and Counterparty protocol.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/2-e1493910666963-500x500.jpg'
        },
        {
          name: 'Tatiana Moroz',
          elID: 'tatiana-moroz',
          title: 'Ambassador',
          summary: '',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/2-e1493910666963-500x500.jpg'
        },
        {
          name: 'Shane Randolph',
          elID: 'shane-randolph',
          title: 'Front-end Developer, UI',
          summary: '',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/2-e1493910666963-500x500.jpg'
        },
        {
          name: 'Michael Jonsson',
          elID: 'michael-jonsson',
          title: 'Marketing & Design',
          summary: '',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/2-e1493910666963-500x500.jpg'
        },
        {
          name: 'Ruben Meseguer',
          elID: 'ruben-meseguer',
          title: 'Front/Back-end Developer',
          summary: '.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/2-e1493910666963-500x500.jpg'
        }
      ]
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
  border-bottom: 2px rgba(0,0,0,0.2) solid
  &__container
    padding: 80px 30px
    &__content
      max-width: 1000px
      margin: 0 auto
      header
        margin: 0px
        text-align: left
        margin-bottom: 50px
        font-size: 30px
        line-height: 60px
        font-weight: 500
        color: #444
        position: relative
      header:before
        content: ''
        background-color: #1565C0
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

@media(max-width: 767px)
  body
    .product__row
      &__image
        display: none
      &__content
        width: 100%
    .team-member__content
      p.summary
        font-size: 16px
</style>

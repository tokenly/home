<template lang="pug">
section.team
  div.team__container
    div.team__container__content
      header
        span Our Team
      p
        span Our 9 person team includes blockchain and finance experts together with veteran software engineers. Here are five key team members:
      div.team-member-content
        div.team-member-content__entry(v-for="(teamMember, index) in this.teamData")
          TeamMember(
            :elID = "teamMember.elID"
            :name = "teamMember.name"
            :title = "teamMember.title"
            :summary = "teamMember.summary"
            :imgURL = "teamMember.imgURL"
          )

</template>

<script>

import TeamMember from './team-member.vue'

export default {
  components: {TeamMember},
  data () {
    return {
      teamData: [
        {
          name: 'Adam Levine',
          elID: 'adam-levine',
          title: 'Founder, CEO',
          summary: 'Founder of the "Lets Talk Bitcoin" network (LTBN), veteran project advisor in blockchain and token technology.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/100kbbio-e1493910044698-500x500.jpg'
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
          summary: 'Founder of the "Lets Talk Bitcoin" network (LTBN),. Experienced innovator and entrepreneur. Grew prior startup to $12.9MM annual revenue.',
          imgURL: 'https://tekk.tokenly.com/wp-content/uploads/2017/02/steve-levine-e1494026781173-500x500.jpg'
        },
        {
          name: 'Nick Rathman',
          elID: 'nick-rathman',
          title: 'Founder, Senior Developer',
          summary: 'Experienced backend developer with expertise in blockchain and Counterparty protocol.',
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
  &__container
    padding: 80px 30px
    &__content
      max-width: 800px
      margin: 0 auto
      header
        margin: 0px
        text-align: left
        margin-bottom: 20px
        font-size: 40px
        font-weight: 700
      p
        text-align: left
        color: #888
        font-size: 20px
        max-width: 600px
        margin-bottom: 30px

.team-member-content
  text-align: left
.team-member-content__entry
  display: inline-block
  width: 50.0%
  vertical-align: top
</style>

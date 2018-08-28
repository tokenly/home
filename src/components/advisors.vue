<template lang="pug">
section.team
  div.team__container
    div.team__container__content
      header
        span Our Advisors
      div.team-member-content
        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img.portrait(
                src = '../assets/team/george-howard.jpg'
              )
              a(
                href="https://www.linkedin.com/in/georgeahoward"
                target="__blank"
              )
                img.linkedin(
                  src = '../assets/images/linkedin.png'
                )
            div.team-member__content
              p.name
                span George Howard
              p.title
                span Advisor,  Media Guru
              p.summary
                span Associate Professor of Music Business/Management at Berklee College of Music and Brown University; co-founder of Music Audience Exchange. Via his strategic consulting and management firm, George has worked with companies and individuals such as CVS/pharmacy, Intel, National Public Radio (NPR), Brown University, Carly Simon, Mark Isham, and Ashley Longshore.

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img.portrait(
                src = '../assets/team/jonathon-mohan.jpg'
              )
              a(
                href="https://www.linkedin.com/in/jonathanmohan/"
                target="__blank"
              )
                img.linkedin(
                  src = '../assets/images/linkedin.png'
                )
            div.team-member__content
              p.name
                span Jonathan Mohan
              p.title
                span Advisor, Blockchain Expert
              p.summary
                span Founding contributor to the Ethereum protocol; pioneer in the applicability of blockchain technology for municipal uses; founder of BitcoinNYC, New York City's largest bitcoin professional network.
        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img.portrait(
                src = '../assets/team/david-drake.jpg'
              )
              a(
                href="https://www.linkedin.com/in/ldjcapital/"
                target="__blank"
              )
                img.linkedin(
                  src = '../assets/images/linkedin.png'
                )
            div.team-member__content
              p.name
                span David Drake
              p.title
                span Advisor, Business Development
              p.summary
                span Early-stage equity expert and the founder and chairman of LDJ Capital, a New York City-based family office, and The Soho Loft Media Group.  Mr. Drake has been involved in technology, media and telecom (TMT) and impact investments for more than 20 years.

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

</style>

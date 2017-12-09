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
              img.portrait(
                src = '../assets/team/adam.jpg'
              )
              a(
                href="http://google.com"
                target="__blank"
              )
                img.linkedin(
                  src = '../assets/images/linkedin.png'
                )
            div.team-member__content
              p.name
                span Advisor 1
              p.title
                span Title 1
              p.summary
                span Advisor short bio 1

        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img.portrait(
                src = '../assets/team/adam.jpg'
              )
              a(
                href="http://google.com"
                target="__blank"
              )
                img.linkedin(
                  src = '../assets/images/linkedin.png'
                )
            div.team-member__content
              p.name
                span Advisor 2
              p.title
                span Title 2
              p.summary
                span Advisor short bio 2
        div.team-member-content__entry
          div.team-member
            div.team-member__image
              img.portrait(
                src = '../assets/team/adam.jpg'
              )
              a(
                href="http://google.com"
                target="__blank"
              )
                img.linkedin(
                  src = '../assets/images/linkedin.png'
                )
            div.team-member__content
              p.name
                span Advisor 3
              p.title
                span Title 3
              p.summary
                span Advisor short bio 3

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

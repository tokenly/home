<template lang="pug">
section.team
  div.team__container
    div.team__container__content
      header
        span Our Team
      p
        span Our 9 person team includes blockchain and finance experts together with veteran software engineers. Here are our four founders:

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
        color: #666
        max-width: 600px

</style>

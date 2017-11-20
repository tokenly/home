<template lang="pug">
section.team
  div.team__container
    div.team__container__content
      header
        span Our Team

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
    padding: 60px 30px;
    &__content
      max-width: 800px
      margin: 0 auto
      header
        margin: 0px

</style>

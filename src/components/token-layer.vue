<template lang="pug">
section.token-layer
  div.token-layer__container
    div.token-layer__container__content
      header
        span Token Layer
      p
        span The first sidechain protocol intended to ...
      p
        span dodmdom
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

.token-layer
  background: #333
  color: #fff
  position: relative
  &__container
    padding: 60px 30px
    &__content
      max-width: 800px
      margin: 0 auto
  header
    margin: 0px
    font-size: 32px
    font-weight: 700
    margin: 0px
    margin-bottom: 50px
    letter-spacing: 3px

</style>

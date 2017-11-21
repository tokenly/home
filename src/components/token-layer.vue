<template lang="pug">
section.token-layer
  div.token-layer__container
    div.token-layer__container__content
      header
        span Token Layer&trade;
      p.sub-header
        span Our flexible sidechain protocol built to support secure, high volume transactions with low fees.
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
  min-height: 100vh
  position: relative
  &__container
    padding: 60px 30px
    &__content
      max-width: 800px
      margin: 0 auto
  header
    margin: 0px
    font-size: 40px
    font-weight: 700
    margin: 0px
    margin-bottom: 20px
    letter-spacing: 3px
  p.sub-header
    font-size: 18px
    text-align: center
    opacity: 0.7
    margin-bottom: 40px

</style>

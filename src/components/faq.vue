<template lang="pug">
section.faq#faq
  .faq__container
    .faq__container__content
      header
        span Frequently Asked Questions

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

.faq
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

@media(max-width: 900px)
  body
    .faq__container
      padding: 40px 20px
    .faq__container__content
      header
        font-size: 24px
      p
        font-size: 16px
</style>

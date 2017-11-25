<template lang="pug">
section.more-details(
  ref="more-details"
  id="more-details"
)
  .more-details__container
    .more-details__container__content
      header Want More Details?
      p.sub-header Call to action
      div
        a.more-details__container__content__button
          span CTA Text
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

.more-details
  background: #fff
  position: relative
  &__container
    padding: 60px 20px
    &__content
      max-width: 800px
      margin: 0 auto
      text-align: center
      header
        font-size: 40px
        font-weight: 700
        margin-bottom: 40px
      p
        color: #666
        font-size: 20px
        margin-bottom: 40px
      a
        padding: 20px 50px
        background: #D50000
        display: inline-block
        color: #fff
        width: 100%
        max-width: 300px
        border-radius: 3px
        border: 1px solid rgba(0,0,0,0.2)

@media(max-width: 787px)
  body
    .more-details__container__content
      header
        font-size: 24px
        margin-bottom: 20px
      p
        font-size: 16px
</style>

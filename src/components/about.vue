<template lang="pug">
section.about
  div.about__container
    div.about__container__content
      header
        span About &nbsp;
        span.name Tokenly
      p Tokenly develops applications that make . Our integrate suite of applications comprises a full solution ...
      p Tokenly provides users, developers, and startups with innovative blockchain technologies. We aim to create an entire ecosystem of linked chains and a virtual spiderweb of endless use-cases that make ARK highly flexible, adaptable, and scalable. ARK is a secure platform designed for mass adoption and will deliver the services that consumers want and developers need.
      div.about__container__content__continue(style="display: none;")
        a
          span Our Applications
          br
          span
            i.material-icons keyboard_arrow_down

</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    let self = this
    window.addEventListener('scroll', e => {
      _.debounce(() => {
        console.log('derl')
        let scroll = document.body.scrollTop
        self.$refs.bg.style.top = `${scroll / 4}px`
      })
    })
  },

  methods: {

  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.about
  background: #001933
  color: #fff
  border-top: 1px solid rgba(0,0,0,0.3)
  box-shadow: 0px -1px 3px rgba(100,100,100,0.2)
  min-height: calc(100vh - 70px)
  display: table
  width: 100%
  &__container
    padding: 60px 30px
    display: table-cell
    vertical-align: middle
    &__content
      max-width: 600px
      margin: 0 auto
      header
        margin: 0px
        margin-bottom: 50px
        letter-spacing: 3px
        span.name
          font-weight: 700
      p
        line-height: 2
        text-align: justify
        font-size: 18px
        margin-bottom: 24px
      &__continue
        padding: 30px
        text-align: center
        a
          display: inline-block
          padding: 15px 50px
          border-radius: 50px
          background: #fff
          color: #111
          font-weight: 700
          font-size: 20px
</style>

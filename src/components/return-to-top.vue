<template lang="pug">
span.return-to-top(@click="scrollToTop")
    i.material-icons keyboard_arrow_up
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    let self = this
  },

  methods: {
    scrollToTop: function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    }
  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

.return-to-top
  position: fixed
  bottom: 20px
  right: 20px
  padding: 10px
  background: #fff
  cursor: pointer
  z-index: 999
  font-size: 30px
  background: red
  color: #fff
  text-align: center
  width: 50px
  height: 50px
</style>

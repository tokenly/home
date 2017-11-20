<template lang="pug">
.nav(v-bind:class="{ active: scrollPositioned }")
  .nav__content
    .nav__heading
      a(href="/")
        img.nav__logo(
          src="../assets/logo/Tokenly_Icon_White.svg"
          width="35px"
        )
      a.title Tokenly

    ul.nav__menu
      template(v-for="item in menuItems")
        li: a(v-bind:href="item.url" target="_blank" v-bind:class="{ alert: item.alert }")
          span {{ item.name }}
</template>

<script>
export default {
  data () {
    return {
      scrollPositioned: false,
      menuItems: [
        {
          name: 'Whitepaper',
          url: 'https://tokenpockets.com/'
        },
        {
          name: 'Applications',
          url: 'http://slack.tokenly.com'
        },
        {
          name: 'Dashboard',
          url: 'https://tokenpass.tokenly.com/auth/login'
        }
      ]
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      if(this.scrollPositioned == false && window.pageYOffset > 0) {
        this.scrollPositioned = true;
      } else if(this.scrollPositioned == true && window.pageYOffset < 40) {
        this.scrollPositioned = false;
      }
    }
  }
}

</script>

<style lang="sass?indentedSyntax=true" scoped>
.nav
  position: fixed
  left: 20px
  right: 20px
  top: 20px
  z-index: 999
  height: 70px
  font-size: 1em
  overflow: hidden
  transition: 1s
  border-bottom: 1px solid rgba(255,255,255,0.1)
  &.active
    background: #111
    left: 0px
    right: 0px
    top: 0px

.nav__content
  background-color: transparent
  color: #fff
  overflow: hidden
  padding: 0px 10px

.nav__heading
  line-height: 70px
  float: left
  font-weight: bold
  .title
    padding: 15px
    color: #fff
    font-size: 20px

.nav__logo
  display: inline-block
  margin-top: -4px
  vertical-align: middle


.nav__menu
  line-height: 70px
  font-weight: 600px
  list-style-type: none
  float: right
  margin: 0
  li
    float: left
    margin: 0
    &:not(:last-child)
      margin-right: 1.5em
    a
      color: #fff
      text-decoration: none
      &:hover
        color: #fff

</style>

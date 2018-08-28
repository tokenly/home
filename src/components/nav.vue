<template lang="pug">
.nav(v-bind:class="{ active: scrollPositioned }")
  .nav__content
    .nav__heading
      a(href="/")
        img.nav__logo(
          src="../assets/logo/tokenly-icon-horiz.png"
          height="40px"
        )
    ul.nav__menu
      template(v-for="item in menuItems")
        li.full: a(v-bind:href="item.url" target="_blank" v-bind:class="{ alert: item.alert }")
          span {{ item.name }}
      li.full: a(v-scroll-to="'#about'")
        span About
      li.full: a(v-scroll-to="'#faq'")
        span FAQ
      li.menu-button: a(@click="this.toggleMenu")
        span
  .nav__overlay-menu(
    v-bind:class="{ active: this.activeMenu }"
    @click="toggleMenu"
  )
  .nav__overlay-menu__content(
    @click.stop=""
    v-bind:class="{ active: this.activeMenu }"
  )
    ul
      li: a.header(

      )
        span Tokenly
      li: a(
        @click="toggleMenu"
        v-scroll-to="'#about'"
      )
        span About
      li: a(
        v-scroll-to="'#faq'"
        @click="toggleMenu"
      )
        span FAQ
      li: a(
        v-scroll-to="'#products'"
        @click="toggleMenu"
      )
        span Our Products
      li: a(
        v-scroll-to="'#token-layer'"
        @click="toggleMenu"
      )
        span Our Protocol
      li(
        v-for="item in menuItems")
        a(@click="toggleMenu")
          span {{ item.name }}
</template>

<script>

export default {
  components: {},
  data () {
    return {
      scrollPositioned: false,
      activeMenu: false,
      menuItems: [
        {
          name: 'Try Our Live Product',
          url: 'https://TokenMarkets.com'
        },
        //{
        //  name: 'Register',
        //  url: '#'
        //},
        //{
        //  name: 'Whitepaper',
        //  url: '#'
        //}
      ]
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      if(this.scrollPositioned == false && window.pageYOffset > 70) {
        this.scrollPositioned = true;
      } else if(this.scrollPositioned == true && window.pageYOffset < 70) {
        this.scrollPositioned = false;
      }
    },
    toggleMenu: function () {
      this.activeMenu = !(this.activeMenu)
    }
  },
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
  border: 1px solid rgba(205,205,205,0.4)
  background: rgba(255,255,255,0.95)
  &.active
    background: #fff
    left: 0px
    right: 0px
    top: 0px
    border-bottom: 1px solid rgba(5,5,5,0.2)
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2)
    border-radius: 2px
    .title
      display: none
    .nav__logo.active
      display: inline-block
    .nav__logo.inactive
      display: none

.nav__content
  background-color: transparent
  overflow: hidden

.nav__heading
  line-height: 70px
  padding: 0px 20px
  float: left
  font-weight: bold

.nav__logo
  display: inline-block
  margin-top: -4px
  vertical-align: middle
  &.active
    display: none

.nav__menu
  line-height: 70px
  font-weight: 600px
  list-style-type: none
  float: right
  margin: 0
  li
    float: left
    margin: 0
    a
      color: #666
      text-decoration: none
      cursor: pointer
      line-height: 40px
      padding: 15px 20px
      transition: 0.5s
      text-transform: uppercase
      letter-spacing: 0.5px
      display: inline-block
      &:hover
        color: #111
        background: rgba(235,235,235,0.5)
  li.menu-button
    display: none
    a
      padding: 27px
      line-height: 16px
      span
        font-weight: 800
        font-size: 20px
        position: relative
        display: inline-block
        width: 24px
        height: 16px
        border-top: 2px solid #666
        border-bottom: 2px solid #666
        cursor: pointer
        &:before
          content: ""
          position: absolute
          top: 5px
          left: 0px
          width: 100%
          border-top: 2px solid #666

.nav__overlay-menu
  display: none
  transition: 0.5s
  position: fixed
  top: 0px
  left: 0px
  right: -1px
  bottom: 0px
  background: rgba(0,0,0,0.3)
  &.active
    display: block
.nav__overlay-menu__content
  -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,.2)
  box-shadow: 0 8px 17px 0 rgba(0,0,0,.2)
  position: fixed
  background: #00254C
  right: -300px
  width: 300px
  max-width: 90%
  top: 0px
  bottom: 0px
  border-left: 1px solid rgba(0,0,0,0.1)
  transition: 0.5s
  &.active
    right: -1px
  ul
    list-style: none
    li
      margin: 0px
      a
        padding: 20px 40px
        display: block
        line-height: 20px
        color: #fff
        &:hover
          cursor: pointer
          background: rgba(250,250,250,0.1)
          color: #eee
        &.header
          background: rgba(0,0,0,0.5)
          font-weight: 700
          font-size: 24px
          letter-spacing: 1px
          box-shadow: 0px 1px 2px rgba(0,0,0,0.3)



@media(max-width: 900px)
  body
    .nav__menu
      li.full
        display: none
      li.menu-button
        display: inline-block
</style>

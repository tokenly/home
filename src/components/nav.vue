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
      li.menu-button: a
        span
</template>

<script>
export default {
  data () {
    return {
      scrollPositioned: false,
      menuItems: [
        {
          name: 'Register',
          url: '#'
        },
        {
          name: 'Whitepaper',
          url: '#'
        },
        {
          name: 'Deck',
          url: '#'
        },
        {
          name: 'FAQ',
          url: '#'
        }
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
  border: 1px solid rgba(205,205,205,0.4)
  background: rgba(255,255,255,0.8)
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
    a
      color: #666
      border-radius: 0px
      line-height: 40px
      &:hover
        color: #111
        background: #f9f9f9
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
      padding: 10px 20px
      line-height: 20px
      transition: 0.5s
      border-radius: 30px
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

@media(max-width: 900px)
  body
    .nav__menu
      li.full
        display: none
      li.menu-button
        display: inline-block
</style>

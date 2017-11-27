<template lang="pug">
.nav(v-bind:class="{ active: scrollPositioned }")
  .nav__content
    .nav__heading
      a(href="/")
        img.nav__logo.inactive(
          src="../assets/logo/Tokenly_Icon_White.svg"
          width="35px"
        )
        img.nav__logo.active(
          src="../assets/logo/Tokenly_Icon.svg"
          width="35px"
        )
      a.title Tokenly

    ul.nav__menu
      template(v-for="item in menuItems")
        li: a(v-bind:href="item.url" target="_blank" v-bind:class="{ alert: item.alert }")
          span {{ item.name }}
        li: a(v-scroll-to="'#about'")
          span About
</template>

<script>
export default {
  data () {
    return {
      scrollPositioned: false,
      menuItems: [
        {
          name: 'Pre-ICO Form & KYC/AML',
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
  border-bottom: 1px solid rgba(255,255,255,0.1)
  &.active
    background: #fff
    left: 10px
    right: 10px
    top: 10px
    border-bottom: 1px solid rgba(5,5,5,0.2)
    box-shadow: 0px 1px 3px rgba(0,0,0,0.3)
    a
      color: #111
      font-weight: 700
      &:hover
        color: #111
    .nav__logo.active
      display: inline-block
    .nav__logo.inactive
      display: none

.nav__content
  background-color: transparent
  color: #fff
  overflow: hidden
  padding: 0px 10px

.nav__heading
  line-height: 68px
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
    &:not(:last-child)
      margin-right: 1.5em
    a
      color: #fff
      text-decoration: none
      cursor: pointer
      &:hover
        color: #fff

</style>

<template lang="pug">
.nav
  .nav__content
    .container
      .nav__heading
        a(href="/"): img.nav__logo(src="../assets/logo/Tokenly_Icon.svg" width="35px")
      ul.nav__menu
        template(v-for="item in menuItems")
          li: a(v-bind:href="item.url" target="_blank")
            span {{ item.name }}
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          name: 'Pockets',
          url: 'https://tokenpockets.com/'
        },
        {
          name: 'Community',
          url: 'http://slack.tokenly.com'
        },
        {
          name: 'Dashboard',
          url: 'https://tokenpass.tokenly.com/auth/login'
        }
      ]
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
.nav
  position: relative
  z-index: 999
  height: 70px
  font-size: 1em
  overflow: hidden

.nav__content
  margin: 0 10px
  background-color: #fff
  overflow: hidden

.nav__heading
  line-height: 70px
  float: left
  font-weight: bold

.nav__logo
  display: inline-block
  margin-top: -4px
  vertical-align: middle

.nav__menu
  font-weight: bold
  line-height: 70px
  list-style-type: none
  float: right
  margin: 0
  li
    float: left
    margin: 0
    &:not(:last-child)
      margin-right: 1.5em
    a
      color: inherit
      text-decoration: none
      &:hover
        color: #4170a0
</style>

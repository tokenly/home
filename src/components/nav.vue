<template lang="pug">
.nav
  .nav__heading Tokenly
  ul.nav__menu
    template(v-for="item in menuItems")
      li: a(href="#") {{ item.name }}
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { name: 'Pockets' },
        { name: 'Community' },
        { name: 'Introduction' },
        { name: 'Dashboard' },
        { name: 'Blog' }
      ]
    }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
.nav
  z-index: 999
  position: fixed
  top: 0
  width: 100%
  height: 70px
  background-color: #fff
  font-size: 1em
  padding: 0 20px
  overflow: hidden

.nav__heading
  line-height: 70px
  float: left
  font-weight: bold

.nav__menu
  line-height: 70px
  list-style-type: none
  float: right
  li
    float: left
    margin: 0
    font-size: 1em
    &:not(:last-child)
      margin-right: 30px
    a
      color: inherit
      text-decoration: none
      &:hover
        color: cornflowerblue
</style>

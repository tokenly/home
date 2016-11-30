<template lang="pug">
footer
  .container
    .row
      .three.columns
        .footer__heading On The Web
        ul.footer__menu
          li: a(href="#") hellop
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
      .three.columns
        .footer__heading Products
        ul.footer__menu
          li: a(href="#") hellop
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
      .three.columns
        .footer__heading Social
        ul.footer__menu
          li: a(href="#") hellop
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
      .three.columns
        .footer__heading Company
        ul.footer__menu
          li: a(href="#") hellop
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
          li: a(href="#") oausjdoa
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
footer
  z-index: 100
  background-color: #1b1b1b
  font-size: 1rem
  padding: 60px 0
  color: #dadada

.footer__heading
  font-size: 1em
  margin-bottom: 15px

.footer__menu
  font-size: 0.8em
  list-style-type: none
  li
    margin: 0 0 4px 0
    a
      color: inherit
      text-decoration: none

</style>

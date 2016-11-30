<template lang="pug">
footer
  .container
    .row
      .three.columns
        .footer__heading On The Web
        ul.footer__menu
          li: a(href="#") Let's Talk Bitcoin
          li: a(href="#") TokenTalk
          li: a(href="#") Github
          li: a(href="#") Blog
      .three.columns
        .footer__heading Products
        ul.footer__menu
          li: a(href="#") Tokenpass
          li: a(href="#") Pockets
          li: a(href="#") Swapbot
          li: a(href="#") Market
          li: a(href="#") Tokenslot
          li: a(href="#") Bitsplit
      .three.columns
        .footer__heading Social
        ul.footer__menu
          li: a(href="#") Youtube
          li: a(href="#") LinkedIn
          li: a(href="#") Twitter
          li: a(href="#") Facebook
      .three.columns
        .footer__heading Company
        ul.footer__menu
          li: a(href="#") team@tokenly.com
          li: a(href="#") &#169; 2016 Tokenly Inc.
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
  font-size: 1em
  padding: 60px 0
  color: #a2a2a2

.footer__heading
  font-weight: bold
  margin-bottom: 1em
  color: #fff

.footer__menu
  list-style-type: none
  li
    margin: 0 0 4px 0
    a
      color: inherit
      text-decoration: none
      &:hover
        color: #fff

</style>

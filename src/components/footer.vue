<template lang="pug">
footer
  .footer__links
    .container
      .row
        .three.columns
          .footer__heading On The Web
          ul.footer__menu
            li: a(href="https://tokenly.com") Tokenly Inc.
            li: a(href="https://letstalkbitcoin.com" target="_blank") Let's Talk Bitcoin
            li: a(href="https://github.com/tokenly" target="_blank") Github
        .three.columns
          .footer__heading Social
          ul.footer__menu
            li: a(href="https://www.youtube.com/watch?v=VNyLrA8aZxs&amp;list=PLrou7z4TGqLNy8ZGoQ-GV4K1V5OSObaTS" target="_blank") Youtube
            li: a(href="https://www.linkedin.com/company/tokenly" target="_blank") LinkedIn
            li: a(href="https://twitter.com/tokenlyinc" target="_blank") Twitter
            li: a(href="https://www.facebook.com/tokenlyinc/" target="_blank") Facebook
        .three.columns
          .footer__heading Products
          ul.footer__menu
            li: a(href="https://tokenmarkets.com" target="_blank") Token Markets
            li: a(href="https://swapbot.tokenly.com" target="_blank") Swapbot
            li: a(href="https://bitsplit.tokenly.com" target="_blank") Bitsplit

        .three.columns
          .footer__heading.products__cont &nbsp;
          ul.footer__menu
            li: a(href="https://tokenpass.tokenly.com" target="_blank") Tokenpass
            li: a(href="https://tokenpockets.com" target="_blank") Token Pockets

  .footnote
    .container
      .row
        img.footnote__logo(src="../assets/logo/Tokenly_Icon_White.svg" width="30px")
        span.footnote__name Tokenly
        span(style="margin-right: 1.5em") //
        a.footnote__contact(href="mailto:team@tokenly.com") Contact Us
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
  font-size: 1em
  position: relative

.footer__links
  padding: 60px 0
  background-color: #222
  color: #fff

.footer__heading
  font-weight: bold
  margin-bottom: 1em

.footer__menu
  list-style-type: none
  li
    margin: 0 0 .5em 0
    a
      color: inherit
      text-decoration: none
      &:hover
        color: #4170a0

.footnote
  padding: 1.5em 0
  background-color: #111
  color: rgba(255,255,255,0.8)
  font-size: 1em
  font-weight: bold

.footnote__logo
  margin: -4px 1.5em 0 0
  display: inline-block
  vertical-align: middle

.footnote__name
  margin-right: 1.5em
  color: #e6e7e8

.footnote__contact
  color: inherit
  text-decoration: none
  &:hover
    color: #fff

.products__cont
  display: none
  @media(min-width: 550px)
    display: block
</style>

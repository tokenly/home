<template lang="pug">
footer
  .footer__links
    .container
      .row
        .three.columns
          .footer__heading On The Web
          ul.footer__menu
            li: a(href="https://letstalkbitcoin.com/blog/category/episodes" target="_blank") Let's Talk Bitcoin
            li: a(href="http://tokentalk.org/" target="_blank") TokenTalk
            li: a(href="https://github.com/tokenly" target="_blank") Github
            li: a(href="https://letstalkbitcoin.com/blog/tokenly" target="_blank") Blog
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
            li: a(href="http://tokenpass.tokenly.com" target="_blank") Tokenpass
            li: a(href="http://pockets.tokenly.com" target="_blank") Pockets
            li: a(href="http://swapbot.tokenly.com" target="_blank") Swapbot
        .three.columns
          .footer__heading.products__cont &nbsp;
          ul.footer__menu
            li: a(href="http://redeem.tokenly.com" target="_blank") Market
            li: a(href="http://slots.tokenly.com" target="_blank") Tokenslot
            li: a(href="http://bitsplit.tokenly.com" target="_blank") Bitsplit
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
  margin: 0 10px

.footer__links
  padding: 60px 0
  background-color: #fff

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
  background-color: #333335
  color: #e6e7e8
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

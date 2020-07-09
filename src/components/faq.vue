<template lang="pug">
section.faq#faq
  .faq__container
    .faq__container__content
      header
        span Frequently Asked Questions
      p
        span Just found out about Tokenly and have questions? That’s great. We’ll try to answer them one by one. If you don’t find your question or answer below, you can ask us on the &nbsp;
        a(
          href="https://tokenlypublic.herokuapp.com/"
        ) Tokenly slack channel.
      div
        div.faq__container__content__entry(v-for="faqQuestion in this.questions")
          FaqQuestion(
            :question="faqQuestion.question",
            :answer="faqQuestion.answer"
          )

</template>

<script>

import FaqQuestion from './faq-question.vue'

export default {
  components: {FaqQuestion},
  data () {
    return {
      questions: [
        {
          question: 'What is Tokenly?',
          answer: 'Tokenly is a leading innovator around non-financial applications of blockchain technology, like token controlled access and token ownership.'
        },
        {
          question: 'What problems does Tokenly solve?',
          answer: 'Interest in cryptocurrency and blockchain technology is at all-time highs, but still remains too complex for individuals and businesses to use for practical applications.  Tokenly enables indivuals and businesses to enjoy the benefits of using blockchain technology without hiring a blockchain engineer. Tokenly solves the problem of complexitity by "abstracting away" the technical operations required to use blockchain technology into the background while giving users full control with simple interfaces.'
        },
        {
          question: 'What makes Tokenly unique?',
          answer: 'We are truly unique by providing powerful blockchain tools that are user-friendly. More than just an idea, we have launched 5 applications to date, including blockchain and turnkey token solutions for eCommerce. We also intentionally built our applications to be blockchain agnostic, making Tokenly adaptable to any new developments in the rapidly changing blockchain and cryptocurrency space.'
        },
        {
          question: 'How far along is Tokenly?',
          answer: 'Tokenly has been developing blockchain solutions since 2014.  To date, we have 5 live blockchain token solutions and thousands of users.'
        }
      ]
    }
  },
  created () {
  },

  methods: {

  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true">

.faq
  background: #fff
  position: relative
  &__container
    padding: 80px 30px
    &__content
      max-width: 1000px
      margin: 0 auto
      header
        margin: 0px
        text-align: left
        margin-bottom: 50px
        font-size: 36px
        line-height: 60px
        font-weight: 600
        color: #00254C
        position: relative
      header:before
        content: ''
        background-color: #29B6F6
        opacity: 0.7
        height: 2px
        width: 70px
        border-radius: 1px
        position: absolute
        top: 70px
        left: 0
      p
        text-align: left
        color: #888
        font-size: 20px
        margin-bottom: 30px
      &__entry
        vertical-align: top
        padding: 15px 10px
        width: 50%
        display: inline-block
        &__content
          box-shadow: 0 5px 15px 0 rgba(0,0,0,0.10)
          border: 1px solid rgba(0,0,0,0.1)
          transition: 0.2s
          &:hover
            box-shadow: 0 5px 20px 0 rgba(0,0,0,0.10)
          &__question
            cursor: pointer
            padding: 20px
            font-weight: 600
            span
              line-height: 30px
              display: inline-block
              color: #00254C;
            i
              display: inline-block
              height: 30px
              width: 30px
              vertical-align: middle
              line-height: 30px
              text-align: center
              border-radius: 50%
              background: #01579B
              color: #fff
              font-size: 24px
              float: right
              transition: 0.2s
              &.active
                transform: rotate(90deg)
          &__answer
            padding: 20px
            color: #888
            line-height: 1.75

@media(max-width: 900px)
  body
    .faq__container
      padding: 40px 20px
    .faq__container__content
      header
        font-size: 24px
      p
        font-size: 16px
      &__entry
        width: 100%
</style>

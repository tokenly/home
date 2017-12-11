<template lang="pug">
div.faq__container__content__entry__content
  .faq__container__content__entry__content__question(@click="toggleShow")
    span {{ this.question }}
    i.material-icons(
      v-bind:class="{ active: this.active }"
    ) keyboard_arrow_right
  .faq__container__content__entry__content__answer(v-show="this.active")
    span {{ this.answer }}
</template>

<script>

export default {
  components: {},
  data () {
    return {
      active: false
    }
  },
  props: {
    question: {
      'type': String
    },
    answer: {
      'type': String
    }
  },
  created () {
  },

  methods: {
    toggleShow: function () {
      if (this.active) {
        this.active = false
      } else {
        this.active = true
      }

    }
  },

  computed: {
    //compute some form labels
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>

</style>

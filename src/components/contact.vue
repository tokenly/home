<template lang="pug">
.contact
  .container
    h2 Contact Us
    p Questions? Drop us a line. We are always eager to hear new ideas and feedback from you!
    hr
    form(action="https://formspree.io/early@tokenly.com" method="POST" @submit="validateBeforeSubmit")
      .row
        .input-group.six.columns
          label Name
          input(v-validate="" v-model="name" data-vv-rules="required" name="name" type="text" placeholder="Satoshi")
          .sublabel.errors(v-show="errors.has('name')") {{ errors.first('name') }}
        .input-group.six.columns
          label Email
          input(v-validate="" v-model="email" data-vv-rules="required|email" name="email" type="email" placeholder="satoshi@tokenly.com")
          .sublabel.errors(v-show="errors.has('email')") {{ errors.first('email') }}
      .input-group
        label Message
        textarea(v-validate="" v-model="message" data-vv-rules="required" name="message" rows="3" placeholder="What's a bitcoin?")
        .sublabel.errors(v-show="errors.has('message')") {{ errors.first('message') }}
      //- honeypot, do not delete
      input(type="text" name="_gotcha" style="display:none")
      input.btn.fill.default(type="submit" value="Send")
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    validateBeforeSubmit(e) {
       this.$validator.validateAll()

       if (this.errors.any()) {
           e.preventDefault()
       }
     }
  }
}
</script>

<style lang="sass?indentedSyntax=true" scoped>
</style>

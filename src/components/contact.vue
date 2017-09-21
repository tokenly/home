<template lang="pug">
.contact#contact
  .container
    h2 Contact Us
    p We want to hear from you! Have a question or need some help getting started? We’re here to help.
    hr
    form(action="https://formspree.io/early@tokenly.com" method="POST" @submit="validateBeforeSubmit")
      .row
        .input-group.six.columns
          label Name
          input(v-validate="" v-model="name" data-vv-rules="required" name="name" type="text"  id="contactName")
          .sublabel.errors(v-show="errors.has('name')") {{ errors.first('name') }}
        .input-group.six.columns
          label Email
          input(v-validate="" v-model="email" data-vv-rules="required|email" name="email" type="email"  id="contactEmail")
          .sublabel.errors(v-show="errors.has('email')") {{ errors.first('email') }}
      .input-group
        label Message
        textarea(v-validate="" v-model="message" data-vv-rules="required" name="message" rows="3" id="contactMessage")
        .sublabel.errors(v-show="errors.has('message')") {{ errors.first('message') }}
      //- honeypot, do not delete
      input(type="text" name="_gotcha" style="display:none")
      input.btn.fill.dark(type="submit" value="Send")
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

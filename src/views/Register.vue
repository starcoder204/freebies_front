<template>
  <div class="register">
    <h2> register </h2>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      form: {
        sex: 'male',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        check1: 0,
        check2: 0,
        check3: 0
      },
      show: true,
      password_hidden: true,
      confirm_password_hidden: true
    }
  }
}
</script>

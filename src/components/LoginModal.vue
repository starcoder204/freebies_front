<template>
    <b-modal id="login_modal" hide-footer>
        <div slot="modal-title">
            <span>{{$t('Sign In')}}</span>
        </div>
        <div class="modal-body">
            <b-row>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-row>
                        <b-col cols="12" class="text-center" v-if="failedMessage">
                            <span class="failed-info"> {{failedMessage}} </span>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group id="input-group-1" label-for="input-1">
                            <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Email"
                            ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12">
                            <b-form-group id="input-group-2" label-for="input-2">
                            <b-input-group>
                                <b-form-input
                                :type="password_hidden?'password':'text'"
                                id="input-2"
                                v-model="form.password"
                                required
                                placeholder="Password"
                                ></b-form-input>
                                <b-input-group-append>
                                <b-button variant="primary" @click="password_hidden = !password_hidden">
                                    <i class="czi-eye"></i>
                                </b-button>
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div class="bottom-div">
                        <span class="m-2 register-btn">
                            <a href="javascript:void(0)" @click="goToRegister">
                                {{$t('Register')}}
                            </a>
                        </span>
                        <b-button type="submit" variant="danger" class="submit-login">
                            <span class="text-capitalize">{{$t('Login')}}</span>
                        </b-button>
                        <span class="m-2 forgot-btn">
                            <a href="javascript:void(0)">
                                {{$t('Forgot password?')}}
                            </a>
                        </span>
                    </div>
                </b-form>
            </b-row>
        </div>
    </b-modal>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true,
      password_hidden: true,
      failedMessage: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.failedMessage = ''
      this.$store.dispatch('login', this.form).then(response => {
        if (response.message) {
          this.failedMessage = this.$i18n.t(response.message)
        } else {
          this.$bvModal.hide('login_modal')
        }
      })
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    goToRegister () {
      this.$bvModal.hide('login_modal')
      this.$router.push('register')
    }
  }
}
</script>

<style scoped lang="scss">
.modal-body {
    .bottom-div {
        text-align: center;
        .register-btn {
            float: left;
        }
        .forgot-btn {
            float: right;
        }
    }
}
</style>

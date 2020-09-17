<template>
  <div class="app-header">
    <header class="bg-light box-shadow-sm navbar-sticky">
      <div class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand d-none d-sm-block mr-4 order-lg-1" href="index.html" style="min-width: 7rem;">
            <img width="142" src="../assets/img/logo-dark.png" alt="Cartzilla"/>
          </a>
          <a class="navbar-brand d-sm-none mr-2 order-lg-1" href="index.html" style="min-width: 4.625rem;">
            <img width="74" src="../assets/img/logo-icon.png" alt="Cartzilla"/>
          </a>
          <div class="navbar-toolbar d-flex align-items-center order-lg-3">
            <TheLanguageSwitcher/>
            <button class="navbar-toggler" type="button" v-b-toggle.navbarCollapse>
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <b-collapse id="navbarCollapse" class="navbar-collapse mr-auto order-lg-2">
            <hr class="my-3">
            <!-- Primary menu-->
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" :to="$i18nRoute({ name: 'home'})">{{$t('Home')}}</router-link>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item" v-if="this.$store.getters.isLoggedIn">
                <a class="nav-link" href="#">{{$t('My Account')}}</a>
              </li>
              <li class="nav-item" v-if="this.$store.getters.isLoggedIn">
                <a class="nav-link" href="javascript:void(0)" @click="logout">{{$t('Logout')}}</a>
              </li>
              <li class="nav-item" v-if="!this.$store.getters.isLoggedIn">
                <a class="nav-link" href="javascript:void(0)" @click="openLoginModal">{{$t('Login')}}</a>
              </li>
            </ul>
          </b-collapse>
          <LoginModal />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'
import LoginModal from '@/components/LoginModal'
export default {
  components: {
    TheLanguageSwitcher,
    LoginModal
  },
  methods: {
    openLoginModal () {
      this.$bvModal.show('login_modal')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav {
    margin: auto;
  }
}
</style>

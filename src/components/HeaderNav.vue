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
              <li class="nav-item"><a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Shop</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Account</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Login</a>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </b-collapse>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'
export default {
  components: {
    TheLanguageSwitcher
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

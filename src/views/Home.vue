<template>
  <div class="home">
    <div>
      <div class="headline jumbotron">
        <div id="search_widget" class="search-widget mb-2">
          <b-form-input v-model="search_key" :placeholder="$t('Search freebies')"></b-form-input>
          <b-button variant="outline-primary">
            <b-icon icon="search"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
    <div class="row pt-3 mx-n2">
      <HomeBlock />
      <HomeBlock />
      <HomeBlock />
      <HomeBlock />
      <HomeBlock />
    </div>
  </div>
</template>

<script>
import HomeBlock from '@/components/HomeBlock'
export default {
  name: 'home',
  components: {
    HomeBlock
  },
  data () {
    return {
      search_key: ''
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.headline {
  padding: 20px;
  .search-widget {
    display: flex;
    max-width: 400px;
    margin: auto;
    margin-top: 3px;
    input {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    button {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}
</style>

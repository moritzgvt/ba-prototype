<template>
  <main>
    <div class="settings">
        <span class="md-body-2 settings__back" @click="handleClick"><span class="material-icons md-light">chevron_left</span> Zurück</span>
        <h1 class="md-title">Globale Cookie-Einstellungen</h1>
      <md-divider class="divider"/>
      <template v-for="(category, index) in categories">
        <VerboseCardSwitch  :key="index" :data="category" :index="index"/>
      </template>
      <md-divider class="divider"/>
      <p class="md-body-2">Detailliertere Einstellungen sind kein Teil des Click Dummys.</p>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import VerboseCardSwitch from '../components/VerboseCardSwitch.vue'

export default {
  name: 'GetStarted',
  components: {
    VerboseCardSwitch,
  },
  computed: mapState({
    categories: state => state.categories
  }),
  methods: {
    handleClick: function () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: var(--md-theme-default-background, #424242);
}

main {
  width: 700px;
  margin: 0 auto;
  padding: 50px 0;

  .description {
    margin-top: 5px;
  }

  .settings {
    color: var(--md-theme-default-text-primary-on-background, #fff);

    &__back {
      display: inline-block;
      line-height: 30px;
      cursor: pointer;
      margin-bottom: 20px;
      
      span {
        vertical-align: middle;
        margin: -4px 5px 0 0;
        border-radius: 24px;
        padding: 5px 6px 5px 4px;
      }

      &:hover span {
        background-color:#1212125f;
      }
    }
  }
}
</style>

<template>
  <main>
    <div class="settings">
      <div class="settings__title">
        <h1 class="md-display-3 emoji">&#128075;</h1>
        <h1 class="md-display-3">Goodbye Cookie Notice!</h1>
        <h3 class="md-subheading"><strong>Verschwende nie wieder einen Gedanken an Cookies:</strong><br/>Sag uns einfach, wie du gerne im Internet surfst und wir machen den Rest!</h3>
      </div>
      <md-divider class="divider"/>
      <template v-for="(category, index) in categories">
        <VerboseCardSwitch  :key="index" :data="category" :index="index" verbose/>
      </template>
      <div class="settings__button">
        <md-button class="md-primary md-raised savebutton" @click="handleClick('/website/abdera')">
          Speichern und Lossurfen
        </md-button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import VerboseCardSwitch from '../components/VerboseCardSwitch.vue'

export default {
  name: 'GetStarted',
  components: {
    VerboseCardSwitch
  },
  computed: mapState({
    categories: state => state.categories
  }),
  methods: {
    handleClick: function (target) {
      this.$router.push(target);
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

    &__title {
      margin-top: 100px;
      text-align: center;

      h1 {
        margin-bottom: 30px;

        &.emoji {
          color: #ffffff;
        }
      }
      
      span {
        font-size: inherit;
        vertical-align: middle;
        margin-top: -5px;
      }
    }

    &__button {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  .savebutton {
    text-transform: none;
  }
}
</style>

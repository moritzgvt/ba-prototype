<template>
  <div class="modal">
    <div @click="overlay = !overlay" class="trigger">
      <span class="material-icons md-light">cookie</span>
    </div>
    <md-card v-if="overlay" class="modal__overlay mdc-card mdc-card--outlined backdrop">
      <div class="md-title">Möchtest du auf dieser Website<br/>weitere Cookies zulassen?</div>
      <div class="consent_container">
        <template v-for="(category, index) in categories">
          <CardSwitch  :key="index" :data="category" :index="index"/>
        </template>
      </div>
      <div class="link__container">
        <a class="md-link" @click="handleClick">Standard Cookies bearbeiten</a>
      </div>
      <md-divider class="bottom__divider"/>
      <div class="close__container">
        <md-checkbox class="md-primary checkbox" v-model="checkbox">Auf dieser Seite nicht mehr anzeigen</md-checkbox>
        <md-button class="md-primary md-raised button" @click="overlay = !overlay">
          Schließen
        </md-button>
      </div>
    </md-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CardSwitch from './CardSwitch.vue';

export default {
  name: 'Modal',
  components: {
    CardSwitch
  },
  computed: {
    checkbox: {
      get() {
        return this.isOverlayDisabled;
      },
      set() {
        this.toggleOverlayDisabled(this.$route.params.id)
      }
    },
    overlay: {
      get() {
        return this.isOverlayOpen;
      },
      set() {
        this.toggleOverlayOpen(this.$route.params.id);
      }
    },
    ...mapState({
      categories: state => state.categories,
      isOverlayOpen: function (state) { return state.views[this.$route.params.id].overlay },
      isOverlayDisabled: function (state) { return state.views[this.$route.params.id].disabled }
    })
  },
  methods: {
    handleClick: function () {
      this.$router.push('/settings');
    },
    ...mapMutations({
      toggleOverlayDisabled: 'toggleOverlayDisabled',
      toggleOverlayOpen: 'toggleOverlayOpen'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  &__overlay {
    position: fixed;
    top: 50px;
    right: 10px;
    padding: 20px;
    max-width: 400px;

    .consent_container {
      margin: 10px 0;
    }

    .link__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      a {
        cursor: pointer;
      }
    }

    .bottom__divider {
      margin: 20px 0;
    }

    .close__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .checkbox {
        margin-top: 0;
      }

      .button {
        flex-shrink: 0;
        margin-top: 0;
        text-transform: unset;
        font-size: 16px;

        span {
          vertical-align: middle;
        }
        
      }
    }
  }
}

.trigger {
  position: fixed;
  right: 10px;
  top: 0px;
  padding: 10px;
  background-color: var(--md-theme-default-background, #424242);
  cursor: pointer;
  border-radius: 100%;
  transform: scale(.7);

  span {
    vertical-align: middle;
    color: var(--md-theme-default-text-primary-on-background, #fff);
  }
}
</style>

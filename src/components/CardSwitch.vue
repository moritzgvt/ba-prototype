<template>
  <md-card class="cardswitch__card black-card">
    <div class="cardswitch__container" @click="toggleOpen(index)">
      <div class="cardswitch__icon">
        <span class="material-icons md-light" :class="{'turn' : open }">arrow_right</span>
      </div>
      <div class="cardswitch__category-icon">
        <span class="material-icons md-light md-18">{{ data.icon }}</span>
      </div>
      <div class="cardswitch__content">
        <h3 class="md-subheading">{{ data.title }}</h3>
      </div>
      <div class="cardswitch__severity" :class="severity[data.data.severity].class"/>
      <div class="cardswitch__switch">
        <md-switch v-model="selection" class="md-primary"></md-switch>
      </div>
    </div>
    <div v-if="open" class="cardswitch__collapsible">
      <p class="md-body-1" v-html="data.content"/>
      <p class="md-body-1">Weitere Einstellungsmöglichkeiten findest du in den <router-link to="/settings">Globalen Cookie-Einstellungen</router-link>.</p>
    </div>
  </md-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CardSwitch',
  props: {
    data: Object,
    index: Number,
  },
  computed: {
    selection: {
      get() {
        return this.getWebsiteSelection != null
          ? this.getWebsiteSelection[this.index]
          : this.getSelection;
      },
      set() {
        this.toggleWebsiteSelection({ index: this.index, website: this.$route.params.id });
      }
    },
    ...mapState({
      open: function(state) { return state.categories[this.index].open },
      getSelection: function(state) { return state.categories[this.index].state },
      getWebsiteSelection: function(state) { return state.views[this.$route.params.id].states },
      severity: state => state.severity
    })
  },
  methods: {
    ...mapMutations({
      toggleOpen: 'toggleOpen',
      toggleWebsiteSelection: 'toggleWebsiteSelection'
    })
  }
}
</script>

<style scoped lang="scss">
  .cardswitch {
    &__card {
      margin: 10px 0;
      background-color: #1212125f !important;
    }

    &__icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      span {
        transition: transform .1s ease-in-out;
      }
    }

    &__category-icon {
      margin-right: 5px;
    }

    &__content {
      flex-grow: 2;
    }

    &__severity {
      height: 10px;
      width: 10px;
      border-radius: 10px;
      margin: 0 15px 0 10px;
    }

    &__container {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 30px;
      padding: 15px 20px 13px 10px;
      cursor: pointer;
    }

    &__collapsible {
      padding: 0 20px 20px 20px;

      p {
        margin-top: 10px;
      }
    }
  }

  .turn {
    transform: rotate(90deg);
  }
</style>

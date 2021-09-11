<template>
  <md-card class="cardswitch__card black-card">
    <div class="cardswitch__container" @click="open = !open">
      <div class="cardswitch__icon">
        <span class="material-icons md-light" :class="{'turn' : open}">arrow_right</span>
      </div>
      <div class="cardswitch__category-icon">
        <span class="material-icons md-light">{{ data.icon }}</span>
      </div>
      <div class="cardswitch__content">
        <h3 class="md-subheading" v-html="verbose ? data.verboseTitle : data.title"/>
      </div>
      <div class="cardswitch__severity">
        <span class="indicator" :class="severity[data.data.severity].class"></span><span class="md-caption">{{ severity[data.data.severity].text }}</span>
      </div>
      <div class="cardswitch__switch">
        <md-switch v-model="selection" class="md-primary"></md-switch>
      </div>
    </div>
    <div v-if="open" class="cardswitch__collapsable">
      <p class="md-body-1" v-html="data.content"/>
      <p v-if="verbose" class="md-body-1">Weitere Einstellungsmöglichkeiten findest du in den <a>Globalen Cookie-Einstellungen</a>.</p>
      <p class="md-caption tagheadline">Betroffene Daten:</p>
      <md-divider/>
      <div class="tagcontainer">
        <template v-for="(item, index) in data.data.used">
          <span :key="`tag-${index}`" class="tag md-caption">{{ item }}</span>
        </template>
      </div>
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
    verbose: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    selection: {
      get() {
        return this.getSelection;
      },
      set() {
        this.toggleSelection(this.index);
      }
    },
    ...mapState({
      getSelection: function(state) { return state.categories[this.index].state },
      severity: state => state.severity
    })
  },
  methods: {
    ...mapMutations({
      toggleSelection: 'toggleSelection'
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
      margin-right: 7px;

      span {
        transition: transform .1s ease-in-out;
      }
    }

    &__category-icon {
      margin-right: 10px
    }

    &__content {
      flex-grow: 2;
    }

    &__container {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 30px;
      padding: 15px 20px 10px 5px;
      cursor: pointer;
    }

    &__severity {
      width: 140px;
      padding-left: 20px;
      flex-shrink: 0;

      .indicator {
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 10px;
        margin-right: 5px;
      }
    }

    &__collapsable {
      padding: 0 40px 10px 70px;
      margin: 10px 0;

      p {
        margin: 10px 0;

        &.tagheadline {
          margin-top: 20px;
          margin-bottom: 5px;
        }
      }
    }
  }

  .tagcontainer {
    margin-top: 10px;
  }

  .tag {
    display: inline-block;
    padding: 3px 7px 1px 7px;
    border: 1px solid #1212125f; 
    background-color: #1212125f;
    border-radius: 3px;
    margin: 0 4px 4px 0;
    transition: color .15s ease-in;
    cursor: pointer;

    &:hover {
      color: #f3f3f3;
      background-color: #1212124f;
    }
  }

  .turn {
    transform: rotate(90deg);
  }

  .centered {
    align-self: center !important;
  }
</style>

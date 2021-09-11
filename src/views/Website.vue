<template>
  <main>
    <Modal/>
    <div class="background">
      <img :src="view.path" alt="Website Backgrund">
    </div>
    <router-link v-if="view.next" class="nextview" :to="view.next">Next Website</router-link>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/components/Modal.vue'

export default {
  name: 'Website',
  components: {
    Modal
  },
  computed: mapState({
    view: function(state) { return state.views[this.$route.params.id] }
  })
}
</script>

<style lang="scss" scoped>
.background {
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: -1;

  img {
    position: relative;
    left: 50%;
    min-width: 2560px;
    transform: translateX(-50%);
  }
}

.nextview {
  position: fixed;
  bottom: 20px;
  right: 20px;
  line-height: 30px;
}
</style>

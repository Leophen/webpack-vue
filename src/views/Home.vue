<template>
  <div>首页{{count}}</div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)

    return {
      count
    }
  }
})
</script>

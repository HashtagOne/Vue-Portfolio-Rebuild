<script setup>
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const transitionName = ref('')

let firstLoad = true

watch(() => route.path, (newPath) => {
  if (firstLoad) {
    firstLoad = false
    return
  }
  if (newPath.startsWith('/projects/')) {
    transitionName.value = 'slide-left'
  } else {
    transitionName.value = 'slide-right'
  }
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition :name="transitionName" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </Transition>
  </RouterView>
</template>

<style>
/* FORWARD — home exits left, detail enters from right */
.slide-left-leave-to { opacity: 0; transform: translateX(-60px); }
.slide-left-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.slide-left-enter-from { opacity: 0; transform: translateX(60px); }
.slide-left-enter-active { transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s; }

/* BACKWARD — detail exits right, home enters from left */
.slide-right-leave-to { opacity: 0; transform: translateX(60px); }
.slide-right-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.slide-right-enter-from { opacity: 0; transform: translateX(-60px); }
.slide-right-enter-active { transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s; }
</style>
<script setup>
import { onMounted, ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsGrid from '../components/ProjectsGrid.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'

const visible = ref(false)

onMounted(() => {
  if (history.state?.fromDetail) {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'instant'})
  }
  setTimeout(() => {
    visible.value = true
  }, 100)
})
</script>

<template>
  <div>
    <NavBar />
    <HeroSection />
    <div :class="['sections', { 'sections-visible': visible }]">
      <AboutSection />
      <ProjectsGrid />
      <ContactSection />
    </div>
  </div>
</template>

<style scoped>
.sections {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.sections-visible {
  opacity: 1;
}
</style>
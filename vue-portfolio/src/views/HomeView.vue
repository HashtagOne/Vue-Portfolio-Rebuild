<script setup>
import { onMounted, ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsGrid from '../components/ProjectsGrid.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterBar from '../components/FooterBar.vue'

const visible = ref(false)

onMounted(() => {
  if (history.state?.fromDetail) {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'instant' })
    const cleanState = { ...history.state }
    delete cleanState.fromDetail
    history.replaceState(cleanState, '', window.location.pathname)
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
      <FooterBar />
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
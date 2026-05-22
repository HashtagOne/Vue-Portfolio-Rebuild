<script setup>
import {projects} from '../projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="hidden-section">
    <div class="section-header">
      <span class="section-label">Work</span>
      <h2>Projects</h2>
    </div>
    <div class="grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>




<style scoped>

#projects {
    padding: 80px;
    border-bottom: 0.5px solid var(--border);
}

.section-header {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
}

.section-label {
    color: var(--text-muted);
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}

h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-top: 4px;
    padding-bottom: 12px;
    border-bottom: 0.5px solid rgba(165,46,138,0.4);
    display: inline-block;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}
</style>
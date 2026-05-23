<script setup>
import {ref, onUnmounted} from 'vue'

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

const isHovered = ref(false)

function startSlideshow() {
    isHovered.value = true
}

function stopSlideshow() {
    isHovered.value = false
}

</script>

<template>
    <div class="card" @mouseenter="startSlideshow" @mouseleave="stopSlideshow">
        <Transition name="screenshot">
            <div
                v-if="project.screenshots.length > 0 && isHovered"
                class="screenshot-bg"
                :style="{ backgroundImage: `url(${project.screenshots[0]})` }"
            ></div>
        </Transition>
        <div class="card-tags">
            <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
        <h3 class="card-title">{{ project.title }}</h3>
        <p clas="card-desc">{{ project.shortDescription }}</p>
        <div class="card-actions">
            <a :href="project.githubUrl" target="_blank" class="btn-ghost">Github</a>
            <a v-if="project.liveUrl" :href ="project.liveUrl" target="_blank" class="btn-ghost">Live Demo</a>
            <RouterLink :to="`/projects/${project.id}`" class="btn-accent">Learn More</RouterLink>           
        </div>
    </div>
</template>

<style scoped>

.card {
    background: var(--bg-secondary);
    border: 0.5px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
    position: relative;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 
    0 0 0 1px rgba(234,104,118, 0.6), 
    0 8px 24px rgba(234,104,118,0.015),
    0 16px 48px rgba(234, 104, 118, 0.1),
    0 0 60px rgba(234, 104, 118, 0.06);
    border-color: rgba(234,104,118,0.2);
}

.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    background: rgba(105,106,164,0.12);
    color: var(--accent-blue);
    border: 0.5px solid rgba(105, 106, 164, 0.25);
    border-radius: 20px;
    font-size: 0.75rem;
    padding: 2px 10px;
}

.card-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
}

.card-desc {
    color: var(--text-secondary);
    font-size: 0.85rem;
    line-height: 1.6;
    flex: 1;
}

.card-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 4px;
}

.screenshot-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    border-radius: 12px;
    transform: scale(1.04);
    z-index: 0;
}

.screenshot-enter-active { transition: opacity 0.6s ease; }
.screenshot-leave-active { transition: opacity 0.6s ease; }
.screenshot-enter-from { opacity: 0; }
.screenshot-leave-to { opacity: 0; }

.card-tags, .card-title, .card-desc, .card-actions {
    position: relative;
    z-index: 1;
}

.btn-ghost {
    color: var(--text-secondary);
    border: 0.5px solid var(--border);
    border-radius: 6px;
    font-size: 0.78rem;
    padding: 5px 12px;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s;
}

.btn-ghost:hover {
    color: var(--text-primary);
    border-color: rgba(255,255,255,0.2);
}

.btn-accent {
    color: var(--accent-red);
    border: 0.5px solid rgba(234, 104, 118, 0.3);
    border-radius: 6px;
    font-size: 0.78rem;
    padding: 5px 12px;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s;
}

.btn-accent:hover {
    border-color: var(--accent-red);
}


</style>
<script setup>
import { routeLocationKey, useRoute, useRouter } from 'vue-router'
import {projects} from '../projects.js'
import { onMounted } from 'vue'
const route = useRoute()
const router = useRouter()

function goBack() {
    router.push({ path: '/', state: { fromDetail: true } })
}

onMounted(() => {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant'})
    }, 50)
})

const project = projects.find(n => n.id === route.params.id);
</script>

<template>
<div>
    <div v-if="project">
        <!--HERO -->
        <section class="detail-hero">
            <button class="back-btn" @click="goBack()">← Back</button>
            <div class="detail-left">
                <div class="detail-tags">
                    <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                </div>
                <h1>{{ project.title }}</h1>
                <p class="detail-desc">{{ project.longDescription }}</p>
                <div class="detail-btns">
                    <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="btn-primary">Live Demo</a>
                    <a :href="project.githubUrl" target="_blank" class="btn-outline">View on Github</a>
                </div>
            </div>
            <div class="detail-video">
                <div class="video-placeholder">
                    <span>demo</span>
                </div>
                <div class="video-fade"></div>
            </div>
        </section>

        <!-- BODY -->
         <section class="detail-body">
            <div class="learned">
                <h3>What I learned</h3>
                <ul>
                    <li v-for="item in project.whatILearned" :key="item">{{ item }}</li>
                </ul>
            </div>
            <div class="stack">
                <h3>Tech Stack</h3>
                <div class="stack-tags">
                    <span class="stack-tag" v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
                </div>
            </div>
         </section>

         <!-- SCREENSHOT -->
         <section class="detail-screenshot">
            <h3> Screenshots</h3>
            <p class="coming-soon">Coming soon.</p>
         </section>
    </div>

    <!--IF PROJECT NOT FOUND-->
    <div v-else class="not-found">
        <h2> Project not found.</h2>
    </div>
</div>
</template>

<style scoped>
.detail-hero {
    display: flex;
    align-items: stretch;
    min-height: 70vh;
    border-bottom: 0.5px solid var(--border);
    position: relative;
    overflow: hidden;
}

.detail-left {
    padding: 80px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    z-index: 2;
}

.detail-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    background: rgba(105, 106, 164, 0.12);
    color: var(--accent-blue);
    border: 0.5px solid rgba(105,106,164,0.25);
    border-radius: 20px;
    font-size: 0.78rem;
    padding: 3px 12px;
}

h1 {
    font-size: 3.5rem;
    font-weighT: 800;
    color: var(--text-primary);
    line-height: 1.1;
}

.detail-desc {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
}

.detail-btns {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn-primary {
    background: var(--accent-blue);
    color: white;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover {
    opacity: 0.85;
    transform: translateY(-2px);
}

.btn-outline {
    border: 0.5px solid var(--border);
    color: var(--text-secondary);
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: color 0.2s, border-color 0.2s, transform 0.2s;
}

.btn-outline:hover {
    color: var(--text-primary);
    border-color: rgba(255,255,255,0.2);
    transform: translateY(-2px);
}

.detail-video {
    position: relative;
    flex: 1;
    background: var(--bg-card);
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-placeholder {
    color: var(--text-muted);
    font-size: 0.85rem;
    z-index: 1;
}

.video-fade {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(105deg, var(--bg-primary) 0%, var(--bg-primary) 30%, transparent 65%);
    z-index: 2;
    pointer-events: none;
}

.detail-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    padding: 80px;
    border-bottom: 0.5px solid var(--border);
}

h3 {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 20px;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

ul li {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    padding-left: 16px;
    position: relative;
}

ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent-purple);
}

.stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.stack-tag {
    background: rgba(165,46,138,0.1);
    color: var(--accent-purple);
    border: 0.5px solid rgba(165,46,138,0.25);
    border-radius: 20px;
    font-size: 0.78rem;
    padding: 4px 14px;
}

.detail-screenshots {
    padding: 80px;
}

.coming-soon {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-top: 12px;
}

.not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    color: var(--text-secondary);
}

.back-btn {
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
    padding: 0;
    margin-bottom: 8px;
    transition: color 0.2s;
    width: fit-content;
}

.back-btn:hover {
    color: var(--text-primary);
}

</style>
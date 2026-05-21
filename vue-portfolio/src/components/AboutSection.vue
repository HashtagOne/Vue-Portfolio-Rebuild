<script setup></script>


<template>
    <section id="about">
        <div class="section-header">
            <span class="section-label">About</span>
            <h2>About Me</h2>
        </div>
        <p>  I'm a self-taught developer and incoming CS student who started building
      before the degree began. I've shipped seven projects across Python,
      JavaScript, and Flask — ranging from command-line apps to full stack web
      apps with REST APIs and databases. I'm working toward becoming a full
      stack developer and currently focused on growing my skills one project
      at a time.</p>
    </section>
</template>

<style scoped>

#about {
    padding: 80px;
    border-bottom: 0.5px solid var(--border);
    max-width: 720px;
}

.section-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
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
    border-bottom: 0.5px solid rgba(165, 46, 138, 0.5);
    display: inline-block
}

p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
}

</style>
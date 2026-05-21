<script setup></script>

<template>
    <section id="hero">
        <div class="hero-content">
            <span class = "hero-tag">Available</span>
            <h1 class = "hero-name">Hi, I'm <span class="accent">Epicc.</span></h1>
            <p class="hero-sub">Aspiring full stack developer, currently building.</p>
            <a href="#projects" class="hero-btn">View my work</a>
        </div>
        <div class="hero-photo">
            <span>photo</span>
        </div>
    </section>
</template>

<style scoped>
#hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 92vh;
    overflow: hidden;
    border-bottom: 0.5px solid var(--border);
}

.hero-photo {
    position: absolute;
    top: 0;
    right: 0;
    width: 65%;
    height: 100%;
    background: var(--bg-card);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-size: 0.85rem;
}

.hero-photo::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, var(--bg-primary) 35%, transparent 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 0 80px;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.hero-tag {
    display: inline-block;
    background: rgba(105,106,164, 0.15);
    color: var(--accent-blue);
    border: 0.5px solid rgba(105, 106, 164, 0.3);
    border-radius: 20px;
    font-size: 0.8rem;
    padding: 4px 14px;
    width: fit-content;
}

.hero-name {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    color: var(--text-primary);
}

.accent {
    color: var(--accent-purple);
}

.hero-sub {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
}

.hero-btn {
    display: inline-block;
    background: var(--accent-blue);
    color: white;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    width: fit-content;
    transition: opacity 0.2s, transform 0.2s;
}

.hero-btn:hover {
    opacity:0.85;
    transform: translateY(-2px);
}

</style>
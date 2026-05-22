<script setup>
function scrollTo(id) {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView ({ behavior: 'smooth'})}


    const firstPart = ("Hi, I'm").split('').map((letter, i) => ({
        letter: letter === ' ' ? '\u00a0' : letter,
        index: i
    }))

    const secondPart = ("Epicc").split('').map((letter, i) => ({
        letter,
        index: i + 9
    }))
</script>

<template>
    <section id="hero">
        <div class="hero-content">
            <span class = "hero-tag">Available</span>
            <h1 class="hero-name">
                <span class="word">
                    <span
                    v-for="item in firstPart"
                    :key="item.index"
                    class="letter"
                    :style="{ animationDelay: `${item.index * 0.05}s` }"
                    >{{  item.letter }}</span>
                </span>
                <span class="word accent-word">
                    <span
                    v-for="item in secondPart"
                    :key="item.index"
                    class="letter accent"
                    :style="{ animationDelay: `${item.index * 0.05}s` }"
                    >{{ item.letter }}</span>
                </span>
            </h1>
            <p class="hero-sub">Aspiring full stack developer, currently building.</p>
            <a @click.prevent="scrollTo('#projects')" class="hero-btn">View my work</a>
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

a {
    cursor: pointer;
}

.letter {
    display: inline-block;
    animation: dropIn 0.5s ease both;
}

.word {
    display: inline-block;
    white-space: nowrap;
}



@keyframes dropIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>
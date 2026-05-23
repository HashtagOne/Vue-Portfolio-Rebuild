<script setup>
function scrollTo(id) {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth'})
}</script>

<template>
    <nav class="navbar">
        <span class="nav-name">Epicc</span>
        <ul>
            <li><a @click.prevent="scrollTo('#about')">About</a></li>
            <li><a @click.prevent="scrollTo('#projects')">Projects</a></li>
            <li><a @click.prevent="scrollTo('#contact')">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background-color: var(--nav-bg);
    padding: 16px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
}
.nav-name {
    font-family: 'Syne', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-primary);
}

.navbar {
    animation: fadeDown 0.6s ease both;
}

@keyframes fadeDown {
    from {
        opacity: 0;
        transform: translateY(-24px);
    } 
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


ul {
    list-style: none;
    display: flex;
    gap: 32px;
}

a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    position: relative;
    transition: color 0.2s;
    cursor: pointer;
}

a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent-purple);
    transition: width 0.25s ease;
}

a:hover {
    color: var(--text-primary);
}

a:hover::after {
    width: 100%;
}
</style>
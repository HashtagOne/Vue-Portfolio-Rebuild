<script setup></script>

<template>
    <section id="contact" class="hidden-section
    ">
        <div class="section-header">
            <span class="section-label">Contact</span>
            <h2>Get In Touch</h2>
        </div>
         <p>I'm currently building my portfolio and open to opportunities that help me learn. Feel free to reach out.</p>
    <a href="https://github.com/HashtagOne" target="_blank" class="btn">GitHub</a>
  </section>
</template>

<style scoped>

#contact {
    padding: 80px;
    border-bottom: 0.5px solid var(--border);
}

.section-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
}

.section-label {
    color: var(--text-muted);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
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

p {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.8;
    max-width: 520px;
    margin-bottom: 24px;
}

.btn {
    display: inline-block;
    background: var(--accent-blue);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    padding: 12px 28px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: opacity 0.2s, transform 0.2s;
}

.btn:hover {
    opacity: 0.85;
    transform: translateY(-2px);
}
</style>
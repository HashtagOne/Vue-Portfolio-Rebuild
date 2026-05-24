# Vue Portfolio Rebuild

A complete rebuild of my personal portfolio using Vue 3 and Vite. Features per-project detail pages, directional route transitions, scroll animations, and a dark-first design with a custom color palette.

## Live Demo

View the live site here: https://hashtagone.github.io/Vue-Portfolio-Rebuild/

## Features

- Per-project detail pages with long descriptions, tech stack, what I learned, and screenshots
- Directional slide transitions between routes — forward slides left, back slides right
- Scroll-triggered section fade-in animations on page load
- Hero section with staggered letter drop-in animation
- Project card hover screenshot preview
- Smooth scroll navigation via IntersectionObserver-free approach
- Dark base design with blue, purple, and red-pink accent colors
- Fully responsive grid layout for project cards
- Vue Router with`scrollBehavior for precise scroll control across navigation
- GitHub Pages deployment via gh-pages

## Tech Stack

- Vue 3 (Composition API with <script setup>)
- Vite
- Vue Router
- HTML, CSS, JavaScript

## What I Learned

- How Vue's component-based architecture differs from vanilla JS — separating by responsibility rather than file type
- Reactive variables with ref and watch for dynamic behavior
- Vue Router — named routes, dynamic segments (:id), scrollBehavior, and programmatic navigation
- How <Transition> and mode="out-in" coordinate route animations
- The gap between local and production environments — base URLs, CDN caching, and why hardcoded paths break on GitHub Pages
- How animation conflicts compound with routing and component lifecycle, and how to resolve them systematically
- Deploying a Vite project to GitHub Pages using gh-pages and the 404.html redirect trick

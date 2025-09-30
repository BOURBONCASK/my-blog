# BourbonCask Studio

This repository contains the source for a Hugo-powered personal site that spotlights embodied-intelligence engineering notes and a photography gallery.

## Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.128 or newer

## Local development
```bash
hugo server --bind 0.0.0.0 --baseURL http://localhost:1313/
```
The command above serves the site with live reload enabled. All styling and interaction assets live under `assets/` and are bundled automatically by Hugo Pipes.

## Project structure
- `content/` &mdash; Markdown sources for posts, the gallery index, and the about page.
- `layouts/` &mdash; Custom templates for the landing page, section listings, gallery lightbox, and article views.
- `assets/css/site.css` &mdash; Primary stylesheet defining the refined landing, post, and gallery presentation.
- `assets/js/gallery.js` &mdash; Lightweight lightbox logic for the gallery experience.

## Deployment
The site is configured for GitHub Pages under `https://bourboncask.github.io/my-blog/`. Running `hugo` outputs the production-ready files into `public/` for publishing.

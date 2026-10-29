# DT-U-Bordeaux

Website of the **Digital Twin Research Group — University of Bordeaux** (IMS Laboratory, UMR 5218 CNRS).

Live at https://dt-u-bordeaux.github.io

## Updating content

All projects, team members, publications and news live in [`data.js`](data.js).
Add or edit an entry there; every page picks it up automatically.

- Each project has its own page, `<project-id>.html` (team, publications, news linked by id). To add a project, copy one of these pages and change `data-project` on its `<body>`.
- Plain HTML/CSS/JS, no build step. Served by GitHub Pages from the `main` branch root.

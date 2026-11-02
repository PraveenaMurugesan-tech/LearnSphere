# LearnSphere — Online Course Information Portal

LearnSphere is a responsive, front-end-only course discovery portal created for a Web Technology Lab programming assignment. It uses a polished e-learning layout to help students explore courses, filter a catalog, review course information, and try a local-only registration experience.

> **Demo notice:** Registration records are saved in the current browser using `localStorage`. The site has no server, database, or payment processing. Passwords are validated in the form but are never saved.

## Objectives

- Demonstrate semantic HTML5, responsive CSS3, and browser-native JavaScript.
- Present a commercial-style learning portal with course discovery, category browsing, and course details.
- Implement accessible interactions and client-side form validation without frameworks or external UI libraries.

## Technologies

- HTML5 for the semantic page structure and accessible forms.
- CSS3 for layout, responsive breakpoints, visual states, and design tokens.
- Vanilla JavaScript (ES6+) for course data, rendering, filters, sorting, dialogs, validation, and local storage.
- Google Fonts (DM Sans and Manrope) for optional typography; the browser falls back to sans-serif fonts if they are unavailable.

No backend, database, front-end framework, or CSS framework is used.

## Features

- Sticky navigation with an accessible mobile menu and skip-to-content link.
- Responsive hero, learning statistics, and eight clickable course categories.
- Thirteen complete course records rendered from a JavaScript array, with at least one course in every category.
- Search by course title, instructor, category, or description.
- Category and difficulty filters, price/rating sorting, removable filter chips, and clear-filter controls.
- Detailed course dialog with learning outcomes, syllabus, instructor, rating, level, duration, and price.
- Registration form with field, email, phone, password, confirmation, and terms validation.
- Duplicate enrollment protection for the same email/course pair.
- Local-only registration records in `localStorage`; passwords are deliberately excluded.
- Contact form validation with a clear frontend-only success message.
- About, mission, vision, benefits, contact details, and footer sections.
- Self-contained, generated SVG course thumbnails and CSS illustrations; no image files or third-party image service are required.
- Keyboard focus styles, semantic labels, live status messages, dialog keyboard support, reduced-motion support, and responsive layouts.

## Folder structure

```text
LearnSphere/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── learning-path.svg
│   └── icons/
│       └── learnsphere.svg
└── README.md
```

The hero uses the local `learning-path.svg` illustration and `learnsphere.svg` is the browser tab icon. Course artwork is generated as SVG data URLs, so the catalog does not depend on remote image services.

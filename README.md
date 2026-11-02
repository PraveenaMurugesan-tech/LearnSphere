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

## Run locally

1. Keep `index.html`, `css/`, and `js/` together in the project folder.
2. Open `index.html` in a modern browser.
3. For a local web-server workflow, open a terminal in this folder and run `python -m http.server 8000`; then visit `http://localhost:8000`.
4. To inspect or clear demo registration records, open the browser developer tools and use **Application/Storage → Local Storage → `learnSphereRegistrations`**. Records stay in that browser until cleared.

## JavaScript overview

- `categories` and `courses` are the source data. Each course includes its category, instructor, level, rating, price, artwork colors, learning outcomes, and syllabus.
- `renderCategories`, `renderCategoryOptions`, and `renderCourses` build the category cards, form options, and catalog cards from the data.
- `getVisibleCourses` applies search, category, and difficulty matching before applying the selected sort order.
- Event delegation handles course cards, category cards, footer category links, filter chips, and course enrollment actions.
- `showCourseDetails` fills an accessible native `<dialog>` with the selected course; the close button, backdrop, and Escape key dismiss it.
- The registration handler validates all required values, checks email/phone/password rules and matching passwords, blocks repeat enrollment for the same email/course, and stores non-sensitive registration details in local storage.
- The contact handler validates its required fields and displays a demo-only confirmation rather than pretending to send a message to a server.
- Small helpers escape generated text, update accessible validation states, manage the mobile menu, and display the current year.

## HTML, CSS, and JavaScript concepts demonstrated

- **HTML:** semantic landmarks (`header`, `nav`, `main`, `section`, and `footer`), heading hierarchy, accessible labels, form controls, native dialog, links, and live status regions.
- **CSS:** custom properties, reusable components, Grid and Flexbox, gradients, responsive media queries, focus/hover states, CSS-drawn illustrations, and `prefers-reduced-motion`.
- **JavaScript:** arrays and objects, functions, template literals, DOM selection and rendering, event listeners and delegation, filtering/sorting, form events and validation, `localStorage`, JSON, and native dialog methods.

## Viva questions and answers

1. **Why is the course catalog stored in a JavaScript array?**  
   It keeps course content structured in one place and lets the page render and filter cards consistently without repeating the HTML.

2. **How does the search work?**  
   On each input event, the script compares the lowercase search text with course titles, instructor names, categories, and descriptions, then re-renders the matching cards.

3. **How are multiple filters combined?**  
   A course must match the text query and every selected category or difficulty value. Sorting is applied to that filtered result.

4. **What is event delegation, and where is it used?**  
   A single listener on a parent handles clicks on its child controls. It is used for dynamically generated course cards, categories, and filter chips.

5. **How does the course details dialog open and close?**  
   JavaScript fills a native HTML `<dialog>` with the chosen course and calls `showModal()`. The close button, backdrop click, and built-in Escape behavior close it.

6. **What does `localStorage` do in this project?**  
   It keeps demo registration records in the same browser between visits. It is not a server or shared database, and users can clear it in browser settings.

7. **Why are passwords not stored in `localStorage`?**  
   Browser storage is not appropriate for credentials. The password is only checked in the form and is excluded from the saved registration record.

8. **How does the layout adapt to small screens?**  
   CSS media queries switch the navigation to a toggleable menu, adjust the grid columns and spacing, and reorganize the forms and content.

9. **What is the purpose of `aria-live` and `aria-invalid`?**  
   `aria-live` makes changing result and form messages available to assistive technology; `aria-invalid` marks fields that need correction.

10. **Why does the contact form not send a message?**  
    This assignment is a front-end-only demonstration without a backend. The form validates the input and clearly reports that it has not contacted a server.

"use strict";

const categories = [
  { name: "Artificial Intelligence & Machine Learning", shortName: "AI & Machine Learning", icon: "✧", color: "#efedff", ink: "#6557d8" },
  { name: "Web Development", shortName: "Web Development", icon: "</>", color: "#e5f2ff", ink: "#3774c9" },
  { name: "Data Science", shortName: "Data Science", icon: "▥", color: "#e4f5ef", ink: "#278664" },
  { name: "Programming", shortName: "Programming", icon: "⌘", color: "#fff1df", ink: "#d38728" },
  { name: "Cybersecurity", shortName: "Cybersecurity", icon: "⬡", color: "#ffeaed", ink: "#c75269" },
  { name: "Cloud Computing", shortName: "Cloud Computing", icon: "☁", color: "#e7f4fa", ink: "#327f9b" },
  { name: "UI/UX Design", shortName: "UI/UX Design", icon: "◈", color: "#ffeafa", ink: "#bd5da0" },
  { name: "Business & Management", shortName: "Business & Management", icon: "↗", color: "#fff4d9", ink: "#b88120" }
];

const courses = [
  {
    id: "python-beginners", title: "Python for Beginners", instructor: "Maya Patel", category: "Programming", duration: "8 weeks", hours: "24 hours", level: "Beginner", rating: 4.9, reviews: 1248, price: 39, symbol: "Py", palette: ["#326d93", "#70b8bd"],
    description: "Start your programming journey with Python, one of the most versatile and beginner-friendly languages. Write real programs from your first lesson and build a strong foundation for what comes next.",
    learn: ["Write and run Python programs", "Use variables, loops, and functions", "Work with lists and dictionaries", "Build a practical mini project"],
    syllabus: ["Getting started with Python", "Variables, values, and decisions", "Loops and reusable functions", "Collections and working with data", "Build and share a mini project"]
  },
  {
    id: "full-stack-web", title: "Full Stack Web Development", instructor: "Jordan Lee", category: "Web Development", duration: "12 weeks", hours: "42 hours", level: "Intermediate", rating: 4.8, reviews: 987, price: 69, symbol: "</>", palette: ["#3459a8", "#8c80dc"],
    description: "Learn how the web works from the first line of HTML to a polished, interactive application. Practice front-end fundamentals, responsive layouts, and modern JavaScript project patterns.",
    learn: ["Structure pages with semantic HTML", "Create responsive interfaces with CSS", "Add interactions with JavaScript", "Plan and build a complete web project"],
    syllabus: ["How the web works", "HTML foundations and accessibility", "CSS layouts and responsive design", "JavaScript and browser interactions", "Build a portfolio-ready project"]
  },
  {
    id: "machine-learning-fundamentals", title: "Machine Learning Fundamentals", instructor: "Dr. Elena Morris", category: "Artificial Intelligence & Machine Learning", duration: "10 weeks", hours: "32 hours", level: "Intermediate", rating: 4.9, reviews: 746, price: 59, symbol: "ML", palette: ["#473882", "#8d70c8"],
    description: "Understand the ideas behind machine learning and learn to approach data-driven problems thoughtfully. Explore core model types, evaluation, and responsible use through guided examples.",
    learn: ["Explain supervised and unsupervised learning", "Prepare data for a model", "Compare model performance", "Recognize common sources of bias"],
    syllabus: ["A practical introduction to ML", "Preparing and understanding data", "Learning from examples", "Evaluating and improving models", "Responsible machine learning"]
  },
  {
    id: "data-science-python", title: "Data Science with Python", instructor: "Nina Okafor", category: "Data Science", duration: "9 weeks", hours: "30 hours", level: "Intermediate", rating: 4.8, reviews: 812, price: 54, symbol: "DS", palette: ["#1d755f", "#71bba0"],
    description: "Turn raw data into clear, useful insights. Build a repeatable workflow for exploring, cleaning, visualizing, and communicating data with Python.",
    learn: ["Explore and clean datasets", "Summarize data with Python", "Build clear charts and visualizations", "Communicate evidence-based findings"],
    syllabus: ["The data science workflow", "Python tools for working with data", "Cleaning and exploring datasets", "Visualization and storytelling", "Presenting a data project"]
  },
  {
    id: "java-masterclass", title: "Java Programming Masterclass", instructor: "Carlos Rivera", category: "Programming", duration: "11 weeks", hours: "38 hours", level: "Advanced", rating: 4.7, reviews: 632, price: 64, symbol: "Jv", palette: ["#a94334", "#e7a25d"],
    description: "Deepen your Java skills with object-oriented design, collections, and practical application structure. Build confidence reading, organizing, and extending larger programs.",
    learn: ["Apply object-oriented programming principles", "Use collections and generics", "Organize robust Java applications", "Test and debug Java code"],
    syllabus: ["Java language essentials", "Classes, objects, and interfaces", "Collections and generics", "Exceptions and testing", "Design and build an application"]
  },
  {
    id: "cybersecurity-essentials", title: "Cybersecurity Essentials", instructor: "Priya Nair", category: "Cybersecurity", duration: "6 weeks", hours: "18 hours", level: "Beginner", rating: 4.8, reviews: 904, price: 0, symbol: "⛨", palette: ["#a83f58", "#eb8a83"],
    description: "Build a practical foundation in digital safety. Learn the security principles, common risks, and everyday habits that help protect accounts, devices, and information.",
    learn: ["Describe core security principles", "Recognize common online threats", "Practice safer account and device habits", "Understand privacy and responsible reporting"],
    syllabus: ["Foundations of digital security", "Accounts, identity, and privacy", "Recognizing common threats", "Safer devices and networks", "Building a personal security checklist"]
  },
  {
    id: "cloud-fundamentals", title: "Cloud Computing Fundamentals", instructor: "Samir Gupta", category: "Cloud Computing", duration: "7 weeks", hours: "21 hours", level: "Beginner", rating: 4.6, reviews: 519, price: 34, symbol: "☁", palette: ["#29718f", "#70bdd1"],
    description: "Get comfortable with the concepts behind cloud computing. Explore service models, deployment options, and the practical trade-offs teams consider when using cloud services.",
    learn: ["Explain cloud service and deployment models", "Understand core cloud architecture concepts", "Compare scalability and availability choices", "Identify cloud security responsibilities"],
    syllabus: ["What cloud computing means", "Service and deployment models", "Core architecture concepts", "Reliability, cost, and security", "Plan a simple cloud solution"]
  },
  {
    id: "ui-ux-fundamentals", title: "UI/UX Design Fundamentals", instructor: "Ava Chen", category: "UI/UX Design", duration: "6 weeks", hours: "20 hours", level: "Beginner", rating: 4.9, reviews: 1102, price: 45, symbol: "◈", palette: ["#ad528e", "#ed9ec4"],
    description: "Learn to make digital experiences feel intuitive and delightful. Practice user-centered thinking, simple wireframes, and the visual design principles behind clear interfaces.",
    learn: ["Understand user-centered design", "Map a basic user journey", "Create clear wireframes and layouts", "Use hierarchy, type, and color with purpose"],
    syllabus: ["What makes an experience work", "Research and user journeys", "Wireframing ideas clearly", "Visual hierarchy and interface patterns", "Present and refine a design"]
  },
  {
    id: "advanced-javascript", title: "Advanced JavaScript", instructor: "Theo Bennett", category: "Web Development", duration: "8 weeks", hours: "28 hours", level: "Advanced", rating: 4.8, reviews: 673, price: 49, symbol: "JS", palette: ["#a77824", "#edcc65"],
    description: "Take your JavaScript beyond the basics. Explore modern language features, asynchronous workflows, and patterns for writing maintainable browser applications.",
    learn: ["Use modern JavaScript syntax confidently", "Work with asynchronous operations", "Organize reusable application logic", "Handle browser events and data reliably"],
    syllabus: ["Modern JavaScript essentials", "Scope, closures, and composition", "Promises and asynchronous patterns", "Modules and application structure", "Build an interactive web application"]
  },
  {
    id: "ai-basics", title: "Artificial Intelligence Basics", instructor: "Dr. Elena Morris", category: "Artificial Intelligence & Machine Learning", duration: "5 weeks", hours: "16 hours", level: "Beginner", rating: 4.7, reviews: 785, price: 29, symbol: "✧", palette: ["#5442a5", "#a18ae7"],
    description: "Get a clear, approachable introduction to artificial intelligence. Discover how AI systems are used, where their limits lie, and how to think critically about their impact.",
    learn: ["Describe important AI concepts", "Recognize real-world AI applications", "Understand the role of data in AI", "Discuss ethical questions and limitations"],
    syllabus: ["What is artificial intelligence?", "A brief history of AI", "Learning systems and data", "AI in everyday life", "Ethics, limitations, and the future"]
  },
  {
    id: "sql-database-management", title: "SQL and Database Management", instructor: "Marcus Williams", category: "Data Science", duration: "7 weeks", hours: "22 hours", level: "Beginner", rating: 4.8, reviews: 931, price: 35, symbol: "SQL", palette: ["#336c56", "#91c5a5"],
    description: "Learn how structured data is stored, organized, and queried. Write useful SQL queries and understand the principles that keep a database consistent and easy to work with.",
    learn: ["Write clear queries to retrieve data", "Filter, sort, and summarize records", "Join related tables", "Understand basic database design"],
    syllabus: ["Tables, records, and relationships", "Selecting and filtering data", "Summaries and grouping", "Joining related tables", "Database design fundamentals"]
  },
  {
    id: "deep-learning-intro", title: "Introduction to Deep Learning", instructor: "Omar Hassan", category: "Business & Management", duration: "9 weeks", hours: "29 hours", level: "Advanced", rating: 4.6, reviews: 438, price: 74, symbol: "DL", palette: ["#3d4d95", "#859ee2"],
    description: "Explore the building blocks of deep learning and neural networks. Develop an intuition for how these systems learn, what they can do, and how to evaluate their results responsibly.",
    learn: ["Explain neural network fundamentals", "Understand training and evaluation concepts", "Recognize common deep learning applications", "Consider limitations and responsible use"],
    syllabus: ["Neural networks explained", "Layers, weights, and learning", "Training and evaluating models", "Applications and practical limitations", "Responsible use of deep learning"]
  },
  {
    id: "product-management", title: "Foundations of Product Management", instructor: "Leah Thompson", category: "Business & Management", duration: "6 weeks", hours: "19 hours", level: "Beginner", rating: 4.7, reviews: 386, price: 42, symbol: "PM", palette: ["#916b2c", "#e0b766"],
    description: "Learn how successful products are shaped from an initial idea to a thoughtful user experience. Practice prioritization, customer discovery, and clear collaboration across a product team.",
    learn: ["Understand the product lifecycle", "Identify user needs and opportunities", "Prioritize ideas with clear criteria", "Communicate product decisions to a team"],
    syllabus: ["What product management is", "Discovering customer needs", "Defining problems and opportunities", "Prioritization and product roadmaps", "Working with a cross-functional team"]
  }
];

const courseGrid = document.querySelector("#course-grid");
const categoryGrid = document.querySelector("#category-grid");
const categoryFilter = document.querySelector("#category-filter");
const difficultyFilter = document.querySelector("#difficulty-filter");
const searchInput = document.querySelector("#course-search");
const sortFilter = document.querySelector("#sort-filter");
const courseCount = document.querySelector("#course-count");
const emptyState = document.querySelector("#empty-state");
const activeFilterRow = document.querySelector("#active-filter-row");
const dialog = document.querySelector("#course-dialog");
const dialogContent = document.querySelector("#dialog-content");
const registrationForm = document.querySelector("#registration-form");
const registrationMessage = document.querySelector("#registration-message");
const contactForm = document.querySelector("#contact-form");
const contactMessage = document.querySelector("#contact-message");
const registrationCourse = document.querySelector("#registration-course");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function createCourseArtwork(course) {
  const [start, end] = course.palette;
  const title = escapeHtml(course.title);
  const symbol = escapeHtml(course.symbol);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="420" viewBox="0 0 720 420"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${start}"/><stop offset="1" stop-color="${end}"/></linearGradient><radialGradient id="r"><stop stop-color="#fff" stop-opacity=".24"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="720" height="420" fill="url(#g)"/><circle cx="590" cy="70" r="220" fill="url(#r)"/><circle cx="610" cy="320" r="150" fill="#fff" opacity=".06"/><path d="M0 335 Q180 255 340 350 T720 300 V420 H0Z" fill="#101b40" opacity=".12"/><rect x="260" y="115" width="200" height="170" rx="45" fill="#fff" fill-opacity=".12" stroke="#fff" stroke-opacity=".35" stroke-width="2" transform="rotate(-7 360 200)"/><text x="360" y="214" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="${course.symbol.length > 3 ? 47 : 66}" font-weight="700" fill="#fff">${symbol}</text><text x="36" y="372" font-family="Arial,sans-serif" font-size="16" font-weight="600" fill="#fff" fill-opacity=".92">${title}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => {
    const courseCount = courses.filter((course) => course.category === category.name).length;
    return `
    <button class="category-card" type="button" data-category="${escapeHtml(category.name)}" aria-label="Browse ${escapeHtml(category.name)} courses">
      <span class="category-icon" style="color:${category.ink};background:${category.color}" aria-hidden="true">${escapeHtml(category.icon)}</span>
      <span><h3>${escapeHtml(category.shortName)}</h3><p>${courseCount} ${courseCount === 1 ? "course" : "courses"}</p></span>
    </button>`;
  }).join("");
}

function renderCategoryOptions() {
  const options = categories.map((category) => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.shortName)}</option>`).join("");
  categoryFilter.insertAdjacentHTML("beforeend", options);
  registrationCourse.insertAdjacentHTML("beforeend", courses.map((course) => `<option value="${escapeHtml(course.id)}">${escapeHtml(course.title)}</option>`).join(""));
}

function courseCard(course) {
  const price = course.price === 0 ? '<span class="course-price free">Free</span>' : `<span class="course-price">$${course.price}</span>`;
  return `
    <article class="course-card">
      <div class="course-cover" style="--course-bg:linear-gradient(135deg,${course.palette[0]},${course.palette[1]})">
        <img src="${createCourseArtwork(course)}" alt="Illustrated ${escapeHtml(course.title)} course thumbnail" loading="lazy">
        <span class="course-category-tag">${escapeHtml(categories.find((category) => category.name === course.category)?.shortName || course.category)}</span>
      </div>
      <div class="course-card-body">
        <div class="course-meta-top"><span class="course-level">${escapeHtml(course.level)}</span><span class="course-rating"><span aria-hidden="true">★</span> ${course.rating.toFixed(1)} <span class="sr-only">rating</span> (${course.reviews.toLocaleString()})</span></div>
        <h3>${escapeHtml(course.title)}</h3>
        <p class="course-instructor">By ${escapeHtml(course.instructor)}</p>
        <div class="course-facts"><span>${escapeHtml(course.duration)}</span><span>${escapeHtml(course.hours)}</span></div>
        <div class="course-card-footer">${price}<button class="details-button" type="button" data-course-id="${escapeHtml(course.id)}">View details <span aria-hidden="true">→</span></button></div>
      </div>
    </article>`;
}

function getVisibleCourses() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedLevel = difficultyFilter.value;
  const matching = courses.filter((course) => {
    const matchesText = !query || `${course.title} ${course.instructor} ${course.category} ${course.description}`.toLowerCase().includes(query);
    return matchesText && (!selectedCategory || course.category === selectedCategory) && (!selectedLevel || course.level === selectedLevel);
  });

  switch (sortFilter.value) {
    case "price-low": matching.sort((first, second) => first.price - second.price || first.title.localeCompare(second.title)); break;
    case "price-high": matching.sort((first, second) => second.price - first.price || first.title.localeCompare(second.title)); break;
    case "rating": matching.sort((first, second) => second.rating - first.rating || second.reviews - first.reviews); break;
    default: break;
  }
  return matching;
}

function renderActiveFilters() {
  const filters = [];
  if (searchInput.value.trim()) filters.push({ label: `Search: ${searchInput.value.trim()}`, clear: () => { searchInput.value = ""; } });
  if (categoryFilter.value) filters.push({ label: categories.find((category) => category.name === categoryFilter.value)?.shortName || categoryFilter.value, clear: () => { categoryFilter.value = ""; } });
  if (difficultyFilter.value) filters.push({ label: difficultyFilter.value, clear: () => { difficultyFilter.value = ""; } });
  activeFilterRow.innerHTML = filters.map((filter, index) => `<span class="filter-chip">${escapeHtml(filter.label)}<button type="button" data-clear-filter="${index}" aria-label="Remove ${escapeHtml(filter.label)} filter">×</button></span>`).join("");
  activeFilterRow._filters = filters;
}

function renderCourses() {
  const visibleCourses = getVisibleCourses();
  courseGrid.innerHTML = visibleCourses.map(courseCard).join("");
  courseCount.textContent = String(visibleCourses.length);
  emptyState.hidden = visibleCourses.length !== 0;
  courseGrid.hidden = visibleCourses.length === 0;
  renderActiveFilters();
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "";
  difficultyFilter.value = "";
  sortFilter.value = "featured";
  renderCourses();
}

function showCourseDetails(courseId) {
  const course = courses.find((item) => item.id === courseId);
  if (!course) return;
  const category = categories.find((item) => item.name === course.category);
  const price = course.price === 0 ? '<span class="dialog-price free">Free</span>' : `<span class="dialog-price">$${course.price}</span>`;
  dialogContent.innerHTML = `
    <div class="dialog-cover" style="--course-bg:linear-gradient(135deg,${course.palette[0]},${course.palette[1]})">
      <img src="${createCourseArtwork(course)}" alt="Illustrated ${escapeHtml(course.title)} course thumbnail">
      <span class="course-cover-symbol" aria-hidden="true">${escapeHtml(course.symbol)}</span>
    </div>
    <div class="dialog-body">
      <div class="course-meta-top"><span class="course-level">${escapeHtml(category?.shortName || course.category)}</span><span class="course-rating"><span aria-hidden="true">★</span> ${course.rating.toFixed(1)} (${course.reviews.toLocaleString()} reviews)</span></div>
      <h2 id="dialog-title">${escapeHtml(course.title)}</h2>
      <p class="dialog-instructor">Taught by ${escapeHtml(course.instructor)}</p>
      <p class="dialog-description">${escapeHtml(course.description)}</p>
      <div class="dialog-info-row"><span>◷ ${escapeHtml(course.duration)}</span><span>${escapeHtml(course.hours)} of learning</span><span>${escapeHtml(course.level)}</span></div>
      <h3>What you’ll learn</h3>
      <ul class="dialog-list">${course.learn.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      <h3>Course syllabus</h3>
      <ol class="syllabus-list">${course.syllabus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
      <div class="dialog-footer">${price}<button class="button" type="button" data-enroll-course="${escapeHtml(course.id)}">Enroll now <span aria-hidden="true">→</span></button></div>
    </div>`;
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeCourseDetails() {
  if (dialog.open) dialog.close();
  document.body.classList.remove("dialog-open");
}

function setFormMessage(element, message, isSuccess = false) {
  element.textContent = message;
  element.classList.toggle("success", isSuccess);
}

function markFieldValidity(field, valid) {
  if (valid) field.removeAttribute("aria-invalid");
  else field.setAttribute("aria-invalid", "true");
}

function validateRegistration(formData) {
  const name = formData.get("fullName").trim();
  const email = formData.get("email").trim();
  const phone = formData.get("phone").trim();
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const phoneDigits = phone.replace(/\D/g, "");
  const fields = [...registrationForm.querySelectorAll("input[required], select[required]")];
  let valid = true;

  for (const field of fields) {
    const fieldValid = field.type === "checkbox" ? field.checked : field.value.trim().length > 0;
    markFieldValidity(field, fieldValid);
    valid = fieldValid && valid;
  }
  const emailField = registrationForm.elements.email;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  markFieldValidity(emailField, emailValid);
  valid = emailValid && valid;

  const phoneField = registrationForm.elements.phone;
  const phoneValid = /^\+?[\d\s().-]+$/.test(phone) && phoneDigits.length >= 7 && phoneDigits.length <= 15;
  markFieldValidity(phoneField, phoneValid);
  valid = phoneValid && valid;

  const passwordField = registrationForm.elements.password;
  const passwordValid = password.length >= 8;
  markFieldValidity(passwordField, passwordValid);
  valid = passwordValid && valid;

  const confirmField = registrationForm.elements.confirmPassword;
  const confirmationValid = confirmPassword.length > 0 && password === confirmPassword;
  markFieldValidity(confirmField, confirmationValid);
  valid = confirmationValid && valid;

  if (!valid) {
    const firstInvalid = registrationForm.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    setFormMessage(registrationMessage, "Please check the highlighted fields. Use a valid email and phone number, a password of at least 8 characters, and matching passwords.");
    return null;
  }
  return { name, email, courseId: formData.get("course") };
}

function handleRegistration(event) {
  event.preventDefault();
  setFormMessage(registrationMessage, "");
  const details = validateRegistration(new FormData(registrationForm));
  if (!details) return;

  const selectedCourse = courses.find((course) => course.id === details.courseId);
  if (!selectedCourse) {
    setFormMessage(registrationMessage, "Please select a valid course before registering.");
    registrationCourse.focus();
    return;
  }

  const storageKey = "learnSphereRegistrations";
  let registrations;
  try {
    const stored = localStorage.getItem(storageKey);
    registrations = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(registrations)) throw new Error("Stored registration data is not a list.");
  } catch (error) {
    console.error("Could not read registration records from localStorage.", error);
    setFormMessage(registrationMessage, "We couldn’t access saved registrations in this browser. Check your browser storage settings and try again.");
    return;
  }

  const alreadyRegistered = registrations.some((registration) =>
    registration.email?.toLowerCase() === details.email.toLowerCase() && registration.courseId === details.courseId
  );
  if (alreadyRegistered) {
    setFormMessage(registrationMessage, `You’re already registered for ${selectedCourse.title} with this email address.`);
    return;
  }

  const record = {
    name: details.name,
    email: details.email,
    courseId: details.courseId,
    courseTitle: selectedCourse.title,
    education: registrationForm.elements.education.value,
    registeredAt: new Date().toISOString()
  };
  try {
    localStorage.setItem(storageKey, JSON.stringify([...registrations, record]));
  } catch (error) {
    console.error("Could not save registration to localStorage.", error);
    setFormMessage(registrationMessage, "Your browser couldn’t save this registration. Check available storage and try again.");
    return;
  }
  registrationForm.reset();
  registrationForm.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
  setFormMessage(registrationMessage, `You’re all set, ${record.name}! Your registration for ${record.courseTitle} has been saved in this browser.`, true);
}

function handleContact(event) {
  event.preventDefault();
  setFormMessage(contactMessage, "");
  const fields = [...contactForm.querySelectorAll("[required]")];
  let valid = true;
  for (const field of fields) {
    const fieldValid = field.value.trim().length > 0 && field.checkValidity();
    markFieldValidity(field, fieldValid);
    valid = fieldValid && valid;
  }
  if (!valid) {
    contactForm.querySelector('[aria-invalid="true"]')?.focus();
    setFormMessage(contactMessage, "Please complete all fields with a valid email address. Your message must be at least 10 characters.");
    return;
  }
  const name = contactForm.elements.contactName.value.trim();
  contactForm.reset();
  contactForm.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
  setFormMessage(contactMessage, `Thanks, ${name}! Your message is ready. This demo does not send messages to a server.`, true);
}

function closeMobileNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

renderCategories();
renderCategoryOptions();
renderCourses();
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

searchInput.addEventListener("input", renderCourses);
categoryFilter.addEventListener("change", renderCourses);
difficultyFilter.addEventListener("change", renderCourses);
sortFilter.addEventListener("change", renderCourses);
document.querySelector("#clear-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-clear").addEventListener("click", resetFilters);

categoryGrid.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (!categoryButton) return;
  categoryFilter.value = categoryButton.dataset.category;
  renderCourses();
  document.querySelector("#courses").scrollIntoView({ behavior: "smooth" });
});

activeFilterRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-clear-filter]");
  if (!button) return;
  activeFilterRow._filters[Number(button.dataset.clearFilter)]?.clear();
  renderCourses();
});

courseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course-id]");
  if (button) showCourseDetails(button.dataset.courseId);
});

document.querySelector("#dialog-content").addEventListener("click", (event) => {
  const button = event.target.closest("[data-enroll-course]");
  if (!button) return;
  registrationCourse.value = button.dataset.enrollCourse;
  closeCourseDetails();
  document.querySelector("#register").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => registrationForm.elements.fullName.focus({ preventScroll: true }), 450);
});

document.querySelector(".dialog-close").addEventListener("click", closeCourseDetails);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeCourseDetails();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

registrationForm.addEventListener("submit", handleRegistration);
registrationForm.addEventListener("input", (event) => {
  if (event.target.matches("input, select")) {
    event.target.removeAttribute("aria-invalid");
    setFormMessage(registrationMessage, "");
  }
});
contactForm.addEventListener("submit", handleContact);
contactForm.addEventListener("input", (event) => {
  if (event.target.matches("input, textarea")) {
    event.target.removeAttribute("aria-invalid");
    setFormMessage(contactMessage, "");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMobileNavigation();
});
document.querySelectorAll("[data-footer-category]").forEach((link) => {
  link.addEventListener("click", () => {
    categoryFilter.value = link.dataset.footerCategory;
    renderCourses();
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) closeMobileNavigation();
});

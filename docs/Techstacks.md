# Tech Stacks - OGMS Lubo National High School

## 🛠️ Development Environment

### Visual Studio Code (VSCode)

**Code Editor** - Microsoft's free, open-source code editor with built-in support for HTML, CSS, JavaScript, debugging, Git integration, and thousands of extensions.

### XAMPP

**Local Web Server Stack** - Cross-platform Apache + MySQL + PHP + Perl package. Used here to serve the static HTML/CSS/JS files via Apache and potentially host MySQL for future backend.

### MySQL

**Database** - Open-source relational database. Currently not integrated (uses mock data), but ready for real data storage when backend is added.

## 🌐 Frontend Technologies

### HTML5

**Markup** - Semantic HTML for structure, forms, and modern web standards.

### CSS3 + Custom Styles

**Styling** - Modern CSS with CSS variables, grid/flexbox, animations, plus custom styles in `assets/css/style.css`.

### Bootstrap 5.3

**CSS Framework** - Responsive grid system, components (modals, buttons, cards), utilities. Loaded via CDN for rapid UI development.

### Vanilla JavaScript (ES6+)

**Logic & Interactivity** - Pure browser JavaScript for all functionality: authentication, navigation, data manipulation, DOM updates. No frameworks.

### Chart.js

**Data Visualization** - Simple, flexible charting library for analytics dashboards (bar/line charts, etc.).

### Font Awesome 6.5

**Icons** - Vector icons library for UI elements (loaded via CDN).

## 💾 Data Management

### localStorage API

**Client-side Storage** - Browser storage for user sessions, mock student/grade data persistence.

### Mock Data (`data/mock-data.js`)

**Demo Data** - JSON arrays for students, teachers, subjects, grades with CRUD helpers. Simulates backend for development/testing.

---

**Note**: Current implementation is a fully-functional **static frontend demo**. No server-side PHP/API yet. XAMPP serves files via `http://localhost/OGMS-Lubo-National-High-School/`. MySQL ready for future dynamic features (e.g., real grade storage).

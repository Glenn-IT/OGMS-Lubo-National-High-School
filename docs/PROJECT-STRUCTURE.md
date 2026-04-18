# OGMS – Online Grade Monitoring System

## Lubo National High School — Project Documentation

---

## 📁 Project Structure

```
OGMS-Lubo-National-High-School/
│
├── index.html                        ← Login page (entry point)
│
├── assets/
│   ├── css/
│   │   ├── style.css                 ← Global stylesheet (all UI variables, components)
│   │   └── print.css                 ← Print-specific styles
│   └── js/
│       └── app.js                    ← Core JS: Toast, Loading, Auth, Helpers
│
├── data/
│   └── mock-data.js                  ← All mock data + localStorage accessors
│
├── components/
│   ├── student-sidebar.html          ← Student sidebar component (reference)
│   └── admin-sidebar.html            ← Admin sidebar component (reference)
│
├── views/
│   ├── student/
│   │   ├── dashboard.html            ← Student dashboard
│   │   ├── grades.html               ← View grades by quarter
│   │   ├── analytics.html            ← Performance charts
│   │   ├── reports.html              ← Printable report card
│   │   ├── profile.html              ← Student profile + edit
│   │   ├── signup.html               ← Student registration
│   │   └── forgot-password.html      ← Password reset UI
│   │
│   └── admin/
│       ├── dashboard.html            ← Admin dashboard + charts
│       ├── manage-grades.html        ← Grade CRUD
│       ├── manage-students.html      ← Student CRUD
│       ├── analytics.html            ← Class/subject analytics
│       ├── reports.html              ← Printable reports (3 types)
│       ├── sms.html                  ← Simulated SMS notifications
│       └── profile.html              ← Admin profile + credentials
│
└── docs/
    ├── PROJECT-STRUCTURE.md          ← This file
    ├── FEATURES.md                   ← Full feature list
    └── USER-GUIDE.md                 ← How to use the system
```

---

## 🏗️ Architecture

The project follows a **Frontend MVC-style** pattern:

| Layer            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| **Data (Model)** | `data/mock-data.js` – All mock data, localStorage CRUD helpers |
| **Views**        | `/views/student/` and `/views/admin/` – HTML pages             |
| **Controller**   | Inline `<script>` blocks in each page – page-specific logic    |
| **Components**   | `/components/` – Reusable HTML snippets (sidebar, navbar)      |
| **Assets**       | `/assets/css/` and `/assets/js/` – Shared styles and utilities |

---

## 🔑 Demo Credentials

| Role    | Email                 | Password     |
| ------- | --------------------- | ------------ |
| Student | `student@lnhs.edu.ph` | `student123` |
| Admin   | `admin@lnhs.edu.ph`   | `admin123`   |

---

## 🛠️ Tech Stack

- **HTML5** – Semantic markup
- **CSS3 + Bootstrap 5.3** – Layout, grid, modals
- **Vanilla JavaScript (ES6+)** – All interactions
- **Chart.js** – Data visualization
- **Font Awesome 6.5** – Icons
- **localStorage** – Data persistence (no backend)

---

## 📦 Mock Data Summary

| Entity   | Count | Notes                                |
| -------- | ----- | ------------------------------------ |
| Students | 5     | Pre-seeded, can add more             |
| Subjects | 8     | All Grade 10 subjects                |
| Teachers | 8     | One per subject                      |
| Grades   | 160   | 5 students × 8 subjects × 4 quarters |
| Admin    | 1     | Hardcoded, editable via UI           |

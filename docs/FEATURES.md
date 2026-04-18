# OGMS – Feature Documentation

## Online Grade Monitoring System — Lubo National High School

---

## 🎓 STUDENT FEATURES

### 1. Authentication

| Feature         | Details                                                |
| --------------- | ------------------------------------------------------ |
| Login           | Email + password, validates against localStorage       |
| Sign Up         | Creates a new student account, stored in localStorage  |
| Forgot Password | UI-only, checks if email exists, shows success screen  |
| Session         | Managed via `sessionStorage` (clears on browser close) |

### 2. Student Dashboard

- **Welcome Banner** – Personalized with student name, section, school year
- **Stat Cards:**
  - Average Grade (overall)
  - Subjects Enrolled (count)
  - Latest Grade (4th quarter best)
  - Passed Subjects (per quarter)
- **Recent Grades Table** – 4th quarter grades with color-coded indicators
- **Mini Doughnut Chart** – Pass/Fail rate visualization
- **Quick Actions** – Fast navigation buttons

### 3. View Grades (`grades.html`)

- **Period Selector** – Toggle between All Periods, 1st–4th Quarter
- **Grade Table** columns: Subject, Teacher, Grade, Description, Remarks, Action
- **View Details Modal** – Shows grades per quarter for a subject, with averages
- **Summary Cards** – Period average, passed, failed, highest (per period)
- **Grade Color Coding:**
  - 🟢 Green (≥90) = Outstanding
  - 🔵 Blue (85–89) = Very Satisfactory
  - 🟣 Purple (80–84) = Satisfactory
  - 🟡 Yellow (75–79) = Fairly Satisfactory
  - 🔴 Red (<75) = Failed / Did Not Meet Expectations

### 4. Analytics (`analytics.html`)

- **Bar Chart** – Grades per subject (4th Quarter)
- **Line Chart** – Grade trend across 4 quarters
- **Radar Chart** – Overall average per subject (spider chart)
- **Summary Table** – Q1-Q4 grades + average per subject

### 5. Reports (`reports.html`)

- **Printable Report Card** with:
  - Student info (name, ID, grade level, section, guardian)
  - Subject grades for all quarters (Q1–Q4)
  - Average per subject + general average
  - Description and Remarks
  - Signature lines for Adviser, Registrar, Principal
- **Print Button** – Uses `window.print()` with CSS print styles

### 6. Profile (`profile.html`)

- View all personal and academic information
- **Edit Profile Modal** – Update name, contact, address, gender, birthdate, guardian
- **Change Password** – Optional password update in edit modal
- Changes saved to `localStorage`

---

## 🛡️ ADMIN FEATURES

### 1. Admin Authentication

- Hardcoded credentials (editable via Admin Profile page)
- Separate login tab on the login page

### 2. Admin Dashboard (`dashboard.html`)

- **Stat Cards:** Total Students, Total Subjects, Average Performance, Passing Rate
- **Doughnut Chart** – Pass/Fail ratio
- **Bar Chart** – Grade distribution by grade bucket (90–100, 85–89, etc.)
- **Recent Students Table**
- **Horizontal Bar Chart** – Subject averages

### 3. Manage Grades (`manage-grades.html`)

- **Searchable, filterable table** – by student name/ID, subject, period, remarks
- **Add Grade** – Modal with student/subject/period/grade selectors; prevents duplicates
- **Edit Grade** – Pre-filled modal; updates existing record
- **View Grade** – Detailed modal with full info
- **Delete Grade** – With confirmation dialog
- **Live Grade Preview** – Shows color, badge, and description as you type

### 4. Manage Students (`manage-students.html`)

- **Student table** with avatar initials, average grade, enrollment status
- **Search** – By name, ID, or email
- **Filter** – By grade level and section
- **Add Student** – Full form with all fields including credentials
- **Edit Student** – Pre-filled modal
- **View Student** – Profile modal with grade summary
- **Delete Student** – Also deletes associated grades

### 5. Analytics (`analytics.html`)

- **Class-wide summary stats** (avg, pass rate, highest, lowest)
- **Subject Averages Bar Chart** (class-wide)
- **Class Trend Line Chart** – Average per quarter
- **Doughnut Chart** – Per-subject average distribution
- **Student Ranking Table** – Sorted by average with medal icons 🥇🥈🥉

### 6. Reports (`reports.html`)

- **3 Report Types:**
  1. **Class Summary** – All students ranked by average, with stats summary
  2. **Subject Performance** – Per-subject: class avg, highest, lowest, pass/fail counts
  3. **Individual Student** – Full grade breakdown for a selected student
- **Period Filter** – Filter all reports by quarter or all periods
- **Print Button** – Clean print layout

### 7. SMS Notifications (`sms.html`) ⚠️ Simulated Only

- **Recipient types:** Single student / All students / Failed grade students
- **Message templates:** Grade report, Parent meeting, Submission reminder, Failed notice
- **Character counter** – Real-time (160 char limit)
- **Bulk Send** – One-click to all students
- **SMS Log** – Timestamped history of all "sent" messages
- **Clear Log** – With confirmation
- ⚠️ No actual SMS is sent — prototype only

### 8. Admin Profile (`profile.html`)

- View admin info (name, email, contact, position)
- **Edit Modal** – Update all fields + change password (with current password verification)
- System stats (students, grades encoded, SMS sent)

---

## 🎨 UI/UX Features

| Feature                     | Description                                                    |
| --------------------------- | -------------------------------------------------------------- |
| **Toast Notifications**     | Slide-in toasts (success/error/warning/info) with auto-dismiss |
| **Loading Overlay**         | Spinner overlay during simulated async operations              |
| **Grade Color Indicators**  | Color-coded grades throughout all tables and charts            |
| **Responsive Sidebar**      | Collapsible on mobile with overlay                             |
| **Modal-based CRUD**        | All create/edit/view operations in Bootstrap modals            |
| **Chart.js Visualizations** | Bar, Line, Doughnut, Radar charts                              |
| **Print Styles**            | Clean CSS print layout for reports                             |
| **Search & Filter**         | Real-time filtering on all management tables                   |
| **Confirmation Dialogs**    | Before all destructive operations                              |

---

## 🎨 Grade Color System

| Grade  | Color        | Description                        |
| ------ | ------------ | ---------------------------------- |
| 90–100 | 🟢 `#10b981` | Outstanding                        |
| 85–89  | 🔵 `#3b82f6` | Very Satisfactory                  |
| 80–84  | 🟣 `#6366f1` | Satisfactory                       |
| 75–79  | 🟡 `#f59e0b` | Fairly Satisfactory                |
| < 75   | 🔴 `#ef4444` | Did Not Meet Expectations (Failed) |

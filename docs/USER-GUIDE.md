# OGMS – User Guide

## Online Grade Monitoring System — Lubo National High School

---

## 🚀 Getting Started

### Requirements

- XAMPP installed and running (Apache)
- Browser: Chrome, Firefox, Edge (any modern browser)

### How to Launch

1. Place the project folder in `C:\xampp\htdocs\OGMS-Lubo-National-High-School\`
2. Start **Apache** from the XAMPP Control Panel
3. Open your browser and go to:
   ```
   http://localhost/OGMS-Lubo-National-High-School/
   ```
4. The login page will appear automatically

> **Note:** The system uses `localStorage` for all data. No database or PHP is required.

---

## 🔑 Demo Credentials

| Role    | Email                 | Password     |
| ------- | --------------------- | ------------ |
| Student | `student@lnhs.edu.ph` | `student123` |
| Admin   | `admin@lnhs.edu.ph`   | `admin123`   |

---

## 🎓 Student Guide

### Logging In

1. On the login page, make sure the **Student** tab is selected
2. Enter your email and password
3. Click **Login**
4. You will be redirected to your **Student Dashboard**

### Registering a New Account

1. From the login page, click **Sign up here**
2. Fill in all required fields:
   - Full Name, Student ID, Email, Password
   - Grade Level, Section, School Year, Guardian name/contact
3. Click **Create Account**
4. You'll be redirected to the login page — log in with your new credentials

### Forgot Password

1. From the login page, click **Forgot Password**
2. Enter your registered email address
3. Click **Reset Password** — a success screen will appear
   > ⚠️ This is a UI prototype — no actual email is sent

---

### Using the Student Dashboard

- View your **overall average**, number of subjects, and latest grades
- Check the **Pass/Fail doughnut chart** for a quick overview
- Use the **Quick Actions** buttons to jump to Grades, Analytics, or Reports
- The **Recent Grades table** shows your 4th Quarter grades

---

### Viewing Grades

1. Click **Grades** in the sidebar
2. Use the **period buttons** to filter by quarter (All, 1st, 2nd, 3rd, 4th)
3. The table shows: Subject, Teacher, Grade, Description, Remarks
4. Click the **👁 View** button to see a detailed breakdown of all 4 quarters for that subject

**Grade Descriptions:**

- 90–100 = Outstanding
- 85–89 = Very Satisfactory
- 80–84 = Satisfactory
- 75–79 = Fairly Satisfactory
- Below 75 = Did Not Meet Expectations (Failed)

---

### Using Analytics

1. Click **Analytics** in the sidebar
2. View 4 different charts:
   - **Bar Chart** – Your grades per subject
   - **Line Chart** – How your grades changed each quarter
   - **Radar Chart** – Subject performance spider view
3. Scroll down for the **Summary Table** comparing all quarters per subject

---

### Printing Your Report Card

1. Click **Reports** in the sidebar
2. Your printable report card is displayed automatically
3. Click the **🖨 Print Report Card** button
4. A print dialog will open — select your printer or save as PDF

---

### Managing Your Profile

1. Click **Profile** in the sidebar
2. View all your personal and academic information
3. To edit, click **✏ Edit Profile**
4. Update any fields and click **Save Changes**
5. To change your password, fill in the **New Password** field in the same modal

---

## 🛡️ Admin Guide

### Logging In

1. On the login page, click the **Admin** tab
2. Enter your admin email and password
3. Click **Login**
4. You will be redirected to the **Admin Dashboard**

---

### Admin Dashboard Overview

- **Stat Cards:** Total students, subjects, average performance, pass rate
- **Charts:** Pass/Fail pie, grade distribution, subject averages
- **Recent Students Table:** Quick overview of the latest additions

---

### Managing Grades

#### Adding a Grade

1. Click **Manage Grades** in the sidebar
2. Click the **+ Add Grade** button
3. Fill in the form:
   - Select Student, Subject, Quarter
   - Enter the Grade (0–100)
4. A **live preview** shows the color, badge, and description as you type
5. Click **Save Grade**

#### Editing a Grade

1. Find the grade in the table (use search/filter to narrow down)
2. Click the **✏ Edit** button
3. Modify the grade and click **Update Grade**

#### Deleting a Grade

1. Click the **🗑 Delete** button on any row
2. Confirm the deletion in the dialog

#### Filtering Grades

- Use the **Search** box (by student name or ID)
- Use the **Subject** dropdown filter
- Use the **Period** (quarter) filter
- Use the **Remarks** filter (Passed / Failed)

---

### Managing Students

#### Adding a Student

1. Click **Manage Students** in the sidebar
2. Click **+ Add Student**
3. Fill in the complete form including login credentials (email/password)
4. Click **Save Student**

#### Editing a Student

1. Find the student using search or grade/section filter
2. Click **✏ Edit**
3. Update any field and click **Update Student**

#### Viewing a Student

1. Click **👁 View** to open a detailed profile modal
2. Shows personal info + a grade summary per subject

#### Deleting a Student

1. Click **🗑 Delete**
2. Confirm the deletion
   > ⚠️ This also permanently removes all grade records for that student

---

### Analytics

1. Click **Analytics** in the sidebar
2. Review class-wide statistics, charts, and the **Student Ranking Table**
3. The ranking table is sorted by general average with 🥇🥈🥉 for the top 3

---

### Generating Reports

1. Click **Reports** in the sidebar
2. Choose a report type from the dropdown:
   - **Class Summary** – All students ranked by average
   - **Subject Performance** – Stats per subject
   - **Individual Student** – Select a specific student
3. Select a **Period** filter if needed
4. Click **Generate Report**
5. Click **🖨 Print Report** to print or save as PDF

---

### Sending SMS Notifications (Simulated)

1. Click **SMS Notifications** in the sidebar
2. Choose the **Recipient Type:**
   - **Single Student** – Select from dropdown
   - **All Students** – Sends to entire class
   - **Students with Failed Grades** – Auto-targets at-risk students
3. Optionally select a **Message Template** to auto-fill the message box
4. Edit the message if needed (watch the character counter — 160 char limit)
5. Click **Send SMS**
6. A loading animation plays, then a success toast appears
7. The message is logged in the **SMS Log** below with a timestamp

> ⚠️ No real SMS is sent — this is a prototype simulation

---

### Admin Profile

1. Click **Profile** in the sidebar
2. View your account information and system stats
3. Click **✏ Edit Profile** to update your information
4. To change your password:
   - Enter your **Current Password**
   - Enter and confirm your **New Password**
5. Click **Save Changes**

---

## 🔒 Logging Out

- Click the **Logout** button (top-right or in sidebar)
- You will be redirected to the login page
- Session is cleared automatically

---

## ❓ Troubleshooting

| Problem                       | Solution                                                              |
| ----------------------------- | --------------------------------------------------------------------- |
| "Incorrect email or password" | Use demo credentials shown on the login page                          |
| Charts not loading            | Ensure internet connection (Chart.js is loaded via CDN)               |
| Data lost after session       | Data persists in `localStorage` — clearing browser data will reset it |
| Print layout looks wrong      | Use Chrome or Edge for best print results                             |
| Page redirects to login       | Session expired — log in again                                        |

---

## 🗃️ Resetting All Data

To reset the system to factory defaults:

1. Open your browser's **Developer Tools** (F12)
2. Go to **Application** → **Local Storage**
3. Select `http://localhost`
4. Click **Clear All**
5. Reload the page — mock data will be re-seeded automatically

---

_OGMS – Lubo National High School © 2024. Prototype Version._

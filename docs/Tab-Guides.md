# 📱 Tab/Menu Guides - OGMS

Basic explanations for each menu tab in **Student** and **Admin** portals.

## 🎓 Student Portal

### 🏠 Dashboard

Student home screen showing quick overview: current average grade, subjects summary, recent activities, performance trends with **Chart.js graphs** (bar/line charts).

### 📚 Grades

Detailed grades view organized by **quarter**. Filter by subject/quarter, see numeric grades with color-coded cells (Outstanding=green, Failed=red). Calculate averages automatically.

### 📊 Analytics

Performance analytics with **interactive charts**: subject-wise trends, grade distribution pie chart, comparison across quarters. Hover for details.

### 📋 Reports

**Print-ready report card**. Select quarter → generate formatted report with all subjects, averages, remarks. **Print button** for PDF-like output (print.css optimized).

### 👤 Profile

View and edit personal info: name, email, password, student ID. Update via simple form, data persists in localStorage.

### ➕ Signup _(Login page)_

New student registration form. Enter details → creates mock account for demo.

### 🔑 Forgot Password _(Login page)_

Password recovery simulation. Enter email → shows reset instructions.

---

## 👨‍🏫 Admin Portal

### 🏠 Dashboard

Admin overview: total students, subjects stats, **charts for class averages**, recent grades entered, quick actions menu.

### 👥 Manage Students

**Full CRUD** for students: Add new student, edit details (name/email/password), delete. Search/filter table view.

### 📝 Manage Grades

**Grade entry system**: Select student + subject + quarter → input/edit grades. Bulk update, validation (75-100 range), auto-calculate averages.

### 📊 Analytics

Advanced admin analytics: **class performance charts**, subject averages, top/bottom performers list, quarterly trends comparison.

### 📋 Reports

**3 Report Types**:

1. Individual Student Report Card
2. Class Summary Report
3. Subject Performance Report  
   **Print-optimized** with custom CSS.

### 💬 SMS _(Simulation)_

Bulk SMS notifications preview. Select students → craft message → see simulation (no real SMS sent).

### 👤 Profile

Admin account management: view/edit name, email, password. Single admin account (admin@lnhs.edu.ph).

---

## 💡 Quick Tips

- **Responsive**: Works on mobile/desktop
- **Data**: All changes persist (localStorage)
- **Print**: Use browser print (Ctrl+P) for reports
- **Demo Mode**: Uses mock data - perfect for testing

**Full User Guide**: [USER-GUIDE.md](USER-GUIDE.md)

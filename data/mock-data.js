/**
 * OGMS Mock Data - Lubo National High School
 * Initializes all demo data into localStorage on first load
 */

function initMockData() {
  // ─── STUDENTS ────────────────────────────────────────────────────────────
  const defaultStudents = [
    {
      id: "S001",
      studentId: "2024-0001",
      firstName: "Juan",
      lastName: "dela Cruz",
      name: "Juan dela Cruz",
      gradeLevel: 10,
      section: "Rizal",
      email: "student@lnhs.edu.ph",
      password: "student123",
      contact: "09123456789",
      address: "Brgy. Lubo, Cavite City",
      gender: "Male",
      birthdate: "2008-05-15",
      guardianName: "Pedro dela Cruz",
      guardianContact: "09987654321",
      enrollmentStatus: "Enrolled",
      role: "student",
      avatar: null,
    },
    {
      id: "S002",
      studentId: "2024-0002",
      firstName: "Maria",
      lastName: "Santos",
      name: "Maria Santos",
      gradeLevel: 10,
      section: "Rizal",
      email: "maria@lnhs.edu.ph",
      password: "student123",
      contact: "09234567890",
      address: "Brgy. Lubo, Cavite City",
      gender: "Female",
      birthdate: "2008-03-22",
      guardianName: "Lourdes Santos",
      guardianContact: "09876543210",
      enrollmentStatus: "Enrolled",
      role: "student",
      avatar: null,
    },
    {
      id: "S003",
      studentId: "2024-0003",
      firstName: "Pedro",
      lastName: "Reyes",
      name: "Pedro Reyes",
      gradeLevel: 10,
      section: "Bonifacio",
      email: "pedro@lnhs.edu.ph",
      password: "student123",
      contact: "09345678901",
      address: "Brgy. Lubo, Cavite City",
      gender: "Male",
      birthdate: "2008-07-10",
      guardianName: "Jose Reyes",
      guardianContact: "09765432109",
      enrollmentStatus: "Enrolled",
      role: "student",
      avatar: null,
    },
    {
      id: "S004",
      studentId: "2024-0004",
      firstName: "Ana",
      lastName: "Garcia",
      name: "Ana Garcia",
      gradeLevel: 10,
      section: "Bonifacio",
      email: "ana@lnhs.edu.ph",
      password: "student123",
      contact: "09456789012",
      address: "Brgy. Lubo, Cavite City",
      gender: "Female",
      birthdate: "2008-11-05",
      guardianName: "Rosa Garcia",
      guardianContact: "09654321098",
      enrollmentStatus: "Enrolled",
      role: "student",
      avatar: null,
    },
    {
      id: "S005",
      studentId: "2024-0005",
      firstName: "Carlos",
      lastName: "Mendoza",
      name: "Carlos Mendoza",
      gradeLevel: 10,
      section: "Mabini",
      email: "carlos@lnhs.edu.ph",
      password: "student123",
      contact: "09567890123",
      address: "Brgy. Lubo, Cavite City",
      gender: "Male",
      birthdate: "2008-09-18",
      guardianName: "Elena Mendoza",
      guardianContact: "09543210987",
      enrollmentStatus: "Enrolled",
      role: "student",
      avatar: null,
    },
  ];

  // ─── SUBJECTS ─────────────────────────────────────────────────────────────
  const defaultSubjects = [
    {
      id: "SUB001",
      name: "Mathematics",
      code: "MATH",
      teacherId: "T001",
      teacher: "Mr. Roberto Santos",
    },
    {
      id: "SUB002",
      name: "Science",
      code: "SCI",
      teacherId: "T002",
      teacher: "Ms. Elena Reyes",
    },
    {
      id: "SUB003",
      name: "English",
      code: "ENG",
      teacherId: "T003",
      teacher: "Ms. Patricia Cruz",
    },
    {
      id: "SUB004",
      name: "Filipino",
      code: "FIL",
      teacherId: "T004",
      teacher: "Mr. Antonio Ramos",
    },
    {
      id: "SUB005",
      name: "Araling Panlipunan",
      code: "AP",
      teacherId: "T005",
      teacher: "Mrs. Carmen Flores",
    },
    {
      id: "SUB006",
      name: "MAPEH",
      code: "MAPEH",
      teacherId: "T006",
      teacher: "Mr. Joseph Villanueva",
    },
    {
      id: "SUB007",
      name: "TLE",
      code: "TLE",
      teacherId: "T007",
      teacher: "Ms. Grace Domingo",
    },
    {
      id: "SUB008",
      name: "Values Education",
      code: "VE",
      teacherId: "T008",
      teacher: "Mrs. Maria Concepcion",
    },
  ];

  // ─── TEACHERS ─────────────────────────────────────────────────────────────
  const defaultTeachers = [
    { id: "T001", name: "Mr. Roberto Santos", subject: "Mathematics" },
    { id: "T002", name: "Ms. Elena Reyes", subject: "Science" },
    { id: "T003", name: "Ms. Patricia Cruz", subject: "English" },
    { id: "T004", name: "Mr. Antonio Ramos", subject: "Filipino" },
    { id: "T005", name: "Mrs. Carmen Flores", subject: "Araling Panlipunan" },
    { id: "T006", name: "Mr. Joseph Villanueva", subject: "MAPEH" },
    { id: "T007", name: "Ms. Grace Domingo", subject: "TLE" },
    { id: "T008", name: "Mrs. Maria Concepcion", subject: "Values Education" },
  ];

  // ─── GRADES ───────────────────────────────────────────────────────────────
  // Format: studentId, subjectId, period (1-4), grade (75-98)
  const gradeMatrix = {
    S001: {
      SUB001: [88, 85, 90, 87],
      SUB002: [92, 89, 91, 93],
      SUB003: [85, 87, 84, 86],
      SUB004: [90, 88, 92, 91],
      SUB005: [83, 85, 80, 82],
      SUB006: [94, 92, 95, 93],
      SUB007: [89, 91, 88, 90],
      SUB008: [95, 93, 96, 94],
    },
    S002: {
      SUB001: [78, 80, 82, 79],
      SUB002: [85, 83, 87, 86],
      SUB003: [92, 94, 91, 93],
      SUB004: [88, 87, 89, 90],
      SUB005: [75, 77, 76, 78],
      SUB006: [82, 84, 81, 83],
      SUB007: [79, 81, 80, 82],
      SUB008: [90, 88, 91, 89],
    },
    S003: {
      SUB001: [72, 74, 73, 75],
      SUB002: [80, 79, 81, 82],
      SUB003: [76, 78, 75, 77],
      SUB004: [83, 81, 84, 82],
      SUB005: [70, 72, 71, 74],
      SUB006: [85, 83, 86, 84],
      SUB007: [88, 87, 89, 90],
      SUB008: [79, 80, 78, 81],
    },
    S004: {
      SUB001: [95, 93, 96, 94],
      SUB002: [97, 95, 98, 96],
      SUB003: [93, 95, 92, 94],
      SUB004: [91, 93, 90, 92],
      SUB005: [89, 91, 88, 90],
      SUB006: [96, 94, 97, 95],
      SUB007: [92, 94, 91, 93],
      SUB008: [98, 96, 97, 95],
    },
    S005: {
      SUB001: [68, 70, 72, 71],
      SUB002: [75, 73, 76, 74],
      SUB003: [71, 73, 70, 72],
      SUB004: [77, 75, 78, 76],
      SUB005: [65, 67, 66, 68],
      SUB006: [80, 78, 81, 79],
      SUB007: [83, 81, 84, 82],
      SUB008: [74, 76, 73, 75],
    },
  };

  const defaultGrades = [];
  let gId = 1;
  Object.keys(gradeMatrix).forEach((sId) => {
    Object.keys(gradeMatrix[sId]).forEach((subId) => {
      gradeMatrix[sId][subId].forEach((g, idx) => {
        defaultGrades.push({
          id: "G" + String(gId++).padStart(3, "0"),
          studentId: sId,
          subjectId: subId,
          period: idx + 1,
          grade: g,
          dateEncoded: "2024-" + String(idx * 3 + 1).padStart(2, "0") + "-15",
          remarks: g >= 75 ? "Passed" : "Failed",
        });
      });
    });
  });

  // ─── ADMIN ────────────────────────────────────────────────────────────────
  const defaultAdmin = {
    id: "A001",
    name: "Administrator",
    email: "admin@lnhs.edu.ph",
    password: "admin123",
    role: "admin",
    contact: "09111222333",
    position: "School Administrator",
    school: "Lubo National High School",
  };

  // ─── SMS LOG ──────────────────────────────────────────────────────────────
  const defaultSmsLog = [];

  // ─── PERSIST TO LOCALSTORAGE ──────────────────────────────────────────────
  if (!localStorage.getItem("ogms_students"))
    localStorage.setItem("ogms_students", JSON.stringify(defaultStudents));
  if (!localStorage.getItem("ogms_subjects"))
    localStorage.setItem("ogms_subjects", JSON.stringify(defaultSubjects));
  if (!localStorage.getItem("ogms_teachers"))
    localStorage.setItem("ogms_teachers", JSON.stringify(defaultTeachers));
  if (!localStorage.getItem("ogms_grades"))
    localStorage.setItem("ogms_grades", JSON.stringify(defaultGrades));
  if (!localStorage.getItem("ogms_admin"))
    localStorage.setItem("ogms_admin", JSON.stringify(defaultAdmin));
  if (!localStorage.getItem("ogms_sms_log"))
    localStorage.setItem("ogms_sms_log", JSON.stringify(defaultSmsLog));
}

// ─── HELPER ACCESSORS ──────────────────────────────────────────────────────
function getStudents() {
  return JSON.parse(localStorage.getItem("ogms_students") || "[]");
}
function getSubjects() {
  return JSON.parse(localStorage.getItem("ogms_subjects") || "[]");
}
function getTeachers() {
  return JSON.parse(localStorage.getItem("ogms_teachers") || "[]");
}
function getGrades() {
  return JSON.parse(localStorage.getItem("ogms_grades") || "[]");
}
function getAdmin() {
  return JSON.parse(localStorage.getItem("ogms_admin") || "{}");
}
function getSmsLog() {
  return JSON.parse(localStorage.getItem("ogms_sms_log") || "[]");
}

function saveStudents(data) {
  localStorage.setItem("ogms_students", JSON.stringify(data));
}
function saveSubjects(data) {
  localStorage.setItem("ogms_subjects", JSON.stringify(data));
}
function saveGrades(data) {
  localStorage.setItem("ogms_grades", JSON.stringify(data));
}
function saveAdmin(data) {
  localStorage.setItem("ogms_admin", JSON.stringify(data));
}
function saveSmsLog(data) {
  localStorage.setItem("ogms_sms_log", JSON.stringify(data));
}

// ─── GRADE UTILITIES ───────────────────────────────────────────────────────
function getGradeDesc(g) {
  if (g >= 90) return "Outstanding";
  if (g >= 85) return "Very Satisfactory";
  if (g >= 80) return "Satisfactory";
  if (g >= 75) return "Fairly Satisfactory";
  return "Did Not Meet Expectations";
}

function getGradeColor(g) {
  if (g >= 90) return "#10b981";
  if (g >= 85) return "#3b82f6";
  if (g >= 80) return "#6366f1";
  if (g >= 75) return "#f59e0b";
  return "#ef4444";
}

function getGradeBadge(g) {
  if (g >= 75) return `<span class="badge bg-success">Passed</span>`;
  return `<span class="badge bg-danger">Failed</span>`;
}

function calcAverage(grades) {
  if (!grades.length) return 0;
  return +(grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
}

function getStudentGrades(studentId, period = null) {
  let grades = getGrades().filter((g) => g.studentId === studentId);
  if (period) grades = grades.filter((g) => g.period === period);
  return grades;
}

function getStudentById(id) {
  return getStudents().find((s) => s.id === id);
}
function getSubjectById(id) {
  return getSubjects().find((s) => s.id === id);
}
function generateId(prefix) {
  return (
    prefix + Date.now() + Math.random().toString(36).substr(2, 4).toUpperCase()
  );
}

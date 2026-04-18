/**
 * OGMS – Utility / Core JavaScript
 * Toast, Loading, Auth Guard, Navigation helpers
 */

// ── Toast Notification System ─────────────────────────────────────────────
function showToast(message, type = "success", duration = 3500) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const icons = {
    success: "fa-check-circle",
    error: "fa-times-circle",
    warning: "fa-exclamation-triangle",
    info: "fa-info-circle",
  };
  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;
  toast.innerHTML = `
    <i class="fas ${icons[type] || icons.info} toast-icon"></i>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(24px)";
    toast.style.transition = ".3s ease";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── Loading Overlay ──────────────────────────────────────────────────────
function showLoading() {
  if (document.getElementById("loadingOverlay")) return;
  const el = document.createElement("div");
  el.id = "loadingOverlay";
  el.className = "loading-overlay";
  el.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(el);
}
function hideLoading() {
  const el = document.getElementById("loadingOverlay");
  if (el) el.remove();
}
function simulateLoading(cb, ms = 600) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    cb && cb();
  }, ms);
}

// ── Session ───────────────────────────────────────────────────────────────
function getSession() {
  return JSON.parse(sessionStorage.getItem("ogms_session") || "null");
}
function setSession(data) {
  sessionStorage.setItem("ogms_session", JSON.stringify(data));
}
function clearSession() {
  sessionStorage.removeItem("ogms_session");
}

function requireAuth(role) {
  const s = getSession();
  if (!s) {
    window.location.href = rootPath() + "index.html";
    return null;
  }
  if (role && s.role !== role) {
    window.location.href =
      s.role === "admin"
        ? rootPath() + "views/admin/dashboard.html"
        : rootPath() + "views/student/dashboard.html";
    return null;
  }
  return s;
}

function rootPath() {
  // Determine relative path back to root from current page
  const depth = (window.location.pathname.match(/\//g) || []).length;
  // Works for /views/student/ and /views/admin/ (2 levels deep)
  const parts = window.location.pathname.split("/");
  const idx = parts.findIndex((p) => p === "OGMS-Lubo-National-High-School");
  if (idx === -1) return "/OGMS-Lubo-National-High-School/";
  const base = parts.slice(0, idx + 1).join("/") + "/";
  return base;
}

// Relative helper used in pages
function rel(path) {
  const depth = getDepth();
  const back = "../".repeat(depth);
  return back + path;
}
function getDepth() {
  const path = window.location.pathname;
  if (path.includes("/views/student/") || path.includes("/views/admin/"))
    return 2;
  return 0;
}

// ── Logout ────────────────────────────────────────────────────────────────
function logout() {
  clearSession();
  window.location.href = rel("index.html");
}

// ── Active Sidebar Link ───────────────────────────────────────────────────
function setActiveSidebarLink() {
  const page = window.location.pathname.split("/").pop();
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href") || "";
    if (href.endsWith(page)) link.classList.add("active");
  });
}

// ── Mobile Sidebar ────────────────────────────────────────────────────────
function initMobileSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  if (!hamburger || !sidebar) return;
  let overlay = document.querySelector(".sidebar-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    overlay.style.display = "none";
    document.body.appendChild(overlay);
  }
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.style.display = sidebar.classList.contains("open")
      ? "block"
      : "none";
  });
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
  });
}

// ── Format Helpers ────────────────────────────────────────────────────────
function fmtDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
function fmtDateTime(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleString("en-PH", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

// ── Grade Color Class ─────────────────────────────────────────────────────
function gradeClass(g) {
  if (g >= 90) return "grade-outstanding";
  if (g >= 85) return "grade-very-sat";
  if (g >= 80) return "grade-satisfactory";
  if (g >= 75) return "grade-fairly-sat";
  return "grade-failed";
}
function gradeBgColor(g) {
  if (g >= 90) return "#10b981";
  if (g >= 85) return "#3b82f6";
  if (g >= 80) return "#6366f1";
  if (g >= 75) return "#f59e0b";
  return "#ef4444";
}
function gradeCell(g) {
  return `<span class="grade-cell" style="background:${gradeBgColor(g)}">${g}</span>`;
}

// ── Confirm Dialog ────────────────────────────────────────────────────────
function confirmAction(msg, cb) {
  if (confirm(msg)) cb();
}

// ── Debounce ──────────────────────────────────────────────────────────────
function debounce(fn, ms = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ── Init on DOM Ready ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initMockData();
  setActiveSidebarLink();
  initMobileSidebar();
});

const btn = document.getElementById("menuButton");
const nav = document.getElementById("hauptmenue");

const overlay = document.createElement("div");
overlay.className = "overlay";
overlay.setAttribute("aria-hidden", "true");
document.body.appendChild(overlay);

function isMobile() {
    return window.innerWidth <= 700;
}

function openMenu() {
    nav.hidden = false;
    nav.removeAttribute("inert");
    nav.setAttribute("aria-hidden", "false");
    nav.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
    btn.setAttribute("aria-label", "Menü schließen");
    btn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    btn.setAttribute("aria-label", "Menü öffnen");
    btn.setAttribute("aria-expanded", "false");

    if (isMobile()) {
        nav.setAttribute("aria-hidden", "true");
        nav.setAttribute("inert", "");
        nav.hidden = true;
    } else {
        nav.removeAttribute("inert");
        nav.setAttribute("aria-hidden", "false");
        nav.hidden = false;
    }
}

function setupMenu() {
    if (isMobile()) {
        nav.setAttribute("aria-hidden", "true");
        nav.setAttribute("inert", "");
        nav.hidden = true;
        nav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        btn.setAttribute("aria-label", "Menü öffnen");
        btn.setAttribute("aria-expanded", "false");
    } else {
        nav.hidden = false;
        nav.removeAttribute("inert");
        nav.classList.remove("active");
        nav.setAttribute("aria-hidden", "false");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        btn.setAttribute("aria-label", "Menü öffnen");
        btn.setAttribute("aria-expanded", "false");
    }
}

btn.addEventListener("click", function () {
    if (nav.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener("click", function () {
    closeMenu();
    btn.focus();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
        closeMenu();
        btn.focus();
    }
});

window.addEventListener("resize", setupMenu);
window.addEventListener("load", setupMenu);
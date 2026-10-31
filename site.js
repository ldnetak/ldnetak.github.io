/* Mobile menu for the shared header. The site works without this file;
   it only collapses the navigation behind a button on narrow screens. */
(function () {
    var button = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!button || !nav) return;

    function setOpen(open) {
        button.setAttribute("aria-expanded", String(open));
        nav.classList.toggle("is-open", open);
    }

    button.addEventListener("click", function () {
        setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".site-header")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && nav.classList.contains("is-open")) {
            setOpen(false);
            button.focus();
        }
    });

    window.matchMedia("(min-width: 1081px)").addEventListener("change", function () {
        setOpen(false);
    });
})();

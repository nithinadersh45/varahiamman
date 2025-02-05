// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add smooth scrolling to each navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight the active link based on the scroll position
    window.addEventListener("scroll", () => {
        let currentSection = "";
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            const sectionTop = section.offsetTop - 50;

            if (window.scrollY >= sectionTop) {
                currentSection = link.getAttribute("href");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === currentSection) {
                link.classList.add("active");
            }
        });
    });
});

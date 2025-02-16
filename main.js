// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // Check if the user has a saved preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Update icon
        if (body.classList.contains("light-mode")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "light");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "dark");
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    observer.unobserve(img);
                }
            });
        });

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo-item img");

    images.forEach(img => {
        img.onload = function () {
            let aspectRatio = img.naturalWidth / img.naturalHeight;

            if (aspectRatio > 1) {
                img.parentElement.classList.add("landscape"); // Wider images
            } else {
                img.parentElement.classList.add("portrait"); // Taller images
            }
        };
    });
});

    }
})
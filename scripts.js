document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Toggle menu when clicking hamburger
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close dropdown when a nav link is clicked (Mobile)
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);

    // Manual navigation
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
            resetInterval();
        });
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Initial Display
    showSlide(currentIndex);
});


document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".project-slider", {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keeps autoplay even after user interaction
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});

document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".testimonial-slider", {
        slidesPerView: 1, // Only one slide visible at a time
        spaceBetween: 0, // No gap between slides
        loop: true, 
        autoplay: {
            delay: 4000, // Auto-slide every 4 seconds
            disableOnInteraction: false,
        },
        speed: 800, // Smooth slide transition speed
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    // ====== Swiper for Gallery (Auto-Slide) ======
    var swiper = new Swiper(".gallery-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // ====== FAQ Toggle Effect ======
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});



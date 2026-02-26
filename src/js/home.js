/**
 * ARBSV - Home Page JavaScript
 * Modern homepage functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Animate statistics counter
    animateCounters();
    
    // Navbar scroll effect
    initNavbar();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Intersection Observer for animations
    initScrollAnimations();
});

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.stat-card, .tournament-card, .news-card, .featured-game');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .stat-card:nth-child(1) { transition-delay: 0s; }
    .stat-card:nth-child(2) { transition-delay: 0.1s; }
    .stat-card:nth-child(3) { transition-delay: 0.2s; }
    .stat-card:nth-child(4) { transition-delay: 0.3s; }
    
    .tournament-card:nth-child(1) { transition-delay: 0s; }
    .tournament-card:nth-child(2) { transition-delay: 0.15s; }
    
    .news-card:nth-child(1) { transition-delay: 0s; }
    .news-card:nth-child(2) { transition-delay: 0.1s; }
    .news-card:nth-child(3) { transition-delay: 0.2s; }
    
    .featured-game:nth-child(1) { transition-delay: 0s; }
    .featured-game:nth-child(2) { transition-delay: 0.1s; }
    .featured-game:nth-child(3) { transition-delay: 0.2s; }
`;
document.head.appendChild(style);

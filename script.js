// system for background animation
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.container = document.getElementById('particles');
        this.init();
    }

    init() {
        for (let i = 0; i < 50; i++) {
            this.createParticle();
        }

        // create new particles
        setInterval(() => {
            this.createParticle();
        }, 300);
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
        
        // random animation time between 4s and 8s
        const duration = Math.random() * 4 + 4;
        particle.style.animationDuration = `${duration}s`;
        
        // random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        this.container.appendChild(particle);
        
        // remove particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000);
    }
}

// smooth scroll effect
function smoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// interactive button effects
function initializeInteractivity() {
    const ctaButton = document.getElementById('ctaButton');
    const cards = document.querySelectorAll('.card');
    
    // CTA Button click effect
    ctaButton.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Show alert (you can replace this with actual functionality)
        setTimeout(() => {
            alert('Welcome to Nubo! 🚀\n\nThank you for your interest. This is where you would typically redirect to a sign-up page or start the onboarding process.');
        }, 300);
    });
    
    // Card hover effects with mouse tracking
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Add ripple animation keyframes
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Parallax scrolling effect
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const particles = document.getElementById('particles');
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Typing animation for the title
function typeWriter() {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    title.style.opacity = '1';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// post dom loading
document.addEventListener('DOMContentLoaded', function() {
    // init particle system
    new ParticleSystem();
    
    // init interactive features
    initializeInteractivity();
    
    // add ripple animation
    addRippleAnimation();
    
    initializeParallax();
    
    // smooth scrolling
    smoothScroll();
    
    setTimeout(typeWriter, 1000);
});

// window resize for responsive particles
window.addEventListener('resize', () => {
    // change particle system if needed
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.left = `${Math.random() * 100}%`;
    });
});

// console styling
console.log('%c🌟 Welcome to Nubo! 🌟', 'color: #7c3aed; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #a855f7; font-size: 14px;');

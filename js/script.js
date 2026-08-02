/**
 * IdeenGames Website – Haupt-JavaScript
 * ======================================
 * 
 * Enthält:
 * - Mobile Navigation
 * - Scroll Animationen (AOS)
 * - Back to Top Button
 * - Galerie Lightbox
 * - Navigation Highlight
 * - Lazy Loading
 * - Discord Widget Integration
 * 
 * @author IdeenGames
 * @version 1.0.0
 */

// ============================================
// 1. DOM Content Loaded
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialisiere alle Module
    initMobileNavigation();
    initScrollEffects();
    initScrollAnimation();
    initLightbox();
    initNavigationHighlight();
    initLazyLoading();
    initDiscordWidget();
    initParticles();
    
    console.log('IdeenGames Website – JavaScript initialisiert ✅');
});

// ============================================
// 2. Mobile Navigation
// ============================================

/**
 * Initialisiert die Mobile Navigation
 */
function initMobileNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarLinks = document.getElementById('navbarLinks');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!mobileMenuToggle || !navbarLinks) return;
    
    // Toggle Mobile Menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navbarLinks.classList.toggle('active');
    });
    
    // Schließe Mobile Menu beim Klicken auf einen Link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navbarLinks.classList.remove('active');
        });
    });
    
    // Schließe Mobile Menu beim Klicken außerhalb
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navbarLinks.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navbarLinks.classList.remove('active');
        }
    });
}

// ============================================
// 3. Scroll Effects
// ============================================

/**
 * Initialisiert Scroll-Effekte (Navigation, Back-to-Top)
 */
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (!navbar || !backToTop) return;
    
    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        // Navigation Sticky & Transparent
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to Top Button
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to Top Click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 4. Scroll Animation (AOS - Animate On Scroll)
// ============================================

/**
 * Initialisiert Scroll-Animationen
 */
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    if (!animatedElements.length) return;
    
    // Intersection Observer für Scroll-Animationen
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.getAttribute('data-aos');
                const delay = element.getAttribute('data-aos-delay') || 0;
                
                // Füge Animation hinzu
                element.classList.add(animation);
                element.style.animationDelay = `${delay}ms`;
                
                // Beobachte nicht mehr
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Beobachte alle Elemente
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// 5. Lightbox (Galerie)
// ============================================

/**
 * Initialisiert die Lightbox für die Galerie
 */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const galerieItems = document.querySelectorAll('.galerie-item');
    
    if (!lightbox || !galerieItems.length) return;
    
    let currentIndex = 0;
    const images = [];
    const captions = [];
    
    // Sammle alle Bilder und Captions
    galerieItems.forEach((item, index) => {
        const img = item.querySelector('.galerie-img');
        const caption = item.querySelector('.galerie-caption');
        
        if (img) {
            images.push(img.getAttribute('data-src') || img.src);
        }
        if (caption) {
            captions.push(caption.textContent);
        } else {
            captions.push('');
        }
        
        // Klick-Event für jedes Galerie-Item
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Öffne Lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Schließe Lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Aktualisiere Lightbox-Inhalt
    function updateLightbox() {
        lightboxImg.src = images[currentIndex];
        lightboxCaption.textContent = captions[currentIndex];
    }
    
    // Nächstes Bild
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }
    
    // Vorheriges Bild
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }
    
    // Event Listener
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);
    
    // Schließe Lightbox beim Klicken außerhalb des Bildes
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Tastatursteuerung
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
        }
    });
}

// ============================================
// 6. Navigation Highlight
// ============================================

/**
 * Initialisiert das Highlight der Navigation basierend auf Scroll-Position
 */
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    if (!sections.length || !navLinks.length) return;
    
    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        // Finde die aktuelle Section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Aktualisiere Nav-Links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth Scroll für Nav-Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// 7. Lazy Loading
// ============================================

/**
 * Initialisiert Lazy Loading für Bilder
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy');
    
    if (!lazyImages.length) return;
    
    // Intersection Observer für Lazy Loading
    const observerOptions = {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, observerOptions);
    
    // Beobachte alle Lazy Images
    lazyImages.forEach(img => {
        observer.observe(img);
    });
}

// ============================================
// 8. Discord Widget Integration
// ============================================

/**
 * Initialisiert das Discord Widget
 */
function initDiscordWidget() {
    const widgetContainer = document.getElementById('discordWidgetContainer');
    const memberCountElement = document.getElementById('discordMemberCount');
    
    if (!widgetContainer) return;
    
    // Widget aus dem Hidden Iframe laden
    const widgetIframe = document.querySelector('iframe[src*="discord.com/widget"]');
    
    if (widgetIframe) {
        // Widget in den Container verschieben
        widgetContainer.appendChild(widgetIframe);
        widgetIframe.style.display = 'block';
        
        // Widget Größe anpassen
        widgetIframe.style.width = '100%';
        widgetIframe.style.height = '500px';
        widgetIframe.style.borderRadius = 'var(--radius-md)';
        widgetIframe.style.border = '1px solid var(--glass-border)';
    }
    
    // Versuche, die Mitgliederanzahl zu extrahieren
    // (Funktioniert nur, wenn das Widget geladen ist und same-origin)
    // Da wir das Widget von Discord laden, können wir die Anzahl nicht direkt auslesen
    // Also verwenden wir eine alternative Methode
    
    // Alternative: Discord API (erfordert Server-ID)
    // Da wir keine API-Anfragen von der Client-Seite machen können (CORS), 
    // zeigen wir eine statische Nachricht an
    if (memberCountElement) {
        // Standardmäßige Nachricht
        memberCountElement.textContent = 'Mitglieder online';
        
        // Versuche, die Anzahl aus dem Widget zu extrahieren (falls möglich)
        setTimeout(() => {
            try {
                const widgetDocument = widgetIframe.contentDocument || widgetIframe.contentWindow.document;
                const memberCount = widgetDocument.querySelector('.members .count');
                
                if (memberCount) {
                    memberCountElement.textContent = `${memberCount.textContent.trim()} Mitglieder online`;
                }
            } catch (e) {
                // CORS-Fehler – ignorieren
                console.log('Discord Widget: Kann Mitgliederanzahl nicht auslesen (CORS)');
            }
        }, 2000);
    }
}

// ============================================
// 9. Particles Background
// ============================================

/**
 * Erstellt dynamische Partikel im Hintergrund
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    // Erstelle 50 Partikel
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

/**
 * Erstellt ein einzelnes Partikel
 */
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Zufällige Position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Zufällige Größe
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Zufällige Farbe (Lila oder Cyan)
    const colors = ['#7C4DFF', '#38BDF8', '#FFFFFF'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Zufällige Opazität
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Zufällige Animation
    particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    // Zufällige Bewegungsrichtung
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;
    
    particle.style.setProperty('--direction-x', directionX);
    particle.style.setProperty('--direction-y', directionY);
    
    container.appendChild(particle);
}

// ============================================
// 10. Utility Functions
// ============================================

/**
 * Debounce Function (für Performance-Optimierung)
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle Function (für Scroll-Events)
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// 11. Event Listener mit Throttle/Debounce
// ============================================

// Throttle Scroll Events für bessere Performance
const throttledScroll = throttle(() => {
    // Scroll-Effekte werden bereits in initScrollEffects behandelt
}, 16);

window.addEventListener('scroll', throttledScroll, { passive: true });

// Resize Events
const debouncedResize = debounce(() => {
    // Hier könnten wir bei Resize etwas tun
}, 250);

window.addEventListener('resize', debouncedResize, { passive: true });

// ============================================
// 12. Console Easter Egg
// ============================================

console.log(`
%c🎮 IdeenGames – Minigames mit Liebe zum Detail 🎮

%cBesuche uns auf:
%chttps://discord.gg/sVFsuaKJCG

%cCytooxien.net → Realm-Kompass → IdeenGames
`,
'font-size: 24px; font-weight: bold; color: #7C4DFF; text-shadow: 0 0 10px #7C4DFF;',
'font-size: 14px; color: #38BDF8;',
'font-size: 14px; color: #FFFFFF; text-decoration: underline;',
'font-size: 14px; color: #A0A0A0;'
);

// ============================================
// 13. Service Worker Registration (für PWA)
// ============================================

// Falls wir später eine PWA machen wollen
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service Worker registrieren
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ============================================
// 14. Preload Critical Resources
// ============================================

// Preload wichtige Ressourcen
const preloadResources = () => {
    const resources = [
        'css/style.css',
        'css/animations.css',
        'css/responsive.css',
        'assets/logo.svg',
        'assets/favicon.ico'
    ];
    
    resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : resource.endsWith('.svg') ? 'image' : 'image';
        document.head.appendChild(link);
    });
};

// Preload beim Laden
window.addEventListener('load', preloadResources);

// ============================================
// 15. Error Handling für Bilder
// ============================================

// Fallback für fehlende Bilder
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', () => {
            // Standard-Fallback-Bild
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjNDQ0Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWljcm9zZmQ8L3RleHQ+Cjwvc3ZnPg==';
            img.alt = 'Fallback Bild';
        });
    });
});

/**
 * IdeenGames Galerie-Loader
 * ========================
 * Lädt Bilder dynamisch aus gallery-data.js
 */

// Warte bis DOM geladen ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGallery);
} else {
    loadGallery();
}

function loadGallery() {
    const galleryContainer = document.getElementById('dynamicGallery');
    if (!galleryContainer) return;
    
    // Leere den Container
    galleryContainer.innerHTML = '';
    
    // Lade Bilder aus gallery-data.js
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'galerie-item';
        galleryItem.setAttribute('data-aos', 'zoom-in');
        galleryItem.setAttribute('data-aos-delay', index * 100);
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="galerie-img lazy" data-src="${image.src}">
            <div class="galerie-overlay">
                <span class="galerie-caption">${image.caption}</span>
                <button class="galerie-zoom" aria-label="Bild vergrößern">🔍</button>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
        
        // Klick-Event für Lightbox
        galleryItem.addEventListener('click', () => {
            openLightboxFromDynamic(index);
        });
    });
    
    // Aktualisiere die Lightbox-Funktion
    updateLightboxForDynamic();
}

// Lightbox für dynamische Galerie
function openLightboxFromDynamic(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    
    currentLightboxIndex = index;
    updateDynamicLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

let currentLightboxIndex = 0;

function updateDynamicLightbox() {
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (!lightboxImg || !lightboxCaption) return;
    
    lightboxImg.src = galleryImages[currentLightboxIndex].src;
    lightboxCaption.textContent = galleryImages[currentLightboxIndex].caption;
}

function updateLightboxForDynamic() {
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxPrev = document.getElementById('lightboxPrev');
    
    if (lightboxNext) {
        lightboxNext.onclick = () => {
            currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
            updateDynamicLightbox();
        };
    }
    
    if (lightboxPrev) {
        lightboxPrev.onclick = () => {
            currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
            updateDynamicLightbox();
        };
    }
    
    // Tastatursteuerung aktualisieren
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
                break;
            case 'ArrowRight':
                currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
                updateDynamicLightbox();
                break;
            case 'ArrowLeft':
                currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
                updateDynamicLightbox();
                break;
        }
    });
}

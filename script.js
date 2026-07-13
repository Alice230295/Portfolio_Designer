console.log('🚀 Caricamento Portfolio Alice...');

let isMenuOpen = false;
let loadingComplete = false;

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM caricato, inizializzazione portfolio...');
    startLoadingAnimation();
    setTimeout(function() {
        finishLoading();
        initPortfolio();
    }, 1000);
});

function startLoadingAnimation() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.querySelector('.loading-progress');
    if (loadingScreen && loadingProgress) {
        loadingScreen.classList.remove('hidden');
        setTimeout(function() { loadingProgress.style.width = '100%'; }, 100);
    }
}

function finishLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        loadingComplete = true;
        setTimeout(function() {
            if (loadingScreen.parentNode) loadingScreen.parentNode.removeChild(loadingScreen);
        }, 800);
    }
}

function initPortfolio() {
    initNavigation();
    initMobileMenu();
    initAnimations();
    initProjectHandlers();
    initGalleryModal();
    initTouchSupport();
    initCVDownload();
    initPowerUpsNavigation();
    initHeaderClick();
    initScrollAnimations();
    initEmailJS();
    console.log('✅ Portfolio inizializzato completamente');
}

/* ===== POWER-UPS ===== */
function initPowerUpsNavigation() {
    const powerUps = document.querySelectorAll('.power-up.clickable');
    powerUps.forEach(function(powerUp) {
        powerUp.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                const targetButton = document.querySelector(`[data-section="${target}"]`);
                if (targetButton) targetButton.click();
            }
        });
        powerUp.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-12px) scale(1.02)'; });
        powerUp.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0) scale(1)'; });
    });
}

/* ===== HEADER CLICCABILE ===== */
function initHeaderClick() {
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        headerTitle.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.game-section').forEach(section => section.classList.remove('active'));
            const homeSection = document.getElementById('home');
            const homeButton = document.querySelector('[data-section="home"]');
            if (homeSection && homeButton) {
                homeSection.classList.add('active');
                homeButton.classList.add('active');
                if (isMenuOpen) closeMobileMenu();
                window.scrollTo(0, 0);
                setTimeout(function() { animateHomePage(); }, 100);
            }
        });
    }
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.target.classList.contains('intro-text')) {
                animateHomePage();
            }
        });
    }, observerOptions);
    const introText = document.querySelector('.intro-text');
    if (introText) observer.observe(introText);
}

/* ===== CV DOWNLOAD ===== */
function initCVDownload() {
    const downloadBtn = document.getElementById('downloadCvBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadCVPDF();
        });
    }
}

function downloadCVPDF() {
    showMobileNotification('📄 Preparazione download CV PDF...');
    const cvHTML = generateCVForPrint();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(cvHTML);
    printWindow.document.close();
    setTimeout(function() {
        printWindow.print();
        setTimeout(function() { printWindow.close(); }, 1000);
        showMobileNotification('✅ CV pronto per il download PDF!');
    }, 500);
}

function generateCVForPrint() {
    return `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Alice Martinazzoli - CV</title>
<style>
@page { margin: 1cm; size: A4; }
body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.5; color: #333; background: white; font-size: 12px; }
.header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #00d9ff; padding-bottom: 15px; }
.name { font-size: 28px; font-weight: bold; color: #00d9ff; margin-bottom: 8px; }
.title { font-size: 16px; color: #666; margin-bottom: 15px; }
.contact-info { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 11px; }
.section { margin-bottom: 25px; break-inside: avoid; }
.section-title { font-size: 18px; color: #00d9ff; border-bottom: 2px solid #00d9ff; padding-bottom: 5px; margin-bottom: 15px; font-weight: bold; }
.experience-item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; break-inside: avoid; }
.job-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; flex-wrap: wrap; }
.job-title { font-size: 14px; font-weight: bold; color: #333; }
.job-period { background: #00d9ff; color: white; padding: 3px 8px; border-radius: 10px; font-size: 10px; font-weight: bold; }
.company { color: #ff6b9d; font-weight: bold; margin-bottom: 8px; font-size: 13px; }
.description { margin: 0; padding-left: 0; }
.description li { margin-bottom: 5px; list-style-type: none; position: relative; padding-left: 15px; font-size: 11px; }
.description li::before { content: "▶"; position: absolute; left: 0; color: #00d9ff; font-size: 8px; top: 2px; }
.skills-section { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 10px; }
.skill-category { background: #f8f9fa; padding: 12px; border-radius: 8px; border-left: 3px solid #00d9ff; }
.skill-category h4 { color: #00d9ff; margin-bottom: 8px; font-size: 12px; margin-top: 0; }
.skill-list { list-style: none; padding: 0; margin: 0; }
.skill-list li { margin-bottom: 4px; padding: 3px 6px; background: white; border-radius: 4px; font-size: 10px; }
.intro { background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #00d9ff; font-size: 11px; line-height: 1.4; }
.footer-info { margin-top: 30px; text-align: center; font-size: 10px; color: #666; border-top: 1px solid #eee; padding-top: 15px; }
</style>
</head>
<body>
<div class="header">
<div class="name">Alice Martinazzoli</div>
<div class="title">Graphic Designer - UX/UI Designer</div>
<div class="contact-info">
<div>📧 alicemartinazzoli95@icloud.com</div>
<div>📱 +39 346 1732527</div>
<div>🌐 behance.net/alicemarti563e</div>
</div>
</div>
<div class="intro"><strong>Profilo Professionale:</strong> Diplomata in Grafica Pubblicitaria presso l'International School of Comics, ho completato un Master in UX/UI Design presso Start2Impact University nel 2025. Finalista al concorso "Talenti Accesi" di Torcha con il restyling della lattina BOEM. Esperienza su set cinematografici internazionali e autrice del libro "Gino Zamprioli: Make-up Artist dal 1969". Competenze tecniche acquisite anche come Salesforce Developer nel 2023.</div>
<div class="section">
<h2 class="section-title">Esperienza Lavorativa</h2>
<div class="experience-item"><div class="job-header"><span class="job-title">Graphic Designer</span><span class="job-period">2023-2024</span></div><div class="company">LGA Service - Roma</div><ul class="description"><li>Sviluppo di materiali di marketing, presentazioni e comunicazioni visive</li><li>Miglioramento dell'immagine aziendale attraverso design coeso e d'impatto</li></ul></div>
<div class="experience-item"><div class="job-header"><span class="job-title">Graphic Designer</span><span class="job-period">2022</span></div><div class="company">Panorama Films srl - Roma</div><ul class="description"><li>Esperienza internazionale serie TV "Concordia" (ZDF STUDIOS)</li><li>Creazione packaging, etichette, segnaletica e grafiche per veicoli</li></ul></div>
<div class="experience-item"><div class="job-header"><span class="job-title">Graphic Designer</span><span class="job-period">2018-2021</span></div><div class="company">MP Partners - Costa Volpino (BG)</div><ul class="description"><li>Crescita da Junior a referente Comunicazione e Marketing</li><li>Sviluppo campagne visive, materiali editoriali e branding</li></ul></div>
<div class="experience-item"><div class="job-header"><span class="job-title">Social Media Manager</span><span class="job-period">2017</span></div><div class="company">Cassette Venturi - Darfo B.T. (BS)</div><ul class="description"><li>Sviluppo piano editoriale strategico per social media</li></ul></div>
</div>
<div class="section">
<h2 class="section-title">Istruzione</h2>
<div class="experience-item"><div class="job-header"><span class="job-title">Master UX/UI Designer</span><span class="job-period">2025</span></div><div class="company">Start2Impact University</div></div>
<div class="experience-item"><div class="job-header"><span class="job-title">Salesforce Developer</span><span class="job-period">2023</span></div><div class="company">Generation Italy</div></div>
<div class="experience-item"><div class="job-header"><span class="job-title">Diploma Grafica Pubblicitaria</span><span class="job-period">2015-2018</span></div><div class="company">International School of Comics - Brescia</div></div>
</div>
<div class="section">
<h2 class="section-title">Competenze</h2>
<div class="skills-section">
<div class="skill-category"><h4>Design Tools</h4><ul class="skill-list"><li>Adobe Creative Suite (Master)</li><li>Figma (Expert)</li><li>Sketch (Advanced)</li></ul></div>
<div class="skill-category"><h4>Specializzazioni</h4><ul class="skill-list"><li>Graphic Design (Master)</li><li>UX/UI Design (Expert)</li><li>Brand Identity (Expert)</li></ul></div>
</div>
</div>
<div class="footer-info"><p><strong>Portfolio online:</strong> https://www.behance.net/alicemarti563e</p></div>
</body>
</html>`;
}

/* ===== NAVIGAZIONE ===== */
function initNavigation() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const sections = document.querySelectorAll('.game-section');

    menuButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            menuButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                if (isMenuOpen) closeMobileMenu();
                if (window.innerWidth <= 768) window.scrollTo(0, 0);
                setTimeout(function() { handleSectionAnimations(targetSection); }, 300);
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (window.innerWidth > 768 && loadingComplete) {
            const keyMap = ['1', '2', '3', '4', '5', '6'];
            const index = keyMap.indexOf(e.key);
            if (index >= 0 && menuButtons[index]) menuButtons[index].click();
        }
        if (e.key === 'Escape' && isMenuOpen) closeMobileMenu();
    });
}

/* ===== MENU MOBILE ===== */
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const gameMenu = document.getElementById('gameMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    if (!hamburgerBtn || !gameMenu || !menuOverlay) return;

    hamburgerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
    menuOverlay.addEventListener('click', function() { if (isMenuOpen) closeMobileMenu(); });
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) closeMobileMenu();
    });
}

function toggleMobileMenu() { isMenuOpen ? closeMobileMenu() : openMobileMenu(); }

function openMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const gameMenu = document.getElementById('gameMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    if (hamburgerBtn && gameMenu && menuOverlay) {
        hamburgerBtn.classList.add('active');
        gameMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        isMenuOpen = true;
    }
}

function closeMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const gameMenu = document.getElementById('gameMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    if (hamburgerBtn && gameMenu && menuOverlay) {
        hamburgerBtn.classList.remove('active');
        gameMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        isMenuOpen = false;
    }
}

/* ===== TOUCH SUPPORT ===== */
function initTouchSupport() {
    if ('ontouchstart' in window) document.body.classList.add('touch-device');

    const buttons = document.querySelectorAll('button, .contact-btn, .mission-btn, .power-up');
    buttons.forEach(function(button) {
        button.addEventListener('touchstart', function() { this.classList.add('touch-active'); });
        button.addEventListener('touchend', function() {
            const self = this;
            setTimeout(function() { self.classList.remove('touch-active'); }, 150);
        });
    });

    if (window.innerWidth <= 768) initSwipeNavigation();
}

function initSwipeNavigation() {
    let startX = 0, startY = 0;
    const minSwipeDistance = 50;

    document.addEventListener('touchstart', function(e) {
        if (isMenuOpen) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', function(e) {
        if (!startX || !startY || isMenuOpen) return;
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
            const sections = ['home', 'about', 'projects', 'skills', 'cv', 'contact'];
            const currentSection = document.querySelector('.game-section.active');
            const currentIndex = sections.indexOf(currentSection.id);
            let newIndex = diffX > 0 ? currentIndex + 1 : currentIndex - 1;
            if (newIndex >= 0 && newIndex < sections.length) {
                const button = document.querySelector(`[data-section="${sections[newIndex]}"]`);
                if (button) button.click();
            }
        }
        startX = 0; startY = 0;
    });
}

/* ===== ANIMAZIONI SEZIONI ===== */
function handleSectionAnimations(sectionName) {
    switch(sectionName) {
        case 'home': animateHomePage(); break;
        case 'about': animateStats(); break;
        case 'cv': animateCV(); break;
        case 'projects': animateProjects(); break;
        case 'skills': animateSkills(); break;
        case 'contact': animateContact(); break;
    }
}

function animateHomePage() {
    const animatedElements = document.querySelectorAll('.welcome-title span, #home .game-description, #home .power-up, .character-illustration');
    animatedElements.forEach(function(element) {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
    });
}

function animateStats() {
    const statFills = document.querySelectorAll('.stat-fill');
    statFills.forEach(function(fill, index) {
        const targetWidth = fill.getAttribute('data-width');
        fill.style.width = '0%';
        setTimeout(function() { fill.style.width = targetWidth; }, index * 200 + 100);
    });
}

function animateCV() {
    const cvItems = document.querySelectorAll('.cv-item');
    cvItems.forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(function() {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateProjects() {
    const projectCards = document.querySelectorAll('.mission-card');
    projectCards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(function() {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(function() {
            item.style.transition = 'all 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, index * 100);
    });
}

function animateContact() {
    const card = document.querySelector('.contact-card');
    const form = document.querySelector('.contact-form-container');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        setTimeout(function() {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 200);
    }
    if (form) {
        form.style.opacity = '0';
        form.style.transform = 'translateX(30px)';
        setTimeout(function() {
            form.style.transition = 'all 0.5s ease';
            form.style.opacity = '1';
            form.style.transform = 'translateX(0)';
        }, 400);
    }
}

function initAnimations() {
    const sprite = document.querySelector('.character-sprite');
    if (sprite) {
        setInterval(function() {
            sprite.style.transform = 'scale(1.05)';
            setTimeout(function() { sprite.style.transform = 'scale(1)'; }, 1000);
        }, 4000);
    }
}

/* ===== GALLERY PROGETTI ===== */
function buildImages(folder, start, end, padded, cover) {
    const arr = [];
    if (cover) arr.push(`img/projects/${folder}/Copertina.webp`);
    for (let i = start; i <= end; i++) {
        const num = padded ? String(i).padStart(2, '0') : i;
        arr.push(`img/projects/${folder}/${num}.webp`);
    }
    return arr;
}

const projectsGalleryData = {
    boem: {
        title: 'Restyling Lattina BOEM',
        description: 'Finalista al concorso "Talenti Accesi" di Torcha nel 2025 con una proposta creativa per il restyling della lattina, tra branding e package design.',
        tags: ['Brand Design', 'Package Design', 'Creative Strategy'],
        images: buildImages('BOEM', 1, 6, true, false)
    },
    ginoZamprioli: {
        title: '"Gino Zamprioli: Make-up Artist dal 1969"',
        description: 'Progetto editoriale completo dedicato a una figura iconica del make-up, dalla ricerca alla realizzazione grafica del libro.',
        tags: ['Editorial Design', 'Layout', 'Typography'],
        images: buildImages('Design Book', 1, 4, true, true)
    },
    cinetattoo: {
        title: 'Custom Fake Tattoos - Birra Moretti',
        description: 'Tatuaggi finti personalizzati realizzati per lo spot pubblicitario Birra Moretti, tra design realistico e applicazione professionale.',
        tags: ['Custom Design', 'Advertising', 'Tattoo Art'],
        images: buildImages('Cinetattoo', 1, 6, true, true)
    },
    logoDesign: {
        title: 'Logo Design - Planty of Food & Officina Spatti',
        description: 'Redesign di due identità distinte: alimentazione plant-based per Planty of Food e calzature per Officina Spatti.',
        tags: ['Logo Design', 'Brand Identity'],
        images: buildImages('Logo design', 1, 19, true, true)
    },
    socialMedia: {
        title: 'Social Media Design',
        description: 'Creazione di contenuti grafici per social media e sviluppo di campagne visual coordinate per diversi brand.',
        tags: ['Social Media', 'Content Design', 'Digital Marketing'],
        images: buildImages('Graphic Design', 1, 15, true, false)
    },
    resolutionTech: {
        title: 'Resolution Tech - Sito Web',
        description: "Redesign completo del sito e dell'identità digitale di Resolution Tech, dal Figma al lancio online.",
        tags: ['Web Design', 'Brand Identity', 'Figma'],
        images: buildImages('Resolution Tech', 1, 20, false, false)
    },
    presentazioneResolutionTech: {
        title: 'Resolution Tech - Presentazione',
        description: 'Materiale di presentazione del progetto: brand guidelines, mockup e comunicazione al cliente.',
        tags: ['Presentation', 'Brand Guidelines'],
        images: buildImages('Presentazione Resolution Tech', 1, 41, false, false)
    },
    jojob: {
        title: 'Jojob RT - Complete UX/UI Project',
        description: "Progetto UX/UI completo dalla Discovery all'interfaccia finale: ricerca, accessibilità, wireframe, UI e test con gli utenti.",
        tags: ['UX Research', 'Accessibility', 'Wireframing', 'UI Design'],
        tabs: [
            { label: 'Discovery', images: buildImages('Discovery', 1, 78, true, true) },
            { label: 'Accessibilità', images: buildImages('Accessibilità', 1, 61, true, true) },
            { label: 'Wireframe', images: buildImages('Wireframe', 1, 44, true, true) },
            { label: 'User Interface', images: buildImages('User Interface', 1, 26, true, false) },
            { label: 'User Test', images: [
                ...buildImages('User Test parte 1', 1, 13, false, false),
                ...buildImages('User Test parte 2', 1, 12, false, false)
            ]}
        ]
    }
};

let currentGalleryImages = [];
let currentGalleryIndex = 0;

function openGallery(key) {
    const project = projectsGalleryData[key];
    if (!project) return;

    document.getElementById('galleryTitle').textContent = project.title;
    document.getElementById('galleryDescription').textContent = project.description;

    const tagsContainer = document.getElementById('galleryTags');
    tagsContainer.innerHTML = project.tags.map(t => `<span class="tech-badge">${t}</span>`).join('');

    const tabsContainer = document.getElementById('galleryTabs');
    tabsContainer.innerHTML = '';

    if (project.tabs) {
        project.tabs.forEach((tab, index) => {
            const btn = document.createElement('button');
            btn.className = 'gallery-tab-btn' + (index === 0 ? ' active' : '');
            btn.textContent = tab.label;
            btn.addEventListener('click', function() {
                document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loadGalleryImages(tab.images);
            });
            tabsContainer.appendChild(btn);
        });
        loadGalleryImages(project.tabs[0].images);
    } else {
        loadGalleryImages(project.images);
    }

    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function loadGalleryImages(images) {
    currentGalleryImages = images;
    currentGalleryIndex = 0;
    renderGalleryDots();
    showGalleryImage(0);
}

function showGalleryImage(index) {
    if (index < 0) index = currentGalleryImages.length - 1;
    if (index >= currentGalleryImages.length) index = 0;
    currentGalleryIndex = index;

    const img = document.getElementById('galleryImage');
    img.src = currentGalleryImages[index];

    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    updateGalleryCounter();
}

function renderGalleryDots() {
    const dotsContainer = document.getElementById('galleryDots');
    dotsContainer.innerHTML = '';
    const maxDots = 12;
    const total = currentGalleryImages.length;

    if (total <= maxDots) {
        currentGalleryImages.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => showGalleryImage(i));
            dotsContainer.appendChild(dot);
        });
    } else {
        const counter = document.createElement('span');
        counter.style.color = 'var(--text-muted)';
        counter.style.fontSize = '12px';
        counter.id = 'galleryCounter';
        counter.textContent = `1 / ${total}`;
        dotsContainer.appendChild(counter);
    }
}

function updateGalleryCounter() {
    const counter = document.getElementById('galleryCounter');
    if (counter) counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
}

function closeGallery() {
    document.getElementById('galleryModal').classList.remove('active');
    document.body.style.overflow = '';
}

function initGalleryModal() {
    document.getElementById('galleryClose').addEventListener('click', closeGallery);
    document.getElementById('galleryModal').addEventListener('click', function(e) {
        if (e.target === this) closeGallery();
    });
    document.getElementById('galleryPrev').addEventListener('click', function() { showGalleryImage(currentGalleryIndex - 1); });
    document.getElementById('galleryNext').addEventListener('click', function() { showGalleryImage(currentGalleryIndex + 1); });
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('galleryModal').classList.contains('active')) return;
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') showGalleryImage(currentGalleryIndex - 1);
        if (e.key === 'ArrowRight') showGalleryImage(currentGalleryIndex + 1);
    });
}

function initProjectHandlers() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('mission-btn')) {
            const card = e.target.closest('.mission-card');
            const projectKey = card.getAttribute('data-project');
            const externalUrl = card.getAttribute('data-external');
            if (projectKey) openGallery(projectKey);
            else if (externalUrl) window.open(externalUrl, '_blank');
        }
    });
}

/* ===== NOTIFICA MOBILE ===== */
function showMobileNotification(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: #1a1f35; color: #ffffff; padding: 20px; border-radius: 16px;
        border: 2px solid #00d9ff; z-index: 9999; text-align: center; font-weight: 600;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); max-width: 300px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function() {
        if (document.body.contains(toast)) document.body.removeChild(toast);
    }, 2000);
}

/* ===== EMAILJS ===== */
function initEmailJS() {
    emailjs.init("TUA_PUBLIC_KEY");

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.classList.add('sending');
            submitBtn.innerHTML = '<span>INVIO IN CORSO...</span>';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            const templateParams = {
                user_name: form.user_name.value,
                user_email: form.user_email.value,
                subject: form.subject.value,
                message: form.message.value,
                to_name: 'Alice Martinazzoli'
            };

            emailjs.send('TUO_SERVICE_ID', 'TUO_TEMPLATE_ID', templateParams)
                .then(function() {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✅ Messaggio inviato con successo! Ti risponderò al più presto.';
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('sending');
                    submitBtn.innerHTML = '<span>INVIA MESSAGGIO</span>';
                    setTimeout(function() {
                        formStatus.className = 'form-status';
                        formStatus.textContent = '';
                    }, 5000);
                }, function() {
                    formStatus.className = 'form-status error';
                    formStatus.textContent = "❌ Errore nell'invio. Per favore riprova o contattami direttamente via email.";
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('sending');
                    submitBtn.innerHTML = '<span>INVIA MESSAGGIO</span>';
                });
        });
    }
}

console.log('✅ Portfolio JavaScript completo caricato!');

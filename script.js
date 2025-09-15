// Portfolio Alice Martinazzoli - JavaScript Finale con Animazioni Homepage

console.log('🚀 Caricamento Portfolio Alice...');

// Variabili globali
let isMenuOpen = false;
let loadingComplete = false;

// Inizializzazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM caricato, inizializzazione portfolio...');
    
    // Avvia animazione di caricamento
    startLoadingAnimation();
    
    // Inizializza portfolio dopo il caricamento - RIDOTTO A 1 SECONDO
    setTimeout(function() {
        finishLoading();
        initPortfolio();
    }, 1000);
});

// ANIMAZIONE DI CARICAMENTO
function startLoadingAnimation() {
    console.log('🚀 Avvio animazione caricamento...');
    
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    if (loadingScreen && loadingProgress) {
        loadingScreen.classList.remove('hidden');
        
        setTimeout(function() {
            loadingProgress.style.width = '100%';
        }, 100);
        
        console.log('🚀 Animazione razzo in corso...');
    }
}

function finishLoading() {
    console.log('✅ Caricamento completato!');
    
    const loadingScreen = document.getElementById('loadingScreen');
    
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        loadingComplete = true;
        
        setTimeout(function() {
            if (loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 800);
    }
}

// INIZIALIZZAZIONE PORTFOLIO
function initPortfolio() {
    initNavigation();
    initMobileMenu();
    initAnimations();
    initProjectHandlers();
    initTouchSupport();
    initCVDownload();
    initPowerUpsNavigation();
    initHeaderClick();
    initScrollAnimations(); // Nuova funzione per animazioni scroll
    
    setTimeout(function() {
        const buttons = document.querySelectorAll('.menu-btn');
        const sections = document.querySelectorAll('.game-section');
        
        console.log(`📊 Menu buttons trovati: ${buttons.length}`);
        console.log(`📊 Sezioni trovate: ${sections.length}`);
        
        if (buttons.length === 6 && sections.length === 6) {
            console.log('✅ Tutti i componenti caricati correttamente!');
            console.log('📱 Menu laterale mobile attivo');
            console.log('📄 Download CV PDF funzionante');
            console.log('🎯 Power-ups cliccabili attivi');
            console.log('🏠 Header cliccabile per tornare alla home');
            console.log('🎨 Animazioni homepage attive');
            console.log('⚡ Tempo di caricamento: 1 secondo');
        }
    }, 1000);
}

// INIZIALIZZAZIONE EMAILJS
function initEmailJS() {
    // Sostituisci 'YOUR_PUBLIC_KEY' con la tua chiave pubblica EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");
    
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disabilita il pulsante durante l'invio
            submitBtn.disabled = true;
            submitBtn.classList.add('sending');
            submitBtn.innerHTML = '<span>INVIO IN CORSO...</span>';
            
            // Resetta lo status precedente
            formStatus.className = 'form-status';
            formStatus.textContent = '';
            
            // Parametri per EmailJS
            const templateParams = {
                user_name: form.user_name.value,
                user_email: form.user_email.value,
                subject: form.subject.value,
                message: form.message.value,
                to_name: 'Alice Martinazzoli'
            };
            
            // Sostituisci 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' con i tuoi ID EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Mostra messaggio di successo
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✅ Messaggio inviato con successo! Ti risponderò al più presto.';
                    
                    // Resetta il form
                    form.reset();
                    
                    // Ripristina il pulsante
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('sending');
                    submitBtn.innerHTML = '<span>INVIA MESSAGGIO</span>';
                    
                    // Nascondi il messaggio dopo 5 secondi
                    setTimeout(function() {
                        formStatus.className = 'form-status';
                        formStatus.textContent = '';
                    }, 5000);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Mostra messaggio di errore
                    formStatus.className = 'form-status error';
                    formStatus.textContent = '❌ Errore nell\'invio. Per favore riprova o contattami direttamente via email.';
                    
                    // Ripristina il pulsante
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('sending');
                    submitBtn.innerHTML = '<span>INVIA MESSAGGIO</span>';
                });
        });
    }
    
    console.log('📧 Form contatto con EmailJS inizializzato');
}

// Modifica initPortfolio per includere initEmailJS
function initPortfolio() {
    initNavigation();
    initMobileMenu();
    initAnimations();
    initProjectHandlers();
    initTouchSupport();
    initCVDownload();
    initPowerUpsNavigation();
    initHeaderClick();
    initScrollAnimations();
    initEmailJS(); // <-- AGGIUNGI QUESTA RIGA
    
    // ... resto del codice
}

// POWER-UPS CLICCABILI
function initPowerUpsNavigation() {
    const powerUps = document.querySelectorAll('.power-up.clickable');
    
    powerUps.forEach(function(powerUp) {
        powerUp.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                const targetButton = document.querySelector(`[data-section="${target}"]`);
                if (targetButton) {
                    targetButton.click();
                    console.log(`🎯 Navigazione tramite power-up verso: ${target}`);
                }
            }
        });
        
        // Aggiungi effetto hover migliorato
        powerUp.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        powerUp.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('🎯 Power-ups cliccabili inizializzati');
}

// HEADER CLICCABILE PER TORNARE ALLA HOME
function initHeaderClick() {
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle) {
        headerTitle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Rimuovi active da tutti i bottoni e sezioni
            document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.game-section').forEach(section => section.classList.remove('active'));
            
            // Attiva home
            const homeSection = document.getElementById('home');
            const homeButton = document.querySelector('[data-section="home"]');
            
            if (homeSection && homeButton) {
                homeSection.classList.add('active');
                homeButton.classList.add('active');
                
                // Chiudi menu mobile se aperto
                if (isMenuOpen) {
                    closeMobileMenu();
                }
                
                // Scrolla verso l'alto
                window.scrollTo(0, 0);
                
                // Riavvia animazioni homepage
                setTimeout(function() {
                    animateHomePage();
                }, 100);
                
                console.log('🏠 Navigazione verso Home tramite header');
            }
        });
        console.log('🎯 Header cliccabile inizializzato');
    }
}

// ANIMAZIONI SCROLL HOMEPAGE
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('intro-text')) {
                    animateHomePage();
                }
            }
        });
    }, observerOptions);
    
    const introText = document.querySelector('.intro-text');
    if (introText) {
        observer.observe(introText);
    }
    
    console.log('📜 Animazioni scroll inizializzate');
}

// INIZIALIZZAZIONE EMAILJS - AGGIUNGI DOPO initScrollAnimations()
function initEmailJS() {
    // IMPORTANTE: Sostituisci con le tue chiavi EmailJS
    emailjs.init("TUA_PUBLIC_KEY"); // <-- METTI LA TUA PUBLIC KEY
    
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disabilita il pulsante durante l'invio
            submitBtn.disabled = true;
            submitBtn.classList.add('sending');
            submitBtn.innerHTML = '<span>INVIO IN CORSO...</span>';
            
            // Resetta lo status precedente
            formStatus.className = 'form-status';
            formStatus.textContent = '';
            
            // Parametri per EmailJS
            const templateParams = {
                user_name: form.user_name.value,
                user_email: form.user_email.value,
                subject: form.subject.value,
                message: form.message.value,
                to_name: 'Alice Martinazzoli'
            };
            
            // IMPORTANTE: Sostituisci con i tuoi ID EmailJS
            emailjs.send('TUO_SERVICE_ID', 'TUO_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Mostra messaggio di successo
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✅ Messaggio inviato con successo! Ti risponderò al più presto.';
                    
                    // Resetta il form
                    form.reset();
                    
                    // Ripristina il pulsante
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('sending');
                    submitBtn.innerHTML = '<span>INVIA MESSAGGIO</span>';
                    
                    // Nascondi il messaggio dopo 5 secondi
                    setTimeout(function() {
                        formStatus.className = 'form-status';
                        formStatus.textContent = '';
                    }, 5000);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Mostra messaggio di errore
                    formStatus.className = 'form-status error';
                    formStatus.textContent = '❌ Errore nell\'invio. Per favore riprova o contattami direttamente via email.';
                    
                    // Ripristina il pulsante
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('sending');
                    submitBtn.innerHTML = '<span>INVIA MESSAGGIO</span>';
                });
        });
    }
    
    console.log('📧 Form contatto con EmailJS inizializzato');
}

// DOWNLOAD CV PDF
function initCVDownload() {
    const downloadBtn = document.getElementById('downloadCvBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadCVPDF();
        });
        console.log('📄 Pulsante download CV PDF inizializzato');
    }
}

function downloadCVPDF() {
    console.log('📄 Avvio download CV PDF...');
    
    showMobileNotification('📄 Preparazione download CV PDF...');
    
    // Crea il contenuto HTML del CV ottimizzato per stampa
    const cvHTML = generateCVForPrint();
    
    // Crea una nuova finestra per la stampa
    const printWindow = window.open('', '_blank');
    printWindow.document.write(cvHTML);
    printWindow.document.close();
    
    // Avvia la stampa (l'utente potrà scegliere "Salva come PDF")
    setTimeout(function() {
        printWindow.print();
        
        // Chiudi la finestra dopo la stampa
        setTimeout(function() {
            printWindow.close();
        }, 1000);
        
        showMobileNotification('✅ CV pronto per il download PDF!');
    }, 500);
    
    console.log('✅ Finestra stampa CV aperta');
}

function generateCVForPrint() {
    return `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alice Martinazzoli - CV</title>
    <style>
        @page {
            margin: 1cm;
            size: A4;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            line-height: 1.5;
            color: #333;
            background: white;
            font-size: 12px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #00d9ff;
            padding-bottom: 15px;
        }
        
        .name {
            font-size: 28px;
            font-weight: bold;
            color: #00d9ff;
            margin-bottom: 8px;
        }
        
        .title {
            font-size: 16px;
            color: #666;
            margin-bottom: 15px;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 11px;
        }
        
        .section {
            margin-bottom: 25px;
            break-inside: avoid;
        }
        
        .section-title {
            font-size: 18px;
            color: #00d9ff;
            border-bottom: 2px solid #00d9ff;
            padding-bottom: 5px;
            margin-bottom: 15px;
            font-weight: bold;
        }
        
        .experience-item {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
            break-inside: avoid;
        }
        
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 5px;
            flex-wrap: wrap;
        }
        
        .job-title {
            font-size: 14px;
            font-weight: bold;
            color: #333;
        }
        
        .job-period {
            background: #00d9ff;
            color: white;
            padding: 3px 8px;
            border-radius: 10px;
            font-size: 10px;
            font-weight: bold;
        }
        
        .company {
            color: #ff6b9d;
            font-weight: bold;
            margin-bottom: 8px;
            font-size: 13px;
        }
        
        .description {
            margin: 0;
            padding-left: 0;
        }
        
        .description li {
            margin-bottom: 5px;
            list-style-type: none;
            position: relative;
            padding-left: 15px;
            font-size: 11px;
        }
        
        .description li::before {
            content: "▶";
            position: absolute;
            left: 0;
            color: #00d9ff;
            font-size: 8px;
            top: 2px;
        }
        
        .skills-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 10px;
        }
        
        .skill-category {
            background: #f8f9fa;
            padding: 12px;
            border-radius: 8px;
            border-left: 3px solid #00d9ff;
        }
        
        .skill-category h4 {
            color: #00d9ff;
            margin-bottom: 8px;
            font-size: 12px;
            margin-top: 0;
        }
        
        .skill-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .skill-list li {
            margin-bottom: 4px;
            padding: 3px 6px;
            background: white;
            border-radius: 4px;
            font-size: 10px;
        }
        
        .intro {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #00d9ff;
            font-size: 11px;
            line-height: 1.4;
        }
        
        .footer-info {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #666;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
        
        @media print {
            body { 
                padding: 0; 
                font-size: 11px;
            }
            .section { 
                break-inside: avoid; 
                margin-bottom: 20px;
            }
            .experience-item {
                break-inside: avoid;
            }
        }
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

    <div class="intro">
        <strong>Profilo Professionale:</strong> Diplomata in Grafica Pubblicitaria presso l'International School of Comics, ho completato un Master in UX/UI Design presso Start2Impact University nel 2025. Finalista al concorso "Talenti Accesi" di Torcha con il restyling della lattina BOEM. Esperienza su set cinematografici internazionali e autrice del libro "Gino Zamprioli: Make-up Artist dal 1969". Competenze tecniche acquisite anche come Salesforce Developer nel 2023.
    </div>

    <div class="section">
        <h2 class="section-title">Esperienza Lavorativa</h2>
        
        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Graphic Designer</span>
                <span class="job-period">2023-2024</span>
            </div>
            <div class="company">LGA Service - Roma</div>
            <ul class="description">
                <li>Sviluppo di materiali di marketing, presentazioni e comunicazioni visive</li>
                <li>Miglioramento dell'immagine aziendale attraverso design coeso e d'impatto</li>
                <li>Combinazione dell'eredità aziendale con tendenze del design contemporaneo</li>
            </ul>
        </div>
        
        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Graphic Designer</span>
                <span class="job-period">2022</span>
            </div>
            <div class="company">Panorama Films srl - Roma</div>
            <ul class="description">
                <li>Esperienza internazionale serie TV "Concordia" (ZDF STUDIOS)</li>
                <li>Creazione packaging, etichette, segnaletica e grafiche per veicoli</li>
                <li>Collaborazione multiculturale con scadenze strette</li>
                <li>Contributo al storytelling visivo cinematografico</li>
            </ul>
        </div>
        
        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Graphic Designer</span>
                <span class="job-period">2018-2021</span>
            </div>
            <div class="company">MP Partners - Costa Volpino (BG)</div>
            <ul class="description">
                <li>Crescita da Junior a referente Comunicazione e Marketing</li>
                <li>Sviluppo campagne visive, materiali editoriali e branding</li>
                <li>Transizione organica verso gestione Marketing</li>
                <li>Definizione ed esecuzione strategie di marketing</li>
            </ul>
        </div>
        
        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Social Media Manager</span>
                <span class="job-period">2017</span>
            </div>
            <div class="company">Cassette Venturi - Darfo B.T. (BS)</div>
            <ul class="description">
                <li>Sviluppo piano editoriale strategico per social media</li>
                <li>Creazione grafiche e shooting fotografici prodotti</li>
                <li>Gestione canali Facebook e Instagram</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Istruzione</h2>
        
        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Master UX/UI Designer</span>
                <span class="job-period">2025</span>
            </div>
            <div class="company">Start2Impact University</div>
            <p style="margin: 5px 0; font-size: 11px;">Esperienza comprovata in Discovery, Accessibilità e Wireframing, utilizzando metodologie user-centered.</p>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Salesforce Developer</span>
                <span class="job-period">2023</span>
            </div>
            <div class="company">Generation Italy</div>
            <p style="margin: 5px 0; font-size: 11px;">Corso intensivo in Salesforce Development con focus sul back-end.</p>
        </div>

        <div class="experience-item">
            <div class="job-header">
                <span class="job-title">Diploma Grafica Pubblicitaria</span>
                <span class="job-period">2015-2018</span>
            </div>
            <div class="company">International School of Comics - Brescia</div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Competenze</h2>
        <div class="skills-section">
            <div class="skill-category">
                <h4>Design Tools</h4>
                <ul class="skill-list">
                    <li>Adobe Creative Suite (Master)</li>
                    <li>Figma (Expert)</li>
                    <li>Sketch (Advanced)</li>
                    <li>Miro (Advanced)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Specializzazioni</h4>
                <ul class="skill-list">
                    <li>Graphic Design (Master)</li>
                    <li>UX/UI Design (Expert)</li>
                    <li>Brand Identity (Expert)</li>
                    <li>Package Design (Advanced)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>UX/UI</h4>
                <ul class="skill-list">
                    <li>UX Research (Expert)</li>
                    <li>Wireframing (Expert)</li>
                    <li>Prototyping (Advanced)</li>
                    <li>Accessibilità (Expert)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Sviluppo</h4>
                <ul class="skill-list">
                    <li>HTML/CSS (Basic)</li>
                    <li>JavaScript (Basic)</li>
                    <li>Java (Basic)</li>
                    <li>Salesforce (Basic)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Progetti Principali</h2>
        <div style="font-size: 11px;">
            <p><strong>• Finalista "Talenti Accesi" (2025):</strong> Restyling creativo lattina BOEM per Torcha</p>
            <p><strong>• Libro "Gino Zamprioli: Make-up Artist dal 1969":</strong> Progetto editoriale completo</p>
            <p><strong>• Custom Fake Tattoos - Birra Moretti:</strong> Tatuaggi finti per spot pubblicitario</p>
            <p><strong>• Jojob RT UX/UI Project:</strong> Progetto completo dalla Discovery all'UI finale</p>
        </div>
    </div>

    <div class="footer-info">
        <p><strong>Portfolio online:</strong> https://www.behance.net/alicemarti563e</p>
        <p style="margin-top: 8px;">Autorizzo il trattamento dei miei dati personali in base all'art. 13 GDPR 679/16</p>
    </div>
</body>
</html>`;
}

// GESTIONE NAVIGAZIONE
function initNavigation() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const sections = document.querySelectorAll('.game-section');
    
    menuButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            console.log(`🔄 Navigazione verso: ${targetSection}`);
            
            menuButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                targetElement.classList.add('active');
                console.log(`✅ Sezione ${targetSection} attivata`);
                
                if (isMenuOpen) {
                    closeMobileMenu();
                }
                
                if (window.innerWidth <= 768) {
                    window.scrollTo(0, 0);
                }
                
                setTimeout(function() {
                    handleSectionAnimations(targetSection);
                }, 300);
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (window.innerWidth > 768 && loadingComplete) {
            const keyMap = ['1', '2', '3', '4', '5', '6'];
            const index = keyMap.indexOf(e.key);
            
            if (index >= 0 && menuButtons[index]) {
                menuButtons[index].click();
            }
        }
        
        if (e.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
        }
    });
}

// GESTIONE MENU MOBILE
function initMobileMenu() {
    console.log('📱 Inizializzazione menu mobile laterale...');
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const gameMenu = document.getElementById('gameMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (!hamburgerBtn || !gameMenu || !menuOverlay) {
        console.error('❌ Elementi menu mobile non trovati!');
        return;
    }
    
    hamburgerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    menuOverlay.addEventListener('click', function() {
        if (isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    console.log('✅ Menu mobile laterale inizializzato');
}

function toggleMobileMenu() {
    if (isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    console.log('📱 Apertura menu laterale...');
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const gameMenu = document.getElementById('gameMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (hamburgerBtn && gameMenu && menuOverlay) {
        hamburgerBtn.classList.add('active');
        gameMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        isMenuOpen = true;
        console.log('✅ Menu laterale aperto');
    }
}

function closeMobileMenu() {
    console.log('📱 Chiusura menu laterale...');
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const gameMenu = document.getElementById('gameMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (hamburgerBtn && gameMenu && menuOverlay) {
        hamburgerBtn.classList.remove('active');
        gameMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        isMenuOpen = false;
        console.log('✅ Menu laterale chiuso');
    }
}

// TOUCH SUPPORT
function initTouchSupport() {
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    const buttons = document.querySelectorAll('button, .contact-btn, .mission-btn, .power-up');
    buttons.forEach(function(button) {
        button.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        button.addEventListener('touchend', function() {
            const self = this;
            setTimeout(function() {
                self.classList.remove('touch-active');
            }, 150);
        });
    });
    
    if (window.innerWidth <= 768) {
        initSwipeNavigation();
    }
}

function initSwipeNavigation() {
    let startX = 0;
    let startY = 0;
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
            
            let newIndex;
            if (diffX > 0) {
                newIndex = currentIndex + 1;
            } else {
                newIndex = currentIndex - 1;
            }
            
            if (newIndex >= 0 && newIndex < sections.length) {
                const button = document.querySelector(`[data-section="${sections[newIndex]}"]`);
                if (button) {
                    button.click();
                }
            }
        }
        
        startX = 0;
        startY = 0;
    });
}

// ANIMAZIONI
function handleSectionAnimations(sectionName) {
    switch(sectionName) {
        case 'home':
            animateHomePage();
            break;
        case 'about':
            animateStats();
            break;
        case 'cv':
            animateCV();
            break;
        case 'projects':
            animateProjects();
            break;
        case 'skills':
            animateSkills();
            break;
        case 'contact':
            animateContact();
            break;
    }
}

// ANIMAZIONE HOMEPAGE
function animateHomePage() {
    // Reset delle animazioni
    const animatedElements = document.querySelectorAll('.welcome-title span, .game-description, .power-up, .character-illustration');
    
    animatedElements.forEach(function(element) {
        // Rimuovi e riapplica l'animazione
        const animation = window.getComputedStyle(element).animation;
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = null;
    });
    
    console.log('🎨 Animazioni homepage riavviate');
}

function animateStats() {
    const statFills = document.querySelectorAll('.stat-fill');
    
    statFills.forEach(function(fill, index) {
        const targetWidth = fill.getAttribute('data-width');
        fill.style.width = '0%';
        
        setTimeout(function() {
            fill.style.width = targetWidth;
        }, index * 200 + 100);
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
        }, index * 150);
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
    const avatar = document.querySelector('.npc-avatar');
    const bubble = document.querySelector('.speech-bubble');
    const buttons = document.querySelectorAll('.contact-btn');
    
    if (avatar) {
        avatar.style.transform = 'scale(0)';
        setTimeout(function() {
            avatar.style.transition = 'transform 0.5s ease';
            avatar.style
            avatar.style.transform = 'scale(1)';
       }, 200);
   }
   
   if (bubble) {
       bubble.style.opacity = '0';
       bubble.style.transform = 'translateX(-30px)';
       setTimeout(function() {
           bubble.style.transition = 'all 0.5s ease';
           bubble.style.opacity = '1';
           bubble.style.transform = 'translateX(0)';
       }, 400);
   }
   
   buttons.forEach(function(btn, index) {
       btn.style.opacity = '0';
       btn.style.transform = 'translateY(20px)';
       
       setTimeout(function() {
           btn.style.transition = 'all 0.4s ease';
           btn.style.opacity = '1';
           btn.style.transform = 'translateY(0)';
       }, 600 + (index * 100));
   });
}

function initAnimations() {
   const sprite = document.querySelector('.character-sprite');
   if (sprite) {
       setInterval(function() {
           sprite.style.transform = 'scale(1.05)';
           setTimeout(function() {
               sprite.style.transform = 'scale(1)';
           }, 1000);
       }, 4000);
   }
   
   const aboutSection = document.getElementById('about');
   if (aboutSection && aboutSection.classList.contains('active')) {
       setTimeout(animateStats, 1000);
   }
}

// GESTIONE PROGETTI
function initProjectHandlers() {
   document.addEventListener('click', function(e) {
       if (e.target.classList.contains('mission-btn')) {
           const card = e.target.closest('.mission-card');
           const title = card.querySelector('.mission-title').textContent;
           
           const projectLinks = {
               'Restyling Lattina BOEM': 'https://www.behance.net/gallery/233194551/Rebranding-BOEM-can',
               '"Gino Zamprioli: Make-up Artist dal 1969"': 'https://www.behance.net/gallery/107566109/Gino-Zamprioli-book',
               'Jojob RT - Complete UX/UI Project': createJojobModal,
               'Custom Fake Tattoos - Birra Moretti': 'https://www.behance.net/gallery/169297515/Custom-fake-tattoos-for-adv-Birra-Moretti',
               'Planty of Food': 'https://www.behance.net/gallery/232995341/Logo-Design-Planty-of-Food',
               'Officina Spatti': 'https://www.behance.net/gallery/94515697/Officina-Spatti-Calzature',
               'Progetti Cinematografici Internazionali': 'https://www.imdb.com/it/name/nm14138071/',
               'Social Media Design': 'https://www.behance.net/alicemarti563e',
               'Master UX/UI Design': 'https://www.behance.net/alicemarti563e'
           };
           
           const link = projectLinks[title];
           
           if (typeof link === 'function') {
               link();
           } else if (link) {
               window.open(link, '_blank');
           } else {
               window.open('https://www.behance.net/alicemarti563e', '_blank');
           }
       }
   });
}

// NOTIFICA MOBILE
function showMobileNotification(message) {
   const toast = document.createElement('div');
   toast.style.cssText = `
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       background: #1a1f35;
       color: #ffffff;
       padding: 20px;
       border-radius: 16px;
       border: 2px solid #00d9ff;
       z-index: 9999;
       text-align: center;
       font-weight: 600;
       box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
       max-width: 300px;
   `;
   
   toast.textContent = message;
   document.body.appendChild(toast);
   
   setTimeout(function() {
       if (document.body.contains(toast)) {
           document.body.removeChild(toast);
       }
   }, 2000);
}

// MODAL JOJOB
function createJojobModal() {
   const modal = document.createElement('div');
   const isMobile = window.innerWidth <= 768;
   
   modal.style.cssText = `
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(0, 0, 0, 0.95);
       z-index: 2000;
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 20px;
       overflow-y: auto;
   `;
   
   modal.innerHTML = `
       <div style="
           background: linear-gradient(145deg, #1a1a2e, #16213e);
           padding: 30px;
           border-radius: 20px;
           border: 3px solid #00d9ff;
           max-width: 800px;
           width: 100%;
           text-align: center;
           max-height: 80vh;
           overflow-y: auto;
       ">
           <h2 style="color: #00d9ff; margin-bottom: 20px;">🎯 Jojob RT - Complete UX/UI Project</h2>
           <p style="color: #ccc; margin-bottom: 30px;">
               Progetto UX/UI completo che mostra l'intero processo di design dalla ricerca all'interfaccia finale.
           </p>
           
           <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 20px;">
               <a href="https://www.behance.net/gallery/232996099/Discovery-pt-1-UXUI-Design-Project" target="_blank" 
                  style="background: #00d9ff; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">Discovery 1</a>
               <a href="https://www.behance.net/gallery/232996289/Discovery-pt-2-UXUI-Design-Project" target="_blank" 
                  style="background: #00d9ff; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">Discovery 2</a>
               <a href="https://www.behance.net/gallery/232997067/Accessibilita-UXUI-Design-Project-pt1" target="_blank" 
                  style="background: #ff6b9d; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">Accessibility 1</a>
               <a href="https://www.behance.net/gallery/232997251/Accessibilita-UXUI-Design-project-pt-2" target="_blank" 
                  style="background: #ff6b9d; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">Accessibility 2</a>
               <a href="https://www.behance.net/gallery/232997725/Wireframe-Desktop-UXUI-Design-Project-Part-1" target="_blank" 
                  style="background: #ffd93d; color: #1a1a2e; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">Wireframe 1</a>
               <a href="https://www.behance.net/gallery/232997877/Wireframe-UXUI-Design-Part-2" target="_blank" 
                  style="background: #ffd93d; color: #1a1a2e; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">Wireframe 2</a>
               <a href="https://www.behance.net/gallery/232998373/User-Interface-UXUI-Design-Project-Part-1" target="_blank" 
                  style="background: #6bcf7f; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">UI Desktop</a>
               <a href="https://www.behance.net/gallery/233790479/UXUI-Design-Project-Mobile" target="_blank" 
                  style="background: #6bcf7f; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 12px;">UI Mobile</a>
           </div>
           
           <button onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = '';" 
                   style="background: transparent; color: #00d9ff; border: 2px solid #00d9ff; padding: 12px 25px; 
                          border-radius: 25px; cursor: pointer; font-weight: bold;">
               CHIUDI
           </button>
       </div>
   `;
   
   document.body.appendChild(modal);
   document.body.style.overflow = 'hidden';
   
   modal.addEventListener('click', function(e) {
       if (e.target === modal) {
           modal.remove();
           document.body.style.overflow = '';
       }
   });
}

// DEBUG FUNCTIONS
window.portfolioDebug = {
   toggleMobileMenu: toggleMobileMenu,
   downloadCVPDF: downloadCVPDF,
   createJojobModal: createJojobModal
};

console.log('✅ Portfolio JavaScript finale caricato!');
console.log('📱 Menu laterale mobile funzionante');
console.log('📄 Download CV PDF tramite stampa');
console.log('🎯 Power-ups cliccabili che portano ai progetti');
console.log('📊 Barre statistiche visibili anche su mobile');
console.log('🎬 Progetto Cinetattoo aggiunto con link Behance');
console.log('🏠 Header cliccabile per tornare alla home');
console.log('🎨 Animazioni homepage con testo progressivo');
console.log('⚡ Tempo di caricamento: 1 secondo');

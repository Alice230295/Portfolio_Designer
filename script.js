/* =====================================================================
   PORTFOLIO ALICE MARTINAZZOLI
   Tutti i progetti sono nell'elenco PROJECTS qui sotto.
   Per aggiungerne o modificarne uno basta cambiare questo elenco:
   le schede in home e la pagina del progetto si creano da sole.
   ===================================================================== */

const EMAIL = 'alicemartinazzoli95@icloud.com';
const IMG = 'img/projects/';

/* Crea l'elenco dei file di una cartella: 01.webp, 02.webp, ...
   opzioni: pad (numeri con lo zero davanti), ext (estensione),
   cover (aggiunge Copertina in testa), skip (numeri da saltare),
   other (file con estensione diversa, es. { 4: 'jpg' }) */
function files(folder, from, to, opt) {
    opt = Object.assign({ pad: true, ext: 'webp', cover: false, skip: [], other: {} }, opt);
    const list = [];
    if (opt.cover) list.push(IMG + folder + '/Copertina.' + opt.ext);
    for (let i = from; i <= to; i++) {
        if (opt.skip.indexOf(i) !== -1) continue;
        const n = opt.pad ? String(i).padStart(2, '0') : String(i);
        list.push(IMG + folder + '/' + n + '.' + (opt.other[i] || opt.ext));
    }
    return list;
}

const PROJECTS = [
    {
        id: 'jojob',
        title: 'Jojob Real Time Carpooling',
        subtitle: 'Redesign UX/UI del sito, dalla ricerca ai test',
        categories: ['UX/UI'],
        featured: true,
        cover: IMG + 'User Interface/17.webp',
        facts: [
            ['Contesto', 'Master UX/UI, Start2Impact University'],
            ['Anno', '2025'],
            ['Ruolo', 'Ricerca, UX, UI, test'],
            ['Strumenti', 'Figma, Miro']
        ],
        text: [
            'Ho analizzato e riprogettato il sito di Jojob Real Time Carpooling, il servizio di carpooling per aziende e pendolari. Il progetto copre tutto il percorso: dalla ricerca iniziale all\'interfaccia finale, verificata con gli utenti.',
            'Ogni fase è documentata qui sotto: scegli una scheda per vedere il lavoro.'
        ],
        tabs: [
            {
                label: 'Discovery',
                text: 'Analisi del cliente, dei competitor e del sito esistente. Valutazione euristica, questionario di 17 domande e user personas per capire chi usa il servizio e dove incontra difficoltà.',
                images: files('Discovery', 1, 78, { cover: true })
            },
            {
                label: 'Accessibilità',
                text: 'Personas con diverse disabilità, user journey e analisi pagina per pagina del sito secondo i quattro principi dell\'accessibilità: contrasti, testi alternativi, alternative ai gesti di trascinamento.',
                images: files('Accessibilità', 1, 61, { cover: true, other: { 61: 'jpg' } })
            },
            {
                label: 'Wireframe',
                text: 'Wireframe delle pagine principali in versione desktop e mobile, con le scelte spiegate sezione per sezione.',
                images: files('Wireframe', 1, 44, { cover: true })
            },
            {
                label: 'Interfaccia',
                text: 'Interfaccia finale in Figma: palette, tipografia, contrasti verificati ai livelli AA e AAA, navigazione da tastiera e screen reader, microinterazioni e mockup.',
                images: files('User Interface', 1, 26)
            },
            {
                label: 'Test utenti',
                text: 'Due sessioni di test sul flusso di ricerca dei passaggi, con osservazioni e miglioramenti emersi.',
                images: files('User Test parte 1', 1, 13, { pad: false, ext: 'jpg' })
                    .concat(files('User Test parte 2', 1, 12, { pad: false, ext: 'jpg' }))
            }
        ]
    },
    {
        id: 'boem',
        title: 'Lattina BOEM',
        subtitle: 'Restyling del packaging, finalista a Talenti Accesi 2025',
        categories: ['Branding'],
        featured: true,
        badge: 'Finalista Talenti Accesi 2025',
        cover: IMG + 'BOEM/02.webp',
        coverZoom: 1.4,            /* ingrandisce la copertina sulla lattina */
        coverOrigin: 'right center',
        facts: [
            ['Contesto', 'Concorso "Talenti Accesi" di Torcha'],
            ['Anno', '2025'],
            ['Ambito', 'Branding, package design'],
            ['Risultato', 'Progetto finalista']
        ],
        text: [
            'Proposta di restyling per la lattina dell\'hard seltzer BOEM. La grafica parte dai valori del brand: freschezza, condivisione, innovazione e sostenibilità, con colori vivaci e bolle stilizzate che richiamano la frizzantezza della bevanda.',
            'Un QR code integrato nel design porta a playlist su Spotify e filtri Instagram, così la lattina diventa anche un invito a condividere il momento.'
        ],
        images: files('BOEM', 1, 6)
    },
    {
        id: 'resolution-tech',
        title: 'Resolution Tech',
        subtitle: 'Rebranding e redesign del sito',
        categories: ['UX/UI', 'Branding'],
        cover: IMG + 'Resolution Tech/1.jpg',
        coverPos: 'left center',
        facts: [
            ['Cliente', 'Resolution Tech'],
            ['Ambito', 'Logo, brand system, sito web'],
            ['Strumenti', 'Figma']
        ],
        text: [
            'Redesign completo del sito e dell\'identità digitale di Resolution Tech, dal Figma al lancio online. Sono partita dai limiti del vecchio logo, ho proposto tre direzioni e costruito un brand system completo, poi ho ripensato architettura e contenuti del sito.'
        ],
        tabs: [
            {
                label: 'Logo e brand system',
                text: 'Analisi del logo esistente, tre proposte e il sistema di colori, testi e stati per il digitale.',
                images: files('Resolution Tech', 1, 20, { pad: false, ext: 'jpg' })
            },
            {
                label: 'Analisi e redesign del sito',
                text: 'Opportunità di miglioramento, nuova architettura, contenuti pagina per pagina e piano di lavoro presentati al cliente.',
                images: files('Presentazione Resolution Tech', 1, 42, { pad: false, ext: 'jpg', skip: [19] })
            }
        ]
    },
    {
        id: 'gino-zamprioli',
        title: 'Gino Zamprioli. Make up artist dal 1967',
        subtitle: 'Progetto editoriale e impaginazione del libro',
        categories: ['Editoria'],
        cover: IMG + 'Design Book/05.webp',
        facts: [
            ['Ambito', 'Editorial design, impaginazione, tipografia'],
            ['Risultato', 'Libro pubblicato']
        ],
        text: [
            'Libro fotografico dedicato a una figura storica del trucco cinematografico. Ho curato il progetto dalla ricerca alla realizzazione grafica: struttura, griglia, tipografia e impaginazione di foto di scena e testi, film dopo film.'
        ],
        images: files('Design Book', 1, 5)
    },
    {
        id: 'planty-of-food',
        title: 'Planty of Food',
        subtitle: 'Logo e manuale d\'uso del marchio',
        categories: ['Branding'],
        cover: IMG + 'Logo design/Copertina.webp',
        facts: [
            ['Contesto', 'Start2Impact University'],
            ['Ambito', 'Logo design, brand identity']
        ],
        text: [
            'Redesign del logo di Planty of Food, e-commerce che promuove un\'alimentazione plant based sostenibile e accessibile. Il marchio unisce la foglia e la forchetta; il manuale definisce configurazioni, dimensioni minime, colori, usi impropri, tipografia, icone e comunicazione social.'
        ],
        images: files('Logo design', 1, 19, { cover: true })
    },
    {
        id: 'cinetattoo',
        title: 'Tatuaggi di scena per Birra Moretti',
        subtitle: 'Tatuaggi finti su misura per uno spot',
        categories: ['Cinema e tv'],
        cover: IMG + 'Cinetattoo/03.webp',
        facts: [
            ['Progetto', 'Cinetattoo'],
            ['Ambito', 'Design su misura, advertising']
        ],
        text: [
            'Tatuaggi finti personalizzati per lo spot pubblicitario di Birra Moretti: disegno realistico pensato per il personaggio e applicazione professionale sul set.'
        ],
        images: files('Cinetattoo', 1, 6, { other: { 6: 'png' } })
    },
    {
        id: 'brand-e-stampa',
        title: 'Brand e materiali stampati',
        subtitle: 'Loghi, coordinati, brochure e insegne per diversi clienti',
        categories: ['Branding'],
        cover: IMG + 'Graphic Design/01.webp',
        facts: [
            ['Ambito', 'Loghi, immagine coordinata, stampa']
        ],
        text: [
            'Una selezione di lavori di graphic design: loghi, biglietti da visita, brochure, merchandising, shopper e insegne realizzati per clienti di settori diversi.'
        ],
        images: files('Graphic Design', 1, 15, { other: { 4: 'jpg' } })
    },
    {
        id: 'video-editing',
        title: 'Video editing',
        subtitle: 'Montaggi per social e produzioni più curate',
        categories: ['Video'],
        type: 'video',
        cover: IMG + 'Video editing/03.mp4',
        facts: [
            ['Ambito', 'Montaggio, storytelling'],
            ['Strumenti', 'CapCut, Edits']
        ],
        text: [
            'Una selezione di montaggi: contenuti brevi per i social e video più lunghi, costruiti su ritmo, storytelling e montaggio dinamico.'
        ],
        images: files('Video editing', 1, 5, { ext: 'mp4' })
    },
    {
        id: 'cinema-tv',
        title: 'Grafica di scena per cinema e tv',
        subtitle: 'Produzioni internazionali, tra cui la serie "Concordia"',
        categories: ['Cinema e tv'],
        external: 'https://www.imdb.com/it/name/nm14138071/',
        externalLabel: 'Vedi su IMDb'
    }
];

/* ===================================================================== */

const byId = {};
PROJECTS.forEach(function (p) { byId[p.id] = p; });

const homeView = document.getElementById('homeView');
const projectView = document.getElementById('projectView');
const grid = document.getElementById('projectGrid');
const filtersBox = document.getElementById('filters');
const HOME_TITLE = document.title;
const THUMBS_SHOWN = 6;

let activeFilter = 'Tutti';
let homeScroll = null;

function el(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'text') node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
}

/* ---------- Schede dei progetti in home ---------- */

function renderFilters() {
    const cats = ['Tutti'];
    PROJECTS.forEach(function (p) {
        p.categories.forEach(function (c) { if (cats.indexOf(c) === -1) cats.push(c); });
    });
    filtersBox.innerHTML = '';
    cats.forEach(function (c) {
        const b = el('button', { type: 'button', class: 'chip', 'aria-pressed': String(c === activeFilter), text: c });
        b.addEventListener('click', function () {
            activeFilter = c;
            renderFilters();
            renderGrid();
        });
        filtersBox.appendChild(b);
    });
}

function coverNode(p) {
    if (!p.cover) {
        return el('div', { class: 'card-cover card-cover-text', 'aria-hidden': 'true' }, [
            el('span', { text: 'Cinema e tv' })
        ]);
    }
    const box = el('div', { class: 'card-cover' });
    if (p.type === 'video') {
        const v = el('video', { src: p.cover + '#t=1', preload: 'metadata', playsinline: '', tabindex: '-1', 'aria-hidden': 'true' });
        v.muted = true;
        box.appendChild(v);
        box.appendChild(el('span', { class: 'play-mark', 'aria-hidden': 'true', text: '▶' }));
    } else {
        const img = el('img', { src: p.cover, alt: '', loading: 'lazy', decoding: 'async' });
        if (p.coverPos) img.style.objectPosition = p.coverPos;
        if (p.coverZoom) {
            img.style.transform = 'scale(' + p.coverZoom + ')';
            img.style.transformOrigin = p.coverOrigin || 'center';
        }
        box.appendChild(img);
    }
    if (p.badge) box.appendChild(el('span', { class: 'card-badge', text: p.badge }));
    return box;
}

function renderGrid() {
    grid.innerHTML = '';
    const list = PROJECTS.filter(function (p) {
        return activeFilter === 'Tutti' || p.categories.indexOf(activeFilter) !== -1;
    });
    list.forEach(function (p) {
        let cls = 'card';
        if (activeFilter === 'Tutti' && p.featured) cls += ' card-featured';
        if (activeFilter === 'Tutti' && p.external) cls += ' card-wide';
        const attrs = { class: cls };
        if (p.external) {
            attrs.href = p.external;
            attrs.target = '_blank';
            attrs.rel = 'noopener';
        } else {
            attrs.href = '#/progetto/' + p.id;
        }
        const card = el('a', attrs, [
            coverNode(p),
            el('div', { class: 'card-body' }, [
                el('p', { class: 'card-cat', text: p.categories.join(', ') }),
                el('h3', { class: 'card-title', text: p.title }),
                el('p', { class: 'card-sub', text: p.subtitle }),
                p.external ? el('p', { class: 'card-ext', text: p.externalLabel + ' (si apre in una nuova scheda)' }) : null
            ])
        ]);
        if (!p.external) {
            card.addEventListener('click', function () { homeScroll = window.scrollY; });
        }
        grid.appendChild(card);
    });
}

/* ---------- Pagina del progetto ---------- */

function galleryNode(images, isVideo, title) {
    const wrap = el('div', { class: 'gallery' + (isVideo ? ' gallery-video' : '') });
    if (isVideo) {
        images.forEach(function (src, i) {
            wrap.appendChild(el('video', {
                src: src + '#t=1', controls: '', preload: 'metadata', playsinline: '',
                'aria-label': title + ', video ' + (i + 1)
            }));
        });
        return wrap;
    }
    const more = images.length > THUMBS_SHOWN;
    images.forEach(function (src, i) {
        const btn = el('button', { type: 'button', class: 'thumb', 'aria-label': 'Ingrandisci immagine ' + (i + 1) + ' di ' + images.length }, [
            el('img', { src: src, alt: title + ', immagine ' + (i + 1), loading: 'lazy', decoding: 'async' })
        ]);
        if (more && i >= THUMBS_SHOWN) btn.hidden = true;
        btn.addEventListener('click', function () { openLightbox(images, i, title); });
        wrap.appendChild(btn);
    });
    if (!more) return wrap;

    const holder = el('div', {}, [wrap]);
    const showAll = el('button', { type: 'button', class: 'btn btn-ghost show-all', text: 'Mostra tutte le ' + images.length + ' immagini' });
    showAll.addEventListener('click', function () {
        wrap.querySelectorAll('.thumb[hidden]').forEach(function (b) { b.hidden = false; });
        showAll.remove();
    });
    holder.appendChild(showAll);
    return holder;
}

function renderProject(p) {
    projectView.innerHTML = '';

    const back = el('a', { class: 'back-link', href: '#progetti', text: '‹ Tutti i progetti' });
    const head = el('header', { class: 'project-head' }, [
        el('p', { class: 'card-cat', text: p.categories.join(', ') }),
        el('h1', { class: 'project-title', tabindex: '-1', text: p.title }),
        el('p', { class: 'project-sub', text: p.subtitle })
    ]);

    const facts = el('dl', { class: 'facts' });
    (p.facts || []).forEach(function (f) {
        facts.appendChild(el('div', {}, [el('dt', { text: f[0] }), el('dd', { text: f[1] })]));
    });

    const text = el('div', { class: 'project-text' });
    (p.text || []).forEach(function (t) { text.appendChild(el('p', { text: t })); });

    const intro = el('div', { class: 'project-intro' }, [text, facts]);
    const body = el('div', { class: 'project-body' });

    if (p.tabs) {
        const tablist = el('div', { class: 'tabs', role: 'tablist', 'aria-label': 'Fasi del progetto' });
        const panel = el('div', { class: 'tab-panel', role: 'tabpanel', id: 'tabPanel', tabindex: '0' });
        const buttons = [];

        function select(index, focus) {
            buttons.forEach(function (b, i) {
                b.setAttribute('aria-selected', String(i === index));
                b.tabIndex = i === index ? 0 : -1;
            });
            const tab = p.tabs[index];
            panel.innerHTML = '';
            panel.setAttribute('aria-label', tab.label);
            panel.appendChild(el('p', { class: 'tab-text', text: tab.text }));
            panel.appendChild(galleryNode(tab.images, false, p.title + ', ' + tab.label));
            if (focus) buttons[index].focus();
        }

        p.tabs.forEach(function (tab, i) {
            const b = el('button', { type: 'button', role: 'tab', class: 'tab', 'aria-controls': 'tabPanel' }, [
                el('span', { text: tab.label }),
                el('span', { class: 'tab-count', text: String(tab.images.length) })
            ]);
            b.addEventListener('click', function () { select(i, false); });
            b.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowRight') select((i + 1) % p.tabs.length, true);
                if (e.key === 'ArrowLeft') select((i - 1 + p.tabs.length) % p.tabs.length, true);
            });
            buttons.push(b);
            tablist.appendChild(b);
        });
        body.appendChild(tablist);
        body.appendChild(panel);
        select(0, false);
    } else {
        body.appendChild(galleryNode(p.images, p.type === 'video', p.title));
    }

    /* Progetto successivo (salta quelli che portano fuori dal sito) */
    const internal = PROJECTS.filter(function (x) { return !x.external; });
    const next = internal[(internal.indexOf(p) + 1) % internal.length];
    const foot = el('footer', { class: 'project-foot' }, [
        el('a', { class: 'next-link', href: '#/progetto/' + next.id }, [
            el('span', { class: 'next-label', text: 'Progetto successivo' }),
            el('span', { class: 'next-title', text: next.title })
        ]),
        el('a', { class: 'btn btn-primary', href: '#contatti', text: 'Parliamo del tuo progetto' })
    ]);

    projectView.appendChild(el('div', { class: 'wrap' }, [back, head, intro, body, foot]));
}

/* ---------- Navigazione: ogni progetto ha il suo indirizzo ---------- */

function route() {
    const hash = decodeURIComponent(location.hash);
    const match = hash.match(/^#\/progetto\/([\w-]+)$/);
    const project = match && byId[match[1]];

    if (project && !project.external) {
        homeView.hidden = true;
        projectView.hidden = false;
        renderProject(project);
        document.title = project.title + ' | Alice Martinazzoli';
        window.scrollTo(0, 0);
        const h = projectView.querySelector('.project-title');
        if (h) h.focus({ preventScroll: true });
        return;
    }

    const cameFromProject = !projectView.hidden;
    projectView.hidden = true;
    projectView.innerHTML = '';
    homeView.hidden = false;
    document.title = HOME_TITLE;

    if (cameFromProject && hash === '#progetti' && homeScroll !== null) {
        window.scrollTo(0, homeScroll);
    } else if (cameFromProject || match) {
        const target = hash.length > 1 && !match ? document.getElementById(hash.slice(1)) : null;
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
    }
    homeScroll = null;
}

/* ---------- Visualizzatore immagini ---------- */

const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCounter = document.getElementById('lbCounter');
let lbList = [];
let lbIndex = 0;
let lbTitle = '';

function showLightboxImage(i) {
    lbIndex = (i + lbList.length) % lbList.length;
    lbImage.src = lbList[lbIndex];
    lbImage.alt = lbTitle + ', immagine ' + (lbIndex + 1);
    lbCounter.textContent = (lbIndex + 1) + ' / ' + lbList.length;
    const single = lbList.length < 2;
    document.getElementById('lbPrev').hidden = single;
    document.getElementById('lbNext').hidden = single;
}

function openLightbox(list, index, title) {
    lbList = list;
    lbTitle = title;
    showLightboxImage(index);
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
    else lightbox.setAttribute('open', '');
}

function closeLightbox() {
    if (typeof lightbox.close === 'function') lightbox.close();
    else lightbox.removeAttribute('open');
    lbImage.removeAttribute('src');
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', function () { showLightboxImage(lbIndex - 1); });
document.getElementById('lbNext').addEventListener('click', function () { showLightboxImage(lbIndex + 1); });
lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
lightbox.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') showLightboxImage(lbIndex - 1);
    if (e.key === 'ArrowRight') showLightboxImage(lbIndex + 1);
});

/* Scorrimento con il dito sul telefono */
let touchX = null;
lightbox.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) showLightboxImage(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
});

/* ---------- Menu su telefono ---------- */

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

function closeNav() {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', function () {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
});
siteNav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeNav(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

/* ---------- Modulo contatti: apre l'email già compilata ---------- */

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const f = e.target;
    const subject = f.subject.value.trim() || 'Richiesta dal portfolio';
    const body = f.message.value.trim() + '\n\n' + f.name.value.trim();
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

/* ---------- Avvio ---------- */

renderFilters();
renderGrid();
window.addEventListener('hashchange', route);
route();

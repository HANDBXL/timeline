document.addEventListener('DOMContentLoaded', () => {
    const scrollTrigger = document.getElementById('infinite-scroll-trigger');
    const mainContent = document.getElementById('main-content');
    const loadingIndicator = document.getElementById('loading-indicator');
    const resetBtn = document.getElementById('reset-filter');

    // CONFIGURATION DU PORTFOLIO
    const portfolioData = {
        "2024": [
            "04.webp", "BISSO-NA-BISSO-02.webp", "BOOBA-KAARIS-01.webp", "FOOD-01.gif",
            "FOOD-02.gif", "FOOD-03.gif", "IMG_0222-2.webp", "IMG_0250.webp",
            "IMG_6670.webp", "IMG_6844.webp", "IMG_6847.webp", "IMG_6848.webp",
            "IMG_6851.webp", "IMG_7111.webp", "IMG_7784.webp", "IMG_8740.webp",
            "IMG_9183.webp", "Illustration_sans_titre 13.webp", "Illustration_sans_titre 97.webp", "Illustration_sans_titre 98.webp",
            "Illustration_sans_titre-69.webp", "Illustration_sans_titre-70.webp", "MARION-40ANS.webp", "MIA-001.webp",
            "MIA-002.webp", "MIA-003.webp", "MIA-004.gif", "TEST-01.webp",
            "TEST-12.webp", "TEST-16.webp"
        ],
        "2023": [
            "01.webp", "02.webp", "03.webp", "04.webp",
            "05.webp", "06.webp", "9ANS-FULL-2.webp", "CAPUCHE.webp",
            "COLORMIX01.webp", "COMPO-01.webp", "COULEUR.webp", "F1.webp",
            "FULL-B.webp", "FULL-BERTON.webp", "FULL-Bertone.webp", "FULL-F1-FERRARI.webp",
            "FULL-F1BENETTON.webp", "FULL-FERRARI-499P.webp", "FULL-INALTERA.webp", "FULL-JAGUAR.webp",
            "FULL-MAZDA.webp", "FULL-MERCEDES.webp", "FULL-PANOZ.webp", "FULL-PEUGEOT.webp",
            "FULL-PEUGEOT_1993.webp", "FULL-PORSCHE.webp", "FULL-QUATTRO.webp", "FULL-RENAULT.webp",
            "FULL-r5-205.webp", "FULLR5TURBO3E.webp", "ILLU-01-03.webp", "ILLU-02-04.webp",
            "ILLU-03-03.webp", "ILLU-04-02.webp", "ILLU-05-02.webp", "ILLU-09-03.webp",
            "ILLU-10-02.webp", "ILLU-11-02.webp", "ILLU-13-02.webp", "ILLU-14-02.webp",
            "IMG_5949.webp", "IMG_5951.webp", "IMG_5953.webp", "JULIETTE18Y-02.webp",
            "JUSTICEPOURSOUROUR3.webp", "LANCIA-RALLY.webp", "LANCIA.webp", "LECHEUV-FULL.webp",
            "Sans titre-1.webp", "Sans titre-2.webp", "Sans titre-5.webp", "Sans titre-6.webp",
            "Sans titre-8.webp", "Sans titre2.gif", "Sans-titre-6.webp", "TOYOTA-TACOMA.webp",
            "leBAROUF-04.webp", "playschool-10.webp"
        ],
        "2022": [
            "8ANS_A_1.webp", "8ANS_A_2.webp", "A2H-Récupéré.webp", "AQUARELLE.webp",
            "AUDIQUATTROTEST.webp", "BIBIANA-V1.webp", "CIZETA-MORODER.webp", "COUSIN2.webp",
            "Capture d’écran 2022-11-09 à 13.20.02.webp", "DARONSVICKY-v3.webp", "DEBROUCKERE.webp", "FABIEN.webp",
            "FULL 405t16.webp", "FULL INALTERA.webp", "FULL-KENBLOCK.webp", "GROUPEFACEMER.webp",
            "ILLUSTRATION_cnx-format-carré.webp", "INALTERA.webp", "Illustration_sans_titre-3.webp", "LAMAIN_VATANEN.webp",
            "LULU-01.webp", "PIEDSURMER-copie.webp", "REVE_FULL.webp", "RISO-R5 copie.webp",
            "SCH02.webp", "SCH04.webp", "SCH05.webp", "STEPHANIE-V1.webp",
            "VICKY.webp", "car&color-13.webp", "car&ink-01.webp", "car&ink-02.webp",
            "car&ink-03.webp", "car&ink-04.webp", "car&ink-05.webp", "car&ink-06.webp",
            "car&ink-07.webp", "car&ink-08.webp", "car&ink-09.webp", "car&ink-11.webp",
            "car&ink-12.webp", "car&ink-13.webp", "car&ink-14.webp", "car&ink-15.webp",
            "ford rs200.webp", "imagedefamille5-2.webp", "renault.webp", "sang09.webp"
        ],
        "2021": [
            "AMG-pacer.webp", "BEYONCE_FULL.webp", "CIZETA-MORODER.webp", "FABRIK-WEB.webp",
            "FIAT500-600JOLLY.webp", "GENERAL_DRAW01.webp", "GENERAL_DRAW02.webp", "GENERAL_DRAW03.webp",
            "GENERAL_DRAW08.webp", "GENERAL_DRAW10.webp", "GENERAL_DRAW11.webp", "GIF_19.gif",
            "HEUSS_FULL.webp", "IMG_0533.webp", "IMG_0534.webp", "IMG_4112.webp",
            "IMG_7690.webp", "IMG_E4744.webp", "IMG_E8629.webp", "JOKAIR_FULL_1.webp",
            "JOKAIR_full.webp", "LA PLAGE1.webp", "MALIFE_FULL.webp", "NISKA_FULL02.webp",
            "PEINTURE01.webp", "PEINTURE02.webp", "PEINTURE03.webp", "PEINTURE04.webp",
            "PEINTURE05.webp", "PEINTURE06.webp", "RECTO_PRINT.webp", "SCHFREEZE_FULL5.webp",
            "STORMZY_FULL.webp", "SUMMER33.webp", "TOTEM.webp", "WXRP3346.webp",
            "amsterdam.webp", "chilla_FULL.webp", "coloriage01.webp", "coloriage02.webp",
            "coloriage03.webp", "coloriage05.webp", "coloriage06.webp", "gif_3.gif",
            "hot-rod-2-line.webp", "hot-rod-3-line.webp", "hot-rod-4-line.webp", "hot-rod-5-line.webp",
            "hot-rod-line.webp", "jungle-all.webp", "logo-NASA.webp", "martinirally.webp",
            "martinirally2.webp", "martinirallycolors.webp", "motor.webp", "orelsan_FULL.webp"
        ],
        "2020": [
            "02-02.webp", "FRESQUE01.webp", "FRESQUE05.webp", "IMG_1209.webp",
            "IMG_3906.webp", "IMG_3912.webp", "Illustration-sans-titre.webp", "samos-bday.webp"
        ],
        "2019": [
            "IMG_0117.webp", "IMG_0521.webp", "IMG_0662.webp", "LOVE_5.webp",
            "PLK_FULL1-2.webp"
        ],
        "2018": ["BIRDSCARRE.webp", "IMG_E0025.webp", "LOUISE-copie.webp", "NEVE.webp"],
        "2017": [
            "18512921_1893052957637732_7206897754809827328_n.webp", "19764500_127120914551465_3626251294718558208_n.webp", "20635059_1484362091621559_5646320438620454912_n.webp", "20635311_266917707139745_7792861908234665984_n.webp",
            "IMG_1852.webp", "INSTAGRAM.webp", "Sans titre 15.webp"
        ],
        "2016": [
            "Alonzo_Munich.gif", "Branches.webp", "Ceinture.webp", "Cercle.webp",
            "Couthinio_Liverpool.gif", "Dame.webp", "Faune.webp", "Feuille.webp",
            "Flore.webp", "Lady.webp", "Mains.webp", "Neymar_Brazil.gif",
            "Robe.webp", "Rond.webp", "Rose.webp", "Suarez-CL.gif",
            "Talons.webp", "Texture.webp", "URBANA_POPOSITION_JCFREMONT.webp", "amandiers-branche.webp",
            "amandiers-fleurs-2.webp", "amandiers-fleurs.webp", "ceinture-fleurs.webp", "facade.webp",
            "main_fleurs.webp", "proposition01.webp", "ruban.webp"
        ],
        "2015": [
            "GROUPE01.webp", "GROUPE02.webp", "GROUPE03.webp", "GROUPE04.webp",
            "jeancharlesfremont_6.gif"
        ],
        "2014": [
            "#JUNGLE_02.webp", "#JUNGLE_03.webp", "#JUNGLE_05.webp", "#jungle-1.webp",
            "#jungle-2.webp", "#jungle-5.webp", "02_5.gif", "BEYONCE_FINAL.webp",
            "DUCK HUNT.webp", "FORMULA_05.webp", "FORMULA_17.webp", "GAME OVER.webp",
            "Rick+Ross.webp", "offroad.webp", "tiger.webp"
        ],
        "2013": [
            "03_7.gif", "CRAYON.webp", "FOREST.webp", "GIF_1.gif",
            "GIF_10.gif", "GIF_12.gif", "GIF_9.gif", "ROCKET.webp",
            "STATION.webp", "ineedajob.webp", "open to collaborate.webp"
        ],
        "2012": [
            "0111.webp", "02 2.webp", "03 2.webp", "04 2.webp",
            "399063_345163378881683_296066060458082_954983_1956506457_n.webp", "399063_345163402215014_296066060458082_954985_1765390290_n.webp", "AFFICHE.webp", "APONOW_end.webp",
            "Aponow_Details.webp", "BDBG.gif", "Capture d’écran 2012-04-04 à 10.17.01.webp", "Capture d’écran 2012-04-12 à 15.52.42.webp",
            "DANCE_600.gif", "Document_120_519.webp", "EXPLOSION_600.gif", "FIRE_600.gif",
            "FRESHPRINCE_600.gif", "GOLD_8.gif", "Groupe_01.webp", "Groupe_01_02.webp",
            "Groupe_02.webp", "Groupe_03.webp", "Groupe_03_02.webp", "IMG_0010.webp",
            "IMG_0022.webp", "IMG_0042.webp", "JG_JC_02.webp", "LARRY-PRINT.webp",
            "LAST-ACTION-HERO-1.webp", "MARS_02_10.gif", "MARS_600.gif", "MA_BENZ.gif",
            "McLovin.gif", "PHONE.gif", "Panorama-GroupeA.webp", "Panorama-GroupeB.webp",
            "Panorama-GroupeC-1.webp", "Panorama-GroupeC-2.webp", "RAP GAME_5.gif", "RICKGREEN.webp",
            "RICKROSS.gif", "ROAD TO MIAMI.gif", "STREET.gif", "STREET_02.gif",
            "STREET_THECAVE.gif", "Sans titre-4.webp", "Sans-titre-3.webp", "THE MAN.gif",
            "UNICORN.gif", "affiche_allégorie.webp", "airmax.gif", "asshole01.gif",
            "back-to-future_1.webp", "back-to-future_2.webp", "beerweed.gif", "black.gif",
            "cookie.gif", "decote.gif", "deface.gif", "dumb.webp",
            "gamer_02.webp", "ghetto_5.gif", "gif.gif", "gif_1.gif",
            "gif_5.gif", "hipster.gif", "illuminati.gif", "johnson_recolorized.webp",
            "jpg_14.gif", "justin.gif", "kayne.gif", "les-blancs-ne-savent-pas-sauté.webp",
            "lost.gif", "mainstream_13.gif", "media-1.webp", "miami.gif",
            "michael-jordan2.webp", "ny.gif", "open-to-collaborate.webp", "paris.gif",
            "po.gif", "pussy riot_10.gif", "rick_draw1.webp", "rick_draw_2.webp",
            "ride.gif", "shoesup_JCFremont.webp", "sisilafamille.gif", "snoop_1.gif",
            "suckfuckluck.gif", "throne.gif", "thuglife_8.gif", "total-recall.webp",
            "true chains_1.gif", "trues-lies.webp", "tyler.gif", "urkel1990_02.webp",
            "uzi.webp", "waynes-world-1.webp", "waynes-world-2.webp", "waynes-world-3.webp"
        ],
        "2011": [
            "002.webp", "01.webp", "02.webp", "03.webp",
            "04.webp", "72_car_06.webp", "HAND_16.gif", "anti-flirt-club.webp",
            "base-web.webp", "camera_01.gif", "camera_06.gif", "girl+car.gif",
            "girl02_01.webp", "girl03.gif", "snamchit-troopers.webp", "snamchit-troopers_2.webp",
            "strictly-new_03.webp", "tiger.webp", "une-petite-tasse.webp"
        ],
        "2010": [
            "01.webp", "A2-01.webp", "A2-02.webp", "A3-01.webp",
            "A3-02.webp", "IBM01.webp", "Terror_Cops.webp", "antoine et son trone12.webp",
            "arme01.webp", "arme02.webp", "arme03.webp", "astronaute.webp",
            "camera-8mm.webp", "camera-moon.webp", "cockpit.webp", "decoupe-UZI.webp",
            "family-business80-60.webp", "final mac.webp", "game boy.webp", "jean-charles.webp",
            "jonathon-just_and_jonathan02.webp", "moon.webp", "moto01.webp", "moto02.webp",
            "pascal.webp", "photo01.webp", "poline03.webp", "solene.webp",
            "titre2.webp"
        ],
        "2009": [
            "02.webp", "20080512095223!Hollywood.webp", "P1040942.webp", "alex.webp",
            "clito.webp", "loocking01.webp", "lou.webp", "louise.webp",
            "marie-h.webp", "marie.webp", "martin.webp", "morgan.webp",
            "original_Lockers3.webp", "shoes.webp", "snoop.webp", "soul-train.webp",
            "tito002.webp", "tito003.webp"
        ],
        "2008": [
            "01.webp", "Déplacement12111.webp", "SMBD.webp", "Sans-titre-1.webp",
            "battle.webp", "black-monba.webp", "bring-me01.webp", "classe-dothy-glam.webp",
            "img002.webp", "img003.webp", "img004.webp", "img005.webp",
            "once-upon-a-time.webp", "pola.webp", "the-legend-of-mister-blue.webp", "visage 60*40.webp",
            "what-the-fuck-miss.webp"
        ],
        "2007": [
            "04 3.webp", "05.webp", "KL_coaster2.webp", "game-boy-02.gif",
            "game-boy.gif", "leon.webp", "tetris.gif"
        ],
        "2006": [
            "02.webp", "Image-16.webp", "MPC2000XL.webp", "ampli-camille.webp",
            "ballerines-louise.webp", "camion.webp", "casquette+lunette.webp", "cross-hor.webp",
            "diaporama.webp", "dunk-cloes-sans-tof.webp", "eh-yo-les-ricains03.webp", "el-cactus-03.webp",
            "elostick-26.gif", "final.webp", "hummer.webp", "jay-addict.webp",
            "joh-vecorisé-0,25pt.webp", "kangooroo-louise.webp", "korg-fredo.webp", "louise-attack06.webp",
            "louise-sans-photos.webp", "mangeteenew.webp", "marie-attack04.webp", "martin-attack-B.webp",
            "martin-shoes.webp", "martin.webp", "nike-a-faire-vert2.webp", "nochcompo03.gif",
            "nochdmccompo.webp", "pause.webp", "peyonani02.webp", "poste-à-bobine.webp",
            "poste-radio-3rose.webp", "princesse14.webp", "run-dmc1.webp", "spike-mars.webp",
            "ton22.webp", "vans-blue-suede-hightop-55m-top-sole.webp", "veloshop16.webp", "vu06.webp",
            "worknicompo.webp"
        ]
    };

    const availableYears = Object.keys(portfolioData).sort((a, b) => b - a);
    let yearIndex = 0;
    let isFiltered = false;

    // --- SCROLL HIGHLIGHT ---
    const sectionObserver = new IntersectionObserver((entries) => {
        if (isFiltered) return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const year = entry.target.getAttribute('data-year');
                document.querySelectorAll('.timeline-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-year') === year) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0,
        rootMargin: "-10% 0px -80% 0px"
    });

    // --- REVEAL ANIMATIONS ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05 });

    // --- LOAD CONTENT ---
    const loadMoreContent = () => {
        if (loadingIndicator.classList.contains('end-reached')) return;

        const yearToLoad = availableYears[yearIndex];

        if (!yearToLoad) {
            loadingIndicator.textContent = "";
            loadingIndicator.classList.add('end-reached');
            return;
        }

        yearIndex++;

        // Invisible year anchor
        const marker = document.createElement('div');
        marker.className = 'year-marker';
        marker.id = `year-${yearToLoad}`;
        marker.setAttribute('data-year', yearToLoad);
        mainContent.insertBefore(marker, scrollTrigger);
        sectionObserver.observe(marker);

        // Images & Videos
        const videoExts = ['.mp4', '.webm', '.mov', '.m4v'];
        const files = portfolioData[yearToLoad];
        files.forEach(filename => {
            const card = document.createElement('div');
            card.className = 'artwork-card';
            card.setAttribute('data-year', yearToLoad);
            card.setAttribute('data-reveal', '');
            const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
            const src = `images/${yearToLoad}/${encodeURIComponent(filename)}`;

            if (videoExts.includes(ext)) {
                card.innerHTML = `<video src="${src}" autoplay muted loop playsinline preload="metadata"></video>`;
            } else {
                card.innerHTML = `<img src="${src}" alt="Illustration ${yearToLoad}" loading="lazy">`;
            }

            mainContent.insertBefore(card, scrollTrigger);
            revealObserver.observe(card);
        });

        // Nav link
        if (!document.querySelector(`.timeline-link[data-year="${yearToLoad}"]`)) {
            const timelineList = document.getElementById('timeline-list');
            if (timelineList) {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#year-${yearToLoad}" class="timeline-link" data-year="${yearToLoad}">${yearToLoad}</a>`;
                timelineList.appendChild(li);
            }
        }
    };

    // Load all years at once for a dense, continuous masonry
    while (yearIndex < availableYears.length) {
        loadMoreContent();
    }

    // --- FILTERING ---
    function applyFilter(year) {
        if (!portfolioData[year]) return;
        isFiltered = true;
        resetBtn.classList.remove('hidden');

        document.querySelectorAll('.artwork-card').forEach(card => {
            if (card.getAttribute('data-year') == year) {
                card.classList.remove('filtered-out');
            } else {
                card.classList.add('filtered-out');
            }
        });

        document.querySelectorAll('.timeline-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-year') == year) link.classList.add('active');
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetFilters() {
        isFiltered = false;
        resetBtn.classList.add('hidden');
        document.querySelectorAll('.artwork-card').forEach(card => {
            card.classList.remove('filtered-out');
        });
    }

    // --- MOBILE YEAR OVERLAY ---
    const mobileBtn = document.getElementById('mobile-year-btn');
    const mobileOverlay = document.getElementById('mobile-year-overlay');
    const mobileClose = document.getElementById('mobile-year-close');
    const mobileList = document.getElementById('mobile-year-list');

    // Populate mobile year list
    availableYears.forEach(year => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" class="mobile-year-link" data-year="${year}">${year}</a>`;
        mobileList.appendChild(li);
    });

    // Add "Tout voir" at the end
    const allLi = document.createElement('li');
    allLi.innerHTML = `<a href="#" class="mobile-year-link mobile-year-all" data-year="all">Tout voir</a>`;
    mobileList.appendChild(allLi);

    function updateMobileActive(year) {
        mobileList.querySelectorAll('.mobile-year-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-year') == year);
        });
    }

    mobileBtn.addEventListener('click', () => {
        mobileOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    mobileClose.addEventListener('click', () => {
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });

    mobileList.addEventListener('click', (e) => {
        const link = e.target.closest('.mobile-year-link');
        if (!link) return;
        e.preventDefault();
        const year = link.getAttribute('data-year');

        if (year === 'all') {
            resetFilters();
            updateMobileActive(null);
        } else {
            applyFilter(year);
            updateMobileActive(year);
        }

        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });

    // --- INTERACTION (desktop sidebar) ---
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('timeline-link')) {
            e.preventDefault();
            const year = e.target.getAttribute('data-year');
            applyFilter(year);
        }

        if (e.target.id === 'reset-filter') {
            resetFilters();
        }
    });

    // --- DARK MODE (sunset/sunrise) ---
    function getSunTimes(lat, lng, date) {
        // Solar calculations (simplified Meeus algorithm)
        const rad = Math.PI / 180;
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        const decl = -23.45 * Math.cos(rad * (360 / 365) * (dayOfYear + 10));
        const ha = Math.acos(
            (Math.cos(rad * 90.833) - Math.sin(rad * lat) * Math.sin(rad * decl)) /
            (Math.cos(rad * lat) * Math.cos(rad * decl))
        ) / rad;
        const noon = 720 - 4 * lng - date.getTimezoneOffset();
        const sunrise = noon - ha * 4;
        const sunset = noon + ha * 4;
        return {
            sunrise: Math.floor(sunrise / 60) + (sunrise % 60) / 60,
            sunset: Math.floor(sunset / 60) + (sunset % 60) / 60
        };
    }

    function updateDarkMode(lat, lng) {
        const now = new Date();
        const hours = now.getHours() + now.getMinutes() / 60;
        const sun = getSunTimes(lat, lng, now);
        const isDark = hours < sun.sunrise || hours > sun.sunset;
        document.body.classList.toggle('dark-mode', isDark);
    }

    // Default: Paris (fallback)
    let userLat = 48.86;
    let userLng = 2.35;

    // Try geolocation, then start
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLat = pos.coords.latitude;
                userLng = pos.coords.longitude;
                updateDarkMode(userLat, userLng);
            },
            () => updateDarkMode(userLat, userLng),
            { timeout: 3000 }
        );
    } else {
        updateDarkMode(userLat, userLng);
    }

    // Re-check every 5 minutes
    setInterval(() => updateDarkMode(userLat, userLng), 300000);
});

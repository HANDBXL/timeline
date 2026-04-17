document.addEventListener('DOMContentLoaded', () => {
    const scrollTrigger = document.getElementById('infinite-scroll-trigger');
    const mainContent = document.getElementById('main-content');
    const loadingIndicator = document.getElementById('loading-indicator');
    const resetBtn = document.getElementById('reset-filter');

    // CONFIGURATION DU PORTFOLIO
    const portfolioData = {
        "2026": [
            "images/01.webp", "images/02.webp", "images/03.webp",
            "images/04.webp", "images/05.webp", "images/06.webp",
            "images/07.webp", "images/08.webp"
        ],
        "2025": [
            "images/01.webp", "images/140BPM-test00002.webp", "images/140BPM-test0003.webp",
            "images/140BPM-test03.webp", "images/140BPM-test04.webp", "images/IMG_6531.webp",
            "images/IMG_8734.webp", "images/Illustration_sans_titre-5.webp", "images/Illustration_sans_titre-8.webp",
            "images/Illustration_sans_titre.webp", "gifs/IMG_9639.mp4", "gifs/IMG_9640.mp4",
            "gifs/IMG_9641.mp4", "gifs/Illustration_sans_titre-12.mp4", "gifs/Illustration_sans_titre-7.mp4",
            "gifs/Illustration_sans_titre-9.mp4", "gifs/LAHAINE.mp4", "gifs/PILOT_tee_12.mp4",
            "gifs/Sans-titre.mp4", "gifs/Sans-titre000.mp4", "gifs/Sans-titre00000.mp4",
            "gifs/blockligh.mp4", "gifs/blockligh3.mp4", "gifs/blocklight11.mp4"
        ],
        "2024": [
            "images/01-02j.webp", "images/02.webp", "images/03k.webp",
            "images/04-02.webp", "images/04.webp", "images/04P.webp",
            "images/05-03.webp", "images/06.webp", "images/326966499_609754100972637_7861697295812641855_n.webp",
            "images/6A40B2D9-395A-4C1F-A06E-A7CA2F7583F0.webp", "images/BISSO-NA-BISSO-02.webp", "images/BOOBA-KAARIS-01.webp",
            "images/IMG_0222-2.webp", "images/IMG_0250.webp", "images/IMG_2670.webp",
            "images/IMG_5066.webp", "images/IMG_5693.webp", "images/IMG_5806.webp",
            "images/IMG_6670.webp", "images/IMG_6844.webp", "images/IMG_6847.webp",
            "images/IMG_6848.webp", "images/IMG_6851.webp", "images/IMG_7111.webp",
            "images/IMG_7173.webp", "images/IMG_7784.webp", "images/IMG_8064.webp",
            "images/IMG_8376.webp", "images/IMG_8740.webp", "images/IMG_9183-copie.webp",
            "images/IMG_9317.webp", "images/Illustration_sans_titre 13.webp", "images/Illustration_sans_titre 97.webp",
            "images/Illustration_sans_titre 98.webp", "images/Illustration_sans_titre-(1).webp", "images/Illustration_sans_titre-(32).webp",
            "images/Illustration_sans_titre-60.webp", "images/Illustration_sans_titre-69.webp", "images/Illustration_sans_titre-70.webp",
            "images/MIA-001.webp", "images/MIA-002.webp", "images/MIA-003.webp",
            "images/MOTOR-01.webp", "images/MOTOR-02.webp", "images/TEST-01.webp",
            "images/TEST-12.webp", "images/TEST-16.webp", "gifs/01.mp4",
            "gifs/02.mp4", "gifs/03.mp4", "gifs/FOOD-01.mp4",
            "gifs/FOOD-02.mp4", "gifs/FOOD-03.mp4", "gifs/IMG_5282.mp4",
            "gifs/Illustration_sans_titre-2.mp4", "gifs/MERCEDES.mp4", "gifs/MIA-004.mp4",
            "gifs/NBADUNK3.mp4", "gifs/STEP03-ALL3.mp4", "gifs/gif-2026-04-16 at 21.03.45.mp4",
            "gifs/web_01.mp4", "gifs/web_02.mp4", "gifs/web_03.mp4"
        ],
        "2023": [
            "images/01.webp", "images/02.webp", "images/03.webp",
            "images/04.webp", "images/05.webp", "images/06.webp",
            "images/9ANS-FULL-2.webp", "images/CAPUCHE.webp", "images/COLORMIX01.webp",
            "images/COMPO-01.webp", "images/COULEUR.webp", "images/ENFER-CMJN2.webp",
            "images/F1.webp", "images/FREEZE-F02.webp", "images/FREEZE-F03.webp",
            "images/FREEZE-F04.webp", "images/FULL-B.webp", "images/FULL-BERTON.webp",
            "images/FULL-Bertone.webp", "images/FULL-F1-FERRARI.webp", "images/FULL-F1BENETTON.webp",
            "images/FULL-FERRARI-499P.webp", "images/FULL-INALTERA.webp", "images/FULL-JAGUAR.webp",
            "images/FULL-MAZDA.webp", "images/FULL-MERCEDES.webp", "images/FULL-PANOZ.webp",
            "images/FULL-PEUGEOT.webp", "images/FULL-PEUGEOT_1993.webp", "images/FULL-PORSCHE.webp",
            "images/FULL-QUATTRO.webp", "images/FULL-RENAULT.webp", "images/FULL-r5-205.webp",
            "images/FULLR5TURBO3E.webp", "images/ILLU-01-03.webp", "images/ILLU-02-04.webp",
            "images/ILLU-03-03.webp", "images/ILLU-04-02.webp", "images/ILLU-05-02.webp",
            "images/ILLU-09-03.webp", "images/ILLU-10-02.webp", "images/ILLU-11-02.webp",
            "images/ILLU-13-02.webp", "images/ILLU-14-02.webp", "images/IMG_5947.webp",
            "images/IMG_5948.webp", "images/IMG_5949.webp", "images/IMG_5950.webp",
            "images/IMG_5951.webp", "images/IMG_5953.webp", "images/Illustration_sans_titre-(13).webp",
            "images/Illustration_sans_titre-(24).webp", "images/Illustration_sans_titre-(30).webp", "images/Illustration_sans_titre-37.webp",
            "images/Illustration_sans_titre-4546.webp", "images/JULIETTE18Y-02.webp", "images/JUSTICEPOURSOUROUR3.webp",
            "images/LANCIA-RALLY.webp", "images/LANCIA.webp", "images/LECHEUV-FULL.webp",
            "images/Sans titre-1.webp", "images/Sans titre-2.webp", "images/Sans titre-5.webp",
            "images/Sans titre-6.webp", "images/Sans titre-8.webp", "images/Sans-titre-6.webp",
            "images/Scan-50.webp", "images/TOYOTA-TACOMA.webp", "images/jungle-bonus2.webp",
            "images/leBAROUF-04.webp", "images/playschool-10.webp", "gifs/gif-2026-04-17 at 13.47.24.mp4"
        ],
        "2022": [
            "images/8ANS_A_2.webp", "images/A2H-Récupéré.webp", "images/ALBANE-02.webp",
            "images/ALK.webp", "images/ALKPOT.webp", "images/AMINE.webp",
            "images/AQUARELLE.webp", "images/AUCLUB2.webp", "images/AUDIQUATTROTEST.webp",
            "images/BEYONCE.webp", "images/BIBIANA-V1.webp", "images/CHRISFEATBOOBA.webp",
            "images/CIZETA-MORODER.webp", "images/COUSIN2.webp", "images/Capture d’écran 2022-11-09 à 13.20.02.webp",
            "images/DARONSVICKY-v3.webp", "images/DEBROUCKERE.webp", "images/DREAMVILLE.webp",
            "images/FABIEN.webp", "images/FULL 405t16.webp", "images/FULL INALTERA.webp",
            "images/FULL-KENBLOCK.webp", "images/GROUPEFACEMER.webp", "images/ILLUSTRATION_cnx-format-carré.webp",
            "images/IMG_7196.webp", "images/INALTERA.webp", "images/Illustration_sans_titre-3.webp",
            "images/JJ&AKH.webp", "images/KOBALAD.webp", "images/LA PLAGE1.webp",
            "images/LAMAIN_VATANEN.webp", "images/LULU-01.webp", "images/OFFSET.webp",
            "images/PIEDSURMER-copie.webp", "images/PLK.webp", "images/PNL.webp",
            "images/QUEEN.webp", "images/REMY.webp", "images/REVE_FULL.webp",
            "images/SCH02.webp", "images/SCH04.webp", "images/SCH05.webp",
            "images/SETH.webp", "images/STEPHANIE-V1.webp", "images/STORMZY.webp",
            "images/VICKY.webp", "images/car&color-13.webp", "images/car&ink-01.webp",
            "images/car&ink-02.webp", "images/car&ink-03.webp", "images/car&ink-04.webp",
            "images/car&ink-05.webp", "images/car&ink-06.webp", "images/car&ink-07.webp",
            "images/car&ink-08.webp", "images/car&ink-09.webp", "images/car&ink-11.webp",
            "images/car&ink-12.webp", "images/car&ink-13.webp", "images/car&ink-14.webp",
            "images/car&ink-15.webp", "images/coloriage01.webp", "images/coloriage02.webp",
            "images/coloriage03.webp", "images/coloriage04.webp", "images/coloriage05.webp",
            "images/coloriage06.webp", "images/englandjpg-copie.webp", "images/ford rs200.webp",
            "images/imagedefamille5-2.webp", "images/renault.webp", "images/sang09.webp",
            "gifs/gif-2026-04-17 at 13.41.59.mp4", "gifs/gif-2026-04-17 at 14.26.53.mp4"
        ],
        "2021": [
            "images/AMG-pacer.webp", "images/BEYONCE_FULL.webp", "images/CIZETA-MORODER.webp",
            "images/FABRIK-WEB.webp", "images/FIAT500-600JOLLY.webp", "images/GENERAL_DRAW01.webp",
            "images/GENERAL_DRAW03.webp", "images/GENERAL_DRAW08.webp", "images/GENERAL_DRAW10.webp",
            "images/GENERAL_DRAW11.webp", "images/HEUSS_FULL.webp", "images/IMG_0533.webp",
            "images/IMG_0534.webp", "images/IMG_4112.webp", "images/IMG_7690.webp",
            "images/IMG_E4744.webp", "images/IMG_E8629.webp", "images/JOKAIR_FULL_1.webp",
            "images/JOKAIR_full.webp", "images/MALIFE_FULL.webp", "images/NISKA_FULL02.webp",
            "images/PEINTURE01.webp", "images/PEINTURE02.webp", "images/PEINTURE03.webp",
            "images/PHILIPPE2.webp", "images/RECTO_PRINT.webp", "images/SCHFREEZE_FULL5.webp",
            "images/STORMZY_FULL.webp", "images/SUMMER33.webp", "images/TOTEM.webp",
            "images/WXRP3346.webp", "images/amsterdam.webp", "images/chilla_FULL.webp",
            "images/hot-rod-2-line.webp", "images/hot-rod-3-line.webp", "images/hot-rod-4-line.webp",
            "images/hot-rod-5-line.webp", "images/hot-rod-line.webp", "images/logo-NASA.webp",
            "images/martinirally.webp", "images/martinirally2.webp", "images/martinirallycolors.webp",
            "images/motor.webp", "images/orelsan_FULL.webp", "gifs/GIF_19.mp4",
            "gifs/gif-2026-04-17 at 13.34.47.mp4", "gifs/jeancharlesfremont_6.mp4"
        ],
        "2020": [
            "images/02-02.webp", "images/DAVID_FULLDONE.webp", "images/FORMULA_08.webp",
            "images/FRESQUE01.webp", "images/FRESQUE05.webp", "images/GUILLAUME_FULLDONE2.webp",
            "images/IMG_1209.webp", "images/IMG_3906.webp", "images/IMG_3912.webp",
            "images/Illustration-sans-titre.webp", "images/LOVE_5.webp", "images/SAM_FULLDONE.webp",
            "images/planche_01-1.webp", "images/planche_01-10.webp", "images/planche_01-11.webp",
            "images/planche_01-12.webp", "images/planche_01-2.webp", "images/planche_01-3.webp",
            "images/planche_01-4.webp", "images/planche_01-5.webp", "images/planche_01-6.webp",
            "images/planche_01-8.webp", "images/planche_01-9.webp", "images/samos-bday.webp"
        ],
        "2019": [
            "images/ANNA_FULL.webp", "images/IMG_0117.webp", "images/IMG_0521.webp",
            "images/IMG_0662.webp", "images/LOVE_5.webp", "images/PLK_FULL1-2.webp"
        ],
        "2018": [
            "images/AFFICHELIBRE-COURS_GWEN.webp", "images/AUTOMNE_01.webp", "images/BIRDSCARRE.webp",
            "images/IMG_E0025.webp", "images/LOUISE-copie.webp", "images/NEVE.webp",
            "images/SNEAZZY_DRAW.webp", "images/SOFIANE_DRAW.webp", "gifs/gif-2026-04-17 at 14.21.42.mp4",
            "gifs/gif-2026-04-17 at 14.22.01.mp4", "gifs/gif-2026-04-17 at 14.22.35.mp4", "gifs/gif-2026-04-17 at 14.22.59.mp4",
            "gifs/gif-2026-04-17 at 14.23.21.mp4", "gifs/gif-2026-04-17 at 14.23.56.mp4", "gifs/gif-2026-04-17 at 14.24.48.mp4",
            "gifs/gif-2026-04-17 at 14.25.11.mp4", "gifs/gif-2026-04-17 at 14.26.01.mp4"
        ],
        "2017": [
            "images/18512921_1893052957637732_7206897754809827328_n.webp", "images/19764500_127120914551465_3626251294718558208_n.webp", "images/20635059_1484362091621559_5646320438620454912_n.webp",
            "images/20635311_266917707139745_7792861908234665984_n.webp", "images/IMG_1852.webp", "images/INSTAGRAM.webp",
            "images/Sans titre 15.webp"
        ],
        "2016": [
            "images/Branches.webp", "images/Ceinture.webp", "images/Cercle.webp",
            "images/Dame.webp", "images/Faune.webp", "images/Feuille.webp",
            "images/Flore.webp", "images/Lady.webp", "images/Mains.webp",
            "images/Robe.webp", "images/Rond.webp", "images/Rose.webp",
            "images/Talons.webp", "images/Texture.webp", "images/URBANA_POPOSITION_JCFREMONT.webp",
            "images/amandiers-branche.webp", "images/amandiers-fleurs-2.webp", "images/amandiers-fleurs.webp",
            "images/ceinture-fleurs.webp", "images/facade.webp", "images/main_fleurs.webp",
            "images/proposition01.webp", "images/ruban.webp", "gifs/0111.mp4",
            "gifs/Alonzo_Munich.mp4", "gifs/Couthinio_Liverpool.mp4", "gifs/Neymar_Brazil.mp4",
            "gifs/Suarez-CL.mp4"
        ],
        "2015": [
            "images/GROUPE01.webp", "images/GROUPE02.webp", "images/GROUPE03.webp",
            "images/GROUPE04.webp", "gifs/jeancharlesfremont_6.mp4"
        ],
        "2014": [
            "images/#JUNGLE_01.webp", "images/#JUNGLE_02.webp", "images/#JUNGLE_03.webp",
            "images/#JUNGLE_04.webp", "images/#JUNGLE_05.webp", "images/#jungle-1.webp",
            "images/#jungle-2.webp", "images/#jungle-3.webp", "images/#jungle-5.webp",
            "images/#jungle-7.webp", "images/#jungle-8.webp", "images/BEYONCE_FINAL.webp",
            "images/DUCK HUNT.webp", "images/FORMULA_05.webp", "images/FORMULA_17.webp",
            "images/GAME OVER.webp", "images/Rick+Ross.webp", "images/offroad.webp",
            "gifs/01_1.mp4", "gifs/02_5.mp4"
        ],
        "2013": [
            "images/CRAYON.webp", "images/FOREST.webp", "images/IMG_0544.webp",
            "images/IMG_0549.webp", "images/ROCKET.webp", "images/STATION.webp",
            "images/ineedajob.webp", "images/open-to-collaborate.webp", "gifs/03_7.mp4",
            "gifs/GIF_1.mp4", "gifs/GIF_10.mp4", "gifs/GIF_12.mp4",
            "gifs/GIF_9.mp4"
        ],
        "2012": [
            "images/02.webp", "images/03.webp", "images/04.webp",
            "images/05.webp", "images/399063_345163378881683_296066060458082_954983_1956506457_n.webp", "images/399063_345163402215014_296066060458082_954985_1765390290_n.webp",
            "images/AFFICHE.webp", "images/APONOW_end.webp", "images/Aponow_Details.webp",
            "images/Capture d’écran 2012-04-04 à 10.17.01.webp", "images/Capture d’écran 2012-04-12 à 15.52.42.webp", "images/Document_120_519.webp",
            "images/Groupe_01.webp", "images/Groupe_01_02.webp", "images/Groupe_02.webp",
            "images/Groupe_03.webp", "images/Groupe_03_02.webp", "images/IMG_0010.webp",
            "images/IMG_0022.webp", "images/IMG_0042.webp", "images/JG_JC_02.webp",
            "images/LARRY-PRINT.webp", "images/LAST-ACTION-HERO-1.webp", "images/Panorama-GroupeA.webp",
            "images/Panorama-GroupeB.webp", "images/Panorama-GroupeC-1.webp", "images/Panorama-GroupeC-2.webp",
            "images/RICKGREEN.webp", "images/Sans titre-4.webp", "images/Sans-titre-3.webp",
            "images/affiche_allégorie.webp", "images/back-to-future_1.webp", "images/back-to-future_2.webp",
            "images/dumb.webp", "images/gamer_02.webp", "images/johnson_recolorized.webp",
            "images/les-blancs-ne-savent-pas-sauté.webp", "images/media-1.webp", "images/michael-jordan2.webp",
            "images/rick_draw1.webp", "images/rick_draw_2.webp", "images/shoesup_JCFremont.webp",
            "images/total-recall.webp", "images/trues-lies.webp", "images/urkel1990_02.webp",
            "images/uzi.webp", "images/waynes-world-1.webp", "images/waynes-world-2.webp",
            "images/waynes-world-3.webp", "gifs/APONOW_end.webp", "gifs/BDBG.mp4",
            "gifs/DANCE_600.mp4", "gifs/EXPLOSION_600.mp4", "gifs/FIRE_600.mp4",
            "gifs/FRESHPRINCE_600.mp4", "gifs/GOLD_8.mp4", "gifs/MARS_02_10.mp4",
            "gifs/MARS_600.mp4", "gifs/MA_BENZ.mp4", "gifs/McLovin.mp4",
            "gifs/PATATE_1.mp4", "gifs/PHONE.mp4", "gifs/RAP GAME_5.mp4",
            "gifs/RICKROSS.mp4", "gifs/ROAD TO MIAMI.mp4", "gifs/STREET.mp4",
            "gifs/STREET_02.mp4", "gifs/STREET_THECAVE.mp4", "gifs/THE MAN.mp4",
            "gifs/UNICORN.mp4", "gifs/airmax.mp4", "gifs/asshole.mp4",
            "gifs/asshole01.mp4", "gifs/beerweed.mp4", "gifs/black.mp4",
            "gifs/cookie.mp4", "gifs/decote.mp4", "gifs/deface.mp4",
            "gifs/ghetto_5.mp4", "gifs/gif.mp4", "gifs/gif_1.mp4",
            "gifs/gif_5.mp4", "gifs/hipster.mp4", "gifs/illuminati.mp4",
            "gifs/images_2.mp4", "gifs/images_22.mp4", "gifs/images_7.mp4",
            "gifs/images_8.mp4", "gifs/jpg_14.mp4", "gifs/justin.mp4",
            "gifs/kayne.mp4", "gifs/lost.mp4", "gifs/mainstream_13.mp4",
            "gifs/miami.mp4", "gifs/ny.mp4", "gifs/paris.mp4",
            "gifs/po.mp4", "gifs/pussy riot_10.mp4", "gifs/ride.mp4",
            "gifs/sisilafamille.mp4", "gifs/snoop_1.mp4", "gifs/suckfuckluck.mp4",
            "gifs/throne.mp4", "gifs/thuglife_8.mp4", "gifs/true chains_1.mp4",
            "gifs/tyler.mp4"
        ],
        "2011": [
            "images/002.webp", "images/01.webp", "images/02.webp",
            "images/03.webp", "images/04.webp", "images/72_car_06.webp",
            "images/anti-flirt-club.webp", "images/base-web.webp", "images/girl+car.webp",
            "images/girl02_01.webp", "images/girl03.webp", "images/snamchit-troopers.webp",
            "images/snamchit-troopers_2.webp", "images/strictly-new_03.webp", "images/tiger.webp",
            "images/une-petite-tasse.webp", "gifs/camera_01.mp4", "gifs/camera_06.mp4",
            "gifs/gif-2026-04-17 at 09.50.06.mp4"
        ],
        "2010": [
            "images/01.webp", "images/A2-01.webp", "images/A2-02.webp",
            "images/A3-01.webp", "images/A3-02.webp", "images/IBM01.webp",
            "images/Terror_Cops.webp", "images/antoine et son trone12.webp", "images/arme01.webp",
            "images/arme02.webp", "images/arme03.webp", "images/astronaute.webp",
            "images/camera-8mm.webp", "images/camera-moon.webp", "images/cockpit.webp",
            "images/decoupe-UZI.webp", "images/family-business80-60.webp", "images/final mac.webp",
            "images/game boy.webp", "images/jean-charles.webp", "images/jonathon-just_and_jonathan02.webp",
            "images/moon.webp", "images/moto01.webp", "images/moto02.webp",
            "images/pascal.webp", "images/photo01.webp", "images/poline03.webp",
            "images/solene.webp", "images/titre2.webp"
        ],
        "2009": [
            "images/02.webp", "images/04.webp", "images/05.webp",
            "images/20080512095223!Hollywood.webp", "images/P1040942.webp", "images/alex.webp",
            "images/bruler-la-jeep-2.webp", "images/chapeau-de-flic.webp", "images/clito.webp",
            "images/game-boy-02.webp", "images/game-boy.webp", "images/img002.webp",
            "images/img003.webp", "images/img004.webp", "images/img005.webp",
            "images/leon.webp", "images/lettre-dans-le-coffre.webp", "images/loocking01.webp",
            "images/lou.webp", "images/louise.webp", "images/marie.webp",
            "images/martin.webp", "images/morgan.webp", "images/original_Lockers3.webp",
            "images/phone2.webp", "images/shoes.webp", "images/snoop.webp",
            "images/soul-train.webp", "images/tetris.webp", "images/tito002.webp",
            "images/tito003.webp"
        ],
        "2008": [
            "images/01.webp", "images/Déplacement12111.webp", "images/SMBD.webp",
            "images/Sans-titre-1.webp", "images/battle.webp", "images/black-monba.webp",
            "images/bring-me01.webp", "images/classe-dothy-glam.webp", "images/once-upon-a-time.webp",
            "images/pola.webp", "images/the-legend-of-mister-blue.webp", "images/what-the-fuck-miss.webp"
        ],
        "2007": [
            "images/02.webp", "images/KL_coaster2.webp", "images/camion.webp",
            "images/eh-yo-les-ricains03.webp", "images/louise-attack06.webp", "images/marie-attack04.webp",
            "images/martin-attack-B.webp"
        ],
        "2006": [
            "images/02.webp", "images/Image-16.webp", "images/MPC2000XL.webp",
            "images/ampli-camille.webp", "images/ballerines-louise.webp", "images/camion.webp",
            "images/casquette+lunette.webp", "images/cross-hor.webp", "images/diaporama.webp",
            "images/dunk-cloes-sans-tof.webp", "images/eh-yo-les-ricains03.webp", "images/el-cactus-03.webp",
            "images/elostick-26.webp", "images/final.webp", "images/hummer.webp",
            "images/jay-addict.webp", "images/joh-vecorisé-0,25pt.webp", "images/kangooroo-louise.webp",
            "images/korg-fredo.webp", "images/louise-attack06.webp", "images/louise-sans-photos.webp",
            "images/mangeteenew.webp", "images/marie-attack04.webp", "images/martin-attack-B.webp",
            "images/martin-shoes.webp", "images/martin.webp", "images/nike-a-faire-vert2.webp",
            "images/nochcompo03.webp", "images/nochdmccompo.webp", "images/pause.webp",
            "images/peyonani02.webp", "images/poste-à-bobine.webp", "images/poste-radio-3rose.webp",
            "images/princesse14.webp", "images/run-dmc1.webp", "images/spike-mars.webp",
            "images/ton22.webp", "images/vans-blue-suede-hightop-55m-top-sole.webp", "images/veloshop16.webp",
            "images/vu06.webp", "images/worknicompo.webp"
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
            const parts = filename.split('/');
            const src = `images/${yearToLoad}/${parts.map(p => encodeURIComponent(p)).join('/')}`;

            if (videoExts.includes(ext)) {
                card.innerHTML = `<video src="${src}" autoplay muted loop playsinline preload="metadata" oncontextmenu="return false"></video>`;
            } else {
                card.innerHTML = `<img src="${src}" alt="Illustration ${yearToLoad}" loading="lazy" draggable="false" oncontextmenu="return false">`;
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

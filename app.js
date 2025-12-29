/* ========================================
   APPLICATION PRINCIPALE
   ======================================== */

// Les données sont chargées depuis données-dictionnaire.js
// qui déclare directement DICTIONARY, TEXTES, ALTERNATIVES

// État global de l'application
const appState = {
    userStats: {
        discovered: new Set(),
        score: 0,
        gamesPlayed: 0
    },
    currentTab: 'a-propos',
    quizState: {
        currentSection: 0,
        answers: [],
        completed: false
    }
};

// Sauvegarde/chargement des stats dans localStorage
function saveStats() {
    try {
        localStorage.setItem('validisme-stats', JSON.stringify({
            discovered: Array.from(appState.userStats.discovered),
            score: appState.userStats.score,
            gamesPlayed: appState.userStats.gamesPlayed
        }));
    } catch (e) {
        console.error('Erreur sauvegarde stats:', e);
    }
}

function loadStats() {
    try {
        const saved = localStorage.getItem('validisme-stats');
        if (saved) {
            const data = JSON.parse(saved);
            appState.userStats.discovered = new Set(data.discovered || []);
            appState.userStats.score = data.score || 0;
            appState.userStats.gamesPlayed = data.gamesPlayed || 0;
            updateStatsDisplay();
        }
    } catch (e) {
        console.error('Erreur chargement stats:', e);
    }
}

// Mise à jour de l'affichage des stats
function updateStatsDisplay() {
    const discovered = document.getElementById('termsDiscovered');
    const score = document.getElementById('userScore');
    const games = document.getElementById('gamesPlayed');
    
    if (discovered) discovered.textContent = appState.userStats.discovered.size;
    if (score) score.textContent = appState.userStats.score;
    if (games) games.textContent = appState.userStats.gamesPlayed;
}

// Notification d'achievement
function showAchievement(message, type = 'success') {
    const container = document.getElementById('achievementContainer');
    if (!container) return;
    
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.setAttribute('role', 'status');
    popup.setAttribute('aria-live', 'polite');
    
    const icon = type === 'success' ? '✓' : 'ℹ';
    popup.innerHTML = `<strong>${icon} ${message}</strong>`;
    
    container.appendChild(popup);
    
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}

// ========================================
// NAVIGATION ENTRE ONGLETS
// ========================================

function initNavigation() {
    document.querySelectorAll('.nav-tab').forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            switchTab(targetTab);
        });
    });
}

function switchTab(tabId) {
    // Mise à jour des boutons
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    
    const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.setAttribute('aria-selected', 'true');
    }
    
    // Mise à jour du contenu
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active');
        appState.currentTab = tabId;
        
        // Charger le contenu si nécessaire
        loadTabContent(tabId);
    }
}

function loadTabContent(tabId) {
    switch(tabId) {
        case 'a-propos':
            loadAProposContent();
            break;
        case 'definitions':
            loadDefinitionsContent();
            break;
        case 'alternatives':
            loadAlternativesContent();
            break;
        case 'hall-of-shame':
            loadHallOfShameContent();
            break;
    }
}

// ========================================
// CHARGEMENT DES CONTENUS TEXTUELS
// ========================================

function loadAProposContent() {
    const container = document.getElementById('aProposContent');
    if (!container) return;
    
    if (container.hasChildNodes()) return; // Déjà chargé
    
    container.innerHTML = `<div class="info-section">${TEXTES.aPropos || '<p>Contenu en cours de chargement...</p>'}</div>`;
}

function loadDefinitionsContent() {
    const container = document.getElementById('definitionsContent');
    if (!container) return;
    
    if (container.hasChildNodes()) return;
    
    container.innerHTML = `
        <div class="info-section">
            ${TEXTES.definitions.intro || ''}
            ${TEXTES.definitions.validisme || ''}
        </div>
        <div class="info-section">
            ${TEXTES.definitions.capacitisme || ''}
        </div>
        <div class="info-section">
            ${TEXTES.definitions.sanisme || ''}
        </div>
        <div class="info-section">
            ${TEXTES.definitions.handiphobie || ''}
        </div>
        <div class="info-section">
            ${TEXTES.definitions.recoupements || ''}
        </div>
    `;
}

function loadAlternativesContent() {
    const container = document.getElementById('alternativesContent');
    if (!container) return;
    
    if (container.hasChildNodes()) return;
    
    let html = `<div class="info-section">${ALTERNATIVES.introduction || ''}</div>`;
    
    // Vieux français
    if (ALTERNATIVES.vieuxFrancais) {
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.vieuxFrancais.titre}</h2>
                ${ALTERNATIVES.vieuxFrancais.contenu}
            </div>
        `;
    }
    
    // Alimentaires
    if (ALTERNATIVES.alimentaires) {
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.alimentaires.titre}</h2>
                ${ALTERNATIVES.alimentaires.contenu}
            </div>
        `;
    }
    
    // Inventions
    if (ALTERNATIVES.inventions) {
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.inventions.titre}</h2>
                ${ALTERNATIVES.inventions.contenu}
            </div>
        `;
    }
    
    // Régionaux
    if (ALTERNATIVES.regionaux && ALTERNATIVES.regionaux.sections) {
        html += `<div class="info-section"><h2>${ALTERNATIVES.regionaux.titre}</h2>`;
        for (const [key, section] of Object.entries(ALTERNATIVES.regionaux.sections)) {
            html += `<h3>${section.titre}</h3>${section.contenu}`;
        }
        html += `</div>`;
    }
    
    // Descriptions
    if (ALTERNATIVES.descriptions) {
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.descriptions.titre}</h2>
                ${ALTERNATIVES.descriptions.contenu}
            </div>
        `;
    }
    
    // Jurons
    if (ALTERNATIVES.jurons) {
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.jurons.titre}</h2>
                ${ALTERNATIVES.jurons.contenu}
            </div>
        `;
    }
    
    // Conclusion
    if (ALTERNATIVES.conclusion) {
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.conclusion.titre}</h2>
                ${ALTERNATIVES.conclusion.contenu}
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function loadHallOfShameContent() {
    const container = document.getElementById('hallOfShameContent');
    if (!container) return;
    
    if (container.hasChildNodes()) return;
    
    container.innerHTML = `<div class="info-section hall-of-shame">${TEXTES.hallOfShame || ''}</div>`;
}

// ========================================
// RECHERCHE DE TERMES
// ========================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const randomBtn = document.getElementById('randomBtn');
    
    if (!searchInput || !searchBtn || !randomBtn) {
        console.error('Éléments de recherche non trouvés');
        return;
    }
    
    searchBtn.addEventListener('click', () => {
        const term = searchInput.value.trim();
        if (term) performSearch(term);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const term = searchInput.value.trim();
            if (term) performSearch(term);
        }
    });
    
    randomBtn.addEventListener('click', () => {
        const allTerms = Object.keys(DICTIONARY);
        if (allTerms.length === 0) {
            showAchievement('Erreur : base de données non chargée', 'error');
            return;
        }
        
        const randomTerm = allTerms[Math.floor(Math.random() * allTerms.length)];
        searchInput.value = randomTerm;
        performSearch(randomTerm);
    });
}

function performSearch(term) {
    const normalizedTerm = term.toLowerCase().trim();
    const results = document.getElementById('results');
    
    if (!results) {
        console.error('Élément results non trouvé');
        return;
    }
    
    // Vérifier que DICTIONARY existe
    if (Object.keys(DICTIONARY).length === 0) {
        results.innerHTML = `
            <div class="result-card">
                <h2>Erreur de chargement</h2>
                <p style="color: red;">La base de données n'a pas été chargée correctement. Veuillez recharger la page.</p>
            </div>
        `;
        return;
    }
    
    // Chercher dans le dictionnaire
    if (DICTIONARY[normalizedTerm]) {
        displayTermResult(normalizedTerm, DICTIONARY[normalizedTerm], 'terme');
        return;
    }
    
    // Recherche floue (contient le terme)
    const fuzzyMatches = [];
    for (const key of Object.keys(DICTIONARY)) {
        if (key.includes(normalizedTerm) || normalizedTerm.includes(key)) {
            fuzzyMatches.push({ key, data: DICTIONARY[key], type: 'terme' });
        }
    }
    
    if (fuzzyMatches.length > 0) {
        displayFuzzyResults(term, fuzzyMatches);
        return;
    }
    
    // Aucun résultat
    results.innerHTML = `
        <div class="result-card">
            <h2>Terme non trouvé</h2>
            <p>Le terme "${term}" n'est pas encore dans notre base de données. Le dictionnaire contient actuellement ${Object.keys(DICTIONARY).length} entrées !</p>
            <p><strong>Suggestions :</strong> Essayez par exemple : schizophrène, bipolaire, psychopathe, fou, autiste, handicapé, débile, idiot, attardé, mongol...</p>
        </div>
    `;
}

function displayTermResult(term, data, type) {
    const results = document.getElementById('results');
    if (!results) return;
    
    // Mise à jour des stats
    if (!appState.userStats.discovered.has(term)) {
        appState.userStats.discovered.add(term);
        appState.userStats.score += 10;
        updateStatsDisplay();
        saveStats();
        showAchievement(`Nouveau ${type} découvert : "${term}" (+10 points)`);
    }
    
    // Création des badges
    const badgesHTML = data.types.map(t => {
        let badgeClass = 'badge-validiste';
        if (t === 'sante-mentale' || t === 'saniste' || t === 'psychophobe') badgeClass = 'badge-saniste';
        if (t === 'capacitisme') badgeClass = 'badge-capacitiste';
        if (t === 'handicap-physique') badgeClass = 'badge-validiste';
        if (t === 'neuroatypie') badgeClass = 'badge-neuroatypie';
        if (t === 'raciste') badgeClass = 'badge-raciste';
        if (t === 'sexiste' || t === 'agiste' || t === 'eugeniste') badgeClass = 'badge-agiste';
        
        // Affichage du nom lisible
        let displayName = t;
        if (t === 'sante-mentale') displayName = 'Santé mentale';
        if (t === 'handicap-physique') displayName = 'Handicap physique';
        if (t === 'neuroatypie') displayName = 'Neuroatypie';
        
        return `<span class="badge ${badgeClass}">${displayName.charAt(0).toUpperCase() + displayName.slice(1)}</span>`;
    }).join('');
    
    // Création des alternatives par catégorie
    let alternativesHTML = '';
    if (data.alternatives) {
        for (const [category, alts] of Object.entries(data.alternatives)) {
            if (Array.isArray(alts) && alts.length > 0) {
                alternativesHTML += `
                    <div class="category-section">
                        <h4>${category}</h4>
                        <ul class="alternatives-list">
                            ${alts.map(alt => `<li>${alt}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
        }
    }
    
    results.innerHTML = `
        <div class="result-card">
            <div class="badges">${badgesHTML}</div>
            <h2>"${term}"</h2>
            ${data.intention ? `<p><strong>Statut :</strong> ${data.intention}</p>` : ''}
            <h3>Pourquoi c'est problématique :</h3>
            <p>${data.problematique}</p>
            ${alternativesHTML ? `<h3>Alternatives non oppressives :</h3>${alternativesHTML}` : ''}
        </div>
    `;
    
    // Scroll vers les résultats
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function displayFuzzyResults(searchTerm, matches) {
    const results = document.getElementById('results');
    if (!results) return;
    
    let html = `
        <div class="result-card">
            <h2>Résultats pour "${searchTerm}"</h2>
            <p>Nous avons trouvé ${matches.length} terme(s) similaire(s) :</p>
            <ul class="alternatives-list">
    `;
    
    matches.forEach(match => {
        const shortDesc = match.data.problematique.substring(0, 100);
        html += `
            <li style="cursor: pointer; border-left-color: #667eea;" 
                onclick="performSearch('${match.key.replace(/'/g, "\\'")}')"
                onkeypress="if(event.key==='Enter') performSearch('${match.key.replace(/'/g, "\\'")}')"
                tabindex="0"
                role="button"
                aria-label="Rechercher ${match.key}">
                <strong>${match.key}</strong> - ${shortDesc}...
            </li>
        `;
    });
    
    html += `</ul></div>`;
    results.innerHTML = html;
}

// ========================================
// QUIZ PRINCIPAL
// ========================================

const QUIZ_QUESTIONS = [
    {
        section: "Partie 1 : Expressions courantes",
        questions: [
            "C'est débile !",
            "T'es con ou quoi ?",
            "Arrête de faire l'autiste",
            "Il est complètement taré",
            "C'est un truc de malade",
            "T'es schizo, tu changes tout le temps d'avis",
            "Elle est bipolaire celle-là",
            "Faut pas être parano",
            "C'est dingue / fou / insane !",
            "Quel mongol ! ou sa variante : Golmon, va !"
        ]
    },
    {
        section: "Partie 2 : Expressions plus subtiles",
        questions: [
            "Il est un peu attardé",
            "Elle fait la sourde oreille",
            "Tu es aveugle ou quoi ?",
            "C'est un raisonnement boiteux",
            "Ce projet avance clopin-clopant",
            "Arrête ton hystérie",
            "Il est complètement perché",
            "T'es vraiment naze",
            "Quel abruti !",
            "C'est handicapant (pour dire embêtant)"
        ]
    },
    {
        section: "Partie 3 : Dans des contextes positifs",
        questions: [
            "C'est fou comme c'est beau !",
            "T'es un malade mental ! (pour dire t'es incroyable)",
            "C'est dément !",
            "Je suis fou de toi",
            "C'est de la folie pure !",
            "Il est cinglé ce mec (admiratif)",
            "C'est insane ce qu'il a fait",
            "Elle est tarée (positif)",
            "C'est un délire de malade",
            "Mais t'es zinzin toi ! (affectueux)"
        ]
    },
    {
        section: "Partie 4 : Expressions figées et métaphores",
        questions: [
            "Tomber dans l'oreille d'un sourd",
            "Au royaume des aveugles, les borgnes sont rois",
            "C'est l'asile ici !",
            "C'est un asile de fous",
            "J'ai eu une idée de malade mental",
            "C'était de la folie furieuse",
            "Il a pété un câble / pété les plombs",
            "Elle a disjoncté",
            "Amputé du cerveau",
            "Légume (pour quelqu'un de passif)"
        ]
    },
    {
        section: "Partie 5 : Auto-description",
        questions: [
            "Je suis trop con·ne",
            "Je deviens fou/folle",
            "Je suis débile",
            "J'ai été vraiment nul·le",
            "Je suis dépressif·ve aujourd'hui (pour dire triste)",
            "Je suis parano",
            "Je pars en vrille",
            "Je suis complètement taré·e",
            "J'ai fait un truc de malade",
            "Je pète un câble"
        ]
    }
];

function initQuiz() {
    const startBtn = document.getElementById('startMainQuiz');
    if (!startBtn) return;
    
    startBtn.addEventListener('click', () => {
        startQuiz();
    });
}

function startQuiz() {
    const intro = document.querySelector('.quiz-intro');
    const content = document.getElementById('quizContent');
    
    if (!intro || !content) return;
    
    intro.style.display = 'none';
    content.style.display = 'block';
    
    appState.quizState = {
        currentSection: 0,
        answers: [],
        completed: false
    };
    
    renderQuiz();
}

function renderQuiz() {
    const content = document.getElementById('quizContent');
    if (!content) return;
    
    let html = '';
    let questionIndex = 0;
    
    QUIZ_QUESTIONS.forEach((section, sectionIdx) => {
        html += `
            <div class="quiz-section">
                <h3>${section.section}</h3>
        `;
        
        section.questions.forEach((question, qIdx) => {
            const globalIdx = questionIndex++;
            html += `
                <div class="quiz-question">
                    <label>
                        <input 
                            type="checkbox" 
                            name="q${globalIdx}" 
                            value="1"
                            aria-label="${question}"
                        >
                        ${question}
                    </label>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    html += `
        <button class="primary-btn" id="submitQuiz" style="display: block; margin: 30px auto;">
            Voir mes résultats
        </button>
    `;
    
    content.innerHTML = html;
    
    const submitBtn = document.getElementById('submitQuiz');
    if (submitBtn) {
        submitBtn.addEventListener('click', calculateQuizResults);
    }
}

function calculateQuizResults() {
    const checkboxes = document.querySelectorAll('#quizContent input[type="checkbox"]');
    let score = 0;
    
    checkboxes.forEach(cb => {
        if (cb.checked) score++;
    });
    
    // Mise à jour stats
    appState.userStats.score += 50;
    appState.userStats.gamesPlayed++;
    updateStatsDisplay();
    saveStats();
    
    displayQuizResults(score);
}

function displayQuizResults(score) {
    const content = document.getElementById('quizContent');
    const resultsDiv = document.getElementById('quizResults');
    
    if (!content || !resultsDiv) return;
    
    content.style.display = 'none';
    resultsDiv.style.display = 'block';
    
    let title = '';
    let description = '';
    
    if (score <= 5) {
        title = "Le Chevalier du Langage Non-Oppressif";
        description = `
            <p>Fichtre ! Sacrebleu ! Mazette !</p>
            <p>Tu es déjà très vigilant·e sur ton langage ! Soit tu as déjà fait un travail de déconstruction, soit tu as naturellement échappé à ces automatismes. Continue comme ça, et n'hésite pas à partager ce dictionnaire autour de toi.</p>
            <p><strong>Prochaine étape :</strong> Deviens un·e allié·e actif·ve en reprenant (avec bienveillance) les personnes qui utilisent un langage validiste autour de toi.</p>
        `;
    } else if (score <= 15) {
        title = "Le Conscient en Devenir";
        description = `
            <p>Diantre, tu es sur la bonne voie !</p>
            <p>Tu as déjà conscience de certains automatismes validistes, mais il reste quelques expressions qui te filent entre les doigts. C'est normal : le validisme est TELLEMENT ancré dans notre langue qu'on ne le voit plus.</p>
            <p><strong>Prochaine étape :</strong> Choisis 3-5 expressions que tu utilises souvent et trouve-leur des alternatives dans ce dictionnaire. Entraîne-toi à les utiliser pendant une semaine.</p>
        `;
    } else if (score <= 30) {
        title = "Le Validiste qui S'ignore";
        description = `
            <p>Palsambleu, il y a du boulot !</p>
            <p>Tu utilises régulièrement des expressions validistes, probablement sans t'en rendre compte. MAIS maintenant que tu SAIS, tu ne peux plus faire comme si de rien n'était !</p>
            <p><strong>Ton défi :</strong> Pendant une semaine, repère toutes les fois où tu utilises une expression validiste. Note-les. Puis choisis-en 5 et trouve des alternatives créatives.</p>
        `;
    } else if (score <= 40) {
        title = "Alerte Rouge Validiste";
        description = `
            <p>Jarnibleu ! Ventrebleu ! Tudieu !</p>
            <p>Ton langage est truffé d'expressions validistes. Mais ne désespère pas : tu as fait le test, donc tu es prêt·e à changer.</p>
            <p><strong>Plan d'action URGENT :</strong> Relis ce dictionnaire et note les 10 expressions que tu utilises le plus. Pour chacune, trouve 2-3 alternatives qui te plaisent vraiment.</p>
        `;
    } else {
        title = "Champion·ne du Validisme";
        description = `
            <p>VENTREBLEU ! MORBLEU !</p>
            <p>Tu as coché presque toutes les cases. Ton langage est un festival de validisme. Mais tu es là, donc il y a de l'espoir !</p>
            <p><strong>Action immédiate :</strong> Choisis 5 alternatives qui te plaisent dans ce dictionnaire. Force-toi à les utiliser pendant 1 mois. Ça deviendra naturel.</p>
            <p>TU N'AS BESOIN D'AUCUNE EXPRESSION VALIDISTE. AUCUNE. Le français est riche !</p>
        `;
    }
    
    resultsDiv.innerHTML = `
        <div class="quiz-results">
            <div class="score">${score} / 50</div>
            <h2>${title}</h2>
            ${description}
            <button class="primary-btn" onclick="location.reload()" style="margin-top: 30px;">
                Recommencer
            </button>
        </div>
    `;
    
    showAchievement('Quiz terminé ! +50 points', 'success');
}

// ========================================
// INITIALISATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initialisation de l\'application...');
    
    // Vérifier que les données sont chargées
    if (typeof DICTIONARY === 'undefined' || typeof TEXTES === 'undefined' || typeof ALTERNATIVES === 'undefined') {
        console.error('ERREUR CRITIQUE : Impossible de charger les données depuis données-dictionnaire.js');
        showAchievement('Erreur de chargement des données', 'error');
        return;
    }
    
    console.log('✓ Données initialisées');
    console.log('  - DICTIONARY:', Object.keys(DICTIONARY).length, 'termes');
    console.log('  - TEXTES: OK');
    console.log('  - ALTERNATIVES: OK');
    
    loadStats();
    initNavigation();
    initSearch();
    initQuiz();
    
    // Initialiser les jeux seulement si games.js est chargé
    if (typeof initGames === 'function') {
        initGames();
        console.log('✓ Jeux initialisés');
    } else {
        console.warn('games.js non chargé - jeux non disponibles');
    }
    
    // Charger le contenu initial (À PROPOS)
    loadAProposContent();
    
    // Navigation clavier globale
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const results = document.getElementById('results');
            if (results) results.innerHTML = '';
        }
    });
    
    console.log('✓ Initialisation terminée');
});

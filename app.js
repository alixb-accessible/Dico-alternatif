/* ========================================
   APPLICATION PRINCIPALE
   ======================================== */

// État global de l'application
const appState = {
    userStats: {
        discovered: new Set(),
        score: 0,
        gamesPlayed: 0
    },
    currentTab: 'quiz',
    quizState: {
        currentSection: 0,
        answers: [],
        completed: false
    }
};

// Sauvegarde/chargement des stats dans localStorage
function saveStats() {
    localStorage.setItem('validisme-stats', JSON.stringify({
        discovered: Array.from(appState.userStats.discovered),
        score: appState.userStats.score,
        gamesPlayed: appState.userStats.gamesPlayed
    }));
}

function loadStats() {
    const saved = localStorage.getItem('validisme-stats');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            appState.userStats.discovered = new Set(data.discovered || []);
            appState.userStats.score = data.score || 0;
            appState.userStats.gamesPlayed = data.gamesPlayed || 0;
            updateStatsDisplay();
        } catch (e) {
            console.error('Erreur chargement stats:', e);
        }
    }
}

// Mise à jour de l'affichage des stats
function updateStatsDisplay() {
    document.getElementById('termsDiscovered').textContent = appState.userStats.discovered.size;
    document.getElementById('userScore').textContent = appState.userStats.score;
    document.getElementById('gamesPlayed').textContent = appState.userStats.gamesPlayed;
}

// Notification d'achievement
function showAchievement(message, type = 'success') {
    const container = document.getElementById('achievementContainer');
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
        case 'prologue':
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
    const container = document.getElementById('prologueContent');
    if (!container.hasChildNodes()) {
        container.innerHTML = TEXTES.aPropos;
    }
}

function loadDefinitionsContent() {
    const container = document.getElementById('definitionsContent');
    if (!container.hasChildNodes()) {
        container.innerHTML = `
            <div class="info-section">
                ${TEXTES.definitions.intro}
                ${TEXTES.definitions.validisme}
            </div>
            <div class="info-section">
                ${TEXTES.definitions.capacitisme}
            </div>
            <div class="info-section">
                ${TEXTES.definitions.sanisme}
            </div>
            <div class="info-section">
                ${TEXTES.definitions.handiphobie}
            </div>
            <div class="info-section">
                ${TEXTES.definitions.recoupements}
            </div>
        `;
    }
}

function loadAlternativesContent() {
    const container = document.getElementById('alternativesContent');
    if (!container.hasChildNodes()) {
        let html = `<div class="info-section">${ALTERNATIVES.introduction}</div>`;
        
        // Vieux français
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.vieuxFrancais.titre}</h2>
                ${ALTERNATIVES.vieuxFrancais.contenu}
            </div>
        `;
        
        // Alimentaires
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.alimentaires.titre}</h2>
                ${ALTERNATIVES.alimentaires.contenu}
            </div>
        `;
        
        // Inventions
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.inventions.titre}</h2>
                ${ALTERNATIVES.inventions.contenu}
            </div>
        `;
        
        // Régionaux
        html += `<div class="info-section"><h2>${ALTERNATIVES.regionaux.titre}</h2>`;
        for (const [key, section] of Object.entries(ALTERNATIVES.regionaux.sections)) {
            html += `<h3>${section.titre}</h3>${section.contenu}`;
        }
        html += `</div>`;
        
        // Descriptions
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.descriptions.titre}</h2>
                ${ALTERNATIVES.descriptions.contenu}
            </div>
        `;
        
        // Jurons
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.jurons.titre}</h2>
                ${ALTERNATIVES.jurons.contenu}
            </div>
        `;
        
        // Conclusion
        html += `
            <div class="info-section">
                <h2>${ALTERNATIVES.conclusion.titre}</h2>
                ${ALTERNATIVES.conclusion.contenu}
            </div>
        `;
        
        container.innerHTML = html;
    }
}

function loadHallOfShameContent() {
    const container = document.getElementById('hallOfShameContent');
    if (!container.hasChildNodes()) {
        container.innerHTML = `<div class="info-section hall-of-shame">${TEXTES.hallOfShame}</div>`;
    }
}

// ========================================
// RECHERCHE DE TERMES
// ========================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const randomBtn = document.getElementById('randomBtn');
    
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
        const allTerms = [...Object.keys(DICTIONARY), ...Object.keys(EXPRESSIONS)];
        const randomTerm = allTerms[Math.floor(Math.random() * allTerms.length)];
        searchInput.value = randomTerm;
        performSearch(randomTerm);
    });
}

function performSearch(term) {
    const normalizedTerm = term.toLowerCase().trim();
    const results = document.getElementById('results');
    
    // Chercher d'abord dans le dictionnaire
    if (DICTIONARY[normalizedTerm]) {
        displayTermResult(normalizedTerm, DICTIONARY[normalizedTerm], 'terme');
        return;
    }
    
    // Puis dans les expressions
    if (EXPRESSIONS[normalizedTerm]) {
        displayTermResult(normalizedTerm, EXPRESSIONS[normalizedTerm], 'expression');
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
            <p>Le terme "${term}" n'est pas encore dans notre base de données. Le dictionnaire contient plus de 170 entrées !</p>
            <p><strong>Suggestions :</strong> Essayez par exemple : débile, fou, autiste, handicapé, schizo, mongol, taré, crétin, idiot, psychopathe...</p>
        </div>
    `;
}

function displayTermResult(term, data, type) {
    const results = document.getElementById('results');
    
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
        if (t === 'saniste' || t === 'psychophobe') badgeClass = 'badge-saniste';
        if (t === 'capacitiste') badgeClass = 'badge-capacitiste';
        if (t === 'raciste') badgeClass = 'badge-raciste';
        if (t === 'sexiste' || t === 'agiste' || t === 'eugeniste') badgeClass = 'badge-agiste';
        return `<span class="badge ${badgeClass}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`;
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
            ${data.intention ? `<p><strong>Intention :</strong> ${data.intention}</p>` : ''}
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
    
    let html = `
        <div class="result-card">
            <h2>Résultats pour "${searchTerm}"</h2>
            <p>Nous avons trouvé ${matches.length} terme(s) similaire(s) :</p>
            <ul class="alternatives-list">
    `;
    
    matches.forEach(match => {
        html += `
            <li style="cursor: pointer; border-left-color: #667eea;" 
                onclick="performSearch('${match.key}')"
                onkeypress="if(event.key==='Enter') performSearch('${match.key}')"
                tabindex="0"
                role="button"
                aria-label="Rechercher ${match.key}">
                <strong>${match.key}</strong> - ${match.data.problematique.substring(0, 100)}...
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
            "Quel mongol !" + " ou sa variante : Golmon, va !"
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
    
    startBtn.addEventListener('click', () => {
        startQuiz();
    });
}

function startQuiz() {
    const intro = document.querySelector('.quiz-intro');
    const content = document.getElementById('quizContent');
    
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
    
    document.getElementById('submitQuiz').addEventListener('click', calculateQuizResults);
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
    
    content.style.display = 'none';
    resultsDiv.style.display = 'block';
    
    let resultHTML = '';
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
            <p>Tu as déjà conscience de certains automatismes validistes, mais il reste quelques expressions qui te filent entre les doigts (surtout dans les parties 3, 4 et 5, c'est ça ?). C'est normal : le validisme est TELLEMENT ancré dans notre langue qu'on ne le voit plus.</p>
            <p><strong>Prochaine étape :</strong> Choisis 3-5 expressions que tu utilises souvent et trouve-leur des alternatives dans ce dictionnaire. Entraîne-toi à les utiliser pendant une semaine. Ton cerveau va intégrer progressivement ces nouveaux réflexes.</p>
            <p><strong>Ton mantra :</strong> "Au lieu de dire [expression validiste], je vais dire [alternative créative]."</p>
        `;
    } else if (score <= 30) {
        title = "Le Validiste qui S'ignore";
        description = `
            <p>Palsambleu, il y a du boulot !</p>
            <p>Tu utilises régulièrement des expressions validistes, probablement sans même t'en rendre compte. Ce n'est pas de ta faute : on baigne dedans depuis l'enfance. MAIS maintenant que tu SAIS, tu ne peux plus faire comme si de rien n'était !</p>
            <p><strong>La bonne nouvelle :</strong> Tu as pris conscience, et c'est la première étape. Le changement est possible !</p>
            <p><strong>Ton défi :</strong> Pendant une semaine, essaie de repérer TOUTES les fois où tu utilises une expression validiste (ou où tu l'entends). Note-les. Puis choisis-en 5 et trouve des alternatives créatives qui te plaisent vraiment.</p>
            <h4>Astuces :</h4>
            <ul>
                <li>Commence par les expressions que tu utilises LE PLUS souvent</li>
                <li>Trouve des alternatives qui te font RIRE ou qui te plaisent esthétiquement (ex: "Sacrebleu, quel faquin !" au lieu de "Quel con !")</li>
                <li>Autorise-toi à faire des erreurs : personne n'est parfait, l'important c'est de progresser</li>
            </ul>
            <p><strong>Rappel :</strong> Changer de vocabulaire, ce n'est pas se censurer, c'est ENRICHIR sa langue et respecter les autres. Tu ne perds rien, tu GAGNES de la créativité !</p>
        `;
    } else if (score <= 40) {
        title = "Alerte Rouge Validiste";
        description = `
            <p>Jarnibleu ! Ventrebleu ! Tudieu !</p>
            <p>Ami·e, tu es en plein bain de validisme ! Ton langage est truffé d'expressions qui stigmatisent les personnes en situation de handicap ou ayant des troubles de santé mentale. Mais ne désespère pas : tu as fait le test, donc tu es prêt·e à changer.</p>
            <h4>Pourquoi c'est grave :</h4>
            <ul>
                <li>Ces expressions banalisent la discrimination</li>
                <li>Elles font mal aux personnes concernées (même si tu ne le vois pas)</li>
                <li>Elles perpétuent des stéréotypes dangereux (handicap = défaut, maladie mentale = danger)</li>
                <li>Elles appauvrissent ta langue en te faisant répéter toujours les mêmes insultes</li>
            </ul>
            <h4>Ton plan d'action URGENT :</h4>
            <ol>
                <li>Relis ce dictionnaire EN ENTIER et note les 10 expressions que tu utilises le plus</li>
                <li>Pour chacune, trouve 2-3 alternatives qui te plaisent vraiment (vieux français, créatives, poétiques, patois, etc.)</li>
                <li>Entraîne-toi ACTIVEMENT : quand tu es seul·e, dis ces alternatives à voix haute, fais-toi des petits jeux mentaux</li>
                <li>Demande à un·e ami·e de te reprendre quand tu utilises une expression validiste (avec bienveillance !)</li>
                <li>Sois patient·e avec toi-même : désapprendre des décennies d'automatismes prend du temps</li>
            </ol>
        `;
    } else {
        title = "Champion·ne du Validisme (il faut qu'on parle)";
        description = `
            <p>VENTREBLEU ! MORBLEU ! JARNIDIEU !</p>
            <p>Ami·e, tu as coché presque TOUTES les cases. Ton langage est un festival de validisme. Mais tu es là, tu as fait le quiz jusqu'au bout, donc il y a de l'espoir !</p>
            <h3>Prenons les choses en main :</h3>
            <h4>1. Comprends l'impact réel de tes mots</h4>
            <p>Ces expressions ne sont pas "juste des mots". Pour les 12 millions de personnes en situation de handicap en France :</p>
            <ul>
                <li>Elles rappellent qu'on les considère comme "moins que"</li>
                <li>Elles contribuent à leur exclusion sociale et professionnelle</li>
                <li>Elles banalisent la discrimination qu'elles subissent au quotidien</li>
                <li>Elles font MAL, vraiment</li>
            </ul>
            <h4>2. Relis le Hall of Shame</h4>
            <p>Tu vois Farandou, Bayrou, Fillon, Zemmour ? Ils ont utilisé le handicap comme insultes devant des millions de personnes. Résultat : indignation, excuses exigées, plaintes au CSA.</p>
            <h4>3. Action immédiate</h4>
            <ul>
                <li><strong>CETTE SEMAINE :</strong> Relis ce dictionnaire et choisis 5 alternatives qui te plaisent</li>
                <li><strong>PENDANT 1 MOIS :</strong> Interdis-toi les 5 expressions validistes que tu utilises le plus</li>
                <li>Remplace-les par tes 5 alternatives choisies (force-toi au début, ça deviendra naturel)</li>
            </ul>
            <h4>4. Rappelle-toi : la langue française est RICHE</h4>
            <p>Tu as à ta disposition :</p>
            <ul>
                <li>Des insultes élégantes du vieux français (bélître, faquin, malotru, etc.)</li>
                <li>Des dizaines d'insultes alimentaires</li>
                <li>Des jurons magnifiques</li>
                <li>Des exemples en patois</li>
                <li>Des épithètes à base de racines grecques et latines</li>
                <li>Des descriptions précises de comportements</li>
                <li>Des créations poétiques infinies</li>
            </ul>
            <p><strong>TU N'AS BESOIN D'AUCUNE EXPRESSION VALIDISTE. AUCUNE.</strong></p>
            <h4>5. Obligation légale et morale</h4>
            <p>Rappel : le validisme est puni par la loi (jusqu'à 3 ans de prison et 45 000 euros d'amende). Et au-delà de la loi, c'est une question de RESPECT et d'HUMANITÉ.</p>
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
    loadStats();
    initNavigation();
    initSearch();
    initQuiz();
    initGames();
    
    // Navigation clavier globale
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const results = document.getElementById('results');
            if (results) results.innerHTML = '';
        }
    });
});

/* ========================================
   JEUX ÉDUCATIFS
   ======================================== */

// État des jeux
const gamesState = {
    currentGame: null,
    memory: {
        cards: [],
        flipped: [],
        matched: [],
        moves: 0
    },
    trueFalse: {
        questions: [],
        currentQuestion: 0,
        score: 0
    },
    speed: {
        timeLeft: 60,
        score: 0,
        timer: null,
        currentTerm: null
    },
    bingo: {
        phrases: [],
        found: [],
        score: 0
    },
    hangman: {
        word: '',
        guessed: [],
        remainingTries: 10,
        category: '',
        revealedLetters: []
    }
};

// ========================================
// INITIALISATION DES JEUX
// ========================================

function initGames() {
    // Bouton générateur d'insultes
    const gamesGrid = document.querySelector('.games-grid');
    if (gamesGrid) {
        // Ajout du bouton pour le générateur externe
        const generatorCard = document.createElement('div');
        generatorCard.className = 'game-card';
        generatorCard.innerHTML = `
            <h3>Atelier Créatif</h3>
            <p>Forge ton insulte sur mesure avec des racines grecques et latines !</p>
            <button class="primary-btn" id="openGenerator">Créer</button>
        `;
        gamesGrid.appendChild(generatorCard);
        
        document.getElementById('openGenerator').addEventListener('click', () => {
            window.open('https://alixb-accessible.github.io/NEOLOGISMES_INCLUSIFS/', '_blank');
            appState.userStats.gamesPlayed++;
            appState.userStats.score += 5;
            updateStatsDisplay();
            saveStats();
            showAchievement('Atelier créatif ouvert ! +5 points');
        });
    }
    
    // Boutons des autres jeux
    document.querySelectorAll('[data-game]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gameType = e.target.dataset.game;
            startGame(gameType);
        });
    });
}

function startGame(gameType) {
    const gameArea = document.getElementById('gameArea');
    const gamesGrid = document.querySelector('.games-grid');
    
    if (!gameArea || !gamesGrid) return;
    
    gamesGrid.style.display = 'none';
    gameArea.style.display = 'block';
    gameArea.innerHTML = '';
    
    gamesState.currentGame = gameType;
    
    // Mise à jour stats
    appState.userStats.gamesPlayed++;
    updateStatsDisplay();
    saveStats();
    
    switch(gameType) {
        case 'memory':
            initMemoryGame(gameArea);
            break;
        case 'truefalse':
            initTrueFalseGame(gameArea);
            break;
        case 'speed':
            initSpeedGame(gameArea);
            break;
        case 'bingo':
            initBingoGame(gameArea);
            break;
        case 'hangman':
            initHangmanGame(gameArea);
            break;
    }
}

function endGame() {
    const gameArea = document.getElementById('gameArea');
    const gamesGrid = document.querySelector('.games-grid');
    
    if (!gameArea || !gamesGrid) return;
    
    gameArea.style.display = 'none';
    gameArea.innerHTML = '';
    gamesGrid.style.display = 'grid';
    
    gamesState.currentGame = null;
}

// ========================================
// JEU 1 : MEMORY
// ========================================

function initMemoryGame(container) {
    const pairs = [
        { term: 'débile', alt: 'absurde' },
        { term: 'fou', alt: 'extraordinaire' },
        { term: 'autiste', alt: 'réservé' },
        { term: 'handicapé', alt: 'incompétent' },
        { term: 'schizo', alt: 'contradictoire' },
        { term: 'mongol', alt: 'bélître' },
        { term: 'crétin', alt: 'faquin' },
        { term: 'idiot', alt: 'malotru' }
    ];
    
    // Créer les cartes (paires)
    const cards = [];
    pairs.forEach((pair, idx) => {
        cards.push({ id: `term-${idx}`, text: pair.term, pairId: idx, type: 'term' });
        cards.push({ id: `alt-${idx}`, text: pair.alt, pairId: idx, type: 'alt' });
    });
    
    // Mélanger
    cards.sort(() => Math.random() - 0.5);
    
    gamesState.memory = {
        cards: cards,
        flipped: [],
        matched: [],
        moves: 0
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Memory : Associe les termes et leurs alternatives</h2>
        <div class="game-score">Coups : <span id="memoryMoves">0</span></div>
        <div class="game-board memory-grid" id="memoryBoard"></div>
    `;
    
    const board = document.getElementById('memoryBoard');
    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.id = card.id;
        cardEl.dataset.pairId = card.pairId;
        cardEl.textContent = '?';
        cardEl.setAttribute('role', 'button');
        cardEl.setAttribute('tabindex', '0');
        cardEl.setAttribute('aria-label', `Carte cachée`);
        
        cardEl.addEventListener('click', () => flipMemoryCard(card, cardEl));
        cardEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                flipMemoryCard(card, cardEl);
            }
        });
        
        board.appendChild(cardEl);
    });
}

function flipMemoryCard(card, element) {
    if (gamesState.memory.flipped.length >= 2) return;
    if (element.classList.contains('flipped') || element.classList.contains('matched')) return;
    
    element.classList.add('flipped');
    element.textContent = card.text;
    element.setAttribute('aria-label', card.text);
    gamesState.memory.flipped.push({ card, element });
    
    if (gamesState.memory.flipped.length === 2) {
        gamesState.memory.moves++;
        document.getElementById('memoryMoves').textContent = gamesState.memory.moves;
        
        setTimeout(checkMemoryMatch, 1000);
    }
}

function checkMemoryMatch() {
    const [first, second] = gamesState.memory.flipped;
    
    if (first.card.pairId === second.card.pairId) {
        // Match !
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        gamesState.memory.matched.push(first.card.pairId);
        
        appState.userStats.score += 10;
        updateStatsDisplay();
        saveStats();
        
        if (gamesState.memory.matched.length === 8) {
            setTimeout(() => {
                showAchievement(`Memory terminé en ${gamesState.memory.moves} coups ! +50 points`);
                appState.userStats.score += 40;
                updateStatsDisplay();
                saveStats();
            }, 500);
        }
    } else {
        // Pas de match
        first.element.classList.remove('flipped');
        second.element.classList.remove('flipped');
        first.element.textContent = '?';
        second.element.textContent = '?';
        first.element.setAttribute('aria-label', 'Carte cachée');
        second.element.setAttribute('aria-label', 'Carte cachée');
    }
    
    gamesState.memory.flipped = [];
}

// ========================================
// JEU 2 : VRAI OU FAUX (ÉTENDU)
// ========================================

function initTrueFalseGame(container) {
    const questions = [
        {
            statement: "Le terme 'mongol' pour désigner la trisomie 21 était basé sur des préjugés racistes",
            answer: true,
            explanation: "Oui ! En 1866, le médecin John Langdon Down pensait que les personnes trisomiques ressemblaient aux populations asiatiques qu'il considérait comme 'inférieures'. C'est doublement discriminatoire : validisme + racisme."
        },
        {
            statement: "Les personnes autistes n'ont pas d'empathie",
            answer: false,
            explanation: "Faux ! C'est un stéréotype totalement faux. Les personnes autistes ont de l'empathie, elle s'exprime différemment."
        },
        {
            statement: "La schizophrénie est un dédoublement de personnalité",
            answer: false,
            explanation: "Faux ! C'est une croyance erronée très répandue. La schizophrénie n'a rien à voir avec un dédoublement de personnalité."
        },
        {
            statement: "Le terme 'débile' était un terme médical pour une déficience intellectuelle",
            answer: true,
            explanation: "Vrai. C'était un terme de classification psychiatrique du XIXe siècle (échelle : idiot < imbécile < débile). C'est pourquoi l'utiliser comme insulte est validiste."
        },
        {
            statement: "Dire 'dialogue de sourds' n'est pas problématique car c'est une expression courante",
            answer: false,
            explanation: "Faux ! Même si c'est courant, cette expression utilise le handicap auditif comme métaphore d'échec de communication, ce qui est validiste."
        },
        {
            statement: "Le validisme est puni par la loi en France",
            answer: true,
            explanation: "Vrai ! Les discriminations liées au handicap sont punies jusqu'à 3 ans de prison et 45 000€ d'amende."
        },
        {
            statement: "'Bélître' est une insulte validiste",
            answer: false,
            explanation: "Faux ! 'Bélître' signifie 'mendiant, homme de rien' et n'a aucun lien avec le handicap. C'est une alternative parfaite !"
        },
        {
            statement: "François Fillon a dit 'Je ne suis pas autiste' en 2017",
            answer: true,
            explanation: "Vrai, hélas. Il l'a répété 4 fois sur France 2 pendant l'affaire Penelopegate, alors que son épouse était marraine d'une association sur l'autisme."
        },
        {
            statement: "Le terme 'hystérique' a des origines sexistes",
            answer: true,
            explanation: "Vrai ! Du grec 'hystera' (utérus), c'était un diagnostic psychiatrique réservé aux femmes au XIXe siècle. Triple discrimination : saniste + sexiste + validiste."
        },
        {
            statement: "'Faquin' est une insulte validiste à éviter",
            answer: false,
            explanation: "Faux ! 'Faquin' signifie 'personnage méprisable, vaniteux' et ne fait aucune référence au handicap. C'est une excellente alternative !"
        },
        {
            statement: "Jean-Pierre Farandou a utilisé l'autisme comme insulte en 2025",
            answer: true,
            explanation: "Vrai. Le ministre du Travail a dit 'On n'est pas sourds, on n'est pas autistes' sur France 2, utilisant ces handicaps comme synonymes d'incompétence."
        },
        {
            statement: "Le capacitisme et le validisme désignent exactement la même chose",
            answer: false,
            explanation: "Faux ! Le validisme cible les personnes handicapées, tandis que le capacitisme est un système plus large qui hiérarchise tout le monde selon leurs capacités (productivité, autonomie, performance)."
        },
        {
            statement: "Dire 'C'est fou !' dans un contexte positif n'est pas problématique",
            answer: false,
            explanation: "Faux ! Même utilisé positivement, cela banalise et renforce l'association entre 'folie' et extrême, ce qui stigmatise les troubles psychiatriques."
        },
        {
            statement: "Le terme 'taré' a des origines eugénistes",
            answer: true,
            explanation: "Vrai. C'était un terme eugéniste désignant les personnes considérées comme génétiquement 'défectueuses'. Histoire très sombre liée aux nazis et stérilisations forcées."
        },
        {
            statement: "Les troubles mentaux sont systématiquement associés à la violence",
            answer: false,
            explanation: "Faux ! C'est un mythe dangereux. La grande majorité des personnes avec troubles mentaux ne sont pas violentes. C'est un amalgame saniste qui renforce la stigmatisation."
        }
    ];
    
    questions.sort(() => Math.random() - 0.5);
    
    gamesState.trueFalse = {
        questions: questions,
        currentQuestion: 0,
        score: 0
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Vrai ou Faux</h2>
        <div class="game-score">Score : <span id="tfScore">0</span> / ${questions.length}</div>
        <div id="tfQuestion"></div>
    `;
    
    showTrueFalseQuestion();
}

function showTrueFalseQuestion() {
    const state = gamesState.trueFalse;
    const container = document.getElementById('tfQuestion');
    
    if (!container) return;
    
    if (state.currentQuestion >= state.questions.length) {
        container.innerHTML = `
            <div class="quiz-results">
                <h2>Terminé !</h2>
                <div class="score">${state.score} / ${state.questions.length}</div>
                <p>Tu as obtenu ${Math.round((state.score / state.questions.length) * 100)}% de bonnes réponses !</p>
                <button class="primary-btn" onclick="initTrueFalseGame(document.getElementById('gameArea'))">
                    Rejouer
                </button>
            </div>
        `;
        
        appState.userStats.score += state.score * 5;
        updateStatsDisplay();
        saveStats();
        showAchievement(`Vrai ou Faux terminé ! +${state.score * 5} points`);
        return;
    }
    
    const q = state.questions[state.currentQuestion];
    
    container.innerHTML = `
        <div class="result-card">
            <h3>Question ${state.currentQuestion + 1} / ${state.questions.length}</h3>
            <p style="font-size: 1.2rem; margin: 20px 0;">${q.statement}</p>
            <div style="display: flex; gap: 20px; justify-content: center;">
                <button class="primary-btn" onclick="answerTrueFalse(true)" style="min-width: 120px;">
                    Vrai
                </button>
                <button class="primary-btn" onclick="answerTrueFalse(false)" style="min-width: 120px; background: var(--color-danger);">
                    Faux
                </button>
            </div>
        </div>
    `;
}

function answerTrueFalse(userAnswer) {
    const state = gamesState.trueFalse;
    const q = state.questions[state.currentQuestion];
    const container = document.getElementById('tfQuestion');
    
    if (!container) return;
    
    const isCorrect = userAnswer === q.answer;
    if (isCorrect) state.score++;
    
    container.innerHTML = `
        <div class="result-card" style="border-color: ${isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">
            <h3 style="color: ${isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">
                ${isCorrect ? 'Correct !' : 'Incorrect'}
            </h3>
            <p><strong>Réponse :</strong> ${q.answer ? 'Vrai' : 'Faux'}</p>
            <p>${q.explanation}</p>
            <button class="primary-btn" onclick="nextTrueFalseQuestion()" style="margin-top: 20px;">
                Question suivante
            </button>
        </div>
    `;
    
    const scoreEl = document.getElementById('tfScore');
    if (scoreEl) scoreEl.textContent = state.score;
}

function nextTrueFalseQuestion() {
    gamesState.trueFalse.currentQuestion++;
    showTrueFalseQuestion();
}

// ========================================
// JEU 3 : COURSE CONTRE LA MONTRE
// ========================================

function initSpeedGame(container) {
    gamesState.speed = {
        timeLeft: 60,
        score: 0,
        timer: null,
        currentTerm: null
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Course contre la montre</h2>
        <p style="text-align: center; margin-bottom: 20px;"><strong>Objectif :</strong> On te montre un terme validiste, tu dois cliquer sur la bonne alternative parmi 4 propositions. Trouve-en le maximum en 60 secondes !</p>
        <div class="game-timer" id="speedTimer">60</div>
        <div class="game-score">Score : <span id="speedScore">0</span></div>
        <div id="speedQuestion"></div>
    `;
    
    startSpeedTimer();
    showSpeedQuestion();
}

function startSpeedTimer() {
    const timerEl = document.getElementById('speedTimer');
    if (!timerEl) return;
    
    gamesState.speed.timer = setInterval(() => {
        gamesState.speed.timeLeft--;
        timerEl.textContent = gamesState.speed.timeLeft;
        
        if (gamesState.speed.timeLeft <= 10) {
            timerEl.style.color = 'var(--color-danger)';
        }
        
        if (gamesState.speed.timeLeft <= 0) {
            endSpeedGame();
        }
    }, 1000);
}

function showSpeedQuestion() {
    if (typeof DICTIONARY === 'undefined') return;
    
    const allTerms = Object.keys(DICTIONARY);
    const randomTerm = allTerms[Math.floor(Math.random() * allTerms.length)];
    const termData = DICTIONARY[randomTerm];
    
    gamesState.speed.currentTerm = { term: randomTerm, data: termData };
    
    // Récupérer toutes les alternatives
    const allAlternatives = [];
    if (termData.alternatives) {
        for (const alts of Object.values(termData.alternatives)) {
            if (Array.isArray(alts)) {
                allAlternatives.push(...alts);
            }
        }
    }
    
    if (allAlternatives.length === 0) {
        showSpeedQuestion(); // Réessayer avec un autre terme
        return;
    }
    
    // Sélectionner une bonne réponse et 3 mauvaises
    const correctAnswer = allAlternatives[Math.floor(Math.random() * allAlternatives.length)];
    
    // Mauvaises réponses (d'autres termes validistes)
    const wrongAnswers = [];
    const otherTerms = allTerms.filter(t => t !== randomTerm);
    for (let i = 0; i < 3 && i < otherTerms.length; i++) {
        wrongAnswers.push(otherTerms[Math.floor(Math.random() * otherTerms.length)]);
    }
    
    const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    const container = document.getElementById('speedQuestion');
    if (!container) return;
    
    container.innerHTML = `
        <div class="result-card">
            <h3>Quelle est une alternative à :</h3>
            <p style="font-size: 1.5rem; color: var(--color-danger); margin: 20px 0; font-weight: 700;">
                "${randomTerm}"
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${options.map(opt => `
                    <button class="quiz-option" onclick="answerSpeed('${opt.replace(/'/g, "\\'")}', '${correctAnswer.replace(/'/g, "\\'")}')">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function answerSpeed(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        gamesState.speed.score++;
        const scoreEl = document.getElementById('speedScore');
        if (scoreEl) scoreEl.textContent = gamesState.speed.score;
        showAchievement('Bonne réponse ! +1', 'success');
    } else {
        showAchievement('Raté ! La bonne réponse était : ' + correctAnswer, 'error');
    }
    
    showSpeedQuestion();
}

function endSpeedGame() {
    if (gamesState.speed.timer) {
        clearInterval(gamesState.speed.timer);
    }
    
    const container = document.getElementById('speedQuestion');
    if (!container) return;
    
    container.innerHTML = `
        <div class="quiz-results">
            <h2>Temps écoulé !</h2>
            <div class="score">${gamesState.speed.score}</div>
            <p>Tu as trouvé ${gamesState.speed.score} bonnes réponses en 60 secondes !</p>
            <button class="primary-btn" onclick="initSpeedGame(document.getElementById('gameArea'))">
                Rejouer
            </button>
        </div>
    `;
    
    appState.userStats.score += gamesState.speed.score * 5;
    updateStatsDisplay();
    saveStats();
    showAchievement(`Course terminée ! +${gamesState.speed.score * 5} points`);
}

// ========================================
// JEU 4 : BINGO VALIDISTE (AMÉLIORÉ)
// ========================================

function initBingoGame(container) {
    // Phrases MIXTES : certaines validistes, d'autres non
    const phrases = [
        { text: "C'est complètement débile cette idée !", validiste: true },
        { text: "Tu es fou ou quoi ?", validiste: true },
        { text: "Arrête de faire ton autiste.", validiste: true },
        { text: "Sacrebleu, quel faquin !", validiste: false },
        { text: "Il est complètement taré ce mec.", validiste: true },
        { text: "C'est un dialogue de sourds ici.", validiste: true },
        { text: "Fichtre, c'est extraordinaire !", validiste: false },
        { text: "Tu es aveugle ou quoi ?", validiste: true },
        { text: "Ce raisonnement est boiteux.", validiste: true },
        { text: "Quel bélître, ce personnage !", validiste: false },
        { text: "Il a pété un câble.", validiste: true },
        { text: "C'est de la folie furieuse !", validiste: true },
        { text: "Tu es vraiment un olibrius.", validiste: false },
        { text: "Je suis parano ou c'est bizarre ?", validiste: true },
        { text: "Palsambleu, quelle absurdité !", validiste: false }
    ];
    
    // Mélanger
    phrases.sort(() => Math.random() - 0.5);
    
    gamesState.bingo = {
        phrases: phrases,
        found: [],
        errors: 0,
        score: 0
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Bingo Validiste</h2>
        <p style="text-align: center; margin-bottom: 20px;"><strong>Objectif :</strong> Clique sur les phrases qui contiennent des expressions validistes. Attention aux pièges : certaines phrases ne sont PAS validistes !</p>
        <div class="game-score">
            <span>Trouvées : <strong id="bingoScore">0</strong> / ${phrases.filter(p => p.validiste).length}</span>
            <span style="margin-left: 20px; color: var(--color-danger);">Erreurs : <strong id="bingoErrors">0</strong></span>
        </div>
        <div id="bingoBoard" style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
        </div>
    `;
    
    const board = document.getElementById('bingoBoard');
    if (!board) return;
    
    phrases.forEach((phrase, idx) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.3s';
        card.innerHTML = `<p>${phrase.text}</p>`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Phrase ${idx + 1}: ${phrase.text}`);
        
        card.addEventListener('click', () => checkBingoPhrase(idx, card, phrase));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                checkBingoPhrase(idx, card, phrase);
            }
        });
        
        board.appendChild(card);
    });
}

function checkBingoPhrase(idx, element, phrase) {
    if (gamesState.bingo.found.includes(idx)) return;
    
    gamesState.bingo.found.push(idx);
    
    if (phrase.validiste) {
        // Bonne réponse !
        gamesState.bingo.score++;
        element.style.background = 'var(--color-success)';
        element.style.color = 'white';
        element.style.borderColor = 'var(--color-success)';
        element.style.cursor = 'default';
        showAchievement('Bonne réponse ! +5 points', 'success');
        
        appState.userStats.score += 5;
        updateStatsDisplay();
        saveStats();
        
        const scoreEl = document.getElementById('bingoScore');
        if (scoreEl) scoreEl.textContent = gamesState.bingo.score;
        
        // Vérifier victoire
        const totalValidistes = gamesState.bingo.phrases.filter(p => p.validiste).length;
        if (gamesState.bingo.score === totalValidistes) {
            setTimeout(() => {
                showAchievement(`Bingo ! Toutes trouvées avec ${gamesState.bingo.errors} erreur(s) ! +50 points`);
                appState.userStats.score += 50;
                updateStatsDisplay();
                saveStats();
            }, 500);
        }
    } else {
        // Mauvaise réponse !
        gamesState.bingo.errors++;
        element.style.background = 'var(--color-danger)';
        element.style.color = 'white';
        element.style.borderColor = 'var(--color-danger)';
        element.style.cursor = 'default';
        showAchievement('Raté ! Cette phrase n\'est PAS validiste', 'error');
        
        const errorsEl = document.getElementById('bingoErrors');
        if (errorsEl) errorsEl.textContent = gamesState.bingo.errors;
    }
}

// ========================================
// JEU 5 : PENDU DU VIEUX FRANÇAIS (AMÉLIORÉ)
// ========================================

function initHangmanGame(container) {
    const words = [
        { word: 'BELÎTRE', hint: 'Mendiant, homme de rien' },
        { word: 'FAQUIN', hint: 'Personnage méprisable' },
        { word: 'GOUJAT', hint: 'Homme grossier' },
        { word: 'PALTOQUET', hint: 'Homme prétentieux' },
        { word: 'OLIBRIUS', hint: 'Quelqu\'un de prétentieux et bizarre' },
        { word: 'MARAUD', hint: 'Homme du peuple (condescendant)' },
        { word: 'GANACHE', hint: 'Personne incapable et bornée' },
        { word: 'MALOTRU', hint: 'Personne aux manières grossières' },
        { word: 'PIGNOUF', hint: 'Individu grossier, dépourvu de finesse' }
    ];
    
    const selected = words[Math.floor(Math.random() * words.length)];
    
    // Révéler 2 lettres au hasard pour aider
    const revealedIndices = [];
    while (revealedIndices.length < 2) {
        const randomIdx = Math.floor(Math.random() * selected.word.length);
        if (!revealedIndices.includes(randomIdx) {
            revealedIndices.push(randomIdx);
        }
    }
    
    const revealedLetters = revealedIndices.map(idx => selected.word[idx]);
    
    gamesState.hangman = {
        word: selected.word,
        hint: selected.hint,
        guessed: [...revealedLetters],
        remainingTries: 10,
        category: 'Vieux français',
        revealedLetters: revealedLetters
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Pendu du Vieux Français</h2>
        <p style="text-align: center; margin-bottom: 10px;"><strong>Indice :</strong> ${selected.hint}</p>
        <p style="text-align: center; margin-bottom: 20px; color: var(--color-success);"><strong>Lettres révélées :</strong> ${revealedLetters.join(', ')}</p>
        <div class="game-score">Essais restants : <span id="hangmanTries">10</span></div>
        <div id="hangmanWord" style="text-align: center; font-size: 2rem; letter-spacing: 10px; margin: 30px 0;"></div>
        <div id="hangmanKeyboard" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 600px; margin: 0 auto;"></div>
        <div id="hangmanResult"></div>
    `;
    
    renderHangmanWord();
    renderHangmanKeyboard();
}

function renderHangmanWord() {
    const state = gamesState.hangman;
    const container = document.getElementById('hangmanWord');
    if (!container) return;
    
    let display = '';
    for (const letter of state.word) {
        if (state.guessed.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    
    container.textContent = display;
}

function renderHangmanKeyboard() {
    const container = document.getElementById('hangmanKeyboard');
    if (!container) return;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ';
    
    container.innerHTML = '';
    for (const letter of letters) {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className = 'primary-btn';
        btn.style.minWidth = '45px';
        btn.style.padding = '10px 5px';
        btn.style.fontSize = '0.9rem';
        btn.setAttribute('aria-label', `Lettre ${letter}`);
        
        if (gamesState.hangman.guessed.includes(letter)) {
            btn.disabled = true;
            btn.style.opacity = '0.3';
            btn.style.cursor = 'not-allowed';
        }
        
        btn.addEventListener('click', () => guessHangmanLetter(letter));
        container.appendChild(btn);
    }
}

function guessHangmanLetter(letter) {
    const state = gamesState.hangman;
    
    if (state.guessed.includes(letter)) return;
    
    state.guessed.push(letter);
    
    if (!state.word.includes(letter)) {
        state.remainingTries--;
        const triesEl = document.getElementById('hangmanTries');
        if (triesEl) triesEl.textContent = state.remainingTries;
    }
    
    renderHangmanWord();
    renderHangmanKeyboard();
    
    // Vérifier victoire/défaite
    const allGuessed = state.word.split('').every(l => state.guessed.includes(l));
    
    if (allGuessed) {
        document.getElementById('hangmanResult').innerHTML = `
            <div class="quiz-results" style="margin-top: 30px;">
                <h2>Gagné !</h2>
                <p>Le mot était : <strong>${state.word}</strong></p>
                <p><em>${state.hint}</em></p>
                <button class="primary-btn" onclick="initHangmanGame(document.getElementById('gameArea'))" style="margin-top: 20px;">
                    Rejouer
                </button>
            </div>
        `;
        
        appState.userStats.score += 20;
        updateStatsDisplay();
        saveStats();
        showAchievement('Pendu gagné ! +20 points');
    } else if (state.remainingTries <= 0) {
        document.getElementById('hangmanResult').innerHTML = `
            <div class="quiz-results" style="margin-top: 30px;">
                <h2>Perdu !</h2>
                <p>Le mot était : <strong>${state.word}</strong></p>
                <p><em>${state.hint}</em></p>
                <button class="primary-btn" onclick="initHangmanGame(document.getElementById('gameArea'))" style="margin-top: 20px;">
                    Rejouer
                </button>
            </div>
        `;
    }
}

// ========================================
// JEU 6 : TROUVE L'ALTERNATIVE (NOUVEAU)
// ========================================

function initFindAlternativeGame(container) {
    if (typeof DICTIONARY === 'undefined') {
        container.innerHTML = '<p style="color: red;">Erreur : dictionnaire non chargé</p>';
        return;
    }
    
    const allTerms = Object.keys(DICTIONARY);
    const selectedTerms = [];
    
    // Sélectionner 20 termes aléatoires
    while (selectedTerms.length < 20 && selectedTerms.length < allTerms.length) {
        const randomTerm = allTerms[Math.floor(Math.random() * allTerms.length)];
        if (!selectedTerms.includes(randomTerm)) {
            selectedTerms.push(randomTerm);
        }
    }
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Trouve l'Alternative !</h2>
        <p style="text-align: center; margin-bottom: 20px;">Pour chaque terme validiste, choisis la meilleure alternative.</p>
        <div class="game-score">Score : <span id="altScore">0</span> / ${selectedTerms.length}</div>
        <div id="altQuestions"></div>
        <button class="primary-btn" id="submitAlt" style="display: block; margin: 30px auto;">
            Valider mes réponses
        </button>
    `;
    
    const questionsContainer = document.getElementById('altQuestions');
    if (!questionsContainer) return;
    
    let questionsHTML = '';
    selectedTerms.forEach((term, idx) => {
        const data = DICTIONARY[term];
        
        // Récupérer toutes les alternatives
        const allAlts = [];
        if (data.alternatives) {
            for (const alts of Object.values(data.alternatives)) {
                if (Array.isArray(alts)) {
                    allAlts.push(...alts);
                }
            }
        }
        
        if (allAlts.length === 0) return;
        
        // Sélectionner 1 bonne réponse et 3 mauvaises
        const correctAlt = allAlts[Math.floor(Math.random() * allAlts.length)];
        
        const wrongAlts = [];
        const otherTerms = allTerms.filter(t => t !== term);
        for (let i = 0; i < 3 && i < otherTerms.length; i++) {
            wrongAlts.push(otherTerms[Math.floor(Math.random() * otherTerms.length)]);
        }
        
        const options = [correctAlt, ...wrongAlts].sort(() => Math.random() - 0.5);
        
        questionsHTML += `
            <div class="quiz-section" style="margin-bottom: 20px;">
                <h3 style="color: var(--color-danger);">${idx + 1}. "${term}"</h3>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
                    ${options.map((opt, optIdx) => `
                        <label style="cursor: pointer; padding: 10px; background: var(--color-bg-light); border-radius: 5px; display: flex; align-items: center;">
                            <input 
                                type="radio" 
                                name="alt_${idx}" 
                                value="${opt.replace(/'/g, "\\'")}"
                                data-correct="${opt === correctAlt}"
                                style="margin-right: 10px; cursor: pointer;"
                            >
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    questionsContainer.innerHTML = questionsHTML;
    
    document.getElementById('submitAlt').addEventListener('click', () => {
        calculateAltScore(selectedTerms.length);
    });
}

function calculateAltScore(totalQuestions) {
    let score = 0;
    const inputs = document.querySelectorAll('input[type="radio"]:checked');
    
    inputs.forEach(input => {
        if (input.dataset.correct === 'true') {
            score++;
        }
    });
    
    const resultsDiv = document.getElementById('altQuestions');
    resultsDiv.innerHTML = `
        <div class="quiz-results">
            <h2>Résultats</h2>
            <div class="score">${score} / ${totalQuestions}</div>
            <p>Tu as trouvé ${Math.round((score / totalQuestions) * 100)}% de bonnes réponses !</p>
            <button class="primary-btn" onclick="initFindAlternativeGame(document.getElementById('gameArea'))" style="margin-top: 20px;">
                Rejouer
            </button>
        </div>
    `;
    
    appState.userStats.score += score * 3;
    updateStatsDisplay();
    saveStats();
    showAchievement(`Jeu terminé ! +${score * 3} points`);
}

// ========================================
// JEU 7 : QUI SUIS-JE ? (NOUVEAU)
// ========================================

function initWhoAmIGame(container) {
    const hints = [
        {
            clues: [
                "Je suis un terme médical du XIXe siècle",
                "J'étais utilisé pour classifier les déficiences intellectuelles",
                "Je viens de 'debilis' en latin qui signifie 'faible'",
                "On m'utilise souvent pour dire 'absurde' aujourd'hui"
            ],
            answer: "débile",
            alternatives: ["Absurde", "Ridicule", "Insensé", "Farfelu", "Bélître", "Butor"]
        },
        {
            clues: [
                "Mon origine vient d'un médecin en 1866",
                "Je combine racisme et validisme",
                "J'étais le nom donné à la trisomie 21",
                "Je fais référence à une population d'Asie"
            ],
            answer: "mongol",
            alternatives: ["Bélître", "Butor", "Ganache", "Andouille", "Irréfléchi"]
        },
        {
            clues: [
                "Je viens du grec 'hystera' qui signifie 'utérus'",
                "J'étais un diagnostic réservé aux femmes",
                "Je suis à la fois saniste et sexiste",
                "On m'utilise pour dire 'excessif'"
            ],
            answer: "hystérique",
            alternatives: ["Excessif", "Exalté", "Enflammé", "Intense", "Fougueux"]
        },
        {
            clues: [
                "Je désigne une maladie neurodégénérative",
                "On m'utilise pour se moquer de l'oubli",
                "Je suis à la fois saniste, validiste et âgiste",
                "Mon nom vient d'un médecin allemand"
            ],
            answer: "alzheimer",
            alternatives: ["Distrait", "Étourdi", "Dans la lune", "A oublié"]
        },
        {
            clues: [
                "Je suis un terme psychiatrique",
                "On pense à tort que je signifie 'dédoublement de personnalité'",
                "Je viens du grec 'schizein' (fendre) et 'phrên' (esprit)",
                "On m'utilise pour dire 'contradictoire'"
            ],
            answer: "schizophrénie",
            alternatives: ["Contradictoire", "Changeant", "Versatile", "Ambivalent"]
        }
    ];
    
    const selectedHint = hints[Math.floor(Math.random() * hints.length)];
    
    gamesState.whoAmI = {
        currentClue: 0,
        hint: selectedHint,
        revealed: false
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Qui suis-je ?</h2>
        <p style="text-align: center; margin-bottom: 20px;">Devine le terme validiste à partir des indices. Plus tu utilises d'indices, moins tu gagnes de points !</p>
        <div id="whoAmIClues" style="background: white; padding: 20px; border-radius: 15px; margin: 20px 0; min-height: 200px;"></div>
        <div style="text-align: center;">
            <button class="secondary-btn" id="revealClue" onclick="revealNextClue()">
                Indice suivant
            </button>
            <input type="text" id="whoAmIAnswer" placeholder="Ta réponse..." style="margin: 20px; padding: 10px; border: 2px solid #667eea; border-radius: 10px; width: 80%; max-width: 400px;">
            <button class="primary-btn" onclick="checkWhoAmIAnswer()">
                Valider
            </button>
        </div>
        <div id="whoAmIResult"></div>
    `;
    
    revealNextClue();
}

function revealNextClue() {
    const state = gamesState.whoAmI;
    if (!state || state.currentClue >= state.hint.clues.length) return;
    
    const cluesContainer = document.getElementById('whoAmIClues');
    if (!cluesContainer) return;
    
    const clue = state.hint.clues[state.currentClue];
    
    const clueEl = document.createElement('div');
    clueEl.style.padding = '10px';
    clueEl.style.marginBottom = '10px';
    clueEl.style.background = 'var(--color-bg-light)';
    clueEl.style.borderLeft = '4px solid var(--color-primary)';
    clueEl.style.borderRadius = '5px';
    clueEl.textContent = `Indice ${state.currentClue + 1} : ${clue}`;
    
    cluesContainer.appendChild(clueEl);
    
    state.currentClue++;
    
    if (state.currentClue >= state.hint.clues.length) {
        document.getElementById('revealClue').disabled = true;
        document.getElementById('revealClue').textContent = 'Tous les indices révélés';
        document.getElementById('revealClue').style.opacity = '0.5';
    }
}

function checkWhoAmIAnswer() {
    const state = gamesState.whoAmI;
    const userAnswer = document.getElementById('whoAmIAnswer').value.toLowerCase().trim();
    const resultDiv = document.getElementById('whoAmIResult');
    
    if (!userAnswer) {
        resultDiv.innerHTML = '<p style="color: var(--color-danger); text-align: center;">Entre une réponse !</p>';
        return;
    }
    
    const isCorrect = userAnswer === state.hint.answer.toLowerCase();
    
    // Points selon le nombre d'indices utilisés
    let points = 0;
    if (isCorrect) {
        points = Math.max(50 - (state.currentClue * 10), 10);
    }
    
    const alternativesHTML = state.hint.alternatives.map(alt => `<li>${alt}</li>`).join('');
    
    resultDiv.innerHTML = `
        <div class="quiz-results" style="margin-top: 30px;">
            <h2>${isCorrect ? 'Bravo !' : 'Raté !'}</h2>
            ${isCorrect ? `<div class="score">+${points} points</div>` : ''}
            <p>La réponse était : <strong>${state.hint.answer}</strong></p>
            <h3>Alternatives à utiliser :</h3>
            <ul style="text-align: left; max-width: 400px; margin: 20px auto;">${alternativesHTML}</ul>
            <button class="primary-btn" onclick="initWhoAmIGame(document.getElementById('gameArea'))" style="margin-top: 20px;">
                Rejouer
            </button>
        </div>
    `;
    
    if (isCorrect) {
        appState.userStats.score += points;
        updateStatsDisplay();
        saveStats();
        showAchievement(`Bonne réponse ! +${points} points`);
    }
}

// ========================================
// MISE À JOUR DE L'INITIALISATION
// ========================================

// Modifier la fonction initGames pour ajouter les nouveaux jeux
const originalInitGames = initGames;
initGames = function() {
    originalInitGames();
    
    // Ajouter les nouveaux jeux
    const gamesGrid = document.querySelector('.games-grid');
    if (gamesGrid) {
        // Jeu "Trouve l'Alternative"
        const findAltCard = document.createElement('div');
        findAltCard.className = 'game-card';
        findAltCard.innerHTML = `
            <h3>Trouve l'Alternative</h3>
            <p>Choisis la meilleure alternative pour chaque terme validiste</p>
            <button class="primary-btn" data-game="findalt">Jouer</button>
        `;
        gamesGrid.appendChild(findAltCard);
        
        // Jeu "Qui suis-je ?"
        const whoAmICard = document.createElement('div');
        whoAmICard.className = 'game-card';
        whoAmICard.innerHTML = `
            <h3>Qui suis-je ?</h3>
            <p>Devine le terme à partir d'indices progressifs</p>
            <button class="primary-btn" data-game="whoami">Jouer</button>
        `;
        gamesGrid.appendChild(whoAmICard);
        
        // Réattacher les événements
        document.querySelectorAll('[data-game="findalt"]').forEach(btn => {
            btn.addEventListener('click', () => startGame('findalt'));
        });
        
        document.querySelectorAll('[data-game="whoami"]').forEach(btn => {
            btn.addEventListener('click', () => startGame('whoami'));
        });
    }
};

// Mise à jour de startGame pour les nouveaux jeux
const originalStartGame = startGame;
startGame = function(gameType) {
    if (gameType === 'findalt') {
        const gameArea = document.getElementById('gameArea');
        const gamesGrid = document.querySelector('.games-grid');
        
        if (!gameArea || !gamesGrid) return;
        
        gamesGrid.style.display = 'none';
        gameArea.style.display = 'block';
        gameArea.innerHTML = '';
        
        gamesState.currentGame = gameType;
        appState.userStats.gamesPlayed++;
        updateStatsDisplay();
        saveStats();
        
        initFindAlternativeGame(gameArea);
    } else if (gameType === 'whoami') {
        const gameArea = document.getElementById('gameArea');
        const gamesGrid = document.querySelector('.games-grid');
        
        if (!gameArea || !gamesGrid) return;
        
        gamesGrid.style.display = 'none';
        gameArea.style.display = 'block';
        gameArea.innerHTML = '';
        
        gamesState.currentGame = gameType;
        appState.userStats.gamesPlayed++;
        updateStatsDisplay();
        saveStats();
        
        initWhoAmIGame(gameArea);
    } else {
        originalStartGame(gameType);
    }
};

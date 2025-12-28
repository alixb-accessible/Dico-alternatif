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
        remainingTries: 6,
        category: ''
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
            updateStatsDisplay();
            saveStats();
            showAchievement('Atelier créatif ouvert ! +5 points');
            appState.userStats.score += 5;
            updateStatsDisplay();
            saveStats();
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
                appState.userStats.score += 40; // +10 déjà donnés par match
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
// JEU 2 : VRAI OU FAUX
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
            explanation: "Vrai. C'était un terme de classification psychiatrique du XIXe siècle. C'est pourquoi l'utiliser comme insulte est validiste."
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
            explanation: "Vrai, hélas. Il l'a répété 4 fois sur France 2 pendant l'affaire Penelopegate."
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
    
    document.getElementById('tfScore').textContent = state.score;
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
        <p style="text-align: center;">Trouve le maximum d'alternatives en 60 secondes !</p>
        <div class="game-timer" id="speedTimer">60</div>
        <div class="game-score">Score : <span id="speedScore">0</span></div>
        <div id="speedQuestion"></div>
    `;
    
    startSpeedTimer();
    showSpeedQuestion();
}

function startSpeedTimer() {
    const timerEl = document.getElementById('speedTimer');
    
    gamesState.speed.timer = setInterval(() => {
        gamesState.speed.timeLeft--;
        timerEl.textContent = gamesState.speed.timeLeft;
        
        if (gamesState.speed.timeLeft <= 0) {
            endSpeedGame();
        }
    }, 1000);
}

function showSpeedQuestion() {
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
    
    // Sélectionner une bonne réponse et 3 mauvaises
    const correctAnswer = allAlternatives[Math.floor(Math.random() * allAlternatives.length)];
    
    // Mauvaises réponses (d'autres termes validistes)
    const wrongAnswers = [];
    const otherTerms = allTerms.filter(t => t !== randomTerm);
    for (let i = 0; i < 3; i++) {
        wrongAnswers.push(otherTerms[Math.floor(Math.random() * otherTerms.length)]);
    }
    
    const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    const container = document.getElementById('speedQuestion');
    container.innerHTML = `
        <div class="result-card">
            <h3>Quelle est une alternative à :</h3>
            <p style="font-size: 1.5rem; color: var(--color-danger); margin: 20px 0;">
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
        document.getElementById('speedScore').textContent = gamesState.speed.score;
        showAchievement('Bonne réponse ! +1', 'success');
    }
    
    showSpeedQuestion();
}

function endSpeedGame() {
    clearInterval(gamesState.speed.timer);
    
    const container = document.getElementById('speedQuestion');
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
// JEU 4 : BINGO VALIDISTE
// ========================================

function initBingoGame(container) {
    const phrases = [
        "C'est complètement débile cette idée !",
        "Tu es fou ou quoi ?",
        "Arrête de faire ton autiste.",
        "Il est complètement taré ce mec.",
        "C'est un dialogue de sourds ici.",
        "Tu es aveugle ou quoi ?",
        "Ce raisonnement est boiteux.",
        "Il a pété un câble.",
        "C'est de la folie furieuse !",
        "Je suis parano ou c'est bizarre ?"
    ];
    
    gamesState.bingo = {
        phrases: phrases,
        found: [],
        score: 0
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Bingo Validiste</h2>
        <p style="text-align: center;">Repère les expressions validistes dans ces phrases !</p>
        <div class="game-score">Trouvées : <span id="bingoScore">0</span> / ${phrases.length}</div>
        <div id="bingoBoard" style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
        </div>
    `;
    
    const board = document.getElementById('bingoBoard');
    phrases.forEach((phrase, idx) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.3s';
        card.innerHTML = `<p>${phrase}</p>`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Phrase ${idx + 1}: ${phrase}`);
        
        card.addEventListener('click', () => checkBingoPhrase(idx, card));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                checkBingoPhrase(idx, card);
            }
        });
        
        board.appendChild(card);
    });
}

function checkBingoPhrase(idx, element) {
    if (gamesState.bingo.found.includes(idx)) return;
    
    gamesState.bingo.found.push(idx);
    gamesState.bingo.score++;
    
    element.style.background = 'var(--color-success)';
    element.style.color = 'white';
    element.style.borderColor = 'var(--color-success)';
    
    document.getElementById('bingoScore').textContent = gamesState.bingo.score;
    
    appState.userStats.score += 5;
    updateStatsDisplay();
    saveStats();
    
    if (gamesState.bingo.score === gamesState.bingo.phrases.length) {
        setTimeout(() => {
            showAchievement('Bingo ! Toutes les phrases trouvées ! +50 points');
            appState.userStats.score += 50;
            updateStatsDisplay();
            saveStats();
        }, 500);
    }
}

// ========================================
// JEU 5 : PENDU DU VIEUX FRANÇAIS
// ========================================

function initHangmanGame(container) {
    const words = [
        { word: 'BELÎTRE', hint: 'Mendiant, homme de rien' },
        { word: 'FAQUIN', hint: 'Personnage méprisable' },
        { word: 'GOUJAT', hint: 'Homme grossier' },
        { word: 'PALTOQUET', hint: 'Homme prétentieux' },
        { word: 'OLIBRIUS', hint: 'Quelqu\'un de prétentieux et bizarre' },
        { word: 'MARAUD', hint: 'Homme du peuple (condescendant)' },
        { word: 'GANACHE', hint: 'Personne incapable et bornée' }
    ];
    
    const selected = words[Math.floor(Math.random() * words.length)];
    
    gamesState.hangman = {
        word: selected.word,
        hint: selected.hint,
        guessed: [],
        remainingTries: 6,
        category: 'Vieux français'
    };
    
    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <button class="secondary-btn" onclick="endGame()">Retour aux jeux</button>
        </div>
        <h2 style="text-align: center; color: var(--color-primary);">Pendu du Vieux Français</h2>
        <div class="game-score">Essais restants : <span id="hangmanTries">6</span></div>
        <div style="text-align: center; margin: 20px 0;">
            <p><strong>Indice :</strong> ${selected.hint}</p>
        </div>
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
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    container.innerHTML = '';
    for (const letter of letters) {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className = 'primary-btn';
        btn.style.minWidth = '50px';
        btn.style.padding = '10px';
        btn.setAttribute('aria-label', `Lettre ${letter}`);
        
        if (gamesState.hangman.guessed.includes(letter)) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
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
        document.getElementById('hangmanTries').textContent = state.remainingTries;
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
                <p>${state.hint}</p>
                <button class="primary-btn" onclick="initHangmanGame(document.getElementById('gameArea'))">
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
                <p>${state.hint}</p>
                <button class="primary-btn" onclick="initHangmanGame(document.getElementById('gameArea'))">
                    Rejouer
                </button>
            </div>
        `;
    }
}

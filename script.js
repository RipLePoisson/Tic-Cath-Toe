// Liste des fichiers audio disponibles
const audioFiles = [
    'audios/here.wav',
    'audios/yes.wav',
    'audios/what.wav'

];

function playCrossSound() {
    const audioElement = new Audio('cross/cross.mp3');
    audioElement.play();
}

function playToggleSound() {
    const audioElement = new Audio('cross/changegame.wav');
    audioElement.play();
}

function playmusicclickSound() {
    const audioElement = new Audio('cross/musicclick.wav');
    audioElement.play();
}


function playBotRoundAudio() {
    const audioElement = new Audio('cross/cross2.mp3');
    audioElement.play();
}


function playson() {
    const audioElement = new Audio('cross/son.mp3');
    audioElement.play();
}

function playres() {
    const audioElement = new Audio('cross/res.mp3');
    audioElement.play();
}

function playRandomLoseAudio() {
    const loseAudioFiles = ['lose/ez.wav', 'lose/boom.wav', 'lose/wow.wav', 'lose/hmm.wav', 'lose/really.wav'];
    playRandomAudio(loseAudioFiles);
}

function playRandomDrawAudio() {
    const drawAudioFiles = ['draw/draw.wav', 'draw/obviously.wav', 'draw/hmm.wav', 'draw/well.wav'];
    playRandomAudio(drawAudioFiles);
}

const winAudioFiles = [
    'letyouwin.wav',
    'letyouwin2.wav'
];


function playLetYouWinAudio() {
    const audioElement = document.getElementById('audio');
    
    // Ajoutez une classe pour indiquer que l'audio est en cours de lecture
    const playButton = document.getElementById('play-button');
    playButton.classList.add('playing-audio');

    // Écoutez l'événement de fin de lecture audio
    audioElement.addEventListener('ended', function() {
        // Supprimez la classe lorsque l'audio est terminé
        playButton.classList.remove('playing-audio');
    });

    const randomIndex = Math.floor(Math.random() * winAudioFiles.length);
    const randomAudio = winAudioFiles[randomIndex];

    audioElement.src = randomAudio;
    audioElement.play();
}

// Fonction pour jouer un fichier audio aléatoire
function playRandomUserAudio() {
    const userAudioFiles = ['audios/here.wav', 'audios/yes.wav', 'audios/what.wav', 'audios/mind.wav', 'audios/hmm.wav', 'audios/goingon.wav', 'audios/fun.wav', 'audios/allears.wav'];
    playRandomAudio(userAudioFiles);
}

// Liste des fichiers audio disponibles pour le bot
const botAudioFiles = ['first/gofirst.wav', 'first/myturn.wav', 'first/istart.wav', 'first/wantstart.wav'];

// Variable pour suivre le dernier son joué par le bot
let lastBotAudioIndex = -1;

// Fonction pour jouer un son aléatoire du bot sans répéter le même son d'affilée
function playRandomBotAudio() {
    // Sélectionnez un index de son aléatoire différent du dernier son joué
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * botAudioFiles.length);
    } while (randomIndex === lastBotAudioIndex);

    // Mettez à jour le dernier index joué
    lastBotAudioIndex = randomIndex;

    // Jouez le fichier audio correspondant
    playAudio(botAudioFiles[randomIndex]);
}

// Fonction pour jouer un fichier audio
function playAudio(audioFile) {
    const audioElement = document.getElementById('audio');
    audioElement.src = audioFile;
    audioElement.play();
}

function playRandomAudio(files) {
    const randomIndex = Math.floor(Math.random() * files.length);
    const randomAudio = files[randomIndex];

    const audioElement = document.getElementById('audio');
    audioElement.src = randomAudio;

    const playButton = document.getElementById('play-button');
    
    // Ajoutez une classe pour indiquer que l'audio est en cours de lecture
    playButton.classList.add('playing-audio');

    // Écoutez l'événement de fin de lecture audio
    audioElement.addEventListener('ended', function() {
        // Supprimez la classe lorsque l'audio est terminé
        playButton.classList.remove('playing-audio');
    });

    audioElement.play();
}
// Fonction pour ajuster la luminosité de l'image en fonction de l'audio
function adjustBrightnessOnAudio() {
    const playButton = document.getElementById('play-button');
    const audioElement = document.getElementById('audio');

    // Événement de début de lecture audio
    audioElement.addEventListener('play', function() {
        playButton.style.filter = 'brightness(1)';
    });

    // Événement de pause ou de fin de lecture audio
    audioElement.addEventListener('pause', function() {
        playButton.style.filter = 'brightness(0.2)';
    });

    // Événement de fin de lecture audio
    audioElement.addEventListener('ended', function() {
        playButton.style.filter = 'brightness(0.2)';
    });
}

// Fonction pour ajuster la luminosité des caractères
function adjustCharactersBrightness(brightness) {
    const charactersContainer = document.getElementById('random-characters');
    charactersContainer.style.filter = `brightness(${brightness})`;
}

// Fonction pour afficher des caractères aléatoires
function showRandomCharacters() {
    const charactersContainer = document.getElementById('random-characters');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

    setInterval(() => {
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        const span = document.createElement('span');
        span.textContent = randomCharacter;
        span.style.position = 'absolute';
        span.style.left = `${posX}px`;
        span.style.top = `${posY}px`;

        charactersContainer.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 2000); // Temps avant que le caractère disparaisse (en millisecondes)

    }, 500); // Intervalle entre chaque apparition de caractère (en millisecondes)
}

// Fonction pour afficher des rectangles noirs aléatoires
function showRandomRectangles() {
    const rectanglesContainer = document.getElementById('random-rectangles');

    setInterval(() => {
        const rectangle = document.createElement('div');
        const width = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Largeur aléatoire entre 10 et 20 pixels
        const height = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Hauteur aléatoire entre 10 et 20 pixels
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        rectangle.style.position = 'absolute';
        rectangle.style.left = `${posX}px`;
        rectangle.style.top = `${posY}px`;
        rectangle.style.width = `${width}px`;
        rectangle.style.height = `${height}px`;
        rectangle.style.backgroundColor = 'black';

        rectanglesContainer.appendChild(rectangle);

        setTimeout(() => {
            rectangle.remove();
        }, 2000); // Temps avant que le rectangle disparaisse (en millisecondes)

    }, 500); // Intervalle entre chaque apparition de rectangle (en millisecondes)
}

document.getElementById('play-button').addEventListener('click', function() {
    const audioElement = document.getElementById('audio');

    // Vérifiez si le son est déjà en cours de lecture
    if (audioElement.paused) {
        // Si le son n'est pas en cours de lecture, jouez-le
        playRandomUserAudio();
    }
});

let isAudioPlaying = false;


// Appelle la fonction pour ajuster la luminosité en fonction de l'audio
adjustBrightnessOnAudio();

// Appelle la fonction pour ajuster la luminosité des caractères
adjustCharactersBrightness(0.2);

// Appelle la fonction pour afficher des caractères aléatoires
showRandomCharacters();

// Appelle la fonction pour afficher des rectangles noirs aléatoires
showRandomRectangles();



// Fonctions pour le jeu Tic Tac Toe
const board = document.getElementById('board');
const resultDisplay = document.getElementById('result');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let resetCount = 0;
let botStartsFirst = false;

function initializeBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = i;
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }
}
// Fonction pour gérer le clic sur une cellule du Tic Tac Toe
function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive && currentPlayer === 'X') {
        gameBoard[index] = currentPlayer;
        
        // Jouez le son de la croix
        playCrossSound();

        renderBoard();
        checkWinner();

        if (gameActive) {
            togglePlayer();
            setTimeout(() => {
                if (currentPlayer === 'O') {
                    playBotMove();
                }
            }, 500);
        }
    }
}

function playBotMove() {
    const bestMove = minimax([...gameBoard], 'O').index;
    gameBoard[bestMove] = 'O';
    renderBoard();
    checkWinner();
    togglePlayer();
    playBotRoundAudio();

    // Vérifiez si le bot a gagné
    if (checkWinnerForPlayer(gameBoard, 'O')) {
        // Jouez un son aléatoire du dossier 'lose'
        playRandomLoseAudio();
    }
}

function minimax(board, player, isAllowingPlayerToWin) {
    const availableMoves = emptyCells(board);

    if (checkWinnerForPlayer(board, 'X')) {
        return { score: -1 };
    } else if (checkWinnerForPlayer(board, 'O')) {
        return { score: isAllowingPlayerToWin ? -1 : 1 };
    } else if (availableMoves.length === 0) {
        return { score: 0 };
    }

    const moves = [];

    for (let i = 0; i < availableMoves.length; i++) {
        const move = {};
        move.index = availableMoves[i];

        board[availableMoves[i]] = player;

        if (player === 'O') {
            const result = minimax([...board], 'X', isAllowingPlayerToWin);
            move.score = result.score;
        } else {
            const result = minimax([...board], 'O', isAllowingPlayerToWin);
            move.score = result.score;
        }

        board[availableMoves[i]] = '';

        moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}


// Fonction pour obtenir les cellules vides
function emptyCells(board) {
    return board.reduce((acc, cell, index) => {
        if (cell === '') {
            acc.push(index);
        }
        return acc;
    }, []);
}

// Fonction pour vérifier si un joueur a gagné
function checkWinnerForPlayer(board, player) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination =>
        combination.every(index => board[index] === player)
    );
}
// Fonction pour rendre la grille de jeu Tic Tac Toe
function renderBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i);
        cell.textContent = gameBoard[i];
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            if (gameBoard[a] === 'O') {
                // Si le bot gagne
                showResult('Catherine won!');
                
                // Jouez un son aléatoire du dossier 'win' en cas de victoire de Catherine
                playRandomAudio(['win/nb.wav', 'win/welldone.wav', 'win/ohok.wav']);
            } else {
                // Si le joueur gagne
                showResult('You won!');
                
                // Jouez un son aléatoire du dossier 'win' en cas de victoire du joueur
                playRandomAudio(['win/nb.wav', 'win/welldone.wav', 'win/ohok.wav']);
            }
            gameActive = false;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        // Si le jeu se termine par un match nul
        showResult('Draw!');

        // Jouez un son aléatoire du dossier 'draw' en cas de match nul
        playRandomAudio(['draw/draw.wav', 'draw/obviously.wav']);
        gameActive = false;
    }
}

function showResult(result) {
    resultDisplay.textContent = result;

}

// Fonction pour alterner le joueur dans le Tic Tac Toe
function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    botStartsFirst = shouldBotStartFirst();
    currentPlayer = botStartsFirst ? 'O' : 'X';
    gameActive = true;
    resultDisplay.textContent = '';
    renderBoard();
    playres();
    
    // Incrémente le compteur de réinitialisations
    resetCount++;

    // Vérifiez si le nombre total de réinitialisations est un multiple de 5
    if (resetCount % 5 === 0) {
        playLetYouWinAudio();
        playXAnimations();

        // Affiche le message de victoire
        resultDisplay.textContent = 'Catherine lets you win';
        gameActive = false;
    } else {
        // Jouez un audio aléatoire en fonction du joueur
        if (currentPlayer === 'O') {
            playRandomBotAudio();
            playBotMove();
        }
    }
}

function playRandomWinAudio() {
    const winAudioFiles = ['win/welldone.wav', 'win/hmm.wav'];
    playRandomAudio(winAudioFiles);
}

function playXAnimations() {
    const xIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let currentIndex = 0;

    // Désactive le bouton reset pendant l'animation
    const resetButton = document.getElementById('reset-button');
    resetButton.disabled = true;

    // Ajoute la classe bugged au bouton pour l'aspect visuel
    resetButton.classList.add('bugged');

    const intervalId = setInterval(() => {
        if (currentIndex < xIndexes.length) {
            const index = xIndexes[currentIndex];
            gameBoard[index] = 'X';
            renderBoard();
            playCrossSound();

            currentIndex++;
        } else {
            clearInterval(intervalId);

            // Réactive le bouton reset à la fin de l'animation
            resetButton.disabled = false;

            // Supprime la classe bugged pour restaurer l'apparence normale du bouton
            resetButton.classList.remove('bugged');

            // À la fin de l'animation de victoire, jouez un audio aléatoire du dossier 'win'
            playRandomWinAudio();
        }
    }, 300); // Intervalle entre chaque apparition de X (en millisecondes)
}


// Initialiser la grille de jeu Tic Tac Toe
initializeBoard();

// Déclaration d'une variable pour le conteneur des rectangles noirs
const glitchContainer = document.createElement('div');
glitchContainer.classList.add('glitch-container');
document.body.appendChild(glitchContainer);

// Variables pour le suivi du temps entre chaque rectangle
let lastGlitchTime = 0;
const glitchInterval = 500; // Délai minimum entre chaque rectangle en millisecondes

// Fonction pour gérer le mouvement de la souris
function handleMouseMove(event) {
    const currentTime = new Date().getTime();

    // Vérification du temps écoulé depuis le dernier rectangle
    if (currentTime - lastGlitchTime > glitchInterval) {
        lastGlitchTime = currentTime;

        const rect = document.body.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Création d'un rectangle noir
        const glitchRect = document.createElement('div');
        glitchRect.classList.add('glitch-rect');

        // Définition de la position et taille aléatoires du rectangle
        glitchRect.style.left = mouseX + 'px';
        glitchRect.style.top = mouseY + 'px';
        glitchRect.style.width = Math.floor(Math.random() * 20 + 5) + 'px'; // Largeur entre 5 et 25 pixels
        glitchRect.style.height = Math.floor(Math.random() * 20 + 5) + 'px'; // Hauteur entre 5 et 25 pixels

        // Ajout du rectangle au conteneur
        glitchContainer.appendChild(glitchRect);

        // Suppression du rectangle après un certain délai
        setTimeout(() => {
            glitchContainer.removeChild(glitchRect);
        }, 1000); // Délai d'affichage du rectangle en millisecondes
    }
}

// Fonction pour gérer le mouvement de la souris avec requestAnimationFrame
function handleMouseMoveWithAnimationFrame(event) {
    requestAnimationFrame(() => {
        handleMouseMove(event);
    });
}

// Ajout de l'écouteur d'événement pour le mouvement de la souris avec requestAnimationFrame
document.addEventListener('mousemove', handleMouseMoveWithAnimationFrame);

function shouldBotStartFirst() {
    return Math.random() < 0.4; // 30% de chance que le bot joue en premier
}

function toggleMusic() {
    const backgroundMusic = document.getElementById('background-music');
    const musicIcon = document.getElementById('music-icon');
    playmusicclickSound();

    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playson();
        // Appliquer les styles pendant la lecture
        
        musicIcon.classList.add('playing');
    } else {
        backgroundMusic.pause();
        playson();
        // Rétablir les styles après la pause
        musicIcon.classList.remove('playing');
    }
}

// Appelle la fonction pour jouer la musique au chargement de la page
window.addEventListener('load', playBackgroundMusic);

// Fonction pour jouer la musique de fond
function playBackgroundMusic() {
    const backgroundMusic = new Audio('fondm.mp3');
    backgroundMusic.loop = true; // Pour faire en sorte que la musique se répète en boucle
    backgroundMusic.volume = 0.5; // Ajustez le volume au besoin
    backgroundMusic.id = 'background-music';
    document.body.appendChild(backgroundMusic);

    // Joue la musique uniquement si elle est autorisée
    if (isMusicAllowed()) {
        backgroundMusic.play();
    }
}

// Fonction pour vérifier si la musique est autorisée
function isMusicAllowed() {
    // Utilisez une méthode appropriée pour vérifier si la musique est autorisée, par exemple en utilisant des cookies
    // Dans cet exemple, retourne toujours vrai (la musique est autorisée)
    return true;
}

backgroundMusic.addEventListener('play', function () {
    const musicIcon = document.getElementById('music-icon');
    musicIcon.classList.add('playing');
});

// Ajouter une classe de style pour réinitialiser l'animation après la pause
backgroundMusic.addEventListener('pause', function () {
    const musicIcon = document.getElementById('music-icon');
    musicIcon.classList.remove('playing');
});



// Variables pour le jeu de pierre-feuille-ciseaux
const rpsOptions = ['rock', 'paper', 'scissors'];
const rpsResults = ['You win!', 'You lose!', 'It\'s a draw!'];

// Fonction pour déterminer le résultat du jeu
function getRPSResult(playerChoice, botChoice) {
    if (playerChoice === botChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper' && botChoice === 'rock') ||
        (playerChoice === 'scissors' && botChoice === 'paper')
    ) {
       return 'win';
   } else {
       return 'lose';
   } 
}



function playerChoice(choice) {
    toggleButtons(true);
    const resultContainer = document.getElementById('rps-result');
    const audioElement = document.getElementById('audio');

    // Fonction pour jouer un audio en fonction du résultat et du choix du bot
function playResultAudio(result, botChoice) {
    const audioElement = document.getElementById('audio');

    // Construire le nom du fichier audio en fonction du résultat et du choix du bot
    const filename = `${botChoice}_${result}.wav`;
    audioElement.src = `rps/${filename}`;

    // Ajouter la classe pour déclencher l'effet de grossissement à l'image Catherine
    const catherineImage = document.getElementById('play-button');
    catherineImage.classList.add('playing-audio');

    audioElement.play();

    // Surveiller l'événement timeupdate pour gérer l'effet de grossissement
    audioElement.addEventListener('timeupdate', function () {
        // Vérifier si l'audio a commencé à jouer
        if (audioElement.currentTime > 0) {
            catherineImage.classList.add('playing-audio');
        }

        // Vérifier si l'audio est terminé
        if (audioElement.currentTime === audioElement.duration) {
            catherineImage.classList.remove('playing-audio');
        }
    });
}

    // Décompte avant l'animation
    setTimeout(() => {
        resultContainer.textContent = 'Rock...';
        audioElement.src = 'rps/rock.wav';
        audioElement.play();
        
    }, 500);

    setTimeout(() => {
        resultContainer.textContent = 'Paper...';
        audioElement.src = 'rps/paper.wav';
        audioElement.play();

    }, 1200);

    setTimeout(() => {
        resultContainer.textContent = 'Scissors...';
        audioElement.src = 'rps/scissors.wav';
        audioElement.play();

    }, 1900);

    // Ajoutez une classe pour déclencher une animation CSS
    setTimeout(() => {
        const rpsContainer = document.getElementById('rock-paper-scissors');
        rpsContainer.classList.add('animate');

        // Retirez la classe après un certain délai pour réinitialiser l'animation
        setTimeout(() => {
            rpsContainer.classList.remove('animate');

            // Appelez la fonction pour le choix du bot après l'animation
            const bot = botChoice();

            // Ajoutez une classe pour déclencher une transition CSS
            setTimeout(() => {
                resultContainer.classList.add('show-result');

                // Appelez la fonction pour déterminer le résultat après un délai supplémentaire
                setTimeout(() => {
                    const result = getRPSResult(choice, bot);

                    // Affichez le choix du joueur et du bot
                    resultContainer.textContent = `You chose ${choice}. Catherine chose ${bot}.`;

                    // Condition pour gérer les résultats
                    if (result !== 'draw') {
                        // Si ce n'est pas une égalité, affichez le résultat
                        resultContainer.textContent += result === 'win' ? ' You win!' : ' You lose!';
                        // Jouez l'audio pour le résultat
                        playResultAudio(result, bot);
                    } else {
                        // En cas d'égalité, affichez le texte approprié
                        resultContainer.textContent = 'Draw!';
                        // Jouez l'audio pour l'égalité
                        audioElement.src = 'rps/draw.wav';
                        const catherineImage = document.getElementById('play-button');
                        catherineImage.style.transform = 'scale(1.1)';
                        
                        audioElement.play();

                        // Réinitialiser l'effet de grossissement après la fin de l'audio
                        audioElement.onended = function () {
                            catherineImage.style.transform = 'scale(1)';
                        };
                    }
                    toggleButtons(false);
                }, 500); // Délai supplémentaire (en millisecondes)
            }, 200); // Délai avant la transition (en millisecondes)
        }, 1000); // Délai pour l'animation (en millisecondes)
    }, 1800); // Délai avant l'animation (en millisecondes)
}

// Fonction pour le choix aléatoire du bot dans le jeu RPC
function botChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Ajoutez des écouteurs d'événements pour les boutons RPC
document.getElementById('rock-button').addEventListener('click', () => playerChoice('rock'));
document.getElementById('paper-button').addEventListener('click', () => playerChoice('paper'));
document.getElementById('scissors-button').addEventListener('click', () => playerChoice('scissors'));

// Appellez la fonction du choix du bot pour l'exemple
botChoice();



// Fonction pour basculer entre les jeux
function toggleGame() {
    const ticTacToe = document.getElementById('tic-tac-toe');
    const rpsGame = document.getElementById('rock-paper-scissors');
    playToggleSound();


    if (ticTacToe.style.display !== 'none') {
        ticTacToe.style.display = 'none';
        rpsGame.style.display = 'block';
    } else {
        ticTacToe.style.display = 'block';
        rpsGame.style.display = 'none';
    }
}

function toggleButtons(disabled) {
    const buttons = document.querySelectorAll('.disabled-button');
    buttons.forEach(button => {
        button.disabled = disabled;
        if (disabled) {
            button.classList.add('disabled');
        } else {
            button.classList.remove('disabled');
        }
    });
}



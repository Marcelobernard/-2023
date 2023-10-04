const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const upButton = document.getElementById('up-button');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const downButton = document.getElementById('down-button');

let playerX = 0;
let playerY = 0;
let enemyX = 0;
let enemyY = 0;

// Inicializa a posição aleatória do inimigo
randomizeEnemyPosition();

function randomizeEnemyPosition() {
    enemyX = Math.random() * (window.innerWidth - 100);
    enemyY = Math.random() * (window.innerHeight - 100);
    enemy.style.transform = `translate(${enemyX}px, ${enemyY}px)`;
}

setInterval(moveEnemy, 100);

function moveEnemy() {
    // Movimentação do inimigo (segue o jogador)
    const enemySpeed = 20;
    const dx = playerX - enemyX;
    const dy = playerY - enemyY;
    const angle = Math.atan2(dy, dx);
    const vx = Math.cos(angle) * enemySpeed;
    const vy = Math.sin(angle) * enemySpeed;

    enemyX += vx;
    enemyY += vy;

    enemy.style.transform = `translate(${enemyX}px, ${enemyY}px)`;

    // Verifica se o inimigo pegou o jogador
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 50) { // Distância de colisão
        alert("Clique em OK para tentar fugir do banho de novo!");
        playerX = 0;
        playerY = 0;
        player.style.transform = `translate(${playerX}px, ${playerY}px)`;
        randomizeEnemyPosition();
    }
}

// Event listeners para os botões de setas
upButton.addEventListener('click', () => movePlayer(0, -10));
leftButton.addEventListener('click', () => movePlayer(-10, 0));
rightButton.addEventListener('click', () => movePlayer(10, 0));
downButton.addEventListener('click', () => movePlayer(0, 10));

function movePlayer(deltaX, deltaY) {
    // Define a velocidade do jogador
    const playerSpeed = 5;

    // Calcula a nova posição do jogador
    playerX += deltaX * playerSpeed;
    playerY += deltaY * playerSpeed;

    // Limita a posição do jogador dentro da tela
    playerX = Math.max(0, Math.min(playerX, window.innerWidth - player.offsetWidth));
    playerY = Math.max(0, Math.min(playerY, window.innerHeight - player.offsetHeight));

    // Atualiza a posição do jogador
    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}

if (distance < 50) { // Distância de colisão
    // Mostrar o quadrado
    const messageBox = document.getElementById('message-box');
    messageBox.style.display = 'block';

    // Redefinir a posição do jogador
    playerX = 0;
    playerY = 0;
    player.style.transform = `translate(${playerX}px, ${playerY}px)`;
    
    // Randomizar a posição do inimigo novamente
    randomizeEnemyPosition();
}

const messageBox = document.getElementById('message-box');

messageBox.addEventListener('click', () => {
    messageBox.style.display = 'none';
});

messageBox.style.display = 'none'; // Certifique-se de que o quadrado esteja oculto inicialmente

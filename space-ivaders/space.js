class SpaceInvaders {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score');
        this.livesElement = document.getElementById('lives');
        this.levelElement = document.getElementById('level');
        this.gameOverElement = document.getElementById('gameOver');
        
        this.gameState = 'playing';
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        
        this.player = {
            x: 275,
            y: 370,
            width: 35,
            height: 20,
            speed: 4,
            color: '#00ff00'
        };
        
        this.bullets = [];
        this.invaders = [];
        this.invaderBullets = [];
        this.particles = [];
        
        this.keys = {};
        this.lastShot = 0;
        this.shotDelay = 200;
        this.invaderDirection = 1;
        this.invaderSpeed = 1;
        this.invaderDropDistance = 25;
        
        this.init();
        this.createStars();
        this.gameLoop();
    }
    
    init() {
        this.createInvaders();
        this.bindEvents();
    }
    
    createStars() {
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 2 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 2 + 's';
            starsContainer.appendChild(star);
        }
    }
    
    createInvaders() {
        this.invaders = [];
        const rows = 4;
        const cols = 8;
        const invaderWidth = 30;
        const invaderHeight = 20;
        const spacing = 45;
        const startX = 80;
        const startY = 30;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                this.invaders.push({
                    x: startX + col * spacing,
                    y: startY + row * spacing,
                    width: invaderWidth,
                    height: invaderHeight,
                    alive: true,
                    type: row < 1 ? 'type1' : row < 3 ? 'type2' : 'type3',
                    points: row < 1 ? 30 : row < 3 ? 20 : 10,
                    animFrame: 0
                });
            }
        }
    }
    
    bindEvents() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            if (e.code === 'Space') {
                e.preventDefault();
                if (this.gameState === 'gameOver') {
                    this.restart();
                }
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    update() {
        if (this.gameState !== 'playing') return;
        
        this.updatePlayer();
        this.updateBullets();
        this.updateInvaders();
        this.updateInvaderBullets();
        this.updateParticles();
        this.checkCollisions();
        this.checkGameState();
    }
    
    updatePlayer() {
        if (this.keys['ArrowLeft'] && this.player.x > 0) {
            this.player.x -= this.player.speed;
        }
        if (this.keys['ArrowRight'] && this.player.x < this.canvas.width - this.player.width) {
            this.player.x += this.player.speed;
        }
        
        const currentTime = Date.now();
        if (this.keys['Space'] && currentTime - this.lastShot > this.shotDelay) {
            this.shoot();
            this.lastShot = currentTime;
        }
    }
    
    shoot() {
        this.bullets.push({
            x: this.player.x + this.player.width / 2 - 1,
            y: this.player.y,
            width: 2,
            height: 6,
            speed: 6,
            color: '#ffff00'
        });
    }
    
    updateBullets() {
        this.bullets = this.bullets.filter(bullet => {
            bullet.y -= bullet.speed;
            return bullet.y > 0;
        });
    }
    
    updateInvaders() {
        let moveDown = false;
        let leftMost = this.canvas.width;
        let rightMost = 0;
        
        // Find bounds of living invaders
        this.invaders.forEach(invader => {
            if (invader.alive) {
                leftMost = Math.min(leftMost, invader.x);
                rightMost = Math.max(rightMost, invader.x + invader.width);
                invader.animFrame = (invader.animFrame + 0.1) % 2;
            }
        });
        
        // Check if invaders hit screen edges
        if (rightMost >= this.canvas.width || leftMost <= 0) {
            this.invaderDirection *= -1;
            moveDown = true;
        }
        
        // Move invaders
        this.invaders.forEach(invader => {
            if (invader.alive) {
                invader.x += this.invaderDirection * this.invaderSpeed;
                if (moveDown) {
                    invader.y += this.invaderDropDistance;
                }
            }
        });
        
        // Random invader shooting
        if (Math.random() < 0.002) {
            const aliveInvaders = this.invaders.filter(inv => inv.alive);
            if (aliveInvaders.length > 0) {
                const shooter = aliveInvaders[Math.floor(Math.random() * aliveInvaders.length)];
                this.invaderBullets.push({
                    x: shooter.x + shooter.width / 2 - 1,
                    y: shooter.y + shooter.height,
                    width: 2,
                    height: 6,
                    speed: 2,
                    color: '#ff0000'
                });
            }
        }
    }
    
    updateInvaderBullets() {
        this.invaderBullets = this.invaderBullets.filter(bullet => {
            bullet.y += bullet.speed;
            return bullet.y < this.canvas.height;
        });
    }
    
    updateParticles() {
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= 2;
            return particle.life > 0;
        });
    }
    
    checkCollisions() {
        // Player bullets vs invaders
        this.bullets.forEach((bullet, bulletIndex) => {
            this.invaders.forEach((invader, invaderIndex) => {
                if (invader.alive && this.collision(bullet, invader)) {
                    this.bullets.splice(bulletIndex, 1);
                    invader.alive = false;
                    this.score += invader.points;
                    this.createExplosion(invader.x + invader.width / 2, invader.y + invader.height / 2);
                    this.updateScore();
                }
            });
        });
        
        // Invader bullets vs player
        this.invaderBullets.forEach((bullet, bulletIndex) => {
            if (this.collision(bullet, this.player)) {
                this.invaderBullets.splice(bulletIndex, 1);
                this.lives--;
                this.createExplosion(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2);
                this.updateLives();
                
                if (this.lives <= 0) {
                    this.gameState = 'gameOver';
                    this.gameOverElement.style.display = 'block';
                }
            }
        });
        
        // Invaders vs player (collision)
        this.invaders.forEach(invader => {
            if (invader.alive && this.collision(invader, this.player)) {
                this.gameState = 'gameOver';
                this.gameOverElement.style.display = 'block';
            }
        });
    }
    
    collision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    createExplosion(x, y) {
        for (let i = 0; i < 6; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 20,
                color: `hsl(${Math.random() * 60 + 15}, 100%, 50%)`
            });
        }
    }
    
    checkGameState() {
        const aliveInvaders = this.invaders.filter(inv => inv.alive);
        if (aliveInvaders.length === 0) {
            this.level++;
            this.invaderSpeed += 0.5;
            this.createInvaders();
            this.updateLevel();
        }
        
        // Check if invaders reached bottom
        const bottomInvader = Math.max(...this.invaders.filter(inv => inv.alive).map(inv => inv.y + inv.height));
        if (bottomInvader >= this.player.y) {
            this.gameState = 'gameOver';
            this.gameOverElement.style.display = 'block';
        }
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawPlayer();
        this.drawBullets();
        this.drawInvaders();
        this.drawInvaderBullets();
        this.drawParticles();
    }
    
    drawPlayer() {
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
        
        // Draw player details
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(this.player.x + 7, this.player.y + 3, 21, 3);
        this.ctx.fillRect(this.player.x + 14, this.player.y, 7, 7);
    }
    
    drawBullets() {
        this.bullets.forEach(bullet => {
            this.ctx.fillStyle = bullet.color;
            this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        });
    }
    
    drawInvaders() {
        this.invaders.forEach(invader => {
            if (invader.alive) {
                const frame = Math.floor(invader.animFrame);
                this.ctx.fillStyle = invader.type === 'type1' ? '#ff0000' : 
                                   invader.type === 'type2' ? '#00ff00' : '#0000ff';
                
                // Simple invader shape
                this.ctx.fillRect(invader.x, invader.y, invader.width, invader.height);
                
                // Add some details
                this.ctx.fillStyle = '#ffffff';
                const eyeOffset = frame * 3;
                this.ctx.fillRect(invader.x + 6 + eyeOffset, invader.y + 5, 3, 3);
                this.ctx.fillRect(invader.x + 21 - eyeOffset, invader.y + 5, 3, 3);
            }
        });
    }
    
    drawInvaderBullets() {
        this.invaderBullets.forEach(bullet => {
            this.ctx.fillStyle = bullet.color;
            this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        });
    }
    
    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.life / 20;
            this.ctx.fillRect(particle.x, particle.y, 2, 2);
            this.ctx.globalAlpha = 1;
        });
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
    }
    
    updateLives() {
        this.livesElement.textContent = this.lives;
    }
    
    updateLevel() {
        this.levelElement.textContent = this.level;
    }
    
    restart() {
        this.gameState = 'playing';
        this.score = 0;
        this.lives = 3;
        this.level = 1;
        this.invaderSpeed = 1;
        this.bullets = [];
        this.invaderBullets = [];
        this.particles = [];
        this.createInvaders();
        this.gameOverElement.style.display = 'none';
        this.updateScore();
        this.updateLives();
        this.updateLevel();
    }
    
    gameLoop() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new SpaceInvaders();
});
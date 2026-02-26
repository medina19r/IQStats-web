/**
 * ARBSV - Basketball Association Website
 * Main JavaScript File
 */

// ========================================
// Data is loaded from external files:
// - teams.js + team files in folders -> registers teams via registerTeam()
// - games.js -> provides 'games' array
// - standings.js -> provides 'standings' array
// - players.js -> provides 'players' array
// ========================================

// ========================================
// DOM Elements
// ========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const teamsGrid = document.getElementById('teams-grid');
const gamesGrid = document.getElementById('games-grid');
const standingsBody = document.getElementById('standings-body');
const playersCards = document.getElementById('players-cards');
const modal = document.getElementById('game-modal');
const modalClose = document.getElementById('modal-close');
const filterBtns = document.querySelectorAll('.filter-btn');

// ========================================
// Functions
// ========================================

// Get team by ID (using the team system)
function getTeam(id) {
    const teams = typeof getAllTeams === 'function' ? getAllTeams() : [];
    return teams.find(t => t.id === id) || { id: id, name: id, shortName: '??', color: '#FF6B00' };
}

// Format date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Format status
function formatStatus(status) {
    const statusMap = {
        'finished': 'Concluído',
        'upcoming': 'Próximo',
        'live': 'Ao Vivo'
    };
    return statusMap[status] || status;
}

// Render teams
function renderTeams() {
    let teams = [];
    try {
        if (typeof getAllTeams === 'function') {
            teams = getAllTeams() || [];
        }
    } catch (e) {
        console.error('Error getting teams:', e);
    }
    
    console.log('Teams loaded:', teams.length);
    
    // Filter to show only unique teams (first occurrence of each team name)
    const uniqueTeams = [];
    const seenNames = new Set();
    teams.forEach(team => {
        if (!seenNames.has(team.name)) {
            seenNames.add(team.name);
            uniqueTeams.push(team);
        }
    });
    
    console.log('Unique teams:', uniqueTeams.length);
    
    if (uniqueTeams.length === 0) {
        // Fallback teams if none loaded
        teamsGrid.innerHTML = `
            <div class="team-card">
                <div class="team-emblem">TB</div>
                <div class="team-name-card">Todos Blacks</div>
            </div>
            <div class="team-card">
                <div class="team-emblem">CRZ</div>
                <div class="team-name-card">Cruzeiros</div>
            </div>
            <div class="team-card">
                <div class="team-emblem">ACA</div>
                <div class="team-name-card">Académica</div>
            </div>
            <div class="team-card">
                <div class="team-emblem">LF</div>
                <div class="team-name-card">La Familia</div>
            </div>
        `;
        return;
    }
    
    teamsGrid.innerHTML = uniqueTeams.map(team => `
        <div class="team-card">
            <div class="team-emblem" style="background: linear-gradient(135deg, ${team.color}, ${adjustColor(team.color, -30)})">${team.shortName}</div>
            <div class="team-name-card">${team.name}</div>
        </div>
    `).join('');
}

// Helper to adjust color brightness
function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

// Render games
function renderGames(filter = 'all') {
    // Get games from external file or use fallback
    const allGames = typeof games !== 'undefined' ? games : [];
    const filteredGames = filter === 'all' 
        ? allGames 
        : allGames.filter(g => g.status === filter);
    
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<p style="text-align: center; color: var(--gray-light); grid-column: 1/-1;">Nenhum jogo encontrado</p>';
        return;
    }
    
    gamesGrid.innerHTML = filteredGames.map(game => {
        const teamA = getTeam(game.teamA);
        const teamB = getTeam(game.teamB);
        
        return `
            <div class="game-card ${game.status}" data-game-id="${game.id}">
                <div class="game-date">${formatDate(game.date)} ${game.time ? '• ' + game.time : ''}</div>
                <div class="game-teams">
                    <div class="game-team">
                        <div class="game-team-logo" style="background: linear-gradient(135deg, ${teamA.color}, ${adjustColor(teamA.color, -30)})">${teamA.shortName}</div>
                        <div class="game-team-name">${teamA.name}</div>
                    </div>
                    <span class="game-vs">VS</span>
                    <div class="game-team">
                        <div class="game-team-logo" style="background: linear-gradient(135deg, ${teamB.color}, ${adjustColor(teamB.color, -30)})">${teamB.shortName}</div>
                        <div class="game-team-name">${teamB.name}</div>
                    </div>
                </div>
                <div class="game-score">
                    <span class="score">${game.scoreA > 0 ? game.scoreA : '-'}</span>
                    <span class="score-divider">-</span>
                    <span class="score">${game.scoreB > 0 ? game.scoreB : '-'}</span>
                </div>
                <div class="game-status ${game.status}">${formatStatus(game.status)}</div>
            </div>
        `;
    }).join('');
    
    // Add click handlers to game cards
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.dataset.gameId;
            openModal(gameId);
        });
    });
}

// Render standings
function renderStandings() {
    // Get standings from external file or use fallback
    const allStandings = typeof standings !== 'undefined' ? standings : [];
    
    if (allStandings.length === 0) {
        standingsBody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--gray-light);">Nenhuma classificação disponível</td></tr>';
        return;
    }
    
    standingsBody.innerHTML = allStandings.map(row => {
        const team = getTeam(row.team);
        const isFirst = row.position === 1;
        
        return `
            <tr class="${isFirst ? 'first-place' : ''}">
                <td class="position">${row.position}</td>
                <td class="col-team">
                    <div class="team-cell">
                        <div class="team-mini-logo" style="background: linear-gradient(135deg, ${team.color}, ${adjustColor(team.color, -30)})">${team.shortName}</div>
                        <span>${team.name}</span>
                    </div>
                </td>
                <td>${row.games}</td>
                <td>${row.wins}</td>
                <td>${row.losses}</td>
                <td><strong>${row.points}</strong></td>
            </tr>
        `;
    }).join('');
}

// Render players - get top players from loaded team data
function renderPlayers() {
    const allPlayers = typeof getAllPlayers === 'function' ? getAllPlayers() : [];
    
    // Fallback players if no team data loaded
    const fallbackPlayers = [
        { name: 'Ricardo Pires', teamName: 'Todos Blacks', type: 'top-scorer', typeLabel: 'Melhor Marcador', badge: '🎯', stats: { main: 22.3, label: 'Pontos/Jogo' }, rebounds: 7.1, assists: 3.5, photo: '🏀' },
        { name: 'Paulo Jorge', teamName: 'Todos Blacks', type: 'best-defender', typeLabel: 'Melhor Defensor', badge: '🛡️', stats: { main: 2.8, label: 'Roubos/Jogo' }, rebounds: 10.2, assists: 1.9, photo: '🏀' },
        { name: 'André Santos', teamName: 'Académica', type: 'mvp', typeLabel: 'MVP', badge: '⭐', stats: { main: 19.2, label: 'Pontos/Jogo' }, rebounds: 5.2, assists: 3.5, photo: '🏀' }
    ];
    
    let playersToShow = fallbackPlayers;
    
    if (allPlayers.length > 0) {
        // Sort players by points to get top scorer
        const sortedByPoints = [...allPlayers].sort((a, b) => (b.points || 0) - (a.points || 0));
        
        // Get unique top players (one per team for variety)
        const topPlayers = [];
        const seenTeams = new Set();
        
        sortedByPoints.forEach(player => {
            if (!seenTeams.has(player.teamId) && topPlayers.length < 3) {
                seenTeams.add(player.teamId);
                const team = getTeam(player.teamId);
                topPlayers.push({
                    ...player,
                    teamName: team.name,
                    type: topPlayers.length === 0 ? 'top-scorer' : topPlayers.length === 1 ? 'best-defender' : 'mvp',
                    typeLabel: topPlayers.length === 0 ? 'Melhor Marcador' : topPlayers.length === 1 ? 'Melhor Defensor' : 'MVP',
                    badge: topPlayers.length === 0 ? '🎯' : topPlayers.length === 1 ? '🛡️' : '⭐'
                });
            }
        });
        
        if (topPlayers.length > 0) {
            playersToShow = topPlayers;
        }
    }
    
    playersCards.innerHTML = playersToShow.map(player => `
        <div class="player-card">
            <div class="player-badge">${player.badge}</div>
            <div class="player-photo">${player.photo}</div>
            <h3 class="player-name">${player.name}</h3>
            <p class="player-team">${player.teamName}</p>
            <span class="player-type">${player.typeLabel}</span>
            <div class="player-stats">
                <div class="player-stat">
                    <span class="player-stat-value">${player.stats.main || player.points}</span>
                    <span class="player-stat-label">${player.stats.label}</span>
                </div>
                <div class="player-stat">
                    <span class="player-stat-value">${player.rebounds || 0}</span>
                    <span class="player-stat-label">Rebaix/Jogo</span>
                </div>
                <div class="player-stat">
                    <span class="player-stat-value">${player.assists || 0}</span>
                    <span class="player-stat-label">Assist/Jogo</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open modal
function openModal(gameId) {
    const allGames = typeof games !== 'undefined' ? games : [];
    const game = allGames.find(g => g.id == gameId);
    if (!game) return;
    
    const teamA = getTeam(game.teamA);
    const teamB = getTeam(game.teamB);
    
    // Set header info
    document.getElementById('modal-team-a').textContent = teamA.name;
    document.getElementById('modal-team-b').textContent = teamB.name;
    document.getElementById('modal-team-a-logo').textContent = teamA.shortName;
    document.getElementById('modal-team-b-logo').textContent = teamB.shortName;
    document.getElementById('modal-team-a-logo').style.background = `linear-gradient(135deg, ${teamA.color}, ${adjustColor(teamA.color, -30)})`;
    document.getElementById('modal-team-b-logo').style.background = `linear-gradient(135deg, ${teamB.color}, ${adjustColor(teamB.color, -30)})`;
    document.getElementById('modal-score-a').textContent = game.scoreA;
    document.getElementById('modal-score-b').textContent = game.scoreB;
    document.getElementById('modal-date').textContent = formatDate(game.date);
    document.getElementById('modal-status').textContent = formatStatus(game.status);
    
    // Set quarters - try different property names
    const quarterScores = game.quarterScores || game.quarters || [];
    const quartersContainer = document.getElementById('modal-quarters');
    if (quarterScores.length > 0) {
        quartersContainer.innerHTML = quarterScores.map((q, i) => `
            <div class="quarter">
                <div class="quarter-label">${i + 1}º Q</div>
                <div class="quarter-scores">
                    <span class="quarter-score">${q.a || q.scoreA}</span>
                    <span class="quarter-score" style="color: var(--gray-medium)">-</span>
                    <span class="quarter-score">${q.b || q.scoreB}</span>
                </div>
            </div>
        `).join('');
    } else {
        quartersContainer.innerHTML = '<p style="text-align: center; color: var(--gray-light)">Quartos não disponíveis</p>';
    }
    
    // Set stats - try different property names
    const stats = game.teamStats || game.stats || { teamA: { points: 0, rebounds: 0, assists: 0, fouls: 0 }, teamB: { points: 0, rebounds: 0, assists: 0, fouls: 0 } };
    const statsTeamA = stats.teamA || stats;
    const statsTeamB = stats.teamB || stats;
    
    const statsContainer = document.getElementById('modal-stats');
    statsContainer.innerHTML = `
        <div class="stats-team">
            <div class="stats-team-name">${teamA.shortName}</div>
            <div class="stat-row">
                <span class="stat-label">Pontos</span>
                <span class="stat-value">${statsTeamA.points || 0}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Rebatidas</span>
                <span class="stat-value">${statsTeamA.rebounds || 0}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Assistências</span>
                <span class="stat-value">${statsTeamA.assists || 0}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Faltas</span>
                <span class="stat-value">${statsTeamA.fouls || 0}</span>
            </div>
        </div>
        <div class="stats-team">
            <div class="stats-team-name">${teamB.shortName}</div>
            <div class="stat-row">
                <span class="stat-label">Pontos</span>
                <span class="stat-value">${statsTeamB.points || 0}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Rebatidas</span>
                <span class="stat-value">${statsTeamB.rebounds || 0}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Assistências</span>
                <span class="stat-value">${statsTeamB.assists || 0}</span>
            </div>
            <div class="stat-row">
                <span class="stat-label">Faltas</span>
                <span class="stat-value">${statsTeamB.fouls || 0}</span>
            </div>
        </div>
    `;
    
    // Set best player
    const bestPlayer = game.bestPlayer;
    const bestPlayerContainer = document.getElementById('modal-best-player');
    if (bestPlayer) {
        const bestTeam = getTeam(bestPlayer.team);
        bestPlayerContainer.innerHTML = `
            <div class="best-player-photo">${bestPlayer.photo || '🏀'}</div>
            <div class="best-player-info">
                <h4 class="best-player-name">${bestPlayer.name}</h4>
                <p class="best-player-team">${bestTeam.name}</p>
                <div class="best-player-stats">
                    <span class="best-player-stat">Pontos: <span>${bestPlayer.points}</span></span>
                    <span class="best-player-stat">Rebatidas: <span>${bestPlayer.rebounds}</span></span>
                    <span class="best-player-stat">Assistências: <span>${bestPlayer.assists}</span></span>
                </div>
            </div>
        `;
    } else {
        bestPlayerContainer.innerHTML = '<p style="text-align: center; color: var(--gray-light); width: 100%">Melhor jogador será definido após o jogo</p>';
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Animate counter
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// ========================================
// Event Listeners
// ========================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Modal close
modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGames(btn.dataset.filter);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all team files have loaded
    setTimeout(() => {
        renderTeams();
        renderGames();
        renderStandings();
        renderPlayers();
        
        // Animate hero stats
        document.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.dataset.count);
            animateCounter(el, target);
        });
    }, 100);
});

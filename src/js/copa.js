/**
 * ARBSV - Copa (Championship) Page
 * JavaScript for championship page
 */

// ========================================
// Data
// ========================================

// Championship games data
const championshipGames = [
    // Previous games
    {
        id: 'c-1',
        teamA: 'todos-blacks',
        teamB: 'cruzeiros',
        scoreA: 78,
        scoreB: 65,
        date: '2024-01-20',
        time: '18:00',
        status: 'finished',
        venue: 'Pavilhão Polideportivo',
        category: 'senior',
        competition: 'copa'
    },
    {
        id: 'c-2',
        teamA: 'academica',
        teamB: 'la-familia',
        scoreA: 72,
        scoreB: 68,
        date: '2024-01-20',
        time: '20:00',
        status: 'finished',
        venue: 'Ginásio Académico',
        category: 'senior',
        competition: 'copa'
    },
    {
        id: 'c-3',
        teamA: 'atlantic',
        teamB: 'mindelo-lions',
        scoreA: 55,
        scoreB: 62,
        date: '2024-01-21',
        time: '18:00',
        status: 'finished',
        venue: 'Polidesportivo Santo Antão',
        category: 'senior',
        competition: 'copa'
    },
    {
        id: 'c-4',
        teamA: 'ribeira-grande',
        teamB: 'santo-antao',
        scoreA: 81,
        scoreB: 58,
        date: '2024-01-21',
        time: '20:00',
        status: 'finished',
        venue: 'Pavilhão Ribeira Grande',
        category: 'senior',
        competition: 'copa'
    },
    // Upcoming games
    {
        id: 'c-5',
        teamA: 'todos-blacks',
        teamB: 'atlantic',
        scoreA: 0,
        scoreB: 0,
        date: '2024-02-15',
        time: '18:00',
        status: 'upcoming',
        venue: 'Pavilhão Polideportivo',
        category: 'senior',
        competition: 'copa'
    },
    {
        id: 'c-6',
        teamA: 'academica',
        teamB: 'ribeira-grande',
        scoreA: 0,
        scoreB: 0,
        date: '2024-02-15',
        time: '20:00',
        status: 'upcoming',
        venue: 'Ginásio Académico',
        category: 'senior',
        competition: 'copa'
    }
];

// Team data (simplified)
const championshipTeams = {
    'todos-blacks': { name: 'Todos Blacks', shortName: 'TB', color: '#000000' },
    'cruzeiros': { name: 'Cruzeiros', shortName: 'CRZ', color: '#FFD700' },
    'academica': { name: 'Académica', shortName: 'ACA', color: '#1E3A5F' },
    'la-familia': { name: 'La Familia', shortName: 'LF', color: '#8B0000' },
    'atlantic': { name: 'Atlantic', shortName: 'ATL', color: '#00CED1' },
    'mindelo-lions': { name: 'Mindelo Lions', shortName: 'ML', color: '#10B981' },
    'ribeira-grande': { name: 'Ribeira Grande', shortName: 'RG', color: '#8B5CF6' },
    'santo-antao': { name: 'Santo Antão', shortName: 'SA', color: '#F59E0B' }
};

// ========================================
// DOM Elements
// ========================================

const gamesGrid = document.getElementById('games-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const gamesTabs = document.querySelectorAll('.games-tab');

// ========================================
// Functions
// ========================================

function getTeam(teamId) {
    return championshipTeams[teamId] || { name: teamId, shortName: '??', color: '#FF6B00' };
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

function formatStatus(status) {
    return status === 'finished' ? 'Concluído' : 'Próximo';
}

function renderGames(filter = 'previous') {
    const filteredGames = filter === 'previous' 
        ? championshipGames.filter(g => g.status === 'finished')
        : championshipGames.filter(g => g.status === 'upcoming');
    
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<p style="text-align: center; color: var(--gray-light); grid-column: 1/-1;">Nenhum jogo encontrado</p>';
        return;
    }
    
    gamesGrid.innerHTML = filteredGames.map(game => {
        const teamA = getTeam(game.teamA);
        const teamB = getTeam(game.teamB);
        
        return `
            <div class="game-card ${game.status}">
                <div class="game-date">${formatDate(game.date)} ${game.time ? '• ' + game.time : ''}</div>
                <div class="game-venue">${game.venue}</div>
                <div class="game-teams">
                    <div class="game-team">
                        <div class="game-team-logo" style="background: linear-gradient(135deg, ${teamA.color}, ${adjustColor(teamA.color, -30)})">${teamA.shortName}</div>
                        <div class="game-team-name">${teamA.name}</div>
                    </div>
                    <div class="game-vs">VS</div>
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
}

function adjustColor(color, amount) {
    if (!color || !color.startsWith('#')) return '#666666';
    const hex = color.replace('#', '');
    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

// ========================================
// Event Listeners
// ========================================

// Category buttons
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Games tabs
gamesTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        gamesTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderGames(tab.dataset.tab);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderGames('previous');
});

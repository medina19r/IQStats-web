/**
 * ARBSV - Torneio de Abertura Page
 * Handles tournament page functionality with game cards similar to index
 */

class TorneioAbertura {
    constructor() {
        this.currentCategory = 'senior';
        this.tournament = window.torneioAbertura2026;
        this.teamLoader = null;
        this.teams = {};
        
        this.init();
    }

    async init() {
        // Initialize team data loader and load all teams
        window.teamDataLoader = new TeamDataLoader();
        await window.teamDataLoader.loadAll();
        
        // Get teams from the loaded data
        try {
            const loadedTeams = window.teamDataLoader.teams;
            
            this.teams = {
                sub18: loadedTeams['TorneioAbertura-Sub18'] || [],
                senior: loadedTeams['TorneioAbertura-Senior'] || []
            };
            
            console.log('Teams loaded:', this.teams);
            
            // If no teams loaded, use fallback
            if (this.teams.sub18.length === 0 && this.teams.senior.length === 0) {
                console.log('Using fallback teams');
                this.teams = this.getFallbackTeams();
            }
        } catch (e) {
            console.error('Error loading teams:', e);
            this.teams = this.getFallbackTeams();
        }
        
        this.setupEventListeners();
        this.loadGroups();
        this.loadStandings();
        this.loadSchedule();
        this.loadTeams();
    }

    getFallbackTeams() {
        return {
            // Sub-18 only has 3 teams
            sub18: [
                { id: 'alb-sub18', name: 'All Blacks', shortName: 'ALB', color: '#000000', coach: 'Mário Lima', assistantCoach: 'Pedro Santos', players: this.getFallbackPlayers('ALB') },
                { id: 'crz-sub18', name: 'Cruzeiros', shortName: 'CRZ', color: '#FFD700', coach: 'José Carlos', assistantCoach: 'Ana Silva', players: this.getFallbackPlayers('CRZ') },
                { id: 'lfa-sub18', name: 'La Família', shortName: 'LFA', color: '#8B0000', coach: 'Filipe Borges', assistantCoach: 'Daniel Costa', players: this.getFallbackPlayers('LFA') }
            ],
            // Senior has 6 teams in 2 groups
            senior: [
                { id: 'alb-senior', name: 'All Blacks', shortName: 'ALB', color: '#000000', coach: 'Mário Lima', assistantCoach: 'Pedro Santos', players: this.getFallbackPlayers('ALB', true) },
                { id: 'crz-senior', name: 'Cruzeiros', shortName: 'CRZ', color: '#FFD700', coach: 'José Carlos', assistantCoach: 'Ana Silva', players: this.getFallbackPlayers('CRZ', true) },
                { id: 'lfa-senior', name: 'La Família', shortName: 'LFA', color: '#8B0000', coach: 'Filipe Borges', assistantCoach: 'Daniel Costa', players: this.getFallbackPlayers('LFA', true) },
                { id: 'atl-senior', name: 'Atlético', shortName: 'ATL', color: '#FF4444', coach: 'Carlos Ferreira', assistantCoach: 'Manuel Rodrigues', players: this.getFallbackPlayers('ATL', true) },
                { id: 'rso-senior', name: 'Real Sociedade', shortName: 'RSO', color: '#1E7D32', coach: 'António Lima', assistantCoach: 'Sandra Borges', players: this.getFallbackPlayers('RSO', true) },
                { id: 'aca-senior', name: 'Académica', shortName: 'ACA', color: '#1E3A5F', coach: 'Rui Delgado', assistantCoach: 'Marta Ferreira', players: this.getFallbackPlayers('ACA', true) }
            ]
        };
    }

    getFallbackPlayers(team, isSenior = false) {
        const age = isSenior ? 26 : 17;
        return [
            { name: 'Jogador 1', number: 10, position: 'Ala', points: 18.5, rebounds: 5.2, assists: 3.8, isTopPlayer: true },
            { name: 'Jogador 2', number: 8, position: 'Base', points: 15.2, rebounds: 3.1, assists: 5.5, isTopPlayer: true },
            { name: 'Jogador 3', number: 12, position: 'Pivô', points: 12.8, rebounds: 8.5, assists: 1.2, isTopPlayer: false },
            { name: 'Jogador 4', number: 7, position: 'Ala', points: 14.1, rebounds: 4.3, assists: 3.2, isTopPlayer: false },
            { name: 'Jogador 5', number: 5, position: 'Armador', points: 10.5, rebounds: 2.4, assists: 6.1, isTopPlayer: false },
            { name: 'Jogador 6', number: 9, position: 'Ala', points: 11.3, rebounds: 3.8, assists: 2.9, isTopPlayer: false },
            { name: 'Jogador 7', number: 11, position: 'Pivô', points: 9.8, rebounds: 6.7, assists: 1.0, isTopPlayer: false },
            { name: 'Jogador 8', number: 6, position: 'Base', points: 8.5, rebounds: 2.1, assists: 4.2, isTopPlayer: false }
        ];
    }

    setupEventListeners() {
        // Category tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = btn.dataset.category;
                this.loadGroups();
                this.loadStandings();
                this.loadSchedule();
                this.loadTeams();
            });
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterSchedule(btn.dataset.filter);
            });
        });

        // Modal close
        document.querySelector('.modal-close').addEventListener('click', () => {
            document.getElementById('team-modal').classList.remove('active');
        });
        document.querySelector('.modal-overlay').addEventListener('click', () => {
            document.getElementById('team-modal').classList.remove('active');
        });
    }

    loadGroups() {
        const container = document.getElementById('groups-grid');
        const groupsSection = document.getElementById('groups-section');
        
        // Hide groups section for Sub-18 (they don't have groups)
        if (this.currentCategory === 'sub18') {
            groupsSection.style.display = 'none';
            return;
        }
        
        groupsSection.style.display = 'block';
        
        const groups = {
            senior: {
                'Grupo 1': ['ALB', 'CRZ', 'LFA'],
                'Grupo 2': ['ATL', 'RSO', 'ACA']
            }
        };
        
        const teamColors = {
            'ALB': '#000000',
            'CRZ': '#FFD700',
            'LFA': '#8B0000',
            'ATL': '#FF4444',
            'RSO': '#1E7D32',
            'ACA': '#1E3A5F'
        };
        
        const teamNames = {
            'ALB': 'All Blacks',
            'CRZ': 'Cruzeiros',
            'LFA': 'La Família',
            'ATL': 'Atlético',
            'RSO': 'Real Sociedade',
            'ACA': 'Académica'
        };
        
        const currentGroups = groups[this.currentCategory];
        
        let html = '';
        for (const [groupName, teams] of Object.entries(currentGroups)) {
            html += `
                <div class="group-card">
                    <h3 class="group-title">${groupName}</h3>
                    <ul class="group-teams">
                        ${teams.map(team => `
                            <li class="group-team">
                                <span class="team-color" style="background: ${teamColors[team]}"></span>
                                <span class="team-name">${teamNames[team]}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }
        
        container.innerHTML = html;
    }

    loadStandings() {
        const container = document.getElementById('standings-grid');
        const standingsSection = document.getElementById('standings-section');
        
        // Always show standings section
        standingsSection.style.display = 'block';
        
        const allGames = window.torneioAbertura2026?.categories[this.currentCategory]?.matches || [];
        
        const teamColors = {
            'ALB': '#000000',
            'CRZ': '#FFD700',
            'LFA': '#8B0000',
            'ATL': '#FF4444',
            'RSO': '#1E7D32',
            'ACA': '#1E3A5F'
        };
        
        const teamNames = {
            'ALB': 'All Blacks',
            'CRZ': 'Cruzeiros',
            'LFA': 'La Família',
            'ATL': 'Atlético',
            'RSO': 'Real Sociedade',
            'ACA': 'Académica'
        };
        
        let html = '';
        
        if (this.currentCategory === 'senior') {
            // For Senior, show two tables - one for each group
            const groups = {
                'Grupo 1': ['ALB', 'CRZ', 'LFA'],
                'Grupo 2': ['ATL', 'RSO', 'ACA']
            };
            
            // Create a table for each group
            for (const [groupName, groupTeams] of Object.entries(groups)) {
                // Filter games for this group
                const groupGames = allGames.filter(m => 
                    m.group === (groupName === 'Grupo 1' ? 'G1' : 'G2')
                );
                
                // Calculate standings for this group
                const standings = this.calculateStandings(groupGames, groupTeams);
                
                html += `
                    <div class="standings-table-wrapper">
                        <h3 class="group-standings-title">${groupName}</h3>
                        <table class="standings-table">
                            <thead>
                                <tr>
                                    <th class="col-pos">Pos</th>
                                    <th class="col-team">Equipa</th>
                                    <th class="col-games">J</th>
                                    <th class="col-wins">V</th>
                                    <th class="col-losses">D</th>
                                    <th class="col-points-made">PM</th>
                                    <th class="col-points-suffered">PS</th>
                                    <th class="col-points">P</th>
                                </tr>
                            </thead>
                            <tbody>
                `;
                
                if (standings.length > 0) {
                    html += standings.map((row, index) => {
                        const isFirst = index === 0;
                        return `
                            <tr class="${isFirst ? 'first-place' : ''}">
                                <td class="position">${row.position}</td>
                                <td class="col-team">
                                    <div class="team-cell">
                                        <div class="team-mini-logo" style="background: ${teamColors[row.team]}">${row.team}</div>
                                        <span>${teamNames[row.team]}</span>
                                    </div>
                                </td>
                                <td>${row.games}</td>
                                <td>${row.wins}</td>
                                <td>${row.losses}</td>
                                <td>${row.pointsFor}</td>
                                <td>${row.pointsAgainst}</td>
                                <td><strong>${row.points}</strong></td>
                            </tr>
                        `;
                    }).join('');
                } else {
                    // Show group teams with 0 games
                    html += groupTeams.map((team, index) => {
                        const isFirst = index === 0;
                        return `
                            <tr class="${isFirst ? 'first-place' : ''}">
                                <td class="position">${index + 1}</td>
                                <td class="col-team">
                                    <div class="team-cell">
                                        <div class="team-mini-logo" style="background: ${teamColors[team]}">${team}</div>
                                        <span>${teamNames[team]}</span>
                                    </div>
                                </td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td><strong>0</strong></td>
                            </tr>
                        `;
                    }).join('');
                }
                
                html += `
                            </tbody>
                        </table>
                    </div>
                `;
            }
        } else {
            // For Sub-18, show a single table with all 3 teams
            const sub18Teams = ['ALB', 'CRZ', 'LFA'];
            
            // Calculate standings for Sub-18
            const standings = this.calculateStandings(allGames, sub18Teams);
            
            html += `
                <div class="standings-table-wrapper">
                    <h3 class="group-standings-title">Classificação - Sub-18</h3>
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th class="col-pos">Pos</th>
                                <th class="col-team">Equipa</th>
                                <th class="col-games">J</th>
                                <th class="col-wins">V</th>
                                <th class="col-losses">D</th>
                                <th class="col-points-made">PM</th>
                                <th class="col-points-suffered">PS</th>
                                <th class="col-points">P</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            if (standings.length > 0) {
                html += standings.map((row, index) => {
                    const isFirst = index === 0;
                    return `
                        <tr class="${isFirst ? 'first-place' : ''}">
                            <td class="position">${row.position}</td>
                            <td class="col-team">
                                <div class="team-cell">
                                    <div class="team-mini-logo" style="background: ${teamColors[row.team]}">${row.team}</div>
                                    <span>${teamNames[row.team]}</span>
                                </div>
                            </td>
                            <td>${row.games}</td>
                            <td>${row.wins}</td>
                            <td>${row.losses}</td>
                            <td>${row.pointsFor}</td>
                            <td>${row.pointsAgainst}</td>
                            <td><strong>${row.points}</strong></td>
                        </tr>
                    `;
                }).join('');
            } else {
                // Show teams with 0 games
                html += sub18Teams.map((team, index) => {
                    const isFirst = index === 0;
                    return `
                        <tr class="${isFirst ? 'first-place' : ''}">
                            <td class="position">${index + 1}</td>
                            <td class="col-team">
                                <div class="team-cell">
                                    <div class="team-mini-logo" style="background: ${teamColors[team]}">${team}</div>
                                    <span>${teamNames[team]}</span>
                                </div>
                            </td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td><strong>0</strong></td>
                        </tr>
                    `;
                }).join('');
            }
            
            html += `
                        </tbody>
                    </table>
                </div>
            `;
        }
        
        container.innerHTML = html;
    }
    
    calculateStandings(games, teamList = null) {
        // Get all teams from games or from teamList
        const teamSet = new Set();
        
        if (teamList && teamList.length > 0) {
            teamList.forEach(team => teamSet.add(team));
        } else {
            games.forEach(game => {
                if (typeof game.teamA === 'string' && !game.teamA.includes('.')) {
                    teamSet.add(game.teamA);
                }
                if (typeof game.teamB === 'string' && !game.teamB.includes('.')) {
                    teamSet.add(game.teamB);
                }
            });
        }
        
        // Initialize standings
        const standingsMap = {};
        teamSet.forEach(team => {
            standingsMap[team] = {
                team: team,
                games: 0,
                wins: 0,
                losses: 0,
                pointsFor: 0,
                pointsAgainst: 0
            };
        });
        
        // Calculate from finished games
        games.forEach(game => {
            if (game.status === 'finished' && game.scoreA > 0 && game.scoreB > 0) {
                const teamA = game.teamA;
                const teamB = game.teamB;
                
                if (standingsMap[teamA] && standingsMap[teamB]) {
                    // Update games played
                    standingsMap[teamA].games++;
                    standingsMap[teamB].games++;
                    
                    // Update points
                    standingsMap[teamA].pointsFor += game.scoreA;
                    standingsMap[teamA].pointsAgainst += game.scoreB;
                    standingsMap[teamB].pointsFor += game.scoreB;
                    standingsMap[teamB].pointsAgainst += game.scoreA;
                    
                    // Update wins/losses
                    if (game.scoreA > game.scoreB) {
                        standingsMap[teamA].wins++;
                        standingsMap[teamB].losses++;
                    } else {
                        standingsMap[teamB].wins++;
                        standingsMap[teamA].losses++;
                    }
                }
            }
        });
        
        // Convert to array and calculate points (FIBA: 2 for win, 1 for loss)
        let standingsArray = Object.values(standingsMap).map(s => ({
            position: 0,
            team: s.team,
            games: s.games,
            wins: s.wins,
            losses: s.losses,
            points: (s.wins * 2) + (s.losses * 1),
            pointsFor: s.pointsFor,
            pointsAgainst: s.pointsAgainst
        }));
        
        // Sort by points (desc), then by point difference
        standingsArray.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            return (b.pointsFor - b.pointsAgainst) - (a.pointsFor - a.pointsAgainst);
        });
        
        // Set positions
        standingsArray.forEach((s, i) => s.position = i + 1);
        
        return standingsArray;
    }

    loadSchedule() {
        const container = document.getElementById('games-grid');
        
        // Get games for current category
        const allGames = window.torneioAbertura2026?.categories[this.currentCategory]?.matches || this.getSampleGames();
        const categoryFilter = this.currentCategory === 'sub18' ? 'Sub18' : 'Senior';
        const games = allGames.filter(m => m.category === categoryFilter);
        
        const teamColors = {
            'ALB': '#000000',
            'CRZ': '#FFD700',
            'LFA': '#8B0000',
            'ATL': '#FF4444',
            'RSO': '#1E7D32',
            'ACA': '#1E3A5F'
        };
        
        const teamNames = {
            'ALB': 'All Blacks',
            'CRZ': 'Cruzeiros',
            'LFA': 'La Família',
            'ATL': 'Atlético',
            'RSO': 'Real Sociedade',
            'ACA': 'Académica'
        };
        
        // Group games by round
        const gamesByRound = {};
        games.forEach(game => {
            const round = game.round || 'Outros';
            if (!gamesByRound[round]) {
                gamesByRound[round] = [];
            }
            gamesByRound[round].push(game);
        });
        
        // Define round order
        const roundOrder = ['1ª Volta', '2ª Volta', 'FINAL', 'G1', 'G2', 'MF-1', 'MF-2', 'FINAL Senior'];
        
        // Sort rounds
        const sortedRounds = Object.keys(gamesByRound).sort((a, b) => {
            const idxA = roundOrder.indexOf(a);
            const idxB = roundOrder.indexOf(b);
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            if (idxA !== -1) return -1;
            if (idxB !== -1) return 1;
            return a.localeCompare(b);
        });
        
        // Default status is upcoming for games without status
        const getStatus = (game) => game.status || 'upcoming';
        
        let html = '';
        
        sortedRounds.forEach(round => {
            const roundGames = gamesByRound[round];
            
            // Round header
            html += `<div class="round-section"><h3 class="round-title">${round}</h3>`;
            
            // Games in this round
            roundGames.forEach(game => {
                const status = getStatus(game);
                const teamAColor = teamColors[game.teamA] || '#808080';
                const teamBColor = teamColors[game.teamB] || '#808080';
                
                html += `
            <div class="game-card ${status}" data-round="${game.round}">
                <div class="game-date">${game.date} • ${game.time}</div>
                <div class="game-teams">
                    <div class="game-team">
                        <div class="game-team-logo" style="background: linear-gradient(135deg, ${teamAColor}, ${this.darkenColor(teamAColor, 20)})">${game.teamA}</div>
                        <div class="game-team-name">${teamNames[game.teamA] || game.teamA}</div>
                    </div>
                    <span class="game-vs">VS</span>
                    <div class="game-team">
                        <div class="game-team-logo" style="background: linear-gradient(135deg, ${teamBColor}, ${this.darkenColor(teamBColor, 20)})">${game.teamB}</div>
                        <div class="game-team-name">${teamNames[game.teamB] || game.teamB}</div>
                    </div>
                </div>
                <div class="game-score">
                    <span class="score">${game.scoreA > 0 ? game.scoreA : '-'}</span>
                    <span class="score-divider">-</span>
                    <span class="score">${game.scoreB > 0 ? game.scoreB : '-'}</span>
                </div>
                <div class="game-status ${status}">${this.formatStatus(status)}</div>
            </div>
        `;
            });
            
            html += '</div>';
        });
        
        container.innerHTML = html || '<p class="no-matches">Nenhum jogo encontrado</p>';
    }

    getSampleGames() {
        return [
            { teamA: 'ALB', teamB: 'CRZ', scoreA: 0, scoreB: 0, date: '07 FEV', time: '18:00', status: 'upcoming', round: '1ª Jornada', category: 'Senior' },
            { teamA: 'LFA', teamB: 'ATL', scoreA: 0, scoreB: 0, date: '07 FEV', time: '20:00', status: 'upcoming', round: '1ª Jornada', category: 'Senior' },
            { teamA: 'RSO', teamB: 'ACA', scoreA: 0, scoreB: 0, date: '08 FEV', time: '18:00', status: 'upcoming', round: '1ª Jornada', category: 'Senior' },
            { teamA: 'ALB', teamB: 'LFA', scoreA: 0, scoreB: 0, date: '14 FEV', time: '18:00', status: 'upcoming', round: '2ª Jornada', category: 'Senior' },
            { teamA: 'CRZ', teamB: 'RSO', scoreA: 0, scoreB: 0, date: '14 FEV', time: '20:00', status: 'upcoming', round: '2ª Jornada', category: 'Senior' },
            { teamA: 'ATL', teamB: 'ACA', scoreA: 0, scoreB: 0, date: '15 FEV', time: '18:00', status: 'upcoming', round: '2ª Jornada', category: 'Senior' }
        ];
    }

    filterSchedule(filter) {
        document.querySelectorAll('.game-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    formatStatus(status) {
        const statusMap = {
            'finished': 'Concluído',
            'upcoming': 'Próximo',
            'live': 'Ao Vivo'
        };
        return statusMap[status] || status;
    }

    loadTeams() {
        const container = document.getElementById('teams-grid');
        const categoryTeams = this.teams[this.currentCategory] || [];
        
        let html = categoryTeams.map(team => `
            <div class="team-card" data-team-id="${team.id}">
                <div class="team-emblem" style="background: linear-gradient(135deg, ${team.color}, ${this.darkenColor(team.color, 20)})">
                    ${team.shortName}
                </div>
                <h3 class="team-name">${team.name}</h3>
                <p class="team-players">${team.players?.length || 0} Jogadores</p>
                <button class="btn-view-team">Ver Equipa</button>
            </div>
        `).join('');
        
        container.innerHTML = html || '<p class="no-teams">Nenhuma equipa encontrada</p>';
        
        // Add click handlers
        document.querySelectorAll('.team-card').forEach(card => {
            card.addEventListener('click', () => {
                const teamId = card.dataset.teamId;
                this.showTeamModal(teamId);
            });
        });
    }

    showTeamModal(teamId) {
        const team = this.teams[this.currentCategory]?.find(t => t.id === teamId);
        if (!team) return;
        
        // Set team info
        document.getElementById('modal-team-emblem').textContent = team.shortName;
        document.getElementById('modal-team-emblem').style.background = `linear-gradient(135deg, ${team.color}, ${this.darkenColor(team.color, 20)})`;
        document.getElementById('modal-team-name').textContent = team.name;
        document.getElementById('modal-team-category').textContent = this.currentCategory === 'sub18' ? 'Sub-18' : 'Senior';
        
        // Set coaching staff
        document.getElementById('modal-coach').textContent = team.coach || '-';
        document.getElementById('modal-assistant-coach').textContent = team.assistantCoach || '-';
        
        const players = team.players || [];
        document.getElementById('modal-total-players').textContent = players.length;
        
        const avgPoints = players.length ? (players.reduce((sum, p) => sum + (p.points || 0), 0) / players.length).toFixed(1) : '0.0';
        const avgRebounds = players.length ? (players.reduce((sum, p) => sum + (p.rebounds || 0), 0) / players.length).toFixed(1) : 0;
        
        document.getElementById('modal-avg-points').textContent = avgPoints;
        document.getElementById('modal-avg-rebounds').textContent = avgRebounds;
        
        // Set top players
        const topPlayers = players.filter(p => p.isTopPlayer).slice(0, 3);
        const topPlayersHtml = topPlayers.map(p => `
            <div class="top-player-card">
                <div class="top-player-photo">${p.photo || '🏀'}</div>
                <div class="top-player-info">
                    <span class="top-player-number">#${p.number}</span>
                    <span class="top-player-name">${p.name}</span>
                    <span class="top-player-position">${p.position}</span>
                </div>
                <div class="top-player-stats">
                    <span class="stat"><strong>${p.points}</strong> pts</span>
                    <span class="stat"><strong>${p.rebounds}</strong> reb</span>
                    <span class="stat"><strong>${p.assists}</strong> ass</span>
                </div>
            </div>
        `).join('');
        
        document.getElementById('top-players').innerHTML = topPlayersHtml || '<p>Nenhum top jogador definido</p>';
        
        // Set all players
        const playersHtml = players.map(p => `
            <div class="player-row">
                <span class="player-number">${p.number}</span>
                <span class="player-name">${p.name}</span>
                <span class="player-position">${p.position}</span>
                <span class="player-stats">${p.points}pts / ${p.rebounds}reb / ${p.assists}ass</span>
            </div>
        `).join('');
        
        document.getElementById('players-list').innerHTML = playersHtml || '<p>Nenhum jogador encontrado</p>';
        
        document.getElementById('team-modal').classList.add('active');
    }

    darkenColor(hex, percent) {
        if (!hex || typeof hex !== 'string') {
            return '#808080'; // Default gray if no color
        }
        const cleanHex = hex.startsWith('#') ? hex : '#' + hex;
        const num = parseInt(cleanHex.replace('#', ''), 16);
        if (isNaN(num)) {
            return '#808080';
        }
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.torneioAbertura = new TorneioAbertura();
});

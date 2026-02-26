/**
 * ARBSV - Teams Data
 * Loads teams from folder structure:
 * - Campeonato/Senior/ - Senior Championship teams
 * - Campeonato/Sub18/ - Sub18 Championship teams  
 * - TorneioAbertura/Senior/ - Senior Opening Tournament teams
 * - TorneioAbertura/Sub18/ - Sub18 Opening Tournament teams
 * 
 * Each team file exports: teamInfo and teamPlayers
 */

// Team data arrays - will be populated when team files are loaded
let allTeamInfo = [];
let allTeamPlayers = [];

// Register a team (called by each team file)
function registerTeam(info, players) {
    allTeamInfo.push(info);
    allTeamPlayers.push(...players.map(p => ({...p, teamId: info.id, category: info.category, competition: info.competition})));
}

// Get all teams
function getAllTeams() {
    return allTeamInfo;
}

// Get all players
function getAllPlayers() {
    return allTeamPlayers;
}

// Get teams by competition and category
function getTeams(competition, category) {
    return allTeamInfo.filter(t => t.competition === competition && t.category === category);
}

// Get players by team
function getTeamPlayers(teamId) {
    return allTeamPlayers.filter(p => p.teamId === teamId);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getAllTeams, getAllPlayers, getTeams, getTeamPlayers, registerTeam };
}

// Also make available globally
window.getAllTeams = getAllTeams;
window.getAllPlayers = getAllPlayers;
window.getTeams = getTeams;
window.getTeamPlayers = getTeamPlayers;
window.registerTeam = registerTeam;

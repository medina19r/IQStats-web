/**
 * ARBSV - Torneio de Abertura 2026 Schedule
 * Based on calendario.jpeg
 */

window.torneioAbertura2026 = {
    name: "Torneio de Abertura 2026",
    categories: {
        sub18: {
            name: "Sub-18",
            // Only 3 teams in Sub-18 - they play double round robin
            teams: ["ALB", "CRZ", "LFA"],
            matches: [
                // 1ª Volta
                { round: "1ª Volta", date: "07/02/2026", time: "18:30", teamA: "ALB", teamB: "CRZ", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "1ª Volta", date: "14/02/2026", time: "18:30", teamA: "CRZ", teamB: "LFA", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "1ª Volta", date: "21/02/2026", time: "18:30", teamA: "LFA", teamB: "ALB", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" },
                // 2ª Volta
                { round: "2ª Volta", date: "25/02/2026", time: "19:00", teamA: "LFA", teamB: "ALB", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "2ª Volta", date: "04/03/2026", time: "18:30", teamA: "CRZ", teamB: "LFA", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "2ª Volta", date: "07/03/2026", time: "19:00", teamA: "ALB", teamB: "CRZ", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" },
                // FINAL - 1st vs 2nd placed
                { round: "FINAL", date: "14/03/2026", time: "19:00", teamA: "1.º Classificado", teamB: "2.º Classificado", category: "Sub18", scoreA: 0, scoreB: 0, status: "upcoming" }
            ]
        },
        senior: {
            name: "Senior",
            groups: {
                G1: ["ALB", "CRZ", "LFA"],
                G2: ["ATL", "RSO", "ACA"]
            },
            matches: [
                // G2 - Grupo 2
                { round: "G2", date: "11/02/2026", time: "19:00", group: "G2", teamA: "ATL", teamB: "RSO", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "G2", date: "14/02/2026", time: "20:00", group: "G2", teamA: "RSO", teamB: "ACA", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "G2", date: "21/02/2026", time: "20:00", group: "G2", teamA: "ACA", teamB: "ATL", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                // G1 - Grupo 1
                { round: "G1", date: "11/02/2026", time: "20:30", group: "G1", teamA: "CRZ", teamB: "LFA", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "G1", date: "25/02/2026", time: "20:30", group: "G1", teamA: "ALB", teamB: "CRZ", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "G1", date: "28/02/2026", time: "20:00", group: "G1", teamA: "ALB", teamB: "LFA", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                // MF - Meias Finais
                { round: "MF-1", date: "04/03/2026", time: "20:00", group: "MF", teamA: "1.º G1", teamB: "2.º G2", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                { round: "MF-2", date: "07/03/2026", time: "20:30", group: "MF", teamA: "1.º G2", teamB: "2.º G1", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" },
                // FINAL Senior
                { round: "FINAL Senior", date: "14/03/2026", time: "20:30", group: "FINAL", teamA: "Vencedor MF-1", teamB: "Vencedor MF-2", category: "Senior", scoreA: 0, scoreB: 0, status: "upcoming" }
            ]
        }
    }
};

// Team colors mapping
window.teamColors = {
    "ALB": "#000000",  // All Blacks - Black
    "CRZ": "#FFD700",  // Cruzeiros - Gold
    "LFA": "#8B0000",  // La Família - Dark Red
    "ATL": "#FF4444",  // Atlético - Red
    "RSO": "#1E7D32",  // Real Sociedade - Green
    "ACA": "#1E3A5F"   // Académica - Navy Blue
};

// Team names mapping
window.teamNames = {
    "ALB": "All Blacks",
    "CRZ": "Cruzeiros",
    "LFA": "La Família",
    "ATL": "Atlético",
    "RSO": "Real Sociedade",
    "ACA": "Académica"
};

if (typeof module !== "undefined") module.exports = window.torneioAbertura2026;

/**
 * ARBSV - Games Data
 * Contains games for all competitions
 */

// Senior Championship Games
const gamesSeniorCamp = [
    {
        id: 'sc-1',
        teamA: 'todos-blacks-senior-camp',
        teamB: 'cruzeiros-senior-camp',
        scoreA: 78,
        scoreB: 65,
        date: '2024-01-20',
        time: '18:00',
        status: 'finished',
        venue: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Campeonato',
        quarterScores: [
            { a: 20, b: 15 },
            { a: 18, b: 17 },
            { a: 22, b: 16 },
            { a: 18, b: 17 }
        ],
        teamStats: {
            teamA: { points: 78, rebounds: 32, assists: 15, fouls: 12 },
            teamB: { points: 65, rebounds: 25, assists: 12, fouls: 16 }
        },
        bestPlayer: {
            name: 'Ricardo Pires',
            team: 'todos-blacks-senior-camp',
            points: 24,
            rebounds: 8,
            assists: 4,
            photo: '🏀'
        }
    },
    {
        id: 'sc-2',
        teamA: 'academica-senior-camp',
        teamB: 'la-familia-senior-camp',
        scoreA: 82,
        scoreB: 79,
        date: '2024-01-20',
        time: '20:00',
        status: 'finished',
        venue: 'Ginásio Académico',
        category: 'Senior',
        competition: 'Campeonato',
        quarterScores: [
            { a: 22, b: 20 },
            { a: 18, b: 22 },
            { a: 20, b: 18 },
            { a: 22, b: 19 }
        ],
        teamStats: {
            teamA: { points: 82, rebounds: 35, assists: 18, fouls: 14 },
            teamB: { points: 79, rebounds: 30, assists: 14, fouls: 17 }
        },
        bestPlayer: {
            name: 'Miguel Neves',
            team: 'academica-senior-camp',
            points: 26,
            rebounds: 7,
            assists: 5,
            photo: '🏀'
        }
    },
    {
        id: 'sc-3',
        teamA: 'todos-blacks-senior-camp',
        teamB: 'academica-senior-camp',
        scoreA: 0,
        scoreB: 0,
        date: '2024-01-27',
        time: '18:00',
        status: 'upcoming',
        venue: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Campeonato',
        quarterScores: [],
        teamStats: {
            teamA: { points: 0, rebounds: 0, assists: 0, fouls: 0 },
            teamB: { points: 0, rebounds: 0, assists: 0, fouls: 0 }
        },
        bestPlayer: null
    },
    {
        id: 'sc-4',
        teamA: 'cruzeiros-senior-camp',
        teamB: 'la-familia-senior-camp',
        scoreA: 0,
        scoreB: 0,
        date: '2024-01-27',
        time: '20:00',
        status: 'upcoming',
        venue: 'Pavilhão do Mindelo',
        category: 'Senior',
        competition: 'Campeonato',
        quarterScores: [],
        teamStats: {
            teamA: { points: 0, rebounds: 0, assists: 0, fouls: 0 },
            teamB: { points: 0, rebounds: 0, assists: 0, fouls: 0 }
        },
        bestPlayer: null
    }
];

// Senior Tournament Games
const gamesSeniorTaca = [
    {
        id: 'st-1',
        teamA: 'todos-blacks-senior-taca',
        teamB: 'cruzeiros-senior-taca',
        scoreA: 72,
        scoreB: 68,
        date: '2024-02-10',
        time: '18:00',
        status: 'finished',
        venue: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Taça',
        quarterScores: [
            { a: 18, b: 16 },
            { a: 20, b: 18 },
            { a: 16, b: 18 },
            { a: 18, b: 16 }
        ],
        teamStats: {
            teamA: { points: 72, rebounds: 28, assists: 14, fouls: 10 },
            teamB: { points: 68, rebounds: 25, assists: 12, fouls: 14 }
        },
        bestPlayer: {
            name: 'Marco Silva',
            team: 'todos-blacks-senior-taca',
            points: 20,
            rebounds: 5,
            assists: 6,
            photo: '🏀'
        }
    },
    {
        id: 'st-2',
        teamA: 'academica-senior-taca',
        teamB: 'la-familia-senior-taca',
        scoreA: 85,
        scoreB: 78,
        date: '2024-02-10',
        time: '20:00',
        status: 'finished',
        venue: 'Ginásio Académico',
        category: 'Senior',
        competition: 'Taça',
        quarterScores: [
            { a: 22, b: 18 },
            { a: 20, b: 22 },
            { a: 22, b: 18 },
            { a: 21, b: 20 }
        ],
        teamStats: {
            teamA: { points: 85, rebounds: 32, assists: 16, fouls: 12 },
            teamB: { points: 78, rebounds: 28, assists: 14, fouls: 15 }
        },
        bestPlayer: {
            name: 'João Varela',
            team: 'academica-senior-taca',
            points: 22,
            rebounds: 6,
            assists: 7,
            photo: '🏀'
        }
    },
    {
        id: 'st-3',
        teamA: 'atlantic-senior-taca',
        teamB: 'todos-blacks-senior-taca',
        scoreA: 0,
        scoreB: 0,
        date: '2024-02-17',
        time: '18:00',
        status: 'upcoming',
        venue: 'Polidesportivo de Santo Antão',
        category: 'Senior',
        competition: 'Taça',
        quarterScores: [],
        teamStats: {
            teamA: { points: 0, rebounds: 0, assists: 0, fouls: 0 },
            teamB: { points: 0, rebounds: 0, assists: 0, fouls: 0 }
        },
        bestPlayer: null
    }
];

// Sub18 Championship Games
const gamesSub18Camp = [
    {
        id: 's18c-1',
        teamA: 'todos-blacks-sub18-camp',
        teamB: 'cruzeiros-sub18-camp',
        scoreA: 65,
        scoreB: 58,
        date: '2024-01-25',
        time: '16:00',
        status: 'finished',
        venue: 'Pavilhão Polideportivo de São Vicente',
        category: 'Sub 18',
        competition: 'Campeonato',
        quarterScores: [
            { a: 16, b: 14 },
            { a: 18, b: 15 },
            { a: 15, b: 16 },
            { a: 16, b: 13 }
        ],
        teamStats: {
            teamA: { points: 65, rebounds: 28, assists: 12, fouls: 10 },
            teamB: { points: 58, rebounds: 24, assists: 10, fouls: 14 }
        },
        bestPlayer: {
            name: 'Diogo Mendes',
            team: 'todos-blacks-sub18-camp',
            points: 18,
            rebounds: 6,
            assists: 3,
            photo: '🏀'
        }
    },
    {
        id: 's18c-2',
        teamA: 'academica-sub18-camp',
        teamB: 'la-familia-sub18-camp',
        scoreA: 72,
        scoreB: 68,
        date: '2024-01-25',
        time: '18:00',
        status: 'finished',
        venue: 'Ginásio Académico',
        category: 'Sub 18',
        competition: 'Campeonato',
        quarterScores: [
            { a: 18, b: 16 },
            { a: 20, b: 18 },
            { a: 16, b: 18 },
            { a: 18, b: 16 }
        ],
        teamStats: {
            teamA: { points: 72, rebounds: 30, assists: 14, fouls: 12 },
            teamB: { points: 68, rebounds: 26, assists: 12, fouls: 15 }
        },
        bestPlayer: {
            name: 'André Pires',
            team: 'academica-sub18-camp',
            points: 20,
            rebounds: 5,
            assists: 4,
            photo: '🏀'
        }
    },
    {
        id: 's18c-3',
        teamA: 'todos-blacks-sub18-camp',
        teamB: 'academica-sub18-camp',
        scoreA: 0,
        scoreB: 0,
        date: '2024-02-01',
        time: '16:00',
        status: 'upcoming',
        venue: 'Pavilhão Polideportivo de São Vicente',
        category: 'Sub 18',
        competition: 'Campeonato',
        quarterScores: [],
        teamStats: {
            teamA: { points: 0, rebounds: 0, assists: 0, fouls: 0 },
            teamB: { points: 0, rebounds: 0, assists: 0, fouls: 0 }
        },
        bestPlayer: null
    }
];

// Sub18 Tournament Games
const gamesSub18Taca = [
    {
        id: 's18t-1',
        teamA: 'todos-blacks-sub18-taca',
        teamB: 'cruzeiros-sub18-taca',
        scoreA: 55,
        scoreB: 52,
        date: '2024-02-08',
        time: '16:00',
        status: 'finished',
        venue: 'Pavilhão Polideportivo de São Vicente',
        category: 'Sub 18',
        competition: 'Taça',
        quarterScores: [
            { a: 14, b: 12 },
            { a: 15, b: 14 },
            { a: 12, b: 15 },
            { a: 14, b: 11 }
        ],
        teamStats: {
            teamA: { points: 55, rebounds: 22, assists: 10, fouls: 8 },
            teamB: { points: 52, rebounds: 20, assists: 8, fouls: 12 }
        },
        bestPlayer: {
            name: 'Manuel Silva',
            team: 'todos-blacks-sub18-taca',
            points: 16,
            rebounds: 4,
            assists: 5,
            photo: '🏀'
        }
    },
    {
        id: 's18t-2',
        teamA: 'academica-sub18-taca',
        teamB: 'la-familia-sub18-taca',
        scoreA: 0,
        scoreB: 0,
        date: '2024-02-15',
        time: '16:00',
        status: 'upcoming',
        venue: 'Ginásio Académico',
        category: 'Sub 18',
        competition: 'Taça',
        quarterScores: [],
        teamStats: {
            teamA: { points: 0, rebounds: 0, assists: 0, fouls: 0 },
            teamB: { points: 0, rebounds: 0, assists: 0, fouls: 0 }
        },
        bestPlayer: null
    }
];

// All games combined
const games = [
    ...gamesSeniorCamp,
    ...gamesSeniorTaca,
    ...gamesSub18Camp,
    ...gamesSub18Taca
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = games;
}

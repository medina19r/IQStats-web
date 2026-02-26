/**
 * ARBSV - Standings Data
 * Contains standings for all competitions
 */

// Senior Championship Standings
const standingsSeniorCamp = [
    { 
        position: 1, 
        team: 'academica-senior-camp', 
        teamName: 'Académica',
        games: 2, 
        wins: 2, 
        losses: 0, 
        points: 6,
        pointsFor: 164,
        pointsAgainst: 158,
        streak: 'W2'
    },
    { 
        position: 2, 
        team: 'todos-blacks-senior-camp', 
        teamName: 'Todos Blacks',
        games: 1, 
        wins: 1, 
        losses: 0, 
        points: 3,
        pointsFor: 78,
        pointsAgainst: 65,
        streak: 'W1'
    },
    { 
        position: 3, 
        team: 'la-familia-senior-camp', 
        teamName: 'La Familia',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 79,
        pointsAgainst: 82,
        streak: 'L1'
    },
    { 
        position: 4, 
        team: 'cruzeiros-senior-camp', 
        teamName: 'Cruzeiros',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 65,
        pointsAgainst: 78,
        streak: 'L1'
    }
];

// Senior Tournament Standings
const standingsSeniorTaca = [
    { 
        position: 1, 
        team: 'academica-senior-taca', 
        teamName: 'Académica',
        games: 1, 
        wins: 1, 
        losses: 0, 
        points: 3,
        pointsFor: 85,
        pointsAgainst: 78,
        streak: 'W1'
    },
    { 
        position: 2, 
        team: 'todos-blacks-senior-taca', 
        teamName: 'Todos Blacks',
        games: 1, 
        wins: 1, 
        losses: 0, 
        points: 3,
        pointsFor: 72,
        pointsAgainst: 68,
        streak: 'W1'
    },
    { 
        position: 3, 
        team: 'la-familia-senior-taca', 
        teamName: 'La Familia',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 78,
        pointsAgainst: 85,
        streak: 'L1'
    },
    { 
        position: 4, 
        team: 'cruzeiros-senior-taca', 
        teamName: 'Cruzeiros',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 68,
        pointsAgainst: 72,
        streak: 'L1'
    },
    { 
        position: 5, 
        team: 'atlantic-senior-taca', 
        teamName: 'Atlantic',
        games: 0, 
        wins: 0, 
        losses: 0, 
        points: 0,
        pointsFor: 0,
        pointsAgainst: 0,
        streak: '-'
    }
];

// Sub18 Championship Standings
const standingsSub18Camp = [
    { 
        position: 1, 
        team: 'academica-sub18-camp', 
        teamName: 'Académica',
        games: 2, 
        wins: 2, 
        losses: 0, 
        points: 6,
        pointsFor: 144,
        pointsAgainst: 126,
        streak: 'W2'
    },
    { 
        position: 2, 
        team: 'todos-blacks-sub18-camp', 
        teamName: 'Todos Blacks',
        games: 1, 
        wins: 1, 
        losses: 0, 
        points: 3,
        pointsFor: 65,
        pointsAgainst: 58,
        streak: 'W1'
    },
    { 
        position: 3, 
        team: 'la-familia-sub18-camp', 
        teamName: 'La Familia',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 68,
        pointsAgainst: 72,
        streak: 'L1'
    },
    { 
        position: 4, 
        team: 'cruzeiros-sub18-camp', 
        teamName: 'Cruzeiros',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 58,
        pointsAgainst: 65,
        streak: 'L1'
    }
];

// Sub18 Tournament Standings
const standingsSub18Taca = [
    { 
        position: 1, 
        team: 'todos-blacks-sub18-taca', 
        teamName: 'Todos Blacks',
        games: 1, 
        wins: 1, 
        losses: 0, 
        points: 3,
        pointsFor: 55,
        pointsAgainst: 52,
        streak: 'W1'
    },
    { 
        position: 2, 
        team: 'academica-sub18-taca', 
        teamName: 'Académica',
        games: 0, 
        wins: 0, 
        losses: 0, 
        points: 0,
        pointsFor: 0,
        pointsAgainst: 0,
        streak: '-'
    },
    { 
        position: 3, 
        team: 'la-familia-sub18-taca', 
        teamName: 'La Familia',
        games: 0, 
        wins: 0, 
        losses: 0, 
        points: 0,
        pointsFor: 0,
        pointsAgainst: 0,
        streak: '-'
    },
    { 
        position: 4, 
        team: 'cruzeiros-sub18-taca', 
        teamName: 'Cruzeiros',
        games: 1, 
        wins: 0, 
        losses: 1, 
        points: 1,
        pointsFor: 52,
        pointsAgainst: 55,
        streak: 'L1'
    }
];

// Combined standings (default to Senior Championship)
const standings = standingsSeniorCamp;

// Tournament Information
const tournamentInfoSeniorCamp = {
    id: 'senior-camp',
    name: 'Campeonato de Basquetebol - Seniores',
    category: 'Senior',
    competition: 'Campeonato',
    startDate: '2024-01-15',
    endDate: '2024-04-30',
    venue: 'Pavilhão Polideportivo de São Vicente',
    currentRound: 2,
    totalRounds: 6,
    teamsCount: 4,
    gamesPerTeam: 6
};

const tournamentInfoSeniorTaca = {
    id: 'senior-taca',
    name: 'Taça de Basquetebol - Seniores',
    category: 'Senior',
    competition: 'Taça',
    startDate: '2024-02-10',
    endDate: '2024-03-15',
    venue: 'Pavilhão Polideportivo de São Vicente',
    currentRound: 1,
    totalRounds: 3,
    teamsCount: 5,
    gamesPerTeam: 2
};

const tournamentInfoSub18Camp = {
    id: 'sub18-camp',
    name: 'Campeonato de Basquetebol - Sub18',
    category: 'Sub 18',
    competition: 'Campeonato',
    startDate: '2024-01-20',
    endDate: '2024-04-20',
    venue: 'Pavilhão Polideportivo de São Vicente',
    currentRound: 2,
    totalRounds: 6,
    teamsCount: 4,
    gamesPerTeam: 6
};

const tournamentInfoSub18Taca = {
    id: 'sub18-taca',
    name: 'Taça de Basquetebol - Sub18',
    category: 'Sub 18',
    competition: 'Taça',
    startDate: '2024-02-05',
    endDate: '2024-03-10',
    venue: 'Pavilhão Polideportivo de São Vicente',
    currentRound: 1,
    totalRounds: 3,
    teamsCount: 4,
    gamesPerTeam: 2
};

const tournamentInfo = tournamentInfoSeniorCamp;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        standings, 
        tournamentInfo,
        standingsSeniorCamp,
        standingsSeniorTaca,
        standingsSub18Camp,
        standingsSub18Taca,
        tournamentInfoSeniorCamp,
        tournamentInfoSeniorTaca,
        tournamentInfoSub18Camp,
        tournamentInfoSub18Taca
    };
}

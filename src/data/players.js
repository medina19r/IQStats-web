/**
 * ARBSV - Players Data
 * Contains top players for all competitions
 */

// Top Players for Senior Championship
const topPlayersSeniorCamp = [
    {
        id: 1,
        name: 'Ricardo Pires',
        team: 'todos-blacks-senior-camp',
        teamName: 'Todos Blacks',
        type: 'top-scorer',
        typeLabel: 'Melhor Marcador',
        badge: '🎯',
        stats: { main: 22.3, label: 'Pontos/Jogo' },
        secondary: { rebounds: 7.1, assists: 3.5 },
        photo: '🏀',
        number: 10,
        position: 'Ala',
        height: '1.95m',
        age: 26
    },
    {
        id: 2,
        name: 'Fernando Lima',
        team: 'cruzeiros-senior-camp',
        teamName: 'Cruzeiros',
        type: 'best-defender',
        typeLabel: 'Melhor Defensor',
        badge: '🛡️',
        stats: { main: 2.5, label: 'Roubos/Jogo' },
        secondary: { blocks: 1.8, rebounds: 6.3 },
        photo: '🏀',
        number: 7,
        position: 'Pivô',
        height: '2.00m',
        age: 27
    },
    {
        id: 3,
        name: 'Miguel Neves',
        team: 'academica-senior-camp',
        teamName: 'Académica',
        type: 'mvp',
        typeLabel: 'MVP',
        badge: '⭐',
        stats: { main: 21.5, label: 'Pontos/Jogo' },
        secondary: { rebounds: 6.9, assists: 3.8 },
        photo: '🏀',
        number: 8,
        position: 'Ala',
        height: '1.93m',
        age: 25
    }
];

// Top Players for Senior Tournament (Taça)
const topPlayersSeniorTaca = [
    {
        id: 4,
        name: 'Marco Silva',
        team: 'todos-blacks-senior-taca',
        teamName: 'Todos Blacks',
        type: 'top-scorer',
        typeLabel: 'Melhor Marcador',
        badge: '🎯',
        stats: { main: 18.5, label: 'Pontos/Jogo' },
        secondary: { rebounds: 4.2, assists: 6.8 },
        photo: '🏀',
        number: 10,
        position: 'Base',
        height: '1.82m',
        age: 24
    },
    {
        id: 5,
        name: 'Nuno Almeida',
        team: 'cruzeiros-senior-taca',
        teamName: 'Cruzeiros',
        type: 'best-defender',
        typeLabel: 'Melhor Defensor',
        badge: '🛡️',
        stats: { main: 2.2, label: 'Roubos/Jogo' },
        secondary: { blocks: 1.2, rebounds: 4.5 },
        photo: '🏀',
        number: 5,
        position: 'Ala',
        height: '1.90m',
        age: 25
    },
    {
        id: 6,
        name: 'Jorge Tavares',
        team: 'atlantic-senior-taca',
        teamName: 'Atlantic',
        type: 'mvp',
        typeLabel: 'MVP',
        badge: '⭐',
        stats: { main: 21.3, label: 'Pontos/Jogo' },
        secondary: { rebounds: 4.8, assists: 6.9 },
        photo: '🏀',
        number: 10,
        position: 'Base',
        height: '1.84m',
        age: 26
    }
];

// Top Players for Sub18 Championship
const topPlayersSub18Camp = [
    {
        id: 7,
        name: 'Diogo Mendes',
        team: 'todos-blacks-sub18-camp',
        teamName: 'Todos Blacks',
        type: 'top-scorer',
        typeLabel: 'Melhor Marcador',
        badge: '🎯',
        stats: { main: 19.8, label: 'Pontos/Jogo' },
        secondary: { rebounds: 6.2, assists: 3.1 },
        photo: '🏀',
        number: 8,
        position: 'Ala',
        height: '1.85m',
        age: 18
    },
    {
        id: 8,
        name: 'Francisco Lima',
        team: 'cruzeiros-sub18-camp',
        teamName: 'Cruzeiros',
        type: 'best-defender',
        typeLabel: 'Melhor Defensor',
        badge: '🛡️',
        stats: { main: 2.0, label: 'Roubos/Jogo' },
        secondary: { blocks: 1.0, rebounds: 5.5 },
        photo: '🏀',
        number: 7,
        position: 'Ala',
        height: '1.88m',
        age: 18
    },
    {
        id: 9,
        name: 'André Pires',
        team: 'academica-sub18-camp',
        teamName: 'Académica',
        type: 'mvp',
        typeLabel: 'MVP',
        badge: '⭐',
        stats: { main: 19.2, label: 'Pontos/Jogo' },
        secondary: { rebounds: 5.8, assists: 3.2 },
        photo: '🏀',
        number: 8,
        position: 'Ala',
        height: '1.86m',
        age: 18
    }
];

// Top Players for Sub18 Tournament (Taça)
const topPlayersSub18Taca = [
    {
        id: 10,
        name: 'Manuel Silva',
        team: 'todos-blacks-sub18-taca',
        teamName: 'Todos Blacks',
        type: 'top-scorer',
        typeLabel: 'Melhor Marcador',
        badge: '🎯',
        stats: { main: 16.2, label: 'Pontos/Jogo' },
        secondary: { rebounds: 3.5, assists: 5.8 },
        photo: '🏀',
        number: 10,
        position: 'Base',
        height: '1.75m',
        age: 17
    },
    {
        id: 11,
        name: 'Tomás Almeida',
        team: 'cruzeiros-sub18-taca',
        teamName: 'Cruzeiros',
        type: 'best-defender',
        typeLabel: 'Melhor Defensor',
        badge: '🛡️',
        stats: { main: 1.8, label: 'Roubos/Jogo' },
        secondary: { blocks: 0.8, rebounds: 3.8 },
        photo: '🏀',
        number: 9,
        position: 'Ala',
        height: '1.78m',
        age: 17
    },
    {
        id: 12,
        name: 'Pedro Varela',
        team: 'academica-sub18-taca',
        teamName: 'Académica',
        type: 'mvp',
        typeLabel: 'MVP',
        badge: '⭐',
        stats: { main: 15.8, label: 'Pontos/Jogo' },
        secondary: { rebounds: 3.2, assists: 5.5 },
        photo: '🏀',
        number: 10,
        position: 'Base',
        height: '1.73m',
        age: 17
    }
];

// Combine all top players
const topPlayers = [
    ...topPlayersSeniorCamp,
    ...topPlayersSeniorTaca,
    ...topPlayersSub18Camp,
    ...topPlayersSub18Taca
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { topPlayers, topPlayersSeniorCamp, topPlayersSeniorTaca, topPlayersSub18Camp, topPlayersSub18Taca };
}

/**
 * La Familia - Campeonato Sub18
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'la-familia-camp-sub18',
        name: 'La Familia',
        shortName: 'LF',
        color: '#8B0000',
        logo: '❤️',
        city: 'São Vicente',
        founded: 2018,
        arena: 'Pavilhão Polideportivo de São Vicente',
        category: 'Sub18',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Isaac Mendes', number: 10, position: 'Ala', height: '1.87m', age: 17, points: 19.5, rebounds: 5.8, assists: 3.8, photo: '🏀' },
        { id: 2, name: 'Samuel Costa', number: 8, position: 'Base', height: '1.76m', age: 16, points: 17.2, rebounds: 3.6, assists: 6.2, photo: '🏀' },
        { id: 3, name: 'Dylan Rodrigues', number: 12, position: 'Pivô', height: '1.96m', age: 18, points: 14.2, rebounds: 8.6, assists: 1.2, photo: '🏀' },
        { id: 4, name: 'Noah Santos', number: 7, position: 'Ala', height: '1.83m', age: 17, points: 14.1, rebounds: 4.4, assists: 3.3, photo: '🏀' },
        { id: 5, name: 'Enzo Lima', number: 5, position: 'Armador', height: '1.71m', age: 16, points: 11.2, rebounds: 2.2, assists: 6.8, photo: '🏀' },
        { id: 6, name: 'Luís Ferreira', number: 9, position: 'Ala', height: '1.81m', age: 17, points: 12.8, rebounds: 4.1, assists: 2.9, photo: '🏀' },
        { id: 7, name: 'João Pedro', number: 11, position: 'Pivô', height: '1.91m', age: 18, points: 10.5, rebounds: 7.5, assists: 0.8, photo: '🏀' },
        { id: 8, name: 'Miguel Alves', number: 6, position: 'Base', height: '1.74m', age: 16, points: 9.0, rebounds: 1.9, assists: 5.0, photo: '🏀' }
    ]);
}

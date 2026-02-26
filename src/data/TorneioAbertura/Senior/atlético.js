/**
 * Atlético - Torneio de Abertura Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'atlético-abertura-senior',
        name: 'Atlético',
        shortName: 'ATL',
        color: '#FF4444',
        logo: '🔴',
        city: 'São Vicente',
        founded: 2015,
        arena: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Torneio de Abertura'
    }, [
        { id: 1, name: 'Sérgio Santos', number: 10, position: 'Ala', height: '1.88m', age: 24, points: 19.8, rebounds: 5.5, assists: 4.0, photo: '🏀' },
        { id: 2, name: 'Jorge Martins', number: 8, position: 'Base', height: '1.78m', age: 22, points: 16.8, rebounds: 3.2, assists: 6.5, photo: '🏀' },
        { id: 3, name: 'Fernando Costa', number: 12, position: 'Pivô', height: '2.00m', age: 26, points: 14.5, rebounds: 9.0, assists: 1.2, photo: '🏀' },
        { id: 4, name: 'Paulo Ribeiro', number: 7, position: 'Ala', height: '1.85m', age: 23, points: 13.2, rebounds: 4.2, assists: 3.0, photo: '🏀' },
        { id: 5, name: 'Bruno Soares', number: 5, position: 'Armador', height: '1.75m', age: 21, points: 11.8, rebounds: 2.5, assists: 5.8, photo: '🏀' },
        { id: 6, name: 'Hugo Carvalho', number: 9, position: 'Ala', height: '1.86m', age: 25, points: 12.5, rebounds: 3.8, assists: 2.8, photo: '🏀' },
        { id: 7, name: 'Rui Tavares', number: 11, position: 'Pivô', height: '1.95m', age: 27, points: 10.2, rebounds: 7.0, assists: 1.5, photo: '🏀' },
        { id: 8, name: 'Miguel Rodrigues', number: 6, position: 'Base', height: '1.77m', age: 22, points: 9.8, rebounds: 2.2, assists: 5.0, photo: '🏀' }
    ]);
}

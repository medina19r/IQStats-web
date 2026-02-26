/**
 * Académica - Torneio de Abertura Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'academica-abertura-senior',
        name: 'Académica',
        shortName: 'ACA',
        color: '#1E3A5F',
        logo: '📚',
        city: 'Mindelo',
        founded: 2015,
        arena: 'Ginásio Académico',
        category: 'Senior',
        competition: 'Torneio de Abertura'
    }, [
        { id: 1, name: 'Pedro Lima', number: 11, position: 'Ala', height: '1.89m', age: 25, points: 20.5, rebounds: 5.8, assists: 4.2, photo: '🏀' },
        { id: 2, name: 'Gabriel Santos', number: 8, position: 'Base', height: '1.79m', age: 23, points: 17.2, rebounds: 3.2, assists: 6.8, photo: '🏀' },
        { id: 3, name: 'Hugo Costa', number: 13, position: 'Pivô', height: '1.97m', age: 27, points: 14.8, rebounds: 9.5, assists: 1.4, photo: '🏀' },
        { id: 4, name: 'Rodrigo Rodrigues', number: 6, position: 'Ala', height: '1.85m', age: 22, points: 15.2, rebounds: 4.5, assists: 3.8, photo: '🏀' },
        { id: 5, name: 'Tomé Ferreira', number: 5, position: 'Armador', height: '1.73m', age: 21, points: 12.5, rebounds: 2.2, assists: 7.2, photo: '🏀' },
        { id: 6, name: 'Martim Alves', number: 9, position: 'Ala', height: '1.83m', age: 24, points: 14.8, rebounds: 4.0, assists: 3.2, photo: '🏀' },
        { id: 7, name: 'Salvador Silva', number: 12, position: 'Pivô', height: '1.91m', age: 26, points: 11.2, rebounds: 7.8, assists: 0.9, photo: '🏀' },
        { id: 8, name: 'Franciscos Lima', number: 7, position: 'Base', height: '1.75m', age: 22, points: 11.8, rebounds: 2.5, assists: 5.5, photo: '🏀' }
    ]);
}

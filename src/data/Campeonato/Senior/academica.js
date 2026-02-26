/**
 * Académica - Campeonato Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'academica-camp-senior',
        name: 'Académica',
        shortName: 'ACA',
        color: '#1E3A5F',
        logo: '📚',
        city: 'Mindelo',
        founded: 2015,
        arena: 'Ginásio Académico',
        category: 'Senior',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'André Santos', number: 11, position: 'Ala', height: '1.90m', age: 25, points: 19.2, rebounds: 5.2, assists: 3.5, photo: '🏀' },
        { id: 2, name: 'Francisco Lopes', number: 8, position: 'Base', height: '1.80m', age: 23, points: 16.8, rebounds: 3.4, assists: 6.2, photo: '🏀' },
        { id: 3, name: 'Gabriel Costa', number: 13, position: 'Pivô', height: '1.98m', age: 27, points: 13.5, rebounds: 9.0, assists: 1.3, photo: '🏀' },
        { id: 4, name: 'Daniel Rodrigues', number: 6, position: 'Ala', height: '1.86m', age: 22, points: 14.5, rebounds: 4.5, assists: 3.8, photo: '🏀' },
        { id: 5, name: 'Tiago Ferreira', number: 5, position: 'Armador', height: '1.74m', age: 21, points: 11.2, rebounds: 2.0, assists: 7.5, photo: '🏀' },
        { id: 6, name: 'Henrique Lima', number: 9, position: 'Ala', height: '1.84m', age: 24, points: 15.0, rebounds: 4.2, assists: 3.0, photo: '🏀' },
        { id: 7, name: 'Leonardo Silva', number: 12, position: 'Pivô', height: '1.92m', age: 26, points: 10.8, rebounds: 7.5, assists: 0.9, photo: '🏀' },
        { id: 8, name: 'Rodrigo Alves', number: 7, position: 'Base', height: '1.76m', age: 22, points: 12.5, rebounds: 2.3, assists: 5.5, photo: '🏀' }
    ]);
}

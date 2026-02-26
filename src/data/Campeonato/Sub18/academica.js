/**
 * Académica - Campeonato Sub18
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'academica-camp-sub18',
        name: 'Académica',
        shortName: 'ACA',
        color: '#1E3A5F',
        logo: '📚',
        city: 'Mindelo',
        founded: 2015,
        arena: 'Ginásio Académico',
        category: 'Sub18',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Francisco Lopes', number: 9, position: 'Pivô', height: '1.92m', age: 18, points: 14.5, rebounds: 8.0, assists: 1.2, photo: '🏀' },
        { id: 2, name: 'Martim Santos', number: 7, position: 'Ala', height: '1.80m', age: 17, points: 15.2, rebounds: 4.2, assists: 3.0, photo: '🏀' },
        { id: 3, name: 'Diogo Costa', number: 10, position: 'Base', height: '1.74m', age: 16, points: 13.8, rebounds: 2.5, assists: 5.8, photo: '🏀' },
        { id: 4, name: 'José Rodrigues', number: 6, position: 'Ala', height: '1.78m', age: 17, points: 12.5, rebounds: 3.8, assists: 3.2, photo: '🏀' },
        { id: 5, name: 'Manuel Lima', number: 4, position: 'Armador', height: '1.68m', age: 16, points: 10.2, rebounds: 1.8, assists: 5.5, photo: '🏀' },
        { id: 6, name: 'Bernardo Ferreira', number: 8, position: 'Ala', height: '1.82m', age: 17, points: 11.8, rebounds: 3.5, assists: 2.5, photo: '🏀' },
        { id: 7, name: 'Santiago Oliveira', number: 11, position: 'Pivô', height: '1.88m', age: 18, points: 9.5, rebounds: 6.2, assists: 0.8, photo: '🏀' },
        { id: 8, name: 'Gabriel Alves', number: 5, position: 'Base', height: '1.70m', age: 16, points: 8.8, rebounds: 1.5, assists: 4.0, photo: '🏀' }
    ]);
}

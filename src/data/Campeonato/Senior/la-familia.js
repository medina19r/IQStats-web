/**
 * La Familia - Campeonato Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'la-familia-camp-senior',
        name: 'La Familia',
        shortName: 'LF',
        color: '#8B0000',
        logo: '❤️',
        city: 'São Vicente',
        founded: 2018,
        arena: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Carlos Mendes', number: 6, position: 'Base', height: '1.80m', age: 24, points: 21.8, rebounds: 4.0, assists: 6.5, photo: '🏀' },
        { id: 2, name: 'Isaac Rodrigues', number: 10, position: 'Ala', height: '1.88m', age: 26, points: 18.2, rebounds: 5.8, assists: 4.2, photo: '🏀' },
        { id: 3, name: 'Samuel Costa', number: 12, position: 'Pivô', height: '1.96m', age: 28, points: 14.5, rebounds: 9.2, assists: 1.5, photo: '🏀' },
        { id: 4, name: 'José Lima', number: 8, position: 'Ala', height: '1.86m', age: 23, points: 15.8, rebounds: 4.5, assists: 3.5, photo: '🏀' },
        { id: 5, name: 'Pedro Santos', number: 5, position: 'Armador', height: '1.75m', age: 22, points: 12.0, rebounds: 2.2, assists: 7.8, photo: '🏀' },
        { id: 6, name: 'Miguel Alves', number: 9, position: 'Ala', height: '1.85m', age: 25, points: 16.2, rebounds: 5.0, assists: 3.8, photo: '🏀' },
        { id: 7, name: 'Gabriel Oliveira', number: 11, position: 'Pivô', height: '1.94m', age: 27, points: 11.5, rebounds: 8.0, assists: 1.0, photo: '🏀' },
        { id: 8, name: 'Bruno Ferreira', number: 7, position: 'Base', height: '1.78m', age: 23, points: 10.5, rebounds: 2.0, assists: 5.2, photo: '🏀' }
    ]);
}

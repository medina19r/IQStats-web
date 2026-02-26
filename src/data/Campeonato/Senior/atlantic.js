/**
 * Atlantic - Campeonato Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'atlantic-camp-senior',
        name: 'Atlantic',
        shortName: 'ATL',
        color: '#00CED1',
        logo: '🌊',
        city: 'Santo Antão',
        founded: 2018,
        arena: 'Polidesportivo de Santo Antão',
        category: 'Senior',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Nuno Rodrigues', number: 5, position: 'Ala', height: '1.86m', age: 22, points: 17.5, rebounds: 4.8, assists: 3.2, photo: '🏀' },
        { id: 2, name: 'Daniel Costa', number: 8, position: 'Base', height: '1.76m', age: 21, points: 14.2, rebounds: 2.5, assists: 6.8, photo: '🏀' },
        { id: 3, name: 'Ricardo Silva', number: 10, position: 'Pivô', height: '1.94m', age: 25, points: 12.8, rebounds: 8.2, assists: 1.2, photo: '🏀' },
        { id: 4, name: 'João Lopes', number: 6, position: 'Ala', height: '1.84m', age: 23, points: 13.5, rebounds: 4.0, assists: 3.5, photo: '🏀' },
        { id: 5, name: 'Miguel Santos', number: 4, position: 'Armador', height: '1.72m', age: 20, points: 10.5, rebounds: 1.8, assists: 7.0, photo: '🏀' },
        { id: 6, name: 'Pedro Ferreira', number: 9, position: 'Ala', height: '1.87m', age: 24, points: 15.0, rebounds: 4.5, assists: 3.0, photo: '🏀' },
        { id: 7, name: 'Bruno Alves', number: 11, position: 'Pivô', height: '1.92m', age: 26, points: 11.0, rebounds: 7.2, assists: 0.8, photo: '🏀' },
        { id: 8, name: 'Tiago Lima', number: 7, position: 'Base', height: '1.75m', age: 22, points: 9.8, rebounds: 2.0, assists: 5.5, photo: '🏀' }
    ]);
}

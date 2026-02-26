/**
 * Cruzeiros - Campeonato Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'cruzeiros-camp-senior',
        name: 'Cruzeiros',
        shortName: 'CRZ',
        color: '#FFD700',
        logo: '🟡',
        city: 'Mindelo',
        founded: 2008,
        arena: 'Pavilhão do Mindelo',
        category: 'Senior',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Pedro Alves', number: 7, position: 'Ala', height: '1.85m', age: 23, points: 20.8, rebounds: 5.5, assists: 3.8, photo: '🏀' },
        { id: 2, name: 'Bruno Ferreira', number: 9, position: 'Armador', height: '1.75m', age: 21, points: 15.5, rebounds: 2.8, assists: 8.2, photo: '🏀' },
        { id: 3, name: 'Jorge Silva', number: 11, position: 'Pivô', height: '1.96m', age: 25, points: 14.2, rebounds: 8.5, assists: 1.4, photo: '🏀' },
        { id: 4, name: 'Carlos Mendes', number: 8, position: 'Ala', height: '1.88m', age: 24, points: 16.5, rebounds: 4.8, assists: 3.2, photo: '🏀' },
        { id: 5, name: 'Nuno Rodrigues', number: 5, position: 'Base', height: '1.76m', age: 22, points: 13.2, rebounds: 2.5, assists: 6.5, photo: '🏀' },
        { id: 6, name: 'Samuel Costa', number: 10, position: 'Ala', height: '1.86m', age: 26, points: 17.8, rebounds: 5.2, assists: 4.0, photo: '🏀' },
        { id: 7, name: 'Miguel Santos', number: 12, position: 'Pivô', height: '1.94m', age: 27, points: 12.5, rebounds: 7.8, assists: 1.1, photo: '🏀' },
        { id: 8, name: 'Diogo Lima', number: 6, position: 'Base', height: '1.78m', age: 21, points: 11.0, rebounds: 2.2, assists: 5.8, photo: '🏀' }
    ]);
}

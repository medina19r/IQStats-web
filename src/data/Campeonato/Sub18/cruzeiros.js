/**
 * Cruzeiros - Campeonato Sub18
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'cruzeiros-camp-sub18',
        name: 'Cruzeiros',
        shortName: 'CRZ',
        color: '#FFD700',
        logo: '🟡',
        city: 'Mindelo',
        founded: 2008,
        arena: 'Pavilhão do Mindelo',
        category: 'Sub18',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Samuel Oliveira', number: 7, position: 'Ala', height: '1.80m', age: 17, points: 17.8, rebounds: 4.2, assists: 3.5, photo: '🏀' },
        { id: 2, name: 'Gabriel Costa', number: 9, position: 'Base', height: '1.72m', age: 16, points: 15.5, rebounds: 2.5, assists: 6.2, photo: '🏀' },
        { id: 3, name: 'Pedro Lima', number: 11, position: 'Pivô', height: '1.88m', age: 18, points: 13.2, rebounds: 7.0, assists: 1.2, photo: '🏀' },
        { id: 4, name: 'João Santos', number: 6, position: 'Ala', height: '1.76m', age: 17, points: 13.8, rebounds: 3.5, assists: 3.2, photo: '🏀' },
        { id: 5, name: 'Miguel Rodrigues', number: 4, position: 'Armador', height: '1.68m', age: 16, points: 10.8, rebounds: 1.8, assists: 5.5, photo: '🏀' },
        { id: 6, name: 'Bruno Alves', number: 10, position: 'Ala', height: '1.82m', age: 17, points: 14.5, rebounds: 4.0, assists: 2.8, photo: '🏀' },
        { id: 7, name: 'Diogo Ferreira', number: 12, position: 'Pivô', height: '1.86m', age: 18, points: 11.0, rebounds: 6.5, assists: 0.9, photo: '🏀' },
        { id: 8, name: 'Tiago Silva', number: 5, position: 'Base', height: '1.70m', age: 16, points: 9.2, rebounds: 1.5, assists: 4.2, photo: '🏀' }
    ]);
}

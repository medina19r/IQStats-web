/**
 * Todos Blacks - Campeonato Senior
 * Team Information and Players
 */

// Register team directly without variable declaration
if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'todos-blacks-camp-senior',
        name: 'Todos Blacks',
        shortName: 'TB',
        color: '#000000',
        logo: '⚫',
        city: 'São Vicente',
        founded: 2010,
        arena: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Campeonato'
    }, [
        { id: 1, name: 'Ricardo Pires', number: 10, position: 'Ala', height: '1.95m', age: 26, points: 22.3, rebounds: 7.1, assists: 3.5, photo: '🏀' },
        { id: 2, name: 'Marco Silva', number: 8, position: 'Base', height: '1.82m', age: 24, points: 18.5, rebounds: 4.2, assists: 6.8, photo: '🏀' },
        { id: 3, name: 'Paulo Jorge', number: 12, position: 'Pivô', height: '2.05m', age: 28, points: 15.8, rebounds: 10.2, assists: 1.9, photo: '🏀' },
        { id: 4, name: 'Ricardo Santos', number: 7, position: 'Ala', height: '1.90m', age: 22, points: 16.2, rebounds: 5.5, assists: 4.1, photo: '🏀' },
        { id: 5, name: 'Bruno Ferreira', number: 5, position: 'Armador', height: '1.78m', age: 20, points: 12.4, rebounds: 2.8, assists: 7.2, photo: '🏀' },
        { id: 6, name: 'João Lima', number: 9, position: 'Ala', height: '1.88m', age: 25, points: 14.7, rebounds: 4.9, assists: 3.8, photo: '🏀' },
        { id: 7, name: 'Miguel Rodrigues', number: 11, position: 'Pivô', height: '1.98m', age: 27, points: 11.3, rebounds: 8.6, assists: 1.2, photo: '🏀' },
        { id: 8, name: 'Pedro Costa', number: 6, position: 'Base', height: '1.80m', age: 23, points: 10.8, rebounds: 2.5, assists: 5.9, photo: '🏀' }
    ]);
}

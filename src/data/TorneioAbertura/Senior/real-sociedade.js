/**
 * Real Sociedade - Torneio de Abertura Senior
 * Team Information and Players
 */

if (typeof registerTeam === 'function') {
    registerTeam({
        id: 'real-sociedade-abertura-senior',
        name: 'Real Sociedade',
        shortName: 'RSO',
        color: '#1E7D32',
        logo: '🟢',
        city: 'São Vicente',
        founded: 2012,
        arena: 'Pavilhão Polideportivo de São Vicente',
        category: 'Senior',
        competition: 'Torneio de Abertura'
    }, [
        { id: 1, name: 'Diogo Nascimento', number: 10, position: 'Ala', height: '1.88m', age: 24, points: 20.2, rebounds: 5.8, assists: 4.2, photo: '🏀' },
        { id: 2, name: 'Gustavo Miranda', number: 8, position: 'Base', height: '1.78m', age: 22, points: 17.5, rebounds: 3.5, assists: 6.8, photo: '🏀' },
        { id: 3, name: 'Bernardo Faria', number: 12, position: 'Pivô', height: '2.00m', age: 26, points: 15.2, rebounds: 9.5, assists: 1.5, photo: '🏀' },
        { id: 4, name: 'Matheus Gomes', number: 7, position: 'Ala', height: '1.85m', age: 23, points: 14.0, rebounds: 4.5, assists: 3.2, photo: '🏀' },
        { id: 5, name: 'Daniel Marques', number: 5, position: 'Armador', height: '1.75m', age: 21, points: 12.0, rebounds: 2.8, assists: 5.5, photo: '🏀' },
        { id: 6, name: 'Lucas Rodrigues', number: 9, position: 'Ala', height: '1.86m', age: 25, points: 13.2, rebounds: 4.0, assists: 2.8, photo: '🏀' },
        { id: 7, name: 'Vinícius Santos', number: 11, position: 'Pivô', height: '1.95m', age: 27, points: 11.0, rebounds: 7.8, assists: 1.2, photo: '🏀' },
        { id: 8, name: 'Gabriel Costa', number: 6, position: 'Base', height: '1.77m', age: 22, points: 10.5, rebounds: 2.5, assists: 5.2, photo: '🏀' }
    ]);
}

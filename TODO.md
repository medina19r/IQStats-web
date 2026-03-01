# TODO - Update Sub18 Teams in Campeonato

## Task: Show only 3 teams (Allblacks, Cruzeiros, La Familia) in Sub18 category

### Files Edited:

- [x] 1. src/js/copa.js - Added filtering logic for Sub18
- [x] 2. Campeonato.html - Updated standings and meta for Sub18

### Teams to keep for Sub18:

- Allblacks (Todos Blacks)
- Cruzeiros
- La Familia

### Changes Made:

1. In src/js/copa.js:
   - Added sub18Teams array with the 3 allowed teams
   - Added currentCategory variable to track selected category
   - Modified renderGames() to filter games for Sub18 (only show matches between the 3 teams)
   - Updated category button click handler to update currentCategory and re-render games

2. In Campeonato.html:
   - Created seniorStandings (6 teams) and sub18Standings (3 teams) arrays
   - Modified renderRegularStandings() to show different teams based on category
   - Updated meta info to show "3 Equipas" for Sub18
   - Updated playoffs info to show "Top 2 classificadas" for Sub18
   - Added category button click handler that syncs with the games section

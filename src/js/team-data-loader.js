/**
 * ARBSV - Team Data Loader
 * Loads team and player data from JS files using registerTeam callback
 */

class TeamDataLoader {
    constructor() {
        this.teams = {};
        this.loaded = false;
        this.pendingTeams = [];
        this.registerTeamCallback = this.registerTeam.bind(this);
    }

    /**
     * Register a team (called by team JS files)
     */
    registerTeam(teamInfo, players) {
        const team = {
            ...teamInfo,
            players: players.map(p => ({
                ...p,
                isTopPlayer: p.isTopPlayer || false
            }))
        };
        this.pendingTeams.push(team);
    }

    /**
     * Load a single team's JS file
     */
    async loadTeamJS(competition, category, teamId) {
        const path = `src/data/${competition}/${category}/${teamId}.js`;
        
        // Reset pending teams for this load
        this.pendingTeams = [];
        
        return new Promise((resolve) => {
            // Create global registerTeam function
            window.registerTeam = this.registerTeamCallback;
            
            const script = document.createElement('script');
            script.src = path;
            script.onload = () => {
                // Find team by matching category (case-insensitive)
                const team = this.pendingTeams.find(t => 
                    t.category?.toLowerCase() === category.toLowerCase()
                );
                resolve(team || null);
                script.remove();
            };
            script.onerror = () => {
                console.error(`Error loading ${path}`);
                resolve(null);
                script.remove();
            };
            document.head.appendChild(script);
        });
    }

    /**
     * Load all teams for a competition and category
     */
    async loadTeams(competition, category, teamIds) {
        const teams = [];
        
        for (const teamId of teamIds) {
            const team = await this.loadTeamJS(competition, category, teamId);
            if (team) {
                teams.push(team);
            }
        }
        
        return teams;
    }

    /**
     * Load all teams for Campeonato Senior
     */
    async loadCampeonatoSenior() {
        const teamIds = ['todos-blacks', 'academica', 'cruzeiros', 'la-familia', 'atlantic'];
        return await this.loadTeams('Campeonato', 'Senior', teamIds);
    }

    /**
     * Load all teams for Torneio Abertura Senior
     */
    async loadTorneioAberturaSenior() {
        const teamIds = ['todos-blacks', 'academica', 'cruzeiros', 'la-familia', 'atlético', 'real-sociedade'];
        return await this.loadTeams('TorneioAbertura', 'Senior', teamIds);
    }

    /**
     * Load all teams for Torneio Abertura Sub18
     */
    async loadTorneioAberturaSub18() {
        const teamIds = ['todos-blacks', 'academica', 'cruzeiros', 'la-familia', 'atlético', 'real-sociedade'];
        return await this.loadTeams('TorneioAbertura', 'Sub18', teamIds);
    }

    /**
     * Get team by ID from loaded data
     */
    getTeam(teamId, competition = 'Campeonato', category = 'Senior') {
        const key = `${competition}-${category}`;
        return this.teams[key]?.find(t => t.id.includes(teamId)) || null;
    }

    /**
     * Get all teams for a competition
     */
    getTeams(competition = 'Campeonato', category = 'Senior') {
        const key = `${competition}-${category}`;
        return this.teams[key] || [];
    }

    /**
     * Load all data
     */
    async loadAll() {
        const [abertSenior, abertSub18] = await Promise.all([
            this.loadTorneioAberturaSenior(),
            this.loadTorneioAberturaSub18()
        ]);
        
        this.teams = {
            'TorneioAbertura-Senior': abertSenior,
            'TorneioAbertura-Sub18': abertSub18
        };
        
        this.loaded = true;
        console.log('All teams loaded:', this.teams);
        return this.teams;
    }
}

// Export globally
window.TeamDataLoader = TeamDataLoader;

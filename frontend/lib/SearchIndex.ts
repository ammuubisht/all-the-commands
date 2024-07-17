// CommandSearch.ts

import fuzzysort from 'fuzzysort';
import { commands } from '../git-commands';

type Command = {
    name: string;
    description: string;
    category: string;
    keywords: string[];
};

export class CommandSearch {
    private commands: Command[];
    private popularity: Map<string, number>;

    constructor() {
        this.commands = [];
        this.popularity = new Map();
    }

    async initializeCommands(): Promise<void> {
        // Normally, this would fetch from an API. For now, we'll define commands here.
        this.commands = commands;
        this.commands.forEach((cmd) => this.popularity.set(cmd.name, 0));
    }

    search(query: string, limit: number = 5): Command[] {
        const fuzzyResults = fuzzysort.go(query, this.commands, {
            keys: ['name', 'description', 'keywords'],
            threshold: -10000, // Allow more fuzzy matches
            limit: limit * 2, // Get more results than needed for popularity sorting
        });

        const results = fuzzyResults.map((result) => ({
            ...result.obj,
            score:
                result.score + (this.popularity.get(result.obj.name) || 0) * 10,
        }));

        results.sort((a, b) => b.score - a.score);

        return results.slice(0, limit);
    }

    recordUsage(commandName: string): void {
        const count = this.popularity.get(commandName) || 0;
        this.popularity.set(commandName, count + 1);
    }
}

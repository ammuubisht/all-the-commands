import Fuse from "fuse.js";
import { commands } from "../git-commands.js";

const options = {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.5 },
  ],
  threshold: 0.4,
  distance: 50,
  minMatchCharLength: 2,
  useExtendedSearch: true,
  findAllMatches: true,
  includeScore: true,
  ignoreLocation: true,
};

// Create and export the index
const index = Fuse.createIndex(options.keys, commands);

export { commands, options, index };

import { useState, useCallback, useMemo } from "react";
import debounce from "lodash/debounce";
import Fuse from "fuse.js";
import { commands, options, index } from "@/lib/SearchIndex";
import { AiOutlineEnter } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchCommands({
  handleSearchItemClick,
}: {
  handleSearchItemClick: any;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { name: string; description: string; category: string; tags: string[] }[]
  >([]);

  // Create a Fuse instance for fuzzy searching
  const fuse = useMemo(() => new Fuse(commands, options, index), []);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      const searchResults = fuse.search(searchQuery);
      setResults(searchResults.map((result) => result.item));
    }, 300),
    [fuse]
  );

  const handleSearch = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div className="h-4/5 bg-red-500">
      <div className="relative w-full">
        <Input
          className="hover:bg-gray-50 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 pl-10 "
          type="text"
          placeholder="git commit..."
          value={query}
          onChange={handleSearch}
        />
        <MagnifyingGlassIcon className="absolute left-2 bottom-4 ml-2" />
      </div>
      {results.length > 0 && (
        <div
          id="search-results"
          style={{ maxHeight: "20rem", overflowY: "auto", marginTop: "0.3rem" }}
          className="border bottom-0 w-full bg-blue-200 rounded"
        >
          {results.map((command, index) => {
            return (
              <div
                key={index}
                style={{ padding: "0.8rem" }}
                className="flex items-center hover:bg-gray-50 cursor-pointer gap-2"
                onClick={() => handleSearchItemClick}
              >
                <AiOutlineEnter />
                <div className="w-3/4">
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {command.name}
                  </code>
                  <p
                    style={{ marginTop: "0.5rem" }}
                    className="text-xs text-muted-foreground"
                  >
                    {command.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

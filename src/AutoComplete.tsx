import React, { useState, useEffect, ChangeEvent } from 'react';

interface AutoCompleteProps {
  suggestions: string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    // Filter suggestions based on user input
    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
    setFilteredSuggestions(filtered);
  }, [inputValue, suggestions]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    // Hide suggestions on input blur
    setShowSuggestions(false);
  };

  return (
    <div>
      {showSuggestions && (
        <div className="flex items-center flex-wrap max-w-lg gap-y-1 gap-x-1">
          {filteredSuggestions.map((suggestion) => (
            <div
              className="cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
      <div className="flex relative items-center justify-center">
        <input
          className="mt-2 border-[2px] px-2 py-2 rounded-lg active:outline-none focus:outline-none w-full"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Start typing..."
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search absolute right-2 cursor-pointer mt-1"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
};

export default AutoComplete;

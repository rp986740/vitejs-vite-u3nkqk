import React, { useState, useEffect, ChangeEvent } from 'react';

interface AutoCompleteProps {
  suggestions: string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    const filtered = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
    setFilteredSuggestions(filtered.slice(0, 10));
  }, [inputValue, suggestions]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowSuggestions(event.target.value.trim().split(/\s+/).length >= 1);
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
        <div className="flex items-center flex-wrap max-w-lg gap-y-1 gap-x-1 transition-all duration-100 delay-100 ease-in-out">
          {filteredSuggestions.map((suggestion) => (
            <div
              className="cursor-pointer bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <p className='text-red-600 font-semibold text-sm hover:scale-125'>{suggestion}</p>
            </div>
          ))}
        </div>
      )}

    <div className="relative mt-2">
      <label htmlFor="Search" className="sr-only"> Search </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="Search for..."
        className="border px-2 w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
    </div>
  );
};

export default AutoComplete;

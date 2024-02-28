import React, {createContext, useState, useContext, FC } from "react";

interface ISearchContext {
  searchTerm: string;
  updateSearchTerm: (term: string) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<ISearchContext | "">("");

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
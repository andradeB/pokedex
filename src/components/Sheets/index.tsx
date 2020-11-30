import React, { createContext, useState } from 'react';
import { SortSheet } from './SortSheet';

type SheetMethod = (state: boolean) => void;

export const SheetsContext = createContext<{
  sortVisible: SheetMethod;
  filterVisible: SheetMethod;
  generationVisible: SheetMethod;
}>();

export const SheetsProvider: React.FC = ({ children }) => {
  const [showSort, sortVisible] = useState(false);
  const [showFilter, filterVisible] = useState(false);
  const [showGeneration, generationVisible] = useState(false);

  return (
    <SheetsContext.Provider
      value={{
        sortVisible,
        filterVisible,
        generationVisible,
      }}
    >
      {children}
      <SortSheet visible={showSort} onHide={() => sortVisible(false)} />
      <SortSheet visible={showFilter} onHide={() => filterVisible(false)} />
      <SortSheet visible={showGeneration} onHide={() => generationVisible(false)} />
    </SheetsContext.Provider>
  );
};

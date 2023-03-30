import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import type { ShortedLink } from '@types';

const initialState: ShortedLink[] = [];

type Context = {
  links: ShortedLink[];
  setLinks: Dispatch<SetStateAction<ShortedLink[]>>;
};
export const LinksContext = createContext<Context | null>(null);

function LinksProvider({ children }: PropsWithChildren) {
  const [links, setLinks] = useState<ShortedLink[]>(() => {
    const linksInLocalStorage = localStorage.getItem('links');
    if (linksInLocalStorage) return JSON.parse(linksInLocalStorage);
    return initialState;
  });
  const value = useMemo(() => ({ links, setLinks }), [links]);

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
}

export default LinksProvider;

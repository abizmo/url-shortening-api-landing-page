import { useContext } from 'react';

import { LinksContext } from '@context';
import type { ShortedLink } from '@types';

function useLinks() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error('useLinks must be used within a Provider');
  }

  const { links, setLinks } = context;

  const addLinks = (newLink: Omit<ShortedLink, 'id'>) =>
    setLinks([...links, { ...newLink, id: new Date().toISOString() }]);

  return {
    links,
    addLinks,
  };
}

export default useLinks;

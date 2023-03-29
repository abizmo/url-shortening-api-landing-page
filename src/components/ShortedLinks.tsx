/* eslint-disable jsx-a11y/anchor-is-valid */
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config';

import { Link } from '@components';
import { useLinks, useMediaQuery } from '@hooks';

const { theme } = resolveConfig(tailwindConfig);

function ShortedLinks(): JSX.Element {
  const { links } = useLinks();
  const isDesktop = useMediaQuery(`(min-width: ${theme.screens.lg}`);

  const handleCopy = (shortedUrl: string) =>
    navigator.clipboard.writeText(shortedUrl);

  return (
    <ul>
      {links.map(({ url, shortedUrl }) => (
        <li key={url} className='mb-6 last:mb-32'>
          <div className='bg-neutral-white rounded-md lg:px-6 lg:py-4 lg:flex lg:justify-between items-center text-md tracking-wide lg:text-xl'>
            <div className='px-4 pt-4 pb-3 lg:px-0 lg:py-0 border-b border-b-neutral-gray lg:border-b-0'>
              <p>{url}</p>
            </div>
            <div className='p-4 lg:p-0 lg:flex lg:gap-6 lg:items-center'>
              <p className='mb-4 lg:mb-0 text-primary-cyan lg:text-right'>
                {shortedUrl}
              </p>
              {/* TODO: change button when copied */}
              <Link
                variant='primary'
                size={isDesktop ? 'medium' : 'full'}
                shape='square'
                onClick={() => handleCopy(shortedUrl)}
              >
                Copy
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShortedLinks;

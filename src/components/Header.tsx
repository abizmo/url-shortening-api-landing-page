import { PropsWithChildren, useState } from 'react';

import useMediaQuery from '../hooks/useMediaQuery';

function Header({ children }: PropsWithChildren): JSX.Element {
  return (
    <header className='py-10 lg:py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex gap-12 justify-between lg:justify-start items-center relative'>
          {children}
        </div>
      </div>
    </header>
  );
}

function HeaderLogo({ children }: PropsWithChildren) {
  return <a href='/'>{children}</a>;
}

Header.Logo = HeaderLogo;

function HeaderNavWrapper({ children }: PropsWithChildren) {
  const [showMenu, setShowMenu] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleOpenMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      {isDesktop ? (
        <nav
          className='flex-1 flex justify-between flex-row-reverse items-center text-neutral-grayish-violet'
          id='navigation'
        >
          {children}
        </nav>
      ) : (
        <button
          aria-controls='navigation'
          aria-expanded={showMenu}
          type='button'
          onClick={handleOpenMenu}
        >
          <div className='grid gap-2 w-8 h-6 grid-rows-3'>
            <div className='w-8 bg-neutral-grayish-violet' />
            <div className='w-8 bg-neutral-grayish-violet' />
            <div className='w-8 bg-neutral-grayish-violet' />
          </div>
          <span className='sr-only'>Menu</span>
        </button>
      )}
      {!isDesktop && showMenu && (
        <nav
          className='flex absolute top-full bg-primary-violet inset-x-0 mt-6 px-6 flex-col-reverse divide-y divide-y-reverse divide-neutral-white divide-opacity-40 text-neutral-white rounded-lg'
          id='navigation'
        >
          {children}
        </nav>
      )}
    </>
  );
}

Header.NavWrapper = HeaderNavWrapper;

interface HeaderNavProps {
  ariaLabel: string;
}

function HeaderNav({ ariaLabel, children }: PropsWithChildren<HeaderNavProps>) {
  return (
    <ul
      aria-label={ariaLabel}
      className='grid gap-4 py-8 lg:text-base lg:tracking-tighter lg:flex lg:gap-10 lg:items-center'
    >
      {children}
    </ul>
  );
}

Header.Nav = HeaderNav;

function HeaderNavItem({ children }: PropsWithChildren) {
  return <li className='[&>*]:mx-auto'>{children}</li>;
}

Header.NavItem = HeaderNavItem;

export default Header;

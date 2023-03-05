import { PropsWithChildren, useState } from 'react';

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

function HeaderNavWrapper({ children }: PropsWithChildren) {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <button
        className='lg:hidden'
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
      <nav
        className={`${
          showMenu ? 'flex' : 'hidden'
        } absolute top-full bg-primary-violet inset-x-0 mt-6 px-6 flex-col-reverse divide-y divide-y-reverse divide-neutral-white divide-opacity-40 text-neutral-white rounded-lg lg:flex-1 lg:flex lg:justify-between lg:flex-row-reverse lg:items-center lg:bg-neutral-white lg:text-neutral-grayish-violet lg:static lg:mt-0 lg:px-0`}
        id='navigation'
      >
        {children}
      </nav>
    </>
  );
}

interface HeaderNavProps {
  ariaLabel: string;
}

function HeaderNav({ ariaLabel, children }: PropsWithChildren<HeaderNavProps>) {
  return (
    <ul
      aria-label={ariaLabel}
      className='grid gap-4 py-8 text-center font-bold lg:flex lg:gap-10 lg:items-center'
    >
      {children}
    </ul>
  );
}

function HeaderNavItem({ children }: PropsWithChildren) {
  return <li>{children}</li>;
}
Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;
Header.NavItem = HeaderNavItem;
Header.NavWrapper = HeaderNavWrapper;

export default Header;

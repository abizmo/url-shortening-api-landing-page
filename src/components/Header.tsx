import { useState } from 'react';

function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='py-10 lg:py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex gap-12 justify-between lg:justify-start items-center relative'>
          <a href='/'>
            <svg className='w-30 h-9'>
              <use xlinkHref='images/logo.svg#logo' />
            </svg>
          </a>
          <button
            className='lg:hidden'
            aria-controls='primary-navigation'
            aria-expanded='false'
            type='button'
            onClick={() => setShowMenu((prev) => !prev)}
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
              showMenu ? 'block' : 'hidden'
            } absolute top-full bg-primary-violet inset-x-0 mt-6 px-6 divide-y divide-neutral-white divide-opacity-40 text-neutral-white rounded-lg lg:flex-1 lg:flex lg:justify-between lg:items-center lg:bg-neutral-white lg:text-neutral-grayish-violet lg:static lg:mt-0`}
            id='primary-navigation'
          >
            <ul
              aria-label='Sections'
              className='grid gap-4 py-8 text-center font-bold lg:flex lg:gap-10 lg:items-center'
            >
              <li>
                <a
                  href='#features'
                  className='block py-2 lg:hover:text-neutral-dark-violet'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='#pricing'
                  className='block py-2 lg:hover:text-neutral-dark-violet'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#resources'
                  className='block py-2 lg:hover:text-neutral-dark-violet'
                >
                  Resources
                </a>
              </li>
            </ul>
            <ul
              aria-label='Actions'
              className='grid gap-4 py-8 text-center font-bold lg:flex lg:gap-10 lg:items-center'
            >
              <li>
                <a
                  href='/login'
                  className='block py-2 lg:hover:text-neutral-dark-violet'
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href='/sign-up'
                  className='block py-4 bg-primary-cyan text-neutral-white rounded-full px-8 hover:bg-opacity-70'
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

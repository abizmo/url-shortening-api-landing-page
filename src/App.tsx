import Attribution from './components/Attribution';
import Header from './components/Header';
import Link from './components/Link';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

import './App.css';

function App(): JSX.Element {
  return (
    <>
      <Header>
        <Header.Logo>
          <svg className='w-30 h-9 fill-neutral-dark-violet'>
            <use xlinkHref='images/logo.svg#logo' />
          </svg>
        </Header.Logo>
        <Header.NavWrapper>
          <Header.Nav ariaLabel='Actions'>
            <Header.NavItem>
              <Link href='/login'>Login</Link>
            </Header.NavItem>
            <Header.NavItem>
              <Link href='/sign-up' variant='primary' size='full'>
                Sign Up
              </Link>
            </Header.NavItem>
          </Header.Nav>
          <Header.Nav ariaLabel='Sections'>
            <Header.NavItem>
              <Link href='/features'>Features</Link>
            </Header.NavItem>
            <Header.NavItem>
              <Link href='/pricing'>Pricing</Link>
            </Header.NavItem>
            <Header.NavItem>
              <Link href='/resources'>Resources</Link>
            </Header.NavItem>
          </Header.Nav>
        </Header.NavWrapper>
      </Header>
      <main>
        <section className='grid gap-9 lg:grid-cols-2-center lg:items-center lg:gap-0 mb-40 lg:mb-36'>
          <div className='hero-bg' />
          <div className='text-center px-6 lg:col-start-2 lg:row-start-1 lg:text-left'>
            <Title>More than just shorter links</Title>
            <Paragraph>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </Paragraph>
            <Link href='/sign-up' variant='primary' className='mx-auto lg:mx-0'>
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <footer className='bg-neutral-dark-violet text-neutral-white'>
        <div className='container mx-auto px-6 py-14 grid gap-14 justify-items-center'>
          <svg className='w-30 h-9 fill-neutral-white'>
            <use xlinkHref='images/logo.svg#logo' />
          </svg>
          {/* TODO: refactor links */}
          <div className='grid gap-12 justify-items-center'>
            <div className='text-center'>
              <h2 className='mb-7 text-md font-bold tracking-tight'>
                Features
              </h2>
              <ul className='[&>:not(:last-child)]:mb-4 text-neutral-gray text-md tracking-tightest'>
                <li>
                  <a href='/'>Link Shortening</a>
                </li>
                <li>
                  <a href='/'>Branded Links</a>
                </li>
                <li>
                  <a href='/'>Analytics</a>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <h2 className='mb-7 text-md font-bold tracking-tight'>
                Resources
              </h2>
              <ul className='[&>:not(:last-child)]:mb-4 text-neutral-gray text-md tracking-tightest'>
                <li>
                  <a href='/'>Blog</a>
                </li>
                <li>
                  <a href='/'>Developers</a>
                </li>
                <li>
                  <a href='/'>Suppor</a>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <h2 className='mb-7 text-md font-bold tracking-tight'>Company</h2>
              <ul className='[&>:not(:last-child)]:mb-4 text-neutral-gray text-md tracking-tightest'>
                <li>
                  <a href='/'>About</a>
                </li>
                <li>
                  <a href='/'>Our Team</a>
                </li>
                <li>
                  <a href='/'>Careers</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* TODO: insert icons */}
          <div>icons</div>
        </div>
      </footer>
      <Attribution name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </>
  );
}

export default App;

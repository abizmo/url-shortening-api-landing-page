import Footer from './components/Footer';
import Header from './components/Header';
import Link from './components/Link';
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <Header>
        <Header.Logo>
          <svg className='w-30 h-9'>
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
        <section className='grid gap-9 lg:grid-cols-2-center lg:items-center lg:gap-0'>
          <div className='hero-bg' />
          <div className='text-center pl-6 lg:col-start-2 lg:row-start-1 lg:text-left'>
            {/* TODO: config fonts size in theme */}
            <h1 className='text-neutral-dark-violet font-bold text-4xl tracking-tight mb-3 lg:text-7xl lg:tracking-tighter'>
              More than just shorter links
            </h1>
            <p className='text-neutral-grayish-violet mb-8 lg:text-2xl lg:tracking-tighter lg:max-w-lg lg:mb-9'>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Link href='/sign-up' variant='primary' className='mx-auto lg:mx-0'>
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </>
  );
}

export default App;

import Footer from './components/Footer';
import Header from './components/Header';
import Link from './components/Link';
import Illustration from './assets/images/illustration-working.svg';

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
        <section className='grid gap-9 lg:grid-cols-2 lg:items-center lg:container lg:mx-auto'>
          <div className='overflow-hidden lg:col-start-2'>
            {/* TODO: fix image position */}
            <img
              src={Illustration}
              alt='working'
              className='ml-6 h-[300px] max-w-none lg:h-[480px] lg:ml-12'
            />
          </div>
          <div className='text-center px-6 lg:col-start-1 lg:row-start-1 lg:text-left'>
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

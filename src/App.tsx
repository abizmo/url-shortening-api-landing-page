import Footer from './components/Footer';
import Header from './components/Header';
import Link from './components/Link';
import './App.css';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

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
      <Footer name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </>
  );
}

export default App;

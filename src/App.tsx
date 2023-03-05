import Footer from './components/Footer';
import Header from './components/Header';
import Link from './components/Link';

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
              <Link to='/login'>Login</Link>
            </Header.NavItem>
            <Header.NavItem>
              <a
                href='/sign-up'
                className='block py-4 bg-primary-cyan text-neutral-white rounded-full px-8 lg:hover:bg-opacity-70'
              >
                Sign Up
              </a>
            </Header.NavItem>
          </Header.Nav>
          <Header.Nav ariaLabel='Sections'>
            <Header.NavItem>
              <Link to='/features'>Features</Link>
            </Header.NavItem>
            <Header.NavItem>
              <Link to='/pricing'>Pricing</Link>
            </Header.NavItem>
            <Header.NavItem>
              <Link to='/resources'>Resources</Link>
            </Header.NavItem>
          </Header.Nav>
        </Header.NavWrapper>
      </Header>
      <Footer name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </>
  );
}

export default App;

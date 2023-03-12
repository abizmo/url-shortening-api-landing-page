import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config';

import { sitemap, socials } from '@assets/data';
import {
  Attribution,
  Footer,
  Header,
  Link,
  Paragraph,
  Title,
} from '@components';
import { useMediaQuery } from '@hooks';

import './App.css';

const { theme } = resolveConfig(tailwindConfig);

function App(): JSX.Element {
  const isDesktop = useMediaQuery(`(min-width: ${theme.screens.lg}`);

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
              <Link
                href='/sign-up'
                variant='primary'
                size={isDesktop ? 'small' : 'full'}
                className={isDesktop ? 'tracking-tighter' : 'tracking-tight'}
              >
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
            <Title element='h1' className='mb-3 lg:mb-0'>
              More than just shorter links
            </Title>
            <Paragraph>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </Paragraph>
            <Link
              href='/sign-up'
              variant='primary'
              size='medium'
              className='mx-auto lg:mx-0'
            >
              Get Started
            </Link>
          </div>
        </section>
        {/* TODO: add background pattern */}
        <section className='bg-primary-violet py-24 lg:py-14'>
          <Title
            element='h2'
            color='light'
            align='center'
            className='mb-6 lg:mb-8'
          >
            Boost your links today
          </Title>
          {/* TODO: fix button hover when it's over dark bg */}
          <Link
            href='/sign-up'
            variant='primary'
            size='medium'
            className='mx-auto text-xl'
          >
            Get Started
          </Link>
        </section>
      </main>
      <Footer>
        <Footer.Logo>
          <svg className='w-30 h-9'>
            <use xlinkHref='images/logo.svg#logo' />
          </svg>
        </Footer.Logo>
        <Footer.Sitemap>
          {sitemap.map(({ title, links }) => (
            <Footer.SitemapGroup key={title} title={title}>
              {links.map(({ label, url }) => (
                <Footer.SitemapItem key={label}>
                  <a href={url}>{label}</a>
                </Footer.SitemapItem>
              ))}
            </Footer.SitemapGroup>
          ))}
        </Footer.Sitemap>
        <Footer.Socials>
          {socials.map(({ brand, href }) => (
            <Footer.SocialsLink key={brand} href={href}>
              <svg className='w-6 h-6'>
                <use xlinkHref={`images/socials-icons.svg#${brand}`} />
              </svg>
            </Footer.SocialsLink>
          ))}
        </Footer.Socials>
      </Footer>
      <Attribution name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </>
  );
}

export default App;

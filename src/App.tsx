/* eslint-disable jsx-a11y/anchor-is-valid */
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config';

import { sitemap, socials, statistics } from '@assets/data';
import {
  Footer,
  Header,
  Link,
  Paragraph,
  ShortedLinks,
  ShortenBox,
  Statistics,
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
            <Paragraph size='lg' className='mb-8 lg:mb-9'>
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
        <section className='bg-primary-violet/[.08] pb-20 lg:pb-30'>
          <div className='container mx-auto px-6'>
            <div className='relative pt-32'>
              <div className='absolute inset-x-0 top-0 -translate-y-1/2'>
                <ShortenBox />
              </div>
              <div className='mb-10 lg:mb-32'>
                <ShortedLinks />
              </div>
            </div>
            <Title
              element='h2'
              align='center'
              color='dark'
              className='mb-6 lg:mb-5'
            >
              Advanced Statistics
            </Title>
            <Paragraph
              align='center'
              className='mb-20 lg:mb-24 lg:max-w-lg lg:mx-auto'
            >
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </Paragraph>
            <Statistics>
              {statistics.map(({ title, icon, description }) => (
                <Statistics.Item title={title} svgIcon={icon} key={title}>
                  {description}
                </Statistics.Item>
              ))}
            </Statistics>
          </div>
        </section>
        <section className='bg-primary-violet py-24 lg:py-14 bg-boost-mobile lg:bg-boost-desktop bg-cover'>
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
    </>
  );
}

export default App;

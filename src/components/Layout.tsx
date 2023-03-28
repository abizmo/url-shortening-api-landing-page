import { PropsWithChildren } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config';

import { sitemap, socials } from '@assets/data';
import { Footer, Header, Link } from '@components';
import { useMediaQuery } from '@hooks';

const { theme } = resolveConfig(tailwindConfig);

function Layout({ children }: PropsWithChildren): JSX.Element {
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
      <main>{children}</main>
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

export default Layout;

import { PropsWithChildren } from 'react';
import { Attribution } from '@components';

function Footer({ children }: PropsWithChildren): JSX.Element {
  return (
    <footer className='bg-neutral-dark-violet text-neutral-white fill-neutral-white'>
      <div className='container mx-auto px-6 py-14 lg:py-20 grid gap-14 justify-items-center lg:flex lg:justify-between lg:items-start'>
        {children}
      </div>
      <Attribution name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </footer>
  );
}

function FooterLogo({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

Footer.Logo = FooterLogo;

function FooterSitemap({ children }: PropsWithChildren) {
  return (
    <div className='grid gap-12 justify-items-center lg:flex-1 lg:flex lg:justify-evenly'>
      {children}
    </div>
  );
}

Footer.Sitemap = FooterSitemap;

function FooterSitemapGroup({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className='text-center lg:text-left'>
      <h2 className='mb-7 text-md font-bold tracking-tight'>{title}</h2>
      <ul className='[&>:not(:last-child)]:mb-4 text-neutral-gray text-md tracking-tightest'>
        {children}
      </ul>
    </div>
  );
}

Footer.SitemapGroup = FooterSitemapGroup;

function FooterSitemapItem({ children }: PropsWithChildren) {
  return <li className='hover:text-primary-cyan'>{children}</li>;
}

Footer.SitemapItem = FooterSitemapItem;

function FooterSocials({ children }: PropsWithChildren) {
  return <div className='flex gap-6 items-center'>{children}</div>;
}

Footer.Socials = FooterSocials;

interface SocialsLinkProps {
  href: string;
}

function FooterSocialsLink({
  href,
  children,
}: PropsWithChildren<SocialsLinkProps>) {
  return (
    <a href={href} className='fill-neutral-white hover:fill-primary-cyan'>
      {children}
    </a>
  );
}

Footer.SocialsLink = FooterSocialsLink;

export default Footer;

import { PropsWithChildren } from 'react';

function Footer({ children }: PropsWithChildren): JSX.Element {
  return (
    <footer className='bg-neutral-dark-violet text-neutral-white fill-neutral-white'>
      <div className='container mx-auto px-6 py-14 lg:py-20 grid gap-14 justify-items-center lg:flex lg:justify-between lg:items-start'>
        {children}
      </div>
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
  alt: string;
  icon: string;
  href: string;
}

function FooterSocialsLink({ alt, icon, href }: SocialsLinkProps) {
  return (
    <a href={href}>
      {/* TODO: change img for svg */}
      <img src={icon} alt={alt} />
    </a>
  );
}

Footer.SocialsLink = FooterSocialsLink;

export default Footer;

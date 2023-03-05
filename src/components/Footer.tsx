interface FooterProps {
  name: string;
  url: string;
}

function Footer({ name, url }: FooterProps): JSX.Element {
  return (
    <footer className='text-xs text-center'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
        className='text-primary-blue'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className='text-primary-blue' href={url}>
        {name}
      </a>
      .
    </footer>
  );
}

export default Footer;

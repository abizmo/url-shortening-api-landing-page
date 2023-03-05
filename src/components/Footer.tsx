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
        className='text-blue-800'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className='text-blue-800' href={url}>
        {name}
      </a>
      .
    </footer>
  );
}

export default Footer;

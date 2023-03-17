interface AttributionProps {
  name: string;
  url: string;
}

function Attribution({ name, url }: AttributionProps): JSX.Element {
  return (
    <footer className='text-xs text-center py-4'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
        className='link'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className='link' href={url}>
        {name}
      </a>
      .
    </footer>
  );
}

export default Attribution;

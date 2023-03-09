interface AttributionProps {
  name: string;
  url: string;
}

function Attribution({ name, url }: AttributionProps): JSX.Element {
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

export default Attribution;

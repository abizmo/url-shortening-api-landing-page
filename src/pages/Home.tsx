import { statistics } from '@assets/data';
import {
  Link,
  Paragraph,
  ShortedLinks,
  ShortenBox,
  Statistics,
  Title,
} from '@components';

function Home(): JSX.Element {
  return (
    <>
      <section className='grid gap-9 lg:grid-cols-2-center lg:items-center lg:gap-0 mb-40 lg:mb-36'>
        <div className='hero-bg' />
        <div className='text-center px-6 lg:col-start-2 lg:row-start-1 lg:text-left'>
          <Title element='h1' className='mb-3 lg:mb-0'>
            More than just shorter links
          </Title>
          <Paragraph size='lg' className='mb-8 lg:mb-9'>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
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
            Track how your links are performing across the web with our advanced
            statistics dashboard.
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
        <Link
          href='/sign-up'
          variant='primary'
          size='medium'
          className='mx-auto text-xl'
        >
          Get Started
        </Link>
      </section>
    </>
  );
}

export default Home;

import { Paragraph, Title } from '@components';
import { PropsWithChildren } from 'react';

function Statistics({ children }: PropsWithChildren): JSX.Element {
  return <ul className='grid gap-20 lg:grid-cols-3 lg:gap-8'>{children}</ul>;
}

interface StatisticsItemProps {
  title: string;
  svgIcon: string;
}

function StatisticsItem({
  title,
  svgIcon,
  children,
}: Readonly<PropsWithChildren<StatisticsItemProps>>): JSX.Element {
  return (
    <li className='[&:not(:last-child)]:relative [&:not(:last-child)]:after:w-2 lg:[&:not(:last-child)]:after:w-8  [&:not(:last-child)]:after:h-10 lg:[&:not(:last-child)]:after:h-2  [&:not(:last-child)]:after:bg-primary-cyan [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-1/2 lg:[&:not(:last-child)]:after:left-full [&:not(:last-child)]:after:-translate-x-1/2 lg:[&:not(:last-child)]:after:translate-x-0 lg:[&:not(:last-child)]:after:top-40 lg:[&:nth-child(2)]:pt-10 lg:[&:nth-child(3)]:pt-20'>
      <div className='bg-neutral-white px-11 rounded-md relative'>
        <div className='bg-primary-violet w-20 h-20 rounded-full absolute -translate-y-1/2 -translate-x-1/2 left-1/2 lg:left-auto lg:-translate-x-0 grid place-content-center'>
          <svg className='w-10 h-10'>
            <use xlinkHref={svgIcon} />
          </svg>
        </div>
        <div className='pt-20 pb-10 text-center lg:text-left'>
          <Title element='h3' className='mb-5'>
            {title}
          </Title>
          <Paragraph size='sm'>{children}</Paragraph>
        </div>
      </div>
    </li>
  );
}

Statistics.Item = StatisticsItem;

export default Statistics;

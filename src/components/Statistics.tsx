import { Paragraph, Title } from '@components';
import { PropsWithChildren } from 'react';

function Statistics({ children }: PropsWithChildren): JSX.Element {
  return <ul className='grid gap-20'>{children}</ul>;
}

interface StatisticsItemProps {
  title: string;
  svgIcon: string;
}

function StatisticsItem({
  title,
  svgIcon,
  children,
}: PropsWithChildren<StatisticsItemProps>): JSX.Element {
  return (
    <li className='[&:not(:last-child)]:relative [&:not(:last-child)]:after:w-2 [&:not(:last-child)]:after:h-10 [&:not(:last-child)]:after:bg-primary-cyan [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-1/2 [&:not(:last-child)]:after:-translate-x-1/2'>
      <div className='bg-neutral-white px-9 rounded-md relative'>
        <div className='bg-primary-violet w-20 h-20 rounded-full absolute -translate-y-1/2 -translate-x-1/2 left-1/2 lg:left-auto lg:-translate-x-0 grid place-content-center'>
          <svg className='w-10 h-10'>
            <use xlinkHref={svgIcon} />
          </svg>
        </div>
        <div className='pt-20 pb-10'>
          <Title element='h3' align='center' className='mb-5'>
            {title}
          </Title>
          <Paragraph align='center' size='sm'>
            {children}
          </Paragraph>
        </div>
      </div>
    </li>
  );
}

Statistics.Item = StatisticsItem;

export default Statistics;

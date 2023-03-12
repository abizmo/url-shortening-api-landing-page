import { PropsWithChildren } from 'react';

// TODO: make variants
interface TitleProps {
  element: 'h1' | 'h2';
}
function Title({ children, element }: PropsWithChildren<TitleProps>) {
  const Element = element;
  return (
    <Element className='text-neutral-dark-violet font-bold text-5xl tracking-tighter mb-3 lg:text-6xl lg:tracking-tightest lg:mb-0'>
      {children}
    </Element>
  );
}
// <h2 className='text-neutral-white text-3xl lg:text-4xl font-bold tracking-tighter mb-6 lg:mb-8 text-center'>

export default Title;

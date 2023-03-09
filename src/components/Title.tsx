import { PropsWithChildren } from 'react';

// TODO: make variants
function Title({ children }: PropsWithChildren) {
  return (
    <h1 className='text-neutral-dark-violet font-bold text-5xl tracking-tighter mb-3 lg:text-6xl lg:tracking-tightest lg:mb-0'>
      {children}
    </h1>
  );
}

export default Title;

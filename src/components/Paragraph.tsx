import { PropsWithChildren } from 'react';

// TODO: make variants
function Paragraph({ children }: PropsWithChildren) {
  return (
    <p className='text-neutral-grayish-violet mb-8 leading-relaxed lg:text-2xl tracking-wide lg:max-w-lg lg:mb-9'>
      {children}
    </p>
  );
}

export default Paragraph;

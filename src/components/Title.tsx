import { cva, VariantProps } from 'class-variance-authority';
import { AllHTMLAttributes } from 'react';

const heading = cva('font-bold tracking-tighter', {
  variants: {
    element: {
      h1: 'text-5xl lg:text-6xl lg:tracking-tightest',
      h2: 'text-3xl lg:text-4xl',
    },
    align: {
      center: 'text-center',
      left: 'text-left',
    },
    color: {
      dark: 'text-neutral-dark-violet',
      light: 'text-neutral-white',
    },
  },
  compoundVariants: [
    {
      element: 'h2',
      color: 'dark',
      className: 'text-neutral-dark-blue',
    },
  ],
  defaultVariants: {
    color: 'dark',
  },
});

interface TitleProps
  extends Omit<AllHTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof heading> {}

// TODO: make variants

function Title({
  element,
  align,
  color,
  className,
  ...props
}: TitleProps): JSX.Element {
  const Element = element as React.ElementType;
  return (
    <Element
      className={heading({ element, align, color, className })}
      {...props}
    >
      {props.children}
    </Element>
  );
}
// <h2 className='mb-6 lg:mb-8'>
// text-neutral-dark-violet font-bold text-5xl tracking-tighter mb-3 lg:text-6xl lg:tracking-tightest lg:mb-0

export default Title;

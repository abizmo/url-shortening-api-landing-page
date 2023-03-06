import { LinkHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('block', {
  variants: {
    variant: {
      text: 'py-2 lg:hover:text-neutral-dark-violet',
      primary:
        'py-4 bg-primary-cyan text-neutral-white rounded-full px-8 lg:hover:bg-opacity-70',
    },
  },
  defaultVariants: {
    variant: 'text',
  },
});

interface LinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof link> {}

function Link({ variant, ...props }: LinkProps): JSX.Element {
  return (
    <a className={link({ variant })} {...props}>
      {props.children}
    </a>
  );
}

export default Link;

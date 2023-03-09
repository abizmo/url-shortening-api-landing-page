import { LinkHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('block text-center font-bold', {
  variants: {
    variant: {
      text: 'py-2 lg:hover:text-neutral-dark-violet',
      primary:
        'py-4 bg-primary-cyan text-neutral-white rounded-full px-8 lg:hover:bg-opacity-70',
    },
    size: {
      normal: 'w-fit',
      full: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'text',
    size: 'normal',
  },
});

interface LinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof link> {}

function Link({ variant, size, className, ...props }: LinkProps): JSX.Element {
  return (
    <a className={link({ variant, size, className })} {...props}>
      {props.children}
    </a>
  );
}

export default Link;

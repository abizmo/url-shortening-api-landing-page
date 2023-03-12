import { LinkHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('block text-center font-bold', {
  variants: {
    variant: {
      text: 'lg:hover:text-neutral-dark-violet',
      primary:
        'bg-primary-cyan text-neutral-white rounded-full lg:hover:bg-opacity-70',
    },
    size: {
      small: 'w-fit py-3 px-6',
      medium: 'w-fit py-4 px-10',
      normal: 'w-fit py-2',
      full: 'w-full py-4',
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

import { AllHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('block text-center font-bold', {
  variants: {
    variant: {
      text: 'lg:hover:text-neutral-dark-violet',
      primary: 'bg-primary-cyan text-neutral-white lg:hover:bg-opacity-70',
    },
    size: {
      small: 'w-fit py-3 px-6',
      medium: 'w-fit py-4 px-10',
      normal: 'w-fit py-2',
      full: 'w-full py-4',
    },
    shape: {
      square: 'rounded',
      rounded: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'text',
    size: 'normal',
    shape: 'rounded',
  },
});

interface LinkProps
  extends Omit<
      AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
      'size' | 'shape'
    >,
    VariantProps<typeof link> {
  submit?: boolean;
}

function Link({
  variant,
  size,
  shape,
  className,
  href,
  submit = false,
  type,
  ...props
}: LinkProps): JSX.Element {
  const classnames = link({ variant, size, shape, className });
  if (href)
    return (
      <a className={classnames} href={href} {...props}>
        {props.children}
      </a>
    );

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={classnames}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Link;

import { cva, VariantProps } from 'class-variance-authority';
import { AllHTMLAttributes } from 'react';

const paragraph = cva(
  'text-neutral-grayish-violet leading-relaxed lg:leading-relaxed tracking-wide',
  {
    variants: {
      align: {
        center: 'text-center',
        left: 'text-left',
      },
      size: {
        lg: 'text-lg lg:text-2xl',
        md: 'text-md lg:text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface ParagraphProps
  extends Omit<AllHTMLAttributes<HTMLParagraphElement>, 'color' | 'size'>,
    VariantProps<typeof paragraph> {}

function Paragraph({
  align,
  className,
  size,
  ...props
}: ParagraphProps): JSX.Element {
  return (
    <p className={paragraph({ align, size, className })} {...props}>
      {props.children}
    </p>
  );
}

export default Paragraph;

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind-config';
import { z, ZodType } from 'zod';

import { Link } from '@components';
import { useLinks, useMediaQuery } from '@hooks';
import { createShortLink, FormData } from '@services';

const { theme } = resolveConfig(tailwindConfig);

const schema: ZodType<FormData> = z.object({
  url: z.string().url({ message: 'Please add a link' }),
});

function ShortenBox(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      url: '',
    },
    resolver: zodResolver(schema),
  });
  const isDesktop = useMediaQuery(`(min-width: ${theme.screens.lg}`);
  const { addLinks } = useLinks();

  const onSubmit = (data: FormData) => {
    createShortLink(data)
      .then((result) =>
        addLinks({
          id: result.code,
          shortedUrl: result.full_short_link,
          url: result.original_link,
        }),
      )
      // eslint-disable-next-line no-alert
      .catch((err) => alert(err));
  };

  const isValidLink = !!errors.url;

  return (
    <form
      className='p-6 bg-primary-violet bg-shorten-mobile lg:bg-shorten-desktop bg-3/4 bg-no-repeat bg-right-top lg:bg-cover rounded-lg lg:px-16 lg:py-14 flex flex-col gap-4 lg:flex-row lg:gap-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`flex-1 relative ${isValidLink ? 'pb-10 lg:pb-0' : ''}`}>
        <input
          type='text'
          placeholder='Shorten a link here...'
          className={`${
            isValidLink
              ? 'border-secondary-red placeholder-secondary-red placeholder-opacity-70 text-secondary-red'
              : 'border-transparent placeholder-neutral-grayish-violet'
          } border-4 rounded p-4 text-md tracking-wide w-full outline-none`}
          {...register('url')}
        />
        {isValidLink && (
          <p className='absolute bottom-3 lg:top-full lg:translate-y-2 italic text-secondary-red'>
            {errors.url?.message}
          </p>
        )}
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        variant='primary'
        size={isDesktop ? 'medium' : 'full'}
        shape='square'
        submit
      >
        Shorten It!
      </Link>
    </form>
  );
}

export default ShortenBox;

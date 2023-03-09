import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import instagramIcon from '../images/icon-instagram.svg';

interface SocialsType {
  alt: string;
  icon: string;
  href: string;
}

const socials: SocialsType[] = [
  {
    alt: 'facebook',
    icon: facebookIcon,
    href: '/',
  },
  {
    alt: 'twitter',
    icon: twitterIcon,
    href: '/',
  },
  {
    alt: 'pinterest',
    icon: pinterestIcon,
    href: '/',
  },
  {
    alt: 'instagram',
    icon: instagramIcon,
    href: '/',
  },
];

export default socials;

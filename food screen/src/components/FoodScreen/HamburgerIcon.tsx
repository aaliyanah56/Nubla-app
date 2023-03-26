import { memo, SVGProps } from 'react';

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_455_540)'>
      <rect width={25} height={25} rx={10} fill='#DADADA' />
      <path
        d='M22.6562 12.5H2.34375C1.72215 12.5 1.12601 12.7469 0.686468 13.1865C0.24693 13.626 0 14.2221 0 14.8438C0 15.4654 0.24693 16.0615 0.686468 16.501C1.12601 16.9406 1.72215 17.1875 2.34375 17.1875H22.6562C23.2779 17.1875 23.874 16.9406 24.3135 16.501C24.7531 16.0615 25 15.4654 25 14.8438C25 14.2221 24.7531 13.626 24.3135 13.1865C23.874 12.7469 23.2779 12.5 22.6562 12.5V12.5ZM23.4375 18.75H1.5625C1.3553 18.75 1.15659 18.8323 1.01007 18.9788C0.86356 19.1253 0.78125 19.324 0.78125 19.5312V20.3125C0.78125 21.1413 1.11049 21.9362 1.69654 22.5222C2.28259 23.1083 3.07745 23.4375 3.90625 23.4375H21.0938C21.9226 23.4375 22.7174 23.1083 23.3035 22.5222C23.8895 21.9362 24.2188 21.1413 24.2188 20.3125V19.5312C24.2188 19.324 24.1364 19.1253 23.9899 18.9788C23.8434 18.8323 23.6447 18.75 23.4375 18.75ZM2.86328 10.9375H22.1367C23.8247 10.9375 24.8037 8.79395 23.8369 7.23242C21.875 4.0625 17.5562 1.56738 12.5 1.5625C7.44434 1.56738 3.125 4.0625 1.16309 7.23193C0.195312 8.79346 1.17529 10.9375 2.86328 10.9375ZM18.75 5.46875C18.9045 5.46875 19.0556 5.51457 19.184 5.60041C19.3125 5.68626 19.4126 5.80827 19.4718 5.95103C19.5309 6.09378 19.5464 6.25087 19.5162 6.40241C19.4861 6.55396 19.4117 6.69317 19.3024 6.80243C19.1932 6.91169 19.054 6.98609 18.9024 7.01624C18.7509 7.04638 18.5938 7.03091 18.451 6.97178C18.3083 6.91265 18.1863 6.81252 18.1004 6.68404C18.0146 6.55556 17.9688 6.40452 17.9688 6.25C17.9688 6.0428 18.0511 5.84409 18.1976 5.69757C18.3441 5.55106 18.5428 5.46875 18.75 5.46875V5.46875ZM12.5 3.90625C12.6545 3.90625 12.8056 3.95207 12.934 4.03791C13.0625 4.12376 13.1626 4.24577 13.2218 4.38853C13.2809 4.53128 13.2964 4.68837 13.2662 4.83991C13.2361 4.99146 13.1617 5.13067 13.0524 5.23993C12.9432 5.34919 12.804 5.42359 12.6524 5.45374C12.5009 5.48388 12.3438 5.46841 12.201 5.40928C12.0583 5.35015 11.9363 5.25002 11.8504 5.12154C11.7646 4.99306 11.7188 4.84202 11.7188 4.6875C11.7188 4.4803 11.8011 4.28159 11.9476 4.13507C12.0941 3.98856 12.2928 3.90625 12.5 3.90625V3.90625ZM6.25 5.46875C6.40452 5.46875 6.55556 5.51457 6.68404 5.60041C6.81252 5.68626 6.91265 5.80827 6.97178 5.95103C7.03091 6.09378 7.04638 6.25087 7.01624 6.40241C6.98609 6.55396 6.91169 6.69317 6.80243 6.80243C6.69317 6.91169 6.55396 6.98609 6.40241 7.01624C6.25087 7.04638 6.09378 7.03091 5.95103 6.97178C5.80827 6.91265 5.68626 6.81252 5.60041 6.68404C5.51457 6.55556 5.46875 6.40452 5.46875 6.25C5.46875 6.0428 5.55106 5.84409 5.69757 5.69757C5.84409 5.55106 6.0428 5.46875 6.25 5.46875V5.46875Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_455_540'>
        <rect width={25} height={25} rx={10} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(HamburgerIcon);
export { Memo as HamburgerIcon };
import { memo, SVGProps } from 'react';

const UserAltIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_456_646)'>
      <path
        d='M11.0919 12.375C14.5158 12.375 17.2936 9.60352 17.2936 6.1875C17.2936 2.77148 14.5158 0 11.0919 0C7.66804 0 4.89018 2.77148 4.89018 6.1875C4.89018 9.60352 7.66804 12.375 11.0919 12.375ZM16.6045 13.75H14.2315C13.2754 14.1883 12.2117 14.4375 11.0919 14.4375C9.97215 14.4375 8.91269 14.1883 7.95228 13.75H5.57926C2.53439 13.75 0.066618 16.2121 0.066618 19.25V19.9375C0.066618 21.0762 0.99257 22 2.13386 22H20.05C21.1912 22 22.1172 21.0762 22.1172 19.9375V19.25C22.1172 16.2121 19.6494 13.75 16.6045 13.75Z'
        fill='black'
      />
    </g>
    <defs>
      <clipPath id='clip0_456_646'>
        <rect width={25.0575} height={25} fill='white' transform='translate(0.066618)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UserAltIcon);
export { Memo as UserAltIcon };

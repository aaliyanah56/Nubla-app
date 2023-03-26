import { memo, SVGProps } from 'react';

const LocationArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_451_393)'>
      <path
        d='M21.7051 0.171867L1.40331 9.54198C-0.938978 10.6352 -0.158216 14.0708 2.34032 14.0708H10.9297V22.6601C10.9297 25.1587 14.3652 25.9399 15.4585 23.5972L24.8286 3.2954C25.6094 1.42089 23.5791 -0.609383 21.7051 0.171867V0.171867Z'
        fill='black'
        fillOpacity={0.58}
      />
    </g>
    <defs>
      <clipPath id='clip0_451_393'>
        <rect width={25} height={25} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(LocationArrowIcon);
export { Memo as LocationArrowIcon };

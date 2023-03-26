import { memo, SVGProps } from 'react';

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_465_1184)'>
      <path
        d='M7.55871 2.37711L5.68175 8.03004L1.48229 8.93947C0.729208 9.10171 0.427399 10.4808 0.97353 11.2707L4.01174 15.6683L3.29315 21.8806C3.1638 23.0035 3.96 23.8446 4.62685 23.3194L8.38365 20.3862L12.1405 23.3194C12.8073 23.8403 13.6035 23.0035 13.4742 21.8806L12.7556 15.6683L15.7938 11.2707C16.3399 10.4808 16.0381 9.10171 15.285 8.93947L11.0856 8.03004L9.2086 2.37711C8.8723 1.36949 7.89788 1.35668 7.55871 2.37711Z'
        fill='#0D3C06'
      />
    </g>
    <defs>
      <clipPath id='clip0_465_1184'>
        <rect width={16.5564} height={24.5928} fill='white' transform='translate(0.105469 0.250854)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(StarIcon);
export { Memo as StarIcon };
